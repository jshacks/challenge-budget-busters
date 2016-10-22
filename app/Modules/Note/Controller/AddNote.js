(function(app) {
    'use strict';

    app.controller('AddNoteController', ['$scope', '$http', '$location', '$routeParams', 'Form', function($scope, $http, $location, $routeParams, Form) {
        $scope.addNoteForm = {};

        $scope.submitTheForm = function() {
            var dataObject = {
                id: 1, // update the row with id 1 from database
                total_accounts: $scope.addNoteForm.totalAccounts,
                basic_accounts: $scope.addNoteForm.basicAccounts,
                premium1_accounts: $scope.addNoteForm.premium1Accounts
            };

            Form.sendDataToServer(Global.addNote, dataObject);
            $scope.addNoteForm = {};
            $location.path('/success/add/note');
        }
    }]);
})(angular.module('Note'));