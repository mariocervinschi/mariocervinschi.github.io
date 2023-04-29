const navSlide = () => {
  const burger = document.querySelector(".burger");
  const nav = document.querySelector(".nav-links");
  const navLinks = document.querySelectorAll(".nav-links li");

  burger.addEventListener("click", () => {
    document.querySelector("html").classList.toggle("disable-scrolling");
    document.querySelector("body").classList.toggle("disable-scrolling");

    nav.classList.toggle("nav-active");

    navLinks.forEach((link, index) => {
      if (link.style.animation) {
        setTimeout(() => (link.style.animation = ""), 200);
        link.style.animation = `navLinksFadeOpposite 0.2s ease backwards ${
          index / 10 + 0.25
        }s`;
      } else {
        link.style.animation = `navLinksFade 0.5s ease forwards ${
          index / 10 + 0.25
        }s`;
      }
    });
    burger.classList.toggle("toggle");
  });
};

navSlide();
