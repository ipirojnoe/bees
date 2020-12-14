$(function(){
  $('.header-nav-link').click(function(){
    var id = $(this).attr('href');

    $('html, body').animate({
      scrollTop: ($(id).offset().top - 72)
    }, 500);
    return false;
  });
});
