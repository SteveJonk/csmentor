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
        <button class="glide__arrow glide__arrow--left" data-glide-dir="<"><i
                class="fa-solid fa-angle-left"></i></button>
        <button class="glide__arrow glide__arrow--right" data-glide-dir=">"><i
                class="fa-solid fa-angle-right"></i></button>
    </div>
</div>

<?php return ob_get_clean();
}

add_shortcode('testimonial_slider', 'testimonial_slider_function');

?>