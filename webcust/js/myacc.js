$(document).ready(function(){
  $('.row').first().wrapAll('<div class="container"></div>');
  $('.container').css('padding-top','56px');
  $('#my_account>h1').addClass('my-4');
  $('#myacc_menu').prepend($('#my_account>h1'));
  let txt = $('#myacc_menu>h1').text();
  $('#myacc_menu>h1').text(txt.replace(' Overview',''));
  $('#my_account').addClass('col-lg-8 d-flex justify-content-center');
  $('#details').addClass('card');
  $('#details>h2').addClass('my-4').wrap('<div class="card-header"></div>');
  $('#details table').wrapAll('<div class="card-body"></div>');
  let submitAcc = $('#cureg_edit td').last().find('input');
  $('#details_edit').append('<div class="card-footer" style="text-align: center"></div>');
  $('#details_edit>div').last().html(submitAcc);
  $('#details_edit .card-footer input[type=submit]').addClass('btn btn-primary');


  $('#deladdr_edit').addClass('card');
  $('#deladdr_edit>h2').addClass('my-4').wrap('<div class="card-header"></div>');
  $('#deladdr_edit ul').wrapAll('<div class="card-body"></div>');
  $('#deladdr_edit ul').contents().unwrap().wrapAll('<table></table>');
  $('#deladdr_edit table>li').wrapAll('<tbody></tbody>');
  $('#deladdr_edit table>tbody>li').each(function(){
    $(this).contents().unwrap().wrapAll('<tr></tr>');
  });
  $('#deladdr_edit table>tbody>tr').each(function(){
    $(this).find('label').wrap('<td></td>');
    $(this).find('input').wrap('<td></td>');
    $(this).find('select').wrap('<td></td>');
  });
  let submitDel = $('#deladdr_edit td').last().find('input');
  $('#deladdr_edit>form').append('<div class="card-footer" style="text-align: center"></div>');
  $('#deladdr_edit>form>div').last().html(submitDel);
  $('#deladdr_edit .card-footer input[type=submit]').addClass('btn btn-primary');


  $('.curregusertable').attr('cellpadding','5');
  $('#deladdr_edit table').attr('cellpadding','5');
  $('#details>#button').addClass('card-footer');
  $('#button>a').addClass('btn btn-primary')
  $('#details>#button>a').css('width','50%');
  $('#details_edit').addClass('card');
  $('#details_edit>#cureg_edit').addClass('card-body');
  $('tbody input').addClass('form-control');
  $('tbody select').addClass('form-control');
  $('input[type=checkbox]').parent().parent().find('td:first-child>label').on('click',function(){
    let checkbox = $(this).parent().parent().find('input');
    if (checkbox.prop('checked') == true) {
      checkbox.prop('checked',false);
    } else {
      checkbox.prop('checked',true);
    }
  });
  $('input.button').removeClass('form-control').addClass('btn btn-primary').css('width','50%');
  // if ($('#langcode').val() == 'ENG') {
  //   $('input[type=submit]').attr('value','Submit');
  // }

  $('#deladdrlist>ul').wrapAll('<div class="list-group"></div>');
  $('#deladdrlist ul>li').addClass('list-group-item');

  if ($.find('#errorbox').length !== 0) {
    $('tbody>tr').each(function(){
      if ($(this).find('td').length == 0) {
        $(this).css({'color':'#721c24','white-space':'nowrap'});
      }
    });
  }

  $('#orders>ul').addClass('orderstable');
  $('#change_password>ul').addClass('invoicestable');
  $('.invoicestable, .orderstable').contents().unwrap().wrapAll('<div class="invoicestable"></div>');
  $('.invoicestable>li').contents().unwrap();
  $('#startdate, #enddate').daterangepicker({
    singleDatePicker: true,
    locale: {
      format: 'MM/DD/YYYY'
    }
  });
  $('#startdate,#enddate,input[type=password]').addClass('form-control');
  $('#orddateformat').remove();
  $('.invoicestable input[type=submit]').addClass('btn btn-primary');
  $('.invoicestable input[type=submit]').css('width','50%');
  $('.invoicestable input[type=submit]').wrap('<div style="text-align:center"></div>');
  $('#invoice_list, #order_list, #chpassword').addClass('col-sm-8');
  $('.invoicestable2, .orderstable2').css('width','100%');
  $('.iv_status').slice(1).find(':first-child').wrap('<strong></strong>');
  $('.stat0').css('color','#155724');
  $('.stat2').css('color','#721c24');
});
