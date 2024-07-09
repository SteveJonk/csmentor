<div class="header">
    <div class="container">
        <a class="header__logo" href="<?php echo home_url() ?>"><img src="<?php echo get_theme_mod('navbar_logo'); ?>" type="image/x-icon" alt="header logo"></a>
        <nav class="header__nav js-menu">


            <?php /* Primary navigation */
            wp_nav_menu(
                array(
                    'theme_location' => 'headerMenuLocation',
                    'depth' => 2,
                    'container' => true,
                    'before' => '',
                    'after' => '',
                )
            );
            ?>
        </nav>
        <div class="header__cta hide-tablet">
            <?php
            if (is_active_sidebar('header-cta')) {
                dynamic_sidebar('header-cta');
            }
            ?>
        </div>
        <div id="js-menu-toggle" class="header__hamburger tablet-mobile-only">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                <path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z" />
            </svg>
        </div>
    </div>
</div>