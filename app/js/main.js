$(function(){

    $('.header__main-slider').slick({
        infinite: false,
        speed: 300,
        slidesToShow: 1,
        prevArrow: '<button type = "button" class = "slider-arrows arrow-prev"></ button>',
        nextArrow: '<button type = "button" class = "slider-arrows arrow-next"></ button>',
        adaptiveHeight: true,
        slideWidth: 1075,
    });

    $('.catalog__slider').slick({
        infinite: false,
        speed: 300,
        slidesToShow: 1,
        prevArrow: '<button type = "button" class = "slider-arrows arrow-prev"></ button>',
        nextArrow: '<button type = "button" class = "slider-arrows arrow-next"></ button>',
        adaptiveHeight: true,
    });


});