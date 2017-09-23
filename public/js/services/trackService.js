'use strict';

angular.
  module('trackService', ['ngResource']).
    factory('trackFactory', ['$resource',
      function($resource) {
        return $resource('/api/tracks', {}, {
          query: {
            method: 'GET',
            params: {},
            isArray: true
          }
    });
  }
]);