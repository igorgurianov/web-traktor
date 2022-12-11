
const bodyBlock = document.body

window.onload = function () {
  bodyBlock.classList.add('loaded_hiding');
  window.setTimeout(function () {
    bodyBlock.classList.add('loaded');
    bodyBlock.classList.remove('loaded_hiding');
  }, 500);
}

