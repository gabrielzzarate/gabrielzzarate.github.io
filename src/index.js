import 'normalize.css';
import './sass/styles.scss';

$(document).ready(function () {
	$('.hamburger').click(function () {
		const hamburger = $('.hamburger');
		const header = $('.header');
		const body = $('body');

		if (hamburger.hasClass('active')) {
			hamburger.removeClass('active');
			body.removeClass('fix-window');
			return header.removeClass('active');
		} else {
			body.addClass('fix-window');
			hamburger.addClass('active');
			return header.addClass('active');
		}
	});

	$('.slider').slick({
		infinite: true,
		dots: true,
		autoplay: true,
		speed: 300,
		slidesToShow: 1,
		fade: true,
		arrows: false,
		cssEase: 'linear',
	});

	$('.address').on('click', () => {
		window.open(
			'https://www.google.com/maps/place/16725+Birkdale+Commons+Pkwy,+Huntersville,+NC+28078/data=!4m2!3m1!1s0x8856a926acaaf9b3:0x6112942d349be70?sa=X&ved=2ahUKEwi3hLvewYjtAhXiLX0KHej-BjsQ8gEwAHoECAUQAQ'
		);
	});
});
