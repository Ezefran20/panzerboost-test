const navMenu = document.querySelector('#nav-menu')
const menuToggle = document.querySelector('.list-link')

navMenu.addEventListener('click', (e) => {
    e.preventDefault();
    menuToggle.classList.toggle('menu-toggle');
})



