$(document).ready(function(){
  $('#loginbox p').slice(0,2).contents().unwrap();
  $('#loginbox form span').contents().unwrap().wrap('<label></label>');
  $('#loginbox form>input').addClass('form-control');
  $('.loginline3').contents().unwrap().wrap('<div id="login-buttons" style="text-align:center"></div>');
  $('.loginbutton').addClass('btn btn-primary');
  $('#registerlink>a').addClass('btn btn-success');
  $('#resetlink>a').addClass('btn btn-danger');

  $('#reg-content #cureg_edit').addClass('card');
  $('#reg-content table').wrapAll('<div class="card-body"></div>');
  $('#reg-content form').append($('#reg-content td').last());
  $('#reg-content tr').last().remove();
  $('#reg-content td').last().contents().unwrap().wrapAll('<div class="d-flex justify-content-center card-footer"></div>');
  $('#reg-content table input, #reg-content table select').addClass('form-control');
  $('.curregusertable').attr('cellpadding','5');
  $('#reg-content input[type=submit]').addClass('btn btn-primary').css('width','50%').prop('disabled',false);
  if ($.find('#errorbox').length !== 0) {
    $('#errorbox').addClass('card-body').css('padding-bottom','0px');
  }

  $('#reset_passw').contents().unwrap().wrapAll('<div id="reset_passw"></div>');
  $('#reset_passw').addClass('card');
  $('#reset_passw').children().slice(0,3).wrapAll('<div class="card-body"></div>');
  $('#reset_passw .custcode_label').contents().unwrap().wrap('<label></label>');
  $('#reset_passw .custcode_input').contents().unwrap().addClass('form-control');
  $('#reset_passw .resetsubmit').contents().unwrap().wrapAll('<div class="card-footer text-center"></div>');
  $('#res-content input[type=submit]').addClass('btn btn-primary').css('width','50%').prop('disabled',false);
  // $('#res-content form').append($('.resetsubmit'));
  // $('#reset_passw li').contents().unwrap().wrapAll('<div class="card-body"></div>');
  if ($.find('.error').length > 0) {
    let err = $('.error');
    $('#loginbox>form').append(err);
    $('#loginbox>form').append($('#login-buttons'));
  }
});
