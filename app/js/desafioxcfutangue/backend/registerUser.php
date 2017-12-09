<?php 

	function registerUser(){

		$timestamp = microtime(true);
		$respuesta = "";

		if($_POST["users"]){
			$respuesta .= insertInDB($_POST["users"], $timestamp);
		}

		echo $respuesta; 
	}

	function insertInDB($users, $voucherId){

		$servername = "localhost";
		$DBUser = "sparttju_tsDev";
		$DBPass = "n#,;V!W(}_F]";
		$dbname = "sparttju_desafioxcfutangue";

		$conn = new mysqli($servername, $DBUser, $DBPass, $dbname);

		if ($conn->connect_error) {
			die("[{\"reporter\": \"BBDDResponse\", \"response\": " . $conn->connect_error . ", \"status\":\"error\"}]");
		}

		$arrayUsers = json_decode($users);
		$sql = "INSERT INTO `ts_registered` (
			`rut`, `nombre`, `apellidos`, `id_rol`, 
			`email`, `birthday`, `gender`, `categoria`, 
			`grupo_sanguineo`, `club`, `talla_polera`, 
			`phono`, `phono_aux`, `alergias`, `voucher_id`, 
			`id_status`, `timestamp`) VALUES";

		$fecha = new DateTime();

		foreach ($arrayUsers as $user) {

			$sql .= " (\"". $user->rut ."\", \"". $user->name ."\", \"". $user->lastname ."\", \"". $user->id_rol ."\"
						, \"". $user->email ."\", ";

			$sql .= !empty($user->date) ? "\"" . $user->date . "\"" : "NULL";

			$sql .= ", \"". $user->gender ."\", ";

			$sql .= !empty($user->category) ? "\"" . $user->category . "\", " : "NULL, ";
			$sql .= !empty($user->blood) ? "\"" . $user->blood . "\"" : "NULL";

			$sql .= ", \"". $user->club ."\", \"". $user->talla_polera ."\", \"". $user->phone ."\", ";

			$sql .= !empty($user->phoneEmergency) ? "\"" . $user->phoneEmergency . "\", " : "NULL, ";
			$sql .= !empty($user->allergy) ? "\"" . $user->allergy . "\"" : "NULL";

			$sql .= ", \"". $voucherId ."\", \"0\", \"". (string) $fecha->getTimestamp() ."\"), ";
		}

		// echo rtrim($sql,", ");

		if ($conn->query(rtrim($sql,", ")) === TRUE) {

			$out = uploadVoucher($voucherId);
			return "[" . $out . ", {\"reporter\": \"BBDDResponse\", \"response\": \"se ha creado el registro\", \"status\":\"success\"}]";
		} else {
			return "[{\"reporter\": \"BBDDResponse\", \"response\": \"no se ha podido crear el registro\", \"status\":\"error\"}]";
		}

		$conn->close();
	}

	function uploadVoucher($name){

		$target_dir = "voucher/";
		$target_file = $target_dir . $name . "." . pathinfo($target_dir . basename($_FILES["file"]["name"]), PATHINFO_EXTENSION);
		//$target_file = $target_dir . basename($_FILES["file"]["name"]);
		$uploadOk = 1;
		$imageFileType = pathinfo($target_file,PATHINFO_EXTENSION);

		if(!isset($_FILES["file"])){

			$uploadOk = 0;
		}

		// Check if $uploadOk is set to 0 by an error
		if ($uploadOk == 0) {
			return "{\"error\":\"no se encontró voucher\"}";
		// if everything is ok, try to upload file
		} else {
			if (move_uploaded_file($_FILES["file"]["tmp_name"], $target_file)) {
				return "{\"reporter\": \"uploaderResponse\", \"response\": \"voucher subido correctamente\", \"status\": \"success\"}";
			} else {
				return "{\"reporter\": \"uploaderResponse\", \"response\": \"no se ha podido subir la imagen\", \"status\": \"error\"}";
			}
		}
	}

	registerUser();
?>