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
        var Posts = $resource('http://54.72.3.96:3000/posts/:_id', {}, {
            update: {
                method: 'PUT'
            }
        });
        return Posts;
    });