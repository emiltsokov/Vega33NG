'use strict';

/**
 * @ngdoc function
 * @name localApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the localApp
 */

 function navCtrl($scope, $route) {
     //we set $route to  we have access to it in the HTML
     $scope.$route = $route;
 }

function getProducts($scope, $http){
    $http.get('../../data/products.json').
      success(function(data, status, headers, config) {
        // this callback will be called asynchronously
        // when the response is available
        $scope.products = data;
      }).
      error(function(data, status, headers, config) {
        // called asynchronously if an error occurs
        // or server returns response with an error status.
      });
 }

 function getCategories($scope, $http){

       var categoryList = {};
       $http.get('../../data/categories.json').
         success(function(data, status, headers, config) {
           // this callback will be called asynchronously
           // when the response is available

           $scope.categories = data;
           $scope.categoryList = $scope.categories[0];
           // console.log($scope.categoryList);


         }).
         error(function(data, status, headers, config) {
           // called asynchronously if an error occurs
           // or server returns response with an error status.
         });

  }

  function selectAction($scope){
    console.log('dd2');
  }

  function updateProductList($scope){
    console.log('dd1');
  }


angular.module('localApp')
  .controller('MainCtrl',  function ($scope, $http) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

  var selectedCat = 0;
  $scope.selectedCat = selectedCat;


  $scope.catSelected = function(id) {
        console.log(id);
  };
  getProducts($scope, $http);

   getCategories($scope, $http);
   // this.getProducts = getProducts;

  })
  .directive('productsList', function() {
    return {
      restrict: 'EA',
      scope: true,
      templateUrl: '../views/products-list.html'
    };
  })
  .filter('searchFor', function(){
    // All filters must return a function. The first parameter
    // is the data that is to be filtered, and the second is an
    // argument that may be passed with a colon (searchFor:searchString)

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
       console.log('nqma');
        $('.search-msg').removeClass('hidden');
      }
      else {
        console.log('ima');
          $('.search-msg').addClass('hidden');
      }

      return result
    };

  })
  .filter('filterByCategory', function(){
    // All filters must return a function. The first parameter
    // is the data that is to be filtered, and the second is an
    // argument that may be passed with a colon (searchFor:searchString)

    return function(arr, filteredCategory){
      if(!filteredCategory){
        return arr;
      }
      var result = [];

      filteredCategory = filteredCategory.toLowerCase();

      // Using the forEach helper method to loop through the array
      angular.forEach(arr, function(item){
        if(item.category.toLowerCase().indexOf(filteredCategory) !== -1){
          result.push(item);
        }
      });
      return result;
    };

  });
