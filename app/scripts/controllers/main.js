'use strict';

/**
 * @ngdoc function
 * @name blogerApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the blogerApp
 */
angular.module('blogerApp')
  .controller('NewPosting', function ($scope, Posts) {

        $scope.text = new Posts();
        $scope.texts = Posts.query();

        //reset form
        $scope.resetForm = function() {
            $scope.text = {};
        };

        //closing/opening popup
        $scope.wantWritePost = '';
        $scope.wantWrite = function () {
            if ( $scope.wantWritePost === $scope.wantWritePost ) {
                $scope.wantWritePost = !$scope.wantWritePost;
            }
            if( $scope.wantWritePost) {
                $scope.resetForm();
            }
        };

        //new post from popup with date
        $scope.addPost = function() {
            $scope.text.date = {};
            $scope.text.date = Date.now();
            $scope.texts.push($scope.text);
            //save to server
            if ($scope.text._id) {
                Posts.update({ id: $scope.text._id}, $scope.text);
            } else {
                Posts.save($scope.text);
            }
            $scope.resetForm();
        };

        $scope.deletePost = function(text) {
            Posts.delete({id: text.id});
            var index = $scope.texts.indexOf(text);
            $scope.texts.splice(index, 1);
        };
    });

