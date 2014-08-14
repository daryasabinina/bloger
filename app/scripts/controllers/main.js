'use strict';

/**
 * @ngdoc function
 * @name blogerApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the blogerApp
 */
angular.module('blogerApp')
  .controller('Posting', function ($http) {
        var store = this;
        store.posts = [];
        $http.get('posts.json').success(function(data) {
            store.posts = data;
        });
        this.post = {};
    });
angular.module('blogerApp')
    .controller('NewPosting', function ($scope) {
        $scope.texts =[];
        $scope.addPost = function () {
            $scope.texts.push($scope.text);
        };
    });

angular.module('blogerApp')
    .controller('popup',function ($scope) {
        $scope.class = 'out';
        $scope.addClass = function () {
            if ( $scope.class === 'out' )
                $scope.class = 'in';
            else
                $scope.class = 'out';
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
