<?php

function mentor_finder()
{
    ob_start(); ?>

    <div id="mentor-finder"></div>

<?php echo  ob_get_clean();
}

add_shortcode('MentorFinder', 'mentor_finder');
