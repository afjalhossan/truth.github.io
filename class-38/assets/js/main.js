(function ($) {
	"use strict";

    jQuery(document).ready(function($){


        $(".embed-responsive iframe").addClass("embed-responsive-item");
        $(".carousel-inner .item:first-child").addClass("active");
        
        $('[data-toggle="tooltip"]').tooltip();



        


    });
    $(".homepage-slider").owlCarousel({
        items:1,
        dots:true,
        loop:true,
        nav:true,
        navText:['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
        autoplay:true,
        animateOut: 'fadeOut',
    });

    jQuery(window).load(function(){

        
    });


}(jQuery));	