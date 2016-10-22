(function(app) {
    'use strict';

    app.service('GetAllNotes', ['$http', '$window', function ($http, $window) {
        var note = null;

        this.get = function(callback) {
            $http.get(
                    Global.getAllNotes
                )
                .success(function(data, status, headers, config) {
                    note = new Object();
                    note.basicAccounts = data[0]['notes']['basic_accounts'];
                    note.date = data[0]['notes']['date'];
                    note.premium1Accounts = data[0]['notes']['premium1_accounts'];
                    note.totalAccounts = data[0]['notes']['total_accounts'];

                    callback();
                })
                .error(function(data, status, headers, config) {
                    console.log('error');
                });
        }

        this.getNotes = function() {
            return note;
        }
    }]);
})(angular.module('Synyzapo-MBMS'));
