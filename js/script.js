// Mudança de cor de rolagem do cabeçalho
let header = document.querySelector('header');


window.addEventListener('scroll', () => {
    header.classList.toggle('shadow', window.scrollY > 0);
});


// Menu
let menu = document.querySelector('#menu-icon'); 
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}


//Remove menu on scroll
window.onscroll = () => {
    menu.classList.remove('bx-x');
    navbar.classList.remove('active');
}










