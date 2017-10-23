$(document).ready(function() {
	$("[data-fancybox]").fancybox({
		// Скорость анимации
		speed : 330,
		// Бесконечная прокрутка галереи
		loop : true,
		// Скорость появления/угасания прозрачности элементов
		opacity : 'auto',
		// Отступы вокруг картинок (Игнорируется, если ширина окна менее 800px)
		margin : [100, 0],
		// Горизонтальный отступ между слайдами
		gutter : 30,
		// Панели управления
		infobar : true,
		buttons : true,
		// Какие кнопки на панели управления
		slideShow  : true,
		fullScreen : true,
		thumbs     : true,
		closeBtn   : true,
		// Маленькая кнопочка "закрыть" в верхнем правом углу
		// При значении auto будет автоматически добавлена для HTML, Iframe и ajax содержимом
		smallBtn : 'auto',
		 
		// Картинки
		image : {
		// Ожидать ли полной загрузки картинки перед показом
		preload : "auto",
		// Защитить картинки от скачивания правым кликом
		protect : false
		},
		 
		// Ajax запросы
		ajax : {
		// Объекст, содержащий ajax настройки
		settings : {
		// Помогает определить, что запрос идёт из модального окна
		data : {
		fancybox : true
		}
		}
		},
		 
		// Контент в айфрейме
		iframe : {
		// Щаблон iframe
		tpl : '<iframe id="fancybox-frame{rnd}" name="fancybox-frame{rnd}" class="fancybox-iframe" frameborder="0" vspace="0" hspace="0" webkitAllowFullScreen mozallowfullscreen allowFullScreen allowtransparency="true" src=""></iframe>' + 
		'<div class="fancybox-buttons">' +
		'<button data-fancybox-close class="fancybox-button fancybox-button--close" title="Close (Esc)"></button>' +
		'</div>',
		// Дожидаться полной загрузки фрейма перед показом
		preload : true,
		// Разрешить ли прокрутку содержимого внутри фреймов
		scrolling : 'no',
		// Свои стили для оболочки фрейма
		css : {}
		},
		 
		// Свой CSS класс для разметки
		baseClass : '',
		// Свой CSS класс для слайдов
		slideClass : '',
		// Стандартный шаблон для разметки
		baseTpl : '<div class="fancybox-container" role="dialog" tabindex="-1">' +
		'<div class="fancybox-bg"></div>' +
		'<div class="fancybox-controls">' +
		'<div class="fancybox-infobar">' +
		'<button data-fancybox-previous class="fancybox-button fancybox-button--left" title="Previous"></button>' +
		'<div class="fancybox-infobar__body">' +
		'<span class="js-fancybox-index"></span> / <span class="js-fancybox-count"></span>' +
		'</div>' +
		'<button data-fancybox-next class="fancybox-button fancybox-button--right" title="Next"></button>' +
		'</div>' +
		
		'</div>' +
		'<div class="fancybox-slider-wrap">' +
		'<div class="fancybox-slider"></div>' +
		'</div>' +
		'<div class="fancybox-caption-wrap"><div class="fancybox-caption"></div></div>' +
		'</div>',
		// Индикатор загрузки
		spinnerTpl : '<div class="fancybox-loading"></div>',
		// Шаблон для вывода ошибки
		errorTpl : '<div class="fancybox-error"><p>The requested content cannot be loaded. <br /> Please try again later.<p></div>',
		// Шаблон для кнопки "Закрыть"
		closeTpl : '<button data-fancybox-close class="fancybox-close-small">×</button>',
		// Куда вкладывать контейнер
		parentEl : 'body',
		// Включить жесты (схватить, увеличить, нажать, отпустить, тащить)
		touch : true,
		// Разрешить навигацию с клавиатуры
		keyboard : true,
		// Пытаться повесить фокус на первом открытом объекте
		focus : true,
		// Закрывать при клике по свободной области за пределами
		closeClickOutside : true,
		afterLoad : function( instance, current ) {

    	// Remove scrollbars and change background
    	current.$content.css({
			overflow   : 'visible',
	      background : '#000'
			});	    
	    },
	  onUpdate : function( instance, current ) {
	    var width,
	        height,
	        ratio = 16 / 9,
	        video = current.$content;
	    
	    if ( video ) {
	      video.hide();

	      width  = current.$slide.width();
	      height = current.$slide.height() - 100;
	      
	      if ( height * ratio > width ) {
	        height = width / ratio;
	      } else {
	        width = height * ratio;
	      }

	      video.css({
	        width  : width,
	        height : height
	      }).show();

	    }
	  },
		// Обратная связь
		beforeLoad   : $.noop,
		afterLoad    : $.noop,
		beforeMove   : $.noop,
		afterMove    : $.noop,
		onComplete   : $.noop,
		onInit       : $.noop,
		beforeClose  : $.noop,
		afterClose   : $.noop,
		onActivate   : $.noop,
		onDeactivate : $.noop
	});
})