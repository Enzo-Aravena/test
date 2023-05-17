<?php
	session_start();
	header('Content-Type: text/html; charset=UTF-8');
	require_once("../../../../lib/conexion/conexion.php");
	require_once("../../modelo/modeloSeleccion.php");

	if (!isset($_SESSION['username'])) {
		$data["sesion"] = "-1";// LA SESION MURIO
		echo json_encode($data);
	}else{
		$bd = new Conexion();
		$modelo = new seleccion();
		$conn = $bd->Conectar();
		$GLOBALS["users"]= "";
		$GLOBALS["pacRegister"] = "";
		$evento = $_REQUEST["evento"];
		$tieneAccesoDesbloqueo = $_SESSION["accesoDsbl"];

		switch ($evento) {
			case 'cargarCentros':
				$data = $modelo->SP_OBTENER_CENTRO($conn);
				$tabla ="";
				$aux = 0;
				if ($data[0]["data"] == "0") {
					echo "2";
				}else{
					$tabla = $tabla.'<table class="table table-bordered">';
					$tabla = $tabla.'<thead>';
					$tabla = $tabla.'	<th class="hidden-xs" style="background: #194569;color: white;" colspan="2"> Centro Atención </th>';
					$tabla = $tabla.'</thead>';
					$tabla = $tabla.'<tbody id="centroAtencionPac">';
					foreach($data as $clave => $valor){
						$tabla = $tabla.'<tr>';
						$tabla = $tabla.'	<td> <a class="most" style="cursor:pointer;" id="idRedirec'.$aux.'"> <input type = "hidden" name= "conf" class="Seleccion" value="'.$valor["CODIGO"].'">'.$valor["NOMBRE"].'</a></td>';
						$tabla = $tabla.'	<td> <a class="most" style="cursor:pointer;" id="idRedirec'.$aux.'"> <input type = "hidden" name= "conf" class="Seleccion" value="'.$valor["CODIGO"].'"> <u> Ingresar a centro </u> </a></td>';
						$tabla = $tabla.'</tr>';
						$aux = $aux+1;
					}

					if($tieneAccesoDesbloqueo === "1"){
						$tabla = $tabla.'<tr>';
						$tabla = $tabla.'	<td><a href="../../contenido/vista/desbloqueoPacientes.php" style="cursor:pointer;"> DESBLOQUEO PACIENTES </a></td>';
						$tabla = $tabla.'	<td><a href="../../contenido/vista/desbloqueoPacientes.php" style="cursor:pointer;"> <u> Ingresar </u> </a></td>';
						$tabla = $tabla.'</tr>';
					}

					$tabla = $tabla.'</tbody>';
					$tabla = $tabla.'</table>';
					echo $tabla;
				}
			break;
			default: print_r("No se ha podido realizar ninguna accion");break;
		}
	}


	

?>