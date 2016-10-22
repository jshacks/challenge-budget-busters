(function() {
    'use strict';

    var app = angular.module('Message', []);

    app.controller('ShowMessageController', ['$scope', '$http', '$window', '$location', '$routeParams', 'ViewMessage', function($scope, $http, $window, $location, $routeParams, ViewMessage) {
        $scope.message = {};

        $scope.getMessage = function() {
            ViewMessage.get(
                function() {
                    $scope.message = ViewMessage.getMessage();
                },
                $routeParams.messageId
            );            
        }

        $scope.getMessage();
    }]);
})();