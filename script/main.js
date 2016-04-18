'use strict';

angular.module('physisApp', ['ngAnimate']).controller('physisCtrl', function($scope, $http) {
  $scope.order = 'boards';
  $http.get('./script/boards.json').then(r => $scope.boards = r.data.boards);
  $http.get('./script/members.json').then(r => $scope.members = r.data.members);
});

$('.main.menu').visibility({
    type: 'fixed'
});
$('.overlay').visibility({
    type: 'fixed'
});

// show dropdown on hover
$('.ui.dropdown').dropdown({
    on: 'hover'
});

$(function() {
  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top - 100
        }, 1000);
        return false;
      }
    }
  });
});

$(function() {
  $('.tiny').hover(function(){
      $(this).addClass('infinite animated tada');
      console.log("oi");
    },
    function(){
      $(this).removeClass('infinite animated tada');
    }
  );

  $('.big.physis.logo').hover(function(){
      $(this).addClass('infinite animated pulse');
    },
    function(){
      $(this).removeClass('infinite animated pulse');
    }
  );

  $('.menu .physis.logo').hover(function(){
      $(this).addClass('infinite animated flip');
    },
    function(){
      $(this).removeClass('infinite animated flip');
    }
  );
});

console.log("")
