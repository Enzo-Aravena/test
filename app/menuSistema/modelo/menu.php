<?php

class Menu{
	private $usuario;
	private $pacId;
		private $perId;
		private $estado;
		private $conId;
		private $fechaIngreso;
		private $fechaSalida;
		private $centro;
		private $carpeta;
		private $fechaHoy;
		private $observacion;

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

	public function getUsuario(){
		return $this->usuario;
	}

	public function setUsuario($usuario){
		$this->usuario = $usuario;
	}

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

	public function getObservacion(){
		return $this->observacion;
	}

	public function setObservacion($observacion){
		return $this->observacion = $observacion;
	}

	public function menuUsuario($bd){
		$i=0;
		$data = Array();
		$sql="call redirectToMenu";
		$sql.= "('{$this->getUsuario()}')";
		$resultado = mysqli_query($bd,$sql);
		$count = mysqli_num_rows($resultado);
		if ($count == "0") {
			$data[0] = array(
				"data" =>"0"
			);
		}else{
			while ($fila = mysqli_fetch_row($resultado)) {
				$data[$i] = Array(
					"data" 		=> "1",
					"nombre"    => $fila[0],
					"url" 		=> $fila[1],
					"imagen"    => $fila[2]
				);//end array
			$i++;
			}//end while
		}//fin else
		return $data;
	}
	
	/*********** INICIO METODO QUE ACTUALIZA EL ESTADO DE LOS PACIENTES DE BLOQUEADO A DESBLOQUEADO DEPENDIENDO DEL CASO ********************/
		function obteneryActualizarEstadoPaciente($bd){
			$i=0;
			$data = Array();
			//$sql = "CALL SP_UPDATE_ESTADO_CON({$this->getEstado()},{$this->getConId()},{$this->getCarpeta()},'{$this->getFechaHoy()}','{$this->getPerId()}')";
			$sql = "CALL SP_UPDATE_ESTADO_CON_RESP({$this->getEstado()},{$this->getConId()},{$this->getCarpeta()},'{$this->getFechaHoy()}','{$this->getPerId()}',{$this->getObservacion()})";
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
					"RUT" =>utf8_encode($fila[0]),
					"PASAPORTE" =>utf8_encode($fila[1]),
					"NOMBRE" =>utf8_encode($fila[2]),
					"APELLIDO_PATERNO" =>utf8_encode($fila[3]),
					"APELLIDO_MATERNO" =>utf8_encode($fila[4]),
					"FECHA_NACIMIENTO" =>utf8_encode($fila[5]),
					"NOMBRE_PROFESIONAL" =>utf8_encode($fila[6]),
					"ULTIMA_ATENCION" =>utf8_encode($fila[7]),
					"CON_ID" =>utf8_encode($fila[8])
				);//end array
				$i++;
			}
		}
		return $data;
	}//EN FUNCTION


}


?>