$(function() {

	$(".nav-item").on("click", function(){
		$(".nav-item").removeClass("active");
		$(this).addClass("active");
	});

	// swiper for bootstrap carousel
	$(".carousel").swipe( {
		swipeLeft: function() {
			$(this).carousel("next");
		},
		swipeRight: function() {
			$(this).carousel("prev");
		},
		allowPageScroll: "vertical"
	});

	if( $(window).width() > 1023) {
		$('.btn-search').on('click', function(event) {
			event.preventDefault();
			$('.js-search-show').toggleClass('active');
			setTimeout(function() {
				$('.js-search-show').toggleClass('w-100');
			}, 500);
		})
	}

});
