<?php

function ourHeaderURL()
{
    return esc_url(site_url('/'));
}

add_filter('login_headerurl', 'ourHeaderURL');

function customLoginCss()
{
    wp_enqueue_style('theme_main_css', get_stylesheet_uri());
}

add_action('login_enqueue_scripts', 'customLoginCss');

// Login user after registration
function auto_login_new_user($user_id)
{
    wp_set_current_user($user_id);
    wp_set_auth_cookie($user_id);
    wp_redirect('https://customersuccesssnack.com/mentorfinder/');
    exit();
}
add_action('user_register', 'auto_login_new_user');

function add_gtm_to_login() {
    ?>
    <!-- Google Tag Manager -->
	<script async="" src="https://www.googletagmanager.com/gtm.js?id=GTM-TWDMB9Z"></script>

    <script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
    new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
    j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
    'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
    })(window,document,'script','dataLayer','GTM-TWDMB9Z');</script>

	<noscript>
		<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-TWDMB9Z" height="0" width="0" style="display:none;visibility:hidden"></iframe>
	</noscript>

	<script type="text/javascript" src="https://www.googletagmanager.com/gtag/js?id=UA-257577551-1" id="google_gtagjs-js" async=""></script>
	<script type="text/javascript" id="google_gtagjs-js-after">
		/* <![CDATA[ */
		window.dataLayer = window.dataLayer || [];function gtag(){dataLayer.push(arguments);}
		gtag('set', 'linker', {"domains":["customersuccesssnack.com"]} );
		gtag("js", new Date());
		gtag("set", "developer_id.dZTNiMT", true);
		gtag("config", "UA-257577551-1", {"anonymize_ip":true});
		gtag("config", "GT-TNLH9QK");
		/* ]]> */
	</script>

    <!-- End Google Tag Manager -->
    <?php
}

add_action('login_head', 'add_gtm_to_login');