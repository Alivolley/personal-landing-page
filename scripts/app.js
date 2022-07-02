let $ = document;

let menuToggler = $.querySelector(".menu-toggler");
let collapseMenu = $.querySelector(".menu");
let menuUncollpser = $.querySelector(".menu-uncollapse");
let menuCollpser = $.querySelector(".menu-collapse");
let CollpswMenuItems = $.querySelector(".menu__items");

function uncollapseTheMenu() {
   collapseMenu.classList.toggle("menu__show");
   menuCollpser.classList.toggle("menu-collapse--show");
   menuUncollpser.classList.toggle("menu-uncollapse--show");
   CollpswMenuItems.classList.toggle("menu__items--show");
}

menuToggler.addEventListener("click", uncollapseTheMenu);
