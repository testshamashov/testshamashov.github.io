$(document).ready(function() {
	$('.dropdown-toggle').dropdown();
	$('.dropdown').mouseover(function() {
		$('.dropdown .contact').css('display', 'block');
		$('.dropdown .tel').css('display', 'none');
		$(this).addClass('open');
	});
	$('.dropdown').mouseout(function() {
		$('.dropdown .contact').css('display', 'none');
		$('.dropdown .tel').css('display', 'block');
		$(this).removeClass('open');
	})

	$('.navbar-nav li').click(function(e) {
		e.preventDefault();
		$('.navbar-nav li').removeClass("active");
		$(this).toggleClass("active");
	})
	if($(window).width() < 480) {
		$('#slide-2-layer-3').html('<span>Официальный договор + </span><span class="orange">личная гарантия и<br> контакты директора компании!</span>')
	}

	$('.feature-post-content a').click(function(e) {
		e.preventDefault();
	})
	

	// $('.js-scroll-up').on('click', function() {
	// 	var body = $('body');
	// 	body.animate({scrollTop:0}, 500);
	// })

	$('a[href="#services"]').click(function(){
		var el = $(this).attr('href');
		$('body,html').animate({
			scrollTop: $(el).offset().top}, 1000);
		return false;
	});

	$('.feature-block-wrapper').on('mouseover', function() {
		$('.hidden-block').removeClass('active');
		$(this).children('.hidden-block').addClass('active');
	})
	$('.feature-block-wrapper').on('mouseout', function() {
		$('.hidden-block').removeClass('active');
	})



	$('#show-map-site').on('click', function() {
		var body = $('html,body');
		var body_height = $('body').height();
		var footer_sitemap = $('.footer-sitemap').height();
		$('.footer-sitemap').toggleClass('show-map-site');
		body.animate({scrollTop:body_height}, 500);
		if($('.footer-sitemap').hasClass('show-map-site')) {
			$('.glyphicon-triangle-top').show();
			$('.glyphicon-triangle-bottom').hide();
		} else {
			$('.glyphicon-triangle-top').hide();
			$('.glyphicon-triangle-bottom').show();
		}
	})

	function setYear() {
		var date = new Date();
		var year = date.getFullYear();
		$('#now-year').text(year);
	}
	setYear();


	$('.subnav-item').on('click', function() {
		var s = $(this).find('i').clone(true).get(0);
		var e = $('.nav-item-hover').find('i').get(0);
		e.replaceWith(s);
	})
	$('.subnav-item').on('click', function(e) {
		e.preventDefault();
		var s = $(this).find('i').clone(true).get(0);
		var e = $('.i-usd-hover').find('i').get(0);
		e.replaceWith(s);
	})

	$('.icons-money-item').click(function(){
	    if($(this).hasClass('active')){
	        return false;
	    }
	    $('.icons-money-item').removeClass('active');
	    $(this).addClass('active');
	});

	var mh = 0;
	$(".feature-2").each(function () {
	   var h_block = parseInt($(this).height());
	   if(h_block > mh) {
	      mh = h_block;
	   };
	});
	$(".feature-2").height(mh);

	var mh1 = 0;
	$(".feature-post-content").each(function () {
	   var h_block = parseInt($(this).height());
	   if(h_block > mh1) {
	      mh1 = h_block;
	   };
	});
	$(".feature-post-content").height(mh1);

	var mh2 = 0;
	$(".tab-height").each(function () {
	   var h_block = parseInt($(this).height());
	   if(h_block > mh2) {
	      mh2 = h_block;
	   };
	});
	$(".tab-height").height(mh2);

	var mh3 = 0;
	$(".features-p").each(function () {
	   var h_block = parseInt($(this).height());
	   if(h_block > mh3) {
	      mh3 = h_block;
	   };
	});
	$(".features-p").height(mh3);

	

	$(window).scroll(function(){
	    if($(window).width() > 767) {
	    	if($(this).scrollTop()>70){
		    	$('.qb-top-line').hide();
		    	$('.bottom-line').hide();
		    	$('.header-mini').show();
		    }
		    else if ($(this).scrollTop()<70){
		    	$('.qb-top-line').show();
		    	$('.bottom-line').show();
		    	$('.header-mini').hide();	    
		    }
	    }
	});

	
})