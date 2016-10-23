(function(app) {
	'use strict';

    app.directive('headComp', function() {
        return {
            restrict: 'E',
            templateUrl: Global.templatesURL + 'head.html',
            controller: function($scope, $location) {
                $scope.isHome = $location.path() === '/';
                console.log($scope.isHome)
            }
        }
    });

		app.directive('footComp', function() {
        return {
            restrict: 'E',
            templateUrl: Global.templatesURL + 'foot.html'
        }
    });
})(angular.module('BudgetBusters'));
