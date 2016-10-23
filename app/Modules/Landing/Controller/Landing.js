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

        $scope.getComments = function () {
            $http.get('/api/proposals')
              .then(
              function (response) { $scope.comments = response; },
              function (failure) { console.log("failed :(", failure) } );
        }

        var cheltuieli = [{
                            id: 'curente',
                            name: 'Cheltuieli Curente',
                            color: '#00FF00'
                        },
                        {
                            name: 'Cheltuieli de personal',
                            parent: 'curente',
                            value: 117366
                        },
                        {
                            name: 'Bunuri si servicii',
                            parent: 'curente',
                            value: 590569
                        },
                        {
                            name: 'Dobanzi',
                            parent: 'curente',
                            value: 124540
                        },
                        {
                            name: 'Subventii',
                            parent: 'curente',
                            value: 1059000
                        },
                        {
                            name: 'Fonduri de rezerva',
                            parent: 'curente',
                            value: 12175
                        },
                        {
                            name: 'Transferuri intre unitati ale administratiei',
                            parent: 'curente',
                            value: 627437
                        },
                        {
                            name: 'Alte transferuri',
                            parent: 'curente',
                            value: 73878
                        },
                        {
                            name: 'Proiecte cu finantare din Fonduri externe nerambursabile postaderare',
                            parent: 'curente',
                            value: 463174
                        },
                        {
                            name: 'Asistenta sociala',
                            parent: 'curente',
                            value: 1682
                        },
                        {
                            name: 'Alte cheltuieli',
                            parent: 'curente',
                            value: 112860
                        },
                        {
                            name: 'Cheltuieli de capital',
                            value: 823638,
                            color: '#0000FF'
                        },
                        {
                            name: 'Operatiuni financiare',
                            id: 'operatiuni',
                            color: '#FF0000'
                        },
                        {
                            name: 'Imprumuturi acordate',
                            parent: 'operatiuni',
                            value: 0
                        },
                        {
                            name: 'Rambursari de credite externe si interne',
                            parent: 'operatiuni',
                            value: 133677
                        },
                        {
                            name: 'Plati efectuate in anii precedenti si recuperate in anul curent',
                            color: '#FFFF00',
                            value: 0
                        },
                        {
                            name: 'Rezerve',
                            color: '#00FFFF',
                            value: 0
                        }];

            $('#container').highcharts({
                series: [{
                    type: 'treemap',
                    layoutAlgorithm: 'squarified',
                    allowDrillToNode: true,
                    animationLimit: 1000,
                    dataLabels: {
                        enabled: false
                    },
                    levelIsConstant: false,
                    levels: [{
                        level: 1,
                        dataLabels: {
                            enabled: true
                        },
                        borderWidth: 3
                    }],
                    data: cheltuieli,
                    events: {
                        click: function (event) {
                            $('#categoryTitle').text(event.point.name);
                            $('#categoryValue').text(event.point.value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".") + ' RON');
                            $scope.getComments();
                        }
                    }
                }],
                title: {
                    text: 'Bugetul Municipiului Bucuresti'
                }
            });

        $scope.comments = [];

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
