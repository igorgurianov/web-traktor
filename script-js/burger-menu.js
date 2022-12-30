const burgerButton = document.querySelector('.header__hamburger')
const headerMenu = document.querySelector('.header__menu')
const headerWrapper = document.querySelector('.header__wrapper')

function openBurgerMenu() {
  headerMenu.classList.add('header__menu_opened')
  headerWrapper.classList.add('header__wrapper_opened')
}

function closeBurgerMenu() {
  headerMenu.classList.remove('header__menu_opened')
  headerWrapper.classList.remove('header__wrapper_opened')
}

burgerButton.addEventListener('click', openBurgerMenu);

headerWrapper.addEventListener('click', function (e) {
  if (!e.target.closest('.header__menu')) {
    closeBurgerMenu()
  }
});

