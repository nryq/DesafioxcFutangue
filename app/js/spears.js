$(document).ready(function(){

	createForm();
	$('body').scrollspy({ target: '#main-menu' });
	google.maps.event.addDomListener(window, 'load', initMap);
});