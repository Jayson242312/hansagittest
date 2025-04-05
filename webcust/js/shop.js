$(document).ready(function(){
  $('#sidebar').prepend('<h1 class="my-4">HansaWorld</h1>');
  $('#sidebar ul>li').addClass('list-group-item');
  $('#webapp').addClass('col-lg-9');
  $('.shopcatalogbreadcrumbs').remove();
  $('.display_mode_form').remove();
  $('.shopcataloghead').remove();
  $('.shopcatalogcol_no').remove();
  $('.shopcatalogdiv').addClass('row');
  $('.shopcatalogrow').addClass('col-lg-4 col-md-6 mb-4');
  $('.shopcatalogcol_main').addClass('card h-100');
  $('.shopcatalog_itemimage>a>img').addClass('card-img-top');
  let itemDet = $('.shopcatalog_firstline,.shopcatalog_secondline,.shopcatalog_thirdline');
  let length = itemDet.length;
  i = 0;
  while (i < length) {
    itemDet.slice(i,i+3).wrapAll('<div class="card-body"></div>');
    i = i + 3;
  }
  $('.shopcatalog_itemimage').each(function(){
    if ($(this).find(':first-child').hasClass('shopcatalog_itemimage_replace')) {
      let link = $(this).parent().find('.shopcatalog_firstline').find('a').attr('href');
      $(this).find(':first-child').append('<a href="'+link+'"><img src="/images/no-image-icon.png" class="card-img-top"></a>');
    }
  });
  $('.item_qty_field').attr({'type':'number','step':'1','min':'0'});
  $('.item_qty_field').addClass('form-control');
  $('.more_info_link').addClass('btn btn-sm btn-primary');
  $('.add_to_basket_link').addClass('btn btn-sm btn-primary');
  $('.shopcatalog_actions').each(function(){
    $(this).html($(this).children());
  });
  $('.btn.btn-sm').css('padding','.25rem .5rem');
  $('.shopcatalogcategories').remove();
  $('.f_opt').wrapAll('<div class="btn-group" data-toggle="buttons"></div>');
  $('.f_opt').each(function(){
    let name = $(this).find('.f_opt_text').html();
    $(this).find('input').wrap('<label class="btn btn-primary">'+name+'</label>');
    $(this).find('input').prop('hidden',true);
    if ($(this).find('input').prop('checked')) {
      $(this).find('label').addClass('active');
    } else {
      $(this).find('label').removeClass('active');
    }
  });
  $('.f_opt_text').remove();

  if ($.find('.shopcatalogdiv').length !== 0) {
    $('ul.navbar-nav>li').each(function(){
      if ($(this).hasClass('active')) {
        $(this).removeClass('active');
      }
      let link = $(this).find('a').attr('href');
      if (typeof(link) == 'undefined') {
        link = '';
      }
      if (link.slice(9,16) == 'catalog') {
        $(this).addClass('active');
      }
    });
  }

  $('.shopproductinfo_actions_top').html($('.shopproductinfo_actions_top').children());
  $('.shopproductinfo_actions_top>a').addClass('btn btn-primary');
  $('.shopproductinfodiv>h1').addClass('my-4');
  let buttons = $('.shopproductinfo_actions_top');
  $('.shopproductinfodiv').append(buttons);
});
