<?php

function mentor_grid_function($atts)
{

    add_filter('pre_user_query', function (&$query) {
        if ($query->query_vars["orderby"] == 'rand') {
            $query->query_orderby = 'ORDER by RAND()';
        }
    });

    $args  = array(
        'number' => 20,
        'orderby' => 'rand',
        'meta_query' => array(
            array(
                'key' => 'is_mentor',
                'value' => true,
                'compare' => 'LIKE',
            ),
            array(
                'key' => 'profile_picture',
                'value'   => array(''),
                'compare' => 'NOT IN'
            )
        )
    );

    // Create the WP_User_Query object
    $wp_query = new WP_User_Query($args);

    // Get the results
    $mentors = $wp_query->get_results();

    ob_start(); ?>

<div class="mentor-grid">
    <?php
        if ($mentors) {
            foreach ($mentors as $mentor) {
                $profile_picture = get_field('profile_picture', 'user_' . $mentor->ID);
                $job = get_field('job', 'user_' . $mentor->ID);
                $profile_picture_url = $profile_picture['sizes']['thumbnail'];

        ?>
    <div class="mentor-grid__card">
        <a href="/mentorfinder">
            <img src="<?php echo $profile_picture_url; ?>" alt="<?php echo esc_attr($profile_picture['alt']); ?>" />
            <p class="mentor-grid__name"><?php echo $job; ?></p>
        </a>
    </div>
    <?php }
        } else {
            echo '<h2>No mentors found</h2>';
        } ?>
</div>
<?php return ob_get_clean();
    wp_reset_postdata();
}

add_shortcode('mentor_grid', 'mentor_grid_function');

?>