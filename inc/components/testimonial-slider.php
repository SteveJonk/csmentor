<?php

function testimonial_slider_function($atts)
{

    extract(shortcode_atts(array(
        'items' => 9
    ), $atts));

    $post = new WP_Query(array(
        'posts_per_page' => $items,
        'post_type' => 'testimonial',
        'orderby' => 'menu_order',
        'order' => 'ASC'
    ));

    ob_start(); ?>

    <div id="testimonial-slider" class="glide">
        <div class="glide__track" data-glide-el="track">
            <ul class="glide__slides">
                <?php
                while ($post->have_posts()) {
                    $post->the_post();
                    get_template_part('template-parts/testimonial-slide');
                }
                wp_reset_postdata(); ?>
            </ul>
        </div>
        <div class="glide__arrows" data-glide-el="controls">
            <button class="glide__arrow glide__arrow--left" data-glide-dir="<"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
                    <path d="M41.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 256 246.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z" />
                </svg></button>
            <button class="glide__arrow glide__arrow--right" data-glide-dir=">"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
                    <path d="M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z" />
                </svg></button>
        </div>
        <div class="glide__bullets" data-glide-el="controls[nav]"></div>
    </div>

<?php return ob_get_clean();
}

add_shortcode('testimonial_slider', 'testimonial_slider_function');

?>