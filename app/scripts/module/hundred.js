'use strict';

angular.module('moduleHundred', [])
  .service('hundred', function hundred() {
        this.cut = function (text) {
              if (text) {
                    return text.slice(0, 100);
                  }
            };
      });