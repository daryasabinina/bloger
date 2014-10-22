'use strict';

describe('Directive: popup', function () {

    // load the directive's module
    beforeEach(module('blogerApp'));
    beforeEach(module('templates'));

    var element,
        $scope,
        text =  {
            _id: '540d73dafef38b74188ecde4',
            author: 'LOL',
            body: 'OLOLO',
            title: 'No title'
        };

    beforeEach(inject(function ($rootScope, $compile) {
        $scope = $rootScope.$new();
        $scope.text = text;
        element = angular.element('<popup></popup>');
        $compile(element)($scope);
        $scope.$digest();
    }));

    it('should have all neccesery fields', inject(function ($compile) {

        expect(element.find('input').length).toBe(3);
        expect(element.find('textarea').length).toBe(1);
    }));

    it('should add text', inject(function ($compile) {
        expect(element.find('textarea').text().length).toBe(text.body.length);
    }));

    it('should have not disabled button, becouse scope has text', inject(function ($compile) {
        expect(element.find('button')[2].disabled).toBe(false)
    }));
});