import Glide from '@glidejs/glide'
import { autoBullets } from './autobullets'

if (document.getElementById('gallery-slider')) {
  new Glide('#gallery-slider', {
    autoplay: 3000,
    gap: 20,
    type: 'carousel',
    perView: 4,
    peek: 5,
    breakpoints: {
      530: {
        perView: 1,
      },
    },
  })?.mount({ AutoBullets: autoBullets })
}
