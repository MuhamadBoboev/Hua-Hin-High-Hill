"use strict";
var galleryTop = new Swiper(".s-plans__tabs", {
  spaceBetween: 20,
  slidesPerView: 5,
  // navigation: {
  //   nextEl: ".swiper-button-next",
  //   prevEl: ".swiper-button-prev",
  // },
  observer: true,
  observeParents: true,
  observeSlideChildren: true,
});
