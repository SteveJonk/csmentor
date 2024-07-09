import Glide from '@glidejs/glide'

if (document.getElementById('partner-slider')) {
  const glide = new Glide('#partner-slider', {
    autoplay: 3000,
    animationDuration: 1000,
    gap: 40,
    type: 'carousel',
    perView: 6,
    peek: 100,
    autoWidth: true,
    focusAt: 'center',
    breakpoints: {
      530: {
        perView: 2,
        peek: 10,
      },
    },
  })

  glide.mount()
}
