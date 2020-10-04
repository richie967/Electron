

$(document).ready(function () {

    /* Cookie Controller */
    if (localStorage.getItem("cookieSeen") != "shown") {
        $(".cookie-banner").delay(2000).fadeIn();
        localStorage.setItem("cookieSeen", "shown")
    };
    $(".close").on('click', function () {
        $(".cookie-banner").fadeOut();
    });

    /* FORM Submission, stop redirect to google */
    
    $('#contact_form').on('submit', function(e) {
        e.preventDefault();
        $.ajax({
            url: "https://docs.google.com/forms/d/e/1FAIpQLSdGA2EsByySSafG8_nGYe5IO5wUmRT3rjyIgYKRrjQN2WRdSg/formResponse",
            data: $(this).serialize(),
            type: "POST",
            dataType: "xml",
            success: function() {
                alert('Thank you! Your details have been submitted successfully.');
            },
            error: function() {
                window.location.href= "https://www.electronaviation.com/thankyou.html";
            }
        });
    });
   
    /* Screens bigger than 1200px wide - sticky navigation */
    if ($(window).width() >= 1023) {
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

    /* ***  Less than 1200px screen size (mobile/ tablet)  *** */
    else if ($(window).width() <= 1023) {

        /* Remove sticky nav on scroll to top */
        jQuery(document.body).on('scroll', function () {
            top_offset = jQuery(document.body).scrollTop();
            nav = $('.js--nav-links');
            logo = $('.js--logo');

            if (top_offset === 0) {
                nav.removeClass('sticky');
                $('nav').removeClass('sticky');
                $("nav").removeClass("nav-open");
                $('.js--nav-icon').removeClass('open');
                logo.addClass('hide-logo');
            } 
        });

        /* REMOVE Sticky navigation on downwards scrolling */
        lastScroll = 0;
        $(window).on('scroll', function () {
            scroll = $(document).scrollTop();
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
        $('.js--nav-icon').on('click', function () {
            nav = $('.js--nav-links');

            $(this).toggleClass('open');
            $("nav").toggleClass("nav-open");
            $('.logo').addClass('hide-logo');
            $('.js--logo').removeClass('hide-logo');
            $('.js--logo').css('display', 'block');
            nav.slideToggle(300);
        });

        /* Mobile Links onClick */
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
            offset: '60%'
        });
        $('.js--wp-josef').waypoint(function (direction) {
            $('.js--wp-josef').addClass('animated fadeIn');
        }, {
            offset: '60%'
        });
        $('.js--wp-james').waypoint(function (direction) {
            $('.js--wp-james').addClass('animated fadeIn');
        }, {
            offset: '60%'
        });
    }

    /*  Animations  */

    /* ***** ANIMATE.CSS jQuery temp ***** 

    $(document).ready(function(){
        $("#id").fadeIn(1000).delay(3000).fadeOut(1000);
    });

    ***** ANIMATE.CSS jQuery temp ***** */

    $('.js--wp-1').waypoint(function (direction) {
        $('.js--wp-1').addClass('animated fadeInRight');
    }, {
        offset: '60%'
    });

    $('.js--wp-2').waypoint(function (direction) {
        $('.js--wp-2').addClass('animated fadeInUp');
    }, {
        offset: '60%'
    });

    $('.js--wp-3').waypoint(function (direction) {
        $('.js--wp-3').addClass('animated fadeInRight');
    }, {
        offset: '60%'
    });

    $('.js--wp-team').waypoint(function (direction) {
        $('.js--wp-team').addClass('animated fadeInUp');
    }, {
        offset: '60%'
    });
});
