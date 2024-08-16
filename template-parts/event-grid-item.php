<a class="event-grid__item" href="<?php echo wp_strip_all_tags(get_the_content()); ?>" target="_blank">
    <div class="event-grid__item__background">
        <img src="<?php echo get_the_post_thumbnail_url($post, 'large'); ?>">
    </div>

    <div class="event-grid__item__content">
        <p class="event-grid__item__content__button">
            <?php if (get_field('button_text')) {
                echo get_field('button_text');
            } else {
                echo 'Download';
            } ?>
        </p>
        <h3 class="event-grid__item__content__title"><?php the_title(); ?></h3>
    </div>
</a>