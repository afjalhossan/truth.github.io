(function ($) {
	"use strict";

    jQuery(document).ready(function($){


       var center = [24.3660248,88.5940547];
$('#map')
      .gmap3({
        center: center,
        zoom: 14,
        scrollwheel:false
      })
       .marker({
        position: center,
        icon: 'http://maps.google.com/mapfiles/marker_green.png',

      })
      .infowindow({
        position: center,
        content: "This is Team location",
        pixelOffset: new google.maps.Size(0,-30) 
      })
      .then(function (infowindow) {
        infowindow.open(this.get(0)); // this.get(0) return the map (see "get" feature)
      })
      .rectangle({
        bounds: [24.37654, 88.60, 24.358548, 88.5864],
        fillColor: "#15757A",
        strokeColor : "#FF512F"
      })



      }); // End of documnet ready


}(jQuery));	