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
                photo: Global.host + 'assets/images/p1.jpg',
                comment: 'Mai multi bani pentru biserici!!!!',
                date: '2016-10-23',
                amount: '9455 lei',
                votes: 10
              },
              {
                id: 2,
                name: 'Mihail Serafim',
                photo: Global.host + 'assets/images/p2.jpg',
                comment: 'Pentru spitale cred ca e prea mare bugetul.',
                date: '2016-10-23',
                amount: '158700 lei',
                votes: 15
              },
              {
                id: 3,
                name: 'Paul Raetchi',
                photo: Global.host + 'assets/images/p3.jpg',
                comment: 'Trebuie sa luam tot bugetul alocat pentru biserici si sa-l folosim pentru modernizarea cluburilor.',
                date: '2016-10-22',
                amount: '1500 lei',
                votes: 17
              },
              {
                id: 4,
                name: 'Bogdan Luca',
                photo: Global.host + 'assets/images/p4.jpg',
                comment: 'De ce suntem asa saraci??? Vrem mai multi bani pentru scoli!',
                date: '2016-10-22',
                amount: '2000 lei',
                votes: 20
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
            amount: self.addNewCommentForm.amount,
            votes: 0
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

        $scope.upVote = function(id) {
          var result = $.grep($scope.comments, function(e){ return e.id == id; });
          result[0].votes++;
        };

        $scope.downVote = function(id) {
          var result = $.grep($scope.comments, function(e){ return e.id == id; });
          result[0].votes--;
        };
    }]);
})();
