var screenWidth = window.innerWidth;
var phoneImg = document.querySelector(".header-phone-desktop");
var navBtn = document.querySelector("#nav-toggle");
var altNav = document.querySelector(".alt-container");
var icon = document.querySelector(".fas");
var i = true;

navBtn.addEventListener("click", function () {
    altNav.classList.toggle("active-nav");
    if (i) {
        icon.classList.remove("fa-bars");
        icon.classList.add("fa-times");
        i = false;
    } else {
        icon.classList.remove("fa-times");
        icon.classList.add("fa-bars");
        i = true;
    }

});