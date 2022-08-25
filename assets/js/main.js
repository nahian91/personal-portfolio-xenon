$(document).ready(function() {
    // Project Popup
    $('.project-popup').magnificPopup({
        type:'image',
        gallery:{
            enabled:true
        }
    });

    // Counter
    $('.counter').counterUp({
        delay: 10,
        time: 1000
    });

    // Testimonials Carousel
    $(".testimonials").owlCarousel({
        items: 1,
        loop: true,
        autoplay: true,
        nav: false,
        dots: true
    });
});

$(window).load(function () {

    // Sticky Header
    $(window).on('scroll', function () {
        if ($(this).scrollTop() > 1) {
            $('.header').addClass("fixed");
        } else {
            $('.header').removeClass('fixed');
        }
    });

    // Scroll Top Animation
    $('#scrolltop').click(function() {
        $('html, body').animate({
            scrollTop: 0
        }, '1000')
    });

    // Scroll Top Fade
    $(window).on('scroll', function () {
        if ($(this).scrollTop() > 500) {
            $('#scrolltop').css('opacity', '1');
        } else {
            $('#scrolltop').css('opacity', '0');
        }
    });

    // Preloader
    $('.preloader').fadeOut();
});