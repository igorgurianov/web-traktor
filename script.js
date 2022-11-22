const navtabbtns = document.querySelectorAll('.nav-tabs__btn') // поиск кнопок услуг
const iconEngine = document.querySelector('.icon__engine')
const diagnoseBtn = document.getElementById('diagnose_btn')
const captionText = document.querySelector('.caption__text') // поиск текстового поля про услуги

const textArrays = {
  diagnose_btn: {
    text: 'Диагностика. Если ваш двигатель неисправен или устал, у нас есть оборудование для проверки,диагностики и эффективного устранения любой проблемы, которая может у вас возникнуть.',
    higlightIcon: 'icon__diagnostics'
  },
  engine_btn: {
    text: 'Двигатель. Капитальный ремонт двигателя автомобиля – сложный процесс, направленный на восстановление технических параметров его компонентов',
    higlightIcon: 'icon__engine'
  },
    oil_btn: {
    text: 'Масло. Автомобильное масло снижает трение, препятствует износу двигателя и ходовой части. Процедура замены масла, должна выполняться своевременно. ',
    higlightIcon: 'icon__oil-lube'
  },
    tires_btn: {
    text: 'Шины. Всего существует четыре основных модели поведения автовладельцев при соблюдении обязательных требований к сезонной смене шин.',
    higlightIcon: 'icon__tires'
  },
  gear_btn: {
    text: 'Коробка передач — один из основных системных элементов автомобиля. Являясь частью трансмиссии, этот агрегат способен изменять крутящий момент, скорость, направление движения авто',
    higlightIcon: 'icon__transmission'
  },
  battery_btn: {
    text: 'Аккумелятор. При техническом обслуживании необходимо очищать батарею от пыли и грязи. Необходимо протирать поверхность батарей 10% раствором нашатырного спирта или кальцинированной соды, после чего вытереть чистой сухой ветошью, просушить',
    higlightIcon: 'icon__batteries',
    activeIconLink: 'url(../../../../images/battery-active.svg)'
  }
}

// Изменение цвета иконок на тракторе
const iconBatteries = document.querySelector('.icon__batteries') // выбираем иконку в тракторе
iconBatteries.style.backgroundImage = textArrays.battery_btn.activeIconLink; // меняем иконке картинку
iconBatteries.style.backgroundColor = '#ffc513'; // меняем иконке фон


const linkActive = textArrays.battery_btn.activeIconLink

console.log(iconBatteries)
console.log(linkActive)
//console.log(iconBatteries)


updateText('diagnose_btn') // для отображения по умолчанию

navtabbtns.forEach((element) => {
  element.addEventListener('click', selectIcon) // слушатель на все кнопки услуг
});

function selectIcon(event) {
  updateText(event.target.closest('.nav-tabs__btn').id) // коллбэк клика ищем ID нажатой кнопки и вызываем обновление текста
  console.log(event.target.closest('.nav-tabs__btn').id)
  removeIconSelection() // вызов снятия активных классов
  event.target.closest('.nav-tabs__btn').classList.add('nav-tabs__btn_active') // добавляем нажатой кнопке класс актив
}

function updateText(buttonId) {
  captionText.textContent = textArrays[buttonId].text
  // Ищем по принятому ID мэтч в массиве и подставляем этот текст в разметку
  console.log(textArrays[buttonId].text)
}

function removeIconSelection() {
  navtabbtns.forEach((element) => {
    element.classList.remove('nav-tabs__btn_active') // убираем активный класс со всех кнопок
  })
}


