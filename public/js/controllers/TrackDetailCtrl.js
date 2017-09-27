'use strict';

angular.module('track-detail', ['ngRoute'])
    .controller('TrackDetailCtrl', ['$scope', '$routeParams', 'Track',
        function($scope, $routeParams, Track) {
            $scope.track = Track.get({trackId: $routeParams.trackId}, function(track) {
            })
    }]);