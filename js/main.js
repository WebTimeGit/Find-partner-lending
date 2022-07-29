document.addEventListener('DOMContentLoaded', function() {
	const swiper = new Swiper('.page_slider', {
		// Optional parameters
		spaceBetween: 0,
		direction: 'vertical',

		keyboard: {
			enabled: true,
			onlyInViewport: true,
			pageUpDown: true
		},
		mousewheel: {
			sensitivity: 1,

		}

	})
})