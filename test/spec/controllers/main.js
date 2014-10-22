'use strict';

describe('Controller: NewPosting', function () {
    var $scope,
        NewPosting;

    beforeEach(module('blogerApp'));

    beforeEach(inject(function ($rootScope, $controller) {
        $scope = $rootScope.$new();
        NewPosting = $controller('NewPosting', {$scope: $scope});
        $scope.texts = [
            {
                _id: '540d73dafef38b74188ecde4',
                author: 'LOL',
                body: 'OLOLO',
                title: 'No title'
            },
            {
                _id: '540d73dafef45b74188ecde4',
                author: 'LOLOL',
                body: 'OLOLO lolo',
                title: 'No title 2'
            }
        ];
        $scope.newText = {
            _id: '540d73dafef56b74188ecde4',
            author: 'LOL3',
            body: 'OLOLO3',
            title: 'No title 3'
        };
            $scope.text = {};
    }));

    it('should add item to list', function () {

        var length = $scope.texts.length;
        $scope.addPost($scope.newText);

        expect($scope.texts.length).toBe(length + 1);
    });

    it('should remove item from list', function () {


        var length = $scope.texts.length;
        $scope.deletePost($scope.text);

        expect($scope.texts.length).toBe(length - 1);
    });
});