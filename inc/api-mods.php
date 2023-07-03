<?php

add_filter('rest_user_query', 'prefix_remove_has_published_posts_from_wp_api_user_query', 10, 2);
/**
 * Removes `has_published_posts` from the query args so even users who have not
 * published content are returned by the request.
 *
 * @see https://developer.wordpress.org/reference/classes/wp_user_query/
 *
 * @param array           $prepared_args Array of arguments for WP_User_Query.
 * @param WP_REST_Request $request       The current request.
 *
 * @return array
 */
function prefix_remove_has_published_posts_from_wp_api_user_query($prepared_args, $request)
{
    unset($prepared_args['has_published_posts']);

    return $prepared_args;
}

/**
 * Extra user fields below
 */

if (is_user_logged_in()) {
    register_rest_field(
        'user',
        'user_email',
        [
            'get_callback' => static function (array $user): string {
                return get_userdata($user['id'])->user_email;
            },
        ]
    );
}

/**
 * ACF Fields search
 */

add_filter('rest_user_query', function ($args, $request) {
    $args['meta_query'] = array(
        array(
            'key'     => 'is_mentor',
            'value'   => '1',
            'compare' => '=',
        )
    );

    return $args;
}, 10, 2);

add_filter('rest_user_query', function ($args) {

    $ignore = array('page', 'per_page', 'search', 'order', 'orderby', 'slug', 'acf_format', 'name');
    $filters = array('name', 'country', 'languages', 'seniority_level', 'specialisations', 'cs_skills', 'years_of_experience', 'extra_skills');

    foreach ($_GET as $key => $value) {
        if (!in_array($key, $ignore) && in_array($key, $filters)) {
            $args['meta_query'][] = array(
                'key'   => $key,
                'value' => $value,
                'compare' => 'LIKE'
            );
        }
    }

    return $args;
}, 15, 2);

// Allow contributors to upload media
function add_custom_capability_to_editor_role()
{

    $contributor = get_role('contributor');
    $contributor->add_cap('upload_files');
}

add_action('init', 'add_custom_capability_to_editor_role');
