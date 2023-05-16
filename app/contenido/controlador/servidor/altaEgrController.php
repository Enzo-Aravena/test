<?php
	session_start();
	date_default_timezone_set('America/Santiago');
	header('Content-Type: text/html; charset=UTF-8');
	set_time_limit(300);
	require_once ("../../../../lib/conexion/conexion.php");
	require_once("../../modelo/modeloAltaEgreso.php");
	//SE AÑADE EL MODELO DEL DESBLOQUEO PACIENTE
	require_once("../../modelo/modeloDesblPaciente.php");
	$desbloqueo = new desbloqueoPaciente();

	if (!isset($_SESSION['username'])) {
		$data["sesion"] = "-1";// LA SESION MURIO
		echo json_encode($data);
	}else{
		$bd = new Conexion();
		$modelo = new altaEgreso();
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
			
			case 'cargarPronostico':
				$data = $modelo->SP_OBTENER_PRONOSTICO_LEGAL($conn);
				if ($data[0]["data"] == "0") {
					echo "0";
				}else{
					echo json_encode($data);
				}
			break;

			case 'cargarTipoAltaEgreso':
				$data = $modelo->SP_OBTENER_TIPO_ALTA_EGRESO($conn);
				if ($data[0]["data"] == "0") {
					echo "0";
				}else{
					echo json_encode($data);
				}
			break;

			case 'cargarCentroDerivacion':
				$data = $modelo->SP_OBTENER_CENTRO_DERIVACION($conn);
				if ($data[0]["data"] == "0") {
					echo "0";
				}else{
					echo json_encode($data);
				}
			break;

			case 'cargarGrupoDiagnostico':
				$data = $modelo->SP_OBTENER_GRUPO_DIAGNOSTICO($conn);
				if ($data[0]["data"] == "0") {
					echo "0";
				}else{
					echo json_encode($data);
				}
			break;

			case 'buscar':
				$conId = $_REQUEST['conId'];
				$carpeta  = 5;
				$modelo->setConId($conId);
				$modelo->setCarpeta($carpeta);
				$data = $modelo->SP_OBTENER_ANTECEDENTES($conn);
				if ($data[0]["data"] == "0") {
					echo "0";
				}else{
					echo json_encode($data);
				}
			break;

			case 'ingresarAlta':
				$conId = $_REQUEST['conId'];
				$fechaYHoraPantalla = $_REQUEST['fechaYHoraPantalla'];
				$cabeza = $_REQUEST['cabeza'];
				$detCabeza = utf8_decode($_REQUEST['detCabeza']);
				$torax = $_REQUEST['torax'];
				$detTorax = utf8_decode($_REQUEST['detTorax']);
				$abdomen = $_REQUEST['abdomen'];
				$detAbdomen =utf8_decode( $_REQUEST['detAbdomen']);
				$pelvis = $_REQUEST['pelvis'];
				$detPelvis = utf8_decode($_REQUEST['detPelvis']);
				$extSuperiores = $_REQUEST['extSuperiores'];
				$detExtSup = utf8_decode($_REQUEST['detExtSup']);
				$extInferiores = $_REQUEST['extInferiores'];
				$detExtInf = utf8_decode($_REQUEST['detExtInf']);
				$exNeurologico = $_REQUEST['exNeurologico'];
				$detExamNeuro =utf8_decode($_REQUEST['detExamNeuro']);
				$diagnostico = utf8_decode($_REQUEST['diagnostico']);
				$EvolucionObsMed = utf8_decode($_REQUEST['EvolucionObsMed']);
				$radiografia = utf8_decode($_REQUEST['radiografia']);
				$detRadio = utf8_decode($_REQUEST['detRadio']);
				$ExamenSangre = $_REQUEST['ExamenSangre'];
				$detExSangre = utf8_decode($_REQUEST['detExSangre']);
				$ecg = $_REQUEST['ecg'];
				$detECG = utf8_decode($_REQUEST['detECG']);
				$tipoAlta = $_REQUEST['tipoAlta'];
				$centroDerivacion = $_REQUEST['centroDerivacion'];
				$grupoDiagnostico = $_REQUEST['grupoDiagnostico'];
				$CatFinal = $_REQUEST['CatFinal'];
				$horaCatEgreso = date('Y-m-d H:i:s');
				$fcDos = $_REQUEST['fcDos'];
				$frDos = $_REQUEST['frDos'];
				$tempAxDos = $_REQUEST['tempAxDos'];
				$satODos = $_REQUEST['satODos'];
				$psDos = $_REQUEST['psDos'];
				$pdDos = $_REQUEST['pdDos'];
				$hgtDos = $_REQUEST['hgtDos'];
				$eEvaDos = $_REQUEST['eEvaDos'];
				$eglasgowDos = $_REQUEST['eglasgowDos'];
				$EgresoInd = utf8_decode($_REQUEST['EgresoInd']);
				$perId = $_REQUEST['perId'];
				$fechaSalida = date('Y-m-d H:i:s');

				$sospechaAuge = $_REQUEST["sospechaAuge"];
				$sospechaSaludAuge = utf8_decode($_REQUEST["sospechaSaludAuge"]);
				$subproblemaAuge = utf8_decode($_REQUEST["subproblemaAuge"]);

				$especialidad = utf8_decode($_REQUEST['especialidad']);
				$confirmacioDiagnostica = $_REQUEST['confirmacioDiagnostica'];
				$realizarTto = $_REQUEST['realizarTto'];
				$Seguimiento = $_REQUEST['Seguimiento'];
				$otraConsulta = $_REQUEST['otraConsulta'];
				$consultaTextoEspecificar = utf8_decode($_REQUEST['consultaTextoEspecificar']);

				if($radiografia === "false"){$radiografia = "NULL";}else{$radiografia = 1;}
				if($ExamenSangre === "false"){$ExamenSangre = "NULL";}else{$ExamenSangre = 1;}
				if($ecg === "false"){$ecg = "NULL";}else{$ecg = 1;}

				if ($centroDerivacion === "0") { $centroDerivacion = 'NULL'; }else{$centroDerivacion=$centroDerivacion;}

				//VALIDACIONES CAMPOS CHECKBOX NUEVOS DE EGRESO
				if($confirmacioDiagnostica === "false"){$confirmacioDiagnostica = "NULL";}else{$confirmacioDiagnostica= 1;}
				if($realizarTto === "false"){$realizarTto = "NULL";}else{$realizarTto= 1;}
				if($Seguimiento === "false"){$Seguimiento = "NULL";}else{$Seguimiento= 1;}
				if($otraConsulta === "false"){$otraConsulta = "NULL";}else{$otraConsulta= 1;}
				
				$carpeta = 5;
				$nombreCampos = "CABEZA"."|"."CABEZA_TEXTO"."|"."TORAX"."|"."TORAX_TEXTO"."|"."ABDOMEN"."|"."ABDOMEN_TEXTO"."|"."PELVIS"."|"."PELVIS_TEXTO"."|"."EXT_SUPERIORES"."|"."EXT_SUPERIORES_TEXTO"."|"."EXT_INFERIORES"."|"."EXT_INFERIORES_TEXTO"."|"."EX_NEUROLOGICO"."|"."EX_NEUROLOGICO_TEXTO"."|"."DIAGNOSTICO_EGRESO"."|"."EVOLUCION_OBSERVACION"."|"."RESULTADO_RADIOGRAFIA"."|"."RESULTADO_RADIOGRAFIA_TEXTO"."|"."RESULTADO_EXAMEN_SANGRE"."|"."RESULTADO_EXAMEN_SANGRE_TEXTO"."|"."RESULTADO_ECG"."|"."RESULTADO_ECG_TEXTO"."|"."TIPO_EGRESO"."|"."CENTRO_DERIVACION"."|"."GRUPO_DIAGNOSTICO_DEIS"."|"."CATEGORIZACION_EGRESO"."|"."HORA_CATEGORIZACION_EGRESO"."|"."FC"."|"."FR"."|"."T_AUX"."|"."SAT_02"."|"."PA_SISTOLICA"."|"."PA_DIASTOLICA"."|"."HGT"."|"."E_EVA"."|"."E_GLASGOW"."|"."INDICACIONES_RECETA"."|"."SOSPECHA_AUGE"."|"."SOSPECHA_AUGE_TEXTO"."|"."SUBPROBLEMA_AUGE_TEXTO"."|"."ESPECIALIDAD"."|"."CONFIRMAR_DIAGNOSTICO"."|"."REALIZAR_TTO"."|"."SEGUIMIENTO"."|"."OTRA_CONSULTA"."|"."OTRA_CONSULTA_TEXTO"."|";

				$valorCampos = $cabeza."|".$detCabeza."|".$torax."|".$detTorax."|".$abdomen."|".$detAbdomen."|".$pelvis."|".$detPelvis."|".$extSuperiores."|".$detExtSup."|".$extInferiores."|".$detExtInf."|".$exNeurologico."|".$detExamNeuro."|".$diagnostico."|".$EvolucionObsMed."|".$radiografia."|".$detRadio."|".$ExamenSangre."|".$detExSangre."|".$ecg."|".$detECG."|".$tipoAlta."|".$centroDerivacion."|".$grupoDiagnostico."|".$CatFinal."|".$horaCatEgreso."|".$fcDos."|".$frDos."|".$tempAxDos."|".$satODos."|".$psDos."|".$pdDos."|".$hgtDos."|".$eEvaDos."|".$eglasgowDos."|".$EgresoInd."|".$sospechaAuge."|".$sospechaSaludAuge."|".$subproblemaAuge."|".$especialidad."|".$confirmacioDiagnostica."|".$realizarTto."|".$Seguimiento."|".$otraConsulta."|".$consultaTextoEspecificar."|";
				

				$modelo->setConId($conId);
				$modelo->setPerId($perId);
				$modelo->setCarpeta($carpeta);
				$modelo->setFechaIngreso($fechaYHoraPantalla);
				$modelo->setFechaSalida($fechaSalida);
				$modelo->setNombreCampos($nombreCampos);			
				$modelo->setValorCampos($valorCampos);
				$data = $modelo->SP_INSERTAR_ALTA_EGRESO($conn);
				if ($data[0]["data"] == "0") {
					echo "0";
				}else{
					echo json_encode($data);
				}
				//$data[0] = Array("data" 	=> "false");
				//echo json_encode($data);
			break;
			case 'obtenerEstadoPacientes':
				$conId = $_REQUEST['conId'];
				$bloqueo = 2;
				$fechaHora = $_REQUEST['fechaHora'];
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

			case 'cargarMotivo':
				$data = $modelo->OBTENER_LISTA_MOTIVO_NSP($conn);
				if ($data[0]["data"] == "0") {
					echo "0";
				}else{
					echo json_encode($data);
				}
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
			
			default:
				echo "Error";
			break;
		}
	}
?>