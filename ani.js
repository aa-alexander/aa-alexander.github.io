const navbarToggler = document.querySelector(".navbar-toggler");
const navbarCollapse = document.querySelector(".navbar-collapse");

navbarToggler.addEventListener("click", () => {
  navbarCollapse.classList.toggle("show");
});

const navLinks = document.querySelectorAll(".nav-link");

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    navbarCollapse.classList.remove("show");
  });
});




$(document).ready(function() {
    var $portfolioGrid = $('.project-grid').isotope({
      itemSelector: '.project-item',
      layoutMode: 'vertical' 
    });
  
    $('.project-filters').on( 'click', 'a', function(e) {
      e.preventDefault();
      var filterValue = $(this).attr('data-filter');
      $portfolioGrid.isotope({ filter: filterValue });
      $('.project-filters a').removeClass('active');
      $(this).addClass('active');
    });
  });


  
