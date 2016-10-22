(function(app) {
    'use strict';

    app.controller('ShowMessagesController', ['$scope', '$http', '$window', '$location', 'GetAllMessages', function($scope, $http, $window, $location, GetAllMessages) {
        var newMessagesList = null,
            offset = 0;

        $scope.messages = new Array();

        $scope.callbackGetAllMessages = function() {
            newMessagesList = null;

            if ($scope.messages.length == 0) {
                $scope.messages = GetAllMessages.getMessagesList();
            } else {
                newMessagesList = GetAllMessages.getMessagesList();

                for (var i = 0; i < newMessagesList.length; i++) {
                    $scope.messages.push(newMessagesList[i]);
                }
            }
        }

        $window.onscroll = function() {
            if (($(window).scrollTop() + $(window).height() >= $(document).height() - 10)) {
                GetAllMessages.get($scope.callbackGetAllMessages, Global.basicListLimit, offset += Global.basicListLimit);
            }
        };

        GetAllMessages.get($scope.callbackGetAllMessages, Global.basicListLimit, offset);
    }]);
})(angular.module('Message'));
