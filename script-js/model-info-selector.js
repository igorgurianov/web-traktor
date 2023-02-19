const btn = document.querySelectorAll('.model-info__btn')
const elementForm = document.querySelector('.model-info__paragraph')
const elementContainer = document.querySelector('.model-info__display')
const btnContainer = document.querySelector('.swiper-wrapper')
console.log(btnContainer)


const modelInfo = {
  Description: "На тракторе установлен улучшенный двигатель с повышенными техническими характеристиками. Каркас кабины трактора стал более безопасным, а сама она стала более комфортной. Капот машины сделан из стеклопластика и откидывается. Глушитель и выхлопная труба расположены на передней стойке кабины. Также разработана и применена новая расцветка трактора: бело-голубая, но есть модели тракторов синего цвета.",
  Advantages: "Преимущества данной модели :  Топливный бак 300 литров и он расположен за кабинкой Гидрораспределитель также установлен позади кабинки, что не позволяет маслу проникать внутрь кабины; На приборной панели установлены электрические датчики; Кабинка стала двух дверной и оборудовано два места; Габаритные размеры капота увеличились.",
  Equipment: "На тракторе ВЗГМ-90 устанавливается дизельный двигатель одной из трех моделей: А-41СИ-02 производства Алтайского моторного завода. А-41СИ-01 производства Алтайского моторного завода. Д-245.5S2 белорусского производства, оборудованный турбонаддувом (4 цилиндра). Д260.8S2-850 белорусского производства, оборудованный турбонаддувом (6 цилиндров).",
  Modifications: "МОДИФИКАЦИИ ТРАКТОРА ВЗГМ-90 Управление поворотам и сцеплением с помощью пневмоусилителей. Управление поворотом и сцеплением механическим приводом. В настоящее время есть множество модификации данной модели трактора, которые отличаются друг от друга установленными видами дополнительного оборудования и их комбинацией. На трактор могут быть установлены следующие виды устройств: задняя гидронавесная система, поворотный бульдозерный отвал, реверс-редуктор, универсальный отвал с гидроперекосом, ходоуменьшитель"
}

function renderInfo(evt) {
  const hideBlock = elementContainer.querySelector('.model-info__block_active')
  const prevActiveBtn = btnContainer.querySelector('.nav-tabs__btn_active')
  const activeBtn = evt.target.closest('.nav-tabs__btn');
  console.log(prevActiveBtn)

  hideBlock.classList.remove('model-info__block_active');
  prevActiveBtn.classList.remove('nav-tabs__btn_active');


  console.log(activeBtn)

  activeBtn.classList.add('nav-tabs__btn_active')

  const infoType = evt.target.closest('.nav-tabs__btn').dataset.modelInfo


  const activeBlock = elementContainer.querySelector(`.model-info__block_text_${infoType}`);

  activeBlock.classList.add('model-info__block_active')
  //elementForm.textContent = modelInfo[`${infoType}`]
}

btn.forEach((btn) => {
  btn.addEventListener('click', renderInfo)
})
