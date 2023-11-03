<?php get_header(); ?>

<?php get_template_part('template-parts/navigation') ?>

<div class="container">
    <br />

    <?php while (have_posts()) {
        the_post(); ?>

    <h1><?php the_title(); ?></h1>

    <?php
        the_content();
    }
    ?>

</div>
<?php get_template_part('template-parts/footer'); ?>

<?php get_footer() ?>