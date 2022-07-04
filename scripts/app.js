let $ = document;

const menuToggler = $.querySelector(".menu-toggler");
const collapseMenu = $.querySelector(".menu");
const menuUncollpser = $.querySelector(".menu-uncollapse");
const menuCollpser = $.querySelector(".menu-collapse");
const CollpswMenuItems = $.querySelector(".menu__items");
const resumeListItems = $.querySelectorAll(".resume-category");
const portfolioListItem = $.querySelectorAll(".portfolio-list__item");

function uncollapseTheMenu() {
   collapseMenu.classList.toggle("menu__show");
   menuCollpser.classList.toggle("menu-collapse--show");
   menuUncollpser.classList.toggle("menu-uncollapse--show");
   CollpswMenuItems.classList.toggle("menu__items--show");
}

resumeListItems.forEach((listItem) => {
   listItem.addEventListener("click", () => {
      $.querySelector(".resume-category__show").classList.remove("resume-category__show");
      $.querySelector(".resum-explain--show").classList.remove("resum-explain--show");
      let explainData = listItem.getAttribute("data-explain-id");
      $.querySelector(explainData).classList.add("resum-explain--show");
      listItem.classList.add("resume-category__show");
   });
});

portfolioListItem.forEach((listItem) => {
   listItem.addEventListener("click", () => {
      $.querySelector(".portfolio-list__item--active").classList.remove("portfolio-list__item--active");
      $.querySelector(".swiper--show").classList.remove("swiper--show");
      let swiperId = listItem.getAttribute("data-explain-id");
      $.querySelector(swiperId).classList.add("swiper--show");
      listItem.classList.add("portfolio-list__item--active");
   });
});

menuToggler.addEventListener("click", uncollapseTheMenu);

// swiper slider start

var swiper = new Swiper(".mySwiper1", {
   loop: true,

   navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
   },
   pagination: {
      el: ".swiper-pagination",
   },

   autoplay: {
      delay: 2000,
      disableOnInteraction: true,
   },

   breakpoints: {
      768: {
         slidesPerView: 2,
         spaceBetween: 50,
      },
      992: {
         slidesPerView: 3,
         spaceBetween: 60,
      },
      1400: {
         slidesPerView: 4,
         spaceBetween: 60,
      },
   },
});
var swiper = new Swiper(".mySwiper2", {
   loop: true,

   navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
   },
   pagination: {
      el: ".swiper-pagination",
   },

   autoplay: {
      delay: 2000,
      disableOnInteraction: true,
   },

   breakpoints: {
      768: {
         slidesPerView: 2,
         spaceBetween: 50,
      },
      992: {
         slidesPerView: 3,
         spaceBetween: 60,
      },
      1400: {
         slidesPerView: 4,
         spaceBetween: 60,
      },
   },
});
var swiper = new Swiper(".mySwiper3", {
   loop: true,

   navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
   },
   pagination: {
      el: ".swiper-pagination",
   },

   autoplay: {
      delay: 2000,
      disableOnInteraction: true,
   },

   breakpoints: {
      768: {
         slidesPerView: 2,
         spaceBetween: 50,
      },
      992: {
         slidesPerView: 3,
         spaceBetween: 60,
      },
      1400: {
         slidesPerView: 4,
         spaceBetween: 60,
      },
   },
});

// swiper slider end
