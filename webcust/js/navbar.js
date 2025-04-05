$(document).ready(function () {
  let trigger = $('.hamburger'),
      overlay = $('.overlay'),
      isClosed = false;

  trigger.click(function () {
    hamburger_cross();
  });

  function hamburger_cross() {
    if (isClosed == true) {
      overlay.hide();
      trigger.removeClass('is-open');
      trigger.addClass('is-closed');
      isClosed = false;
    } else {
      overlay.show();
      trigger.removeClass('is-closed');
      trigger.addClass('is-open');
      isClosed = true;
    }
  }

  $('[data-toggle="offcanvas"]').click(function () {
    $('#wrapper').toggleClass('toggled');
  });

  $('#change-country').contents().wrap('<a href="/change-country"></a>');

  $('#mainNav>ul').first().addClass('navbar-nav mr-auto');
  $('#mainNav>ul>li>a').addClass('nav-link');
  $('#loginstate>a').addClass('nav-link');
  $('#change-country>a').addClass('nav-link');
  $('.searchbox').addClass('md-form my-0');
  $('#change-country').addClass('md-form my-0');
  let searchLabel = $('span.searchlabel').html();
  $('#searchstring').attr('placeholder',searchLabel);
  $('span.searchlabel').remove();
  $('.searchbox input.button').remove();
  $('#langcode').addClass('custom-select');
});
