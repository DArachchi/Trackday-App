'use strict';

angular.module('track-list', ['ngRoute'])
  .controller('TrackListCtrl', ['$scope', 'trackFactory', function($scope, trackFactory) {
    trackFactory.query().$promise.then(function(tracks) {
      $scope.tracks = tracks;
    })
  }]);