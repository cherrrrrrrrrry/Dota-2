$('.preview').slick({
	infinite: true,
  	slidesToShow: 1,
  	slidesToScroll: 1,
  	arrows: true,
	draggable: false,
	autoplay: true,
	autoplaySpeed: 4000,
	pauseOnFocus: false,
	pauseOnHover: false,
	dots: true,
	fade: true
});

$(document).ready(function () {
	$("#logo, #main-menu, #footer-menu, #request1, #request2, #request3, #top").on("click", "a", function (event) {
		event.preventDefault();
		var id = $(this).attr('href');
		var	top = $(id).offset().top
		$('body,html').animate({
			scrollTop: top
		}, 1000);
	});
});

$(document).ready(function() {
	$('.menu-trigger').click(function() {
		$('nav ul').slideToggle(500);
	});

	$(window).resize(function() {
		if ($(window).width > 960 ) {
			$('nav ul').removeAttr('style');
		}
	});
});

$(function() {
	$(document).mouseup(function (e){ // событие клика по веб-документу
		var trigger = $(".menu-trigger"); // тут указываем ID элемента
		var ul = $(".menu-items");
		if (!trigger.is(e.target) // если клик был не по нашему блоку
		    && trigger.has(e.target).length === 0) { // и не по его дочерним элементам
			ul.hide(); // скрываем его
		}
	});
});

jQuery(document).ready(function($) {
	$('#contactForm').on('submit', function(event) {
        event.preventDefault();
        var form = $('#contactForm'),
            button = $('#button'),
            answer = $('#answer'),
            loader = $('#loader');
        $.ajax({
            url: 'handler.php',
            type: 'POST',
            data: form.serialize(),
            beforeSend: function() {
                answer.empty();
                button.attr('disabled', true).css('margin-bottom', '20px');
                loader.fadeIn();
            },
            success: function(result) {
                loader.fadeOut(300, function() {
                    answer.text(result);
                });
                form.find('.field').val('');
                button.attr('disabled', false);
            },
            error: function() {
                loader.fadeOut(300, function() {
                    answer.text('Произошла ошибка! Попробуйте позже.');
                });
                button.attr('disabled', false);
            }
        });
    });
});


// $(document).ready(function () {
// 	var h = $(window).height();
// 	$(".header-logo-desk").addClass('animated bounce');
// 	$(".menu-desk").addClass('animated bounce');
// 	$(".home-desk .inner").addClass('animated zoomIn');
// 	$(window).scroll(function () {
// 		if (($(this).scrollTop() + h) >= $("#toTop").offset().top) {
// 			$("#toTop img").addClass('animated zoomIn slow');
// 		}
// 		if (($(this).scrollTop() + h) >= $(".about-desk").offset().top) {
// 			$(".about-desk h2").addClass('animated zoomIn fast');
// 			$(".about-desk hr").addClass('animated fadeInLeft slow');
// 			$(".about-desk p").addClass('animated flipInX slow');
// 			$(".about-desk .about-item").eq(0).addClass('animated bounceInLeft slow');
// 			$(".about-desk .about-item").eq(1).addClass('animated bounceIn slow');
// 			$(".about-desk .about-item").eq(2).addClass('animated bounceInRight slow');
// 		}
// 		if (($(this).scrollTop() + h) >= $(".watch-desk").offset().top) {
// 			$(".watch-desk .left").addClass('animated bounceInLeft slow');
// 			$(".watch-desk .right").addClass('animated bounceInRight slow');
// 		}
// 		if (($(this).scrollTop() + h) >= $(".portfolio-desk").offset().top) {
// 			$(".portfolio-desk h2").addClass('animated zoomIn fast');
// 			$(".portfolio-desk hr").addClass('animated fadeInLeft slow');
// 			$(".portfolio-desk p").addClass('animated flipInX slow');
// 			$(".portfolio-desk .slider-dots").addClass('animated fadeInDown slow');
// 		}
// 		if (($(this).scrollTop() + h) >= $(".features-desk").offset().top) {
// 			$(".features-desk h2").addClass('animated zoomIn fast');
// 			$(".features-desk hr").addClass('animated fadeInLeft slow');
// 			$(".features-desk .features-items").addClass('animated bounceInLeft slow');
// 		}
// 		if (($(this).scrollTop() + h) >= $(".blog-desk").offset().top) {
// 			$(".blog-desk h2").addClass('animated zoomIn fast');
// 			$(".blog-desk hr").addClass('animated fadeInLeft slow');
// 			$(".blog-desk p").addClass('animated flipInX slow');
// 			$(".blog-desk .blog-item").eq(0).addClass('animated bounceInLeft slow');
// 			$(".blog-desk .blog-item").eq(1).addClass('animated bounceIn slow');
// 			$(".blog-desk .blog-item").eq(2).addClass('animated bounceInRight slow');
// 		}
// 		if (($(this).scrollTop() + h) >= $(".plans-desk").offset().top) {
// 			$(".plans-desk h2").addClass('animated zoomIn fast');
// 			$(".plans-desk hr").addClass('animated fadeInLeft slow');
// 			$(".plans-desk .plans-item").addClass('animated zoomIn slow');
// 		}
// 		if (($(this).scrollTop() + h) >= $(".feedback-desk").offset().top) {
// 			$(".feedback-desk h2").addClass('animated zoomIn fast');
// 			$(".feedback-desk hr").addClass('animated fadeInLeft slow');
// 			$(".feedback-desk p").addClass('animated flipInX slow');
// 			$(".feedback-desk form").addClass('animated bounceInRight slow');
// 		}
// 		if (($(this).scrollTop() + h) >= $(".footer-desk").offset().top) {
// 			$(".footer-desk .footer-logo").addClass('animated fadeInRight slow');
// 			$(".footer-desk hr").addClass('animated fadeInLeft slow');
// 			$(".footer-desk .social").addClass('animated fadeInUp fadeInDown slow');
// 		}
// 	});
// });