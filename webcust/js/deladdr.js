$(document).ready(function(){
  if ($.find('#deladdr_edit').length > 0) {
    $('#webapp').addClass('text-center');
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
    $('#deladdr_edit .card-footer input[type=submit]').addClass('btn btn-primary');
    $('#deladdr_edit').wrapAll('<div class="d-flex justify-content-center"></div>');
    $('h1').addClass('my-4');
    $('#deladdr_edit table').attr('cellpadding','5');
  }
});
