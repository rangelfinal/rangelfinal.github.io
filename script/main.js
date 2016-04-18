'use strict';

angular.module('physisApp', ['ngAnimate']).controller('physisCtrl', function($scope, $http) {
  $scope.order = 'alphabetical';
  $http.get('./script/boards.json').then(r => $scope.boards = r.data.boards);
  $http.get('./script/members.json').then(r => $scope.members = r.data.members);
});

$('.main.menu').visibility({
    type: 'fixed'
});
$('.overlay').visibility({
    type: 'fixed'
});

// lazy load images
$('.image').visibility({
    type: 'image',
    transition: 'vertical flip in',
    duration: 500
});

// show dropdown on hover
$('.ui.dropdown').dropdown({
    on: 'hover'
});
