const hamburger_menu = document.querySelector(".hamburger-menu");
const hcontainer = document.querySelector(".hcontainer");

hamburger_menu.addEventListener("click", () => {
    hcontainer.classList.toggle("active")
} )