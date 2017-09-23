'use strict'

angular.module('appRoutes', []).
  config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  $locationProvider.hashPrefix('!');

  $routeProvider.when('/view1', {
      templateUrl: 'views/view1.html',
      controller: 'View1Ctrl'
  });

  $routeProvider.when('/view2', {
      templateUrl: 'views/view2.html',
      controller: 'View2Ctrl'
  });

  $routeProvider.otherwise({redirectTo: '/view1'});
}]);
