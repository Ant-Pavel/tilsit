		"use strict";
		// Открытие - закрытие инпута поиска
		const s_button = $('.search-form__button--header');
		const page_header = $('.page-header');
		const s_form_header = $('.search-form--header');
		const slogan = $('.page-header__slogan');

		$('.search-form__button-overlay').on("click", (event)=> {  //При клике оверлея кнопки
			if (!page_header.hasClass('page-header--scroll')) {  //если у хедера нет класса скролла
				event.preventDefault(); //отменяем стандартное поведение кнопки в форме поиска
				if( s_form_header.hasClass('search-form--hide') ) {  //если инпута в данный момент нет
						s_form_header.removeClass('search-form--hide');  //показываем инпут
						s_form_header.addClass('search-form--show');  //показываем инпут
						slogan.addClass('page-header__slogan--hide'); // скрываем слоган
						$('.search-form__button-overlay').css('zIndex', '0');
				}
				
			}
		});

		s_button.on("focus", (event)=> {  //При фокусе по кнопке лупы на поиске
			if (!page_header.hasClass('page-header--scroll')) {  //если у хедера нет класса скролла
				if( s_form_header.hasClass('search-form--hide') ) {  //если инпута в данный момент нет
						s_form_header.removeClass('search-form--hide');  //показываем инпут
						s_form_header.addClass('search-form--show');  //показываем инпут
						slogan.addClass('page-header__slogan--hide'); // скрываем слоган
						$('.search-form__button-overlay').css('zIndex', '0');
				}
			}
		});

		$(document).click(function(event) {
			if (!page_header.hasClass('page-header--scroll')) {
					if(!s_form_header.hasClass('search-form--hide') ) {
						if(!s_form_header.is(event.target) && s_form_header.has(event.target).length === 0) {
							$('.search-form__button-overlay').css('zIndex', '5');
								s_form_header.removeClass('search-form--show');  //скрываем инпут
								s_form_header.addClass('search-form--hide');  //скрываем инпут
								slogan.removeClass('page-header__slogan--hide'); // показываем слоган
					}
				}
			}
		});

		//Прокрутка страницы

		// if (page_header.length) {
		// var scrollHeight = Math.max(
		//   document.body.scrollHeight, document.documentElement.scrollHeight,
		//   document.body.offsetHeight, document.documentElement.offsetHeight,
		//   document.body.clientHeight, document.documentElement.clientHeight
		// );

		// $(window).on('scroll', function() {
		//   if ( ($(window).scrollTop() > (page_header.outerHeight(true) + 25)) && (scrollHeight > 950) ) {
		//    page_header.addClass('page-header--scroll');
		//    page_header.parent('.container').addClass('container--scroll');
		//   } else {
		//    page_header.removeClass('page-header--scroll');
		//    page_header.parent('.container').removeClass('container--scroll');
		//   }
		// });
		// }


		//Открытие - раскрытие меню при прокрутке страницы
		$('.page-header__nav-toggler').on('click', function() {
			$('.page-header__nav').toggleClass('page-header__nav--show');
			$('.page-header__search-block').toggleClass('page-header__search-block--show');
		});


	$(document).ready(function(){
		$('.slider-index-top').slick({
			prevArrow: "<button class=\"slick-arrow slick-arrow--prev\"></button>",
			nextArrow: "<button class=\"slick-arrow slick-arrow--next\"></button>",
			autoplay: true,
			autoplaySpeed: 3000,
			dots: true,
			dotsClass: "slick-dots-custom",
		});

		$('.slider-big__main').slick({
			slidesToShow: 1,
			slidesToScroll: 1,
			autoplay: true,
			autoplaySpeed: 3000,
			infinite: false,
			prevArrow: "<button class=\"slick-arrow slick-arrow--prev\"></button>",
			nextArrow: "<button class=\"slick-arrow slick-arrow--next\"></button>",
			asNavFor: '.slider-big__nav'
		});

		$('.slider-big__nav').slick({
			asNavFor: '.slider-big__main',
			arrows: false,
			slidesToShow: 5,
			infinite: false,
			slidesToScroll: 1,
			focusOnSelect: true,
		});
	});

	(function () {
	    if ($('#ftr-map').length) {
	        jQuery.getScript("http://api-maps.yandex.ru/2.0/?load=package.full&amp;lang=ru-RU", function (){
	            var myMap;
	            function init(){
	                myMap = new ymaps.Map("ftr-map", {
	                    center: [55.090799, 21.854223],
	                    zoom: 17
	                });

	             MyBalloonLayout = ymaps.templateLayoutFactory.createClass(
	            '<div class="popover">' +
	                '<div class="arrow"></div>' +
	                '<div class="popover-inner">' +
	                '$[[options.contentLayout observeSize]]' +
	                '</div>' +
	                '</div>', {
	                /**
	                 * Строит экземпляр макета на основе шаблона и добавляет его в родительский HTML-элемент.
	                 * @see https://api.yandex.ru/maps/doc/jsapi/2.1/ref/reference/layout.templateBased.Base.xml#build
	                 * @function
	                 * @name build
	                 */
	                build: function () {
	                    this.constructor.superclass.build.call(this);
	                    this._$element = $('.popover', this.getParentElement());
	                    this.applyElementOffset();
	                    this._$element.find('.close')
	                        .on('click', $.proxy(this.onCloseClick, this));
	                },
	                /**
	                 * Удаляет содержимое макета из DOM.
	                 * @see https://api.yandex.ru/maps/doc/jsapi/2.1/ref/reference/layout.templateBased.Base.xml#clear
	                 * @function
	                 * @name clear
	                 */
	                clear: function () {
	                    this._$element.find('.close')
	                        .off('click');
	                    this.constructor.superclass.clear.call(this);
	                },
	                /**
	                 * Метод будет вызван системой шаблонов АПИ при изменении размеров вложенного макета.
	                 * @see https://api.yandex.ru/maps/doc/jsapi/2.1/ref/reference/IBalloonLayout.xml#event-userclose
	                 * @function
	                 * @name onSublayoutSizeChange
	                 */
	                onSublayoutSizeChange: function () {
	                    MyBalloonLayout.superclass.onSublayoutSizeChange.apply(this, arguments);
	                    if(!this._isElement(this._$element)) {
	                        return;
	                    }
	                    this.applyElementOffset();
	                    this.events.fire('shapechange');
	                },
	                /**
	                 * Сдвигаем балун, чтобы "хвостик" указывал на точку привязки.
	                 * @see https://api.yandex.ru/maps/doc/jsapi/2.1/ref/reference/IBalloonLayout.xml#event-userclose
	                 * @function
	                 * @name applyElementOffset
	                 */
	                applyElementOffset: function () {
	                    this._$element.css({
	                        left: -(this._$element[0].offsetWidth / 2),
	                        top: -(this._$element[0].offsetHeight + this._$element.find('.arrow')[0].offsetHeight + 62)
	                    });
	                },
	                /**
	                 * Закрывает балун при клике на крестик, кидая событие "userclose" на макете.
	                 * @see https://api.yandex.ru/maps/doc/jsapi/2.1/ref/reference/IBalloonLayout.xml#event-userclose
	                 * @function
	                 * @name onCloseClick
	                 */
	                onCloseClick: function (e) {
	                    e.preventDefault();
	                    this.events.fire('userclose');
	                },
	                /**
	                 * Используется для автопозиционирования (balloonAutoPan).
	                 * @see https://api.yandex.ru/maps/doc/jsapi/2.1/ref/reference/ILayout.xml#getClientBounds
	                 * @function
	                 * @name getClientBounds
	                 * @returns {Number[][]} Координаты левого верхнего и правого нижнего углов шаблона относительно точки привязки.
	                 */
	                getShape: function () {
	                    if(!this._isElement(this._$element)) {
	                        return MyBalloonLayout.superclass.getShape.call(this);
	                    }
	                    var position = this._$element.position();
	                    return new ymaps.shape.Rectangle(new ymaps.geometry.pixel.Rectangle([
	                        [position.left, position.top], [
	                            position.left + this._$element[0].offsetWidth,
	                            position.top + this._$element[0].offsetHeight + this._$element.find('.arrow')[0].offsetHeight
	                        ]
	                    ]));
	                },
	                /**
	                 * Проверяем наличие элемента (в ИЕ и Опере его еще может не быть).
	                 * @function
	                 * @private
	                 * @name _isElement
	                 * @param {jQuery} [element] Элемент.
	                 * @returns {Boolean} Флаг наличия.
	                 */
	                _isElement: function (element) {
	                    return element && element[0] && element.find('.arrow')[0];
	                }
	            });

				   var MyBalloonContentLayout = ymaps.templateLayoutFactory.createClass(
				   	'<div class="map__container">' + 
				       '<div class="map__phone">$[properties.phone]</div>' +
				       '<div class="map__email">$[properties.email]</div>' +
				       '<div class="map__address">$[properties.address]</div>' +
				    '</div>'   
				   );

	                var myPlacemark = new ymaps.Placemark([55.090799, 21.854223], {
	                	phone: '+7 (4012) 123-123',
	                	email: 'tilzit-info@mail.ru',
	                    address: 'г. Советск, ул. Чапаева, 2',
	                }, {
	                	balloonContentLayout: MyBalloonContentLayout,
	                	balloonLayout: MyBalloonLayout,
	                    balloonShadow: false,
	                    iconImageHref: '/images/map-baloon.png',
	                    iconImageSize: [50, 78],
	                    iconImageOffset: [-25, -78],
	                    // hideIconOnBalloonOpen: false,
	                });
	                myMap.geoObjects.add(myPlacemark);
	                myMap.controls.add('smallZoomControl');
	            }
	            ymaps.ready(init);
	        });
	    }
	})();


$(document).ready(function() {
    const $menu_item = $('.nav-sidebar__item--has-children');
    
    $menu_item.click(function(event) {  // По клику на елемент с нужным классом  .nav-sidebar__item--has-children

	    var $sub_menu = $(this).children('.nav-sidebar__list-level-2');    //Подсписок ul внутри li
	    var $siblings = $(this).siblings();  //Соседние элементы кликнутого элемента
	    var $siblings_sub_menu = $siblings.children('.nav-sidebar__list-level-2');

	    if (!$(this).hasClass('active')) {  // При отсутствии класса opened
		    $(this).addClass('active'); // Добавляем класс opened
		    $siblings.removeClass('active'); // Удаляем класс opened у соседних элементов
		    $siblings_sub_menu.slideUp();  // Закрываем ulы внутри соседних элементов
			$sub_menu.slideDown();  //Раскрываем вложенный в пункт меню список
	    } else {
	    	$sub_menu.slideUp();
		    $(this).removeClass('active');	
	    }
    });

//************ 
// Fancybox для картинок из контента
// **********
const fancy_link = $(".content a");
    fancy_link.each(function() {
    	var a = $(this).attr('href');
    	if ((a.indexOf('jpg') != -1) || (a.indexOf('jpeg') != -1) || (a.indexOf('png') != -1)) {
    		$(this).fancybox({});
    	}
    })
});





