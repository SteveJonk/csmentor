<?php

function ourHeaderURL()
{
    return esc_url(site_url('/'));
}

add_filter('login_headerurl', 'ourHeaderURL');

function customLoginCss()
{
    wp_enqueue_style('theme_main_css', get_stylesheet_uri());
}

add_action('login_enqueue_scripts', 'customLoginCss');

// TODO: Later functionaliteit toevoegen om een widget te tonen op de login pagina
// function loginHeader()
// {
//     echo '<h1>Heyy</h1>';
// }

// add_action('login_header', 'loginHeader', 500);

add_filter('login_display_language_dropdown', '__return_false');
