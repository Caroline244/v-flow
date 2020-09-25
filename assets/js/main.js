$(document).ready(function() {
    $('.slideshow .slider').slick({
        fade: true,
        speed: 500,
        dots: true,
        infinite: true,
        responsive: [{
            breakpoint: 768,
            settings: {
                adaptiveHeight: true
            }
        }]
    });
    $('.quotes .slider').slick({
        dots: true,
        arrows: false,
        infinite: true,
        slidesToShow: 3,
        responsive: [{
            breakpoint: 768,
            settings: {
                slidesToShow: 1,
                dots: true
            }
        }]
    });
    $('.js-mobile-nav-toggle').on('click', function() {
        if ($('.mobile-nav--open').length) {
            $('main').css('transform', 'translateY(165px)');
            $('.mobile-nav--open').removeClass('mobile-nav--open').addClass('mobile-nav--close');
            $('.mobile-nav-wrapper').removeClass('js-menu--is-open');
        } else {
            $('main').css('transform', 'translateY(0px)');
            $('.mobile-nav--close').removeClass('mobile-nav--close').addClass('mobile-nav--open');
            $('.mobile-nav-wrapper').addClass('js-menu--is-open');
        }
    })
})