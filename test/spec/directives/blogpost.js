'use strict';

describe('Directive: blogpost', function () {

    // load the directive's module
    beforeEach(module('blogerApp'));

    var element,
        $scope,
        texts = {
            _id: '540d73dafef38b74188ecde4',
            author: 'LOL',
            body: 'OLOLO',
            title: 'No title'
        };

    beforeEach(inject(function ($rootScope, $compile) {
        $scope = $rootScope.$new();
        $scope.texts = texts;
        element = angular.element('<blogpost></blogpost>');
        $compile(element)($scope);
        $scope.$digest();
    }));

    it('title should have right text', inject(function ($compile) {
        expect(element.find('p').text()).toBe(texts.body);
    }));

});