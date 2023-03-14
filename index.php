<?php get_header(); ?>

<?php

while (have_posts()) {
    the_post();
    the_content();
}
?>

<div id="test"></div>

<?php get_footer() ?>