'use strict';

/**
 * @ngdoc overview
 * @name localApp
 * @description
 * # localApp
 *
 * Main module of the application.
 */
angular
  .module('localApp', [
    /*
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ngTouch',
    */
    'ngRoute'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        activePage: 'home',
        resolve: function($scope){

        }
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        activePage: 'about'
      })
      .when('/news', {
        templateUrl: 'views/news.html',
        controller: 'NewsCtrl',
        activePage: 'news'
      })
      .when('/contact', {
        templateUrl: 'views/contact.html',
        controller: 'ContactCtrl',
        activePage: 'contact'
      })
      .when('/product/:product', {
        templateUrl: 'views/product.html',
        controller: 'ProductCtrl',
        activePage: 'product',
        resolve: function($scope){
          $scope.getProducts($scope, $http);
          console.log('das');
        }

      })
      .otherwise({
        redirectTo: '/'
      });
  });
