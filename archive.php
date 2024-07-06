<?php get_header(); ?>

<?php get_template_part('template-parts/navigation') ?>

<div class="container">
    <h1 class="page-title">
        <?php echo single_term_title(); ?>
    </h1>

    <?php get_template_part('template-parts/tag-list'); ?>

    <div class="post-list">
        <?php while (have_posts()) {
            the_post();
            get_template_part('template-parts/post-card');
        } ?>
    </div>
    <?php the_posts_pagination(); ?>
</div>

<?php get_template_part('template-parts/footer'); ?>

<?php get_footer() ?>