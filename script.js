const openNav = document.querySelector('.open-menu');
const closeNav = document.querySelector('.close-menu');
const menu = document.querySelector('.mobile-nav');
const body = document.querySelector('body');
const form = document.querySelector('form');
const email = document.querySelector('.footer__input');
const small = document.querySelector('small');

function noScroll() {
  window.scrollTo(0, 0);
}

openNav.addEventListener('click', (e) => {
  menu.classList.add('show');
  window.addEventListener("scroll", noScroll);

})

closeNav.addEventListener('click', () => {
  menu.classList.remove('show');
  window.removeEventListener("scroll", noScroll);
})

form.addEventListener('submit', (e) => {
  e.preventDefault();
  if(!email.value.trim('')){
    email.classList.add('error');
    small.innerText = "Please provide a valid email"
  }
})








