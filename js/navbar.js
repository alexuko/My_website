
const navbarToggler = document.querySelector(".navbar-toggler");
const navbarMenu = document.querySelector(".navbar ul");
const navbarLinks = document.querySelectorAll(".navbar a");

navbarToggler.addEventListener("click", navbarTogglerClick);

navbarLinks.forEach(elem => elem.addEventListener("click", navbarLinkClick));

function navbarTogglerClick() {
  navbarToggler.classList.toggle("open-navbar-toggler");
  navbarMenu.classList.toggle("open");

}

function navbarLinkClick() {
  if(navbarMenu.classList.contains("open")) {
    navbarToggler.click();
    
  }
}

console.log('nav');
$(document).ready(function() {
    // Transition effect for navbar 
    $(window).scroll(function() {
      var size = 100;  
      // checks if window is scrolled more than size, adds/removes solid class
      if($(this).scrollTop() > size) { 
        console.log('more than ' + size);
          $('.navbar').addClass('solid');
      } else {
          $('.navbar').removeClass('solid');
      }
    });
  });