export const autoBullets = function (Glide, Components, Events) {
  return {
    mount() {
      var NAV_SELECTOR = '[data-glide-el="controls[nav]"]'
      var CONTROLS_SELECTOR = '[data-glide-el^="controls"]'

      this._n = Components.Html.root.querySelectorAll(NAV_SELECTOR)

      //Automatically create bullets
      const totalSlides = Components.Html.slides.length
      const bulletWrapper = Components.Html.root.querySelector(NAV_SELECTOR)
      if (bulletWrapper) {
        const fragment = document.createDocumentFragment()
        for (var index = 0; index < totalSlides; index++) {
          var button = document.createElement('button')
          button.className = 'glide__bullet'
          button.setAttribute('data-glide-dir', '=' + index)
          fragment.appendChild(button)
        }
        bulletWrapper.innerHTML = ''
        bulletWrapper.appendChild(fragment)
      }

      this._c = Components.Html.root.querySelectorAll(CONTROLS_SELECTOR)

      Components.Controls.addBindings()
    },
  }
}
