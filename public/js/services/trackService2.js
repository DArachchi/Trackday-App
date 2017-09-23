'use strict';

angular.
  module('trackService2', ['ngResource']).
    factory('Track', ['$resource',
        function($resource) {
        return $resource('/api/tracks/:trackId', {}, {
            query: {
                method: 'GET',
                params: {trackId: 'tracks'},
                isArray: true
            }
        });
        }
  ]);
