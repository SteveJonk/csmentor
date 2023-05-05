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
    $specialisations = $request->get_param('specialisations');
    $seniority_level = $request->get_param('seniority_level');
    $years_of_experience = $request->get_param('years_of_experience');
    $cs_skills = $request->get_param('cs_skills');
    $languages = $request->get_param('languages');
    $extra_skills = $request->get_param('extra_skills');

    $args['meta_query'] = array(
        array(
            'key'     => 'is_mentor',
            'value'   => '1',
            'compare' => '=',
        )
    );

    if (!empty($specialisations)) {
        $args['meta_query'] = array(
            array(
                'key'     => 'company',
                'value'   => $specialisations,
                'compare' => '=',
            )
        );
    }

    if (!empty($seniority_level)) {
        $args['meta_query'] = array(
            array(
                'key'     => 'company',
                'value'   => $seniority_level,
                'compare' => '=',
            )
        );
    }

    if (!empty($years_of_experience)) {
        $args['meta_query'] = array(
            array(
                'key'     => 'company',
                'value'   => $years_of_experience,
                'compare' => '=',
            )
        );
    }

    if (!empty($cs_skills)) {
        $args['meta_query'] = array(
            array(
                'key'     => 'company',
                'value'   => $cs_skills,
                'compare' => '=',
            )
        );
    }

    if (!empty($languages)) {
        $args['meta_query'] = array(
            array(
                'key'     => 'company',
                'value'   => $languages,
                'compare' => '=',
            )
        );
    }

    if (!empty($extra_skills)) {
        $args['meta_query'] = array(
            array(
                'key'     => 'company',
                'value'   => $extra_skills,
                'compare' => '=',
            )
        );
    }

    return $args;
}, 10, 2);
