/**
 * Toggles the navbar on mobile
 *
 * @returns {void}
 */

const toggleMenu = () => {
  const menu = document.querySelectorAll('.js-menu')
  menu.forEach((element) => {
    element.classList.toggle('show')
  })
}

document.getElementById('js-menu-toggle')?.addEventListener('click', toggleMenu)

/**
 * Toggle the items of the navbar dropdown
 *
 * @returns {void}
 */

const navBarDropdownLinks = document.querySelectorAll('.menu-item-has-children > a')

const SHOW_CLASSNAME = 'show-sub-menu'

navBarDropdownLinks.forEach((navBarDropdownLink) => {
  navBarDropdownLink.addEventListener('click', (event) => {
    event.preventDefault()

    if (!navBarDropdownLink.parentElement.classList.contains(SHOW_CLASSNAME)) {
      navBarDropdownLinks.forEach((otherLink) => {
        otherLink.classList.remove(SHOW_CLASSNAME)
      })
      navBarDropdownLink.parentElement.classList.add(SHOW_CLASSNAME)
    } else {
      navBarDropdownLink.parentElement.classList.remove(SHOW_CLASSNAME)
    }
  })
})

export {}
