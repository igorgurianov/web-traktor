const swiperNews = new Swiper('.swiper-news', {

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // Optional parameters
  grabCoursor: true,

  // Responsive breakpoints
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1,
      spaceBetween: 15
    },

    425: {
      slidesPerView: 2,
      spaceBetween: 10
    },

    768: {
      slidesPerView: 2,
      spaceBetween: 15,
    },

    1024: {
      slidesPerView: 2,
      spaceBetween: 10,
    }
  },

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // loop: true,

}
);


