<?php

remove_action('woocommerce_sidebar', 'woocommerce_get_sidebar');
remove_action('woocommerce_before_shop_loop', 'woocommerce_catalog_ordering', 30);
