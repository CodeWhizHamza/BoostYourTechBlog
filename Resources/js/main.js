// --------- MODULES ---------//
import { toggleMenu, openSubmenu, closeSubmenu } from "./menuHandler.js";
import { singleCol, doubleCol, threeCol } from "./menuStyleHandler.js";
import openPost from "./openPost.js";

// --------- ELEMENTS ---------//
const btnToggler = document.querySelector(".toggler");
const logo = document.querySelector(".nav__logo");
const btnSubmenuOpen = document.querySelector(".nav__link--submenu-open");
const btnSubmenuClose = document.querySelector(".nav__link--submenu-close");

const btnSingleCol = document.querySelector(".nav__link--single");
const btnDoubleCol = document.querySelector(".nav__link--double");
const btnThreeCol = document.querySelector(".nav__link--three");

const posts = document.querySelectorAll(".post");
const btnReadMore = document.querySelectorAll(".post__btn");

// --------- EVENT HANDLERS ---------//
logo.addEventListener("click", () => (window.location = "/index.html"));

if (btnToggler) btnToggler.addEventListener("click", toggleMenu);
if (btnSubmenuOpen) btnSubmenuOpen.addEventListener("click", openSubmenu);
if (btnSubmenuClose) btnSubmenuClose.addEventListener("click", closeSubmenu);

if (btnSingleCol) btnSingleCol.addEventListener("click", singleCol);
if (btnDoubleCol) btnDoubleCol.addEventListener("click", doubleCol);
if (btnThreeCol) btnThreeCol.addEventListener("click", threeCol);

if (posts) posts.forEach((post) => post.addEventListener("click", openPost));
if (btnReadMore)
  btnReadMore.forEach((btn) => btn.addEventListener("click", openPost));
