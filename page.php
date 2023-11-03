<?php get_header(); ?>

<?php get_template_part('template-parts/navigation') ?>


<?php

while (have_posts()) {
    the_post();
    the_content();
}
?>


<?php get_template_part('template-parts/footer'); ?>

<?php get_footer() ?>