$(document).ready(function(){
  let contactRow = $('.cu_row');
  let contactSend = $('.cu_form').find('.cu_form_submit').find(':first-child');
  contactSend.addClass('btn btn-primary');
  contactRow.each(function(){
    let contactLabel = $(this).find('.cu_label').first();
    let contactInput = $(this).find('.cu_field').find(':first-child');
    contactInput.addClass('form-control');
    let contactInputName = contactInput.attr('name');
    let asterisk = '';
    if (contactLabel.find('span')) {
      asterisk = '*';
      contactInput.attr('data-req','1');
      contactLabel.find('span').remove();
    } else {
      contactInput.attr('data-req','0');
    }
    let contactLabelPlaceholder = contactLabel.html() + asterisk;
    $(this).find('.cu_field').addClass('md-form mb-0');
    if(contactInput.is('textarea')) {
      contactInput.addClass('md-textarea');
    }
    $(contactInput).attr('placeholder',contactLabelPlaceholder);
    contactLabel.remove();
  });
  validateForm();
});

function validateForm() {
  $('input[type=submit]').prop('disabled',true);
  $('input, textarea').on('input', function(){
    let testf = 1;
    $('input, textarea').each(function(){
      if ($(this).data('req') == 1) {
        if (typeof($(this).val()) == 'undefined' || $(this).val() == '') {
          testf = 0;
        }
      }
    });
    if (testf == 1) {
      $('input[type=submit]').prop('disabled',false);
    } else {
      $('input[type=submit]').prop('disabled',true);
    }
  });
}
