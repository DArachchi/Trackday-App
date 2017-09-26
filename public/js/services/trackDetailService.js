'use strict';

angular.
  module('trackDetailService', ['ngResource']).
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
