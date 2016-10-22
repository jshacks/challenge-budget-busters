(function() {
    'use strict';

    var app = angular.module('Landing', []);

    app.controller('LandingController', ['$scope', '$http', '$window', '$location', '$routeParams', 'ViewMessage', function($scope, $http, $window, $location, $routeParams, ViewMessage) {
        $scope.landing = {};
    }]);
})();
