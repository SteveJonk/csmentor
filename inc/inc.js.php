<?php

function theme_resources()
{
    wp_enqueue_script('api', get_theme_file_uri('wpApiSettings.js'), NULL, '1.0.1', false);

    wp_enqueue_script('main-js', get_theme_file_uri('/dist/scripts.js'), NULL, '1.0.12', true);
    wp_enqueue_style('theme_main_css', get_stylesheet_uri(), NULL, '1.0.10');

    wp_localize_script('api', 'wpApiSettings', array(
        'nonce' => wp_create_nonce('wp_rest'),
        'themeFolder' => get_template_directory_uri(),
        'userLoggedIn' => is_user_logged_in()
    ));

    setlocale(LC_ALL, 'nl_NL');
}

add_action('wp_enqueue_scripts', 'theme_resources');
