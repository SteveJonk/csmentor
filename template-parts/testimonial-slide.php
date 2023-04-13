<li class="glide__slide">
    <div class="glide__slide__inner">
        <img class="glide__slide__image" src="<?php echo get_the_post_thumbnail_url($post, 'slider'); ?>">
        <div class="glide__slide__content">
            <?php echo get_the_content(); ?>
        </div>
    </div>
</li>