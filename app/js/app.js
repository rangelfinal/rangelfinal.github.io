var $body, jumbontronHeight, navHeight;

navHeight = $('.navbar').outerHeight(true) + 10;

jumbontronHeight = $('.jumbotron').outerHeight(true) + 10;


/* activate sidebar */

$('.sidebar').affix({
  offset: {
    top: navHeight + jumbontronHeight,
    bottom: 80
  }

  /* activate scrollspy menu */
});

$body = $(document.body);

$('.sidebar > ul > li > ul').hide();

$('.sidebar > ul > li.active > ul').show();

$body.scrollspy({
  target: '#sidebarDiv',
  offset: navHeight
});

$body.on('affixed-top.bs.affix', function() {
  $('li .subsidebar').hide();
  $('li.active .subsidebar').show();
});

$body.on('affixed.bs.affix', function() {
  $('li .subsidebar').hide();
  $('li.active .subsidebar').show();
});

$('#sidebarDiv').on('activate.bs.scrollspy', function() {
  $('li .subsidebar').hide();
  $('li.active .subsidebar').show();
});


/* smooth scrolling sections */

$('a[href*=#]:not([href=#])').click(function() {
  var target;
  if (location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '') && location.hostname === this.hostname) {
    target = $(this.hash);
    target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
    if (target.length) {
      $('html,body').animate({
        scrollTop: target.offset().top
      }, 1000);
      return false;
    }
  }
});

addAnchors();
