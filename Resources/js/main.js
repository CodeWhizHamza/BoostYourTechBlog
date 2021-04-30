// --------- MODULES ---------//
import { toggleMenu, openSubmenu, closeSubmenu } from "./menuHandler.js";
import { singleCol, doubleCol, threeCol } from "./menuStyleHandler.js";

// --------- ELEMENTS ---------//
const btnToggler = document.querySelector(".toggler");
const logo = document.querySelector(".nav__logo");
const btnSubmenuOpen = document.querySelector(".nav__link--submenu-open");
const btnSubmenuClose = document.querySelector(".nav__link--submenu-close");

const btnSingleCol = document.querySelector(".nav__link--single");
const btnDoubleCol = document.querySelector(".nav__link--double");
const btnThreeCol = document.querySelector(".nav__link--three");

// --------- EVENT HANDLERS ---------//
logo.addEventListener("click", () => (window.location = "/index.html"));

btnToggler.addEventListener("click", toggleMenu);
btnSubmenuOpen.addEventListener("click", openSubmenu);
btnSubmenuClose.addEventListener("click", closeSubmenu);

btnSingleCol.addEventListener("click", singleCol);
btnDoubleCol.addEventListener("click", doubleCol);
btnThreeCol.addEventListener("click", threeCol);
