<?php

	class dashboard{
		private $pacId;
		private $perId;
		private $rutPac;
		private $nombrePac;
		private $apePat;
		private $sexo;
		private $direccion;
		private $centro;
		private $dniPac;
		private $apeMat;
		private $fnac;
		private $nacionalidad;
		private $comuna;
		private $prevision;
		private $fechaCreacion;
		private $motivoConsulta;
		private $nombreAcompanante;
		private $tipoConsulta;
		private $medioTransporte;
		private $tipoAccidente;
		private $lugarAccidente;
		private $telefono;
		private $nombreCampos;
		private $valorCampos;
		private $carpeta;
		private $hta;
		private $DM2;
		private $EPOC;
		private $ASMA;
		private $IRC;
		private $DHC;
		private $OTRAS;
		private $otrosEcDescrip;
		private $estado;
		private $conId;
		private $fechaIngreso;
		private $fechaSalida;
		private $fechaHoy;
		private $correo;


		// GETTERS AND SETTERS
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

		public function getRutPac(){
			return $this->rutPac;
		}

		public function setRutPac($rutPac){
			return $this->rutPac = $rutPac;
		}

		public function getNombrePac(){
			return $this->nombrePac;
		}

		public function setNombrePac($nombrePac){
			return $this->nombrePac = $nombrePac;
		}

		public function getApePat(){
			return $this->apePat;
		}

		public function setApePat($apePat){
			return $this->apePat = $apePat;
		}

		public function getSexo(){
			return $this->sexo;
		}

		public function setSexo($sexo){
			return $this->sexo = $sexo;
		}

		public function getDireccion(){
			return $this->direccion;
		}

		public function setDireccion($direccion){
			return $this->direccion = $direccion;
		}

		public function getCentro(){
			return $this->centro;
		}

		public function setCentro($centro){
			return $this->centro = $centro;
		}

		public function getDniPac(){
			return $this->dniPac;
		}

		public function setDniPac($dniPac){
			return $this->dniPac = $dniPac;
		}

		public function getApeMat(){
			return $this->apeMat;
		}

		public function setApeMat($apeMat){
			return $this->apeMat = $apeMat;
		}

		public function getFnac(){
			return $this->fnac;
		}

		public function setFnac($fnac){
			return $this->fnac = $fnac;
		}

		public function getNacionalidad(){
			return $this->nacionalidad;
		}

		public function setNacionalidad($nacionalidad){
			return $this->nacionalidad = $nacionalidad;
		}

		public function getComuna(){
			return $this->comuna;
		}

		public function setComuna($comuna){
			return $this->comuna = $comuna;
		}

		public function getPrevision(){
			return $this->prevision;
		}

		public function setPrevision($prevision){
			return $this->prevision = $prevision;
		}

		public function getFechaCreacion(){
			return $this->fechaCreacion;
		}

		public function setFechaCreacion($fechaCreacion){
			return $this->fechaCreacion = $fechaCreacion;
		}

		public function getMotivoConsulta(){
			return $this->motivoConsulta;
		}

		public function setMotivoConsulta($motivoConsulta){
			return $this->motivoConsulta = $motivoConsulta;
		}

		public function getNombreAcompanante(){
			return $this->nombreAcompanante;
		}

		public function setNombreAcompanante($nombreAcompanante){
			return $this->nombreAcompanante = $nombreAcompanante;
		}

		public function getTipoConsulta(){
			return $this->tipoConsulta;
		}

		public function setTipoConsulta($tipoConsulta){
			return $this->tipoConsulta = $tipoConsulta;
		}

		public function getMedioTransporte(){
			return $this->medioTransporte;
		}

		public function setMedioTransporte($medioTransporte){
			return $this->medioTransporte = $medioTransporte;
		}

		public function getTipoAccidente(){
			return $this->tipoAccidente;
		}

		public function setTipoAccidente($tipoAccidente){
			return $this->tipoAccidente = $tipoAccidente;
		}

		public function getLugarAccidente(){
			return $this->lugarAccidente;
		}

		public function setLugarAccidente($lugarAccidente){
			return $this->lugarAccidente = $lugarAccidente;
		}


		public function getTelefono(){
			return $this->telefono;
		}

		public function setTelefono($telefono){
			return $this->telefono = $telefono;
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

		public function getCarpeta(){
			return $this->carpeta;
		}

		public function setCarpeta($carpeta){
			return $this->carpeta = $carpeta;
		}


		public function getHta(){
			return $this->hta;
		}

		public function setHta($hta){
			return $this->hta = $hta;
		}

		public function getDM2(){
			return $this->DM2;
		}

		public function setDM2($DM2){
			return $this->DM2 = $DM2;
		}

		public function getEPOC(){
			return $this->EPOC;
		}

		public function setEPOC($EPOC){
			return $this->EPOC = $EPOC;
		}

		public function getASMA(){
			return $this->ASMA;
		}

		public function setASMA($ASMA){
			return $this->ASMA = $ASMA;
		}

		public function getIRC(){
			return $this->IRC;
		}

		public function setIRC($IRC){
			return $this->IRC = $IRC;
		}

		public function getDHC(){
			return $this->DHC;
		}

		public function setDHC($DHC){
			return $this->DHC = $DHC;
		}

		public function getOTRAS(){
			return $this->OTRAS;
		}

		public function setOTRAS($OTRAS){
			return $this->OTRAS = $OTRAS;
		}

		public function getOtrosEcDescrip(){
			return $this->otrosEcDescrip;
		}

		public function setOtrosEcDescrip($otrosEcDescrip){
			return $this->otrosEcDescrip = $otrosEcDescrip;
		}

		public function getEstado(){
			return $this->estado;
		}

		public function setEstado($estado){
			return $this->estado = $estado;
		}

		public function getConId(){
			return $this->conId;
		}

		public function setConId($conId){
			return $this->conId = $conId;
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

		public function getFechaHoy(){
			return $this->fechaHoy;
		}

		public function setFechaHoy($fechaHoy){
			return $this->fechaHoy = $fechaHoy;
		}

		public function getCorreo(){
			return $this->correo;
		}

		public function setCorreo($correo){
			return $this->correo = $correo;
		}
/***************************** INICIO FUNCIONES QUE CARGAN LAS LISTAS DE LA APLICACION  *************************************/
		function OBTENER_LISTA_COMUNA($bd){
			$i=0;
			$data = Array();			
			$sql = "CALL SP_OBTENER_LISTA(2)";
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

		function OBTENER_LISTA_PAISES($bd){
			$i = 0;
			$data = Array();
			$sql = "CALL SP_OBTENER_LISTA(4)";
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

		function OBTENER_LISTA_PREVISION($bd){
			$i = 0;
			$data = Array();
			$sql = "CALL SP_OBTENER_LISTA(5)";
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
						"CODIGO" => ucfirst(mb_strtolower(utf8_encode($fila[0]))),
						"NOMBRE" => ucfirst(mb_strtolower(utf8_encode($fila[1])))
					); // End Array
					$i++;
				}// end while
			}// end else
			return $data;
		}

		function SP_OBTENER_TIPO_CONSULTA($bd){
			$i = 0;
			$data = Array();
			$sql = "CALL SP_OBTENER_LISTA(8)";
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

		function SP_OBTENER_TIPO_TRASPORTE($bd){
			$i = 0;
			$data = Array();
			$sql = "CALL SP_OBTENER_LISTA(9)";
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

		function SP_OBTENER_TIPO_ACCIDENTE($bd){
			$i = 0;
			$data = Array();
			$sql = "CALL SP_OBTENER_LISTA(7)";
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

		function SP_OBTENER_LUGAR_ACCIDENTE($bd){
			$i = 0;
			$data = Array();
			$sql = "CALL SP_OBTENER_LISTA(3)";
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

		function SP_OBTENER_SEXO($bd){
			$i = 0;
			$data = Array();
			$sql = "CALL SP_OBTENER_LISTA(6)";
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
/***************************** FIN FUNCIONES QUE CARGAN LAS LISTAS DE LA APLICACION  *************************************/

/************************** METODO QUE OBTIENE A LOS PACIENTE DEL SAPU ****************************************************/
		function OBTENER_PACIENTE_SAPU($bd){
			$i=0;
			$data = Array();
			$sql = "CALL SP_OBTENER_PACIENTE('{$this->getRutPac()}','{$this->getDniPac()}','{$this->getNombrePac()}','{$this->getApePat()}','{$this->getApeMat()}')";
			//$sql= "CALL SP_OBTENER_PACIENTE('','','','LOPEZ','')";
			$resultado = mysqli_query($bd,$sql);
			$count=mysqli_num_rows($resultado);
			if($count == "0"){
				$data[$i] = Array(
					"data" 	=> "0"
				);
			}else{
				while ($fila = mysqli_fetch_row($resultado)){
					$data[$i] = Array(
						"data"    			=> "1",
						"PAC_ID" 			=> ucfirst(mb_strtolower(utf8_encode($fila[0]))),
						"RUT" 				=> ucfirst(mb_strtolower(utf8_encode($fila[1]))),
						"PASAPORTE" 		=> ucfirst(mb_strtolower(utf8_encode($fila[2]))),
						"NOMBRE" 			=> ucfirst(mb_strtolower(utf8_encode($fila[3]))),
						"APELLIDO_PATERNO" 	=> ucfirst(mb_strtolower(utf8_encode($fila[4]))),
						"APELLIDO_MATERNO" 	=> ucfirst(mb_strtolower(utf8_encode($fila[5]))),
						"FECHA_NACIMIENTO" 	=> ucfirst(mb_strtolower(utf8_encode($fila[6]))),
						"SEXO" 				=> ucfirst(mb_strtolower(utf8_encode($fila[7]))),
						"NACIONALIDAD" 		=> ucfirst(mb_strtolower(utf8_encode($fila[8]))),
						"COMUNA" 			=> ucfirst(mb_strtolower(utf8_encode($fila[9]))),
						"DIRECCION" 		=> ucfirst(mb_strtolower(utf8_encode($fila[10]))),
						"PREVISION" 		=> ucfirst(mb_strtolower(utf8_encode($fila[11]))),
						"HTA" 				=> ucfirst(mb_strtolower(utf8_encode($fila[12]))),
						"DM2" 				=> ucfirst(mb_strtolower(utf8_encode($fila[13]))),
						"EPOC" 				=> ucfirst(mb_strtolower(utf8_encode($fila[14]))),
						"ASMA" 				=> ucfirst(mb_strtolower(utf8_encode($fila[15]))),
						"IRC" 				=> ucfirst(mb_strtolower(utf8_encode($fila[16]))),
						"DHC" 				=> ucfirst(mb_strtolower(utf8_encode($fila[17]))),
						"OTROS_EC" 			=> ucfirst(mb_strtolower(utf8_encode($fila[18]))),
						"OTROS_EC_DESC"		=> ucfirst(mb_strtolower(utf8_encode($fila[19]))),
						"TELEFONO"			=> ucfirst(mb_strtolower(utf8_encode($fila[20]))),
						"CORREO"			=> ucfirst(mb_strtolower(utf8_encode($fila[21])))
					);//end array
					$i++;
				}
			}
			return $data;
			//return $sql;
		}

/*********** INICIO METODO QUE INSERTA A LOS PACIENTES EN LA TABLA PAC_PACIENTES ********************/
		function SP_INSERT_PAC($bd){
			$i=0;
			$data = Array();

			$fnac = $this->getFnac();
			
			if ($fnac === "NULL") {
				$sql = "CALL SP_INSERT_PACIENTE";
	 			$sql .="({$this->getPacId()},'{$this->getRutPac()}','{$this->getDniPac()}','{$this->getNombrePac()}','{$this->getApePat()}','{$this->getApeMat()}',NULL,{$this->getSexo()},{$this->getNacionalidad()},'{$this->getDireccion()}',{$this->getComuna()},'{$this->getTelefono()}',{$this->getPrevision()},'{$this->getHta()}','{$this->getDM2()}','{$this->getEPOC()}','{$this->getASMA()}','{$this->getIRC()}','{$this->getDHC()}','{$this->getOTRAS()}','{$this->getOtrosEcDescrip()}','{$this->getCorreo()}',{$this->getCentro()})";
			}else{
				$sql = "CALL SP_INSERT_PACIENTE";
	 			$sql .="({$this->getPacId()},'{$this->getRutPac()}','{$this->getDniPac()}','{$this->getNombrePac()}','{$this->getApePat()}','{$this->getApeMat()}','{$this->getFnac()}',{$this->getSexo()},{$this->getNacionalidad()},'{$this->getDireccion()}',{$this->getComuna()},'{$this->getTelefono()}',{$this->getPrevision()},'{$this->getHta()}','{$this->getDM2()}','{$this->getEPOC()}','{$this->getASMA()}','{$this->getIRC()}','{$this->getDHC()}','{$this->getOTRAS()}','{$this->getOtrosEcDescrip()}','{$this->getCorreo()}',{$this->getCentro()})";
			}

	 		
	 		$resultado= mysqli_query($bd,$sql);
	 		$count = mysqli_num_rows($resultado);
			if ($count == "0") {
				$data[$i] = array(
					"data" =>"0"
				);
			}else{
				while ($fila = mysqli_fetch_row($resultado)) {
					$data[$i]= Array(
						"data" => "1",
						"PAC_ID" => utf8_encode($fila[0])
					); // End Array
					$i++;
				}// end while
			}// end else
			return $data;

			//return $sql;
		}

/***************************** INICIO METODO QUE INGRESA LA ATENCION ********************************/
		function SP_INSERTAR_ATENCION($bd){
			$i=0;
			$data = Array();
	 		$sql = "CALL SP_INSERT_CONTACTO({$this->getPacId()},{$this->getPerId()}, {$this->getCentro()},{$this->getCarpeta()},'{$this->getNombreCampos()}','{$this->getValorCampos()}')";
	 		$resultado= mysqli_query($bd,$sql);
	 		$count = mysqli_num_rows($resultado);
			if ($count == "0") {
				$data[$i] = array(
					"data" =>"0"
				);
			}else{
				while ($fila = mysqli_fetch_row($resultado)) {
					$data[$i]= Array(
						"data" => "1",
						"con_id" => utf8_encode($fila[0])
					); // End Array
					$i++;
				}// end while
			}// end else
			return $data;
		}

/******************************  OBTIENE LOS DATOS DEL PACIENTE CARGADOS POR CENTRO  *****************************************/
		function SP_OBTENER_ADMISION($bd){
			$i=0;
			$data = Array();
			$sql = "CALL SP_OBTENER_ATENCION({$this->getCentro()},{$this->getCarpeta()})";
			//$sql = "CALL SP_OBTENER_ATENCION({$this->getCentro()},aaa)";
			$resultado = mysqli_query($bd,$sql);
			//VALIDA SI EL RESULTADO NO TRAE NADA Y SE CAE, REALIZA UNA EXCEPCION
			if ($resultado === " " || empty($resultado)  || $resultado ==="") {
				$data[$i] = Array(
					"data" 	=> "2"
				);
			}else{
				$count= mysqli_num_rows($resultado);	
				if($count == "0"){
					$data[$i] = Array(
						"data" 	=> "0"
					);
				}else{
					while ($fila = mysqli_fetch_assoc($resultado)){
						$data[$i] = Array(
							"data"    			=> "1",
							"fecha"			 	=> ucfirst(mb_strtolower(utf8_encode($fila["FECHA_INGRESO"]))),
							"rut" 				=> ucfirst(mb_strtolower(utf8_encode($fila["RUT"]))),
							"paciente" 			=> ucfirst(mb_strtolower(utf8_encode($fila["PACIENTE"]))),
							"edad" 				=> ucfirst(mb_strtolower(utf8_encode($fila["EDAD"]))),
							"sexo" 				=> ucfirst(mb_strtolower(utf8_encode($fila["SEXO"]))),
							"motivo" 			=> ucfirst(mb_strtolower(utf8_encode($fila["MOTIVO_CONSULTA"]))),
							"prevision" 		=> ucfirst(mb_strtolower(utf8_encode($fila["PREVISION"]))),
							"firma" 			=> ucfirst(mb_strtolower(utf8_encode($fila["FIRMA"]))),
							"categorizacion"	=> ucfirst(mb_strtolower(utf8_encode($fila["CATEGORIZACION"]))),
							"estado"			=> ucfirst(mb_strtolower(utf8_encode($fila["ESTADO"]))),
							"con_id" 			=> ucfirst(mb_strtolower(utf8_encode($fila["CON_ID"])))
						);//end array
						$i++;
					}
				}
			}				
			return $data;
		}

		function SP_OBTENER_TRIAGE($bd){
			$i=0;
			$data = Array();
			$sql = "CALL SP_OBTENER_ATENCION({$this->getCentro()},{$this->getCarpeta()})";
			$resultado = mysqli_query($bd,$sql);
			$count=mysqli_num_rows($resultado);
			if($count == "0"){
				$data[$i] = Array(
					"data" 	=> "0"
				);
			}else{
				while ($fila = mysqli_fetch_assoc($resultado)){
					$data[$i] = Array(
						"data"    			=> "1",
						"fecha"			 	=> ucfirst(mb_strtolower(utf8_encode($fila["FECHA_INGRESO"]))),
						"rut" 				=> ucfirst(mb_strtolower(utf8_encode($fila["RUT"]))),
						"paciente" 			=> ucfirst(mb_strtolower(utf8_encode($fila["PACIENTE"]))),
						"edad" 				=> ucfirst(mb_strtolower(utf8_encode($fila["EDAD"]))),
						"sexo" 				=> ucfirst(mb_strtolower(utf8_encode($fila["SEXO"]))),
						"motivo" 			=> ucfirst(mb_strtolower(utf8_encode($fila["MOTIVO_CONSULTA"]))),
						"prevision" 		=> ucfirst(mb_strtolower(utf8_encode($fila["PREVISION"]))),
						"firma" 			=> ucfirst(mb_strtolower(utf8_encode($fila["FIRMA"]))),
						"categorizacion"	=> ucfirst(mb_strtolower(utf8_encode($fila["CATEGORIZACION"]))),
						"estado"			=> ucfirst(mb_strtolower(utf8_encode($fila["ESTADO"]))),
						"con_id" 			=> ucfirst(mb_strtolower(utf8_encode($fila["CON_ID"])))
					);//end array
					$i++;


				}
			}
			return $data;
		}

		function SP_OBTENER_REGISTRO_ATENCION($bd){
			$i=0;
			$data = Array();
			$sql = "CALL SP_OBTENER_ATENCION({$this->getCentro()},{$this->getCarpeta()})";
			$resultado = mysqli_query($bd,$sql);
			$count=mysqli_num_rows($resultado);
			if($count == "0"){
				$data[$i] = Array(
					"data" 	=> "0"
				);
			}else{
				while ($fila = mysqli_fetch_assoc($resultado)){
					$data[$i] = Array(
						"data"    			=> "1",
						"fecha"			 	=> ucfirst(mb_strtolower(utf8_encode($fila["FECHA_INGRESO"]))),
						"rut" 				=> ucfirst(mb_strtolower(utf8_encode($fila["RUT"]))),
						"paciente" 			=> ucfirst(mb_strtolower(utf8_encode($fila["PACIENTE"]))),
						"edad" 				=> ucfirst(mb_strtolower(utf8_encode($fila["EDAD"]))),
						"sexo" 				=> ucfirst(mb_strtolower(utf8_encode($fila["SEXO"]))),
						"motivo" 			=> ucfirst(mb_strtolower(utf8_encode($fila["MOTIVO_CONSULTA"]))),
						"prevision" 		=> ucfirst(mb_strtolower(utf8_encode($fila["PREVISION"]))),
						"firma" 			=> ucfirst(mb_strtolower(utf8_encode($fila["FIRMA"]))),
						"categorizacion"	=> ucfirst(mb_strtolower(utf8_encode($fila["CATEGORIZACION"]))),
						"estado"			=> ucfirst(mb_strtolower(utf8_encode($fila["ESTADO"]))),
						"con_id" 			=> ucfirst(mb_strtolower(utf8_encode($fila["CON_ID"])))
					);//end array
					$i++;
				}
			}
			return $data;
		}

		function SP_OBTENER_REGISTRO_OBSERVACION_TTO($bd){
			$i=0;
			$data = Array();
			$sql = "CALL SP_OBTENER_ATENCION({$this->getCentro()},{$this->getCarpeta()})";
			$resultado = mysqli_query($bd,$sql);
			$count=mysqli_num_rows($resultado);
			if($count == "0"){
				$data[$i] = Array(
					"data" 	=> "0"
				);
			}else{
				while ($fila = mysqli_fetch_assoc($resultado)){
					$data[$i] = Array(
						"data"    			=> "1",
						"fecha"			 	=> ucfirst(mb_strtolower(utf8_encode($fila["FECHA_INGRESO"]))),
						"rut" 				=> ucfirst(mb_strtolower(utf8_encode($fila["RUT"]))),
						"paciente" 			=> ucfirst(mb_strtolower(utf8_encode($fila["PACIENTE"]))),
						"edad" 				=> ucfirst(mb_strtolower(utf8_encode($fila["EDAD"]))),
						"sexo" 				=> ucfirst(mb_strtolower(utf8_encode($fila["SEXO"]))),
						"motivo" 			=> ucfirst(mb_strtolower(utf8_encode($fila["MOTIVO_CONSULTA"]))),
						"prevision" 		=> ucfirst(mb_strtolower(utf8_encode($fila["PREVISION"]))),
						"firma" 			=> ucfirst(mb_strtolower(utf8_encode($fila["FIRMA"]))),
						"categorizacion"	=> ucfirst(mb_strtolower(utf8_encode($fila["CATEGORIZACION"]))),
						"estado"			=> ucfirst(mb_strtolower(utf8_encode($fila["ESTADO"]))),
						"con_id" 			=> ucfirst(mb_strtolower(utf8_encode($fila["CON_ID"])))
					);//end array
					$i++;
				}
			}
			return $data;
		}

		function SP_OBTENER_REGISTRO_EGRESO($bd){
			$i=0;
			$data = Array();
			$sql = "CALL SP_OBTENER_ATENCION({$this->getCentro()},{$this->getCarpeta()})";
			$resultado = mysqli_query($bd,$sql);
			$count=mysqli_num_rows($resultado);
			if($count == "0"){
				$data[$i] = Array(
					"data" 	=> "0"
				);
			}else{
				while ($fila = mysqli_fetch_assoc($resultado)){
					$data[$i] = Array(
						"data"    			=> "1",
						"fecha"			 	=> ucfirst(mb_strtolower(utf8_encode($fila["FECHA_INGRESO"]))),
						"rut" 				=> ucfirst(mb_strtolower(utf8_encode($fila["RUT"]))),
						"paciente" 			=> ucfirst(mb_strtolower(utf8_encode($fila["PACIENTE"]))),
						"edad" 				=> ucfirst(mb_strtolower(utf8_encode($fila["EDAD"]))),
						"sexo" 				=> ucfirst(mb_strtolower(utf8_encode($fila["SEXO"]))),
						"motivo" 			=> ucfirst(mb_strtolower(utf8_encode($fila["MOTIVO_CONSULTA"]))),
						"prevision" 		=> ucfirst(mb_strtolower(utf8_encode($fila["PREVISION"]))),
						"firma" 			=> ucfirst(mb_strtolower(utf8_encode($fila["FIRMA"]))),
						"categorizacion"	=> ucfirst(mb_strtolower(utf8_encode($fila["CATEGORIZACION"]))),
						"estado"			=> ucfirst(mb_strtolower(utf8_encode($fila["ESTADO"]))),
						"con_id" 			=> ucfirst(mb_strtolower(utf8_encode($fila["CON_ID"])))
					);//end array
					$i++;
				}
			}
			return $data;
		}

		function SP_OBTENER_REGISTRO_DADOS_ALTA($bd){
			$i=0;
			$data = Array();
			$sql = "CALL SP_OBTENER_ATENCION_FINALIZADA({$this->getCentro()},{$this->getCarpeta()},'{$this->getFechaHoy()}',NULL)";
			$resultado = mysqli_query($bd,$sql);
			$count=mysqli_num_rows($resultado);
			if($count == "0"){
				$data[$i] = Array(
					"data" 	=> "0"
				);
			}else{
				while ($fila = mysqli_fetch_assoc($resultado)){
					$data[$i] = Array(
						"data"    			=> "1",
						"FECHA_INGRESO" 		=> ucfirst(mb_strtolower(utf8_encode($fila["FECHA_INGRESO"]))),
						"RUT"			 		=> ucfirst(mb_strtolower(utf8_encode($fila["RUT"]))),
						"PACIENTE" 				=> ucfirst(mb_strtolower(utf8_encode($fila["PACIENTE"]))),
						"EDAD" 					=> ucfirst(mb_strtolower(utf8_encode($fila["EDAD"]))),
						"SEXO" 					=> ucfirst(mb_strtolower(utf8_encode($fila["SEXO"]))),
						"MOTIVO_CONSULTA" 		=> ucfirst(mb_strtolower(utf8_encode($fila["MOTIVO_CONSULTA"]))),
						"CENTRO" 				=> ucfirst(utf8_encode($fila["CENTRO"])),
						"PREVISION" 			=> ucfirst(mb_strtolower(utf8_encode($fila["PREVISION"]))),
						"FIRMA" 				=> ucfirst(mb_strtolower(utf8_encode($fila["FIRMA"]))),
						"OBSERVACION" 			=> ucfirst(mb_strtolower(utf8_encode($fila["OBSERVACION_NSP"]))),
						"CON_ID" 				=> ucfirst(mb_strtolower(utf8_encode($fila["CON_ID"])))
					);//end array
					$i++;
				}
			}
			return $data;
		}	

		function SP_OBTENER_REGISTRO_CANCELADAS($bd){
			$i=0;
			$data = Array();
			$sql = "CALL SP_OBTENER_ATENCION_FINALIZADA({$this->getCentro()},{$this->getCarpeta()},'{$this->getFechaHoy()}',NULL)";
			$resultado = mysqli_query($bd,$sql);
			$count=mysqli_num_rows($resultado);
			if($count == "0"){
				$data[$i] = Array(
					"data" 	=> "0"
				);
			}else{
				while ($fila = mysqli_fetch_assoc($resultado)){
					$data[$i] = Array(
						"data"    				=> "1",
						"FECHA_INGRESO" 		=> ucfirst(mb_strtolower(utf8_encode($fila["FECHA_INGRESO"]))),
						"RUT"			 		=> ucfirst(mb_strtolower(utf8_encode($fila["RUT"]))),
						"PACIENTE" 				=> ucfirst(mb_strtolower(utf8_encode($fila["PACIENTE"]))),
						"EDAD" 					=> ucfirst(mb_strtolower(utf8_encode($fila["EDAD"]))),
						"SEXO" 					=> ucfirst(mb_strtolower(utf8_encode($fila["SEXO"]))),
						"MOTIVO_CONSULTA" 		=> ucfirst(mb_strtolower(utf8_encode($fila["MOTIVO_CONSULTA"]))),
						"CENTRO" 				=> ucfirst(utf8_encode($fila["CENTRO"])),
						"PREVISION" 			=> ucfirst(mb_strtolower(utf8_encode($fila["PREVISION"]))),
						"FIRMA" 				=> ucfirst(mb_strtolower(utf8_encode($fila["FIRMA"]))),
						"MOTIVO_CANCELADO"		=> ucfirst(mb_strtolower(utf8_encode($fila["MOTIVO_CANCELADO"]))),
						"OBSERVACION" 			=> ucfirst(mb_strtolower(utf8_encode($fila["OBSERVACION_NSP"]))),
						"CON_ID" 				=> ucfirst(mb_strtolower(utf8_encode($fila["CON_ID"])))
					);//end array
					$i++;
				}
			}
			return $data;
		}


		//SP QUE OBTIENE LA CONSULTA DE LAS ATENCIONES FINALIZADAS (DAU)
		function SP_OBTENER_CONSULTA_DAU($bd){
			$i=0;
			$data = Array();
			$sql = "CALL SP_CONSULTA_DAU({$this->getFechaHoy()},{$this->getRutPac()})";
			$resultado = mysqli_query($bd,$sql);
			$count=mysqli_num_rows($resultado);
			if($count == "0"){
				$data[$i] = Array(
					"data" 	=> "0"
				);
			}else{
				while ($fila = mysqli_fetch_assoc($resultado)){
					$data[$i] = Array(
						"data"    			=> "1",
						"FECHA_INGRESO" 		=> ucfirst(mb_strtolower(utf8_encode($fila["FECHA_INGRESO"]))),
						"FECHA_ALTA"	 		=> ucfirst(mb_strtolower(utf8_encode($fila["FECHA_ALTA"]))),
						"RUT"			 		=> ucfirst(mb_strtolower(utf8_encode($fila["RUT"]))),
						"PACIENTE" 				=> ucfirst(mb_strtolower(utf8_encode($fila["PACIENTE"]))),
						"EDAD" 					=> ucfirst(mb_strtolower(utf8_encode($fila["EDAD"]))),
						"SEXO" 					=> ucfirst(mb_strtolower(utf8_encode($fila["SEXO"]))),
						"MOTIVO_CONSULTA" 		=> ucfirst(mb_strtolower(utf8_encode($fila["MOTIVO_CONSULTA"]))),
						"CENTRO" 				=> ucfirst(utf8_encode($fila["CENTRO"])),
						"NACIONALIDAD" 			=> ucfirst(mb_strtolower(utf8_encode($fila["NACIONALIDAD"]))),
						"COMUNA" 				=> ucfirst(mb_strtolower(utf8_encode($fila["COMUNA"]))),
						"PREVISION" 			=> ucfirst(mb_strtolower(utf8_encode($fila["PREVISION"]))),
						"FIRMA" 				=> ucfirst(mb_strtolower(utf8_encode($fila["FIRMA"]))),
						"OBSERVACION" 			=> ucfirst(mb_strtolower(utf8_encode($fila["OBSERVACION_NSP"]))),
						"CON_ID" 				=> ucfirst(mb_strtolower(utf8_encode($fila["CON_ID"])))
					);//end array
					$i++;
				}
			}
			return $data;
		}	

/******************************  OBTIENE LOS DATOS DEL PACIENTE  *****************************************/

/*********** INICIO METODO QUE ACTUALIZA EL ESTADO DE LOS PACIENTES DE BLOQUEADO A DESBLOQUEADO DEPENDIENDO DEL CASO ********************/
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
/*********** FIN METODO QUE ACTUALIZA EL ESTADO DE LOS PACIENTES DE BLOQUEADO A DESBLOQUEADO DEPENDIENDO DEL CASO ********************/

/******************************  INICIO OBTIENE LAS ATENCIONES FINALIZADAS TANTO ALTA COMO CANCELADAS  *****************************************/
		function SP_OBTENER_ATENCION_FINALIZADA_DAODS_ALTA($bd){
			$i=0;
			$data = Array();
			$fechaSalida = $this->getFechaCreacion();
			$rutPaciente = $this->getRutPac();
			if ($fechaSalida === "NULL" && $rutPaciente  !== "NULL") {
				$sql = "CALL SP_OBTENER_ATENCION_FINALIZADA({$this->getCentro()},{$this->getCarpeta()},NULL,'{$this->getRutPac()}')";
			}else
				if ($fechaSalida !== "NULL" && $rutPaciente  === "NULL") {
					$sql = "CALL SP_OBTENER_ATENCION_FINALIZADA({$this->getCentro()},{$this->getCarpeta()},'{$this->getFechaCreacion()}',NULL)";
				}else{
					$sql = "CALL SP_OBTENER_ATENCION_FINALIZADA({$this->getCentro()},{$this->getCarpeta()},'{$this->getFechaCreacion()}','{$this->getRutPac()}')";
				}

			$resultado = mysqli_query($bd,$sql);
			$count=mysqli_num_rows($resultado);
			if($count == "0"){
				$data[$i] = Array(
					"data" 	=> "0"
				);
			}else{
				while ($fila = mysqli_fetch_assoc($resultado)){
					$data[$i] = Array(
						"data"    				=> "1",
						"FECHA_INGRESO" 		=> ucfirst(mb_strtolower(utf8_encode($fila["FECHA_INGRESO"]))),
						"RUT"			 		=> ucfirst(mb_strtolower(utf8_encode($fila["RUT"]))),
						"PACIENTE" 				=> ucfirst(mb_strtolower(utf8_encode($fila["PACIENTE"]))),
						"EDAD" 					=> ucfirst(mb_strtolower(utf8_encode($fila["EDAD"]))),
						"SEXO" 					=> ucfirst(mb_strtolower(utf8_encode($fila["SEXO"]))),
						"MOTIVO_CONSULTA" 		=> ucfirst(mb_strtolower(utf8_encode($fila["MOTIVO_CONSULTA"]))),
						"CENTRO" 				=> ucfirst(utf8_encode($fila["CENTRO"])),
						"PREVISION" 			=> ucfirst(mb_strtolower(utf8_encode($fila["PREVISION"]))),
						"FIRMA" 				=> ucfirst(mb_strtolower(utf8_encode($fila["FIRMA"]))),
						"OBSERVACION_NSP" 		=> ucfirst(mb_strtolower(utf8_encode($fila["OBSERVACION_NSP"]))),
						"CON_ID" 				=> ucfirst(mb_strtolower(utf8_encode($fila["CON_ID"])))
					);//end array

					$i++;
				}
			}
			return $data;
		}

		function SP_OBTENER_ATENCION_FINALIZADA_CANCELADOS($bd){
			$i=0;
			$data = Array();
			$fechaSalida = $this->getFechaCreacion();
			$rutPaciente = $this->getRutPac();
			if ($fechaSalida === "NULL" && $rutPaciente  !== "NULL") {
				//$sql = "CALL SP_OBTENER_ATENCION_FINALIZADA({$this->getCarpeta()},NULL,'{$this->getRutPac()}')";
				$sql = "CALL SP_OBTENER_ATENCION_FINALIZADA({$this->getCentro()},{$this->getCarpeta()},NULL,'{$this->getRutPac()}')";
			}else
				if ($fechaSalida !== "NULL" && $rutPaciente  === "NULL") {
					//$sql = "CALL SP_OBTENER_ATENCION_FINALIZADA({$this->getCarpeta()},'{$this->getFechaCreacion()}',NULL)";
					$sql = "CALL SP_OBTENER_ATENCION_FINALIZADA({$this->getCentro()},{$this->getCarpeta()},'{$this->getFechaCreacion()}',NULL)";
				}else{
					//$sql = "CALL SP_OBTENER_ATENCION_FINALIZADA({$this->getCarpeta()},'{$this->getFechaCreacion()}','{$this->getRutPac()}')";
					$sql = "CALL SP_OBTENER_ATENCION_FINALIZADA({$this->getCentro()},{$this->getCarpeta()},'{$this->getFechaCreacion()}','{$this->getRutPac()}')";
				}

			$resultado = mysqli_query($bd,$sql);
			$count=mysqli_num_rows($resultado);
			if($count == "0"){
				$data[$i] = Array(
					"data" 	=> "0"
				);
			}else{
				while ($fila = mysqli_fetch_assoc($resultado)){
					$data[$i] = Array(
						"data"    				=> "1",
						"FECHA_INGRESO" 		=> ucfirst(mb_strtolower(utf8_encode($fila["FECHA_INGRESO"]))),
						"RUT"			 		=> ucfirst(mb_strtolower(utf8_encode($fila["RUT"]))),
						"PACIENTE" 				=> ucfirst(mb_strtolower(utf8_encode($fila["PACIENTE"]))),
						"EDAD" 					=> ucfirst(mb_strtolower(utf8_encode($fila["EDAD"]))),
						"SEXO" 					=> ucfirst(mb_strtolower(utf8_encode($fila["SEXO"]))),
						"MOTIVO_CONSULTA" 		=> ucfirst(mb_strtolower(utf8_encode($fila["MOTIVO_CONSULTA"]))),
						"CENTRO" 				=> ucfirst(mb_strtolower(utf8_encode($fila["CENTRO"]))),
						"PREVISION" 			=> ucfirst(mb_strtolower(utf8_encode($fila["PREVISION"]))),
						"FIRMA" 				=> ucfirst(mb_strtolower(utf8_encode($fila["FIRMA"]))),
						"MOTIVO_CANCELADO"		=> ucfirst(mb_strtolower(utf8_encode($fila["MOTIVO_CANCELADO"]))),
						"OBSERVACION" 			=> ucfirst(mb_strtolower(utf8_encode($fila["OBSERVACION_NSP"]))),
						"CON_ID" 				=> ucfirst(mb_strtolower(utf8_encode($fila["CON_ID"])))
					);//end array
					$i++;
				}
			}
			return $data;
		}
/****************************** FIN OBTIENE LAS ATENCIONES FINALIZADAS TANTO ALTA COMO CANCELADAS  *********************************************/

	}//END PRINCIPAL CLASS
?>
