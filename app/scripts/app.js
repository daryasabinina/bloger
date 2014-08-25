'use strict';

/**
 * @ngdoc overview
 * @name blogerApp
 * @description
 * # blogerApp
 *
 * Main module of the application.
 */
angular
  .module('blogerApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ]).config(['$routeProvider',
        function ($routeProvider) {
            $routeProvider
                .when('/', {
                    templateUrl: 'views/main.html',
                    controller: 'NewPosting'
                })
                .when('/article/:artId', {
                    templateUrl: 'views/postpage.html',
                    controller: 'postController'
                })
                .otherwise('/');
        }
    ]);