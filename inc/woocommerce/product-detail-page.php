<?php
remove_action('woocommerce_after_single_product_summary',  'woocommerce_output_product_data_tabs');
remove_action('woocommerce_single_product_summary', 'woocommerce_template_single_meta', 40);
