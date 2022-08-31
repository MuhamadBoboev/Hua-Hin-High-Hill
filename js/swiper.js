"use strict";
let galleryTop = new Swiper(".s-plans__tabs", {
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
let construction = new Swiper(".construction__swiper", {
  spaceBetween: 20,
  slidesPerView: 1,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  observer: true,
  observeParents: true,
  observeSlideChildren: true,
});
