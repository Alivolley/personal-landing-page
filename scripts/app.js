let $ = document;

const menuToggler = $.querySelector(".menu-toggler");
const collapseMenu = $.querySelector(".menu");
const menuUncollpser = $.querySelector(".menu-uncollapse");
const menuCollpser = $.querySelector(".menu-collapse");
const CollpswMenuItems = $.querySelector(".menu__items");
const resumeListItems = $.querySelectorAll(".resume-category");
const portfolioListItem = $.querySelectorAll(".portfolio-list__item");
const menuItems = $.querySelectorAll(".menu__item");
const sections = $.querySelectorAll("main > section  , header > section");
const themeControler = $.querySelector(".theme");
const html = $.documentElement;

function uncollapseTheMenu() {
   // body.classList.toggle("body-scroll-lock");
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

menuItems.forEach((item) => {
   item.addEventListener("click", (e) => {
      e.preventDefault();
      $.querySelector(".menu__item--active").classList.remove("menu__item--active");
      let sectionsClass = item.getAttribute("data-sections-class");
      let sectionsOffset = $.querySelector(`.${sectionsClass}`).offsetTop;

      window.scrollTo({
         top: sectionsOffset - 110,
         behavior: "smooth",
      });
      item.classList.add("menu__item--active");
   });
});

menuToggler.addEventListener("click", uncollapseTheMenu);

// *
// theme change start
// *

function changeTheme() {
   themeControler.classList.toggle("theme--change");
   html.classList.toggle("mode--changed");
   if (html.classList.contains("mode--changed")) {
      window.localStorage.setItem("theme", "dark-mode");
   } else {
      window.localStorage.setItem("theme", "light-mode");
   }
}

function checkTheme() {
   let localStorageTheme = window.localStorage.getItem("theme");
   if (localStorageTheme === "dark-mode") {
      html.classList.add("mode--changed");
   }
}

window.addEventListener("load", checkTheme);
themeControler.addEventListener("click", changeTheme);

// *
// theme change end
// *

// intersectionobserver start

let observer = new IntersectionObserver(listactivater, {
   threshold: 0.38,
});

sections.forEach((section) => {
   observer.observe(section);
});

function listactivater(allsections) {
   allsections.forEach((section) => {
      let sectionClassname = section.target.classList;
      let sectionListItem = $.querySelector(`.menu__item[data-sections-class=${sectionClassname}]`);
      if (section.isIntersecting) {
         sectionListItem.classList.add("menu__item--active");
      } else {
         sectionListItem.classList.remove("menu__item--active");
      }
   });
}

// intersectionobserver end

// swiper slider start

let swiperValues = {
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
};

var swiper1 = new Swiper(".myswiper1", swiperValues);
var swiper2 = new Swiper(".myswiper2", swiperValues);
var swiper3 = new Swiper(".myswiper3", swiperValues);

// swiper slider end
