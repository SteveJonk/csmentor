<li class="glide__slide card">
    <div class="glide__slide__inner">
        <div class="glide__slide__inner__top">
            <img class="glide__slide__inner__profile-pic" src="<?php echo get_the_post_thumbnail_url($post, 'thumbnail'); ?>">
            <h4 class="glide__slide__inner__title">
                <?php echo get_the_title(); ?></h4>
        </div>
        <svg class="glide__slide__inner__quotes" width="26" height="20" viewBox="0 0 26 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M2.33708 18.3824C0.876404 16.7647 0 15 0 12.0588C0 6.91176 3.65169 2.35294 8.76405 0L10.0787 1.91177C5.25843 4.55882 4.23596 7.94118 3.94382 10.1471C4.67416 9.70588 5.69663 9.55883 6.7191 9.70588C9.34831 10 11.3933 12.0588 11.3933 14.8529C11.3933 16.1765 10.809 17.5 9.93258 18.5294C8.91011 19.5588 7.74157 20 6.2809 20C4.67416 20 3.21348 19.2647 2.33708 18.3824ZM16.9438 18.3824C15.4831 16.7647 14.6067 15 14.6067 12.0588C14.6067 6.91176 18.2584 2.35294 23.3708 0L24.6854 1.91177C19.8652 4.55882 18.8427 7.94118 18.5506 10.1471C19.2809 9.70588 20.3034 9.55883 21.3258 9.70588C23.9551 10 26 12.0588 26 14.8529C26 16.1765 25.4157 17.5 24.5393 18.5294C23.6629 19.5588 22.3483 20 20.8876 20C19.2809 20 17.8202 19.2647 16.9438 18.3824Z" fill="inherit" />
        </svg>

        <div class="glide__slide__inner__content">
            <?php echo get_the_content(); ?>
        </div>
        </h1>

</li>