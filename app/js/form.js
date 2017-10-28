var formCont = 0;

var textFieldCorredor = '#inputRut, #inputName, #inputLast, #inputClub, #inputDate, #fono, #fonoAux';
var selectCorredor = '#selectCategory, #sexo, #selectSangre';

var textFieldAcomp = '#inputRut, #inputName, #inputLast, #fono';
var selectAcomp = '#selectCategory, #sexo';

var precios = [38000, 18000];

function createForm(){

	var divForm = document.createElement('div');
		divForm.id = "formulario_"+formCont;
		divForm.className = 'formulario';

	var inputName = createTextInput('inputName', 'form-control form-name', 'Ingrese su nombre', 
		{onblur: capitalizeFirstLetter,oninput: nameTab}
	);

	var selectRol = createSelectInput('selectRol','form-control form-rol',
		[{value: 'corredor', text:'Corredor ($' + precios[0] + ')'},{value: 'acompañante', text:'Acompañante ($' + precios[1] + ')'},],
		{onchange: rolSelectEvt}
		);

	var inputRut = createTextInput('inputRut', 'form-control form-rut', 'Ingrese su RUT', {onblur: formatearRut});

	var lastNameEvt = {onblur: capitalizeFirstLetter, oninput:nameTab},
		inputLast = createTextInput('inputLast', 'form-control form-apellido', 'Ingrese sus Apellidos', lastNameEvt);

	var emailEvt = {onblur: validarMailEvt},
		inputEmail = createTextInput('inputEmail', 'form-control form-email', 'Ingrese email', emailEvt);

	var inputClub = createTextInput('inputClub', 'form-control form-club', 'Club');

	var contDate = createDateInput('inputDate', 'date-cont');

	var selectCategory = createSelectInput('selectCategory','form-control form-categoria',
		[	
			{value: '', text:'Selecciona Categoria'},{value: 'categoria_1', text:'categoria_1'},
			{value: 'categoria_2', text:'categoria_2'},{value: 'categoria_3', text:'categoria_3'},
		]);

	var selectSexo = createSelectInput('sexo','form-control form-sexo',
		[	
			{value: '', text:'Sexo'},{value: 'hombre', text:'Hombre'},
			{value: 'mujer', text:'Mujer'},
		]);

	var sangreCont = document.createElement("div");
		sangreCont.id = 'bloodTypeContainer';
		sangreCont.className = "form-sangre";

	var labelSangre = document.createElement("label");
		labelSangre.innerHTML = "Grupo Sanguineo";
		labelSangre.setAttribute('for', 'selectSangre');

	var selectSangre = createSelectInput('selectSangre','form-control',
		[	
			{value: '', text:'--'},{value: 'a+', text:'A+'},{value: 'a-', text:'A-'},
			{value: 'b+', text:'B+'},{value: 'b-', text:'B-'},{value: 'ab+', text:'AB+'},
			{value: 'ab-', text:'AB+'},{value: 'o+', text:'O+'},{value: 'O-', text:'O-'},
		]);

	var selectTallaPolera = createSelectInput('selectTalla','form-control select-talla',
		[	
			{value: '', text:'Seleccione Talla'},{value: 'xl', text:'XL'},{value: 'l', text:'L'},
			{value: 'm', text:'M'},{value: 's', text:'S'},{value: 'xs', text:'S'},
		]);

	sangreCont.appendChild(labelSangre);
	sangreCont.appendChild(selectSangre);

	var divPhone = document.createElement("div");
		divPhone.className="phone-container";
		divPhone.style.cssFloat = "left";
  
	var divPhoneAux = document.createElement("div");
		divPhoneAux.className="phone-container";
		divPhoneAux.style.cssFloat = "right";
  
	var lblphone = document.createElement("div");
		lblphone.innerHTML = "+56";
		lblphone.className="phone-zone";

	var lblphonea = document.createElement("div");
		lblphonea.innerHTML = "+56";
		lblphonea.className="phone-zone";
  
	var inputPhone = createTextInput('fono', 'form-control form-phone', 'Fono contacto', {onkeydown: allowNumbrePhone});

	var inputPhoneAux = createTextInput('fonoAux', 'form-control form-phone', 'Fono emergencia', {onkeypress: allowNumbrePhone});

	divPhone.appendChild(lblphone);
	divPhone.appendChild(inputPhone);
  
  	divPhoneAux.id = 'auxPhoneContainer';
	divPhoneAux.appendChild(lblphonea);
	divPhoneAux.appendChild(inputPhoneAux);

	var alergias = document.createElement('textarea');
		alergias.id = "alergias";
		alergias.className = "form-control form-textarea";
		alergias.placeholder = "Alergias / Contraindicaciones";

	var header = document.createElement('header');
		header.id = '';
		header.className = 'header-form';
		header.innerHTML = '<h3> Formulario n°' + (formCont+1) + '</h3>';

	divForm.appendChild(header);
	divForm.appendChild(selectRol);
	divForm.appendChild(inputRut);
	divForm.appendChild(inputName);
	divForm.appendChild(inputLast);
	divForm.appendChild(inputEmail);
	divForm.appendChild(inputClub);	
	divForm.appendChild(contDate);
	divForm.appendChild(selectCategory);
	divForm.appendChild(sangreCont);
	divForm.appendChild(selectSexo);
	divForm.appendChild(selectTallaPolera);
	divForm.appendChild(divPhone);
	divForm.appendChild(divPhoneAux);
	divForm.appendChild(alergias);

	document.getElementById('forms').insertBefore(divForm, document.querySelector('.input-comprobante'));
	addTab();

	formCont++;

	$(divForm).find('input, select').change(changeIncompleteField);
}

function createTextInput(ide, classN, placeholder, objEvt){

	var out = document.createElement('input');
		out.id = ide;
		out.className = classN;
		out.placeholder = placeholder;
		out.type = 'text';

	addEvtsToElement(out, objEvt);

	return out;
}

function createDateInput(ide, className, objEvt){

	var contDate = document.createElement('div');
		contDate.id = 'cont_'+ide;
		contDate.className = className;
		  
	var lblDate = document.createElement('label');
		lblDate.className = "date-label";
		lblDate.innerHTML = "Fecha de Nacimiento: ";
		lblDate.setAttribute('for', ide);

	var inputDate = document.createElement('input');
		inputDate.id = ide;
		inputDate.className = "form-control form-date";
		inputDate.type="date";

	addEvtsToElement(inputDate, objEvt);

	contDate.appendChild(lblDate);
	contDate.appendChild(inputDate);

	return contDate;
}

function createSelectInput(ide, className, optionsArray, objEvt){

	var out = document.createElement('select');
		out.id = ide;
		out.className = className;

	for(var i=0; i<optionsArray.length; i++){

		var option = document.createElement('option');
			option.value = optionsArray[i].value;
			option.innerHTML = optionsArray[i].text;

		out.appendChild(option);
	}

	addEvtsToElement(out, objEvt);

	return out;
}

function addEvtsToElement(element, objEvts){

	if (typeof objEvts != 'undefined') {
		var keys = Object.keys(objEvts);
		for(var i = 0; i < keys.length; i++)	element.addEventListener(keys[i].replace('on', ''), objEvts[keys[i]]);
	}
}

function calculateTotal(){

	var rolInputs = $('.form-rol'),
		total = 0;

	for (var i = 0; i < rolInputs.length; i++) {

		switch(rolInputs[i].value){

			case 'corredor':

				total += precios[0];
			break;

			case 'acompañante':

				total += precios[1];
			break;

			default:

				total += precios[0];
			break;
		}
	}

	var labelTotal = '$'+ numberWithCommas(total);

	$('#total').html(labelTotal);
}

function numberWithCommas(x) {

    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}

function rolSelectEvt(e){

	var selectedRol = e.target.value;

	switch(selectedRol){

		case 'acompañante':
			hideShowRolFields('acompañante');
		break;
		case 'corredor':
			hideShowRolFields('corredor');
		break;
		default:
			hideShowRolFields('corredor');
		break;
	}

	calculateTotal();
}

function hideShowRolFields(rol){

	var acompMustNotHave = '#cont_inputDate, #inputClub, #selectCategory, #bloodTypeContainer, #auxPhoneContainer';

	switch(rol){

		case 'acompañante':
			
			$('.active-form').find(acompMustNotHave).slideUp();
		break;
		case 'corredor':
			
			$('.active-form').find(acompMustNotHave).slideDown();
		break;
	}
}

function allowNumbrePhone(e){

	if( !(e.keyCode >= 48 && e.keyCode <= 57)
	&& e.keyCode != 8 && e.keyCode != 37 && e.keyCode != 39
	&& !(e.keyCode >= 96 && e.keyCode <= 105 ) )	e.preventDefault();
}

function nameTab(e){

	var form = jQuery(e.target).closest('.formulario');
	var inputLastName = jQuery(form).find("#inputLast");
	var inputName = jQuery(form).find("#inputName");

	formIndex = parseInt(form[0].id.split('_')[1]);
	tab = document.getElementById("tab_"+formIndex);

	var tabHtml = '';

	if(inputLastName.val() != "" || inputName.val() != ""){

		tabHtml = inputLastName.val() == "" ? "" : inputLastName.val().slice(0, 6);
		tabHtml += inputLastName.val().length > 6 ? "..." : " ";
		tabHtml += inputName.val() == "" ? "" : inputName.val().slice(0, 8);
		tabHtml += inputName.val().length > 8 ? "..." : "";
	}else{

		tabHtml = "Formulario "+formIndex;
	}

	tab.children[0].innerHTML = tabHtml;
}

function addTab(){

	hideAllForms();

	var newTab = document.createElement('li');
		newTab.id = "tab_"+formCont;
		newTab.className = "form-tab active";
		// newTab.innerHTML = 
		newTab.addEventListener("click", showForm, false);

	var labelTitle = document.createElement('a');
		labelTitle.id = 'lblName';
		labelTitle.className = 'tab-name';
		labelTitle.innerHTML = "Formulario "+ (formCont+1);
		labelTitle.href = '#';
		labelTitle.onclick = function(e){return false;};

	var btnRemove = document.createElement('div');
		btnRemove.className = "remove-form";
		btnRemove.innerHTML = '<i class="fa fa-user-times" aria-hidden="true"></i>';
		btnRemove.dataset.toggle = 'confirmation';
		btnRemove.dataset.singleton="true";
		btnRemove.title = 'Confirme para borrar este formulario';
		$(btnRemove).data('btn-ok-icon', 'fa fa-check');
		$(btnRemove).data('btn-cancel-icon', 'fa fa-times');
		$(btnRemove).data('btn-ok-label', '');
		$(btnRemove).data('btn-cancel-label', '');
		$(btnRemove).data('btn-ok-class', 'btn-danger');
		$(btnRemove).data('btn-cancel-class', 'btn-success');
		// btnRemove.addEventListener('click', removeTabBtn, false);

	newTab.appendChild(labelTitle);
	newTab.appendChild(btnRemove);

	document.getElementById('navTabs').insertBefore(newTab, document.getElementById('addNewTab'));

	// hideAllForms();

	jQuery(newTab).addClass("active");

	showFormN(parseInt(newTab.id.split("_")[1]));

	initConfirmtationPopover();

	calculateTotal();
}

function initConfirmtationPopover(){

	$('[data-toggle=confirmation]').confirmation({
		rootSelector: '[data-toggle=confirmation]',
		// other options
		onConfirm: function() {
			removeTabBtn(this);
		},
		onCancel: function() {
		},
	});
}

function removeTabBtn(e){

	var target = $(e).closest('.remove-form').parent()[0];
	deleteForm(target);
}

function hideAllForms(){

	jQuery('.form-tab').removeClass("active");
	jQuery('.formulario').removeClass('active-form');
}

function showForm(target){

	hideAllForms();

	this.classList.add('active');
	showFormN(parseInt(this.id.split("_")[1]));
}

function showFormN(index){

	jQuery('#formulario_'+ index ).addClass('active-form');
}

function deleteForm(tab){

	var tabParent = tab.parentElement;
	var tabIndex = parseInt(tab.id.split("_")[1]);
	var flag = $(tab).hasClass("active"); 

	var form = document.getElementById('formulario_'+tabIndex);
	var formParent = form.parentElement;

	tabParent.removeChild(tab);
	formParent.removeChild(form);

	console.log(flag, $("#forms").children().first(), jQuery(tabParent).children().not('.new-tab-btn').first());

	if(flag){
		
		$("#forms").children().first().addClass('active-form');
		jQuery(tabParent).children().not('.new-tab-btn').first().addClass("active");
	}

	calculateTotal();
}

function changeIncompleteField(e){

	if($(this).hasClass('incompleto')){

		$(this).removeClass('incompleto');
		$('#tab_'+$(this).closest('.formulario')[0].id.split('_')[1]).find('i.fa-asterisk').remove();
	}
}

function clearIncompleteStyle(){

	jQuery(".form-tab").css("box-shadow", "none");
	$('.incompleto').removeClass('incompleto');
	$('.has-error').removeClass('has-error');
	$('.tab-name').find('i.fa-asterisk').remove();
}

function validarForm(){

	var flag = true;

	var formArray = document.getElementsByClassName("formulario");
  
	clearIncompleteStyle();

	for(var index = 0; index < formArray.length; index++){

		if($(formArray[index]).find('#selectRol').val() != 'acompañante'){

			var arrayTextField = jQuery(formArray[index]).find('#inputRut, #inputName, #inputLast, #inputDate, #fono, #fonoAux');
			var arraySelectField = jQuery(formArray[index]).find('#selectCategory, #sexo, #selectSangre');
		}else{
			var arrayTextField = jQuery(formArray[index]).find('#inputRut, #inputName, #inputLast, #fono');
			var arraySelectField = jQuery(formArray[index]).find('#sexo');
		}

		jQuery(arrayTextField).each(function(index){
			if(flag){
				if(jQuery(this).val() != "" && flag == true){

					flag = true;
				}else{

					flag = false;
				}
			}

			if(jQuery(this).val() != ""){

				inputFieldStatus(this, 'correcto');
			}else{

				inputFieldStatus(this, 'incompleto');
			}
		});

		jQuery(arraySelectField).each(function(index){

			if (flag) {

				if(jQuery(this).val() !=  ''){

					flag = true;
				}else{

					flag = false;
				}
			};

			if(jQuery(this).val() !=  ''){

				inputFieldStatus(this, 'correcto');
			}else{
				
				inputFieldStatus(this, 'incompleto');
			}

			if(!flag)	marcarFormIncompleto(jQuery(this));
		});

		if(!validarMail(jQuery(formArray[index]).find('#inputEmail')[0]) && !flag){
			flag = false;
		}
	}

	var checkboxT = document.querySelectorAll('#checkboxTerms');
	for(var index = 0; index < checkboxT.length; index++){

		if(!checkboxT[index].checked){

			flag = false;
			alert("Debes aceptar el reglamento");
		}
	}

	if($('.input-comprobante').val() == '')	flag = false;
	
	return flag;
}

function inputFieldStatus(field, status){

	switch(status){

		case 'incompleto':

			$(field).addClass('has-error');
		break;
		case 'correcto':

			$(field).addClass('has-success');
		break;
	}
}

function marcarFormIncompleto(element){
  
	var index = parseInt($(element).closest(".formulario").attr("id").split("_")[1]);

	if(!$("#tab_"+index).hasClass('incompleto')){

		$("#tab_"+index).addClass('incompleto');
		$("#tab_"+index).find('#lblName').append('<i class="fa fa-asterisk" aria-hidden="true"></i>');	
	}
}

function validarMailEvt(e){

	validarMail(e.target);
}

function validarMail(inputMail){

	var email = inputMail.value;

	var flag = false;

	if(email.match(/@/g) != null){
		if(email.match(/@/g).length == 1){
			if(email.match(/\./g) != null){
				flag = true;
			}else{
				flag = false;
			}
		}else{
			flag = false;
		}
	}else{
		flag = false;
	}

	if(flag){
		jQuery(inputMail).removeClass('incompleto');
	}else{
		jQuery(inputMail).addClass('incompleto');
		// jQuery(inputMail).css("box-shadow", "inset 0px 0px 10px 1px rgba(255,0,0,0.63)");
	}
	return flag;
}

function formatearRut(e){

	var field = e.target;

	var rut = field.value;

	if(rut != ""){
		rut = rut.replace(/,/g, ".");

		if(rut.indexOf("-") == -1){

			rut = rut.slice(0, -1)+ "-" + rut.slice(-1);
		}

		var rutAux = rut.split("-")[0];
		var digitoVer = rut.split("-")[1];
		rutAux = rutAux.replace(/\./g, "");

		if(rutAux.match(/\./g) == null){

			for(var index = 3; index < rutAux.length; index += 4){

				rutAux = rutAux.slice(0, -index)+"."+rutAux.slice(-index);
			}
		}

		field.value = rutAux+"-"+digitoVer;
	}else{
		field.value = "";
	}
}

function capitalizeFirstLetter(e) {

	var element = e.target; 
	if(element.value != ""){

		var string = element.value.split(" ");
		var stringOut = '';
		for(var index = 0; index < string.length; index++){
			
			stringOut += string[index].charAt(0).toUpperCase() + string[index].slice(1) + (index+1 < string.length ? " " : "");
		}

		element.value = stringOut;

		nameTab(e);
	}
}

function ingresarUsuarios(){

	if(validarForm()){

		// console.log('TODO', getDataForm());
		toggleLoaderSubmit();
		saveToDB(getDataForm());
	}
}

function toggleLoaderSubmit(){

	$('#textBtn').toggleClass('active-text');
	$('.submit-loader').toggle();

	if(typeof $('#forms').find('input, select, textarea').attr('disabled') == 'undefined'){

		$('#forms').find('input, select, textarea, #submitForms').attr('disabled', true);
		$('#navTabs').css('pointer-events', 'none');
	}else{
		$('#navTabs').css('pointer-events', 'all');
		$('#forms').find('input, select, textarea,  #submitForms').attr('disabled', false);
	}
}

function showAlert(type){

	var alertSelector = '';

	switch(type){

		case 'success':

			alertSelector = '#successAlert';
		break;

		case 'error':

			alertSelector = '#errorAlert';
		break;

		case 'connectLost':

			alertSelector = '#connectionAlert';
		break;

		default:
			console.log('status: def');
			alertSelector = '#errorAlert';
		break;
	}

	$(alertSelector).slideDown(400, function(){

		$('#alertContainer > .alert').delay(2000).slideUp();
	});
}

function getDataForm(){

	var usersArray = [];
	// var formArray = document.getElementsByClassName("formulario");

	jQuery('.formulario').each(function(index){

		jQuery(this).find("input, select, textarea");

		var user = {};

		user.rut = jQuery(this).find("#inputRut").val();
		user.name = jQuery(this).find("#inputName").val();
		user.lastname = jQuery(this).find("#inputLast").val();
		user.email = jQuery(this).find("#inputEmail").val();
		user.club = (jQuery(this).find("#inputClub").val().replace(' ', '') == '') ? 'Independiente' : jQuery(this).find("#inputClub").val();
		user.date = jQuery(this).find("#inputDate").val();
		user.category = jQuery(this).find("#selectCategory").val();
		user.gender = jQuery(this).find("#sexo").val();
		user.blood = jQuery(this).find("#selectSangre").val();
		user.phone = jQuery(this).find("#fono").val();
		user.phoneEmergency = jQuery(this).find("#fonoAux").val();
		user.allergy = jQuery(this).find("#alergias").val();
		user.id_rol = $(this).find('#selectRol')[0].selectedIndex;
		user.talla_polera = $(this).find('#selectTalla').val();

		usersArray.push(user);
	});

	return usersArray;
}

function clearFormData(){


}