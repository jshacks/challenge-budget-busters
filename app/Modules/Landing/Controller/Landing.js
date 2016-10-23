(function() {
    'use strict';

    var app = angular.module('Landing', []);

    app.controller('LandingController', ['$scope', '$http', '$window', '$location', '$routeParams','$interval', function($scope, $http, $window, $location, $routeParams,$interval) {
        $scope.landing = {};

        $scope.radu = 'works';
        var date1 = new Date();
        var date2 = new Date(2016, 11, 7);
        var diff = new Date(date2.getTime() - date1.getTime());

        
        $interval(function(){
          //diff = diff - 
          diff.setSeconds(diff.getSeconds() - 1);
          $scope.days = diff.getUTCDate()-1; // Gives day count of difference
          $scope.hours =  diff.getHours();
          $scope.minutes = diff.getMinutes();
          $scope.seconds = diff.getSeconds();
        },1000);

    }]);

    app.controller('NewBudgetController', ['$scope', '$http', '$window', '$location', '$routeParams', function($scope, $http, $window, $location, $routeParams) {
        var self = this;

        $scope.comments = [
              {
                id: 1,
                name: 'Eusebiu Schipor',
                photo: 'http://lorempixel.com/40/40/people/1/',
                comment: 'Mai multi bani pentru biserici!!!!',
                date: '2016-10-23',
                amount: '9455 lei'
              },
              {
                id: 2,
                name: 'Mihail Serafim',
                photo: 'http://lorempixel.com/40/40/people/2/',
                comment: 'Pentru spitale cred ca e prea mare bugetul.',
                date: '2016-10-23',
                amount: '158700 lei'
              },
              {
                id: 3,
                name: 'Paul Raetchi',
                photo: 'http://lorempixel.com/40/40/people/3/',
                comment: 'Trebuie sa luam tot bugetul alocat pentru biserici si sa-l folosim pentru modernizarea cluburilor.',
                date: '2016-10-22',
                amount: '1500 lei'
              },
              {
                id: 4,
                name: 'Bogdan Luca',
                photo: 'http://lorempixel.com/40/40/people/4/',
                comment: 'De ce suntem asa saraci??? Vrem mai multi bani pentru scoli!',
                date: '2016-10-22',
                amount: '2000 lei'
              },
            ];

        this.addNewCommentForm = {};

        $scope.submitTheForm = function() {
          var dataObject = {
            id: $scope.comments.length,
            name: self.addNewCommentForm.name,
            comment: self.addNewCommentForm.comment,
            photo: Global.host + 'assets/images/01.jpg',
            date: new Date().toJSON().slice(0,10),
            amount: self.addNewCommentForm.amount
          };

          $scope.comments.unshift(dataObject);
          self.addNewCommentForm = {};

          // responsePromise = $http.post(Global.addBlogArticle, dataObject, {});
          // responsePromise.success(function(dataFromServer, status, headers, config) {
          //   self.addBlogArticleForm = {};
          //   $location.path('/blogs');
          //   PopupMessage.showPopupMessage('Success', 'The blog article was added with succes!');
          // });
          // responsePromise.error(function(data, status, headers, config) {
          //   console.log('error');
          // });
        };


    }]);
})();
