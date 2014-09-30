'use strict';

/**
 * @ngdoc function
 * @name blogerApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the blogerApp
 */
angular.module('blogerApp')
  .controller('NewPosting', function ($scope, Posts, hundred) {


        $scope.wantWritePost = '';
        $scope.wantWrite = function () {
            if ( $scope.wantWritePost === $scope.wantWritePost ) {
                $scope.wantWritePost = !$scope.wantWritePost; }
            else {
                $scope.wantWritePost = $scope.wantWritePost;}
        };

        $scope.texts = [];
        $scope.addPost = function () {
            $scope.text.date = {};
            $scope.text.date = Date.now();
            $scope.texts.push($scope.text);
            $scope.text='';
            $scope.wantWritePost = $scope.wantWritePost;
            if (this.text._id) {
                Posts.update({ id: this.text._id}, this.text);
                $scope.resetForm();
            } else {
                    this.text.$save().then(function(response){
                        $scope.texts.push(response);
                        $scope.resetForm();
                    });
                }
            this.text = new Posts();
            };

        $scope.deletePost = function (text) {
            Posts.delete({id: text._id})
                .$promise.then(function () {
                    angular.forEach($scope.texts, function (index) {
                            $scope.texts.splice(index, 1);
                            return false;
                    });
                });
        };
        $scope.editPost = function(text) {
            $scope.text = text;
            $scope.editingArticle = true;
            $scope.wantWrite();
        };

        $scope.resetForm = function () {
            $scope.editingArticle = false;
            $scope.text = {};
        };

        this.text = new Posts();
        $scope.texts = Posts.query();

        $scope.texts.$promise.then(function () {
            angular.forEach($scope.texts, function (text) {
                text.body = hundred.cut(text.body);
            });
        });
    });

angular.module('blogerApp').controller('postController', function($scope, $routeParams, Posts){
        Posts.get({id: $routeParams.artId}).$promise.then(function(data){
            $scope.text = data;
        });
    });