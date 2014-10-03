'use strict';

describe("Unit: Blogpost", function() {
    var element;
    var $scope;
    beforeEach(module("blogerApp"))
    beforeEach(inject(function($compile, $rootScope) {
        $scope = $rootScope;
        element = angular.element("<blogpost></blogpost>");
        $compile(element)($rootScope)
    }));

    describe("blogpost", function() {
        it("should add a class of plain", function() {
            expect(element.hasClass("plain")).toBe(true);
        })
    })
});