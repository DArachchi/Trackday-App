'use strict'

angular.module('appRoutes', []).
  config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  $locationProvider.hashPrefix('!');

  $routeProvider.when('/track-list', {
      templateUrl: 'views/track-list.html',
      controller: 'TrackListCtrl'
  });

  $routeProvider.when('/track-detail/:trackId', {
      templateUrl: 'views/track-detail.html',
      controller: 'TrackDetailCtrl'
  });

  $routeProvider.otherwise({redirectTo: '/track-list'});
}]);
