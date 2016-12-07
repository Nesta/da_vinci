(function ($) {

  var $window = $(window);

  function check_if_in_view() {
    $('.animated:in-viewport').addClass('in-view');
    $('.animated:below-the-fold').removeClass('in-view');
    $('.animated:above-the-top').removeClass('in-view');
  }

  $window.on('scroll resize', check_if_in_view, 50);
  $window.trigger('scroll');

})(jQuery);