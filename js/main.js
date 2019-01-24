(function ($) {
"use strict";



// One Page Nav
var top_offset = $('.header-area').height() - 0;
$('.main-menu nav ul').onePageNav({
	currentClass: 'active',
	scrollOffset: top_offset,
});


// sticky
var wind = $(window);
var sticky = $('#sticky-header');
wind.on('scroll', function () {
	var scroll = wind.scrollTop();
	if (scroll < 150) {
		sticky.removeClass('sticky');
	} else {
		sticky.addClass('sticky');
	}
});


// menu toggle
$(".navbar-toggle").on('click', function () {
    $(".navbar-nav").addClass("mobile_menu");
});
$(".navbar-nav li a").on('click', function () {
    $(".navbar-collapse").removeClass("show");
});

// data - background
$("[data-background]").each(function () {
    $(this).css("background-image", "url(" + $(this).attr("data-background") + ")")
})

/* info-bar */
$('.info-bar').on('click', function () {
    $('.extra-info').addClass('info-open');
})

$('.close-icon').on('click', function () {
    $('.extra-info').removeClass('info-open');
})

$('.js-tilt').tilt();

$(function () {
    $('a.smoth-scroll').on('click', function (event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top - 40
        }, 1000);
        event.preventDefault();
    });
});



// mainSlider

    function mainSlider() {
        var BasicSlider = $('.slider-active');
        BasicSlider.on('init', function(e, slick) {
            var $firstAnimatingElements = $('.single-slider:first-child').find('[data-animation]');
            doAnimations($firstAnimatingElements);
        });
        BasicSlider.on('beforeChange', function(e, slick, currentSlide, nextSlide) {
            var $animatingElements = $('.single-slider[data-slick-index="' + nextSlide + '"]').find('[data-animation]');
            doAnimations($animatingElements);
        });
        BasicSlider.slick({
            autoplay: false,
            autoplaySpeed: 10000,
            dots: false,
            fade: true,
			arrows:true,
		    prevArrow:'<button type="button" class="slick-prev"> <i class="fas fa-angle-left"></i> </button>',
            nextArrow:'<button type="button" class="slick-next"><i class="fas fa-angle-right"></i></button>',
            responsive: [
                { breakpoint: 767, settings: { dots: false, arrows: false } }
            ]
        });

        function doAnimations(elements) {
            var animationEndEvents = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
            elements.each(function() {
                var $this = $(this);
                var $animationDelay = $this.data('delay');
                var $animationType = 'animated ' + $this.data('animation');
                $this.css({
                    'animation-delay': $animationDelay,
                    '-webkit-animation-delay': $animationDelay
                });
                $this.addClass($animationType).one(animationEndEvents, function() {
                    $this.removeClass($animationType);
                });
            });
        }
    }
mainSlider();








/* testimonial-active */
$('.testimonial-active').owlCarousel({
    loop:true,
    nav:false,
	dots:true,
	autoplay:true,
    responsive:{
        0:{
            items:1
        },
        767:{
            items:1
        },
        1000:{
            items:1
        }
    }
})


/* blog-active */
$('.blog-active').owlCarousel({
    loop:true,
    nav:true,
	dots:true,
	autoplay:true,
	navText:['<i class="fas fa-arrow-left"></i>','<i class="fas fa-arrow-right"></i>'],
    responsive:{
        0:{
            items:1
        },
        576:{
            items:1
        },
        768:{
            items:1
        },
        992:{
            items:1
        },
        1200:{
            items:1
        }
    }
})

/* magnificPopup video view */
$('.popup-video').magnificPopup({
	type: 'iframe'
});

/* magnificPopup img view */
$('.popup-image').magnificPopup({
	type: 'image',
	gallery: {
	  enabled: true
	}
});


$('.grid').imagesLoaded( function() {
	// init Isotope
	var $grid = $('.grid').isotope({
	  itemSelector: '.grid-item',
	  percentPosition: true,
	  masonry: {
		// use outer width of grid-sizer for columnWidth
		columnWidth: 1,
	  }
	});
	// filter items on button click
$('.portfolio-menu').on( 'click', 'button', function() {
  var filterValue = $(this).attr('data-filter');
  $grid.isotope({ filter: filterValue });
});
});


//for menu active class
$('.portfolio-menu button').on('click', function(event) {
	$(this).siblings('.active').removeClass('active');
	$(this).addClass('active');
	event.preventDefault();
});


/* counter */
$('.counter').counterUp({
    delay: 10,
    time: 1000
});

// scrollToTop
$.scrollUp({
	scrollName: 'scrollUp', // Element ID
	topDistance: '300', // Distance from top before showing element (px)
	topSpeed: 300, // Speed back to top (ms)
	animation: 'fade', // Fade, slide, none
	animationInSpeed: 200, // Animation in speed (ms)
	animationOutSpeed: 200, // Animation out speed (ms)
	scrollText: '<i class="fa fa-angle-up"></i>', // Text for element
	activeOverlay: false, // Set CSS color to display scrollUp active point, e.g '#00FFFF'
});

// WOW active
new WOW().init();


})(jQuery);