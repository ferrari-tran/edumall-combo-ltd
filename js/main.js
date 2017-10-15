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
 * Benefit carousel
 */
$(document).ready(function() {
	var config = {
		infinite: false,
		speed: 300,
		prevArrow: '<img src="images/ic_arrow_left.svg" height="30" class="arrow-prev" />',
		nextArrow: '<img src="images/ic_arrow_right.svg" height="30" class="arrow-next" />'
	}
	$('.benefit-carousel').slick(config);
});

/**
 * Dropdown
 */
$(document).ready(function() {
	var navbar = $('.navbar-collapse');
	var navbarToggle = $(navbar).prev();
	var navbarItem = $(navbar).find('.nav-item a');
	$(navbarItem).on('click', function() {
		$(navbarToggle).trigger('click');
	});
});

/**
 * Submit button
 */
$(document).ready(function() {
  var alertBox = $('#alert-box');
  $(alertBox).hide();
  
  var validator = new FormValidator('form-register', [{
    name: 'name',
    display: 'Vui lòng điền đầy đủ họ tên!',
    rules: 'required'
  }, {
    name: 'mobile',
    rules: 'required|min_length[8]',
    display: 'Số điện thoại chưa đúng định dạng!'
  }, {
    name: 'combo',
    rules: 'required',
    display: 'Vui lòng chọn combo đăng ký!'
  }], function(error, event) {
    if (error.length > 0) {
      /**
       * Show message alert in box
       */
      var msg = error[0].display;
      $(alertBox).show().addClass('alert-danger').html(msg);
    } else {
    	$('#loading').fadeIn();
      /**
       * Check event of button submit
       */
      if (event && event.preventDefault()) {
        event.preventDefault();
      } else if (event) {
        event.returnValue = false;
      }
      /**
       * Send form data
       */
      var form = $(event.target).closest('form');
      var inputs = $(form).find('.form-control');
      var data = {};

      $(inputs).each(function(index, input) {
        var name = $(input).attr('name');
        var value = $(input).val();
        data[name] = value;
      });

      setTimeout(function() {
        var api = '//script.google.com/macros/s/AKfycbyQ4mg8TV6V4KUpeJiZQF2KV5n1JZdQtc-Vd6FZq5yQ8W-9uCwz/exec';
		    var jqxhr = $.ajax({
		      url: api,
		      method: "POST",
		      dataType: "json",
		      data: {
		        name: data.name,
	          mobile: data.mobile,
	          combo: data.combo,
	          note: data.note
		      },
		      success: function(data) {
		      	$('#loading').fadeOut(300);
		        $(alertBox).removeClass('alert-danger').html('Đăng ký thành công!').addClass('alert-success').show();
		      },
		      error: function(data) {
		        alert('Lỗi đăng ký!');
		      }
		    });

      }, 300);
    }
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

/**
 * Button register to form
 */
$(document).ready(function() {
	var btnSubmit = $('.btn-register');
	$(btnSubmit).click(function(e) {
		e.preventDefault();
		var combo = $(this).data('combo');
		if (combo !== undefined) {
			var secOpt = $('#form-register').find('select[name=combo]');
			secOpt.val(combo);
		};
		$('html, body').animate({
      scrollTop: $("#form-register").offset().top - 100
    }, 1000);
	});
});


/**
 * Smooth scroll
 */
$('.btn-scroll')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
      && 
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top - 60
        }, 1000, function() {
          // Callback after animation
          // Must change focus!
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) { // Checking if the target was focused
            return false;
          } else {
            $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
            $target.focus(); // Set focus again
          };
        });
      }
    }
  });