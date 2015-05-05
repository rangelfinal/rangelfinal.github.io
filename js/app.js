var navHeight = $('.navbar').outerHeight(true) + 10;
var jumbontronHeight = $('.jumbotron').outerHeight(true) + 10;

/* activate sidebar */
$('.sidebar').affix({
  offset: {
    top: navHeight+jumbontronHeight
  }
});

/* activate scrollspy menu */
var $body = $(document.body);


$body.scrollspy({
	target: '#sidebarDiv',
	offset: navHeight
});

/* smooth scrolling sections */
$('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top - 50
        }, 1000);
        return false;
      }
    }
});

addAnchors();
