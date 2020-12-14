$(function(){
  $('.header-nav-link').click(function(){
    var id = $(this).attr('href');
    var offSet = window.screen.availWidth <= 640 ? 0 : 72;

    $('html, body').animate({
      scrollTop: ($(id).offset().top - offSet)
    }, 500);
    return false;
  });
});
