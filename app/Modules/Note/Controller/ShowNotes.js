(function() {
    'use strict';

    var app = angular.module('Note', []);

    app.controller('ShowNotesController', ['$scope', '$http', '$window', '$location', 'GetAllNotes', function($scope, $http, $window, $location, GetAllNotes) {
        $scope.notes = null;

        $scope.callbackGetNotes = function() {
           $scope.notes = GetAllNotes.getNotes();
        }

        GetAllNotes.get($scope.callbackGetNotes);
    }]);
})();
