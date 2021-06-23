const hamBurgerMenu = document.querySelector("#hamBurgerMenu");
const header = document.querySelector(".header");
const body = document.querySelector("body");
const overlay = document.querySelector(".overlay");
const fadeElems = document.querySelectorAll(".has-fade");

hamBurgerMenu.addEventListener("click", () => {
  if (header.classList.contains("open")) {
    body.classList.remove("no-scroll");
    header.classList.remove("open");
    fadeElems.forEach((element) => {
      element.classList.add("fade-out");
      element.classList.remove("fade-in");
    });
  } else {
    body.classList.add("no-scroll");
    header.classList.add("open");
    fadeElems.forEach((element) => {
      element.classList.add("fade-in");
      element.classList.remove("fade-out");
    });
  }
});
