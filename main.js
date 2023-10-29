// Скрипт для раскрытия блока Меню (справа)
const menuBtn = document.querySelector(".menu__btn");
const menuList = document.querySelector(".menu__list");

function toggleMenuVisibility() {
    menuList.classList.toggle("hide");}

menuBtn.addEventListener("click", toggleMenuVisibility);


// Скрипт для раскрытия блока portfolio
const portfBtn = document.querySelector(".portfolio__btn");
const portfList = document.querySelector(".portfolio__list");

function PortfolioVisibility() {
    portfList.classList.toggle("hide");}
    
portfBtn.addEventListener("click", PortfolioVisibility);

