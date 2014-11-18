'use strict';

/**
 * @ngdoc function
 * @name localApp.services:productData
 * @description
 * # ProductCData
 * Controller of the localApp
 */
angular.factory('productDataService', function ($q, $timeout) {
    return { 
        data : {},
        load : function(id) {
            var defer = $q.defer();
            var data = this.data;
            $timeout(function () {
                data.id = id;
                defer.resolve(data);
            }, 1000);
            return defer.promise;
        }
    };
});