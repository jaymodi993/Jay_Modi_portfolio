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

function hi() {
  Email.send({
    Host: "smtp.elasticemail.com",
    Username: "lovercomic7@gmail.com",
    Password: "6473DDD9A90E5AB3ACE74B0AB490A75125CE",
    To: "webdev.jaymodi@gmail.com",
    From: document.getElementById("em").value,
    Subject: document.getElementById("su").value,
    Body: "And this is the body",
  }).then((message) => alert(message));
}
