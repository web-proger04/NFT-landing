let burger = document.querySelector('.header__burger');
let menu = document.querySelector('.header__menu');
let body = document.querySelector('body');

burger.addEventListener('click', () => {
   burger.classList.toggle('active');
});

burger.addEventListener('click', () => {
   menu.classList.toggle('active');
});

burger.addEventListener('click', () => {
   body.classList.toggle('lock');
});