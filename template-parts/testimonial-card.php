<div class="testimonial-grid__card">
    <div class="testimonial-grid__card__left">
        <img class="testimonial-grid__card__profile-pic" src="<?php echo get_the_post_thumbnail_url($post, 'thumbnail'); ?>" />
    </div>
    <div class="testimonial-grid__card__right">
        <h4>
            <?php echo get_the_title(); ?></h4>
        <h4 class="testimonial-grid__card__right__subtitle">
            <?php the_field('role'); ?></h4>
        <?php echo get_the_content(); ?>
    </div>
</div>