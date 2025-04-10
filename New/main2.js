const btnOpenMenu = document.querySelector("#menu-open");
const btnCloseMenu = document.querySelector("menu-close");
const menu = document.querySelector(".menu");

function openMenu(event) {
    menu.style.display = "flex";
    btnOpenMenu.style.display = "none";
}
btnOpenMenu.addEventListener("click", openMenu);

function closeMenu(event) {
    menu.style.display = "none";
    btnOpenMenu.style.display = "block";
}
btnCloseMenu.addEventListener("click", openClose);
