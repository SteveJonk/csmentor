    </main>

    <footer class="site-footer">
        <div class="site-footer__columns container">
            <div class="site-footer__columns__col">
                <?php if (is_active_sidebar('Footer 1')) { ?>
                <div class="footer-sidebar">
                    <?php dynamic_sidebar('Footer 1'); ?>
                </div>
                <?php } ?>
            </div>
            <div class="site-footer__columns__col">
                <?php if (is_active_sidebar('Footer 2')) { ?>
                <div class="footer-sidebar">
                    <?php dynamic_sidebar('Footer 2'); ?>
                </div>
                <?php } ?>
            </div>
            <div class="site-footer__columns__col">
                <?php if (is_active_sidebar('Footer 3')) { ?>
                <div class="footer-sidebar">
                    <?php dynamic_sidebar('Footer 3'); ?>
                </div>
                <?php } ?>
            </div>
            <div class="site-footer__columns__col">
                <?php if (is_active_sidebar('Footer 4')) { ?>
                <div class="footer-sidebar">
                    <?php dynamic_sidebar('Footer 4'); ?>
                </div>
                <?php } ?>
            </div>
        </div>
        <div class="site-footer__payment container">
            <?php if (is_active_sidebar('Footer Payment')) { ?>
            <?php dynamic_sidebar('Footer Payment'); ?>
            <?php } ?>
        </div>
    </footer>

    <?php wp_footer() ?>
    </body>

    </html>