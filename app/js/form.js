var formCont = 0;

function createForm(){

	// var formCont = document.getElementsByClassName("formulario").length != undefined ? document.getElementsByClassName("formulario").length : 0;

	var divForm = document.createElement('div');
		divForm.id = "formulario_"+formCont;
		divForm.className = 'formulario';

	var inputName = createTextInput('inputName', 'form-control form-name', 'Ingrese su nombre', 
		{onblur: capitalizeFirstLetter,oninput: nameTab}
	);

	var selectRol = createSelectInput('selectRol','form-control form-rol',
		[{value: 'corredor', text:'Corredor'},{value: 'acompañante', text:'Acompañante'},],
		{onchange: rolSelectEvt}
		);

	var inputRut = createTextInput('inputRut', 'form-control form-rut', 'Ingrese su RUT', {onblur: formatearRut});

	var lastNameEvt = {onblur: capitalizeFirstLetter, oninput:nameTab},
		inputLast = createTextInput('inputLast', 'form-control form-apellido', 'Ingrese sus Apellidos', lastNameEvt);

	var emailEvt = {onblur: validarMailEvt},
		inputEmail = createTextInput('inputEmail', 'form-control form-email', 'Ingrese email', emailEvt);

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
  
	divPhoneAux.appendChild(lblphonea);
	divPhoneAux.appendChild(inputPhoneAux);

	var alergias = document.createElement('textarea');
		alergias.id = "alergias";
		alergias.className = "form-control form-textarea";
		alergias.placeholder = "Alergias / Contraindicaciones";


	divForm.appendChild(selectRol);
	divForm.appendChild(inputRut);
	divForm.appendChild(inputName);
	divForm.appendChild(inputLast);
	divForm.appendChild(inputEmail);
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
}

function hideShowRolFields(rol){

	var acompMustNotHave = '#cont_inputDate, #selectCategory, #bloodTypeContainer';

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

	console.log(e.keyCode, (e.keyCode >= 48 && e.keyCode <= 57), (e.keyCode >= 96 && e.keyCode <= 105 ));
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

var debugg = {};

function addTab(){

	hideAllForms();

	var newTab = document.createElement('div');
		newTab.id = "tab_"+formCont;
		newTab.className = "form-tab active";
		// newTab.innerHTML = 
		newTab.addEventListener("click", showForm, false);

	var labelTitle = document.createElement('label');
		labelTitle.id = 'lblName';
		labelTitle.className = 'tab-name';
		labelTitle.innerHTML = "Formulario "+ (formCont+1);



	var btnRemove = document.createElement('div');
		btnRemove.className = "remove-form";
		btnRemove.innerHTML = '<i class="fa fa-times" aria-hidden="true"></i>';
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

	$(btnRemove).confirmation({
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
	e.stopPropagation();
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

function deleteForm(btn){

	var tab = btn;
	var tabParent = tab.parentElement;
	var tabIndex = parseInt(tab.id.split("_")[1]);

	var form = document.getElementById('formulario_'+tabIndex);
	var formParent = form.parentElement;

	tabParent.removeChild(tab);
	formParent.removeChild(form);      
  
	console.log('form: ',jQuery("#forms").children().first());

	if(jQuery(tab).hasClass("active")){
		
		jQuery("#forms").children().first().show();
		jQuery(tabParent).children().first().addClass("active");
	}
}

function validarForm(){

	var flag = true;

	var formArray = document.getElementsByClassName("formulario");
  
	jQuery(".form-tab").css("box-shadow", "none");

	for(var index = 0; index < formArray.length; index++){

		var arrayTextField = jQuery(formArray[index]).find('#inputRut, #inputName, #inputLast, #inputDate, #fono, #fonoAux');

		var arraySelectField = jQuery(formArray[index]).find('#selectCategory, #sexo, #selectSangre');

		jQuery(arrayTextField).each(function(index){
			if(flag){
				if(jQuery(this).val() != "" && flag == true){

					flag = true;
				}else{

					flag = false;
				}
			}
			if(jQuery(this).val() != "" && flag == true){
				jQuery(this).css("box-shadow", "none");

			}else{
				
				jQuery(this).css("box-shadow", "inset 0px 0px 10px 1px rgba(255,0,0,0.63)");
			}
		});

		jQuery(arraySelectField).each(function(index){

			if (flag) {

				if(jQuery(this).val() !=  'Selecciona Categoria' &&
					jQuery(this).val() != 'Sexo' &&
					jQuery(this).val() != '--'
					)
				{

					flag = true;
				}else{

					flag = false;
				}
			};
			if(jQuery(this).val() !=  'Selecciona Categoria' &&
				jQuery(this).val() != 'Sexo' &&
				jQuery(this).val() != '--'
				)
			{

				jQuery(this).css("box-shadow", "none");

			}else{
				
				jQuery(this).css("box-shadow", "inset 0px 0px 10px 1px rgba(255,0,0,0.63)");
			}
		  if(!flag){
			marcarFormIncompleto(jQuery(this));
		  }
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
	
	return flag;
}

function marcarFormIncompleto(element){
  
	var index = parseInt(jQuery(element).closest(".formulario").attr("id").split("_")[1])+1;
	jQuery("#tab_"+index).css("box-shadow", "0px 5px 5px -3px rgba(255,0,0,0.75)");
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
		jQuery(inputMail).css("box-shadow", "none");
	}else{
		jQuery(inputMail).css("box-shadow", "inset 0px 0px 10px 1px rgba(255,0,0,0.63)");
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
		ield.value = "";
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

		console.log('TODO', getDataForm());
		saveToDB(getDataForm());
	}else{


	}
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
		user.date = jQuery(this).find("#inputDate").val();
		user.category = jQuery(this).find("#selectCategory").val();
		user.gender = jQuery(this).find("#sexo").val();
		user.blood = jQuery(this).find("#selectSangre").val();
		user.phone = jQuery(this).find("#fono").val();
		user.phoneEmergency = jQuery(this).find("#fonoAux").val();
		user.allergy = jQuery(this).find("#alergias").val();

		usersArray.push(user);
	});

	return usersArray;
}