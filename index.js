const navMenu = document.querySelector('#nav-menu')
const menuToggle = document.querySelector('.list-link')

navMenu.addEventListener('click', (e) => {
    e.preventDefault();
    menuToggle.classList.toggle('menu-toggle');
})



// const altura = document.body.scrollHeight - window.innerHeight;
// const navBar = document.querySelector('.header');


// window.onscroll = () => {
// 	const anchoFondo = (window.pageYOffset / altura) * 700;

// 	if(anchoFondo > 189){
// 		navBar.style.backgroundColor = 'hsla(239, 37%, 24%, 1)'
//         console.log('object');
// 	} else {
//         navBar.style.backgroundColor = 'hsla(239, 37%, 24%, .705)'
//     }

// }
