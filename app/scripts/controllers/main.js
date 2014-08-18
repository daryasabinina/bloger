'use strict';

/**
 * @ngdoc function
 * @name blogerApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the blogerApp
 */
angular.module('blogerApp')
  .controller('NewPosting', function ($http, $scope) {
        $scope.posts = [];
        $http.get('posts.json').success(function(data) {
            $scope.posts = data;
        });
        $scope.post = {};

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
            $scope.text.date.$date = Date.now();
            $scope.texts.push($scope.text);
            $scope.text='';
            $scope.wantWritePost = $scope.wantWritePost;
        };
    });



/*angular.module('myModule', ['ui.bootstrap'])
    .controller('ModalDemoCtrl', function ($scope, $modal, $log) {

    $scope.items = ['item1', 'item2', 'item3'];

    $scope.open = function (size) {

        var modalInstance = $modal.open({
            templateUrl: 'myModalContent.html',
            controller: ModalInstanceCtrl,
            size: size,
            resolve: {
                items: function () {
                    return $scope.items;
                }
            }
        });

        modalInstance.result.then(function (selectedItem) {
            $scope.selected = selectedItem;
        }, function () {
            $log.info('Modal dismissed at: ' + new Date());
        });
    };
});

// Please note that $modalInstance represents a modal window (instance) dependency.
// It is not the same as the $modal service used above.

angular.module('myModule', ['ui.bootstrap'])
    .controller('ModalInstanceCtrl', function ($scope, $modalInstance, items){

    $scope.items = items;
    $scope.selected = {
        item: $scope.items[0]
    };

    $scope.ok = function () {
        $modalInstance.close($scope.selected.item);
    };

    $scope.cancel = function () {
        $modalInstance.dismiss('cancel');
    };
});  */
