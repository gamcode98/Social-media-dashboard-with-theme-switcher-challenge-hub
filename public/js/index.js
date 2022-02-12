const d = document;
const w = window;
const ls = localStorage;

const $checkbox = document.getElementById("checkbox");

// if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
//   checkbox.setAttribute("checked", true);
// }

if (w.matchMedia("(prefers-color-scheme: dark)").matches) {
  $checkbox.setAttribute("checked", false);
}

const darkMode = () => {
  d.body.classList.remove("is-light-mode");
  d.body.classList.add("is-dark-mode");
  $checkbox.removeAttribute("checked");
  ls.setItem("theme", "dark");
};

const lightMode = () => {
  d.body.classList.remove("is-dark-mode");
  d.body.classList.add("is-light-mode");
  ls.setItem("theme", "light");
};

$checkbox.addEventListener("change", function (event) {
  if (this.checked) {
    darkMode();
  } else {
    lightMode();
  }
});

d.addEventListener("DOMContentLoaded", (e) => {
  //                                             key   , value
  if (ls.getItem("theme") === null) ls.setItem("theme", "light");
  if (ls.getItem("theme") === "light") lightMode();
  if (ls.getItem("theme") === "dark") darkMode();
});
