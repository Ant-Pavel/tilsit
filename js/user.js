		"use strict";
		// Открытие - закрытие инпута поиска
		const s_button = $('.search-form__button--header');
		const page_header = $('.page-header');
		const s_form_header = $('.search-form--header');
		const slogan = $('.page-header__slogan');
		s_button.one("click", (event)=> {  //При клике по кнопке лупы на поиске
			if (!page_header.hasClass('page-header--scroll')) {  //если у хедера нет класса скролла
				event.preventDefault(); //отменяем стандартное поведение кнопки в форме поиска
				if( s_form_header.hasClass('search-form--hide') ) {  //если инпута в данный момент нет
						s_form_header.removeClass('search-form--hide');  //показываем инпут
						s_form_header.addClass('search-form--show');  //показываем инпут
						slogan.addClass('page-header__slogan--hide'); // скрываем слоган
				} else {
						s_form_header.removeClass('search-form--show');  //скрываем инпут
						s_form_header.addClass('search-form--hide');  //скрываем инпут
						slogan.removeClass('page-header__slogan--hide'); // показываем слоган
				}
			}
		});

		// s_button.one("focus", (event)=> {  //При фокусе по кнопке лупы на поиске
		// 	if (!page_header.hasClass('page-header--scroll')) {  //если у хедера нет класса скролла
		// 		event.preventDefault(); //отменяем стандартное поведение кнопки в форме поиска
		// 		if( s_form_header.hasClass('search-form--hide') ) {  //если инпута в данный момент нет
		// 				s_form_header.removeClass('search-form--hide');  //показываем инпут
		// 				s_form_header.addClass('search-form--show');  //показываем инпут
		// 				slogan.addClass('page-header__slogan--hide'); // скрываем слоган
		// 		} else {
		// 				s_form_header.removeClass('search-form--show');  //скрываем инпут
		// 				s_form_header.addClass('search-form--hide');  //скрываем инпут
		// 				slogan.removeClass('page-header__slogan--hide'); // показываем слоган
		// 		}
		// 	}
		// });

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


		// //Открытие - раскрытие меню при прокрутке страницы
		// $('.page-header__nav-toggler').on('click', function() {
		// 	$('.page-header__nav').toggleClass('page-header__nav--show');
		// 	$('.page-header__search-block').toggleClass('page-header__search-block--show');
		// });


		//Slick slider

