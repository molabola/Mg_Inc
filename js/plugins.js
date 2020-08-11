/*global $, jQuery, alert*/
$(document).ready(function () {
    "use strict";

    $('html').niceScroll();

    $('.carousel').carousel({
        interval: 500
    });

// ////////////////////////////////

    $(".colorism").click(function () {

        $(".color-option").fadeToggle();

    });

////////////////////////////////// change theme color click

    var colorLi = $(".color-option ul li"),
        scrolltop = $("#scroll-top");

    colorLi
        .eq(0).css("backgroundColor", "#6256cf").end()
        .eq(1).css("backgroundColor", "#4dd826").end()
        .eq(2).css("backgroundColor", "#f9d026").end()
        .eq(3).css("backgroundColor", "#fd2e35").end()
        .eq(4).css("backgroundColor", "#c105e8");
 
    colorLi.click(function () {


        $("link[href*='theme']").attr("href", $(this).attr("data-value"));


    //console.log( $(this).attr("data-value") )

    });


    $(window).scroll(function () {


        if ($(this).scrollTop() >= 700) {
            scrolltop.show();
        } else {
            scrolltop.hide();
        }

    

    });

    scrolltop.click(function () {

        $("html,body").animate({ scrollTop : 0 }, 600);

    });


});

/////////////////loading screen

// $(window).load(function () {

//     "use strict";
//     $(".loading-overlay .sk-chase").fadeOut(2000,
//         function () {

//             $(this).parent().fadeOut(2000,
//                 function () {

//                     $("body").css("overflow", "auto");
//                     $(this).remove();

//                 });

//         });

// });

// $(window).on('load', function(){

//     new WOW().init();

// });
