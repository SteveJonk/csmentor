<div class="footer">
    <div class="footer__top">
        <?php
        if (is_active_sidebar('footer_top')) {
            dynamic_sidebar('footer_top');
        }
        ?>
    </div>
    <div class="footer__inner">

        <?php
        if (is_active_sidebar('footer')) {
            dynamic_sidebar('footer');
        }
        ?>
    </div>
</div>