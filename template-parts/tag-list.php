<div class="tag-list">
    <?php
    $tags = get_tags();
    shuffle($tags);
    $tags = array_slice($tags, 0, 20);
    if ($tags) :
        foreach ($tags as $tag) : ?>
            <a class="tag-list__link" href="<?php echo esc_url(get_tag_link($tag->term_id)); ?>" title="<?php echo esc_attr($tag->name); ?>"><?php echo esc_html($tag->name); ?></a>
        <?php endforeach; ?>
    <?php endif; ?>
</div>