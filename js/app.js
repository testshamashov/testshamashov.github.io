$(document).ready(function() {
	$(".navbar-toggle").on("click", function () {
	    $(this).toggleClass("active");
	  });

	ymaps.ready(init);
    var myMap;

    function init(){     
        myMap = new ymaps.Map("map", {
            center: [55.76, 37.64],
            zoom: 7
        });
        myMap.behaviors.disable('scrollZoom'); 
    }

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


	


	var menu_selector = "#top-menu"; // Переменная должна содержать название класса или идентификатора, обертки нашего меню.
	 
	function onScroll(){
		if( $(window).width() > 1200 ) {
	    	if($(document).scrollTop()>100){
		    	$('.navbar-inverse').css('backgroundColor', 'rgba(0,0,0,.9)');
		    	$('.navbar-inverse').css('backgroundImage', 'none');
		    } else{
		    	$('.navbar-inverse').css('backgroundColor', 'transparent');
		    	$('.navbar-inverse').css('backgroundImage', 'linear-gradient(to top, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.93) 70%)');
		    }
	    }
	    var scroll_top = $(document).scrollTop();
	    $(menu_selector + " a").each(function(){
	        var hash = $(this).attr("href");
	        var target = $(hash);
	        if (target.position().top-50 <= scroll_top && target.position().top-50 + target.outerHeight() > scroll_top) {
	            $(menu_selector + " a.active").removeClass("active");
	            $(this).addClass("active");
	        } else {
	            $(this).removeClass("active");
	        }
	    });
	}
	 
	$(document).ready(function () {
	 
	    $(document).on("scroll", onScroll);
	 
	    $('a[href*="#"]').click(function(e){
	        e.preventDefault();
	 		
	        $(document).off("scroll");
	        $(menu_selector + " a.active").removeClass("active");
	        $(this).addClass("active");
	        var hash = $(this).attr("href");
	        var target = $(hash);
	 
	        $("html, body").animate({
	            scrollTop: target.offset().top-50
	        }, 500, function(){
	            window.location.hash = hash;
	            $(document).on("scroll", onScroll);
	        });
	    });
	 
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


	$('#show-pay-block').on('click', function() {
		$('.pay-block').show();
		$('.navbar-fixed-top').hide();
		$('body').css('overflow', 'hidden');

		$('#map-show').on('click', function() {
			$('.pay-block-content').hide();
			$('.map-wrapper').show();
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
		$('.pay-block').hide();
		$('.navbar-fixed-top').show();
		$('body').css('overflow', 'auto');
	})
	
	
})



