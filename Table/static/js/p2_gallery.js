$(document).ready(function() {
  // Single Page Nav for highlighting nav items
  $("#p2MainNav").singlePageNav();

  // Carousel in Our Work section
  $(".p2-gallery").slick({
    dots: true,
    infinite: false,
    arrows: false,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 2,
    responsive: [
      {
        breakpoint: 1600,
        settings: {
          arrows: false,
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 1200,
        settings: {
          arrows: false,
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 991,
        settings: {
          arrows: false,
          slidesToShow: 3,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 767,
        settings: {
          arrows: false,
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
        ]
  });

  // Image Pop Up
  $(".p2-gallery").magnificPopup({
    delegate: "a", // child items selector, by clicking on it popup will open
    type: "image",
    gallery: { enabled: true }
  });

  $(".navbar-toggler").on("click", function(e) {
    $(".p2-sidebar").toggleClass("show");
    e.stopPropagation();
  });

  $("html").click(function(e) {
    var sidebar = document.getElementById("p2Sidebar");

    if (!sidebar.contains(e.target)) {
      $(".p2-sidebar").removeClass("show");
    }
  });

  $("#p2MainNav .nav-link").click(function(e) {
    $(".p2-sidebar").removeClass("show");
  });
});
