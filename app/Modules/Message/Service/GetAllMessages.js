(function(app) {
    'use strict';

    app.service('GetAllMessages', ['$http', '$window', function ($http, $window) {
        var messagesList = null;
        
        this.get = function(callback, limit, offset, accountTypeId) {
            $http.get(
                Global.getAllMessages, {
                    params: {
                        limit: limit, 
                        offset: offset
                    }
                })
                .success(function(data, status, headers, config) {
                    messagesList = new Array();

                    for (var i = data.length - 1, j = 0; i >= 0; i--) {
                        var message = new Object();
                        message.id = data[i]['user_messages']['id'];
                        message.date = data[i]['user_messages']['date'];
                        message.email = data[i]['user_messages']['email'];
                        message.nr = ++j;
                        message.name = data[i]['user_messages']['name'];
                        messagesList.push(message);
                    }
                    
                    callback();
                })
                .error(function(data, status, headers, config) {
                    console.log('error');
                });
        }

        this.getMessagesList = function() {
            return messagesList;
        }
    }]);
})(angular.module('Synyzapo-MBMS'));