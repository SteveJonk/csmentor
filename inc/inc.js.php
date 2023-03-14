<?php

function theme_resources()
{
    wp_enqueue_script('main-js', get_theme_file_uri('/dist/scripts.js'), NULL, '1.0.0', true);
    wp_enqueue_style('theme_main_css', get_stylesheet_uri(), NULL, '1.0.0');
    setlocale(LC_ALL, 'nl_NL');
}

add_action('wp_enqueue_scripts', 'theme_resources');