(function(app) {
	'use strict';

    app.config(function($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: Global.Modules.Landing + 'View/landing.html',
                controller: 'LandingController'
            })
            .otherwise({
                redirectTo: Global.pageNotFound
            });
    });
})(angular.module('Synyzapo-MBMS'));
