'use strict';

angular.module('myApp.view1', ['ngRoute'])

.controller('View1Ctrl', ['$scope', 'trackFactory', function($scope, trackFactory) {
  trackFactory.query().$promise.then(function(tracks) {
    $scope.tracks = tracks;
  })
}]);