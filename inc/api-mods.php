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