'use strict';
VEGAWEB
 .controller('NewsCtrl',["$scope","$http","$route","navService", function ($scope, $http, $route, navService) {
    $http.get('../data/news.json').
    success(function(data, status, headers, config) {
      $scope.news = data;
      // $scope.news = angular.fromJson(data);
      // $scope.news = JSON.decode(data);
    }).
    error(function(data, status, headers, config) {
    });
}])