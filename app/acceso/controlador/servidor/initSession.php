<?php
//INNIT SESION
session_start();

//ini_set("session.cookie_lifetime","2700"); // 45 minutos = 2700; 1 hora =  3600
require_once("../../../../lib/conexion/conexionDb_Pagina.php");
require_once("../../modelo/usuario.php");

		$bd = new Conexion();
		$modelo = new usuario();
		$conn = $bd->Conectar();
		$user = $_REQUEST["username"];
		$modelo->setUsuario($user);
		$data = $modelo->obtenerNombreUsuario($conn);
		//echo json_encode($data);
		if ($data[0]["data"] == "0") {
			echo "0";
		}else{
			foreach($data as $clave => $valor){
				$_SESSION["nombre"]		= $valor['nombre'];
				$_SESSION["perfil"]		= $valor['perfil'];
				$_SESSION["sexo"]	 	= $valor['sexo'];
				$_SESSION["centro"] 	= $valor['centro'];
				$_SESSION["clave"] 		= $valor['clave'];
				$_SESSION["permisos"] 	= $valor['permisos'];
				$_SESSION["firma"] 		= $valor['firma'];
				$_SESSION["rut"] 		= $valor['rut'];
				$_SESSION["perId"] 		= $valor['perId'];
				$_SESSION['username'] 	= $user;
				$_SESSION["accesoDsbl"] = $valor['accesoDsbl'];
			}//END FOREACH

			header("Location: ../../../menuSistema/vista/menusistema.php");
		}




//obtenerNombreUsuario

/*require_once("../../../../lib/WebServices/lib/nusoap.php");
	$cliente = new nusoap_client("http://infosalud.cormup.cl/CAPSAPU/lib/WebServices/ws_login.php?wsdl");
	//$cliente = new nusoap_client("http://localhost/UrgenciaSapu-V4/lib/WebServices/ws_login.php?wsdl");
	$datUuario = $_GET['username'];
	$parameter = array('nombre'=> $datUuario);
	$datos = $cliente->call('obtenerNombreUsuario',$parameter);
	$data =json_decode($datos);

	foreach ($data as $fila) {
		$nombre = $fila->nombre;
		$perf = $fila->perfil;
		$sexo = $fila->sexo;
		$cent = $fila->centro;
		$test = $fila->clave;
		$permisoUser = $fila->permisos;
		$firmaUser = $fila->firma;
		$rutPaciente = $fila->rut;
		$perId = $fila->perId;
	}	

	$_SESSION["nombre"]		= $nombre;
	$_SESSION["perfil"]		= $perf;
	$_SESSION["sexo"]	 	= $sexo;
	$_SESSION["centro"] 	= $cent;
	$_SESSION["clave"] 		= $test;
	$_SESSION['username'] 	= $datUuario;
	$_SESSION["permisos"] 	= $permisoUser;
	$_SESSION["firma"] 		= $firmaUser;
	$_SESSION["rut"] 		= $rutPaciente;
	$_SESSION["perId"] 		= $perId;
	header("Location: ../../../menuSistema/vista/menusistema.php");*/
?>
