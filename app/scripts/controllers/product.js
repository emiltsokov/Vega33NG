'use strict';
VEGAWEB
  .controller('ProductCtrl',["$scope","$http","$route","navService", function ($scope, $http, $route, navService) {

    $http.get('../data/products.json').
        success(function(data, status, headers, config) {
          $scope.products = data;
          var curProducts = $scope.products.filter(function(item){
              return item.id === $route.current.params.product;
          });
          $scope.curProduct = curProducts[0];
          
        }).
        error(function(data, status, headers, config) {
        });

  }]);
