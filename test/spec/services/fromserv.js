'use strict';

describe('Service: Posts', function () {
    var $httpBackend,
        texts,
        queryRespond = [
            {
                _id: '540d73dafef38b74188ecde4',
                author: 'LOL',
                body: 'OLOLO',
                title: 'No title'
            }
        ];

    beforeEach(module('blogerApp'));

    beforeEach(inject(function ($injector) {
        $httpBackend = $injector.get('$httpBackend');
        $httpBackend.when('GET', 'http://54.72.3.96:3000/posts').respond(queryRespond);

        texts = $injector.get('Posts');
    }));

    it('should have any posts', function () {
        var textsList  = texts.query();
        expect(textsList.length).toBe(0);

        $httpBackend.flush();
        expect(textsList.length).toBeGreaterThan(0);
    });
});