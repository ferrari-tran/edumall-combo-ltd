/**
 * Timeline
 */
$(document).ready(function() {
	var timeline = $('.ss-timeline');
	if (timeline.length > 0) {
		var config = {
			slidesToShow: 1,
      slidesToScroll: 1,
      dots: true,
      autoplay: 3000,
      arrows: false,
      mobileFirst: true,
      focusOnSelect: true,
      centerPadding: 0,
      infinite: false,
      responsive: [
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 4,
            dots: false
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 3, 
          }
        },
        {
          breakpoint: 576,
          settings: {
            slidesToShow: 2, 
          }
        }
      ]
		};
		$(timeline).slick(config);
	}
});