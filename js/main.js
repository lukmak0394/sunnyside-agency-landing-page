window.addEventListener('scroll',() => {
    if (window.scrollY >= 200) {
        mainNav.classList.add('nav-bg-blue');
    } else {
        mainNav.classList.remove('nav-bg-blue')
    }
});


const navBtn = document.querySelector('.menu-icon');
const navBar = document.querySelector('.navbar');
const mainNav = document.querySelector('.main-nav');

navBtn.addEventListener('click', () => {
    
    navBar.classList.toggle('navbar-opened');
    mainNav.classList.toggle('navbar-bg-black');
    navBtn.children[0].classList.toggle('fa-times');
    
});





