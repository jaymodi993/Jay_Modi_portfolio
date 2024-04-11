var typed = new Typed("#element", {
  strings: ["Web Developer", "Programmer", "Freelancer"],
  typeSpeed: 100,
  loop: true,
  loopCount: Infinity,
});

document.addEventListener("DOMContentLoaded", function () {
  const right = document.querySelector(".right");
  const navbarLinks = document.querySelector(".navbar-links");

  right.addEventListener("click", function () {
    navbarLinks.classList.toggle("active");
  });
  navbarLinks.addEventListener("click", function () {
    navbarLinks.classList.remove("active");
  });
});
