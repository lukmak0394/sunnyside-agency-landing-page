window.addEventListener('scroll',navColorChange);
const mainNav = document.querySelector('.main-nav');

const menuIcon = document.querySelector('.menu-icon');
const navBar = document.querySelector('.navbar');

menuIcon.addEventListener('click',function() {
    

    const menuIconInner = menuIcon.children[0]
    if (navBar.classList.contains('navbar-opened')) {
        navBar.classList.remove('navbar-opened');
        menuIconInner.classList.remove('fa-times');
        menuIconInner.classList.add('fa-bars');
    } else { 
        navBar.classList.add('navbar-opened');
        menuIconInner.classList.remove('fa-bars');
        menuIconInner.classList.add('fa-times');
    }
});

function navColorChange() {
    if (window.scrollY >= 200) {
        mainNav.classList.add('nav-bg-blue');
    } else {
        mainNav.classList.remove('nav-bg-blue')
    }
}

