$(document).ready(function () {

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

    /* Remove sticky nav on scroll to top */
    $(window).scroll(function () {
        top_offset = $(window).scrollTop();
        nav = $('.js--nav-links');
        logo = $('.js--logo');
        if (top_offset === 0)
            $('nav').removeClass('sticky');
        $("nav").removeClass("nav-open");
        $('.js--nav-icon').removeClass('open');
        $('.logo').removeClass('hide-logo');
        $('.js--logo').addClass('hide-logo');
    });
    /* test (fix) nav */

    if ($(window).width() <= 1200) {
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
    }
    /* FadeIn Animations */
    /* Header Image */
    $('.js--wp-1').waypoint(function (direction) {
        $('.js--wp-1').addClass('animated fadeIn');
    }, {
        offset: '50%'
    });
    $('.js--wp-2').waypoint(function (direction) {
        $('.js--wp-2').addClass('animated fadeInLeftBig');
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
});
