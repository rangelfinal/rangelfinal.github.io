navHeight = $('.navbar').outerHeight(true) + 10
jumbontronHeight = $('.jumbotron').outerHeight(true) + 10

### activate sidebar ###

$('.sidebar').affix offset:
  top: navHeight + jumbontronHeight
  bottom: 80

### activate scrollspy menu ###

$body = $(document.body)
$('.sidebar > ul > li > ul').hide()
$('.sidebar > ul > li.active > ul').show()
$body.scrollspy
  target: '#sidebarDiv'
  offset: navHeight
$body.on 'affixed-top.bs.affix', ->
  $('li .subsidebar').hide()
  $('li.active .subsidebar').show()
  return
$body.on 'affixed.bs.affix', ->
  $('li .subsidebar').hide()
  $('li.active .subsidebar').show()
  return
$('#sidebarDiv').on 'activate.bs.scrollspy', ->
  $('li .subsidebar').hide()
  $('li.active .subsidebar').show()
  return

### smooth scrolling sections ###

$('a[href*=#]:not([href=#])').click ->
  if location.pathname.replace(/^\//, '') == @pathname.replace(/^\//, '') and location.hostname == @hostname
    target = $(@hash)
    target = if target.length then target else $('[name=' + @hash.slice(1) + ']')
    if target.length
      $('html,body').animate { scrollTop: target.offset().top }, 1000
      return false
  return
addAnchors()