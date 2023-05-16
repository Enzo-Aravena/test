<?php

	class seleccion{

		function SP_OBTENER_CENTRO($bd){
			$i = 0;
			$data = Array();
			$sql = "CALL SP_OBTENER_LISTA(1)";
			$resultado = mysqli_query($bd,$sql);
			$count = mysqli_num_rows($resultado);
			if ($count == "0") {
				$data[$i] = array(
					"data" =>"0"
				);
			}else{
				while ($fila = mysqli_fetch_row($resultado)) {
					$data[$i]= Array(
						"data" => "1",
						"CODIGO" => utf8_encode($fila[0]),
						"NOMBRE" => utf8_encode($fila[1])
					); // End Array
					$i++;
				}// end while
			}// end else
			return $data;
		}
	}

?>