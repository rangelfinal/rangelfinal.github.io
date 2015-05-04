'use strict';

/**
 * @ngdoc function
 * @name personalWebsiteApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the personalWebsiteApp
 */
angular.module('personalWebsiteApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
