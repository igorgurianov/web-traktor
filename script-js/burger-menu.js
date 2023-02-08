
const btnOpenBurger = document.querySelector('.header__hamburger');
const headerMenu = document.querySelector('.header__menu')
const btnCloseBurger = document.querySelector('.header__btn-close-hamburger')

function openBurgerMenu() {
  headerMenu.classList.add('header__menu_opened')
}

function closeBurgerMenu() {
  headerMenu.classList.remove('header__menu_opened')
}

btnOpenBurger.addEventListener('click', openBurgerMenu);
btnCloseBurger.addEventListener('click', closeBurgerMenu)

// закрытие по оверлею
/*
headerWrapper.addEventListener('click', function (e) {
  if (!e.target.closest('.header__menu')) {
    closeBurgerMenu()
  }
});
*/
