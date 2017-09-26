'use strict';

angular.
  module('trackListService', ['ngResource']).
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