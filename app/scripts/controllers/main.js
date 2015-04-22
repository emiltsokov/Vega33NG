'use strict';
var VEGAWEB = angular.module('localApp');
VEGAWEB.controller('navCtrl',["$scope", "$route","navService", function($scope, $route, navService){
      $scope.$route = $route;
  }])
  .controller('MainCtrl', ["$scope", "$http", function ($scope, $http) {
  var selectedCat = 0;
  $scope.selectedCat = selectedCat;
  

  $http.get('../data/products.json').
    success(function(data, status, headers, config) {
      $scope.products = data;
    }).
    error(function(data, status, headers, config) {
    });

  }])
  .directive('productsList', function() {
    return {
      restrict: 'EA',
      scope: true,
      templateUrl: 'views/products-list.html'
    };
  })
  .filter('searchFor', function(){
    return function(arr, searchString){
      if(!searchString){
        return arr;
      }
      var result = [];

      searchString = searchString.toLowerCase();

      // Using the forEach helper method to loop through the array
      angular.forEach(arr, function(item){
        if(item.name.toLowerCase().indexOf(searchString) !== -1){
          result.push(item);
        }
      });
      if(result.length === 0) {
        $('.search-msg').removeClass('hidden');
      }
      else {
          $('.search-msg').addClass('hidden');
      }

      return result
    };
});

