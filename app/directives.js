(function(app) {
	'use strict';

    app.directive('head', function() {
        return {
            restrict: 'E',
            templateUrl: Global.templatesURL + 'head.html'
        }
    });

		app.directive('foot', function() {
        return {
            restrict: 'E',
            templateUrl: Global.templatesURL + 'foot.html'
        }
    });
})(angular.module('BudgetBusters'));
