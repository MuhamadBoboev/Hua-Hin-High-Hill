"use strict";
const burger = document.querySelector(".burger");
const body = document.body;
burger.addEventListener("click", function () {
  let mainNav = document.querySelector(".header__menu");
  let burgerSpan = document.querySelector(".burger::after");

  let header = document.querySelector(".header");
  header.classList.toggle("active");

  let menuBlack = document.querySelector(".main-block_container");
  menuBlack.classList.toggle("main-block__active");

  document.querySelector(".main-block_container").classList.toggle("active");
  mainNav.classList.toggle("active");
  burger.classList.toggle("active");
  body.classList.toggle("lock");
});
/* ************************************* */
const tabLinks = document.querySelectorAll(".tabs a");
const tabPanels = document.querySelectorAll(".tabs-panel");

for (let el of tabLinks) {
  el.addEventListener("click", (e) => {
    e.preventDefault();

    document.querySelector(".tabs li.active").classList.remove("active");
    document.querySelector(".tabs-panel.active").classList.remove("active");

    const parentListItem = el.parentElement;
    parentListItem.classList.add("active");
    const index = [...parentListItem.parentElement.children].indexOf(
      parentListItem
    );

    const panel = [...tabPanels].filter(
      (el) => el.getAttribute("data-index") == index
    );
    panel[0].classList.add("active");
  });
}
