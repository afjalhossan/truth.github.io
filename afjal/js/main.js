(function ($) {
 "use strict";
/*----------------------------
Sticky Menu 
------------------------------ */

$(window).scroll(function(){
    if($(this).scrollTop()>100){
        $('.header-area').addClass('sticky');
    }else{
        $('.header-area').removeClass('sticky');
    }
});
	
/*----------------------------
 wow js active
------------------------------ */
 new WOW().init();
 
/*----------------------------
 slider active
------------------------------ */  
 $('#mainSlider').nivoSlider({

 	effect:'boxRain',
 	startSlide: 0,
 	manualAdvance: false,
	directionNav: true,
	animSpeed: 500,
	slices: 18,
	pauseTime: 500000,
	pauseOnHover: false,
	controlNav: false,
	prevText: '<i class="fa fa-angle-left nivo-prev-icon"></i>',
	nextText: '<i class="fa fa-angle-right nivo-next-icon"></i>'
});

/*----------------------------
 price-slider active
------------------------------ */
 $(".team-members").owlCarousel({
        items : 3,
        loop:true,
        itemsDesktop : [1199,3],
        itemsDesktopSmall : [979,3],
        itemsTablet: [600,2],
        itemsMobile : [479,1],
        slideSpeed : 400,
        margin      :30,
        dots 		:true,
        mouseDrag: true,
        pagination : false,       
        autoplay : true,
        autoPlaySpeed: 5000,
        autoPlayTimeout: 5000,
        autoplayHoverPause: true, 
        
    });  

/*----------------------------
   Load More
------------------------------ */

     $(".team-page .single-team-member").slice(0, 4).show();

         if ($(".team-page .single-team-member:hidden").length == 0) {
                $("#load").fadeOut('slow');
            }

          $(".load-more").on('click', function (e) {
            e.preventDefault();
            $(".team-page .single-team-member:hidden").slice(0, 2).slideDown();

            
            $('html,body').animate({
                scrollTop: $(this).offset().top
            }, 1500);
    });



        $('.number').counterUp({
            delay: 10,
            time: 1000,
        });

/*----------------------------
    ScrollTop   
------------------------------ */
 var scrl =$("#scrollTop")


       $(window).on('scroll',function(){
           if($(this).scrollTop() >300){
               scrl.fadeIn();
           }else{
               scrl.fadeOut();
           }
       });''
       scrl.on('click',function(){
           $('body,html').animate({
               scrollTop :0
           },800)
       });

})(jQuery); 