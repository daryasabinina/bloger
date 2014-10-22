'use strict';

    /**
     * @ngdoc directive
     * @name blogerApp.directive:popup
     * @description
     * # popup
     */

angular.module('blogerApp')
     .directive('popup', function () {
        return {
            restrict: 'EA',
            replace: true,
            scope: false,
            templateUrl: 'directives/popup.html'
        };
    });