(function(app) {
    'use strict';
   
    app.service('ViewMessage', ['$http', '$window', function ($http, $window) {
        var message = {};

        this.get = function(callback, messageId) {
            $http.get(Global.getMessage + messageId)
                .success(function(data, status, headers, config) {
                    message.email = data[0]['user_messages']['email'];
                    message.text = data[0]['user_messages']['message'];
                    message.name = data[0]['user_messages']['name'];

                    callback();
                })
                .error(function(data, status, headers, config) {
                    console.log('error');
                });
        }

        this.getMessage =  function() {
            return message;
        }
    }]);
})(angular.module('Synyzapo-MBMS'));