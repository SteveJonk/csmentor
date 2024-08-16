<?php

add_action('wp_ajax_get_events', 'wp_ajax_get_events_action');
add_action('wp_ajax_nopriv_get_events', 'wp_ajax_get_events_action');

function wp_ajax_get_events_action()
{

    $curlHandler = curl_init();
    $today = time();
    curl_setopt($curlHandler, CURLOPT_URL, 'https://api.tickettailor.com/v1/events?limit=10000&start_at.gte=' . $today);
    curl_setopt($curlHandler, CURLOPT_USERPWD, 'sk_5710_149004_cf5b71236e84705c6c3266c697b6f2d4:');
    curl_setopt($curlHandler, CURLOPT_RETURNTRANSFER, true);
    curl_setopt($curlHandler, CURLOPT_HEADER, true);

    $response = curl_exec($curlHandler);

    if ($response === false) {
        $error_message = curl_error($curlHandler);
        curl_close($curlHandler);
        wp_send_json_error('CURL Error: ' . $error_message);
        wp_die();
    }

    $http_code = curl_getinfo($curlHandler, CURLINFO_HTTP_CODE);
    $header_size = curl_getinfo($curlHandler, CURLINFO_HEADER_SIZE);
    curl_close($curlHandler);

    $body = substr($response, $header_size);
    $jsonBody = json_decode($body);

    if ($http_code === 200 || !empty($jsonBody)) {
        wp_send_json_success($jsonBody->data);
    } else {
        wp_send_json_error('Request failed with status code ' . $http_code);
    }

    wp_die();
}
