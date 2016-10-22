"use strict";

/* ======= Preloader ======= */
$(window).on('load',function(){
    $('#preloader').fadeOut('slow',function(){$(this).remove();});
});

/* ======= NavBar ======= */ 
$(window).on('scroll', function() {
    if ($(window).scrollTop() > 80) {
        $(".navbar").addClass('navbar-active');
        $(".navbar").css('min-height', '80px');
    } else {
        $(".navbar").removeClass('navbar-active');
        $(".navbar").css('min-height', '80px');
    }
});

/* ======= Smooth Scroll ======= */
$('.scroll-top-btn a').on('click', function(event) {
    var $anchor = $(this);
    $('html, body').stop().animate({
        scrollTop: $($anchor.attr('href')).offset().top - 60
    }, 1500, 'easeInOutExpo');
    event.preventDefault();
});

$(function() {
        
    /* ======= Bootstrap Scroll Spy ======= */ 
    $('body').scrollspy({
        target:'.navbar-collapse',
        offset:95,
    });           
});