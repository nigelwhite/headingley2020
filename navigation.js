$(function () {
	$('#navigation-top').load('navigation-top.html');
});

$(function () {
	$('#navigation-bottom').load('navigation-bottom.html');
});

$(function () {
	$('#navigation-drawer').load('navigation-drawer.html');
});

// $(function () {
// 	$(function () {
// 		var url = window.location.pathname,
// 			urlRegExp = new RegExp(url.replace(/\/$/, '') + '$'); // create regexp to match current url pathname and remove trailing slash if present as it could collide with the link in navigation in case trailing slash wasn't present there
// 		// now grab every link from the navigation
// 		$('.menu').each(function () {
// 			// and test its normalized href against the url pathname regexp
// 			if (urlRegExp.test(this.href.replace(/\/$/, ''))) {
// 				$(this).addClass('uk-active');
// 			}
// 		});
// 	});
// });

// $(function () {
// 	var index = window.location.pathname.split('/')[1];
// 	$('ul.li').removeClass('uk-active');
// 	$('li.' + index).addClass('uk-active');
// });

// $(function () {
// 	$('ul li a').click(function () {
// 		alert('got it');
// 		$('li').removeClass('uk-active');
// 		$(this).addClass('uk-active');
// 	});
// });
