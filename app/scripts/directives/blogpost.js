'use strict';

    /**
     * @ngdoc directive
     * @name blogerApp.directive:blogpost
     * @description
     * # blogpost
     */

        angular.module('blogerApp')
            .directive('blogpost', function () {
                function ClassFn(scope, element) {
                    element.addClass('plain');
                }
                return {
                    restrict: 'EA',
                    replace: false,
                    scope: false,
                    link: ClassFn,
                    templateUrl: '/directives/blogpost.html'
                };
            });