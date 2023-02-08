const selectorRow = document.querySelector('.provide__selector-wrapper')
const servicesBtnList = document.querySelectorAll('.provide__selector-btn')
//const serviceInfoContainer = document.querySelector('')

console.log(servicesBtnList)

function clickServiceSelector(evt) {
  const currentBtn = evt.target.closest('.provide__selector-btn')
  removeSelect()
  renderServiceInfo(currentBtn)
  //console.log('click')
  //console.log(evt.target.closest('.provide__selector-btn'))
  currentBtn.classList.add('provide__selector-btn_active')
}

servicesBtnList.forEach((item) => {
  item.addEventListener('click', clickServiceSelector)
})

function removeSelect() {
  const currentSelection = selectorRow.querySelector('.provide__selector-btn_active');
  currentSelection.classList.remove('provide__selector-btn_active')
}

function renderServiceInfo(evt) {
  const previousServiceInfo = document.querySelector('.provide__info-wraper_active')
  previousServiceInfo.classList.remove('provide__info-wraper_active')
  //console.log(evt.dataset.serviceProvided)
  const serviceInfo = document.querySelector(`.provide__info-wraper_type_${evt.dataset.serviceProvided}`)
  //console.log(serviceInfo)
  serviceInfo.classList.add('provide__info-wraper_active')
}
