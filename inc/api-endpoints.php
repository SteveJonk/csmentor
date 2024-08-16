<?php

add_action('wp_ajax_get_events', 'wp_ajax_get_events_action');
add_action('wp_ajax_nopriv_get_events', 'wp_ajax_get_events_action');

function wp_ajax_get_events_action()
{

    $curlHandler = curl_init();
    curl_setopt($curlHandler, CURLOPT_URL, 'https://api.tickettailor.com/v1/orders');
    curl_setopt($curlHandler, CURLOPT_USERPWD, 'sk_5710_149004_cf5b71236e84705c6c3266c697b6f2d4:');
    $result = curl_exec($curlHandler);
    curl_close($curlHandler);

    // wp_send_json_success($result);
    /** @noinspection ForgottenDebugOutputInspection */
    wp_die();
}
