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
$('.main.menu  .ui.dropdown').dropdown({
    on: 'hover'
});
