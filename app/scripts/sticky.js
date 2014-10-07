// $(document).ready(function() {
// 	var wrapper = $(".snap-content"),
// 		sticky = $("#sticky"),
// 		length = wrapper.height() - sticky.height() + wrapper.offset().top;
	
// 	$(".wrapper").scroll(function() {
// 		console.log("scrolling");
// 		var scroll = $(this).scrollTop();
// 		var height = sticky.height() + 'px';

// 		if(scroll < wrapper.offset().top) {
// 			sticky.css({
// 				'position': 'absolute',
// 				'top': '0'
// 			});
// 		} else if (scroll>length) {
// 			sticky.css({
// 				'position': 'absolute',
// 				'bottom': '0',
// 				'top': 'auto'	
// 			});
// 		} else {
// 			sticky.css({
// 				'position': 'fixed',
// 				'top': '0',
// 				'height': height
// 			});
// 		}
// 	});
// });