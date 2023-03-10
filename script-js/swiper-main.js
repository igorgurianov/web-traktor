const swiperMain = new Swiper('.swiper-main', {

  // Optional parameters
  grabCoursor: true,

  // Responsive breakpoints
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1,
    },
  },

  // If we need pagination
  // pagination: {
  //   el: '.swiper-pagination',
  // },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-main__button-prev',
    prevEl: '.swiper-main__button-next',
  },

  autoplay: {
    delay: 2500,
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },

}
);


