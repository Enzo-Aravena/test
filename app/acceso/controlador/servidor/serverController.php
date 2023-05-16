<?php

header("Content-Type: text/html;charset=utf-8");
require_once("../../../../lib/conexion/conexionDb_Pagina.php");
require_once("../../../../lib/WebServices/lib/nusoap.php");
require_once("../../modelo/usuario.php");

$bd = new Conexion();
$modelo = new Usuario();
$conn = $bd->Conectar();
$evento = $_REQUEST["evento"];
switch($evento){
	case "login":
		$contraseña = "";
		$estado = "";
		//$user = base64_decode(utf8_encode($_REQUEST["usuario"]);
		//$user = utf8_encode(base64_decode($_REQUEST["usuario"]));
		$user = $_REQUEST["usuario"];
		$pass = $_REQUEST["contrasena"];
		$clave = base64_encode(sha1($pass, true));
		$modelo->setUsuario($user);
		$data = $modelo->obtenerDetalleUser($conn);
		//print_r($data);
		//echo json_encode($data);
		if ($data[0]["data"] == "0") {
			echo "0";
		}else{
			if ($pass !== "") {
				foreach($data as $clavees => $valor){
					$contraseña = $valor['clave'];
					$estado = $valor['estado'];
				}
				if ($clave === $contraseña) {
					if ($estado == 0) {
						echo "1";
					}else{
						echo "3";
					}
				}else{
					echo "2";
				}
			}else{
				echo "5";
			}	
		}
	break;
	
	case "logout":
		header("Location: ../../../index.php");
	break;
	
	default:
		print("Error");
	break;
}

?>