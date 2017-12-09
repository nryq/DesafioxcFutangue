		
function initMap() {
  
	var markers	= [];
	var map;
	var infoWindowArray = [];
	// crea el mapa, lo setea en el centro (eses cordenadas qls) y le da un zoom
	map = new google.maps.Map(document.getElementById('map'), {
		center: {lat: -40.3653666, lng: -72.3095197},
		mapTypeId: google.maps.MapTypeId.HYBRID,
		zoom: 14
	});
	
	// crea un "marker"(Un Puntito en el mapa) y lo setea en una coordenada "Latlng"
	markers[0] = new google.maps.Marker({
		position: new google.maps.LatLng(-40.36492, -72.31458),
		title:"test",
		map: map
	});
	
	// crea la info que mostrara el "infoWindows" (La ventanita que aparece al apretar un marker)
	var infowindow = new google.maps.InfoWindow({
		content: "<h1>Inicio</h1>"
	});
	
	// hace que el "marker" al clickearlo muestre el "infoWindows" antes creado
	markers[0].addListener('click', function() {
		infowindow.open(map,markers[0]);
		console.log("ifno");
	});
	
	// esto crea una polilinea: la linea se crea en base a puntos (gracias google)
	// aca no voy a explicar los pasos uno por uno ya que estoy bien al peo y me vale verga
	
	var puntos = [];
		puntos.push(new google.maps.LatLng(-40.3530199,-72.3163891));
		puntos.push(new google.maps.LatLng(-40.354001,-72.3172474));
		puntos.push(new google.maps.LatLng(-40.3547859,-72.3175049));
		puntos.push(new google.maps.LatLng(-40.3555054,-72.3174191));
		puntos.push(new google.maps.LatLng(-40.3560614,-72.3174083));
		puntos.push(new google.maps.LatLng(-40.3568789,-72.3169148));
		puntos.push(new google.maps.LatLng(-40.3574676,-72.3161316));
		puntos.push(new google.maps.LatLng(-40.3575657,-72.3165607));
		puntos.push(new google.maps.LatLng(-40.3574758,-72.3170006));
		puntos.push(new google.maps.LatLng(-40.3571896,-72.3178375));
		puntos.push(new google.maps.LatLng(-40.3582524,-72.3176765));
		puntos.push(new google.maps.LatLng(-40.3576638,-72.3193073));
		puntos.push(new google.maps.LatLng(-40.3589964,-72.3183525));
		puntos.push(new google.maps.LatLng(-40.3589065,-72.3187923));
		puntos.push(new google.maps.LatLng(-40.3596995,-72.3200798));
		puntos.push(new google.maps.LatLng(-40.3589065,-72.3202515));
		puntos.push(new google.maps.LatLng(-40.3591027,-72.3211956));
		puntos.push(new google.maps.LatLng(-40.3592989,-72.3221183));
		puntos.push(new google.maps.LatLng(-40.3596259,-72.3214531));
		puntos.push(new google.maps.LatLng(-40.3604107,-72.3217964));
		puntos.push(new google.maps.LatLng(-40.3615879,-72.3213673));
		puntos.push(new google.maps.LatLng(-40.3628305,-72.320509));
		puntos.push(new google.maps.LatLng(-40.3640241,-72.3185778));
		puntos.push(new google.maps.LatLng(-40.3643347,-72.3173332));
		puntos.push(new google.maps.LatLng(-40.3640077,-72.3163033));
		puntos.push(new google.maps.LatLng(-40.3636153,-72.3156166));
		puntos.push(new google.maps.LatLng(-40.3649233,-72.3145866));
		puntos.push(new google.maps.LatLng(-40.3641385,-72.3157024));
		puntos.push(new google.maps.LatLng(-40.3647271,-72.3164749));
		puntos.push(new google.maps.LatLng(-40.3646944,-72.3173976));
		puntos.push(new google.maps.LatLng(-40.3642366,-72.3180842));
		puntos.push(new google.maps.LatLng(-40.3653157,-72.3186207));
		puntos.push(new google.maps.LatLng(-40.3658389,-72.3187065));
		puntos.push(new google.maps.LatLng(-40.3661004,-72.3193932));
		puntos.push(new google.maps.LatLng(-40.3667544,-72.3186207));
		puntos.push(new google.maps.LatLng(-40.3678007,-72.3181057));
		puntos.push(new google.maps.LatLng(-40.3689124,-72.3164749));
		puntos.push(new google.maps.LatLng(-40.3694356,-72.3153591));
		puntos.push(new google.maps.LatLng(-40.3697625,-72.3142433));
		puntos.push(new google.maps.LatLng(-40.3700895,-72.3132992));
		puntos.push(new google.maps.LatLng(-40.3704818,-72.3122692));
		puntos.push(new google.maps.LatLng(-40.3711358,-72.3116684));
		puntos.push(new google.maps.LatLng(-40.3714627,-72.3107243));
		puntos.push(new google.maps.LatLng(-40.3717897,-72.3096943));
		puntos.push(new google.maps.LatLng(-40.3718387,-72.3087931));
		puntos.push(new google.maps.LatLng(-40.3722311,-72.3072481));
		puntos.push(new google.maps.LatLng(-40.372509,-72.3057675));
		puntos.push(new google.maps.LatLng(-40.372983,-72.3043728));
		puntos.push(new google.maps.LatLng(-40.3734081,-72.3031282));
		puntos.push(new google.maps.LatLng(-40.3744053,-72.3021412));
		puntos.push(new google.maps.LatLng(-40.3744053,-72.3010254));
		puntos.push(new google.maps.LatLng(-40.374062,-72.3003387));
		puntos.push(new google.maps.LatLng(-40.3738168,-72.2995663));
		puntos.push(new google.maps.LatLng(-40.374111,-72.2988153));
		puntos.push(new google.maps.LatLng(-40.3751572,-72.2980642));
		puntos.push(new google.maps.LatLng(-40.3747649,-72.2972059));
		puntos.push(new google.maps.LatLng(-40.3746014,-72.2960472));
		puntos.push(new google.maps.LatLng(-40.3735552,-72.2956181));
		puntos.push(new google.maps.LatLng(-40.3728359,-72.2957897));
		puntos.push(new google.maps.LatLng(-40.3719858,-72.2951889));
		puntos.push(new google.maps.LatLng(-40.3713973,-72.2957897));
		puntos.push(new google.maps.LatLng(-40.370678,-72.2952747));
		puntos.push(new google.maps.LatLng(-40.3700241,-72.2956181));
		puntos.push(new google.maps.LatLng(-40.3688797,-72.2953606));
		puntos.push(new google.maps.LatLng(-40.3682421,-72.2944164));
		puntos.push(new google.maps.LatLng(-40.3667871,-72.2943735));
		puntos.push(new google.maps.LatLng(-40.3670323,-72.2950602));
		puntos.push(new google.maps.LatLng(-40.366035,-72.2954464));
		puntos.push(new google.maps.LatLng(-40.3651849,-72.2957897));
		puntos.push(new google.maps.LatLng(-40.3642693,-72.2964764));
		puntos.push(new google.maps.LatLng(-40.3633537,-72.2968197));
		puntos.push(new google.maps.LatLng(-40.3625035,-72.2968197));
		puntos.push(new google.maps.LatLng(-40.3618495,-72.2972488));
		puntos.push(new google.maps.LatLng(-40.3611301,-72.2977638));
		puntos.push(new google.maps.LatLng(-40.3611383,-72.2967339));
		puntos.push(new google.maps.LatLng(-40.361077,-72.2972864));
		puntos.push(new google.maps.LatLng(-40.3601655,-72.2962189));
		puntos.push(new google.maps.LatLng(-40.3596095,-72.2960043));
		puntos.push(new google.maps.LatLng(-40.3589392,-72.295897));
		puntos.push(new google.maps.LatLng(-40.3581216,-72.2967339));
		puntos.push(new google.maps.LatLng(-40.3592989,-72.2975922));
		puntos.push(new google.maps.LatLng(-40.3594297,-72.2982788));
		puntos.push(new google.maps.LatLng(-40.3589719,-72.2991371));
		puntos.push(new google.maps.LatLng(-40.3587103,-72.2999954));
		puntos.push(new google.maps.LatLng(-40.3578191,-72.3008967));
		puntos.push(new google.maps.LatLng(-40.3576474,-72.3005211));
		puntos.push(new google.maps.LatLng(-40.3568789,-72.3014546));
		puntos.push(new google.maps.LatLng(-40.3581257,-72.3016959));
		puntos.push(new google.maps.LatLng(-40.3575064,-72.3020526));
		puntos.push(new google.maps.LatLng(-40.3585549,-72.3022376));
		puntos.push(new google.maps.LatLng(-40.359446,-72.3042224));
		puntos.push(new google.maps.LatLng(-40.3595196,-72.3059927));
		puntos.push(new google.maps.LatLng(-40.3601164,-72.3065828));
		puntos.push(new google.maps.LatLng(-40.3615715,-72.3063254));
		puntos.push(new google.maps.LatLng(-40.3637461,-72.3048878));

	puntosInteres = [0, 20, 23, 30, 45, 55, 56, 57, 75, 94];
  	puntosInteresTitulos = ["El Vado", "Cruce 01", "Muelle a Cruce 01", "Mallin Planchado", "Mirador Los Mañios", "Refugio 01 Ovdas", "Cruce Altas Cumbres", "Cruce Mirador Ma Dolores", "Cruce Mirador El Llano", "Refugio 02"];
  
  	for(var index=0; index < puntosInteres.length; index++){
    	
      	markers.push(new google.maps.Marker({
			position: puntos[puntosInteres[index]],
			title:puntosInteresTitulos[index],
			map: map
      	}));
      
        infoWindowArray.push(new google.maps.InfoWindow({
        	content: "<h1>"+puntosInteresTitulos[index]+"</h1>"
        }));
		jQuery(markers).click(function(){
        	infoWindowArray[index].open(map,jQuery(this)[0]);
        });
        // hace que el "marker" al clickearlo muestre el "infoWindows" antes creado
        /*markers[markers.length-1].addListener('click', function() {
          	infoWindowArray[index].open(map,markers[index]);
          	//console.log("ifno");
        });*/
      
    }
  
  	
	
	//console.log(puntos);

	var myPolyline = new google.maps.Polyline({
		path: puntos,
		strokeColor: "Red",
		strokeOpacity: 1.0,
		strokeWeight: 2
	});
	myPolyline.setMap(map);

	// comoLlegar();
}


var directionsService;
var directionsDisplay;
var dest = 'T-85, Lago Ranco, Región de los Ríos, Chile';
var mapLlegar = null 

function comoLlegar(){

	console.log('hola');

	

	directionsService = new google.maps.DirectionsService;
	directionsDisplay = new google.maps.DirectionsRenderer;

	if (mapLlegar == null){

		mapLlegar = new google.maps.Map(document.getElementById('mapComoLlegar'), {
			zoom: 14,
			center: {lat: -40.3239482, lng: -72.4808622}
		});

		directionsDisplay.setMap(mapLlegar);

		
		
	}
}

function btnLlegarEvt(){

	var city = $('#formWhereCity').val();

	console.log(city);

	if(city != undefined && city != null && city != 'null' && city != 'undefined' && city != ''){
	
	console.log('dentro ', city);
		var country = $('#formWhereCountry').val() != '' ? $('#formWhereCountry').val() : 'Chile';

		calculateAndDisplayRoute(directionsService, directionsDisplay, city, country);
	}else{


	}
}

function calculateAndDisplayRoute(directionsService, directionsDisplay, city, country) {
	var waypts = [];

	var or = city;
	or += (country != undefined) ?  ', ' + country : '';

	console.log('wp ', or, city);

	directionsService.route({

		origin: or,
		destination: {lat: -40.3239482, lng: -72.4808622},
		// waypoints: waypts,
		optimizeWaypoints: true,
		travelMode: 'DRIVING'
	}, function(response, status) {

		if (status === 'OK') {
			directionsDisplay.setDirections(response);
			var route = response.routes[0];
			var summaryPanel = document.getElementById('directions-panel');
			summaryPanel.innerHTML = '';
			// For each route, display summary information.
			for (var i = 0; i < route.legs.length; i++) {
				var routeSegment = i + 1;
				summaryPanel.innerHTML += '<b>Route Segment: ' + routeSegment +
				  '</b><br>';
				summaryPanel.innerHTML += route.legs[i].start_address + ' to ';
				summaryPanel.innerHTML += route.legs[i].end_address + '<br>';
				summaryPanel.innerHTML += route.legs[i].distance.text + '<br><br>';
			}
		} else {
			window.alert('Directions request failed due to ' + status);
		}
	});
}


//google.maps.event.addDomListener(window, 'load', initMap);

//  mira wacho ql no borres esta linea de abajo hace que toda 
// la verga anterior cargue SOLO despues de que haya cargado 
// el html. Hazme caso wn yo trabajo con abogaos.

// google.maps.event.addDomListener(window, 'load', initMap);

// AIzaSyCCh_VobFIhfPTs05Bg-YbKsWzgHuSnKQw

// AIzaSyD0sP-WHOLh0TuLL_OD1u-2cxcwgxTrvq4

