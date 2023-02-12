window.onscroll = function () { myFunction() };
console.log()

const header = document.getElementById("myHeader");
const sectionContent = document.querySelector('.content')
console.log(sectionContent)

var sticky = header.offsetTop;

function myFunction() {
  if (window.innerWidth > 768 && window.pageYOffset > sticky) {
    header.classList.add("nav-bar_position-type_sticky");
    sectionContent.classList.add("content_position_type_sticky");
  } else {
    header.classList.remove("nav-bar_position-type_sticky");
    sectionContent.classList.remove("content_position_type_sticky");
  }
}

