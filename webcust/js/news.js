$(document).ready(function(){
  $('#webapp').addClass('container');
  $('#webapp>ul').contents().unwrap().wrapAll('<div class="row"></div>');
  $('#webapp li').each(function(){
    $(this).contents().unwrap().wrapAll('<div class="col-md-4"></div>');
  });
  $('#webapp').attr('id','webapp-news');
  $('.cont_read_more').addClass('text-center');
  $('.cont_read_more').contents().wrap('<button class="btn btn-primary"></button>');
  $('.content_image.cover').css('background','url('+$('.content_image.cover>img').attr('src')+')');
  $('.content_image.cover>img').remove();
  $('.content_image.cover').css({'background-position':'center','background-size':'cover'})
});
