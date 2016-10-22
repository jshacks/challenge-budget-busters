(function(app) {
    'use strict';

    app.service('GetAllAccounts', ['$http', '$window', function ($http, $window) {
        var accountsList = null;
        
        this.get = function(callback, limit, offset, accountTypeId) {
            $http.get(
                Global.getAllAccounts, {
                    params: {
                        limit: limit, 
                        offset: offset,
                        accountTypeId: accountTypeId
                    }
                })
                .success(function(data, status, headers, config) {
                    accountsList = new Array();

                    for (var i = 0; i < data.length; i++) {
                        var account = new Object();
                        account.nr = i + 1;
                        account.accountType = data[i]['organizations']['account_type'];
                        account.email = data[i]['organizations']['email'];
                        account.name = data[i]['organizations']['name'];
                        accountsList.push(account);
                    }
                    
                    callback();
                })
                .error(function(data, status, headers, config) {
                    console.log('error');
                });
        }

        this.getAccountsList = function() {
            return accountsList;
        }
    }]);
})(angular.module('Synyzapo-MBMS'));