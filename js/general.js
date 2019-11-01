const menu = document.querySelector('.menu-desktop')
const menuButton = document.getElementById('menu-button')
function abrirMenu(e) {
  menu.classList.toggle('mostrar')
}
menuButton.addEventListener('click', abrirMenu)
