$(function(){

    $('.header__main-slider').slick({
        infinite: false,
        speed: 300,
        slidesToShow: 1,
        prevArrow: '<button type = "button" class = "slider-arrows arrow-prev"></ button>',
        nextArrow: '<button type = "button" class = "slider-arrows arrow-next"></ button>',
        adaptiveHeight: true,
        asNavFor: '.slider-dotshead',
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    infinite: true,
                    autoplay: true,
                    autoplaySpeed: 3000,
                    speed: 600
                }
            },
        ]
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
        responsive: [
            {
                breakpoint: 900,
                settings: {
                    infinite: true,
                    autoplay: true,
                    autoplaySpeed: 3000,
                    speed: 600
                }
            },
        ]
    });

    $('.why__slider').slick({
        infinite: false,
        speed: 300,
        slidesToShow: 1,
        prevArrow: '<button type = "button" class = "slider-arrows arrow-prev"></ button>',
        nextArrow: '<button type = "button" class = "slider-arrows arrow-next"></ button>',
        adaptiveHeight: true,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    infinite: true,
                    autoplay: true,
                    autoplaySpeed: 3000,
                    speed: 600
                }
            },
        ]
    });

    ////////////////////////////////////////////////////////// burger
    var Menu = {

        el: {
        ham: $('.header__btn'),
        menuTop: $('.header__btn-top'),
        menuMiddle: $('.header__btn-middle'),
        menuBottom: $('.header__btn-bottom')
        },
        
        init: function() {
        Menu.bindUIactions();
        },
        
        bindUIactions: function() {
        Menu.el.ham
            .on(
                'click',
            function(event) {
            Menu.activateMenu(event);
            event.preventDefault();
            }
        );
        },
        
        activateMenu: function() {
        Menu.el.menuTop.toggleClass('header__btn-top-click');
        Menu.el.menuMiddle.toggleClass('header__btn-middle-click');
        Menu.el.menuBottom.toggleClass('header__btn-bottom-click'); 
        }
    };
    
    Menu.init();


    $('.header__btn-global').on('click', function() {
        $('.menu ul').slideToggle();

    });


});