$(document).ready(function () {
    if ($(window).width() >= 1200) {
        /* For sticky navigation */
        $('.js--vision').waypoint(function (direction) {
            if (direction == "down") {
                $('nav').addClass('sticky');
                $('.js--logo').removeClass('hide-logo');
            } else {
                $('nav').removeClass('sticky');
                $('.js--logo').addClass('hide-logo');
            }
        }, {
            offset: '60px;'
        });
    }

    /* test (fix) nav */
    /* ***  Less than 1200px screen size (mobile/ tablet)  *** */
    else if ($(window).width() <= 1200) {

        /* Remove sticky nav on scroll to top */
        $(window).scroll(function () {
            top_offset = $(window).scrollTop();
            nav = $('.js--nav-links');
            logo = $('.js--logo');

            if (top_offset === 0) {
                nav.removeClass('sticky');
                $('nav').removeClass('sticky');
                $("nav").removeClass("nav-open");
                $('.js--nav-icon').removeClass('open');
            }
        });

        /* Sticky navigation */
        lastScroll = 0;
        $(window).on('scroll', function () {
            scroll = $(window).scrollTop();
            if (lastScroll - scroll > 0) {
                $("nav").addClass("sticky");
                $('.js--logo').removeClass('hide-logo');
                $('.logo').addClass('hide-logo');
                $('.js--nav-icon').removeClass('open');
                $("nav").removeClass("nav-open");
            } else {
                $("nav").removeClass("sticky");
                $('.js--nav-icon').removeClass('open');
                $("nav").removeClass("nav-open");
            }
            lastScroll = scroll;
        });
        /* Mobile Navigation */
        $('.js--nav-icon').click(function () {
            nav = $('.js--nav-links');
            logo = $('.js--logo');

            $(this).toggleClass('open');
            $("nav").toggleClass("nav-open");
            $('.logo').addClass('hide-logo');
            logo.removeClass('hide-logo');
            nav.slideToggle(300);
            if ($('nav').hasClass('sticky')) {
                $('.logo').addClass('hide-logo');
                logo.removeClass('hide-logo');
            }

            if ($('.js--nav-icon').hasClass('open')) {
                logo.removeClass('hide-logo');
                $('.logo').addClass('hide-logo');
            }
        });

        /* Mobile / Sticky Links onClick */
        $('.js--nav-links li a').on('click', function () {
            icon = $('.js--nav-icon');
            nav = $('.js--nav-links');
            nav.slideToggle(300);
            if (icon.hasClass('open')); {
                icon.removeClass('open');
                $("nav").removeClass("nav-open");
            }
        });

        /* Animations on mobile */
        $('.js--wp-rich').waypoint(function (direction) {
            $('.js--wp-rich').addClass('animated fadeIn');
        }, {
            offset: '75%'
        });
        $('.js--wp-josef').waypoint(function (direction) {
            $('.js--wp-josef').addClass('animated fadeIn');
        }, {
            offset: '75%'
        });
        $('.js--wp-james').waypoint(function (direction) {
            $('.js--wp-james').addClass('animated fadeIn');
        }, {
            offset: '75%'
        });
    }

    /*  Animations  */

    /* ***** ANIMATE.CSS jQuery temp ***** 

    $(document).ready(function(){
        $("#id").fadeIn(1000).delay(3000).fadeOut(1000);
    });

    ***** ANIMATE.CSS jQuery temp ***** */
    /* Header Image */
    /* $('.js--wp-1').waypoint(function (direction) {
        $('.js--wp-1').addClass('animated fadeIn');
    }, {
        offset: '50%'
    }); 
    
    */

    $('.js--wp-2').waypoint(function (direction) {
        $('.js--wp-2').addClass('animated fadeInRight');
    }, {
        offset: '70%'
    });

    $('.js--wp-3').waypoint(function (direction) {
        $('.js--wp-3').addClass('animated fadeInUp');
    }, {
        offset: '70%'
    });

    $('.js--wp-4').waypoint(function (direction) {
        $('.js--wp-4').addClass('animated flipInX');
    }, {
        offset: '70%'
    });

    $('.js--wp-5').waypoint(function (direction) {
        $('.js--wp-5').addClass('animated fadeIn');
    }, {
        offset: '60%'
    });

    $('.js--wp-team').waypoint(function (direction) {
        $('.js--wp-team').addClass('animated fadeIn');
    }, {
        offset: '75%'
    });

});
