<?php 

	class ObservacionYTto
	{

		private $pacId;
		private $perId;
		private $carpeta;
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

		function OBTENER_LISTA_PROCEDIMIENTO($bd){
			$i=0;
			$data = Array();			
			$sql = "CALL SP_OBTENER_LISTA(16);";
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

					$hora = explode(" ",$fila[0]);

					$data[$i] = Array(
						"data" 	    					 => "1",
						"fecha" 	 	=> strtolower($fila[0]),
						"horaSistema"	=>strtolower($hora[1])
					);//end array
					$i++;
				}
			}
			return $data;
		}


		function OBTENER_VALIDACION_HORAS_SISTEMA($bd){
			$i=0;
			$data = Array();
			$sql = "select db_sistema_urg_sapu.OBTENER_DIF_MINUTOS_ULT_HORACONTROL({$this->getconId()})";
			//$sql = "SELECT db_sistema_urg_sapu_prueba.DIFERENCIA_MINUTOS_ENTRE_FECHASHORA('{$this->getFechaIngreso()}');";
	 		$resultado= mysqli_query($bd,$sql);
	 		$count = mysqli_num_rows($resultado);
	 		if($count == "0"){
				$data[$i] = Array(
					"data" 	=> "false"
				);
			}else{
				while ($fila = mysqli_fetch_row($resultado)){

					$hora = explode(" ",$fila[0]);

					$data[$i] = Array(
						"data" 	    					 => "1",
						"horaSistema" 	 	=> strtolower($fila[0])
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
				$count=mysqli_num_rows($resultado);
				if($count == "0"){
					$data[$i] = Array(
						"data" 	=> "0"
					);
				}else{
					while ($fila = mysqli_fetch_assoc($resultado)){
						$data[$i] = Array(
							"data" 	    					 => "1",	
							"RUT"			 				 => ucfirst(mb_strtolower(utf8_encode($fila['RUT_PASAPORTE']))),
							"PACIENTE"  					 => ucfirst(mb_strtolower(utf8_encode($fila['PACIENTE']))),
							"SEXO" 							 => ucfirst(mb_strtolower(utf8_encode($fila['SEXO']))),
							"TIPO_CONSULTA"  				 => ucfirst(mb_strtolower(utf8_encode($fila['TIPO_CONSULTA']))),
							"EDAD"  						 => ucfirst(mb_strtolower(utf8_encode($fila['EDAD']))),
							"HORA_ADMISION"  				 => ucfirst(mb_strtolower(utf8_encode($fila['HORA_ADMISION']))),
							"MOTIVO_CONSULTA" 				 => ucfirst(mb_strtolower(utf8_encode($fila['MOTIVO_CONSULTA']))),
							"HORA_TRIAGE"  					 => ucfirst(mb_strtolower(utf8_encode($fila['HORA_TRIAGE']))),
							"FC" 							 => ucfirst(mb_strtolower(utf8_encode($fila['FC']))),
							"FR" 							 => ucfirst(mb_strtolower(utf8_encode($fila['FR']))),
							"T_AUX" 						 => ucfirst(mb_strtolower(utf8_encode($fila['T_AUX']))),
							"SAT_02" 					 	 => ucfirst(mb_strtolower(utf8_encode($fila['SAT_02']))),
							"PA_SISTOLICA"  				 => ucfirst(mb_strtolower(utf8_encode($fila['PA_SISTOLICA']))),
							"PA_DIASTOLICA"  				 => ucfirst(mb_strtolower(utf8_encode($fila['PA_DIASTOLICA']))),
							"HGT"							 => ucfirst(mb_strtolower(utf8_encode($fila['HGT']))),
							"E_EVA"							 => ucfirst(mb_strtolower(utf8_encode($fila['E_EVA']))),
							"E_GLASGOW" 					 => ucfirst(mb_strtolower(utf8_encode($fila['E_GLASGOW']))),
							"HTA"							 => ucfirst(mb_strtolower(utf8_encode($fila['HTA']))),
							"DM2"							 => ucfirst(mb_strtolower(utf8_encode($fila['DM2']))),
							"EPOC"							 => ucfirst(mb_strtolower(utf8_encode($fila['EPOC']))),
							"ASMA"							 => ucfirst(mb_strtolower(utf8_encode($fila['ASMA']))),
							"IRC"							 => ucfirst(mb_strtolower(utf8_encode($fila['IRC']))),
							"DHC"							 => ucfirst(mb_strtolower(utf8_encode($fila['DHC']))),
							"OTRA_EC"						 => ucfirst(mb_strtolower(utf8_encode($fila['OTRA_EC']))),
							"OTRA_TEXTO" 					 => ucfirst(mb_strtolower(utf8_encode($fila['OTRA_TEXTO']))),
							"ALERGIAS" 						 => ucfirst(mb_strtolower(utf8_encode($fila['ALERGIAS']))),
							"CATEGORIZACION" 				 => ucfirst(mb_strtolower(utf8_encode($fila['CATEGORIZACION']))),
							"HORA_ATENCION_MEDICA"			 => ucfirst(mb_strtolower(utf8_encode($fila['HORA_ATENCION_MEDICA']))),
							"SOSPECHA_DIAGNOSTICO"			 => ucfirst(mb_strtolower(utf8_encode($fila['SOSPECHA_DIAGNOSTICO']))),
							"TRATAMIENTO_1_IND_1" 			 => ucfirst(mb_strtolower(utf8_encode($fila['TRATAMIENTO_1_IND_1']))),
							"TRATAMIENTO_1_IND_2" 			 => ucfirst(mb_strtolower(utf8_encode($fila['TRATAMIENTO_1_IND_2']))),
							"TRATAMIENTO_1_IND_3" 			 => ucfirst(mb_strtolower(utf8_encode($fila['TRATAMIENTO_1_IND_3']))),
							"TRATAMIENTO_1_IND_1_REALIZADO"  =>ucfirst(mb_strtolower(utf8_encode($fila['TRATAMIENTO_1_IND_1_REALIZADO']))),
							"TRATAMIENTO_1_IND_2_REALIZADO"  =>ucfirst(mb_strtolower(utf8_encode($fila['TRATAMIENTO_1_IND_2_REALIZADO']))),
							"TRATAMIENTO_1_IND_3_REALIZADO"  =>ucfirst(mb_strtolower(utf8_encode($fila['TRATAMIENTO_1_IND_3_REALIZADO']))),
							"TRATAMIENTO_1_IND_1_PROCEDIMIENTO" =>ucfirst(mb_strtolower(utf8_encode($fila['TRATAMIENTO_1_IND_1_PROCEDIMIENTO']))),
							"TRATAMIENTO_1_IND_2_PROCEDIMIENTO" =>ucfirst(mb_strtolower(utf8_encode($fila['TRATAMIENTO_1_IND_2_PROCEDIMIENTO']))),
							"TRATAMIENTO_1_IND_3_PROCEDIMIENTO" =>ucfirst(mb_strtolower(utf8_encode($fila['TRATAMIENTO_1_IND_3_PROCEDIMIENTO']))),							
							"TRATAMIENTO_2_IND_1"			 =>ucfirst(mb_strtolower(utf8_encode($fila['TRATAMIENTO_2_IND_1']))),
							"TRATAMIENTO_2_IND_2"			 =>ucfirst(mb_strtolower(utf8_encode($fila['TRATAMIENTO_2_IND_2']))),
							"TRATAMIENTO_2_IND_3"			 =>ucfirst(mb_strtolower(utf8_encode($fila['TRATAMIENTO_2_IND_3']))),
							"TRATAMIENTO_2_IND_1_PROCEDIMIENTO" =>ucfirst(mb_strtolower(utf8_encode($fila['TRATAMIENTO_2_IND_1_PROCEDIMIENTO']))),
							"TRATAMIENTO_2_IND_2_PROCEDIMIENTO" =>ucfirst(mb_strtolower(utf8_encode($fila['TRATAMIENTO_2_IND_2_PROCEDIMIENTO']))),
							"TRATAMIENTO_2_IND_3_PROCEDIMIENTO" =>ucfirst(mb_strtolower(utf8_encode($fila['TRATAMIENTO_2_IND_3_PROCEDIMIENTO']))),
							"TRATAMIENTO_2_IND_1_REALIZADO"  =>ucfirst(mb_strtolower(utf8_encode($fila['TRATAMIENTO_2_IND_1_REALIZADO']))),
							"TRATAMIENTO_2_IND_2_REALIZADO"  =>ucfirst(mb_strtolower(utf8_encode($fila['TRATAMIENTO_2_IND_2_REALIZADO']))),
							"TRATAMIENTO_2_IND_3_REALIZADO"  =>ucfirst(mb_strtolower(utf8_encode($fila['TRATAMIENTO_2_IND_3_REALIZADO']))),
							"TRATAMIENTO_3_IND_1_PROCEDIMIENTO" =>ucfirst(mb_strtolower(utf8_encode($fila['TRATAMIENTO_3_IND_1_PROCEDIMIENTO']))),
							"TRATAMIENTO_3_IND_2_PROCEDIMIENTO" =>ucfirst(mb_strtolower(utf8_encode($fila['TRATAMIENTO_3_IND_2_PROCEDIMIENTO']))),
							"TRATAMIENTO_3_IND_3_PROCEDIMIENTO" =>ucfirst(mb_strtolower(utf8_encode($fila['TRATAMIENTO_3_IND_3_PROCEDIMIENTO']))),
							"TRATAMIENTO_3_IND_1"			 =>ucfirst(mb_strtolower(utf8_encode($fila['TRATAMIENTO_3_IND_1']))),
							"TRATAMIENTO_3_IND_2"			 =>ucfirst(mb_strtolower(utf8_encode($fila['TRATAMIENTO_3_IND_2']))),
							"TRATAMIENTO_3_IND_3"			 =>ucfirst(mb_strtolower(utf8_encode($fila['TRATAMIENTO_3_IND_3']))),
							"TRATAMIENTO_3_IND_1_REALIZADO"  =>ucfirst(mb_strtolower(utf8_encode($fila['TRATAMIENTO_3_IND_1_REALIZADO']))),
							"TRATAMIENTO_3_IND_2_REALIZADO"  =>ucfirst(mb_strtolower(utf8_encode($fila['TRATAMIENTO_3_IND_2_REALIZADO']))),
							"TRATAMIENTO_3_IND_3_REALIZADO"  =>ucfirst(mb_strtolower(utf8_encode($fila['TRATAMIENTO_3_IND_3_REALIZADO']))),
							"HORA_CONTRAL_1"				 =>ucfirst(mb_strtolower(utf8_encode($fila['HORA_CONTRAL_1']))),
							"HORA_CONTRAL_2"				 =>ucfirst(mb_strtolower(utf8_encode($fila['HORA_CONTRAL_2']))),
							"HORA_CONTRAL_3"				 =>ucfirst(mb_strtolower(utf8_encode($fila['HORA_CONTRAL_3']))),
							"HORA_CONTRAL_4"				 =>ucfirst(mb_strtolower(utf8_encode($fila['HORA_CONTRAL_4']))),
							"HORA_CONTRAL_5"				 =>ucfirst(mb_strtolower(utf8_encode($fila['HORA_CONTRAL_5']))),
							"HORA_CONTRAL_6"				 =>ucfirst(mb_strtolower(utf8_encode($fila['HORA_CONTRAL_6']))),
							"FC_1"							 =>ucfirst(mb_strtolower(utf8_encode($fila['FC_1']))),
							"FC_2"							 =>ucfirst(mb_strtolower(utf8_encode($fila['FC_2']))),
							"FC_3"							 =>ucfirst(mb_strtolower(utf8_encode($fila['FC_3']))),
							"FC_4"							 =>ucfirst(mb_strtolower(utf8_encode($fila['FC_4']))),
							"FC_5"							 =>ucfirst(mb_strtolower(utf8_encode($fila['FC_5']))),
							"FC_6"							 =>ucfirst(mb_strtolower(utf8_encode($fila['FC_6']))),
							"FR_1"							 =>ucfirst(mb_strtolower(utf8_encode($fila['FR_1']))),
							"FR_2"							 =>ucfirst(mb_strtolower(utf8_encode($fila['FR_2']))),
							"FR_3"							 =>ucfirst(mb_strtolower(utf8_encode($fila['FR_3']))),
							"FR_4"							 =>ucfirst(mb_strtolower(utf8_encode($fila['FR_4']))),
							"FR_5"							 =>ucfirst(mb_strtolower(utf8_encode($fila['FR_5']))),
							"FR_6"							 =>ucfirst(mb_strtolower(utf8_encode($fila['FR_6']))),
							"TEMP_AUX_1"				 	 =>ucfirst(mb_strtolower(utf8_encode($fila['TEMP_AUX_1']))),
							"TEMP_AUX_2"				 	 =>ucfirst(mb_strtolower(utf8_encode($fila['TEMP_AUX_2']))),
							"TEMP_AUX_3"				 	 =>ucfirst(mb_strtolower(utf8_encode($fila['TEMP_AUX_3']))),
							"TEMP_AUX_4"				 	 =>ucfirst(mb_strtolower(utf8_encode($fila['TEMP_AUX_4']))),
							"TEMP_AUX_5"				 	 =>ucfirst(mb_strtolower(utf8_encode($fila['TEMP_AUX_5']))),
							"TEMP_AUX_6"				 	 =>ucfirst(mb_strtolower(utf8_encode($fila['TEMP_AUX_6']))),
							"SAT_02_1" 						 =>ucfirst(mb_strtolower(utf8_encode($fila['SAT_02_1']))),
							"SAT_02_2" 						 =>ucfirst(mb_strtolower(utf8_encode($fila['SAT_02_2']))),
							"SAT_02_3" 						 =>ucfirst(mb_strtolower(utf8_encode($fila['SAT_02_3']))),
							"SAT_02_4" 						 =>ucfirst(mb_strtolower(utf8_encode($fila['SAT_02_4']))),
							"SAT_02_5" 						 =>ucfirst(mb_strtolower(utf8_encode($fila['SAT_02_5']))),
							"SAT_02_6" 						 =>ucfirst(mb_strtolower(utf8_encode($fila['SAT_02_6']))),
							"HGT_1"							 =>ucfirst(mb_strtolower(utf8_encode($fila['HGT_1']))),
							"HGT_2"							 =>ucfirst(mb_strtolower(utf8_encode($fila['HGT_2']))),
							"HGT_3"							 =>ucfirst(mb_strtolower(utf8_encode($fila['HGT_3']))),
							"HGT_4"							 =>ucfirst(mb_strtolower(utf8_encode($fila['HGT_4']))),
							"HGT_5"							 =>ucfirst(mb_strtolower(utf8_encode($fila['HGT_5']))),
							"HGT_6"							 =>ucfirst(mb_strtolower(utf8_encode($fila['HGT_6']))),
							"PA_SISTOLICA_1"				 =>ucfirst(mb_strtolower(utf8_encode($fila['PA_SISTOLICA_1']))),
							"PA_SISTOLICA_2"				 =>ucfirst(mb_strtolower(utf8_encode($fila['PA_SISTOLICA_2']))),
							"PA_SISTOLICA_3"				 =>ucfirst(mb_strtolower(utf8_encode($fila['PA_SISTOLICA_3']))),
							"PA_SISTOLICA_4"				 =>ucfirst(mb_strtolower(utf8_encode($fila['PA_SISTOLICA_4']))),
							"PA_SISTOLICA_5"				 =>ucfirst(mb_strtolower(utf8_encode($fila['PA_SISTOLICA_5']))),
							"PA_SISTOLICA_6"				 =>ucfirst(mb_strtolower(utf8_encode($fila['PA_SISTOLICA_6']))),
							"PA_DIASTOLICA_1" 				 =>ucfirst(mb_strtolower(utf8_encode($fila['PA_DIASTOLICA_1']))),
							"PA_DIASTOLICA_2" 				 =>ucfirst(mb_strtolower(utf8_encode($fila['PA_DIASTOLICA_2']))),
							"PA_DIASTOLICA_3" 				 =>ucfirst(mb_strtolower(utf8_encode($fila['PA_DIASTOLICA_3']))),
							"PA_DIASTOLICA_4" 				 =>ucfirst(mb_strtolower(utf8_encode($fila['PA_DIASTOLICA_4']))),
							"PA_DIASTOLICA_5" 				 =>ucfirst(mb_strtolower(utf8_encode($fila['PA_DIASTOLICA_5']))),
							"PA_DIASTOLICA_6" 				 =>ucfirst(mb_strtolower(utf8_encode($fila['PA_DIASTOLICA_6']))),
							"E_GLASGOW_1" 					 =>ucfirst(mb_strtolower(utf8_encode($fila['E_GLASGOW_1']))),
							"E_GLASGOW_2" 					 =>ucfirst(mb_strtolower(utf8_encode($fila['E_GLASGOW_2']))),
							"E_GLASGOW_3" 					 =>ucfirst(mb_strtolower(utf8_encode($fila['E_GLASGOW_3']))),
							"E_GLASGOW_4" 					 =>ucfirst(mb_strtolower(utf8_encode($fila['E_GLASGOW_4']))),
							"E_GLASGOW_5" 					 =>ucfirst(mb_strtolower(utf8_encode($fila['E_GLASGOW_5']))),
							"E_GLASGOW_6" 					 =>ucfirst(mb_strtolower(utf8_encode($fila['E_GLASGOW_6']))),
							"E_EVA_1"						 =>ucfirst(mb_strtolower(utf8_encode($fila['E_EVA_1']))),
							"E_EVA_2"						 =>ucfirst(mb_strtolower(utf8_encode($fila['E_EVA_2']))),
							"E_EVA_3"						 =>ucfirst(mb_strtolower(utf8_encode($fila['E_EVA_3']))),
							"E_EVA_4"						 =>ucfirst(mb_strtolower(utf8_encode($fila['E_EVA_4']))),
							"E_EVA_5"						 =>ucfirst(mb_strtolower(utf8_encode($fila['E_EVA_5']))),
							"E_EVA_6"						 =>ucfirst(mb_strtolower(utf8_encode($fila['E_EVA_6']))),
							"OBSERVACIONES" 				 =>ucfirst(mb_strtolower(utf8_encode($fila['OBSERVACIONES']))),
							"PESO" 							 =>ucfirst(mb_strtolower(utf8_encode($fila['PESO']))),
							"FECHA_NACIMIENTO"				 =>ucfirst(mb_strtolower(utf8_encode($fila['FECHA_NACIMIENTO']))),
							"DIRECCION" 				 	 =>ucfirst(mb_strtolower(utf8_encode($fila['DIRECCION']))),
							"TELEFONO" 						 =>ucfirst(mb_strtolower(utf8_encode($fila['TELEFONO']))),
							"ANAMNESIS"						 =>ucfirst(mb_strtolower(utf8_encode($fila['ANAMNESIS']))),
							"CABEZA"						 =>ucfirst(mb_strtoupper(utf8_encode($fila['CABEZA']))),
							"CABEZA_TEXTO"					 =>ucfirst(mb_strtolower(utf8_encode($fila['CABEZA_TEXTO']))),
							"TORAX"							 =>ucfirst(mb_strtoupper(utf8_encode($fila['TORAX']))),
							"TORAX_TEXTO"					 =>ucfirst(mb_strtolower(utf8_encode($fila['TORAX_TEXTO']))),
							"ABDOMEN"						 =>ucfirst(mb_strtoupper(utf8_encode($fila['ABDOMEN']))),
							"ABDOMEN_TEXTO"					 =>ucfirst(mb_strtolower(utf8_encode($fila['ABDOMEN_TEXTO']))),
							"PELVIS"						 =>ucfirst(mb_strtoupper(utf8_encode($fila['PELVIS']))),
							"PELVIS_TEXTO"					 =>ucfirst(mb_strtolower(utf8_encode($fila['PELVIS_TEXTO']))),
							"EXT_SUPERIORES"				 =>ucfirst(mb_strtoupper(utf8_encode($fila['EXT_SUPERIORES']))),
							"EXT_SUPERIORES_TEXTO"			 =>ucfirst(mb_strtolower(utf8_encode($fila['EXT_SUPERIORES_TEXTO']))),
							"EXT_INFERIORES"				 =>ucfirst(mb_strtoupper(utf8_encode($fila['EXT_INFERIORES']))),
							"EXT_INFERIORES_TEXTO"			 =>ucfirst(mb_strtolower(utf8_encode($fila['EXT_INFERIORES_TEXTO']))),
							"EX_NEUROLOGICO"				 =>ucfirst(mb_strtoupper(utf8_encode($fila['EX_NEUROLOGICO']))),
							"EX_NEUROLOGICO_TEXTO"			 =>ucfirst(mb_strtolower(utf8_encode($fila['EX_NEUROLOGICO_TEXTO']))),
							"RADIOGRAFIA"		 			 =>ucfirst(mb_strtolower(utf8_encode($fila["RADIOGRAFIA"]))),
							"RADIOGRAFIA_TEXTO"		 		 =>ucfirst(mb_strtolower(utf8_encode($fila["RADIOGRAFIA_TEXTO"]))),
							"EXAMEN_SANGRE"		 			 =>ucfirst(mb_strtolower(utf8_encode($fila["EXAMEN_SANGRE"]))),
							"EXAMEN_SANGRE_TEXTO"		 	 =>ucfirst(mb_strtolower(utf8_encode($fila["EXAMEN_SANGRE_TEXTO"]))),
							"ECG"		 					 =>ucfirst(mb_strtolower(utf8_encode($fila["ECG"]))),
							"CORREO"						 =>ucfirst(mb_strtolower(utf8_encode($fila['CORREO_ELECTRONICO']))),
							"PERMISO_MEDICO"				 =>utf8_encode($fila["PERMISO_MEDICO"])

						);//end array
						$i++;
					}
				}
				return $data;
		}

		function SP_INSERTAR_OBSERVACION_TRATAMIENTO($bd){
			$i=0;
			$data = Array();
			$fechaSalida = $this->getFechaSalida();

			if ($fechaSalida === "NULL") {
				$sql = "CALL SP_INSERT_ATENCION({$this->getconId()},{$this->getPerId()},{$this->getCarpeta()},'{$this->getFechaIngreso()}',NULL,'{$this->getNombreCampos()}','{$this->getValorCampos()}')";
			}else{
				$sql = "CALL SP_INSERT_ATENCION({$this->getconId()},{$this->getPerId()},{$this->getCarpeta()},'{$this->getFechaIngreso()}',SYSDATE(),'{$this->getNombreCampos()}','{$this->getValorCampos()}')";
			}			
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


		// NUEVO SP MODIFICAION EN CASO DE QUE LOS SELECT QUEDEN EDITABLES 
		function SP_INSERTAR_OBSERVACION_TRATAMIENTO_MODIFICADO($bd){
			$i=0;
			$data = Array();
			$fechaSalida = $this->getFechaSalida();

			if ($fechaSalida === "NULL") {
				$sql = "CALL SP_INSERT_ATENCION({$this->getconId()},{$this->getPerId()},{$this->getCarpeta()},'{$this->getFechaIngreso()}',NULL,'{$this->getNombreCampos()}','{$this->getValorCampos()}')";
			}else{
				$sql = "CALL SP_INSERT_ATENCION({$this->getconId()},{$this->getPerId()},{$this->getCarpeta()},'{$this->getFechaIngreso()}',SYSDATE(),'{$this->getNombreCampos()}','{$this->getValorCampos()}')";
			}			
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
						"estado"  			 => utf8_encode($fila[0]),
						"NOMBRE_PROFESIONAL" =>	utf8_encode($fila[1]),
						"FECHA_HORA_BLOQUEO" =>	utf8_encode($fila[2])
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

		function SP_VALIDA_SI_PACIENTE_FUE_ATENDIDO($bd){
			$i=0;
			$data = Array();
			//$sql = "CALL SP_INSERT_ATENCION({$this->getconId()},{$this->getPerId()},{$this->getCarpeta()},'{$this->getFechaIngreso()}',SYSDATE(),'{$this->getNombreCampos()}','{$this->getValorCampos()}')";
			$sql = "SELECT FECHA_SALIDA FROM db_sistema_urg_sapu_prueba.con_atencion where
			con_id = {$this->getconId()} and car_id = {$this->getCarpeta()} and  FECHA_SALIDA is not null";
	 		$resultado= mysqli_query($bd,$sql);
			$count = mysqli_num_rows($resultado);
	 		if($count == "0"){
				$data[$i] = Array(
					"data" 	=> "0"
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

			//return $resultado;

		}


	}//END CLASS 

?>