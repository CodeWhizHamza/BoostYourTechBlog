// --------- MODULES ---------//
import { handleMenu, openSubmenu, closeSubmenu } from "./menuHandler.js";

// --------- ELEMENTS ---------//
const btnToggler = document.querySelector(".toggler");
const logo = document.querySelector(".nav__logo");
const btnSubmenuOpen = document.querySelector(".nav__link--submenu-open");
const btnSubmenuClose = document.querySelector(".nav__link--submenu-close");

// --------- EVENT HANDLERS ---------//
btnToggler.addEventListener("click", handleMenu);
btnSubmenuOpen.addEventListener("click", openSubmenu);
btnSubmenuClose.addEventListener("click", closeSubmenu);

logo.addEventListener("click", () => (window.location = "/index.html"));
