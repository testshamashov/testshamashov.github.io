$(document).ready(function() {
	$(".navbar-toggle").on("click", function () {
		$(this).toggleClass("active");
	});
	$('#m1').addClass('active');
	ymaps.ready(init);
	var myMap;

	function init(){     
		myMap = new ymaps.Map("map", {
			center: [55.76, 37.64],
			zoom: 7
		});
		myMap.behaviors.disable('scrollZoom');

		myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
			hintContent: 'Собственный значок метки',
			balloonContent: 'Это красивая метка'
		}, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#image',
            // Своё изображение иконки метки.
            iconImageHref: 'images/yandex_buble/buble1.png',
            // Размеры метки.
            iconImageSize: [30, 42],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [-5, -38]
        }),



		myMap.geoObjects
		.add(myPlacemark); 
	}
	ymaps.ready(init1);
	var myMap_mobile;

	function init1(){     
		myMap_mobile = new ymaps.Map("map2", {
			center: [55.76, 37.64],
			zoom: 7
		});
		myMap_mobile.behaviors.disable('scrollZoom'); 
	}
	
	if( $(window).width() > 1200 ) {
		$('.map').css('min-height', '967px');
		$('#map2 ymaps').hide();
		$('#map ymaps').show();
		} else {
			$('.map').css('min-height', '580px');
			$('#map2 ymaps').show();
			$('#map ymaps').hide();
		}

		$(window).resize(function() {
			if( $(window).width() > 1200 ) {
				$('.map').css('min-height', '967px');
				$('#map2 ymaps').hide();
				$('#map ymaps').show();
		}
		if($(window).width() < 1200) {
			$('.map').css('min-height', '580px');
			$('#map2 ymaps').show();
			$('#map ymaps').hide();
	    }
	});

		$('#show-pay-block').on('click', function() {
			$('.map').css('min-height', '1400px');
			$('.pay-block').show();
			$('.navbar-fixed-top').hide();
			$('body').css('overflow', 'hidden');

			$('#map-show').on('click', function() {
				$('.pay-block-content').hide();
				$('.map-wrapper').show();
				ymaps.ready(init1);
			})
			$('#list-show').on('click', function() {
				$('.pay-block-content').show();
				$('.map-wrapper').hide();
			})
			$('.pay-content-item').on('click', function() {
				$('.pay-block-content').hide();
				$('.map-wrapper').show();
			})
		})
		$('#close-pay-block').on('click', function() {
			$('.map').css('min-height', '580px');
			$('.pay-block').hide();
			$('.navbar-fixed-top').show();
			$('body').css('overflow', 'auto');
		})



		$(document).on("scroll",function(){
			if( $(window).width() > 1200 ) {
				if($(document).scrollTop()>100){
					$('.navbar-inverse').css('backgroundColor', 'rgba(0,0,0,.9)');
					$('.navbar-inverse').css('backgroundImage', 'none');
				} else{
					$('.navbar-inverse').css('backgroundColor', 'transparent');
					$('.navbar-inverse').css('backgroundImage', 'linear-gradient(to top, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.93) 70%)');
				}
			}
		});

		$('.map-second-line button.btn-town').each(function() {

		})
		$('.map-second-line button.btn-town').click(function() {
			$(".map-second-line button").removeClass("active");         
			$(this).toggleClass("active");
		})

		$('.adaptation-video').on('click', function() {
			var $video = $('#video'),
			src = $video.attr('src');
			$video.attr('src', src + '&autoplay=1');
			$('.play').css('display', 'none');
			$('.overlay').css('display', 'none');
			setTimeout(function() {
				$('.adaptation-video').removeClass('video-class');
				$('.adaptation-video').css('pointer-events', 'all');
			} ,500)
		});
		if( $(window).width() < 697 ) {
			$('.adaptation-video').removeClass('video-class');
		}


		$('.tr-circle').each(function() {
			$(this).mouseover(function() {
				if( $(this).hasClass('tr-circle1') ) {
					$('.tr-circle1 .grey-buble').css('display', 'block');
				} else if ( $(this).hasClass('tr-circle2') ) {
					$('.tr-circle2 .grey-buble').css('display', 'block');
				} else if ( $(this).hasClass('tr-circle3') ) {
					$('.tr-circle3 .grey-buble').css('display', 'block');
				} else if ( $(this).hasClass('tr-circle4') ) {
					$('.tr-circle4 .grey-buble').css('display', 'block');
				} else if ( $(this).hasClass('tr-circle5') ) {
					$('.tr-circle5 .grey-buble').css('display', 'block');
				}
			})
			$(this).mouseout(function() {
				if( $(this).hasClass('tr-circle1') ) {
					$('.tr-circle1 .grey-buble').css('display', 'none');
				} else if ( $(this).hasClass('tr-circle2') ) {
					$('.tr-circle2 .grey-buble').css('display', 'none');
				} else if ( $(this).hasClass('tr-circle3') ) {
					$('.tr-circle3 .grey-buble').css('display', 'none');
				} else if ( $(this).hasClass('tr-circle4') ) {
					$('.tr-circle4 .grey-buble').css('display', 'none');
				} else if ( $(this).hasClass('tr-circle5') ) {
					$('.tr-circle5 .grey-buble').css('display', 'none');
				}
			})
		})



		$(window).on("scroll", function() {
			if (window.pageYOffset > 745) {
				$('#m1').removeClass('active');
			}
      	var scro= $(window).scrollTop();            
	        var scr=0;
	        var scr2=745;
	        var scr3=2975;
	        var scr4=3675;
	        var scr5=4680;
	    if ( $(window).scrollTop() >= scr && scro <= scr2 ) {	$('#m1').addClass('active');}
	     else $('#m1').removeClass('active');
	  if ( scro > scr2 && scro <= scr3 ) { 	$('#m2').addClass('active');}
	     else $('#m2').removeClass('active');
	    if ( scro > scr3 && scro <= scr4 ) {   	$('#m3').addClass('active');}
	     else $('#m3').removeClass('active');
	  if ( scro > scr4 && scro <= scr5 ) {   	$('#m4').addClass('active');}
	     else $('#m4').removeClass('active');
	  if ( scro > scr5 ) {  	$('#m5').addClass('active');}
	     else $('#m5').removeClass('active');
	    });
	    $("a.scrollto").click(function () {
		var elementClick = $(this).attr("href")
		var destination = $(elementClick).offset().top-50;
		jQuery("html:not(:animated),body:not(:animated)").animate({scrollTop: destination}, 800);
		return false;
		});



	function inputValue() {
		$('#rtt_city_id').focus(function() {
			$(this).attr('placeholder', '');
			$('.dropdown-menu').dropdown();
		}).focusout(function() {
			$(this).attr('placeholder', 'Введите  здесь название вашего города');
		})
		$('.dropdown-menu li a').on('click', function(event) {
			var value = $(this).attr('value');
			$('#rtt_city_id').attr('placeholder', value);
		})
	}
	inputValue();


	
	
	
})



