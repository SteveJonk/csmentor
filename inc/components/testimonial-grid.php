<?php

function testimonial_grid_function($atts)
{

    extract(shortcode_atts(array(
        'items' => 6
    ), $atts));

    $post = new WP_Query(array(
        'posts_per_page' => $items,
        'post_type' => 'testimonial',
        'orderby' => 'rand',
        'order' => 'ASC'
    ));

    ob_start(); ?>

    <div class="testimonial-grid">
        <?php
        while ($post->have_posts()) {
            $post->the_post();
            get_template_part('template-parts/testimonial-card');
        }
        wp_reset_postdata(); ?>
    </div>

<?php return ob_get_clean();
}

add_shortcode('testimonial_grid', 'testimonial_grid_function');

?>