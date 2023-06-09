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

// Login user after registration
function auto_login_new_user($user_id)
{
    wp_set_current_user($user_id);
    wp_set_auth_cookie($user_id);
    wp_redirect('https://customersuccesssnack.com/mentorfinder/');
    exit();
}
add_action('user_register', 'auto_login_new_user');
