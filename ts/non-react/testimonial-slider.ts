import Glide from '@glidejs/glide'

if (document.getElementById('testimonial-slider')) {
  new Glide('#testimonial-slider', {
    autoplay: 3000,
    gap: 0,
    type: 'carousel',
  })?.mount()
}
