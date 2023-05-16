<?php
	session_start();
	header('Content-Type: text/html; charset=UTF-8');
	date_default_timezone_set('America/Santiago');
	require_once("../../../../lib/conexion/conexion.php");
	require_once("../../modelo/modeloDesblPaciente.php");
	$bd = new Conexion();
	$modelo = new desbloqueoPaciente();
	$conn = $bd->Conectar();
	$GLOBALS["users"]= "";
	$GLOBALS["pacRegister"] = "";
	$evento = $_REQUEST["evento"];

	switch ($evento) {
		case 'cargarCentros':
			$data = $modelo->SP_OBTENER_CENTRO($conn);
			if ($data[0]["data"] == "0") {
				echo "0";
			}else{
				echo json_encode($data);
			}
		break;

		case 'retornaHora':
			$data = $modelo->OBTENER_FECHA_BASE($conn);
			if ($data[0]["data"] == "0") {
				echo "0";
			}else{
				echo json_encode($data);
			}
		break;

		case 'obtenerPacienteParaDesbloqueo':
			$centro = $_REQUEST['centro'];
			$modelo->setCentro($centro);
			$data = $modelo->obtenerPacienteParaDesbloqueo($conn);
			echo json_encode($data);

			//cuerpo de prueba
			/*$data[0] = Array(
				"data" => "1",
				"RUT_PASAPORTE" => "1-9",
				"NOMBRE" => "PRUEBA",
				"APELLIDO_PATERNO" => "PRUEBA",
				"APELLIDO_MATERNO" => "PRUEBA",
				"FECHA_NACIMIENTO" => "18/02/1994",
				"NOMBRE_PROFESIONAL" => "PROFESIONAL PRUEBA",
				"ULTIMA_ATENCION" => "13/05/2021",
				"CAR_ID" => "2",
				"CON_ID" => "1"
			);//end array

			echo json_encode($data);*/
		break;

		case 'obtenerEstadoPacientes':
			$conId = $_REQUEST['conId'];
			$bloqueo = $_REQUEST['bloqueo'];
			$fechaHora = $_REQUEST['fechaHora'];
			$perId = $_REQUEST['perId'];
			$carId = $_REQUEST['carId'];
			$fechaSalida = date('Y-m-d H:i:s');
			$ultimaAtencion = $_REQUEST["ultimaAtencion"];
			$motivo = $_REQUEST["motivo"];
			$tipoAtencion = "";
			if ($carId !== "") {
				switch ($carId) {
					case '1':	$tipoAtencion = "ADMISION";  break;
					case '2':	$tipoAtencion = "TRIAGE";  break;
					case '3':	$tipoAtencion = "ATENCION";  break;
					case '4':	$tipoAtencion = "OBSERVACION Y TTO";  break;
				}
				//VALIDACION E INGRESO DE LOS DATOS PARA DESBLOQUEO
				$modelo->setEstado($bloqueo);
				$modelo->setConId($conId);
				$modelo->setCarpeta($carId);
				$modelo->setFechaHoy($fechaHora);
				$modelo->setPerId($perId);
				$modelo->setObservacion("'".$motivo."'");
				$data = $modelo->obteneryActualizarEstadoPaciente($conn);
				//echo utf8_decode($data) ;
				if ($data[0]["data"] == "true") {
					echo "0";
				}else{
					echo "1";
				}
			}else{
				echo "0";
			}
			//echo "Id carpeta: ".$carId. ", nombre: ".$ultimaAtencion. ", fecha: ".$fechaHora. ", con_id: ".$conId;
		break;

		default: print_r("No se ha podido realizar ninguna accion");break;
	}

	function bisiesto($anio_actual){
          $bisiesto=false;
          //probamos si el mes de febrero del año actual tiene 29 días
            if (checkdate(2,29,$anio_actual))
            {
              $bisiesto=true;
          }
          return $bisiesto;
      }


?>


