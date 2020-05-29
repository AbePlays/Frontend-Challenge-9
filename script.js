const main = document.querySelector(".main");
const toggle = document.querySelector(".toggle");
const menu = document.querySelector(".menu");
const cross = document.querySelector(".cross");
const links = document.querySelector(".links");
console.log(links);

toggle.addEventListener("click", () => {
  if (menu.style.display.localeCompare("none") === 0) {
    menu.style.display = "block";
    cross.style.display = "none";
    main.style.background = "none";
    links.classList.remove("open");
  } else {
    menu.style.display = "none";
    cross.style.display = "block";
    main.style.background = "linear-gradient(to bottom, #606060, #ffffff)";
    links.classList.add("open");
  }
});
