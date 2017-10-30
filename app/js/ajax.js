var urlAJAX = "";

function saveToDB(userArray){
	
	var stringUsers = JSON.stringify(userArray);

	// console.log(stringUsers);

	var formData = new FormData();

	var file = $(".input-comprobante")[0].files[0];
	formData.append('file', file);
	formData.append('users', stringUsers);

	$.ajax({
		method: "POST",
		url: "./backend/registerUser.php",
		data: formData,
		processData: false,  // tell jQuery not to process the data
		contentType: false,   // tell jQuery not to set contentType
		async: true,
			success: function(data){

				if(isJSON(data)){

					var response = JSON.parse(data);
					var flag = true;

					for (var i = 0; i < response.length; i++) {
						
						if(response[i].status != 'success' && flag)	flag = false;
					}

					if(flag){

						toggleLoaderSubmit();
						showAlert('success');
						showAlertMessage(2);
						clearFormData();
					}else{

						showAlert('error');
						console.log("problemas: ", response);
					}


				}else{

					showAlert('error');
					console.log("problemas: ", response);
				}
			},
			error: function(err){
				
				toggleLoaderSubmit();
				showAlert('error');
				console.log("errorre", err);
			},
			timeout: function(msg){

				toggleLoaderSubmit();
				showAlert('connectLost');
				console.log("timeout", msg);
			}
	});
}

function createVoucherFile(){

	var voucher = jQuery(".input-comprobante").val();
}

function isJSON(string){

	return /^[\],:{}\s]*$/.test(string.replace(/\\['\\\/bfnrtu]/g, '@').replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, ']').replace(/(?:^|:|,)(?:\s*\[)+/g, ''));
}

function sendContactoMessage(action, method, data){

	$.ajax({
		method: method,
		url: action,
		data: data,
		async: true,
		success: function(data){

		},
		error: function(err){

		},
		timeout: function(msg){

		}
	});
}

var response = '';

function getAllImages(callback){

	var dir = "./app/resources/galeria/";
	var fileextension = ".jpg";

	var arrayImagesName = [];
	$.ajax({
		//This will retrieve the contents of the folder if the folder is configured as 'browsable'
		url: dir,
		success: function (data) {
			//List all file names in the page
			$(data).find("td > a[href*='" + fileextension.toUpperCase() + "'], td > a:contains(" + fileextension.toLowerCase() + ")").each(function(){
				// will loop through 

				arrayImagesName.push($(this).attr("href"));
			});


			response =  data;
			if(typeof callback != 'undefined')	callback(arrayImagesName);
		},
		done: function(data){

			console.log('done', data);
		}
	});
}