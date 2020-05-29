const toggle = document.querySelector(".toggle");
const menu = document.querySelector(".menu");
const cross = document.querySelector(".cross");

toggle.addEventListener("click", () => {
  if (menu.style.display.localeCompare("none") === 0) {
    menu.style.display = "block";
    cross.style.display = "none";
  } else {
    menu.style.display = "none";
    cross.style.display = "block";
  }
});
