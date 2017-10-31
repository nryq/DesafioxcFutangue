<?php 


	function exploreGalleryImages(){

		$dir = "../app/resources/galeria";
		$out = [];

		foreach(glob($dir.'/*.*') as $file) {

			$list = explode("/", $file);
			$push = end( $list );
			array_push($out, $push);
		    // $out .= "\"" . $file . "\",";  
		}

		echo "{\"status\": \"completado\", \"fileNames\": " . json_encode($out) . "}";
	}

	exploreGalleryImages();
 ?>