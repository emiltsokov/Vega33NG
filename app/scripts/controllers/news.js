'use strict';

/**
 * @ngdoc function
 * @name localApp.controller:NewsCtrl
 * @description
 * # NewsCtrl
 * Controller of the localApp
 */
angular.module('localApp')
  .controller('NewsCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
