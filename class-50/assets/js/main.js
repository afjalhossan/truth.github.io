(function ($) {
	"use strict";

    jQuery(document).ready(function($){


       $(".listing-carousel").owlCarousel({
           items:3,
           loop:true,
           autoplay:false,
           nav:false,
           dots:true,
           navText:['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
           margin:30,
       });

        $("html").niceScroll({
            cursorwidth:10,
            cursorcolor:'#337f32',
            cursorborder:'none',
            autohidemode:false,
            cursorhight:150,
            cursorborder:'none',
            cursorborderradius:0,
        });
        


    });


    jQuery(window).load(function(){

        
    });


}(jQuery));	