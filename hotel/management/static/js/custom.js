(function($) {
        "use strict";
    $("body").prepend('<div id="preloader"><div id="status">  <div class="loader"></div></div>');
    $(window).on('load', function() { 
        $('#status').fadeOut();
        $('#preloader').delay(250).fadeOut('slow'); 
        $('body').delay(250).css({
            'overflow': 'visible'
        });
    })

$('select').niceSelect();

new WOW().init();


$(function(){
$('.search_btn').on('click',function(){
$(".search_open, .search_close").toggleClass("search_open search_close");
    $('.search').toggleClass('search_active');
    $('.go_btn').toggleClass('search_active_go_btn');
});
});


 $("#accordion, #accordion_2").on("hide.bs.collapse show.bs.collapse", e => {
  $(e.target)
    .prev()
    .find("i:last-child")
    .toggleClass("fa-minus fa-plus");
});


})(jQuery);


        function myMap() {
            var mapProp = {
                center: new google.maps.LatLng(40.712775, -74.005973),
                zoom: 12,
                styles: [{
                    elementType: 'geometry',
                    stylers: [{
                        color: '#ececec'
                    }]
                }, {
                    elementType: 'labels.icon',
                    stylers: [{
                        visibility: 'off'
                    }]
                }, {
                    elementType: 'labels.text.fill',
                    stylers: [{
                        color: '#555555'
                    }]
                }, {
                    elementType: 'labels.text.stroke',
                    stylers: [{
                        color: 'off'
                    }]
                }, {
                    featureType: 'administrative.land_parcel',
                    elementType: 'labels.text.fill',
                    stylers: [{
                        color: '#cccccc'
                    }]
                }, {
                    featureType: 'poi',
                    elementType: 'geometry',
                    stylers: [{
                        color: '#71a4b9'
                    }]
                }, {
                    featureType: 'poi',
                    elementType: 'labels.text.fill',
                    stylers: [{
                        color: '#999'
                    }]
                }, {
                    featureType: 'poi.park',
                    elementType: 'geometry',
                    stylers: [{
                        color: '#cccccc'
                    }]
                }, {
                    featureType: 'poi.park',
                    elementType: 'labels.text.fill',
                    stylers: [{
                        color: '#9e9e9e'
                    }]
                }, {
                    featureType: 'road',
                    elementType: 'geometry',
                    stylers: [{
                        color: '#eee'
                    }]
                }, {
                    featureType: 'road.arterial',
                    elementType: 'labels.text.fill',
                    stylers: [{
                        color: '#444'
                    }]
                }, {
                    featureType: 'road.highway',
                    elementType: 'geometry',
                    stylers: [{
                        color: '#666'
                    }]
                }, {
                    featureType: 'road.highway',
                    elementType: 'labels.text.fill',
                    stylers: [{
                        color: '#616161'
                    }]
                }, {
                    featureType: 'road.local',
                    elementType: 'labels.text.fill',
                    stylers: [{
                        color: '#555'
                    }]
                }, {
                    featureType: 'transit.line',
                    elementType: 'geometry',
                    stylers: [{
                        color: '#666666'
                    }]
                }, {
                    featureType: 'transit.station',
                    elementType: 'geometry',
                    stylers: [{
                        color: '#777777'
                    }]
                }, {
                    featureType: 'water',
                    elementType: 'geometry',
                    stylers: [{
                        color: '#fcfcfc'
                    }]
                }, {
                    featureType: 'water',
                    elementType: 'labels.text.fill',
                    stylers: [{
                        color: '#333333'
                    }]
                }]
            };
            var map = new google.maps.Map(document.getElementById("map"), mapProp);
        }


// accordion
var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    // Close all other panels
    for (var j = 0; j < acc.length; j++) {
      if (acc[j] !== this) {
        acc[j].classList.remove("active");
        acc[j].nextElementSibling.style.display = "none";
      }
    }
    
    // Toggle the clicked panel
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}




/**
 * ---------------------------------------------
 * Javscript is just for make elements clickable
 * Effects are on the css only
 * ---------------------------------------------
 * @since 2015/06/10
 * @author Reiha Hosseini ( @mrReiha )
 */
;!( function( w, d ) {

    'use strict';
    
      var titles = d.querySelectorAll( '.title' ),
          
          i = 0,
          len = titles.length;
          
      for ( ; i < len; i++ )
          titles[ i ].onclick = function( e ) {
          
              for ( var j = 0; j < len; j++ )
                  if ( this != titles[ j ] )
                      titles[ j ].parentNode.className = titles[ j ].parentNode.className.replace( / open/i, '' );
          
              var cn = this.parentNode.className;
          
              this.parentNode.className = ~cn.search( /open/i ) ? cn.replace( / open/i, '' ) : cn + ' open';
          
          };
  
  })( this, document );