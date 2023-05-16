<?php 

	class AltaEgreso
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
		
		public function getFechaSalida(){
			return $this->fechaSalida;
		}

		public function setFechaSalida($fechaSalida){
			return $this->fechaSalida = $fechaSalida;
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
						"CODIGO" =>utf8_encode($fila[0]),
						"NOMBRE" =>utf8_encode($fila[1])
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
							"data"	    			=> "1",					
							"RUT"	 				=> ucfirst(mb_strtolower(utf8_encode($fila['RUT_PASAPORTE']))),
							"NOMBRE"	 			=> ucfirst(mb_strtolower(utf8_encode($fila['PACIENTE']))),
							"SEXO"	 				=> ucfirst(mb_strtolower(utf8_encode($fila['SEXO']))),
							"TIPO_CONSULTA"	 		=> ucfirst(mb_strtolower(utf8_encode($fila['TIPO_CONSULTA']))),
							"EDAD"	 				=> ucfirst(mb_strtolower(utf8_encode($fila['EDAD']))),
							"HORA_ADMISION"	 		=> ucfirst(mb_strtolower(utf8_encode($fila['HORA_ADMISION']))),
							"MOTIVO_CONSULTA"	 	=> ucfirst(mb_strtolower(utf8_encode($fila['MOTIVO_CONSULTA']))),
							"HORA_TRIAGE"	 		=> ucfirst(mb_strtolower(utf8_encode($fila['HORA_TRIAGE']))),
							"FC"					=> ucfirst(mb_strtolower(utf8_encode($fila['FC']))),
							"FR"					=> ucfirst(mb_strtolower(utf8_encode($fila['FR']))),
							"TEMPAX"	 			=> ucfirst(mb_strtolower(utf8_encode($fila['T_AUX']))),
							"SATO"	 				=> ucfirst(mb_strtolower(utf8_encode($fila['SAT_02']))),
							"PS"	 				=> ucfirst(mb_strtolower(utf8_encode($fila['PA_SISTOLICA']))),
							"PD"	 				=> ucfirst(mb_strtolower(utf8_encode($fila['PA_DIASTOLICA']))),
							"HGT"	 				=> ucfirst(mb_strtolower(utf8_encode($fila['HGT']))),
							"EEVA"	 				=> ucfirst(mb_strtolower(utf8_encode($fila['E_EVA']))),
							"EGLASGOW"	 			=> ucfirst(mb_strtolower(utf8_encode($fila['E_GLASGOW']))),
							"HTA"	 				=> ucfirst(mb_strtolower(utf8_encode($fila['HTA']))),
							"DM2"	 				=> ucfirst(mb_strtolower(utf8_encode($fila['DM2']))),
							"EPOC"	 				=> ucfirst(mb_strtolower(utf8_encode($fila['EPOC']))),
							"ASMA"	 				=> ucfirst(mb_strtolower(utf8_encode($fila['ASMA']))),
							"IRC"	 				=> ucfirst(mb_strtolower(utf8_encode($fila['IRC']))),
							"DHC"	 				=> ucfirst(mb_strtolower(utf8_encode($fila['DHC']))),
							"OTROS_EC"				=> ucfirst(mb_strtolower(utf8_encode($fila['OTRA_EC']))),
							"OTROS_EC_DESC"			=> ucfirst(mb_strtolower(utf8_encode($fila['OTRA_TEXTO']))),
							"ALERGIAS" 				=> ucfirst(mb_strtolower(utf8_encode($fila['ALERGIAS']))),
							"CATEGORIZACION" 		=> ucfirst(mb_strtolower(utf8_encode($fila['CATEGORIZACION']))),
							"HORA_ATENCION" 		=> ucfirst(mb_strtolower(utf8_encode($fila['HORA_ATENCION_MEDICA']))),
							"PRONOSTICO_MEDICO"		=> ucfirst(mb_strtolower(utf8_encode($fila['PRONOSTICO_MEDICO']))),
							"ALCOHOLEMIA"			=> ucfirst(mb_strtolower(utf8_encode($fila['ALCOHOLEMIA']))),
							"N_FRASCO"				=> ucfirst(mb_strtolower(utf8_encode($fila['N_FRASCO']))),
							"ANAMNESIS"				=> ucfirst(mb_strtolower(utf8_encode($fila['ANAMNESIS']))),
							"CABEZA"	 			=> ucfirst(mb_strtoupper(utf8_encode($fila['CABEZA']))),
							"CABEZA_TEXTO"	 		=> ucfirst(mb_strtolower(utf8_encode($fila['CABEZA_TEXTO']))),
							"TORAX"	 				=> ucfirst(mb_strtoupper(utf8_encode($fila['TORAX']))),
							"TORAX_TEXTO" 			=> ucfirst(mb_strtolower(utf8_encode($fila['TORAX_TEXTO']))),
							"ABDOMEN"	 			=> ucfirst(mb_strtoupper(utf8_encode($fila['ABDOMEN']))),
							"ABDOMEN_TEXTO" 		=> ucfirst(mb_strtolower(utf8_encode($fila['ABDOMEN_TEXTO']))),
							"PELVIS"	 			=> ucfirst(mb_strtoupper(utf8_encode($fila['PELVIS']))),
							"PELVIS_TEXTO"			=> ucfirst(mb_strtolower(utf8_encode($fila['PELVIS_TEXTO']))),
							"EXT_SUPERIORES"		=> ucfirst(mb_strtoupper(utf8_encode($fila['EXT_SUPERIORES']))),
							"EXT_SUPERIORES_TEXTO"	=> ucfirst(mb_strtolower(utf8_encode($fila['EXT_SUPERIORES_TEXTO']))),
							"EXT_INFERIORES"		=> ucfirst(mb_strtoupper(utf8_encode($fila['EXT_INFERIORES']))),
							"EXT_INFERIORES_TEXTO"	=> ucfirst(mb_strtolower(utf8_encode($fila['EXT_INFERIORES_TEXTO']))),
							"EX_NEUROLOGICO"		=> ucfirst(mb_strtoupper(utf8_encode($fila['EX_NEUROLOGICO']))),
							"EX_NEUROLOGICO_TEXTO"	=> ucfirst(mb_strtolower(utf8_encode($fila['EX_NEUROLOGICO_TEXTO']))),
							"RADIOGRAFIA"			=> ucfirst(mb_strtolower(utf8_encode($fila['RADIOGRAFIA']))),
							"RADIOGRAFIA_TEXTO"		=> ucfirst(mb_strtolower(utf8_encode($fila['RADIOGRAFIA_TEXTO']))),
							"EXAMEN_SANGRE"			=> ucfirst(mb_strtolower(utf8_encode($fila['EXAMEN_SANGRE']))),
							"EXAMEN_SANGRE_TEXTO"	=> ucfirst(mb_strtolower(utf8_encode($fila['EXAMEN_SANGRE_TEXTO']))),
							"ECG"					=> ucfirst(mb_strtolower(utf8_encode($fila['ECG']))),
							"PESO" 					=> ucfirst(mb_strtolower(utf8_encode($fila['PESO']))),
							"FECHA_NACIMIENTO"		=> ucfirst(mb_strtolower(utf8_encode($fila['FECHA_NACIMIENTO']))),
							"DIRECCION"				=> ucfirst(mb_strtolower(utf8_encode($fila['DIRECCION']))),
							"TELEFONO"				=> ucfirst(mb_strtolower(utf8_encode($fila['TELEFONO']))),
							"CORREO"				=> ucfirst(mb_strtolower(utf8_encode($fila['CORREO_ELECTRONICO']))),
							"CONSTATACION_LESIONES" => ucfirst(mb_strtolower(utf8_encode($fila["CONSTATACION_LESIONES"]))),
							"EXAMEN_FISICO" 		=> ucfirst(mb_strtolower(utf8_encode($fila["EXAMEN_FISICO"]))),
							"IMAGENOLOGIA"  		=> ucfirst(mb_strtolower(utf8_encode($fila["IMAGENOLOGIA"]))),
							"EXAMENES_LABORATORIOS" => ucfirst(mb_strtolower(utf8_encode($fila["EXAMENES_LABORATORIOS"]))),
							"OTROS" 				=> ucfirst(mb_strtolower(utf8_encode($fila["OTROS"]))),
							"ORIGEN_LESION" 		=> ucfirst(mb_strtolower(utf8_encode($fila["ORIGEN_LESION"]))),
							"APRECIACION_CLINICA" 	=> ucfirst(mb_strtolower(utf8_encode($fila["APRECIACION_CLINICA"]))),
							"LESIONADO_DIAS"		=> ucfirst(mb_strtolower(utf8_encode($fila["LESIONADO_DIAS"]))),
							"LESIONADO_ACOMPANADO" 	=> ucfirst(mb_strtolower(utf8_encode($fila["LESIONADO_ACOMPANADO"]))),
							"NOMBRE_ACOMPANANTE" 	=> ucfirst(mb_strtolower(utf8_encode($fila["NOMBRE_ACOMPANANTE"]))),
							"CALIDAD_ACOMPANANTE" 	=> ucfirst(mb_strtolower(utf8_encode($fila["CALIDAD_ACOMPANANTE"]))),
							"NOTIFICACION_GES"		=>  ucfirst(mb_strtolower(utf8_encode($fila["NOTIFICACION_GES"]))),
							"DIAGNOSTICO_GES"		=>  ucfirst(mb_strtolower(utf8_encode($fila["DIAGNOSTICO_GES"])))
						);//end array
						$i++;
					}
				}
			}				
			return $data;
		}

		function SP_OBTENER_ANTECEDENTES_PARA_PDF($bd){
			$i=0;
			$data = Array();
			$sql = "CALL SP_OBTENER_ANTECEDENTES({$this->getconId()},{$this->getCarpeta()})";
			//$sql = "CALL SP_OBTENER_ANTECEDENTES(100585,99)";
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
							"data"	    					=> "1",
							"CENTRO_ATENCION"				=>  utf8_encode($fila['CENTRO_ATENCION']),
							"DAU"							=>  utf8_encode($fila['DAU']),
							"APELLIDO_PATERNO"				=>  mb_strtoupper(utf8_encode($fila['APELLIDO_PATERNO'])),
							"APELLIDO_MATERNO"				=>  mb_strtoupper(utf8_encode($fila['APELLIDO_MATERNO'])),
							"NOMBRE"						=>  mb_strtoupper(utf8_encode($fila['NOMBRE'])),
							"RUT_PASAPORTE"					=>  utf8_encode($fila['RUT_PASAPORTE']),
							"FECHA_NACIMIENTO"				=>  utf8_encode($fila['FECHA_NACIMIENTO']),
							"EDAD"							=>  mb_strtoupper(utf8_encode($fila['EDAD'])),
							"DIRECCION"						=>  strtoupper(utf8_encode($fila['DIRECCION'])),
							"COMUNA"						=>  strtoupper(utf8_encode($fila['COMUNA'])),
							"PREVISION"						=>  strtoupper(utf8_encode($fila['PREVISION'])),
							"DIRECCION"						=>  mb_strtoupper(utf8_encode($fila['DIRECCION'])),
							"COMUNA"						=>  mb_strtoupper(utf8_encode($fila['COMUNA'])),
							"FECHA_INGRESO"					=>  utf8_encode($fila['FECHA_INGRESO']),
							"HORA"							=>  utf8_encode($fila['HORA']),
							"NOMBRE_ACOMPANANTE"			=>  utf8_encode($fila['NOMBRE_ACOMPANANTE']),
							"MOTIVO_CONSULTA"				=>  utf8_encode($fila['MOTIVO_CONSULTA']),
							"TIPO_CONSULTA"					=>  ucfirst(mb_strtolower(utf8_encode($fila['TIPO_CONSULTA']))),
							"MEDIO_TRANSPORTE"				=>  ucfirst(mb_strtolower(utf8_encode($fila['MEDIO_TRANSPORTE']))),
							"CATEGORIZACION_INGRESO"		=>  utf8_encode($fila['CATEGORIZACION_INGRESO']),
							"HORA_CATEGORIZACION_INGRESO"	=>  utf8_encode($fila['HORA_CATEGORIZACION_INGRESO']),
							"HORA_TRIAGE"					=>  utf8_encode($fila['HORA_TRIAGE']),
							"FC"							=>  utf8_encode($fila['FC']),
							"FR"							=>  utf8_encode($fila['FR']),
							"T_AUX"							=>  utf8_encode($fila['T_AUX']),
							"SAT_02"						=>  utf8_encode($fila['SAT_02']),
							"PA_SISTOLICA"					=>  utf8_encode($fila['PA_SISTOLICA']),
							"PA_DIASTOLICA"					=>  utf8_encode($fila['PA_DIASTOLICA']),
							"HGT"							=>  utf8_encode($fila['HGT']),
							"E_EVA"							=>  utf8_encode($fila['E_EVA']),
							"E_GLASGOW"						=>  utf8_encode($fila['E_GLASGOW']),
							"PESO"							=>  utf8_encode($fila['PESO']),
							"ALERGIAS"						=>  utf8_encode($fila['ALERGIAS']),
							"HORA_ATENCION_MEDICA"			=>  utf8_encode($fila['HORA_ATENCION_MEDICA']),
							"PRONOSTICO_MEDICO"				=>  utf8_encode($fila['PRONOSTICO_MEDICO']),
							"ALCOHOLEMIA"					=>  utf8_encode($fila['ALCOHOLEMIA']),
							"N_FRASCO"						=>  utf8_encode($fila['N_FRASCO']),
							"ANAMNESIS"						=>  utf8_encode($fila['ANAMNESIS']),
							"CABEZA"						=>  utf8_encode($fila['CABEZA']),
							"CABEZA_TEXTO"					=>  utf8_encode($fila['CABEZA_TEXTO']),
							"TORAX"							=>  utf8_encode($fila['TORAX']),
							"TORAX_TEXTO"					=>  utf8_encode($fila['TORAX_TEXTO']),
							"ABDOMEN"						=>  utf8_encode($fila['ABDOMEN']),
							"ABDOMEN_TEXTO"					=>  utf8_encode($fila['ABDOMEN_TEXTO']),
							"PELVIS"						=>  utf8_encode($fila['PELVIS']),
							"PELVIS_TEXTO"					=>  utf8_encode($fila['PELVIS_TEXTO']),
							"EXT_SUPERIORES"				=>  utf8_encode($fila['EXT_SUPERIORES']),
							"EXT_SUPERIORES_TEXTO"			=>  utf8_encode($fila['EXT_SUPERIORES_TEXTO']),
							"EXT_INFERIORES"				=>  utf8_encode($fila['EXT_INFERIORES']),
							"EXT_INFERIORES_TEXTO"			=>  utf8_encode($fila['EXT_INFERIORES_TEXTO']),
							"EX_NEUROLOGICO"				=>  utf8_encode($fila['EX_NEUROLOGICO']),
							"EX_NEUROLOGICO_TEXTO"			=>  utf8_encode($fila['EX_NEUROLOGICO_TEXTO']),
							"TRATAMIENTO_1_IND_1"			=>  utf8_encode($fila['TRATAMIENTO_1_IND_1']),
							"TRATAMIENTO_1_IND_2"			=>  utf8_encode($fila['TRATAMIENTO_1_IND_2']),
							"TRATAMIENTO_1_IND_3"			=>  utf8_encode($fila['TRATAMIENTO_1_IND_3']),
							"TRATAMIENTO_2_IND_1"			=>  utf8_encode($fila['TRATAMIENTO_2_IND_1']),
							"TRATAMIENTO_2_IND_2"			=>  utf8_encode($fila['TRATAMIENTO_2_IND_2']),
							"TRATAMIENTO_2_IND_3"			=>  utf8_encode($fila['TRATAMIENTO_2_IND_3']),
							"TRATAMIENTO_3_IND_1"			=>  utf8_encode($fila['TRATAMIENTO_3_IND_1']),
							"TRATAMIENTO_3_IND_2"			=>  utf8_encode($fila['TRATAMIENTO_3_IND_2']),
							"TRATAMIENTO_3_IND_3"			=>  utf8_encode($fila['TRATAMIENTO_3_IND_3']),
							"EVOLUCION_OBSERVACION"			=>  utf8_encode($fila['EVOLUCION_OBSERVACION']),
							"RADIOGRAFIA"					=>  utf8_encode($fila['RADIOGRAFIA']),
							"RADIOGRAFIA_TEXTO"				=>  utf8_encode($fila['RADIOGRAFIA_TEXTO']),
							"EXAMEN_SANGRE"					=>  utf8_encode($fila['EXAMEN_SANGRE']),
							"EXAMEN_SANGRE_TEXTO"			=>  utf8_encode($fila['EXAMEN_SANGRE_TEXTO']),
							"ECG"							=>  utf8_encode($fila['ECG']),
							"CATEGORIZACION_EGRESO"			=>  utf8_encode($fila['CATEGORIZACION_EGRESO']),
							"HORA_CATEGORIZACION_EGRESO"	=>  utf8_encode($fila['HORA_CATEGORIZACION_EGRESO']),
							"ULTIMO_SV"						=>  utf8_encode($fila['ULTIMO_SV']),
							"DIAGNOSTICO_EGRESO"			=>  utf8_encode($fila['DIAGNOSTICO_EGRESO']),
							"INDICACIONES_RECETA"			=>  utf8_encode($fila['INDICACIONES_RECETA']),
							"TIPO_EGRESO"					=>  utf8_encode($fila['TIPO_EGRESO']),
							"CENTRO_DERIVACION"				=>  utf8_encode($fila['CENTRO_DERIVACION']),
							"HORA_EGRESO"					=>  utf8_encode($fila['HORA_EGRESO']),
							"RUT_PROFESIONAL"				=>  utf8_encode($fila['RUT_PROFESIONAL']),
							"NOMBRE_PROFESIONAL"			=>  utf8_encode($fila['NOMBRE_PROFESIONAL']),
							"SEXO" 							=>	utf8_encode($fila["SEXO"]),
							"TELEFONO"  					=>	utf8_encode($fila["TELEFONO"]),
							"CORREO_ELECTRONICO"  			=>	utf8_encode($fila["CORREO_ELECTRONICO"]),
							"SOSPECHA_AUGE"					=>	utf8_encode($fila["SOSPECHA_AUGE"]),
							"SOSPECHA_AUGE_TEXTO" 			=>	utf8_encode($fila["SOSPECHA_AUGE_TEXTO"]),
							"SUBPROBLEMA_AUGE_TEXTO"		=>	utf8_encode($fila["SUBPROBLEMA_AUGE_TEXTO"]),
							"ESPECIALIDAD" 					=> 	utf8_encode($fila["ESPECIALIDAD"]),
							"CONFIRMAR_DIAGNOSTICO" 		=> 	utf8_encode($fila["CONFIRMAR_DIAGNOSTICO"]),
							"REALIZAR_TTO" 					=> 	utf8_encode($fila["REALIZAR_TTO"]),
							"SEGUIMIENTO" 					=> 	utf8_encode($fila["SEGUIMIENTO"]),
							"OTRA_CONSULTA" 				=> 	utf8_encode($fila["OTRA_CONSULTA"]),
							"OTRA_CONSULTA_TEXTO" 			=> 	utf8_encode($fila["OTRA_CONSULTA_TEXTO"]),
							"CONSTATACION_LESIONES"			=>	utf8_encode($fila["CONSTATACION_LESIONES"]),
							"EXAMEN_FISICO"					=>	utf8_encode($fila["EXAMEN_FISICO"]),
							"IMAGENOLOGIA"					=>	utf8_encode($fila["IMAGENOLOGIA"]),
							"EXAMENES_LABORATORIOS"			=>	utf8_encode($fila["EXAMENES_LABORATORIOS"]),
							"OTROS"							=>	utf8_encode($fila["OTROS"]),
							"ORIGEN_LESION"					=>	utf8_encode($fila["ORIGEN_LESION"]),
							"APRECIACION_CLINICA"			=>	utf8_encode($fila["APRECIACION_CLINICA"]),
							"LESIONADO_DIAS"				=>	utf8_encode($fila["LESIONADO_DIAS"]),
							"LESIONADO_ACOMPANADO"			=>	utf8_encode($fila["LESIONADO_ACOMPANADO"]),
							"NOMBRE_ACOMPANANTE_LESIONADO"	=>	utf8_encode($fila["NOMBRE_ACOMPANANTE_LESIONADO"]),
							"CALIDAD_ACOMPANANTE"			=>	utf8_encode($fila["CALIDAD_ACOMPANANTE"]),
							"NOTIFICACION_GES"				=>  utf8_encode($fila["NOTIFICACION_GES"]),
							"DIAGNOSTICO_GES"				=>  utf8_encode($fila["DIAGNOSTICO_GES"]),
							"IND_TTO_1"						=>	utf8_encode($fila["TRATAMIENTO_1_IND_1_PROCEDIMIENTO"]),
							"IND_TTO_2"						=>	utf8_encode($fila["TRATAMIENTO_1_IND_2_PROCEDIMIENTO"]),
							"IND_TTO_3"						=>	utf8_encode($fila["TRATAMIENTO_1_IND_3_PROCEDIMIENTO"]),
							"IND_TTO_4"						=>	utf8_encode($fila["TRATAMIENTO_2_IND_1_PROCEDIMIENTO"]),
							"IND_TTO_5"						=>	utf8_encode($fila["TRATAMIENTO_2_IND_2_PROCEDIMIENTO"]),
							"IND_TTO_6"						=>	utf8_encode($fila["TRATAMIENTO_2_IND_3_PROCEDIMIENTO"]),
							"IND_TTO_7"						=>	utf8_encode($fila["TRATAMIENTO_3_IND_1_PROCEDIMIENTO"]),
							"IND_TTO_8"						=>  utf8_encode($fila["TRATAMIENTO_3_IND_2_PROCEDIMIENTO"]),
							"IND_TTO_9"						=>  utf8_encode($fila["TRATAMIENTO_3_IND_3_PROCEDIMIENTO"])

						);//end array
					$i++;
					}//END WHILE
				}// END ELSE INTERNO
			}

				
				return $data;
		}


		//================== INICIO FUNCION QUE LLAMA AL HISTORICO DEL CONSULTA DAU ==================
		function SP_OBTENER_ANTECEDENTES_PARA_PDF_HISTORICO($bd){
			$i=0;
			$data = Array();
			$sql = "CALL SP_CONSULTA_DAU_ANTECEDENTES({$this->getconId()})";
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
							"data"	    					=> "1",
							"CENTRO_ATENCION"				=>  utf8_encode($fila['CENTRO_ATENCION']),
							"DAU"							=>  utf8_encode($fila['DAU']),
							"APELLIDO_PATERNO"				=>  mb_strtoupper(utf8_encode($fila['APELLIDO_PATERNO'])),
							"APELLIDO_MATERNO"				=>  mb_strtoupper(utf8_encode($fila['APELLIDO_MATERNO'])),
							"NOMBRE"						=>  mb_strtoupper(utf8_encode($fila['NOMBRE'])),
							"RUT_PASAPORTE"					=>  utf8_encode($fila['RUT_PASAPORTE']),
							"FECHA_NACIMIENTO"				=>  utf8_encode($fila['FECHA_NACIMIENTO']),
							"EDAD"							=>  mb_strtoupper(utf8_encode($fila['EDAD'])),
							"DIRECCION"						=>  strtoupper(utf8_encode($fila['DIRECCION'])),
							"COMUNA"						=>  strtoupper(utf8_encode($fila['COMUNA'])),
							"PREVISION"						=>  strtoupper(utf8_encode($fila['PREVISION'])),
							"DIRECCION"						=>  mb_strtoupper(utf8_encode($fila['DIRECCION'])),
							"COMUNA"						=>  mb_strtoupper(utf8_encode($fila['COMUNA'])),
							"FECHA_INGRESO"					=>  utf8_encode($fila['FECHA_INGRESO']),
							"HORA"							=>  utf8_encode($fila['HORA']),
							"NOMBRE_ACOMPANANTE"			=>  utf8_encode($fila['NOMBRE_ACOMPANANTE']),
							"MOTIVO_CONSULTA"				=>  utf8_encode($fila['MOTIVO_CONSULTA']),
							"TIPO_CONSULTA"					=>  ucfirst(mb_strtolower(utf8_encode($fila['TIPO_CONSULTA']))),
							"MEDIO_TRANSPORTE"				=>  ucfirst(mb_strtolower(utf8_encode($fila['MEDIO_TRANSPORTE']))),
							"CATEGORIZACION_INGRESO"		=>  utf8_encode($fila['CATEGORIZACION_INGRESO']),
							"HORA_CATEGORIZACION_INGRESO"	=>  utf8_encode($fila['HORA_CATEGORIZACION_INGRESO']),
							"HORA_TRIAGE"					=>  utf8_encode($fila['HORA_TRIAGE']),
							"FC"							=>  utf8_encode($fila['FC']),
							"FR"							=>  utf8_encode($fila['FR']),
							"T_AUX"							=>  utf8_encode($fila['T_AUX']),
							"SAT_02"						=>  utf8_encode($fila['SAT_02']),
							"PA_SISTOLICA"					=>  utf8_encode($fila['PA_SISTOLICA']),
							"PA_DIASTOLICA"					=>  utf8_encode($fila['PA_DIASTOLICA']),
							"HGT"							=>  utf8_encode($fila['HGT']),
							"E_EVA"							=>  utf8_encode($fila['E_EVA']),
							"E_GLASGOW"						=>  utf8_encode($fila['E_GLASGOW']),
							"PESO"							=>  utf8_encode($fila['PESO']),
							"ALERGIAS"						=>  utf8_encode($fila['ALERGIAS']),
							"HORA_ATENCION_MEDICA"			=>  utf8_encode($fila['HORA_ATENCION_MEDICA']),
							"PRONOSTICO_MEDICO"				=>  utf8_encode($fila['PRONOSTICO_MEDICO']),
							"ALCOHOLEMIA"					=>  utf8_encode($fila['ALCOHOLEMIA']),
							"N_FRASCO"						=>  utf8_encode($fila['N_FRASCO']),
							"ANAMNESIS"						=>  utf8_encode($fila['ANAMNESIS']),
							"CABEZA"						=>  utf8_encode($fila['CABEZA']),
							"CABEZA_TEXTO"					=>  utf8_encode($fila['CABEZA_TEXTO']),
							"TORAX"							=>  utf8_encode($fila['TORAX']),
							"TORAX_TEXTO"					=>  utf8_encode($fila['TORAX_TEXTO']),
							"ABDOMEN"						=>  utf8_encode($fila['ABDOMEN']),
							"ABDOMEN_TEXTO"					=>  utf8_encode($fila['ABDOMEN_TEXTO']),
							"PELVIS"						=>  utf8_encode($fila['PELVIS']),
							"PELVIS_TEXTO"					=>  utf8_encode($fila['PELVIS_TEXTO']),
							"EXT_SUPERIORES"				=>  utf8_encode($fila['EXT_SUPERIORES']),
							"EXT_SUPERIORES_TEXTO"			=>  utf8_encode($fila['EXT_SUPERIORES_TEXTO']),
							"EXT_INFERIORES"				=>  utf8_encode($fila['EXT_INFERIORES']),
							"EXT_INFERIORES_TEXTO"			=>  utf8_encode($fila['EXT_INFERIORES_TEXTO']),
							"EX_NEUROLOGICO"				=>  utf8_encode($fila['EX_NEUROLOGICO']),
							"EX_NEUROLOGICO_TEXTO"			=>  utf8_encode($fila['EX_NEUROLOGICO_TEXTO']),
							"TRATAMIENTO_1_IND_1"			=>  utf8_encode($fila['TRATAMIENTO_1_IND_1']),
							"TRATAMIENTO_1_IND_2"			=>  utf8_encode($fila['TRATAMIENTO_1_IND_2']),
							"TRATAMIENTO_1_IND_3"			=>  utf8_encode($fila['TRATAMIENTO_1_IND_3']),
							"TRATAMIENTO_2_IND_1"			=>  utf8_encode($fila['TRATAMIENTO_2_IND_1']),
							"TRATAMIENTO_2_IND_2"			=>  utf8_encode($fila['TRATAMIENTO_2_IND_2']),
							"TRATAMIENTO_2_IND_3"			=>  utf8_encode($fila['TRATAMIENTO_2_IND_3']),
							"TRATAMIENTO_3_IND_1"			=>  utf8_encode($fila['TRATAMIENTO_3_IND_1']),
							"TRATAMIENTO_3_IND_2"			=>  utf8_encode($fila['TRATAMIENTO_3_IND_2']),
							"TRATAMIENTO_3_IND_3"			=>  utf8_encode($fila['TRATAMIENTO_3_IND_3']),
							"EVOLUCION_OBSERVACION"			=>  utf8_encode($fila['EVOLUCION_OBSERVACION']),
							"RADIOGRAFIA"					=>  utf8_encode($fila['RADIOGRAFIA']),
							"RADIOGRAFIA_TEXTO"				=>  utf8_encode($fila['RADIOGRAFIA_TEXTO']),
							"EXAMEN_SANGRE"					=>  utf8_encode($fila['EXAMEN_SANGRE']),
							"EXAMEN_SANGRE_TEXTO"			=>  utf8_encode($fila['EXAMEN_SANGRE_TEXTO']),
							"ECG"							=>  utf8_encode($fila['ECG']),
							"CATEGORIZACION_EGRESO"			=>  utf8_encode($fila['CATEGORIZACION_EGRESO']),
							"HORA_CATEGORIZACION_EGRESO"	=>  utf8_encode($fila['HORA_CATEGORIZACION_EGRESO']),
							"ULTIMO_SV"						=>  utf8_encode($fila['ULTIMO_SV']),
							"DIAGNOSTICO_EGRESO"			=>  utf8_encode($fila['DIAGNOSTICO_EGRESO']),
							"INDICACIONES_RECETA"			=>  utf8_encode($fila['INDICACIONES_RECETA']),
							"TIPO_EGRESO"					=>  utf8_encode($fila['TIPO_EGRESO']),
							"CENTRO_DERIVACION"				=>  utf8_encode($fila['CENTRO_DERIVACION']),
							"HORA_EGRESO"					=>  utf8_encode($fila['HORA_EGRESO']),
							"RUT_PROFESIONAL"				=>  utf8_encode($fila['RUT_PROFESIONAL']),
							"NOMBRE_PROFESIONAL"			=>  utf8_encode($fila['NOMBRE_PROFESIONAL']),
							"SEXO" 							=>	utf8_encode($fila["SEXO"]),
							"TELEFONO"  					=>	utf8_encode($fila["TELEFONO"]),
							"CORREO_ELECTRONICO"  			=>	utf8_encode($fila["CORREO_ELECTRONICO"]),
							"SOSPECHA_AUGE"					=>	utf8_encode($fila["SOSPECHA_AUGE"]),
							"SOSPECHA_AUGE_TEXTO" 			=>	utf8_encode($fila["SOSPECHA_AUGE_TEXTO"]),
							"SUBPROBLEMA_AUGE_TEXTO"		=>	utf8_encode($fila["SUBPROBLEMA_AUGE_TEXTO"]),
							"ESPECIALIDAD" 					=> 	utf8_encode($fila["ESPECIALIDAD"]),
							"CONFIRMAR_DIAGNOSTICO" 		=> 	utf8_encode($fila["CONFIRMAR_DIAGNOSTICO"]),
							"REALIZAR_TTO" 					=> 	utf8_encode($fila["REALIZAR_TTO"]),
							"SEGUIMIENTO" 					=> 	utf8_encode($fila["SEGUIMIENTO"]),
							"OTRA_CONSULTA" 				=> 	utf8_encode($fila["OTRA_CONSULTA"]),
							"OTRA_CONSULTA_TEXTO" 			=> 	utf8_encode($fila["OTRA_CONSULTA_TEXTO"]),
							"CONSTATACION_LESIONES"			=>	utf8_encode($fila["CONSTATACION_LESIONES"]),
							"EXAMEN_FISICO"					=>	utf8_encode($fila["EXAMEN_FISICO"]),
							"IMAGENOLOGIA"					=>	utf8_encode($fila["IMAGENOLOGIA"]),
							"EXAMENES_LABORATORIOS"			=>	utf8_encode($fila["EXAMENES_LABORATORIOS"]),
							"OTROS"							=>	utf8_encode($fila["OTROS"]),
							"ORIGEN_LESION"					=>	utf8_encode($fila["ORIGEN_LESION"]),
							"APRECIACION_CLINICA"			=>	utf8_encode($fila["APRECIACION_CLINICA"]),
							"LESIONADO_DIAS"				=>	utf8_encode($fila["LESIONADO_DIAS"]),
							"LESIONADO_ACOMPANADO"			=>	utf8_encode($fila["LESIONADO_ACOMPANADO"]),
							"NOMBRE_ACOMPANANTE_LESIONADO"	=>	utf8_encode($fila["NOMBRE_ACOMPANANTE_LESIONADO"]),
							"CALIDAD_ACOMPANANTE"			=>	utf8_encode($fila["CALIDAD_ACOMPANANTE"]),
							"NOTIFICACION_GES"				=>  utf8_encode($fila["NOTIFICACION_GES"]),
							"DIAGNOSTICO_GES"				=>  utf8_encode($fila["DIAGNOSTICO_GES"]),

							"IND_TTO_1"						=>	utf8_encode($fila["TRATAMIENTO_1_IND_1_PROCEDIMIENTO"]),
							"IND_TTO_2"						=>	utf8_encode($fila["TRATAMIENTO_1_IND_2_PROCEDIMIENTO"]),
							"IND_TTO_3"						=>	utf8_encode($fila["TRATAMIENTO_1_IND_3_PROCEDIMIENTO"]),
							"IND_TTO_4"						=>	utf8_encode($fila["TRATAMIENTO_2_IND_1_PROCEDIMIENTO"]),
							"IND_TTO_5"						=>	utf8_encode($fila["TRATAMIENTO_2_IND_2_PROCEDIMIENTO"]),
							"IND_TTO_6"						=>	utf8_encode($fila["TRATAMIENTO_2_IND_3_PROCEDIMIENTO"]),
							"IND_TTO_7"						=>	utf8_encode($fila["TRATAMIENTO_3_IND_1_PROCEDIMIENTO"]),
							"IND_TTO_8"						=>  utf8_encode($fila["TRATAMIENTO_3_IND_2_PROCEDIMIENTO"]),
							"IND_TTO_9"						=>  utf8_encode($fila["TRATAMIENTO_3_IND_3_PROCEDIMIENTO"])


						);//end array
					$i++;
					}//END WHILE
				}// END ELSE INTERNO
			}

				
				return $data;
		}
		//================== END FUNCION QUE LLAMA AL HISTORICO DEL CONSULTA DAU ==================


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
		
	} // END CLASS 
?>