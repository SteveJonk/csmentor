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
include "inc/custom-post-types/partners.php";
include "inc/custom-post-types/testimonials.php";
include "inc/components/testimonial-grid.php";
include "inc/components/testimonial-slider.php";
include "inc/components/partner-slider.php";
include "inc/components/gallery-slider.php";
include "inc/components/mentor-grid.php";
include "inc/woocommerce/product-list-page.php";
include "inc/woocommerce/product-detail-page.php";
include "inc/woocommerce/account.php";


function theme_features()
{

    add_theme_support('woocommerce');
    add_theme_support('wp-block-styles');

    register_nav_menu('headerMenuLocation', 'Header Menu Location');

    add_theme_support('title-tag');
    add_theme_support('post-thumbnails');
    add_post_type_support('post', 'page-attributes');

    add_theme_support("appearance-tools");
    add_theme_support("align-wide");
    add_theme_support("editor-styles");
    add_editor_style("editor.css");

    add_image_size('header', 1280, 0);
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

add_theme_support('admin-bar', array('callback' => '__return_false'));

/**
 * Hide shipping rates when free shipping is available, but keep "Local pickup" 
 * Updated to support WooCommerce 2.6 Shipping Zones
 */

function hide_shipping_when_free_is_available($rates, $package)
{
    $new_rates = array();
    foreach ($rates as $rate_id => $rate) {
        // Only modify rates if free_shipping is present.
        if ('free_shipping' === $rate->method_id) {
            $new_rates[$rate_id] = $rate;
            break;
        }
    }

    if (!empty($new_rates)) {
        //Save local pickup if it's present.
        foreach ($rates as $rate_id => $rate) {
            if ('local_pickup' === $rate->method_id) {
                $new_rates[$rate_id] = $rate;
                break;
            }
        }
        return $new_rates;
    }

    return $rates;
}

add_filter('woocommerce_package_rates', 'hide_shipping_when_free_is_available', 10, 2);

/**
 * Prevent update notification for plugin
 * http://www.thecreativedev.com/disable-updates-for-specific-plugin-in-wordpress/
 * Place in theme functions.php or at bottom of wp-config.php
 */
function disable_plugin_updates($value)
{

    $pluginsToDisable = [
        'advanced-custom-fields/acf.php',
    ];

    if (isset($value) && is_object($value)) {
        foreach ($pluginsToDisable as $plugin) {
            if (isset($value->response[$plugin])) {
                unset($value->response[$plugin]);
            }
        }
    }
    return $value;
}
add_filter('site_transient_update_plugins', 'disable_plugin_updates');
