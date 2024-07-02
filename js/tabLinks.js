const tabLinks = document.querySelectorAll(".about-tab-links");
const tabContents = document.querySelectorAll(".about-tab-contents");
const tabTitles = document.querySelector(".about-tab-titles");
function addTabClass() {
  tabContents.forEach((link) => link.classList.remove("active-tab"));
  this.classList.add("active-tab");
}
tabLinks.forEach((element) => {
  element.addEventListener("click", function () {
    tabLinks.forEach((link) => link.classList.remove("active-link"));
    this.classList.add("active-link");
    addTabClass();
  });
});
