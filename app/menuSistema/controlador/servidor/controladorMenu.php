<?php
	require_once("../../../../lib/WebServices/lib/nusoap.php");
	header('Content-Type: text/html; charset=UTF-8');
	set_time_limit(300);
	require_once ("../../../../lib/conexion/conexion.php");
	require_once("../../modelo/menu.php");

	$bd = new Conexion();
	$modelo = new Menu();
	$conn = $bd->Conectar();
	$evento = $_REQUEST["evento"];

	switch($evento){
		case "menu":

		$cliente = new nusoap_client("http://infosalud.cormup.cl/CAPSAPU/lib/WebServices/ws_menu.php?wsdl");
	//	$cliente = new nusoap_client("http://localhost/saludCormupV2-Desarrollo/lib/WebServices/ws_menu.php?wsdl");

		$user= $_REQUEST['usuario'];
		$parameter = array('usuario'=> $user);
		$data = $cliente->call('obtenerMenuPrincipal',$parameter);

			if ($data == "[]") {
				echo "0";
			}
			else{
				echo $data;
			}
		break;

		case 'obtenerEstadoPacientes':
			$conId = $_REQUEST['conId'];
			$bloqueo = 2;
			$fechaHora = $_REQUEST['fechaHora'];
			$perId = $_REQUEST['perId'];
			$carId = $_REQUEST['carId'];
			$motivo = "NULL";
			$modelo->setEstado($bloqueo);
			$modelo->setConId($conId);
			$modelo->setCarpeta($carId);
			$modelo->setFechaHoy($fechaHora);
			$modelo->setPerId($perId);
			$modelo->setObservacion($motivo);
			$data = $modelo->obteneryActualizarEstadoPaciente($conn);
			if ($data[0]["data"] == "0") {
				echo "0";
			}else{
				echo json_encode($data);
			}
		break;

		/*case 'obtenerPacienteParaDesbloqueo':
			$centro = $_REQUEST['centro'];
			$modelo->setCentro($centro);
			$data = $modelo->obtenerPacienteParaDesbloqueo($conn);
			echo json_encode($data);
		break;

		case 'obtenerEstadoPacientes':
			$conId = $_REQUEST['conId'];
			$bloqueo = $_REQUEST['bloqueo'];
			$modelo->setEstado($bloqueo);
			$modelo->setConId($conId);
			$data = $modelo->obteneryActualizarEstadoPaciente($conn);
			echo json_encode($data);
		break;

		case 'cambiarEstadoPacientesFor':
			$conId = $_REQUEST['conId'];
			$i=0;
			foreach ($conId as $key ) {
				$sql = "UPDATE CON_CONTACTOS  SET ESTADO = 0 WHERE CON_ID = ".$key."";
				$resultado = mysqli_query($conn,$sql);
			}
			return $resultado;
		break;*/
		
		default:
			print("Error");
		break;
	}


?>