
'use strict'
$(document).ready(function () {

    const swiper = new Swiper('.swiper-container', {
        // Optional parameters
        direction: 'horizontal',
        loop: true,

        // If we need pagination
        pagination: {
            el: '.swiper-pagination',
            dynamicBullets: true,
        },

        // Navigation arrows
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        scrollbar: {
            hide: false,
        },
        speed: 800,

    });

    /*попап*/

    // $('.arrow').on('click touchend', function () {
    //     $(this).siblings(".question").toggleClass("color");
    //     $(this).siblings(".answer").toggleClass("hide");
    //     $(this).toggleClass("rotate");
    //
    //     return false;
    // });


    $('.arrow').on('click touchend', function () {
        $(this).siblings(".question").toggleClass("color");
        $(this).siblings(".answer").slideToggle("slow");
        $(this).toggleClass("rotate");
        return false;
    });

    $('.menu_drop').on('click touchend', function () {
        $(this).siblings(".block_drop").slideToggle("slow");
        return false;
    });

    $('.search-js').on('click touchend', function () {
        $(this).find(".search-block-js").toggleClass("active");
        return false;
    });

    $('.menu-js').on('click touchend', function () {
        $('.mob-menu-js').addClass('active');
        $('.back_layer').addClass('active');
        $('body ').addClass('active');
        return false;
    });


    $('.back_layer, .close').on('click touchend', function () {
        if ($(this).has('back_layer')) {
            $('.mob-menu-js').removeClass('active');
            $('.back_layer').removeClass('active');
            $('body  ').removeClass('active');
        }
        return false;
    });

    function openPopup(id) {
        $(".js-popup[data-id-popup='" + id + "']").fadeIn(300);
    }

    function close_popup() {
        $('.js-popup').fadeOut(300);
    }

    $('.js-popup__close').click(close_popup);

    $('.js-btn-popup').click(function (e) {
        e.preventDefault();
        let index_btn_popup = $(this).attr('href');
        openPopup(index_btn_popup);
    });

    $('.js-popup').click(function (e) {
        let popup = $('.js-popup__wrapp');
        if (!popup.is(e.target) && popup.has(e.target).length === 0)
            close_popup();
    });

    $('.button_up').on('click touchend', function () {
        $('body,html').animate({scrollTop: 0}, 1000);
        return false;
    });


});

let scrollPos;
$(window).on('scroll', function () {
    if($(window).scrollTop()+$(window).innerHeight()>$('footer').position().top){
        $('.button_up').addClass('up_on');
    }
    else {
        if ($(window).scrollTop() > $(window).innerHeight()) {
            var st = $(this).scrollTop();
            if (st > scrollPos) {
                $('.button_up').removeClass('up_on');
            } else {
                $('.button_up').addClass('up_on');
            }
        } else {
            $('.button_up').removeClass('up_on');
        };
    };
    scrollPos = st;

});