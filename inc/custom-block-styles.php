<?php

/**
 * Group block styles
 */

register_block_style(
    'core/group',
    array(
        'name'         => 'container',
        'label'        => __('Container', 'textdomain'),
    )
);

register_block_style(
    'core/group',
    array(
        'name'         => 'card',
        'label'        => __('Card', 'textdomain'),
    )
);

register_block_style(
    'core/columns',
    array(
        'name'         => 'container',
        'label'        => __('Container', 'textdomain'),
    )
);

register_block_style(
    'core/columns',
    array(
        'name'         => 'container-many-columns',
        'label'        => __('Container many columns', 'textdomain'),
    )
);

register_block_style(
    'core/column',
    array(
        'name'         => 'large-padding',
        'label'        => __('Large padding', 'textdomain'),
    )
);


/**
 * Image block styles
 */
register_block_style(
    'core/image',
    array(
        'name'         => 'full-width',
        'label'        => __('Full width', 'textdomain'),
    )
);

register_block_style(
    'core/image',
    array(
        'name'         => 'full-width-contain',
        'label'        => __('Full width contained', 'textdomain'),
    )
);

register_block_style(
    'core/image',
    array(
        'name'         => 'full-width-square',
        'label'        => __('Full width and square', 'textdomain'),
    )
);

/**
 * Text block styles
 */
register_block_style(
    'core/heading',
    array(
        'name'         => 'gradient',
        'label'        => __('Gradient', 'textdomain'),
    )
);

register_block_style(
    'core/paragraph',
    array(
        'name'         => 'metric',
        'label'        => __('Metric', 'textdomain'),
    )
);
