'use strict';

/**
 * @ngdoc function
 * @name blogerApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the blogerApp
 */
angular.module('blogerApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
