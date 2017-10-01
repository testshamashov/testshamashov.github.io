$(document).ready(function() {
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

	$('#exampleInputEmail1').focus(function() {
		$(this).attr('placeholder', '');
	})
	$('#exampleInputEmail1').focusout(function() {
		$(this).attr('placeholder', 'Введите сдесь название вашего города');
	})
	$('#select').focus(function() {
		$('.second-line-input .fa').css('opacity', '0');
	})



	$('.adaptation-video').on('click', function() {
		var $video = $('#video'),
			src = $video.attr('src');
	 
		$video.attr('src', src + '&autoplay=1');
		setTimeout(function() {
			$('.adaptation-video').removeClass('video-class');
			$('.adaptation-video').css('pointer-events', 'all');
		} ,500)
	});
	if( $(window).width() < 697 ) {
		$('.adaptation-video').removeClass('video-class');
	}


	$("#bs-example-navbar-collapse-1").on("click","a", function (event) {
		event.preventDefault();
		var id  = $(this).attr('href'),
			top = $(id).offset().top - 70;
		$('body,html').animate({scrollTop: top}, 1500);
	});

	
})