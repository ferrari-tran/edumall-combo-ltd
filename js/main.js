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

/**
 * Modal course
 */
$(document).ready(function() {
	var modal = $('.modal-course-details');

	$(modal).on('shown.bs.modal', function (e) {
		var button = $(e.relatedTarget),
	  		courseID = $(button).data('course');

		// $('.nav-carousel-modal').on('init', function(e, slick) {
		// 	console.log(this);
		// 	$(this).slick('slickGoTo', 1);
		// });

		// $('.nav-carousel-details').on('init', function(e, slick) {
		// 	$(this).slick('slickGoTo', courseID - 1);
		// });
		
		// Slider nav
		var config = {
			slidesToShow: 1,
			slidesToScroll: 1,
			centerMode: true,
			centerPadding: 0,
			fade: true,
			asNavFor: '.nav-carousel-details',
			prevArrow: '<span class="nav-carousel-control left"><i class="icon icon-angle-left"></i></span>',
			nextArrow: '<span class="nav-carousel-control right"><i class="icon icon-angle-right"></i></span>'
		};
		$('.nav-carousel-modal').not('.slick-initialized').slick(config);

		// Slider for
		var config2 = {
			slidesToShow: 1,
			slidesToScroll: 1,
			fade: true,
			arrows: false,
			asNavFor: '.nav-carousel-modal'
		};
		$('.nav-carousel-details').not('.slick-initialized').slick(config2);

		setTimeout(function() {
			console.log('lsdfjlef');
			$('.nav-carousel-modal').slick('slickGoTo', courseID - 1);
			$('.nav-carousel-details').slick('slickGoTo', courseID - 1);
		}, 10);
	});

	$('.btn-buy').click(function(e) {
		$(modal).modal('hide');
	});
});

/**
 * Background image
 */
document.addEventListener("DOMContentLoaded", function(event) { 
  var imgBg = document.getElementsByClassName('img-bg');
  if (imgBg) {
    for (var i = 0; i < imgBg.length; i++) {
      var item  = imgBg[i],
          src   = item.getAttribute('data-src');
          
      item.style.backgroundImage = src ? 'url("' + src + '")' : 'https://www.bus.com/assets/camaleon_cms/image-not-found-4a963b95bf081c3ea02923dceaeb3f8085e1a654fc54840aac61a57a60903fef.png';
    }
  }
});