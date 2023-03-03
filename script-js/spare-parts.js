const sparePartsList = [
  {
    name: 'Дизельный двигатель А-41',
    price: '400 000 руб.',
    img: './images/Diesel-engine-A-41.jpeg',
    description: 'Двигатели А-41 — надежность и безотказность, проверенная временем. Отличаются простотой конструкции и удобным размещением на машине. Внедрение немецких технологий позволило создать модели А-41с повышенным ресурсом мотора.'
  },
  {
    name: 'Кабина ДТ-75',
    price: '600 000 руб.',
    img: './images/cabin.jpg',
    description: 'Кабина ДТ-75 изготовлена из стального профиля и в ней могут свободно разместиться два человека. Крыша кабины изготовлена из стеклопластика, в крыше установлен люк, который при необходимости может служить аварийным выходом. Остекление кабины выполнено из стеклопакета.'
  },
  {
    name: 'Ходоуменьшитель',
    price: '300 000 руб.',
    img: './images/Khodoymenshitel.jpeg',
    description: 'Ходоуменьшитель для трактора ДТ-75 представлен особым механизмом, назначение которого – значительное снижение скорости при сохранении оптимальной мощности. Такое устройство необходимо на тракторе при выполнении им определенных видов работ, или это требуют условия технологического процесса, в котором участвует трактор.'
  }
]


const cardsContainer = document.querySelector('.cards-grid');
const cardsTemplate = document.querySelector('#card-template').content;


function createCard({ name, price, img, description }) {

  const cardElement = cardsTemplate.querySelector('.card').cloneNode(true);
  const imgCardElement = cardElement.querySelector('.card__photo');

  imgCardElement.src = img;
  imgCardElement.alt = name;
  cardElement.querySelector('.card__name').textContent = name;
  cardElement.querySelector('.card__price').textContent = price;
  cardElement.addEventListener('click', clickHandler)

  return cardElement
}

function renderCard(cardElement) {
  cardsContainer.append(cardElement)
}

function clickHandler(evt) {
  console.log(evt.target)
}


sparePartsList.forEach((card) => {
  renderCard(createCard(card))
})
