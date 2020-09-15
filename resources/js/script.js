$(document).ready(function () {

    /* Sticky navigation */
    lastScroll = 0;
    $(window).on('scroll', function () {
        var scroll = $(window).scrollTop();
        if (lastScroll - scroll > 0) {
            $("nav").addClass("sticky");
        } else {
            $("nav").removeClass("sticky");
        }
        lastScroll = scroll;
    });
    /* Remove sticky nav on scroll to top */
    $(window).scroll(function () {
        var top_offset = $(window).scrollTop();
        nav = $('.js--nav-links');
        if (top_offset === 0)
            $('nav').removeClass('sticky');
            nav.slideToggle(300);
    });

    /* Mobile Navigation */
    $('.js--nav-icon').click(function () {
        nav = $('.js--nav-links');
        logo = $('.logo-black');

        $(this).toggleClass('open');
        $("nav").toggleClass("nav-open");
        nav.slideToggle(300);
    });

    /* Mobile / Sticky Links onClick */
    $('.js--nav-links li a').on('click', function () {
        var icon = $('.js--nav-icon');

        
        if (icon.hasClass('open') ) {
            icon.removeClass('open');
            $("nav").removeClass("nav-open");
        }
    });

    /* FadeIn Animations */
    /* Header Image */
    $('.js--wp-1').waypoint(function (direction) {
        $('.js--wp-1').addClass('animated fadeIn');
    }, {
        offset: '50%'
    });
    $('.js--wp-2').waypoint(function (direction) {
        $('.js--wp-2').addClass('animated fadeInLeft');
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
