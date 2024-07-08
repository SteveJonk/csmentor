<?php

function partner_slider_function($atts)
{

    extract(shortcode_atts(array(
        'items' => -1
    ), $atts));

    $post = new WP_Query(array(
        'posts_per_page' => $items,
        'post_type' => 'partner',
        'orderby' => 'rand',
        'order' => 'ASC'
    ));

    ob_start(); ?>

<div id="partner-slider" class="glide">
    <div class="glide__track" data-glide-el="track">
        <ul class="glide__slides">
            <?php
                while ($post->have_posts()) {
                    $post->the_post();
                ?>
            <li class="glide__slide">
                <a href="<?php echo wp_strip_all_tags(get_the_content()); ?>">
                    <img src="<?php echo get_the_post_thumbnail_url(); ?>" height=40 />
                </a>
                <?php } ?>
            </li>
        </ul>
    </div>
</div>

<?php return ob_get_clean();
    wp_reset_postdata();
}

add_shortcode('partner_slider', 'partner_slider_function');

?>