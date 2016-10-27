$(document).ready(() => {
  defineLogoSize();
  $( window ).resize(defineLogoSize);
});

function defineLogoSize() {
  let width = $('.main.menu').width();
  let height = $('.main.menu').height();
  let size = width < height ? width : height;
  size = (size/Math.sqrt(2))*0.75;
  $('.logo').width(size);
  $('.logo').height(size);

  let marginLeft = (width - size)/2;
  let marginTop = (height - size)/2;
  let minimumMargin = (size*Math.sqrt(2) - size)/2;
  $('.logo').css('margin-left', marginLeft > minimumMargin ? marginLeft : minimumMargin);
  $('.logo').css('margin-top', marginTop > minimumMargin ? marginTop : minimumMargin);
}
