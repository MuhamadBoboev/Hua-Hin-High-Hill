'use strict'
const burger = document.querySelector('.burger');
const body = document.body;
burger.addEventListener('click', function() {
  let mainNav = document.querySelector('.header__menu');
  let burgerSpan = document.querySelector('.burger::after');

  let header = document.querySelector('.header');
  header.classList.toggle('active')

  let menuBlack = document.querySelector('.main-block_container');
  menuBlack.classList.toggle('main-block__active');

  mainNav.classList.toggle('active');
  burger.classList.toggle('active');
  body.classList.toggle('lock');
})
