(function ($) {
  Drupal.behaviors.da_vinciTheme = {
    attach: function (context) {

      $('img.image-style-ps-project-logo').load(function() {

        var $sidebar   = $("#floating_menu"), 
            $window    = $(window),
            offset     = $sidebar.offset(),
            topPadding = 0;



        $window.scroll(function() {
          var $first       = $("#goal"),
             offset_first = $first.offset(),
             $second       = $("#solution"),
             offset_second = $second.offset(),
             $third       = $("#results"),
             offset_third = $third.offset();
             check =  $window.scrollTop() + topPadding;

          if (check < (offset_third.top - 100)) {
            if (check < (offset_second.top - 100)) {
              $('#floating_menu li a').removeClass('active');
              $('#floating_menu li:nth-child(1) a').addClass('active');
            }
            else {
              $('#floating_menu li a').removeClass('active');
              $('#floating_menu li:nth-child(2) a').addClass('active');
            }
          }
          else {
            $('#floating_menu li a').removeClass('active');
            $('#floating_menu li:nth-child(3) a').addClass('active');
          }

          if (($window.scrollTop() > offset.top) /*&& ($window.scrollTop() - offset.top + topPadding < offset_third.top)*/) {
            $sidebar.stop().animate({marginTop: $window.scrollTop() - offset.top + topPadding + 70});
          } 
          else {
            $sidebar.stop().animate({marginTop: 0});
          }
        });

        $('a[href*="#"]:not([href="#"])').click(function() {
          if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
            if (target.length) {
              $('html, body').animate({
                //Add -70 pixel due to static navigation bar
                scrollTop: target.offset().top - 70
              }, 500);
              return false;
            }
          }
        });
      
      });

    }
  }
})(jQuery);