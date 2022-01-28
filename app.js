
const Menu = document.querySelector('.menu');

const navLinks = document.querySelector('.nav-links');

const body = document.body

console.log(body);

const navMenuHandler = () => {
    Menu.classList.toggle('is-actife')
    navLinks.classList.toggle('topbar')
    body.classList.toggle('active')
}

Menu.addEventListener('click', navMenuHandler)