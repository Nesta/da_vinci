(function ($) {
  Drupal.behaviors.da_vinciTheme = {
    attach: function (context) {
      $('.contact_office_marker').click(function(event) {
        event.preventDefault();
        $.when($('.contact_office').removeClass('active')).then($(this).next().toggleClass('active'));
      });
    }
  }
})(jQuery);