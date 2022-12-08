const expertsButtons = document.querySelector('.experts__buttons')
const btnPrev = expertsButtons.querySelector('.experts__btn-prev')
const btnNext = expertsButtons.querySelector('.experts__btn_next')

// Слушатели на кнопки карусели
btnPrev.addEventListener('click', function () { console.log('prev') })

btnNext.addEventListener('click', function () { console.log('next') })
