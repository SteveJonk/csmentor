const toggleMenu = () => {
  const menu = document.querySelectorAll('.js-menu')
  menu.forEach((element) => {
    element.classList.toggle('show')
  })
}

document.getElementById('js-menu-toggle')?.addEventListener('click', toggleMenu)
