$(document).ready(function() {
    "use strict";

    /*==============================================================
      testimonial slider
    ==============================================================*/

    $('#slider').owlCarousel({
        loop: true,
        nav: true,
        navText: ['<i class="ti-angle-left"></i>', '<i class="ti-angle-right"></i>'],
        items: 1,
        // autoplay:true,
        // autoplayTimeout:7000,
        // autoplayHoverPause:true
    });

    $('.test-monial').owlCarousel({
        loop: true,
        nav: false,
        margin: 30,
        autoplay: true,
        autoplayTimeout: 5000,
        autoplayHoverPause: false,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 2
            }
        }
    });

    $('.blog-slider').owlCarousel({
        loop: true,
        nav: false,
        margin: 30,
        autoplay: true,
        autoplayTimeout: 5000,
        autoplayHoverPause: false,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            1000: {
                items: 3
            }
        }
    });

    /* ========================================== 
     portfolio
    ========================================== */
    $('#portfolio').imagesLoaded(function() {

        // filter items on button click
        $('.filtering').on('click', 'span', function() {
            var filterValue = $(this).attr('data-filter');
            $grid.isotope({
                filter: filterValue
            });
            $(this)
                .addClass("active")
                .siblings()
                .removeClass("active");
        });

        var $grid = $('.gallery').isotope({
            // options options
            itemSelector: '.items',
            layoutMode: 'fitRows'
        });
        // images have loaded


    });

    /*==============================================================
     wow animation - on scroll
     ==============================================================*/

    var wow = new WOW({
        boxClass: 'wow',
        animateClass: 'animated',
        offset: 90,
        mobile: false,
        live: true
    });
    wow.init();

    /*==============================================================
      Full Screen Height Of Page
    ==============================================================*/

    resizefullscreen();

    /*==============================================================
      Bottom To Top Scroll
    ==============================================================*/

    $(window).scroll(function() {
        if ($(this).scrollTop() > 150) {
            $('#scroll').fadeIn("slow");
        } else {
            $('#scroll').fadeOut("slow");
        }
    });

    $('#scroll').on('click', function() {
        $("html, body").animate({
            scrollTop: 0
        }, 800);
        return false;
    });

});

/*==============================================================
  Product Details  Click Events
==============================================================*/

$('.index-tab ul li').on("click", function() {
    $('li').removeClass("active");
    $(this).addClass("active");
});

/*==============================================================
    Fullscreen Height
  ==============================================================*/

function resizefullscreen() {
    var minheight = $(window).height();
    $(".fullscreen").css('min-height', minheight);
}

$(window).resize(function() {
    resizefullscreen();
});


/* ========================================== 
Should be equal the the height of the header
========================================== */

window.onscroll = function() {
    stickyheader()
};

var header = document.getElementById("collapsibleNavbar");
if (header != undefined) {
    var sticky = header.offsetTop;

    function stickyheader() {
        if (window.pageYOffset > sticky) {
            header.classList.add("sticky");
        } else {
            header.classList.remove("sticky");
        }
    }
}

$('.navigation-menu').onePageNav({
    scrollSpeed: 750,
    scrollThreshold: 0.2, // Adjust if Navigation highlights too early or too late
    scrollOffset: 85, //Height of Navigation Bar
    currentClass: 'active',
    filter: ':not(.btn-very-small)'
});

//   $(document).ready(function(){
//     $('#nav-icon,#nav-plus-icon').click(function(){
//       $(this).toggleClass('is-active');
//     });
//   });

$("#navbar > button.menu").on("click", function() {
    $('.landing-header').toggleClass('open');
    $(this).toggleClass('open').next('.navbar-collapse').toggleClass('open');
    $(this).parents().siblings().find('.navbar-collapse').removeClass('open');
});