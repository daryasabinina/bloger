'use strict';

describe('Directive: blogpost', function () {

    // load the directive's module
    beforeEach(module('blogerApp'));
    beforeEach(module('templates'));

    var element,
        $scope,
        text = {
            _id: '540d73dafef38b74188ecde4',
            author: 'LOL',
            body: 'OLOLO',
            title: 'No title'
        };

    beforeEach(inject(function ($rootScope, $compile) {
        $scope = $rootScope.$new();
        $scope.text = text;
        element = angular.element('<blogpost></blogpost>');
        $compile(element)($scope);
        $scope.$digest();
    }));

    it('body should have right text', inject(function ($compile) {
        expect(element.find('p').text()).toBe(text.body);
    }));

});