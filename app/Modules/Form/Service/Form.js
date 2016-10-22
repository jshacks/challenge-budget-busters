(function(app) {
    'use strict';

    app.service('Form', ['$http', '$window', '$route', function ($http, $window, $route) {
        var self = this,
            responsePromise = null;

        this.sendDataToServer = function(url, dataObject) {
            if (dataObject.id === undefined) {
                delete dataObject.id;
            }
            
            responsePromise = $http.post(url, dataObject, {});
            responsePromise.success(function(dataFromServer, status, headers, config) {
                $route.reload();
            });
            responsePromise.error(function(data, status, headers, config) {
                console.log('error');
            });
        }
    }]);
})(angular.module('Synyzapo-MBMS'));