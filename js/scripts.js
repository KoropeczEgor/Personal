const tabLinks = document.querySelectorAll(".about-tab-links");
const tabContents = document.querySelectorAll(".about-tab-contents");
const tabTitles = document.querySelector(".about-tab-titles");

/*     about    */

function removeTabClass() {
  tabContents.forEach((element) => {
    element.classList.remove("active-tab");
  });
}

function addTabClass(index) {
  removeTabClass();
  tabContents[index].classList.add("active-tab");
}

tabLinks.forEach((element, index) => {
  element.addEventListener("click", function () {
    tabLinks.forEach((link) => link.classList.remove("active-link"));
    this.classList.add("active-link");
    addTabClass(index);
  });
});

/*    portfolio     */

const workList = document.querySelectorAll(".portfolio-work-list");
const layer = document.querySelectorAll(".layer");

workList.forEach((element, index) => {
  element.addEventListener("mouseover", () => {
    layer[index].style.opacity = "1";
  });
});

workList.forEach((element, index) => {
  element.addEventListener("mouseout", () => {
    layer[index].style.opacity = "0";
  });
});

/*    scroll    */

const header = document.querySelector(".header");

window.addEventListener("scroll", () => {
  if (window.scrollY > 0) {
    header.style.boxShadow = "4px 34px 10px -26px rgba(34, 60, 80, 0.42)";
    header.style.background = "#00a6504c";
  } else {
    header.style.boxShadow = "0 0 0 rgba(0, 0, 0, 0)";
    header.style.background = "none";
  }
});
