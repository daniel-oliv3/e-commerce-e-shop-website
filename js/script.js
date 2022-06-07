// Mudança de cor de rolagem do cabeçalho
let header = document.querySelector('header');


window.addEventListener('scroll', () => {
    header.classList.toggle('shadow', window.scrollY > 0);
});



















