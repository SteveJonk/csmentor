import Glide from '@glidejs/glide'
import { autoBullets } from './autobullets'

if (document.getElementById('testimonial-slider')) {
  new Glide('#testimonial-slider', {
    autoplay: 3000,
    gap: 10,
    type: 'carousel',
    perView: 3,
    peek: 5,
    breakpoints: {
      530: {
        perView: 1,
      },
    },
  })?.mount({ AutoBullets: autoBullets })
}
