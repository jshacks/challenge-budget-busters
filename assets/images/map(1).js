
"use strict";

$(function () {

    function initMap() {

        var location = new google.maps.LatLng(23.805364, 90.403977);

        var mapCanvas = document.getElementById('map');
        var mapOptions = {
            center: location,
            zoom: 16,
            panControl: false,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        }
        var map = new google.maps.Map(mapCanvas, mapOptions);

        var markerImage = 'images/marker.png';

        var marker = new google.maps.Marker({
            position: location,
            map: map,
            icon: markerImage

        });

        var contentString = '<div class="info-window">' +
                '<h3>Army Stadium</h3>' +
                '<div class="info-content">' +
                '<p>Tongi Diversion Rd, Dhaka</p>' +
                '<p>Bangladesh</p>' +
                '</div>' +
                '</div>';

        var infowindow = new google.maps.InfoWindow({
            content: contentString,
            maxWidth: 480
        });

        marker.addListener('click', function () {
            infowindow.open(map, marker);
        });

        infowindow.open(map,marker);

        var styles = [{"featureType": "landscape", "stylers": [{"color": '#ccc'}, {"saturation": -30}, {"lightness": 0}, {"visibility": "on"}]}, {"featureType": "poi", "stylers": [{"saturation": -100}, {"lightness": 51}, {"visibility": "simplified"}]}, {"featureType": "road.highway", "stylers": [{"color": '#7b00e3'}, {"saturation": 100}, {"visibility": "simplified"}]}, {"featureType": "road.arterial", "stylers": [{"saturation": 100}, {"lightness": 30}, {"visibility": "on"}]}, {"featureType": "road.local", "stylers": [{"saturation": -100}, {"lightness": 40}, {"visibility": "on"}]}, {"featureType": "transit", "stylers": [{"color": '#e90052'}, {"saturation": 100}, {"visibility": "simplified"}]}, {"featureType": "administrative.province", "stylers": [{"visibility": "off"}]}, {"featureType": "water", "elementType": "labels", "stylers": [{"color": '#007c07'}, {"visibility": "on"}, {"lightness": 0}, {"saturation": 100}]}, {"featureType": "water", "elementType": "geometry", "stylers": [{"color": '#0393ef'},  {"lightness": 0}, {"saturation": 100}]}];

        map.set('styles', styles);


    }

    google.maps.event.addDomListener(window, 'load', initMap);
});