<?php get_header(); ?>

<?php get_template_part('template-parts/navigation') ?>

<div class="container">
    <?php while (have_posts()) {
        the_post();
        get_template_part('template-parts/post-header');
        the_content();

        $related = get_posts(array(
            'category__in' => wp_get_post_categories($post->ID),
            'numberposts' => 4,
            'post__not_in' => array($post->ID)
        )); ?>
    <section class="related-posts">
        <h2>Related posts</h2>
        <div class="post-list">
            <?php
                if ($related) foreach ($related as $post) {
                    setup_postdata($post);
                    get_template_part('template-parts/post-card');
                }
                wp_reset_postdata(); ?>
        </div>
    </section>
    <?php } ?>
</div>

<?php get_template_part('template-parts/footer'); ?>

<?php get_footer() ?>