// menu
const nav = document.querySelector(".navigation__menu");
const mobmenu = document.querySelector(".navigation__mobmenu");
const links = nav.querySelectorAll("a");

mobmenu.addEventListener("click", () => {
  nav.classList.toggle("nav-open");
  mobmenu.classList.toggle("toggle");
});

links.forEach((link) => {
  link.addEventListener("click", () => {
    nav.classList.toggle("nav-open");
    mobmenu.classList.toggle("toggle");
  });
});