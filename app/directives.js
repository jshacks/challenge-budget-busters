(function(app) {
	'use strict';

    app.directive('headComp', function() {
        return {
            restrict: 'E',
            templateUrl: Global.templatesURL + 'head.html'
        }
    });

		app.directive('footComp', function() {
        return {
            restrict: 'E',
            templateUrl: Global.templatesURL + 'foot.html'
        }
    });
})(angular.module('BudgetBusters'));
