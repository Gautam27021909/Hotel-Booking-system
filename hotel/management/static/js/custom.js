(function($) {




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

        