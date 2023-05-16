<?php
	date_default_timezone_set('America/Santiago');
	session_start();
	set_time_limit(300);
	header('Content-Type: text/html; charset=UTF-8');
	require_once ("../../../../lib/conexion/conexion.php");
	require_once("../../modelo/modeloTriage.php");
	//SE AÑADE EL MODELO DEL DESBLOQUEO PACIENTE
	require_once("../../modelo/modeloDesblPaciente.php");
	$desbloqueo = new desbloqueoPaciente();

	if (!isset($_SESSION['username'])) {
		$data["sesion"] = "-1";// LA SESION MURIO
		echo json_encode($data);
	}else{
		$bd = new Conexion();
		$modelo = new triage();
		$conn = $bd->Conectar();		
		$evento = $_REQUEST["evento"];

		switch ($evento) {

			case 'retornaHora':
				$data = $modelo->OBTENER_FECHA_BASE($conn);
				if ($data[0]["data"] == "0") {
					echo "0";
				}else{
					echo json_encode($data);
				}
			break;

			case 'buscar':
				$conId = $_REQUEST['conId'];
				$carpeta  = 2;
				$modelo->setConId($conId);
				$modelo->setCarpeta($carpeta);
				$data = $modelo->SP_OBTENER_ANTECEDENTES($conn);
				if ($data[0]["data"] == "0") {
					echo "0";
				}else{
					echo json_encode($data);
				}
			break;

			case 'cargarMotivo':
				$data = $modelo->OBTENER_LISTA_MOTIVO_NSP($conn);
				if ($data[0]["data"] == "0") {
					echo "0";
				}else{
					echo json_encode($data);
				}
			break;

			case 'registrarTriage':
				$conId = $_REQUEST['conId'];
				$fechaYHoraPantalla = $_REQUEST['fechaYHoraPantalla'];
				$fc = $_REQUEST['fc'];
				$fr = $_REQUEST['fr'];
				$tempAx = $_REQUEST['tempAx'];
				$satO = $_REQUEST['satO'];
				$ps = $_REQUEST['ps'];
				$pd = $_REQUEST['pd'];
				$hgt = $_REQUEST['hgt'];
				$eEva = $_REQUEST['eEva'];
				$eglasgow = $_REQUEST['eglasgow'];
				$HTA = $_REQUEST['HTA'];
				$DM2 = $_REQUEST['DM2'];
				$EPOC = $_REQUEST['EPOC'];
				$ASMA = $_REQUEST['ASMA'];
				$IRC = $_REQUEST['IRC'];
				$DHC = $_REQUEST['DHC'];
				$OTRAS = $_REQUEST['OTRAS'];
				$otrosEcDescrip = utf8_decode($_REQUEST['otrosEcDescrip']);
				$alergias = utf8_decode($_REQUEST['alergias']);
				$categorizacion = $_REQUEST['categorizacion'];
				$horaCat = $_REQUEST['horaCat'];
				$perId = $_REQUEST['perId'];
				$fechaSalida = date('Y-m-d H:i:s');

				$peso = $_REQUEST['peso'];


				if($fc === ""){$fc ="NULL"; }else{$fc=$fc;}
				if($fr === ""){$fr ="NULL"; }else{$fr=$fr;}
				if($tempAx === ""){$tempAx ="NULL"; }else{$tempAx=$tempAx;}
				if($satO === ""){$satO ="NULL"; }else{$satO=$satO;}
				if($ps === ""){$ps ="NULL"; }else{$ps=$ps;}
				if($pd === ""){$pd ="NULL"; }else{$pd=$pd;}
				if($hgt === ""){$hgt ="NULL"; }else{$hgt=$hgt;}
				if($eEva === ""){$eEva ="NULL"; }else{$eEva=$eEva;}
				if($eglasgow === ""){$eglasgow ="NULL"; }else{$eglasgow=$eglasgow;}			
				if($otrosEcDescrip === ""){$otrosEcDescrip ="NULL"; }else{$otrosEcDescrip=$otrosEcDescrip;}
				if($alergias === ""){$alergias ="NULL"; }else{$alergias=$alergias;}
				if($categorizacion === ""){$categorizacion ="NULL"; }else{$categorizacion=$categorizacion;}
				if($horaCat === ""){$horaCat ="NULL"; }else{$horaCat=$horaCat;}

				if($peso === ""){$peso ="NULL"; }else{$peso=$peso;}

				if($HTA === "false"){$HTA = "NULL";}else{$HTA = 1;}
				if($DM2 === "false"){$DM2 = "NULL";}else{$DM2 = 1;}
				if($EPOC === "false"){$EPOC = "NULL";}else{$EPOC = 1;}
				if($ASMA === "false"){$ASMA = "NULL";}else{$ASMA = 1;}
				if($IRC === "false"){$IRC = "NULL";}else{$IRC = 1;}
				if($DHC === "false"){$DHC = "NULL";}else{$DHC = 1;}
				if($OTRAS === "false"){$OTRAS = "NULL";}else{$OTRAS = 1;}

				$carpeta = 2;
				$nombreCampos = "FC"."|"."FR"."|"."T_AUX"."|"."SAT_02"."|"."PA_SISTOLICA"."|"."PA_DIASTOLICA"."|"."HGT"."|"."E_EVA"."|"."E_GLASGOW"."|"."HTA"."|"."DM2"."|"."EPOC"."|"."ASMA"."|"."IRC"."|"."DHC"."|"."OTRA_EC"."|"."OTRA_EC_TEXTO"."|"."ALERGIAS"."|"."CATEGORIZACION"."|"."HORA_CATEGORIZACION"."|"."PESO"."|";
				$valorCampos = $fc."|".$fr."|".$tempAx."|".$satO."|".$ps."|".$pd."|".$hgt."|".$eEva."|".$eglasgow."|".$HTA."|".$DM2."|".$EPOC."|".$ASMA."|".$IRC."|".$DHC."|".$OTRAS."|".$otrosEcDescrip."|".$alergias."|".$categorizacion."|".$horaCat."|".$peso."|";
				
				$modelo->setConId($conId);
				$modelo->setPerId($perId);
				$modelo->setCarpeta($carpeta);
				$modelo->setFechaIngreso($fechaYHoraPantalla);
				$modelo->setFechaSalida($fechaSalida);
				$modelo->setNombreCampos($nombreCampos);			
				$modelo->setValorCampos($valorCampos);
				$data = $modelo->SP_INSERTAR_ATENCION($conn);
				if ($data[0]["data"] == "0") {
					echo "0";
				}else{
					echo json_encode($data);
				}
				/*$data[0] = Array("data" 	=> "true", "fechaEntrada" => $fechaYHoraPantalla , "fechaSalida" => $fechaSalida); //TRUE
				echo json_encode($data);*/
				
			break;


			case 'ingresarNSPPaciente':
				$conId = $_REQUEST['conId'];
				$fechaYHoraPantalla = $_REQUEST['fechaYHoraPantalla'];
				$ObservacionNsp = utf8_decode($_REQUEST['ObservacionNsp']);
				$tipoMotivo = utf8_decode($_REQUEST['tipoMotivo']);

				$perId = $_REQUEST['perId'];
				$fechaSalida = date('Y-m-d H:i:s');
				$carpeta = 7;
				$nombreCampos = "OBSERVACION_NSP"."|"."MOTIVO_CANCELADO"."|";
				$valorCampos = $ObservacionNsp."|".$tipoMotivo."|";
				$modelo->setConId($conId);
				$modelo->setPerId($perId);
				$modelo->setCarpeta($carpeta);
				$modelo->setFechaIngreso($fechaYHoraPantalla);
				$modelo->setFechaSalida($fechaSalida);
				$modelo->setNombreCampos($nombreCampos);
				$modelo->setValorCampos($valorCampos);
				$data = $modelo->SP_INSERTAR_NSP_PACIENTE($conn);
				if ($data[0]["data"] == "0") {
					echo "0";
				}else{
					echo json_encode($data);
				}
				/*$data[0] = Array("data" 	=> "false");
				echo json_encode($data);*/
			break;

			case 'obtenerEstadoPacientes':
				$conId = $_REQUEST['conId'];
				$bloqueo = 2;
				$fechaHora =  date('Y-m-d H:i:s');
				$perId = $_REQUEST['perId'];
				$carId = $_REQUEST['carId'];
				$motivo = "NULL";

				$desbloqueo->setEstado($bloqueo);
				$desbloqueo->setConId($conId);
				$desbloqueo->setCarpeta($carId);
				$desbloqueo->setFechaHoy($fechaHora);
				$desbloqueo->setPerId($perId);
				$desbloqueo->setObservacion($motivo);
				$data = $desbloqueo->obteneryActualizarEstadoPaciente($conn);
				if ($data[0]["data"] == "0") {
					echo "0";
				}else{
					echo json_encode($data);
				}
			break;
				
			default: print_r("No se ha podido realizar ninguna acción");break;
		}
	}	
?>