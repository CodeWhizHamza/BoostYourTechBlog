const box = document.querySelector(".nav__links-box");

export function toggleMenu() {
  const html = document.documentElement;
  html.classList.toggle("menu-open");
  box.classList.remove("open-submenu");
}
export function openSubmenu(e) {
  e.preventDefault();
  box.classList.add("open-submenu");
}
export function closeSubmenu(e) {
  e.preventDefault();
  box.classList.remove("open-submenu");
}
