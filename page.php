<?php get_header(); ?>

<div class="header">
    <div class="container">
        <a class="header__logo" href="<?php echo home_url() ?>"><img src="<?php echo get_theme_mod('navbar_logo'); ?>"
                type="image/x-icon" alt="header logo"></a>
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
    <?php
    if (is_active_sidebar('footer')) {
        dynamic_sidebar('footer');
    }
    ?>
</div>

<?php get_footer() ?>