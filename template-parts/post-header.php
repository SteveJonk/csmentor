<div class="post-header">
    <?php if (function_exists('yoast_breadcrumb')) {
        yoast_breadcrumb('<p id="breadcrumbs" class="post-header__breadcrumbs">', '</p>');
    } ?>
    <img class="post-header__image" alt="header for <?php the_title(); ?>"
        src="<?php echo get_the_post_thumbnail_url(null, 'header'); ?>" />

    <h1 class="post-header__title"><?php the_title(); ?></h1>


</div>