<?php

function mentor_finder()
{
    ob_start(); ?>

    <div id="mentor-finder"></div>

<?php return  ob_get_clean();
}

add_shortcode('MentorFinder', 'mentor_finder');
