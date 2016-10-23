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

        $scope.getComments = function (id) {
            $http.get('/api/proposals?id=' + id)
              .then(
              function (response) {
                  for (var i = 0; i < response.data.length; i++) {
                      var date = new Date(response.data[i].date);
                      response.data[i].date = date.toDateString();
                  } 
                  $scope.comments = response.data;
                },
              function (failure) { console.log("failed :(", failure) } );
        }

        $scope.addComment = function () {
            var data = this.newBudget.addNewCommentForm; 
            data.id = $scope.currentId;
            $http.post('/api/proposals', data);
            $scope.getComments(data.id);
        }

        var cheltuieli = [{
                            id: 'curente',
                            name: 'Cheltuieli Curente',
                            color: '#b22154'
                        },
                        {
                            id: 'cheltuieli',
                            name: 'Cheltuieli de personal',
                            parent: 'curente',
                            value: 117366
                        },
                        {
                            id: 'bunuri',
                            name: 'Bunuri si servicii',
                            parent: 'curente',
                            value: 590569
                        },
                        {
                            id: 'dobanzi',
                            name: 'Dobanzi',
                            parent: 'curente',
                            value: 124540
                        },
                        {
                            id: 'subventii',
                            name: 'Subventii',
                            parent: 'curente',
                            value: 1059000
                        },
                        {
                            id: 'fonduri',
                            name: 'Fonduri de rezerva',
                            parent: 'curente',
                            value: 12175
                        },
                        {
                            id: 'transferuri',
                            name: 'Transferuri intre unitati ale administratiei',
                            parent: 'curente',
                            value: 627437
                        },
                        {
                            id: 'alteTransferuri',
                            name: 'Alte transferuri',
                            parent: 'curente',
                            value: 73878
                        },
                        {
                            id: 'proiecte',
                            name: 'Proiecte cu finantare din Fonduri externe nerambursabile postaderare',
                            parent: 'curente',
                            value: 463174
                        },
                        {
                            id: 'asistenta',
                            name: 'Asistenta sociala',
                            parent: 'curente',
                            value: 1682
                        },
                        {
                            id: 'alteCheltuieli',
                            name: 'Alte cheltuieli',
                            parent: 'curente',
                            value: 112860
                        },
                        {
                            id: 'capital',
                            name: 'Cheltuieli de capital',
                            value: 823638,
                            color: '#1f21a5'
                        },
                        {
                            name: 'Operatiuni financiare',
                            id: 'operatiuni',
                            color: '#168560'
                        },
                        {
                            id: 'imprumuturi',
                            name: 'Imprumuturi acordate',
                            parent: 'operatiuni',
                            value: 0
                        },
                        {
                            id: 'rambursari',
                            name: 'Rambursari de credite externe si interne',
                            parent: 'operatiuni',
                            value: 133677
                        },
                        {
                            id: 'precedenti',
                            name: 'Plati efectuate in anii precedenti si recuperate in anul curent',
                            value: 0
                        },
                        {
                            id: 'rezerve',
                            name: 'Rezerve',
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
                            $scope.getComments(event.point.id);
                            $scope.currentId = event.point.id;
                        }
                    }
                }],
                title: {
                    text: 'Bugetul Municipiului Bucuresti'
                }
            });

        $scope.comments = [];

        this.addNewCommentForm = {};

        $scope.currentId = 'curente';

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
          var result = $.grep($scope.comments, function(e){ return e._id == id; });
          result[0].upVotes++;
          var data = { 'upVotes': 1 };
          $http.put('/api/proposals/' + id, data);          
        };

        $scope.downVote = function(id) {
          var result = $.grep($scope.comments, function(e){ return e._id == id; });
          result[0].downVotes++;
          var data = { 'downVotes': 1 };
          $http.put('/api/proposals/' + id, data);          
        };
    }]);
})();
