(function(app) {
	'use strict';

    app.config(function($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: Global.Modules.Landing + 'View/landing.html',
                controller: 'LandingController'
            })
						.when('/last-year-budget', {
                templateUrl: Global.Modules.Landing + 'View/last-year-budget.html',
                controller: 'LandingController'
            })
						.when('/new-budget', {
                templateUrl: Global.Modules.Landing + 'View/new-budget.html',
                controller: 'LandingController'
            })
                        .when('/spending-updates', {
                templateUrl: Global.Modules.Landing + 'View/spending-updates.html',
                controller: 'LandingController'
            })
            .otherwise({
                redirectTo: Global.pageNotFound
            });
    });
})(angular.module('BudgetBusters'));
