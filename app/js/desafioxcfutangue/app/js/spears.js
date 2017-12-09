$(document).ready(function(){

	createForm();
	$('body').scrollspy({ target: '#main-menu' });
	// google.maps.event.addDomListener(window, 'load', initMap);
	$('#submitForms').click(function(){

		ingresarUsuarios();
	});

	// 

	

	setEvents();
	
});

window.onload = function(){

	getGalleryImages(createGallery);
}

function createGallery(arrayImagesName){

	$('.gallery-loader').hide();
	// galleryCarousel

	var itemSlider = null;
	var rowItem = null;

	console.log('asd', arrayImagesName);

	for(var index = 0; index < arrayImagesName.length; index++){

		if(index % 6 == 0){

			itemSlider = document.createElement('div');
			itemSlider.className = 'item';
			if(index == 0) itemSlider.className += ' active';

			rowItem = document.createElement('div');
			rowItem.className = 'row'; 
		}
		
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

		$(rowItem).append(anchor);

		console.log(rowItem.children.length);

		if(rowItem.children.length == 6 || (index+1) == arrayImagesName.length){ 
			$(itemSlider).append(rowItem.cloneNode(true));
			$('#galleryCarousel>.carousel-inner').append(itemSlider.cloneNode(true));
		}
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

	$('button[data-target="#modalCircuito"]').click(function(){
		comoLlegar();
	});

	$('#submitComoLlegar').click(function(){
		btnLlegarEvt();
	});

	$("#modalCircuito").on("shown.bs.modal", function () {
		google.maps.event.trigger(mapLlegar, "resize");
	});

}

function submitFormContacto(e){

	e.preventDefault();

	sendContactoMessage(this.action, this.method, {email:$(this).find('#emailContacto').val(), consulta: $(this).find('textarea').val()});
}

var isGalleryLoading = false;

function scrollEvt(e){

	var scrolled = ( $(this).scrollTop() + $(window).height() );

	// if( ( scrolled > $('#galeria').offset().top ) &&
	// 	!isGalleryLoading){

	// 	getGalleryImages(createGallery);
	// 	isGalleryLoading = true;
	// }

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