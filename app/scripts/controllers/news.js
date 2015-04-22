'use strict';
VEGAWEB
 .controller('NewsCtrl',["$scope","$http","$route","navService", function ($scope, $http, $route, navService) {
    $http.get('../data/news.json').
    success(function(data, status, headers, config) {
      $scope.news = data;
    }).
    error(function(data, status, headers, config) {
    });
}])