(function() {
    'use strict';

    var app = angular.module('Account', []);

    app.controller('ShowAccountsController', ['$scope', '$http', '$window', '$location', 'GetAllAccounts', function($scope, $http, $window, $location, GetAllAccounts) {
        var accounts = new Array(),
            newAccountsList = null,
            offset = 0,
            accountTypeId = null;

        if ($location.path().indexOf('basic') > -1) {
            accountTypeId = Global.Account.Basic.id;
        } else if ($location.path().indexOf('premium1') > -1) {
            accountTypeId = Global.Account.Premium1.id;
        } 

        $scope.getAllAccounts = function() {
            return accounts;
        }

        $scope.callbackGetAllAccounts = function() {
            newAccountsList = null;

            if (accounts.length == 0) {
                accounts = GetAllAccounts.getAccountsList();
            } else {
                newAccountsList = GetAllAccounts.getAccountsList();

                for (var i = 0; i < newAccountsList.length; i++) {
                    accounts.push(newAccountsList[i]);
                }
            }
        }

        $window.onscroll = function() {
            if (($(window).scrollTop() + $(window).height() >= $(document).height() - 10)) {
                GetAllAccounts.get($scope.callbackGetAllAccounts, Global.basicListLimit, offset += Global.basicListLimit, accountTypeId);
            }
        };

        GetAllAccounts.get($scope.callbackGetAllAccounts, Global.basicListLimit, offset, accountTypeId);
    }]);
})();
