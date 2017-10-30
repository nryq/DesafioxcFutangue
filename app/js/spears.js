$(document).ready(function(){

	createForm();
	$('body').scrollspy({ target: '#main-menu' });
	// google.maps.event.addDomListener(window, 'load', initMap);
	$('#submitForms').click(function(){

		ingresarUsuarios();
	});

	setEvents();
	getAllImages(createGallery);
});

function createGallery(arrayImagesName){

	$('.gallery-loader').hide();

	for(var index = 0; index < arrayImagesName.length; index++){

		var link = './app/resources/galeria/' + arrayImagesName[index];

		var anchor = document.createElement('a');
			anchor.className = 'col-md-4';
			anchor.href = link;
			anchor.dataset.toggle = 'lightbox';
			anchor.dataset.gallery = 'example-gallery';

		var img = document.createElement('img');
			img.src = link;
			img.className = 'img-fluid';

		anchor.appendChild(img);
		$('#gallery').append(anchor);
	}

	$(document).on('click', '[data-toggle="lightbox"]', function(event) {
		event.preventDefault();
		$(this).ekkoLightbox();
	});
    $(document).on('click', '[data-toggle="lightbox"][data-gallery="example-gallery-11"]', function(event) {
	    event.preventDefault();
	    return $(this).ekkoLightbox({
	        wrapping: false
	    });
	});
}

function setEvents(){

	$(document).on('scroll', scrollEvt);
	$('#contactoForm').submit(submitFormContacto);
}

function submitFormContacto(e){

	e.preventDefault();

	sendContactoMessage(this.action, this.method, {email:$(this).find('#emailContacto').val(), consulta: $(this).find('textarea').val()});
}

function scrollEvt(e){

	if(reachedFooter(this)){

		var visibleArea = $(this).scrollTop() + $(window).height();
		var bot = (visibleArea - $('footer').offset().top );

		$('.social').css('bottom', 'calc( 5% + ' +bot+  'px )');
	}else
		$('.social').css('bottom', '5%');
}

function reachedFooter(element){

	var visibleArea = $(element).scrollTop() + $(window).height();

	return visibleArea > $(element).height() - $('footer').outerHeight();
}