(function($) {
    "use strict";

    //when dom is ready
    $(document).ready(function() {


        $('a.page-scroll').bind('click', function(event) {
            var $anchor = $(this);
            $('html, body').stop().animate({
                scrollTop: $($anchor.attr('href')).offset().top -70
            }, 1500, 'easeInOutExpo');
            event.preventDefault();

        });
        $('body').scrollspy({ target: '#navbar', offset:72 })
        // scroller end


        // on scroll event start
        $(window).on('scroll', function() {
            if($(window).width() > 600){
                if ($(window).scrollTop() > 600) {
                    $('#navbar').addClass('navbar-bg');
                    $('#back-to-top').addClass('reveal');
                } else {
                    $('#navbar').removeClass('navbar-bg');
                    $('#back-to-top').removeClass('reveal');
                }
            }
        });
        // on scroll event end



        // revolution slider start
        $("#rev_slider_1").show().revolution({
            sliderType: "standard",
            sliderLayout: "fullscreen",
            dottedOverlay: "none",
            delay: 4000,
            spinner: "spinner4",
            navigation: {
                keyboardNavigation: "off",
                keyboard_direction: "horizontal",
                mouseScrollNavigation: "off",
                onHoverStop: "off",
                touch: {
                    touchenabled: "on",
                    swipe_threshold: 75,
                    swipe_min_touches: 1,
                    swipe_direction: "horizontal",
                    drag_block_vertical: false
                },
                arrows: {
                    enable: true,
                    style: 'metis',
                    tmp: '',
                    rtl: false,
                    hide_onleave: true,
                    hide_onmobile: true,
                    hide_under: 0,
                    hide_over: 9999,
                    hide_delay: 200,
                    hide_delay_mobile: 1200,
                    left: {
                        container: 'slider',
                        h_align: 'left',
                        v_align: 'center',
                        h_offset: 20,
                        v_offset: 0
                    },
                    right: {
                        container: 'slider',
                        h_align: 'right',
                        v_align: 'center',
                        h_offset: 20,
                        v_offset: 0
                    }
                },
            },
            responsiveLevels: [1920, 1024, 769, 480],
            gridwidth: [1170, 1170, 769, 480],
            // gridheight: [700, 700, 600, 600],
            lazyType: "none",
            shadow: 0,
            shuffle: "off",
            autoHeight: "on",
        });
        $("#rev_slider_2").show().revolution({
            sliderType: "standard",
            sliderLayout: "fullscreen",
            dottedOverlay: "none",
            delay: 4000,
            spinner: "spinner4",
            navigation: {
                keyboardNavigation: "off",
                keyboard_direction: "horizontal",
                mouseScrollNavigation: "off",
                onHoverStop: "off",
                touch: {
                    touchenabled: "on",
                    swipe_threshold: 75,
                    swipe_min_touches: 1,
                    swipe_direction: "horizontal",
                    drag_block_vertical: false
                },
                arrows: {
                    enable: true,
                    style: 'metis',
                    tmp: '',
                    rtl: false,
                    hide_onleave: true,
                    hide_onmobile: true,
                    hide_under: 0,
                    hide_over: 9999,
                    hide_delay: 200,
                    hide_delay_mobile: 1200,
                    left: {
                        container: 'slider',
                        h_align: 'left',
                        v_align: 'center',
                        h_offset: 20,
                        v_offset: 0
                    },
                    right: {
                        container: 'slider',
                        h_align: 'right',
                        v_align: 'center',
                        h_offset: 20,
                        v_offset: 0
                    }
                },
            },
            responsiveLevels: [1920, 1024, 769, 480],
            gridwidth: [1170, 1170, 769, 480],
            // gridheight: [700, 700, 600, 600],
            lazyType: "none",
            shadow: 0,
            shuffle: "off",
            autoHeight: "on",
        });
        // revolution slider end

        // Start Portfolio Section
        $(window).on('load', function() {

            //Portfolio Start
            var $container = $('.portfolio-box');
            $container.isotope({
                filter: '*',
                animationOptions: {
                    duration: 750,
                    easing: 'linear',
                    queue: false
                }
            });
            $('.filter a').on('click', function() {
                $('.filter .active').removeClass('active');
                $(this).addClass('active');
                var selector = $(this).attr('data-filter');
                $('.portfolio-box').isotope({
                    filter: selector,
                    animationOptions: {
                        duration: 750,
                        easing: 'linear',
                        queue: false
                    }
                });
                return false;
            });
            //Portfolio End
        });

        //Owl Carousel-- Team Member
        $(".team-section").owlCarousel({
            pagination: true,
            navigation: false,
            items : 3,
            itemsDesktop : [1000,3],
            itemsDesktopSmall : [900,3],
            itemsTablet: [767,2],
            slideSpeed: 2500,
            stopOnHover: true,
            autoPlay: true,
            singleItem: false,
            navigationText: ['<i class="fa fa-chevron-left"></i>', '<i class="fa fa-chevron-right"></i>']
        });

        //Owl Carousel-- Latest News
        $(".blog-section").owlCarousel({
            pagination: true,
            navigation: false,
            items : 3,
            itemsDesktop : [1000,3],
            itemsDesktopSmall : [900,3],
            itemsTablet: [767,2],
            slideSpeed: 2500,
            stopOnHover: true,
            autoPlay: true,
            singleItem: false,
            navigationText: ['<i class="fa fa-chevron-left"></i>', '<i class="fa fa-chevron-right"></i>']
        });


        // Start Animated Number
        $('.animated-counter').appear(function() {
            $('.animated-number').countTo({
                speed: 4000,
                refreshInterval: 60,
                formatter: function(value, options) {
                    return value.toFixed(options.decimals);
                }
            });
        });


        //Progress Bar
        $('.progress-bar').each(function(){
            var width = $(this).data('percentage');
            $(this).css({'transition': 'width 3s'});
            $(this).appear(function () {
                $(this).css('width', width + '%');
                $(this).find('.count').countTo({
                    from: 0,
                    to: width,
                    speed: 3000,
                    refreshInterval: 50,
                });
            });
        });

        // Start Easy Pie Chart
        $('.progress-chart-feature').appear(function() {
            $('.chart').easyPieChart({
                animate: 2000,
                barColor: '#32c5d2',
                trackColor: '#f6f6f6',
                scaleColor: '',
                lineCap: 'round',
                lineWidth: 10,
                size: 130
            });
        });

        //Tooltip
        $('[data-toggle="tooltip"]').tooltip()

        //WOW js
        new WOW().init();

        //video background
        try {
            jQuery(".player").mb_YTPlayer();
        } catch (err) {}


        // Start Back To Top Start
        var top_show = 150; // В каком положении полосы прокрутки начинать показ кнопки "Наверх"
        var delay = 1000; // Задержка прокрутки
        $(document).ready(function() {
            $(window).scroll(function () { // При прокрутке попадаем в эту функцию
              /* В зависимости от положения полосы прокрукти и значения top_show, скрываем или открываем кнопку "Наверх" */
              if ($(this).scrollTop() > top_show) $('#back-to-top').fadeIn();
              else $('#back-to-top').fadeOut();
            });
            $('#back-to-top').click(function () { // При клике по кнопке "Наверх" попадаем в эту функцию
              /* Плавная прокрутка наверх */
              $('body, html').animate({
                scrollTop: 0
              }, delay);
            });
        });

        //Call to action
        if( $(window).width() < 700) {
            $('#btn_call_to').remove();
            $('.call-to-action-2').append("<a href='tel:+7 495 545-46-86' class='btn btn-primary'>+7 495 545-46-86</a>");
        } else {
            $('#member-club').on('click', function(e) {
                e.preventDefault();
            })
        }

        // Подключаем Popover
        $('[data-toggle="popover"]').popover({
            //Установление направления отображения popover
            placement : 'top'
        });


    });
    //dom ready end


})(jQuery);