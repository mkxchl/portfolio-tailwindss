window.onscroll = function () {
    const header = document.querySelector("header");
    const fixNav = header.offsetTop;
  
    if (window.pageYOffset > fixNav) {
      header.classList.add("nav-fixed");
    } else {
      header.classList.remove("nav-fixed");
    }
  };
  
  const hamburger = document.querySelector("#hamburger");
  const NavMenu = document.querySelector("#NavMenu");
  
  hamburger.addEventListener("click", function () {
    hamburger.classList.toggle("hamburger-active");
    NavMenu.classList.toggle("hidden");
  });