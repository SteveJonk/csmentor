<?php get_header(); ?>

<div class="header">
    <div class="container">
        <a class="header__logo" href="<?php echo home_url() ?>"><img src="<?php echo get_theme_mod('navbar_logo'); ?>" type="image/x-icon" alt="header logo"></a>
        <div class="header__cta hide-mobile">
            <?php
            if (is_active_sidebar('header-cta')) {
                dynamic_sidebar('header-cta');
            }
            ?>
        </div>
    </div>
</div>


<?php

while (have_posts()) {
    the_post();
    the_content();
}
?>


<div class="footer">
    <div class="container">
        <a id="scrollToTop" class="footer__scroll"><svg width="18" height="12" viewBox="0 0 18 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8.89551 0L17.791 9.97636L16.5456 11.373L8.89551 2.79338L1.24537 11.373L0 9.97636L8.89551 0Z" fill="inherit" />
            </svg></a>
    </div>
    <?php
    if (is_active_sidebar('footer')) {
        dynamic_sidebar('footer');
    }
    ?>
</div>

<?php get_footer() ?>