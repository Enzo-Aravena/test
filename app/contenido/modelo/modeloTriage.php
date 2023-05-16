<?php
	class Triage 
	{
		
		private $pacId;
		private $perId;
		private $carpeta;
		private $estado;
		private $conId;
		private $nombreCampos;
		private $valorCampos;
		private $fechaIngreso;
		private $fechaSalida;
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

		function SP_OBTENER_ANTECEDENTES($bd){
			$i=0;
			$data = Array();
			$sql = "CALL SP_OBTENER_ANTECEDENTES({$this->getconId()},{$this->getCarpeta()})";
			$resultado = mysqli_query($bd,$sql);
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
							"data"    => "1",
							"RUT" 				=> ucfirst(mb_strtolower(utf8_encode($fila['RUT_PASAPORTE']))),
							"NOMBRE" 			=> ucfirst(mb_strtolower(utf8_encode($fila['PACIENTE']))),
							"SEXO" 				=> ucfirst(mb_strtolower(utf8_encode($fila['SEXO']))),
							"TIPO_CONSULTA" 	=> ucfirst(mb_strtolower(utf8_encode($fila['TIPO_CONSULTA']))),
							"EDAD" 				=> ucfirst(mb_strtolower(utf8_encode($fila['EDAD']))),
							"HORA_ADMISION" 	=> ucfirst(mb_strtolower(utf8_encode($fila['HORA_ADMISION']))),
							"MOTIVO_CONSULTA" 	=> ucfirst(mb_strtolower(utf8_encode($fila['MOTIVO_CONSULTA']))),
							"HTA" 				=> ucfirst(mb_strtoupper(utf8_encode($fila['TIENE_HTA']))),
							"DM2" 				=> ucfirst(mb_strtoupper(utf8_encode($fila['TIENE_DM2']))),
							"EPOC" 				=> ucfirst(mb_strtoupper(utf8_encode($fila['TIENE_EPOC']))),
							"ASMA" 				=> ucfirst(mb_strtoupper(utf8_encode($fila['TIENE_ASMA']))),
							"IRC" 				=> ucfirst(mb_strtoupper(utf8_encode($fila['TIENE_IRC']))),
							"DHC" 				=> ucfirst(mb_strtoupper(utf8_encode($fila['TIENE_DHC']))),
							"OTROS_EC"			=> ucfirst(mb_strtolower(utf8_encode($fila['TIENE_OTRAS_EC']))),
							"OTROS_EC_DESC"		=> ucfirst(mb_strtolower(utf8_encode($fila['TIENE_OTRAS_TEXTO']))),
							"FECHA_NACIMIENTO"	=> ucfirst(mb_strtolower(utf8_encode($fila['FECHA_NACIMIENTO']))),
							"DIRECCION"			=> ucfirst(mb_strtolower(utf8_encode($fila['DIRECCION']))),
							"TELEFONO"			=> ucfirst(mb_strtolower(utf8_encode($fila['TELEFONO']))),
							"CORREO"			=> ucfirst(mb_strtolower(utf8_encode($fila['CORREO_ELECTRONICO'])))
						);//end array
						$i++;
					} // END WHILE
				}//END ELSE INTERNO
			} //END ELSE EXTERNO DE VALIDACION (SIMULA UN EXCEPCION)
			return $data;
		}

		function SP_INSERTAR_ATENCION($bd){
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

	} // END CLASS
?>