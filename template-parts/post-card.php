<div class="post-card">
    <a class="post-card__link" href=" <?php the_permalink() ?>" rel="bookmark" title="<?php the_title(); ?>">
        <img class="post-card__link__image" alt="image for <?php the_title(); ?>" src="<?php echo get_the_post_thumbnail_url(null, 'thumbnail') ?>" />
        <h4 class="post-card__link__title"><?php the_title(); ?></h4>
    </a>
</div>