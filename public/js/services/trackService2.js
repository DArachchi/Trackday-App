'use strict';

angular.
  module('trackService2', ['ngResource']).
    factory('Track', ['$resource',
        function($resource) {
        return $resource('/tracks/:trackId.json', {}, {
            query: {
                method: 'GET',
                params: {trackId: 'tracks'},
                isArray: true
            }
        });
        }
  ]);
