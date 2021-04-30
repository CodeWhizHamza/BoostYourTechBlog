const documentEl = document.documentElement;

export const singleCol = function (e) {
  reset(e);
  documentEl.classList.add("singleColLayout");
};
export const doubleCol = function (e) {
  reset(e);
  documentEl.classList.add("doubleColLayout");
};
export const threeCol = function (e) {
  reset(e);
  documentEl.classList.add("threeColLayout");
};

const reset = function (e) {
  e.preventDefault();
  documentEl.classList.remove(
    "menu-open",
    "singleColLayout",
    "doubleColLayout",
    "threeColLayout"
  );
};
