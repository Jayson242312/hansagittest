$(document).ready(function(){
  $('#webapp-confirm>h1').addClass('text-center');
  $('#webapp-confirm .shopbasketdivconfirm').addClass('table-responsive');
  $('.shopbasketcol_itemimage').html(' ');
  $('.shopbasketcol_itemimage').contents().unwrap().wrapAll('<th style="white-space:nowrap"></th>');
  $('#webapp-confirm .shopbasketdivconfirm').children().wrapAll('<table class="table table-striped"></table>');
  $('#webapp-confirm').children().slice(2).wrapAll('<div class="row"></div>');
  $('#webapp-confirm>div').last().children().addClass('col-md-4').css('margin-top','20px');
  $('input[name=paymethod]').css('margin-right','5px');
  $('#customerordnum, #checkout_sel_deladdr').addClass('form-control');
  $('input[type=submit]').each(function(){
    if ($(this).attr('name') == 's1') {
      $(this).addClass('btn btn-success');
      $(this).css('width','100%');
    }
    if ($(this).attr('value') == 'Update') {
      $('.table-responsive').append($(this));
      $(this).addClass('btn btn-success');
    }
  });
  $('input[type=button]').each(function(){
    if ($(this).attr('name') == 's_cancel') {
      $('.table-responsive').append($(this).parent());
      $(this).addClass('btn btn-danger');
    }
  });
  $('input[type=text]').each(function() {
    if ($(this).attr('id') !== 'searchstring') {
      $(this).addClass('form-control');
    }
  });
  $('.table-responsive>input, .table-responsive>a').wrapAll('<div class="row d-flex justify-content-center"></div>');

  $('#deladdr_edit>h2').addClass('text-center').removeClass('col-md-4');
  $('#deladdr_edit>form').removeClass('col-md-4').addClass('card');
  $('#deladdr_edit>form>ul').contents().unwrap().wrapAll('<div class="card-body"></div>');
  $('#deladdr_edit>form>.card-body').children().contents().unwrap();
  $('#deladdr_edit select').addClass('form-control');
  $('#deladdr_edit .card-body input').last().addClass('btn btn-success').css('width','50%');
  $('#deladdr_edit form').append($('#deladdr_edit .card-body input').last());
  $('#deladdr_edit form input').last().wrapAll('<div class="card-footer text-center"></div>');

  $('#webapp>a').addClass('btn btn-primary').css('text-align','center');
  if ($('#webapp').find(':nth-child(2)').hasClass('btn-primary')) {
    $('#webapp').addClass('text-center');
  }
});
