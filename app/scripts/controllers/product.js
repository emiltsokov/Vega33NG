'use strict';

/**
 * @ngdoc function
 * @name localApp.controller:ProductCtrl
 * @description
 * # ProductCtrl
 * Controller of the localApp
 */
angular.module('localApp')
  .controller('ProductCtrl', function ($scope, $route) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    // console.log($scope.products);
    // console.log($scope.products[2].id, $route.current.params.product);
    // console.log("found:", $scope.products.indexOf($route.current.params.product) != -1);
    var curProducts = $scope.products.filter(function(item){
        return item.id === $route.current.params.product;
    });
    $scope.curProduct = curProducts[0];
    // console.log($scope.curProduct);

  });
