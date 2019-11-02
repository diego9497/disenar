const menu = document.querySelector('.menu-desktop')
const menuButton = document.getElementById('menu-button')
const menuHelper = document.getElementById('menu-helper')
function abrirMenu(e) {
  menuHelper.classList.toggle('mostrar-helper')
  menu.classList.toggle('mostrar')
}
menuButton.addEventListener('click', abrirMenu)
