(function ($) {
	"use strict";

    jQuery(document).ready(function($){

        $(".case-study-carousel").owlCarousel({
            items:3,
            loop:true,
            dots:true,
            nav:false,
            margin:30,
        });
        $(".testimonial-slide").owlCarousel({
            items:1,
            loop:true,
            dots:true,
            nav:false,
        });
        $(".logo-carousel").owlCarousel({
            items:6,
            loop:true,
            dots:false,
            nav:false,
        });
        $(".testimonial-carousel-home-2").owlCarousel({
            items:1,
            loop:true,
            dots:false,
            nav:false,
            autoplay:true,
        });
        $(".homepage3-slide").owlCarousel({
            items:1,
            loop:true,
            dots:false,
            nav:true,
            navText:["<i class='zmdi zmdi-arrow-right'>","<i class='zmdi zmdi-arrow-left'>"],
            autoplay:false,
        });
        
        $(".menu-trigger").on('click',function(){
            $(".offcanvas-menu").addClass("show-offcanvas");
            $(".offcanvas-menu-shadow").addClass("active");
        });
        $(".menu-close,.offcanvas-menu-shadow").on('click',function(){
            $(".offcanvas-menu").removeClass("show-offcanvas");
            $(".offcanvas-menu-shadow").removeClass("active");
        });
        
        $(".single-testimonial-box").hover(function(){
            $(".single-testimonial-box").removeClass("active");
            $(this).addClass('active');
        })
        $(".play-btn,.video-play-btn").magnificPopup({
            type:'video'
        })
        

    });


    jQuery(window).load(function(){

        
    });


}(jQuery));	