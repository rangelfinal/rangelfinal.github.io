"use strict";function defineLogoSize(){var e=$(".main.menu").width(),i=$(".main.menu").height(),o=e<i?e:i;o=o/Math.sqrt(2)*.75,$(".logo").width(o),$(".logo").height(o);var n=(e-o)/2,t=(i-o)/2,g=(o*Math.sqrt(2)-o)/2;$(".logo").css("margin-left",n>g?n:g),$(".logo").css("margin-top",t>g?t:g)}$(document).ready(function(){defineLogoSize(),$(window).resize(defineLogoSize)});