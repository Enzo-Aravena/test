<?php 

	class PdfMinsal
	{

		private $pacId;		

		// GETTERS AND SETTERS	
		public function getPacId(){
			return $this->pacId;
		}

		public function setPacId($pacId){
			return $this->pacId = $pacId;
		}



		function SP_OBTENER_DATOS_MINSAL($bd){
			$i = 0;
			$data = Array();
			$sql = "SELECT 
				        DISTINCT
				        IFNULL(PAC.RUT,IFNULL(PAC.PASAPORTE,'SIN DOCUMENTO'))                                                AS RUT_PASAPORTE,
				        CONCAT(PAC.NOMBRE,CONCAT(' ',CONCAT(PAC.APELLIDO_PATERNO,CONCAT(' ',PAC.APELLIDO_MATERNO))))         AS PACIENTE,
				        (SELECT LDA.DESCRIPCION FROM LIS_LISTAS_DATOS LDA WHERE LDA.LIS_ID = 6 AND LDA.CODIGO = PAC.ID_SEXO) AS SEXO,
				        DATE_FORMAT(PAC.FECHA_NACIMIENTO,'%d/%m/%Y')						                                 AS FECHA_NACIMIENTO,
				        CALC_EDAD(DATE(PAC.FECHA_NACIMIENTO),SYSDATE())                                                      AS EDAD,
				        PAC.DIRECCION                                                                                        AS DIRECCION,
				        (SELECT LDA.DESCRIPCION         FROM LIS_LISTAS_DATOS LDA WHERE LDA.LIS_ID = 2 AND LDA.CODIGO = PAC.ID_COMUNA)      AS COMUNA,
				        PAC.TELEFONO,
				        PAC.CORREO_ELECTRONICO                                                                               AS CORREO
				        
				    FROM 
				        PAC_PACIENTES PAC WHERE PAC.PAC_ID= {$this->getPacId()}";
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
						"RUT_PASAPORTE" =>utf8_encode($fila[0]),
						"PACIENTE" =>utf8_encode($fila[1]),
						"SEXO" =>utf8_encode($fila[2]),
						"FECHA_NACIMIENTO" =>utf8_encode($fila[3]),
						"EDAD" =>utf8_encode($fila[4]),
						"DIRECCION" =>utf8_encode($fila[5]),
						"COMUNA" =>utf8_encode($fila[6]),
						"TELEFONO" =>utf8_encode($fila[7]),
						"CORREO" =>utf8_encode($fila[8])
					); // End Array
					$i++;
				}// end while
			}// end else
			return $data;
		}

	} // END CLASS 

?>