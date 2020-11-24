$(function(){

    $('.header__main-slider').slick({
        infinite: false,
        speed: 300,
        slidesToShow: 1,
        prevArrow: '<button type = "button" class = "slider-arrows arrow-prev"></ button>',
        nextArrow: '<button type = "button" class = "slider-arrows arrow-next"></ button>',
        adaptiveHeight: true,
        slideWidth: 1075,
        asNavFor: '.slider-dotshead',
    });

    $('.slider-dotshead').slick({
        infinite: false,
        slidesToShow: 4,
        slidesToScroll: 4,
        asNavFor: '.header__main-slider',
    });

    $('.catalog__slider').slick({
        infinite: false,
        speed: 300,
        slidesToShow: 1,
        prevArrow: '<button type = "button" class = "slider-arrows arrow-prev"></ button>',
        nextArrow: '<button type = "button" class = "slider-arrows arrow-next"></ button>',
        adaptiveHeight: true,
    });

    $('.why__slider').slick({
        infinite: false,
        speed: 300,
        slidesToShow: 1,
        prevArrow: '<button type = "button" class = "slider-arrows arrow-prev"></ button>',
        nextArrow: '<button type = "button" class = "slider-arrows arrow-next"></ button>',
        adaptiveHeight: true,
    });


});