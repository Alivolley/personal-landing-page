let $ = document;

const menuToggler = $.querySelector(".menu-toggler");
const collapseMenu = $.querySelector(".menu");
const menuUncollpser = $.querySelector(".menu-uncollapse");
const menuCollpser = $.querySelector(".menu-collapse");
const CollpswMenuItems = $.querySelector(".menu__items");
const resumeListItems = $.querySelectorAll(".resume-category");

function uncollapseTheMenu() {
   collapseMenu.classList.toggle("menu__show");
   menuCollpser.classList.toggle("menu-collapse--show");
   menuUncollpser.classList.toggle("menu-uncollapse--show");
   CollpswMenuItems.classList.toggle("menu__items--show");
}

resumeListItems.forEach((listItem) => {
   listItem.addEventListener("click", () => {
      document.querySelector(".resume-category__show").classList.remove("resume-category__show");
      document.querySelector(".resum-explain--show").classList.remove("resum-explain--show");
      let explainData = listItem.getAttribute("data-explain-id");
      document.querySelector(explainData).classList.add("resum-explain--show");
      listItem.classList.add("resume-category__show");
   });
});

menuToggler.addEventListener("click", uncollapseTheMenu);

// swiper slider start

var swiper = new Swiper(".mySwiper", {
   cssMode: true,
   loop: true,
   slidesPerView: 3,
   spaceBetween: 30,
   navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
   },
   pagination: {
      el: ".swiper-pagination",
   },

   autoplay: {
      delay: 1500,
      disableOnInteraction: true,
      loop: true,
   },
   mousewheel: true,
   keyboard: true,

   // breakpoints: {
   //    640: {
   //      slidesPerView: 2,
   //      spaceBetween: 20,
   //    },
   //    768: {
   //      slidesPerView: 4,
   //      spaceBetween: 40,
   //    },
   //    1024: {
   //      slidesPerView: 5,
   //      spaceBetween: 50,
   //    },
   //  },
});

// swiper slider end
