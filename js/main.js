// Burger menu
const burger = document.querySelector('.burger-icon');
const nav = document.querySelector('.header__nav');

if (burger) {
  burger.addEventListener('click', burgerInit);
}

function burgerInit(event) {
  event.stopPropagation();

  if (document.documentElement.clientWidth > 1650) return;

  document.body.classList.toggle('body--opened-menu');
}

if (nav) {
  nav.addEventListener('click', (event) => event.stopPropagation());
}

document.addEventListener('click', (event) => {
  if (
    document.body.classList.contains('body--opened-menu') &&
    !event.target.closest('.burger-icon') &&
    !event.target.closest('.header__nav')
  ) {
    document.body.classList.remove('body--opened-menu');
  }
});

document.addEventListener('keydown', (event) => {
  if (
    event.key === 'Escape' &&
    document.body.classList.contains('body--opened-menu')
  ) {
    document.body.classList.remove('body--opened-menu');
  }
});
