<?php

// Exit if accessed directly
if (!defined('ABSPATH'))
    exit;

// Include needed functions
include "inc/inc.js.php";
include "inc/api-mods.php";
include "inc/login-screen.php";
include "inc/navbar.php";
include "inc/sidebars.php";
include "inc/custom-block-styles.php";
include "inc/react-components.php";
include "inc/custom-post-types/galleries.php";
include "inc/custom-post-types/testimonials.php";
include "inc/components/testimonial-slider.php";
include "inc/components/gallery-slider.php";


function theme_features()
{

    add_theme_support('woocommerce');
    add_theme_support('wp-block-styles');

    register_nav_menu('headerMenuLocation', 'Header Menu Location');

    add_theme_support('title-tag');
    add_theme_support('post-thumbnails');
    add_post_type_support('post', 'page-attributes');
};


add_action('after_setup_theme', 'theme_features');

// Later added functions
// Remove admin toolbar for non-admins
function remove_admin_bar()
{
    if (!current_user_can('administrator') && !is_admin()) {
        show_admin_bar(false);
    }
}

add_action('after_setup_theme', 'remove_admin_bar');
