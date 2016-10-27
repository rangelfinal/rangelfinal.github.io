$(document).ready(() => {

  var path = document.querySelector('.logo5 .white.line');
  var length = path.getTotalLength();

  $('.logo.logo5').hover(animate);

  function animate() {
    // Set up the starting positions
    path.style.strokeDasharray = length + ' ' + length;
    path.style.strokeDashoffset = length;
    $('.logo5 .white.line').animate({strokeDashoffset: 0}, 5000);
  };
});
