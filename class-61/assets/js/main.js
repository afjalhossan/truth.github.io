(function ($) {
	"use strict";

    jQuery(document).ready(function($){


        $(".embed-responsive iframe").addClass("embed-responsive-item");
        $(".carousel-inner .item:first-child").addClass("active");
        
        $('[data-toggle="tooltip"]').tooltip();

        var center = [24.3660248,88.5940547];
        $(".map").gmap3({
        	center : center,
        	zoom	:14,
        	scrollwheel:false
        	

        });
        


    });


    jQuery(window).load(function(){

        
    });


}(jQuery));	