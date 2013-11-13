/*
combined files : 

src/mods/loader/index

*/
KISSY.add('src/mods/loader/index',function(S, PN) {
	var pn = new PN({
		"closeButton": true,
		"positionClass": "page-notification-bottom-full-width",
		"onclick": null,
		"showDuration": "300",
		"hideDuration": "1000",
		"timeOut": "5000",
		"extendedTimeOut": "1000",
		"showEasing": "swing",
		"hideEasing": "linear",
		"showMethod": "fadeIn",
		"hideMethod": "fadeOut"
	});
	return pn;
},{
	requires:['gallery/pageNotification/1.0/index']	
});

