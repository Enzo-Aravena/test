<?php

	class desbloqueoPaciente{
		private $pacId;
		private $perId;
		private $estado;
		private $conId;
		private $fechaIngreso;
		private $fechaSalida;
		private $centro;
		private $fechaHoy;
		private $carpeta;
		private $rutPac;
		private $ultimaAtencion;
		private $observacion;
		

		// GETTERS AND SETTERS	
		public function getCarpeta(){
			return $this->carpeta;
		}

		public function setCarpeta($carpeta){
			return $this->carpeta = $carpeta;
		}
		
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

		public function getCentro(){
			return $this->centro;
		}

		public function setCentro($centro){
			return $this->centro = $centro;
		}

		public function getRutPac(){
			return $this->rutPac;
		}

		public function setRutPac($rutPac){
			return $this->rutPac = $rutPac;
		}

		
		public function getUltimaAtencion(){
			return $this->ultimaAtencion;
		}

		public function setUltimaAtencion($ultimaAtencion){
			return $this->ultimaAtencion = $ultimaAtencion;
		}

		public function getObservacion(){
			return $this->observacion;
		}

		public function setObservacion($observacion){
			return $this->observacion = $observacion;
		}
/***************************** INICIO FUNCIONES QUE CARGAN LAS LISTAS DE LA APLICACION  *************************************/
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
						"data" 	 => utf8_encode(strtolower($fila[0]))
					);//end array
					$i++;
				}
			}
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
						"CODIGO" => utf8_encode($fila[0]),
						"NOMBRE" => utf8_encode($fila[1])
					); // End Array
					$i++;
				}// end while
			}// end else
			return $data;
		}


	/*********** INICIO METODO QUE ACTUALIZA EL ESTADO DE LOS PACIENTES DE BLOQUEADO A DESBLOQUEADO DEPENDIENDO DEL CASO ********************/
		function obteneryActualizarEstadoPaciente($bd){
			$i=0;
			$data = Array();
			$sql = "CALL SP_UPDATE_ESTADO_CON({$this->getEstado()},{$this->getConId()},{$this->getCarpeta()},'{$this->getFechaHoy()}','{$this->getPerId()}',{$this->getObservacion()})";
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
			//return $sql;
		}
	/*********** FIN METODO QUE ACTUALIZA EL ESTADO DE LOS PACIENTES DE BLOQUEADO A DESBLOQUEADO DEPENDIENDO DEL CASO ********************/
		function obtenerPacienteParaDesbloqueo($bd){
			$i=0;
			$data = Array();
			$sql = "CALL SP_OBTENER_PAC_BLOQUEADO({$this->getCentro()})";
			$resultado = mysqli_query($bd,$sql);
			$count=mysqli_num_rows($resultado);
			if($count == "0"){
				$data[$i] = Array("data" => "0");
			}else{
				while ($fila = mysqli_fetch_row($resultado)){
					$data[$i] = Array(
						"data" => "1",
						"RUT_PASAPORTE" =>utf8_encode($fila[0]),
						"NOMBRE" =>utf8_encode($fila[1]),
						"APELLIDO_PATERNO" =>utf8_encode($fila[2]),
						"APELLIDO_MATERNO" =>utf8_encode($fila[3]),
						"FECHA_NACIMIENTO" =>utf8_encode($fila[4]),
						"NOMBRE_PROFESIONAL" =>utf8_encode($fila[5]),
						"ULTIMA_ATENCION" =>utf8_encode($fila[6]),
						"CAR_ID" =>utf8_encode($fila[7]),
						"CON_ID" =>utf8_encode($fila[8])
					);//end array
					$i++;
				}
			}
			return $data;
		}//EN FUNCTION


	}//END PRINCIPAL CLASS
?>