const btnOpenMenu = document.getElementById("menu-open");
const btnCloseMenu = document.getElementById("menu-close");
const menu = document.querySelector(".menu");
const searchbar = document.getElementById("searchbar");

function openMenu(event) {
    menu.style.display = "flex";
    btnOpenMenu.style.display = "none";
    searchbar.style.display= "none";
}
btnOpenMenu.addEventListener("click", openMenu);

function closeMenu(event) {
    menu.style.display = "none";
    btnOpenMenu.style.display = "block";
    searchbar.style.display = "block";
}
btnCloseMenu.addEventListener("click", closeMenu);
