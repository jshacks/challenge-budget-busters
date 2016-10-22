(function(app) {
    'use strict';

    app.service('GetAllTracks', ['$http', '$window', function ($http, $window) {
        var tracksList = null,
            trackRestUrl = null,
            tableName = null;
        
        this.get = function(callback, trackType, limit, offset) {
            if (trackType === 'Website') {
                trackRestUrl = Global.getWebsiteTracks;
                tableName = 'website_tracks';
            } else {
                trackRestUrl = Global.getAppTracks;
                tableName = 'app_tracks';
            }

            $http.get(
                trackRestUrl, {
                    params: {
                        limit: limit, 
                        offset: offset,
                    }
                })
                .success(function(data, status, headers, config) {
                    tracksList = new Array();

                    for (var i = data.length - 1; i >= 0; i--) {
                        var track = new Object();
                        track.id = data[i][tableName]['id'];
                        track.date = data[i][tableName]['date'];
                        track.browser = data[i][tableName]['browser'];
                        track.browserVersion = data[i][tableName]['browser_version'];
                        tracksList.push(track);
                    }
                    
                    callback();
                })
                .error(function(data, status, headers, config) {
                    console.log('error');
                });
        }

        this.getTracksList = function() {
            return tracksList;
        }
    }]);
})(angular.module('Synyzapo-MBMS'));