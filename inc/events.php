<?php

/**
 * Upcoming Ticket Tailor events sorted by start date, cached for 15 minutes.
 * Needs define('TICKET_TAILOR_API_KEY', 'sk_...'); in wp-config.php.
 * Returns null when the events could not be retrieved.
 */
function cs_get_events()
{
    $events = get_transient('cs_events');
    if ($events !== false) {
        return $events;
    }

    if (!defined('TICKET_TAILOR_API_KEY')) {
        error_log('Ticket Tailor: TICKET_TAILOR_API_KEY is not defined in wp-config.php');
        return null;
    }

    $response = wp_remote_get('https://api.tickettailor.com/v1/events?limit=10000&start_at.gte=' . time(), array(
        'headers' => array('Authorization' => 'Basic ' . base64_encode(TICKET_TAILOR_API_KEY . ':')),
        'timeout' => 10,
    ));
    $body = json_decode(wp_remote_retrieve_body($response), true);

    if (is_wp_error($response) || wp_remote_retrieve_response_code($response) !== 200 || !isset($body['data'])) {
        error_log('Ticket Tailor: request failed ' . (is_wp_error($response) ? $response->get_error_message() : wp_remote_retrieve_response_code($response)));
        return null;
    }

    $events = $body['data'];
    usort($events, function ($a, $b) {
        return $a['start']['unix'] - $b['start']['unix'];
    });
    set_transient('cs_events', $events, 15 * MINUTE_IN_SECONDS);

    return $events;
}

/**
 * schema.org Event for Google's event rich results.
 */
function cs_event_json_ld($event)
{
    $online = ($event['online_event'] ?? '') === 'true';
    $data = array(
        '@context' => 'https://schema.org',
        '@type' => 'Event',
        'name' => $event['name'],
        'description' => wp_strip_all_tags($event['description'] ?? ''),
        'image' => $event['images']['header'] ?? $event['images']['thumbnail'] ?? null,
        'url' => $event['url'],
        'startDate' => $event['start']['iso'],
        'endDate' => $event['end']['iso'] ?? null,
        'eventStatus' => 'https://schema.org/EventScheduled',
        'eventAttendanceMode' => $online ? 'https://schema.org/OnlineEventAttendanceMode' : 'https://schema.org/OfflineEventAttendanceMode',
        'location' => $online
            ? array('@type' => 'VirtualLocation', 'url' => $event['url'])
            : array(
                '@type' => 'Place',
                'name' => $event['venue']['name'] ?? null,
                'address' => array('@type' => 'PostalAddress', 'postalCode' => $event['venue']['postal_code'] ?? null),
            ),
    );

    // Ticket Tailor prices are in cents
    $prices = array_column($event['ticket_types'] ?? array(), 'price');
    if ($prices) {
        $data['offers'] = array(
            '@type' => 'Offer',
            'url' => $event['url'],
            'price' => min($prices) / 100,
            'priceCurrency' => strtoupper($event['currency'] ?? ''),
            'availability' => ($event['call_to_action'] ?? '') === 'Sold out' ? 'https://schema.org/SoldOut' : 'https://schema.org/InStock',
        );
    }

    return $data;
}

/**
 * Renders the events in the page source for SEO. The React app (ts/events) takes over
 * #events on load with the same markup plus filters, reading its data from #events-data.
 */
function events()
{
    $events = cs_get_events();

    // Only what the React app needs, so order counts etc. don't end up in the page source
    $props = $events === null ? null : array_map(function ($event) {
        return array(
            'name' => $event['name'],
            'url' => $event['url'],
            'call_to_action' => $event['call_to_action'] ?? null,
            'start' => array('formatted' => $event['start']['formatted'], 'unix' => $event['start']['unix']),
            'venue' => array('name' => $event['venue']['name'] ?? null),
            'images' => array('thumbnail' => $event['images']['thumbnail'] ?? ''),
        );
    }, $events);

    ob_start(); ?>

    <div style="min-height: 200px;" id="events">
        <?php if ($events === null) { ?>
            <h2 style="text-align: center;">Something went wrong while retrieving events</h2>
        <?php } elseif (empty($events)) { ?>
            <h2 style="text-align: center;">No events found</h2>
        <?php } else { ?>
            <div class="event-list">
                <?php foreach ($props as $event) { ?>
                    <div class="event-card">
                        <img class="event-card__image" height="222" width="222" src="<?php echo esc_url(preg_replace('#/c_scale,[^/]+#', '', $event['images']['thumbnail'])); ?>" alt="<?php echo esc_attr($event['name']); ?>">
                        <div class="event-card__info">
                            <h2><?php echo esc_html($event['name']); ?></h2>
                            <div class="event-card__info__datelocation">
                                <p>
                                    <img src="<?php echo get_theme_file_uri('assets/icons/calendar.svg'); ?>" width="18" height="20" alt="">
                                    <?php echo esc_html($event['start']['formatted']); ?>
                                </p>
                                <?php if ($event['venue']['name']) { ?>
                                    <p>
                                        <img src="<?php echo get_theme_file_uri('assets/icons/location.svg'); ?>" width="16" height="20" alt="">
                                        <?php echo esc_html($event['venue']['name']); ?>
                                    </p>
                                <?php } ?>
                            </div>
                        </div>
                        <a class="event-card__button" href="<?php echo esc_url($event['url']); ?>" target="_blank"><?php echo esc_html($event['call_to_action'] ?: 'Buy tickets'); ?></a>
                    </div>
                <?php } ?>
            </div>
        <?php } ?>
    </div>

    <script type="application/json" id="events-data"><?php echo wp_json_encode($props, JSON_HEX_TAG | JSON_HEX_AMP); ?></script>

    <?php if ($events) { ?>
        <script type="application/ld+json"><?php echo wp_json_encode(array_map('cs_event_json_ld', $events), JSON_HEX_TAG | JSON_HEX_AMP | JSON_UNESCAPED_SLASHES); ?></script>
    <?php } ?>

<?php return ob_get_clean();
}

add_shortcode('events', 'events');
