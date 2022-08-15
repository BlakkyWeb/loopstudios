const menu = document.querySelector('[data-menu]');
const hide = document.querySelector('[data-hide]');
const navBar = document.querySelector('[data-navbar]');

menu.addEventListener('click', ()=> {
    navBar.classList.add('lol');
})

hide.addEventListener('click', ()=> {
    navBar.classList.remove('lol');
})