<?php
// Register Custom Post Type Partner
function create_workat_cpt()
{

    $labels = array(
        'name' => _x('Work at', 'Post Type General Name', 'textdomain'),
        'singular_name' => _x('Work at', 'Post Type Singular Name', 'textdomain'),
        'menu_name' => _x('Work at', 'Admin Menu text', 'textdomain'),
        'name_admin_bar' => _x('Work at', 'Add New on Toolbar', 'textdomain'),
        'archives' => __('Work at Archives', 'textdomain'),
        'attributes' => __('Work at Attributes', 'textdomain'),
        'parent_item_colon' => __('Parent Work at:', 'textdomain'),
        'all_items' => __('All Work at', 'textdomain'),
        'add_new_item' => __('Add New Work at', 'textdomain'),
        'add_new' => __('Add New', 'textdomain'),
        'new_item' => __('New Work at', 'textdomain'),
        'edit_item' => __('Edit Work at', 'textdomain'),
        'update_item' => __('Update Work at', 'textdomain'),
        'view_item' => __('View Work at', 'textdomain'),
        'view_items' => __('View Work at', 'textdomain'),
        'search_items' => __('Search Work at', 'textdomain'),
        'not_found' => __('Not found', 'textdomain'),
        'not_found_in_trash' => __('Not found in Trash', 'textdomain'),
        'featured_image' => __('Featured Image', 'textdomain'),
        'set_featured_image' => __('Set featured image', 'textdomain'),
        'remove_featured_image' => __('Remove featured image', 'textdomain'),
        'use_featured_image' => __('Use as featured image', 'textdomain'),
        'insert_into_item' => __('Insert into Work at', 'textdomain'),
        'uploaded_to_this_item' => __('Uploaded to this Work at', 'textdomain'),
        'items_list' => __('Work at list', 'textdomain'),
        'items_list_navigation' => __('Work at list navigation', 'textdomain'),
        'filter_items_list' => __('Filter Work at list', 'textdomain'),
    );
    $args = array(
        'label' => __('Work at', 'textdomain'),
        'description' => __('', 'textdomain'),
        'labels' => $labels,
        'menu_icon' => 'dashicons-groups',
        'supports' => array('title', 'editor', 'thumbnail'),
        'taxonomies' => array(),
        'public' => true,
        'show_ui' => true,
        'show_in_menu' => true,
        'menu_position' => 11,
        'show_in_admin_bar' => true,
        'show_in_nav_menus' => true,
        'can_export' => true,
        'has_archive' => false,
        'hierarchical' => false,
        'exclude_from_search' => false,
        'show_in_rest' => false,
        'publicly_queryable' => false,
        'capability_type' => 'post',
    );
    register_post_type('workat', $args);
}
add_action('init', 'create_workat_cpt', 0);
