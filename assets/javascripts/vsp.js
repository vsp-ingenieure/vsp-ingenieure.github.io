jQuery(document).ready(function() {

	/*
	*   Examples - images
	*/
	
	$('.fancybox').fancybox({
		transitionIn: 'elastic',
		transitionOut: 'elastic',
		speedIn: 600,
		speedOut: 300
	});

	$("a[rel=reference_gallery]").fancybox({
		'transitionIn'		: 'none',
		'transitionOut'		: 'none',
		'titlePosition' 	: 'over'
	});
});
