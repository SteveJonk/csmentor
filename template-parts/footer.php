<div class="footer">
    <div class="container">
        <a id="scrollToTop" class="footer__scroll"><svg width="18" height="12" viewBox="0 0 18 12" fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path d="M8.89551 0L17.791 9.97636L16.5456 11.373L8.89551 2.79338L1.24537 11.373L0 9.97636L8.89551 0Z"
                    fill="inherit" />
            </svg></a>
    </div>
    <?php
    if (is_active_sidebar('footer')) {
        dynamic_sidebar('footer');
    }
    ?>
</div>