'use strict';

angular.
  module('trackService', ['ngResource']).
    factory('trackFactory', ['$resource',
      function($resource) {
        return $resource('tracks.json', {}, {
          query: {
            method: 'GET',
            params: {},
            isArray: true
          }
    });
  }
]);