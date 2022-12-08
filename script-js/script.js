const navtabbtns = document.querySelectorAll(".nav-tabs__btn"); // поиск кнопок услуг
const iconEngine = document.querySelector(".icon__engine");
const diagnoseBtn = document.getElementById("diagnose_btn");
const captionText = document.querySelector(".caption__text"); // поиск текстового поля про услуги
const vehicleContainer = document.querySelector('.vehicle-container') // контейнер с иконками на фоне трактора
const vehicleContainerIcons = vehicleContainer.querySelectorAll('.vehicle-container__icon') // Все иконки внутри контейнера

const textArrays = {
  diagnose_btn: {
    text: "Диагностика. Если ваш двигатель неисправен или устал, у нас есть оборудование для проверки,диагностики и эффективного устранения любой проблемы, которая может у вас возникнуть.",
    higlightIcon: "icon__diagnostics",
  },
  engine_btn: {
    text: "Двигатель. Капитальный ремонт двигателя автомобиля – сложный процесс, направленный на восстановление технических параметров его компонентов",
    higlightIcon: "icon__engine",
  },
  oil_btn: {
    text: "Масло. Автомобильное масло снижает трение, препятствует износу двигателя и ходовой части. Процедура замены масла, должна выполняться своевременно. ",
    higlightIcon: "icon__oil-lube",
  },
  tires_btn: {
    text: "Шины. Всего существует четыре основных модели поведения автовладельцев при соблюдении обязательных требований к сезонной смене шин.",
    higlightIcon: "icon__tires",
  },
  gear_btn: {
    text: "Коробка передач — один из основных системных элементов автомобиля. Являясь частью трансмиссии, этот агрегат способен изменять крутящий момент, скорость, направление движения авто",
    higlightIcon: "icon__transmission",
  },
  battery_btn: {
    text: "Аккумелятор. При техническом обслуживании необходимо очищать батарею от пыли и грязи. Необходимо протирать поверхность батарей 10% раствором нашатырного спирта или кальцинированной соды, после чего вытереть чистой сухой ветошью, просушить",
    higlightIcon: "icon__batteries",
    activeIconLink: "url(../../../../images/battery-active.svg)",
  },
};

updateText("diagnose_btn"); // для отображения по умолчанию

// слушатель на все кнопки услуг
navtabbtns.forEach((element) => {
  element.addEventListener("click", selectIcon);
});

console.log(navtabbtns)

// Функция клика по иконке
function selectIcon(event) {
  removeIconSelection(); // вызов снятия активных классов
  updateText(event.target.closest(".nav-tabs__btn").id); // коллбэк клика ищем ID нажатой кнопки и вызываем обновление текста
  activateIcon(event.target.closest(".nav-tabs__btn").getAttribute("data-type-service-button"));
  event.target.closest(".nav-tabs__btn").classList.add("nav-tabs__btn_active"); // добавляем нажатой кнопке класс актив
}

// Ищем по принятому ID мэтч в массиве и подставляем этот текст в разметку
function updateText(buttonId) {
  captionText.textContent = textArrays[buttonId].text;
  console.log(textArrays[buttonId].text);
}

// Убираем активный класс со всех кнопок и иконок
function removeIconSelection() {
  navtabbtns.forEach((element) => {
    element.classList.remove("nav-tabs__btn_active");
  });
  vehicleContainerIcons.forEach((element) => {
    element.classList.remove("vehicle-container__icon_active");
  })
}

// Изменение цвета иконок на тракторе - добавить класс vehicle-container__icon_active
function activateIcon(iconClass) {
  const activeIcon = vehicleContainer.querySelector(`[data-type_icon=${CSS.escape(iconClass)}]`);
  activeIcon.classList.add('vehicle-container__icon_active')
}



