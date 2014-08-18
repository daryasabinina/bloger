'use strict';

    /**
     * @ngdoc directive
     * @name blogerApp.directive:blogpost
     * @description
     * # blogpost
     */

        angular.module('blogerApp')
            .directive('blogpost', function () {
                return {
                    restrict: 'EA',
                    replace: true,
                    scope: false,
                    templateUrl: '/directives/blogpost.html'
                };
            });