<?php

function event_grid_function($atts)
{

    extract(shortcode_atts(array(
        'items' => 4
    ), $atts));

    $post = new WP_Query(array(
        'posts_per_page' => $items,
        'post_type' => 'gallery',
        'orderby' => 'menu_order',
        'order' => 'ASC'
    ));

    ob_start(); ?>

    <div id="event-grid" class="event-grid">
        <?php
        while ($post->have_posts()) {
            $post->the_post();
            get_template_part('template-parts/event-grid-item');
        }
        wp_reset_postdata(); ?>
    </div>

<?php return ob_get_clean();
}

add_shortcode('event_grid', 'event_grid_function');

?>