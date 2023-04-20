<?php
// Register Custom Post Type Gallery
function create_gallery_cpt()
{

    $labels = array(
        'name' => _x('Galleries', 'Post Type General Name', 'textdomain'),
        'singular_name' => _x('Gallery', 'Post Type Singular Name', 'textdomain'),
        'menu_name' => _x('Galleries', 'Admin Menu text', 'textdomain'),
        'name_admin_bar' => _x('Gallery', 'Add New on Toolbar', 'textdomain'),
        'archives' => __('Gallery Archives', 'textdomain'),
        'attributes' => __('Gallery Attributes', 'textdomain'),
        'parent_item_colon' => __('Parent Gallery:', 'textdomain'),
        'all_items' => __('All Galleries', 'textdomain'),
        'add_new_item' => __('Add New Gallery', 'textdomain'),
        'add_new' => __('Add New', 'textdomain'),
        'new_item' => __('New Gallery', 'textdomain'),
        'edit_item' => __('Edit Gallery', 'textdomain'),
        'update_item' => __('Update Gallery', 'textdomain'),
        'view_item' => __('View Gallery', 'textdomain'),
        'view_items' => __('View Galleries', 'textdomain'),
        'search_items' => __('Search Gallery', 'textdomain'),
        'not_found' => __('Not found', 'textdomain'),
        'not_found_in_trash' => __('Not found in Trash', 'textdomain'),
        'featured_image' => __('Featured Image', 'textdomain'),
        'set_featured_image' => __('Set featured image', 'textdomain'),
        'remove_featured_image' => __('Remove featured image', 'textdomain'),
        'use_featured_image' => __('Use as featured image', 'textdomain'),
        'insert_into_item' => __('Insert into Gallery', 'textdomain'),
        'uploaded_to_this_item' => __('Uploaded to this Gallery', 'textdomain'),
        'items_list' => __('Galleries list', 'textdomain'),
        'items_list_navigation' => __('Galleries list navigation', 'textdomain'),
        'filter_items_list' => __('Filter Galleries list', 'textdomain'),
    );
    $args = array(
        'label' => __('Gallery', 'textdomain'),
        'description' => __('', 'textdomain'),
        'labels' => $labels,
        'menu_icon' => 'dashicons-images-alt2',
        'supports' => array('title', 'editor', 'thumbnail'),
        'taxonomies' => array(),
        'public' => true,
        'show_ui' => true,
        'show_in_menu' => true,
        'menu_position' => 10,
        'show_in_admin_bar' => true,
        'show_in_nav_menus' => true,
        'can_export' => true,
        'has_archive' => false,
        'hierarchical' => false,
        'exclude_from_search' => false,
        'show_in_rest' => true,
        'publicly_queryable' => false,
        'capability_type' => 'post',
    );
    register_post_type('gallery', $args);
}
add_action('init', 'create_gallery_cpt', 0);
