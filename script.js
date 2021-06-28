const navToggler = document.querySelector('.nav-toggle');
const menu = document.querySelector('.mobile-nav');
const body = document.querySelector('body')


navToggler.addEventListener('click', () => {
  menu.classList.toggle('show');
  body.classList.toggle('show')

})