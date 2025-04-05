  $(document).ready(function(){
  $('.shopbasket_qtyfield').attr({'type':'number','step':'1','min':'0'});
  $('.shopbasket_qtyfield').addClass('form-control');
  $('.shopbasketdiv').contents().unwrap().wrapAll('<table class="table table-striped"></table>');
  $('.shoptablehead').contents().unwrap().wrapAll('<thead><tr></tr></thead>');
  $('.cleardiv').remove();
  $('thead>tr.shopbasketcol_itemimage').html(' ');
  let curr1 = $('.shopbasketcol_unitprice').first().find('span').html();
  let curr2 = $('.shopbasketcol_price').first().find('span').html();
  $('.shopbasketcol_unitprice>span').remove();
  $('.shopbasketcol_price>span').remove();
  let unitPrice = $('thead>tr>div.shopbasketcol_unitprice').html();
  let price = $('thead>tr>div.shopbasketcol_price').html();
  let unitPriceText = unitPrice + curr1;
  let priceText = price + curr2;
  $('thead>tr>div.shopbasketcol_unitprice').html($.trim(unitPriceText));
  $('thead>tr>div.shopbasketcol_price').html($.trim(priceText));
  $('thead>tr').children().contents().unwrap().wrap('<th></th>');
  $('.shopbasketrow').wrapAll('<tbody></tbody>');
  $('tbody').children().each(function(){
    $(this).contents().unwrap().wrapAll('<tr></tr>');
  });
  $('tbody>tr').each(function(){
    $(this).children().each(function(){
      $(this).contents().unwrap().wrapAll('<td></td>');
    });
  });
  $('td').css('vertical-align','middle');
  $('tbody>tr>td:nth-child(8)').each(function(){
    $(this).html($(this).children());
    $(this).find('a:first-child').addClass('btn btn-primary btn-sm').css('padding','.25rem .5rem');
    $(this).find('a:nth-child(2)').html('<button class="btn btn-sm btn-danger" style="padding:.25rem .5rem"><i class="fa fa-trash"></i></button>');
  });
  i = 0;
  while (i < 4) {
    $('tbody>tr').last().prepend('<td></td>');
    i++;
  }
  $('tbody>tr').last().append('<td></td>');
  $('tbody>tr>td:nth-child(8)').css('white-space','nowrap');
  $('th').css('white-space','nowrap');
  $('tbody>tr').last().find('td').slice(-2).each(function(){
    $(this).contents().unwrap().wrapAll('<th></th>');
  });
  if ($.find('.shopbasketdivconfirm').length !== 0) {
    $('#webapp').removeClass('col-lg-9');
    $('#webapp').addClass('col-lg-12');
    $('#webapp').attr('id','webapp-confirm');
    $('#sidebar').remove();
  }
  $('#webapp-confirm tbody>tr').last().find('td').last().remove();
  $('#webapp-confirm tbody>tr').last().prepend('<td></td>');
  $('tbody>tr').last().find('td:nth-child(5)>a>input').addClass('btn btn-danger');
  $('tbody>tr').last().find('td:nth-child(5)').css('text-align','center');
  $('table').wrapAll('<div class="col-12"></div>').wrapAll('<div class="table-responsive">');
  $('.shopbasketcheckoutdiv').wrapAll('<div class="col mb-2"></div>').wrapAll('<div class="row justify-content-center"></div>')
  $('.shopbasketcheckoutdiv').addClass('col-sm-4');
  $('.shopbasketcheckoutdiv>a>input').addClass('btn btn-lg btn-block btn-success');
  if ($('.table.table-striped').find('tbody').length == 0) {
    $('.table.table-striped').css('text-align','center');
  }
  if ($('#webapp>div').first().hasClass('col-12')) {
    $('img').css('width','100px');
  }
  if ($.find('#basket').length == 1) {
    $('ul.navbar-nav>li').each(function(){
      if ($(this).hasClass('active')) {
        $(this).removeClass('active');
      }
    });
    $('.fa-shopping-cart').parent().parent().addClass('active');
  }
});
