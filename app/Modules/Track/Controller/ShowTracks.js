(function() {
    'use strict';

    var app = angular.module('Track', []);

    app.controller('ShowTracksController', ['$scope', '$http', '$window', '$location', 'GetAllTracks', function($scope, $http, $window, $location, GetAllTracks) {
        $scope.tracks = new Array();
        $scope.trackType = null;

        var newTracksList = null, 
        	offset = 0;

        if ($location.path().indexOf('website') > -1) {
        	$scope.trackType = 'Website';
        } else {
        	$scope.trackType = 'Application';
        }

        $scope.callbackGetTracks = function() {
           $scope.tracks = GetAllTracks.getTracksList();
        }

        $scope.callbackGetTracks = function() {
            newTracksList = null;

            if ($scope.tracks.length == 0) {
                $scope.tracks = GetAllTracks.getTracksList();
            } else {
                newTracksList = GetAllTracks.getTracksList();

                for (var i = 0; i < newTracksList.length; i++) {
                    $scope.tracks.push(newTracksList[i]);
                }
            }
        }

        $window.onscroll = function() {
            if (($(window).scrollTop() + $(window).height() >= $(document).height() - 10)) {
                GetAllTracks.get($scope.callbackGetTracks, $scope.trackType, Global.basicListLimit, offset += Global.basicListLimit);
            }
        };

        GetAllTracks.get($scope.callbackGetTracks, $scope.trackType, Global.basicListLimit, offset);
    }]);
})();
