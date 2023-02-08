window.onscroll = function () { myFunction() };
console.log()

const header = document.getElementById("myHeader");
const sectionInterview = document.querySelector('.interview')
console.log(sectionInterview)

var sticky = header.offsetTop;

function myFunction() {
  if (window.innerWidth > 768 && window.pageYOffset > sticky) {
    header.classList.add("nav-bar_position-type_sticky");
    sectionInterview.classList.add("interview_position_type_sticky");
  } else {
    header.classList.remove("nav-bar_position-type_sticky");
    sectionInterview.classList.remove("interview_position_type_sticky");
  }
}

