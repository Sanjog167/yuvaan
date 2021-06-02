(function ($) {
  "use strict";

  /*------------------------------------
		Preloader
	--------------------------------------*/
  $(window).on("load", function () {
    $("#preloader").delay(350).fadeOut("slow");
    $("body").delay(350).css({ overflow: "visible" });
  });

  /*------------------------------------
		Mobile Menu
	--------------------------------------*/

  $("#mobile-menu-active .has-dropdown > a").on("click", function (e) {
    e.preventDefault();
  });

  $(".hamburger-menu > a").on("click", function (e) {
    e.preventDefault();
    $(".slide-bar").toggleClass("show");
    $("body").addClass("on-side");
    $(".body-overlay").addClass("active");
    $(this).addClass("active");
  });

  $(".close-mobile-menu > a").on("click", function (e) {
    e.preventDefault();
    $(".slide-bar").removeClass("show");
    $("body").removeClass("on-side");
    $(".body-overlay").removeClass("active");
    $(".hamburger-menu > a").removeClass("active");
  });

  $(".body-overlay").on("click", function () {
    $(this).removeClass("active");
    $(".slide-bar").removeClass("show");
    $("body").removeClass("on-side");
    $(".hamburger-menu > a").removeClass("active");
  });

  //sticky-menu
  $(window).on("scroll", function () {
    var scroll = $(window).scrollTop();
    if (scroll < 200) {
      $(".header_bottom").removeClass("sticky");
    } else {
      $(".header_bottom").addClass("sticky");
    }
  });

  $(document).ready(function () {
    var swiper = new Swiper(".mySwiper", {
      pagination: {
        el: ".swiper-pagination",
        dynamicBullets: true,
      },
      loop: true,
    });
  });
})(jQuery);
