<?php

	class Atencion{
		private $pacId;
		private $perId;
		private $carpeta;
		private $rutPac;
		private $dniPac;
		private $conId;
		private $nombreCampos;
		private $valorCampos;
		private $fechaIngreso;
		private $fechaSalida;
		private $estado;
		private $fechaHoy;

		// GETTERS AND SETTERS	
		public function getFechaHoy(){
			return $this->fechaHoy;
		}

		public function setFechaHoy($fechaHoy){
			return $this->fechaHoy = $fechaHoy;
		}
			
		public function getPacId(){
			return $this->pacId;
		}

		public function setPacId($pacId){
			return $this->pacId = $pacId;
		}

		public function getPerId(){
			return $this->perId;
		}

		public function setPerId($perId){
			return $this->perId = $perId;
		}

		public function getCarpeta(){
			return $this->carpeta;
		}

		public function setCarpeta($carpeta){
			return $this->carpeta = $carpeta;
		}
		
		public function getconId(){
			return $this->conId;
		}

		public function setconId($conId){
			return $this->conId = $conId;
		}

		public function getNombreCampos(){
			return $this->nombreCampos;
		}

		public function setNombreCampos($nombreCampos){
			return $this->nombreCampos = $nombreCampos;
		}

		public function getValorCampos(){
			return $this->valorCampos;
		}

		public function setValorCampos($valorCampos){
			return $this->valorCampos = $valorCampos;
		}

		public function getFechaIngreso(){
			return $this->fechaIngreso;
		}

		public function setFechaIngreso($fechaIngreso){
			return $this->fechaIngreso = $fechaIngreso;
		}

		public function getFechaSalida(){
			return $this->fechaSalida;
		}

		public function setFechaSalida($fechaSalida){
			return $this->fechaSalida = $fechaSalida;
		}

		public function getEstado(){
			return $this->estado;
		}

		public function setEstado($estado){
			return $this->estado = $estado;
		}

		public function getRutPac(){
			return $this->rutPac;
		}
		public function setRutPac($rutPac){
			return $this->rutPac = $rutPac;
		}

		public function getDniPac(){
			return $this->dniPac;
		}

		public function setDniPac($dniPac){
			return $this->dniPac = $dniPac;
		}

		function OBTENER_FECHA_BASE($bd){
			$i=0;
			$data = Array();	 		
			$sql = "SELECT SYSDATE()";
	 		$resultado= mysqli_query($bd,$sql);
	 		$count = mysqli_num_rows($resultado);
	 		if($count == "0"){
				$data[$i] = Array(
					"data" 	=> "false"
				);
			}else{
				while ($fila = mysqli_fetch_row($resultado)){
					$data[$i] = Array(
						"data" 	 => strtolower($fila[0])
					);//end array
					$i++;
				}
			}
			return $data;
		}

		function SP_OBTENER_PRONOSTICO_LEGAL($bd){
			$i = 0;
			$data = Array();
			$sql = "CALL SP_OBTENER_LISTA(10)";
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
						"CODIGO" => ucfirst(mb_strtolower(utf8_encode($fila[0]))),
						"NOMBRE" => ucfirst(mb_strtolower(utf8_encode($fila[1])))
					); // End Array
					$i++;
				}// end while
			}// end else
			return $data;
		}

		function SP_OBTENER_TIPO_ALTA_EGRESO($bd){
			$i = 0;
			$data = Array();
			$sql = "CALL SP_OBTENER_LISTA(11)";
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
						"CODIGO" =>utf8_encode($fila[0]),
						"NOMBRE" =>utf8_encode($fila[1])
					); // End Array
					$i++;
				}// end while
			}// end else
			return $data;
		}

		function SP_OBTENER_CENTRO_DERIVACION($bd){
			$i = 0;
			$data = Array();
			$sql = "CALL SP_OBTENER_LISTA(12)";
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
						"CODIGO" =>utf8_encode($fila[0]),
						"NOMBRE" =>utf8_encode($fila[1])
					); // End Array
					$i++;
				}// end while
			}// end else
			return $data;
		}

		function SP_OBTENER_GRUPO_DIAGNOSTICO($bd){
			$i = 0;
			$data = Array();
			$sql = "CALL SP_OBTENER_LISTA(13)";
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
						"CODIGO" =>utf8_encode($fila[0]),
						"NOMBRE" =>utf8_encode($fila[1])
					); // End Array
					$i++;
				}// end while
			}// end else
			return $data;
		}


		function SP_OBTENER_ANTECEDENTES($bd){
			$i=0;
			$data = Array();
			$sql = "CALL SP_OBTENER_ANTECEDENTES({$this->getconId()},{$this->getCarpeta()})";
			$resultado = mysqli_query($bd,$sql);
			$count = mysqli_num_rows($resultado);
			if ($resultado === false) {
				$data[0] = Array(
					"data" 	=> "0"
				);
			}else{
				$count=mysqli_num_rows($resultado);
				if($count == "0"){
					$data[$i] = Array(
						"data" 	=> "0"
					);
				}else{
					while ($fila = mysqli_fetch_assoc($resultado)){
						$data[$i] = Array(
							"data"    			=> "1",
							"RUT" 				=> ucfirst(mb_strtolower(utf8_encode($fila['RUT_PASAPORTE']))),
							"NOMBRE" 			=> ucfirst(mb_strtolower(utf8_encode($fila['PACIENTE']))),
							"SEXO" 				=> ucfirst(mb_strtolower(utf8_encode($fila['SEXO']))),
							"TIPO_CONSULTA" 	=> ucfirst(mb_strtolower(utf8_encode($fila['TIPO_CONSULTA']))),
							"EDAD" 				=> ucfirst(mb_strtolower(utf8_encode($fila['EDAD']))),
							"HORA_ADMISION" 	=> ucfirst(mb_strtolower(utf8_encode($fila['HORA_ADMISION']))),
							"MOTIVO_CONSULTA" 	=> ucfirst(mb_strtolower(utf8_encode($fila['MOTIVO_CONSULTA']))),
							"HORA_TRIAGE" 		=> ucfirst(mb_strtolower(utf8_encode($fila['HORA_TRIAGE']))),
							"FC"				=> ucfirst(mb_strtolower(utf8_encode($fila['FC']))),
							"FR"				=> ucfirst(mb_strtolower(utf8_encode($fila['FR']))),
							"TEMPAX" 			=> ucfirst(mb_strtolower(utf8_encode($fila['T_AUX']))),
							"SATO" 				=> ucfirst(mb_strtolower(utf8_encode($fila['SAT_02']))),
							"PS" 				=> ucfirst(mb_strtolower(utf8_encode($fila['PA_SISTOLICA']))),
							"PD" 				=> ucfirst(mb_strtolower(utf8_encode($fila['PA_DIASTOLICA']))),
							"HGT" 				=> ucfirst(mb_strtolower(utf8_encode($fila['HGT']))),
							"EEVA" 				=> ucfirst(mb_strtolower(utf8_encode($fila['E_EVA']))),
							"EGLASGOW" 			=> ucfirst(mb_strtolower(utf8_encode($fila['E_GLASGOW']))),
							"HTA" 				=> utf8_encode($fila['HTA']),
							"DM2" 				=> ucfirst(mb_strtoupper(utf8_encode($fila['DM2']))),
							"EPOC" 				=> ucfirst(mb_strtoupper(utf8_encode($fila['EPOC']))),
							"ASMA" 				=> ucfirst(mb_strtoupper(utf8_encode($fila['ASMA']))),
							"IRC" 				=> ucfirst(mb_strtoupper(utf8_encode($fila['IRC']))),
							"DHC" 				=> ucfirst(mb_strtoupper(utf8_encode($fila['DHC']))),
							"OTROS_EC"			=> ucfirst(mb_strtoupper(utf8_encode($fila['OTRA_EC']))),
							"OTROS_EC_DESC"		=> ucfirst(mb_strtolower(utf8_encode($fila['OTRA_TEXTO']))),
							"ALERGIAS" 			=> ucfirst(mb_strtolower(utf8_encode($fila['ALERGIAS']))),
							"CATEGORIZACION" 	=> ucfirst(mb_strtolower(utf8_encode($fila['CATEGORIZACION']))),
							"PESO" 				=> ucfirst(mb_strtolower(utf8_encode($fila['PESO']))),
							"FECHA_NACIMIENTO"	=> ucfirst(mb_strtolower(utf8_encode($fila['FECHA_NACIMIENTO']))),
							"DIRECCION"			=> ucfirst(mb_strtolower(utf8_encode($fila['DIRECCION']))),
							"TELEFONO"			=> ucfirst(mb_strtolower(utf8_encode($fila['TELEFONO']))),
							"CORREO"			=> ucfirst(mb_strtolower(utf8_encode($fila['CORREO_ELECTRONICO'])))
						);//end array
						$i++;
					}
				}// END ELSE INTERNO
			}// END ELSE EXTERNO
			return $data;
		}


		function SP_OBTENER_PAC_HISTORIAL($bd){
			$i=0;
			$data = Array();
			$sql = "CALL SP_OBTENER_PAC_HISTORIAL('{$this->getRutPac()}','{$this->getDniPac()}')";
			$resultado= mysqli_query($bd,$sql);
	 		$count = mysqli_num_rows($resultado);
	 		if($count == "0"){
				$data[$i] = Array(
					"data" 	=> "0"
				);
			}else{
				while ($fila = mysqli_fetch_assoc($resultado)){
					$data[$i] = Array(
						"data"    				=> "1",
						"FECHA_ATENCION" 		=> ucfirst(mb_strtolower(utf8_encode($fila['FECHA_ATENCION']))),
						"HORA" 					=> ucfirst(mb_strtolower(utf8_encode($fila['HORA']))),
						"CENTRO_ATENCION" 		=> ucfirst(mb_strtolower(utf8_encode($fila['CENTRO_ATENCION']))),
						"DIAGNOSTICO_EGRESO"	=> ucfirst(mb_strtolower(utf8_encode($fila['DIAGNOSTICO_EGRESO']))),
						"INDICACIONES_RECETA"	=> ucfirst(mb_strtolower(utf8_encode($fila['INDICACIONES_RECETA'])))
					);//end array
					$i++;
				}
			}

			return $data;
		}


		function SP_INSERTAR_ATENCION_PACIENTE($bd){

			$i=0;
			$data = Array();		
			$sql = "CALL SP_INSERT_ATENCION({$this->getconId()},{$this->getPerId()},{$this->getCarpeta()},'{$this->getFechaIngreso()}',SYSDATE(),'{$this->getNombreCampos()}','{$this->getValorCampos()}')";
	 		$resultado= mysqli_query($bd,$sql);

			if ($resultado == false) {
				$data[$i] = Array(
					"data" 	=> "false"
				);
			 } else {
				$count = mysqli_num_rows($resultado);
				if($count == "0"){
					$data[$i] = Array(
						"data" 	=> "false"
					);
				}else{
					while ($fila = mysqli_fetch_row($resultado)){
						$data[$i] = Array(
							"data" 	 => strtolower($fila[0])
						);//end array
						$i++;
					}
				}

				
			 }
			 return $data;
		}


		function SP_INSERTAR_ALTA_EGRESO($bd){
			$i=0;
			$data = Array();
			$sql = "CALL SP_INSERT_ATENCION({$this->getconId()},{$this->getPerId()},{$this->getCarpeta()},'{$this->getFechaIngreso()}',SYSDATE(),'{$this->getNombreCampos()}','{$this->getValorCampos()}')";
	 		$resultado= mysqli_query($bd,$sql);
	 		$count = mysqli_num_rows($resultado);

	 		if($count == "0"){
				$data[$i] = Array(
					"data" 	=> "false"
				);
			}else{
				while ($fila = mysqli_fetch_row($resultado)){
					$data[$i] = Array(
						"data" 	 => strtolower($fila[0])
					);//end array
					$i++;
				}
			}

			return $data;
			//return $sql;*/
		}

		function SP_INSERTAR_NSP_PACIENTE($bd){
			$i=0;
			$data = Array();
			$sql = "CALL SP_INSERT_ATENCION({$this->getconId()},{$this->getPerId()},{$this->getCarpeta()},'{$this->getFechaIngreso()}',SYSDATE(),'{$this->getNombreCampos()}','{$this->getValorCampos()}')";
	 		$resultado= mysqli_query($bd,$sql);
	 		$count = mysqli_num_rows($resultado);

	 		if($count == "0"){
				$data[$i] = Array(
					"data" 	=> "false"
				);
			}else{
				while ($fila = mysqli_fetch_row($resultado)){
					$data[$i] = Array(
						"data" 	 => strtolower($fila[0])
					);//end array
					$i++;
				}
			}

			return $data;
		}

		function OBTENER_LISTA_MOTIVO_NSP($bd){
			$i=0;
			$data = Array();			
			$sql = "CALL SP_OBTENER_LISTA(14)";
			$resultado = mysqli_query($bd,$sql);
			$count=mysqli_num_rows($resultado);
			if($count == "0"){
				$data[$i] = Array(
					"data" 	=> "0"
				);
			}else{
				while ($fila = mysqli_fetch_row($resultado)){
					$data[$i] = Array(
						"data"    	=> "1",
						"CODIGO" => ucfirst(mb_strtolower(utf8_encode($fila[0]))),
						"NOMBRE" => ucfirst(mb_strtolower(utf8_encode($fila[1])))
					);//end array
					$i++;
				}
			}
			return $data;
		}

		function OBTENER_LISTA_DIAGNOSTICO_GES($bd){
			$i=0;
			$data = Array();
			$sql = "CALL SP_OBTENER_LISTA(15)";
			$resultado = mysqli_query($bd,$sql);
			$count=mysqli_num_rows($resultado);
			if($count == "0"){
				$data[$i] = Array(
					"data" 	=> "0"
				);
			}else{
				while ($fila = mysqli_fetch_row($resultado)){
					$data[$i] = Array(
						"data"    	=> "1",
						"CODIGO" => ucfirst(mb_strtolower(utf8_encode($fila[0]))),
						"NOMBRE" => ucfirst(mb_strtolower(utf8_encode($fila[1])))
					);//end array
					$i++;
				}
			}
			return $data;
		}

		function obteneryActualizarEstadoPaciente($bd){
			$i=0;
			$data = Array();
			$sql = "CALL SP_UPDATE_ESTADO_CON({$this->getEstado()},{$this->getConId()},{$this->getCarpeta()},'{$this->getFechaHoy()}','{$this->getPerId()}')";
			$resultado = mysqli_query($bd,$sql);
			$count=mysqli_num_rows($resultado);
			if($count == "0"){
				$data[$i] = Array(
					"data" 	=> "0"
				);
			}else{
				while ($fila = mysqli_fetch_row($resultado)){
					$data[$i] = Array(
						"data"  			 => "1",
						"estado"  			 => ucfirst(mb_strtolower(utf8_encode($fila[0]))),
						"NOMBRE_PROFESIONAL" =>	ucfirst(mb_strtolower(utf8_encode($fila[1]))),
						"FECHA_HORA_BLOQUEO" =>	ucfirst(mb_strtolower(utf8_encode($fila[2])))
					);//end array
					$i++;
				}
			}
			return $data;
		}

	}
?>