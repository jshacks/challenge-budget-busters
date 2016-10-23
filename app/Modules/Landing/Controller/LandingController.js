(function() {
    'use strict';

    var app = angular.module('Landing', []);

    app.controller('LandingController', ['$scope', '$http', '$window', '$location', '$routeParams', function($scope, $http, $window, $location, $routeParams) {
        $scope.landing = {};  
    }]);
})();
