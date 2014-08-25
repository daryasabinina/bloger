'use strict';

/**
 * @ngdoc service
 * @name blogerApp.fromserv
 * @description
 * # fromserv
 + * Factory in the blogerApp.
 */
angular.module('blogerApp')
    .factory('Posts', function ($resource) {
        return $resource('http://54.72.3.96:3000/posts/:id', {}, {
            update: {
                method: 'PUT'
            }
        });
    });