(function ($) {
  Drupal.behaviors.da_vinciTheme = {
    attach: function (context) {

      var $window    = $(window);

      $window.scroll(function() {
        var check =  $window.scrollTop();

        if (check < 50) {
          $('.header_top').removeClass('menu_colored');
        }
        else {
          $('.header_top').addClass('menu_colored');
        }

      });
      
    }
  }
})(jQuery);