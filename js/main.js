(function($) {

	"use strict";

  $(window).load(function() {
    $("#loader").fadeOut("slow", function(){
      $("#preloader").delay(300).fadeOut("slow");
    });
  });

	$('.home-particles').particleground({
    dotColor: '#fff',
    lineColor: '#555555',
    particleRadius: 6,
    curveLines: true,
    density: 10000,
    proximity: 110
	});

	var finalDate = '2021/07/10';

	$('div#counter').countdown(finalDate)
   	.on('update.countdown', function(event) {
   		$(this).html(event.strftime('<div class=\"half\">' +
                        '<span>%D <sup>days</sup></span>' + 
                        '<span>%H <sup>hours</sup></span>' + 
                        '</div>' +
                        '<div class=\"half\">' +
                        '<span>%M <sup>mins</sup></span>' +
                        '<span>%S <sup>secs</sup></span>' +
                        '</div>'));
  });

  var now = new Date();

  $('.scroll-icon .scroll-text').html('&copy; Svakode ' + 
                        now.getFullYear() +
                        '. Designed by <a href="http://www.styleshout.com/">styleshout</a>');

})(jQuery);