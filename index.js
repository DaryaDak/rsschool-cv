const hamburger = document.querySelector(".hamburger");
const menuNav = document.querySelector('.nav-list');
const nav = document.querySelector('.navigation');
const body = document.querySelector('.body');


function toggleMenu() {
  hamburger.classList.toggle('open');
  menuNav.classList.toggle('open');
}
hamburger.addEventListener('click', toggleMenu);


function closeMenu(event) {
    if (event.target.classList.contains('nav-a')) {
        hamburger.classList.remove('open');
        menuNav.classList.remove('open');
    }

}
nav.addEventListener('click', closeMenu);
