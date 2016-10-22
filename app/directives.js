(function(app) {
	'use strict';

    app.directive('navigation', function() {    
        return {
            restrict: 'E',
            templateUrl: Global.templatesURL + 'navigation.html'
        }
    });
})(angular.module('BudgetBusters'));