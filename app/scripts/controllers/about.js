'use strict';

/**
 * @ngdoc function
 * @name personalWebsiteApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the personalWebsiteApp
 */
angular.module('personalWebsiteApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
