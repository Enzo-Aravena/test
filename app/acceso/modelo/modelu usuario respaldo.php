<?php
class Usuario{
	private $id;
	private $usuario;
	private $idPerfil;
	private $rut;
	private $estado;
	private $fechaCreacion;
	private $ultimoAcceso;
	private $cargo;
	private $nombreProfesional;
	
	public function getId(){
		return $this->id;
	}
	
	public function setId($id){
		$this->id = $id;
	}
	
	public function getUsuario(){
		return $this->usuario;
	}
	
	public function setUsuario($usuario){
		$this->usuario = $usuario;
	}
	
	public function getIdPerfil(){
		return $this->idPerfil;
	}
	
	public function setIdPerfil($idPerfil){
		$this->idPerfil = $idPerfil;
	}
	
	public function geRut(){
		return $this->rut;
	}
		
	public function setRut($rut){
		$this->rut = $rut;
	}
	
	public function getEstado(){
		return $this->estado;
	}
	
	public function setEstado($estado){
		$this->estado = $estado;
	}
	
	public function getFechaCreacion(){
		return $this->fechaCreacion;
	}
	
	public function setFechaCreacion($fechaCreacion){
		$this->fechaCreacion = $fechaCreacion;
	}
	
	public function getUltimoAcceso(){
		return $this->ultimoAcceso;
	}
	
	public function setUltimoAcceso($ultimoAcceso){
		$this->ultimoAcceso = $ultimoAcceso;
	}

	public function getCargo(){
		return $this->cargo;
	}
	
	public function setCargo($cargo){
		$this->cargo = $cargo;
	}
	

	public function getNombreProfesional(){
		return $this->nombreProfesional;
	}
	
	public function setNombreProfesional($nombreProfesional){
		$this->nombreProfesional = $nombreProfesional;
	}


	function obtenerNombreUsuario($bd){
		$i=0;
		$data = Array();
		$sql = "call BuscarDatosPersonales ";
		$sql .= "('{$this->getUsuario()}')";
		$res = mysqli_query($bd,$sql);
		$count=mysqli_num_rows($res);
		if($count == "0"){
			$data = Array(
				"data" 	=> "0"
			);
		}else{
			while ($fila = mysqli_fetch_row($res)){
				$data[$i] = Array(
					"data"    	=> "1",
					"nombre"    => utf8_encode($fila[0]),
					"perfil"    => utf8_encode($fila[1]),
					"sexo"    	=> utf8_encode($fila[2]),
					"centro"    => utf8_encode($fila[3]),
					"clave"    	=> utf8_encode($fila[4]),
					"permisos"  => $fila[5]
				);//end array
				$i++;
			}
		}
		return $data;
	}

	public function BuscarUsuario($bd){
		$data = "";
		$sql = "call buscarUsuario ";
		$sql .= "('{$this->getUsuario()}')";
		$res = mysqli_query($bd,$sql);
		$count=mysqli_num_rows($res);
		if($count == "0"){
			$data = Array(
				"data" 			=> "0",
				"contrasena" 	=> "0"
			);
		}else{
			while ($fila = mysqli_fetch_row($res)){
				$data = Array(
					"data" 			=> "1",
					"contrasena" 	=> $fila[0],
					"estado" 	=> $fila[1]
				);
			}
		}
		return $data;
	}
	
	public function BuscarDatosPersonales($bd){
		$data = "";
		$sql = "call BuscarDatosPersonales ";
		$sql .= "('{$this->getUsuario()}')";
		$res = mysqli_query($bd,$sql);
		$count=mysqli_num_rows($res);
		if($count == "0"){
			$data = Array(
				"data" 		=> "0",
				"nombre" 	=> "0",
				"perfil"	=> "0",
				"sexo"	 	=> "0",
				"centro"	=> "0"
			);
		}else{
			while ($fila = mysqli_fetch_row($res)){
				$data = Array(
					"data" 		=> "1",
					"nombre" 	=> $fila[0],
					"perfil" 	=> $fila[1],
					"sexo"	 	=> $fila[2],
					"centro"	=> $fila[3],
					"clave"	=> $fila[4]
				);
			}
		}
		return $data;
	}	

	public function IngresoLogUsuario($bd){
		$data = "";
		$sql = "CALL db_pagina_rc.logusuariosingresados('{$this->getUsuario()}', '{$this->getNombreProfesional()}', '{$this->getCargo()}')";
		$resultado = mysqli_query($bd,$sql);
		return $resultado;
	}
}
?>
