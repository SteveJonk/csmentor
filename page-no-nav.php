<?php
/*
 * Template Name: No navbar
 * description: >-
  Page template without navbar
 */

get_header(); ?>

<?php

while (have_posts()) {
    the_post();
    the_content();
}
?>

<?php get_footer() ?>