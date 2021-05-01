// --------- MODULES ---------//
import "regenerator-runtime/runtime";
import "core-js/stable";

import { toggleMenu, openSubmenu, closeSubmenu } from "./menuHandler.js";
import { singleCol, doubleCol, threeCol } from "./menuStyleHandler.js";
import openPost from "./openPost.js";
import { loadPosts } from "./loadArticles.js";

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
const containerPost = document.querySelector("#posts");

const categoryBtn = document.querySelectorAll(".category__link");

// -------- FUNCTIONS -------- //
const loadSpinner = function (parentEl) {
  const html = `<div class='spin' style='margin: 4rem auto;'><span class='fas fa-spinner' style='font-size: 8rem'></span></div>`;
  parentEl.innerHTML = html;
};

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

if (categoryBtn)
  categoryBtn.forEach((btn) => {
    btn.addEventListener("click", (e) => loadPosts(e, btn.dataset.category));
  });

if (containerPost) {
  loadSpinner(containerPost);
  loadPosts();
  window.scroll(0, 0);
}
