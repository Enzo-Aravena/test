<?php
	date_default_timezone_set('America/Santiago');
	session_start();
	set_time_limit(300);
	header('Content-Type: text/html; charset=UTF-8');
	require_once ("../../../../lib/conexion/conexion.php");
	require_once("../../modelo/modeloAtencion.php");
	//SE AÑADE EL MODELO DEL DESBLOQUEO PACIENTE
	require_once("../../modelo/modeloDesblPaciente.php");
	$desbloqueo = new desbloqueoPaciente();

	if (!isset($_SESSION['username'])) {
		$data["sesion"] = "-1";// LA SESION MURIO

		echo json_encode($data);
		
	}else{
		$bd = new Conexion();
		$modelo = new atencion();
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

			case 'cargarMotivo':
				$data = $modelo->OBTENER_LISTA_MOTIVO_NSP($conn);
				if ($data[0]["data"] == "0") {
					echo "0";
				}else{
					echo json_encode($data);
				}
			break;

			case 'cargarListaGes':
				$data = $modelo->OBTENER_LISTA_DIAGNOSTICO_GES($conn);
				if ($data[0]["data"] == "0") {
					echo "0";
				}else{
					echo json_encode($data);
				}

				/*$data = '[{"data":"1","CODIGO":"1","NOMBRE":"IRA BAJA < 5 AÑOS"},{"data":"1","CODIGO":"2","NOMBRE":"NEUMONIA > 65 AÑOS"},{"data":"1","CODIGO":"3","NOMBRE":"OTRO"}]';
				echo $data;*/
			break;

			case 'buscar':
				$conId = $_REQUEST['conId'];
				$carpeta  = 3;
				$modelo->setConId($conId);
				$modelo->setCarpeta($carpeta);
				$data = $modelo->SP_OBTENER_ANTECEDENTES($conn);
				if ($data[0]["data"] == "0") {
					echo "0";
				}else{
					echo json_encode($data);
				}
			break;

			case 'obtenerAtencionesAnteriores':
				$rut = $_REQUEST['rut'];
				$dni = $_REQUEST['dni'];
				$modelo->setRutPac($rut);
				$modelo->setDniPac($dni);
				$data = $modelo->SP_OBTENER_PAC_HISTORIAL($conn);
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
			break;
			
			case 'ingresarAtencionPaciente':
				$conId = $_REQUEST['conId'];
				$horaIngresoPantalla = $_REQUEST['horaIngresoPantalla'];
				$fechaYHoraPantalla = $_REQUEST['fechaYHoraPantalla'];
				$pronMedicoLegal = $_REQUEST['pronMedicoLegal'];
				$Alcoholemia = $_REQUEST['Alcoholemia'];
				$nFrasco = $_REQUEST['nFrasco'];
				$Anamnesis = utf8_decode($_REQUEST['Anamnesis']);
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
				$sospDiagnostica =utf8_decode($_REQUEST['sospDiagnostica']);
				$ind1 = utf8_decode($_REQUEST['ind1']);
				$ind2 = utf8_decode($_REQUEST['ind2']);
				$ind3 = utf8_decode($_REQUEST['ind3']);
				$radiografia = $_REQUEST['radiografia'];
				$detRadio = utf8_decode($_REQUEST['detRadio']);
				$ExamenSangre = $_REQUEST['ExamenSangre'];
				$detExSangre = utf8_decode($_REQUEST['detExSangre']);
				$ecg = $_REQUEST['ecg'];
				$perId = $_REQUEST['perId'];
				$fechaSalida = date('Y-m-d H:i:s');
				$RequiereTratamiento = $_REQUEST["RequiereTratamiento"];

				//NUEVOS CAMPOS PARA LA ATENCION DEL PACIENTE
				$requiereConstLesion = $_REQUEST["requiereConstLesion"];
				$examenFisicoConst = $_REQUEST["examenFisicoConst"];
				$imagenConst = $_REQUEST["imagenConst"];
				$exLabConst = $_REQUEST["exLabConst"];
				$otrosConst = $_REQUEST["otrosConst"];
				$origenLesionRelatoLesionado = utf8_decode($_REQUEST["origenLesionRelatoLesionado"]);
				$origenLesionClinica = utf8_decode($_REQUEST["origenLesionClinica"]);
				$diasLesion = $_REQUEST["diasLesion"];
				$vieneAcompanado = $_REQUEST["vieneAcompanado"];
				$nombreAcompLesionado = utf8_decode($_REQUEST["nombreAcompLesionado"]);
				$CalidadAcompLesionado = utf8_decode($_REQUEST["CalidadAcompLesionado"]);

				$ObtenerListaind1 = $_REQUEST["ObtenerListaind1"];
				$ObtenerListaind2 = $_REQUEST["ObtenerListaind2"];
				$ObtenerListaind3 = $_REQUEST["ObtenerListaind3"];
				$esPacienteGes = $_REQUEST["esPacienteGes"];
				$diagnosGes = $_REQUEST["diagnosGes"];

				//VALIDACION NUEVOS CHECKBOX DE LA CONSTATACION DE LESIONES
				if($examenFisicoConst === "false"){ $examenFisicoConst = "NULL"; }else{ $examenFisicoConst = 1;}
				if($imagenConst === "false"){ $imagenConst = "NULL"; }else{ $imagenConst = 1;}
				if($exLabConst === "false"){ $exLabConst = "NULL"; }else{ $exLabConst = 1;}
				if($otrosConst === "false"){ $otrosConst = "NULL"; }else{ $otrosConst = 1;}


				if($nFrasco === ""){$nFrasco = "NULL";}else{$nFrasco = $nFrasco;}
				if($Alcoholemia === "false"){$Alcoholemia = "NULL";}else{$Alcoholemia = 1;}
				if($radiografia === "false"){$radiografia = "NULL";}else{$radiografia = 1;}
				if($ExamenSangre === "false"){$ExamenSangre = "NULL";}else{$ExamenSangre = 1;}
				if($ecg === "false"){$ecg = "NULL";}else{$ecg = 1;}
				if($pronMedicoLegal === "0"){$pronMedicoLegal = "NULL";	}else{$pronMedicoLegal = $pronMedicoLegal;}

				//NUEVOS CAMPOS GES E INDICACIONES SELECT BOX = $esPacienteGes
				if($esPacienteGes === "false"){$esPacienteGes = "NULL";}else{$esPacienteGes = 1;}
				if($diagnosGes === "0"){$diagnosGes = "NULL";	}else{$diagnosGes = $diagnosGes;}
				if($ObtenerListaind1 === "0"){$ObtenerListaind1 = "NULL";	}else{$ObtenerListaind1 = $ObtenerListaind1;}
				if($ObtenerListaind2 === "0"){$ObtenerListaind2 = "NULL";	}else{$ObtenerListaind2 = $ObtenerListaind2;}
				if($ObtenerListaind3 === "0"){$ObtenerListaind3 = "NULL";	}else{$ObtenerListaind3 = $ObtenerListaind3;}


				$carpeta = 3;
				$nombreCampos = "PRONOSTICO_MEDICO"."|"."ALCOHOLEMIA"."|"."N_FRASCO"."|"."ANAMNESIS"."|"."CABEZA"."|"."CABEZA_TEXTO"."|"."TORAX"."|"."TORAX_TEXTO"."|"."ABDOMEN"."|"."ABDOMEN_TEXTO"."|"."PELVIS"."|"."PELVIS_TEXTO"."|"."EXT_SUPERIORES"."|"."EXT_SUPERIORES_TEXTO"."|"."EXT_INFERIORES"."|"."EXT_INFERIORES_TEXTO"."|"."EX_NEUROLOGICO"."|"."EX_NEUROLOGICO_TEXTO"."|"."SOSPECHA_DIAGNOSTICO"."|"."TRATAMIENTO_1_IND_1"."|"."TRATAMIENTO_1_IND_2"."|"."TRATAMIENTO_1_IND_3"."|"."RADIOGRAFIA"."|"."RADIOGRAFIA_TEXTO"."|"."EXAMEN_SANGRE"."|"."EXAMEN_SANGRE_TEXTO"."|"."ECG"."|"."REQUIERE_TRATAMIENTO"."|"."CONSTATACION_LESIONES"."|"."EXAMEN_FISICO"."|"."IMAGENOLOGIA"."|"."EXAMENES_LABORATORIOS"."|"."OTROS"."|"."ORIGEN_LESION"."|"."APRECIACION_CLINICA"."|"."LESIONADO_DIAS"."|"."LESIONADO_ACOMPANADO"."|"."NOMBRE_ACOMPANANTE"."|"."CALIDAD_ACOMPANANTE"."|"."NOTIFICACION_GES"."|"."DIAGNOTICO_GES"."|"."TRATAMIENTO_1_IND_1_PROCEDIMIENTO"."|"."TRATAMIENTO_1_IND_2_PROCEDIMIENTO"."|"."TRATAMIENTO_1_IND_3_PROCEDIMIENTO"."|";

				$valorCampos = $pronMedicoLegal."|".$Alcoholemia."|".$nFrasco."|".$Anamnesis."|".$cabeza."|".$detCabeza."|".$torax."|".$detTorax."|".$abdomen."|".$detAbdomen."|".$pelvis."|".$detPelvis."|".$extSuperiores."|".$detExtSup."|".$extInferiores."|".$detExtInf."|".$exNeurologico."|".$detExamNeuro."|".$sospDiagnostica."|".$ind1."|".$ind2."|".$ind3."|".$radiografia."|".$detRadio."|".$ExamenSangre."|".$detExSangre."|".$ecg."|".$RequiereTratamiento."|".$requiereConstLesion."|".$examenFisicoConst."|".$imagenConst."|".$exLabConst."|".$otrosConst."|".$origenLesionRelatoLesionado."|".$origenLesionClinica."|".$diasLesion."|".$vieneAcompanado."|".$nombreAcompLesionado."|".$CalidadAcompLesionado."|".$esPacienteGes."|".$diagnosGes."|".$ObtenerListaind1."|".$ObtenerListaind2."|".$ObtenerListaind3."|";

				/*echo $nombreCampos."</br>";
				echo $valorCampos;*/

			$modelo->setConId($conId);
				$modelo->setPerId($perId);
				$modelo->setCarpeta($carpeta);
				$modelo->setFechaIngreso($fechaYHoraPantalla);
				$modelo->setFechaSalida($fechaSalida);
				$modelo->setNombreCampos($nombreCampos);
				$modelo->setValorCampos($valorCampos);
				$data = $modelo->SP_INSERTAR_ATENCION_PACIENTE($conn);
				//echo json_encode($data);
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
			case 'registrarAtencionParaEgreso':
				$conId = $_REQUEST['conId']; // isset($_REQUEST['conId']) ? $_REQUEST['conId'] : "";  //$_REQUEST['conId'];
				$horaIngresoPantalla = $_REQUEST['horaIngresoPantalla'];
				$fechaYHoraPantalla = $_REQUEST['fechaYHoraPantalla'];
				$pronMedicoLegal = $_REQUEST['pronMedicoLegal'];
				$Alcoholemia = $_REQUEST['Alcoholemia'];
				$nFrasco = $_REQUEST['nFrasco'];
				$Anamnesis = utf8_decode($_REQUEST['Anamnesis']);
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
				$sospDiagnostica =utf8_decode($_REQUEST['sospDiagnostica']);
				$ind1 = utf8_decode($_REQUEST['ind1']);
				$ind2 = utf8_decode($_REQUEST['ind2']);
				$ind3 = utf8_decode($_REQUEST['ind3']);
				$radiografia = $_REQUEST['radiografia'];
				$detRadio = utf8_decode($_REQUEST['detRadio']);
				$ExamenSangre = $_REQUEST['ExamenSangre'];
				$detExSangre = utf8_decode($_REQUEST['detExSangre']);
				$ecg = $_REQUEST['ecg'];
				$perId = $_REQUEST['perId'];
				$fechaSalida = date('Y-m-d H:i:s');
				$RequiereTratamiento = $_REQUEST["RequiereTratamiento"];

				//NUEVOS CAMPOS PARA LA ATENCION DEL PACIENTE
				$requiereConstLesion = $_REQUEST["requiereConstLesion"];
				$examenFisicoConst = $_REQUEST["examenFisicoConst"];
				$imagenConst = $_REQUEST["imagenConst"];
				$exLabConst = $_REQUEST["exLabConst"];
				$otrosConst = $_REQUEST["otrosConst"];
				$origenLesionRelatoLesionado = utf8_decode($_REQUEST["origenLesionRelatoLesionado"]);
				$origenLesionClinica = utf8_decode($_REQUEST["origenLesionClinica"]);
				$diasLesion = $_REQUEST["diasLesion"];
				$vieneAcompanado = $_REQUEST["vieneAcompanado"];
				$nombreAcompLesionado = utf8_decode($_REQUEST["nombreAcompLesionado"]);
				$CalidadAcompLesionado = utf8_decode($_REQUEST["CalidadAcompLesionado"]);

				$ObtenerListaind1 = $_REQUEST["ObtenerListaind1"];
				$ObtenerListaind2 = $_REQUEST["ObtenerListaind2"];
				$ObtenerListaind3 = $_REQUEST["ObtenerListaind3"];
				$esPacienteGes = $_REQUEST["esPacienteGes"];
				$diagnosGes = $_REQUEST["diagnosGes"];


				//DATOS COMPLETOS PARA EL EGRESO DEL PACIENTE
				$diagnostico = utf8_decode($_REQUEST['diagnostico']);
				$EvolucionObsMed = utf8_decode($_REQUEST['EvolucionObsMed']);
				$tipoAlta = $_REQUEST['tipoAlta'];
				$centroDerivacion = $_REQUEST['centroDerivacion'];
				$grupoDiagnostico = $_REQUEST['grupoDiagnostico'];
				$CatFinal = $_REQUEST['CatFinal'];
				$horaCatEgreso = "";
				$EgresoInd = utf8_decode($_REQUEST['EgresoInd']);
				$sospechaAuge = "";
				$sospechaSaludAuge = "";
				$subproblemaAuge = "";
				$subproblemaAuge_text = "";
				$especialidad = utf8_decode($_REQUEST['especialidad']);
				$confirmacioDiagnostica = $_REQUEST['confirmacioDiagnostica'];
				$realizarTto = $_REQUEST['realizarTto'];
				$Seguimiento = $_REQUEST['Seguimiento'];
				$otraConsulta = $_REQUEST['otraConsulta'];
				$consultaTextoEspecificar = utf8_decode($_REQUEST['consultaTextoEspecificar']);


				//VALIDACION NUEVOS CHECKBOX DE LA CONSTATACION DE LESIONES
				if($examenFisicoConst === "false"){ $examenFisicoConst = "NULL"; }else{ $examenFisicoConst = 1;}
				if($imagenConst === "false"){ $imagenConst = "NULL"; }else{ $imagenConst = 1;}
				if($exLabConst === "false"){ $exLabConst = "NULL"; }else{ $exLabConst = 1;}
				if($otrosConst === "false"){ $otrosConst = "NULL"; }else{ $otrosConst = 1;}


				if($nFrasco === ""){$nFrasco = "NULL";}else{$nFrasco = $nFrasco;}
				if($Alcoholemia === "false"){$Alcoholemia = "NULL";}else{$Alcoholemia = 1;}
				if($radiografia === "false"){$radiografia = "NULL";}else{$radiografia = 1;}
				if($ExamenSangre === "false"){$ExamenSangre = "NULL";}else{$ExamenSangre = 1;}
				if($ecg === "false"){$ecg = "NULL";}else{$ecg = 1;}
				if($pronMedicoLegal === "0"){$pronMedicoLegal = "NULL";	}else{$pronMedicoLegal = $pronMedicoLegal;}

				//NUEVOS CAMPOS GES E INDICACIONES SELECT BOX = $esPacienteGes
				if($esPacienteGes === "false"){$esPacienteGes = "NULL";}else{$esPacienteGes = 1;}
				if($diagnosGes === "0"){$diagnosGes = "NULL";	}else{$diagnosGes = $diagnosGes;}
				if($ObtenerListaind1 === "0"){$ObtenerListaind1 = "NULL";	}else{$ObtenerListaind1 = $ObtenerListaind1;}
				if($ObtenerListaind2 === "0"){$ObtenerListaind2 = "NULL";	}else{$ObtenerListaind2 = $ObtenerListaind2;}
				if($ObtenerListaind3 === "0"){$ObtenerListaind3 = "NULL";	}else{$ObtenerListaind3 = $ObtenerListaind3;}
				
				//VALIDACION NUEVOS CHECKBOX DE LA CONSTATACION DE LESIONES
				if($examenFisicoConst === "false"){ $examenFisicoConst = "NULL"; }else{ $examenFisicoConst = 1;}
				if($imagenConst === "false"){ $imagenConst = "NULL"; }else{ $imagenConst = 1;}
				if($exLabConst === "false"){ $exLabConst = "NULL"; }else{ $exLabConst = 1;}
				if($otrosConst === "false"){ $otrosConst = "NULL"; }else{ $otrosConst = 1;}

				//VALIDACIONES CAMPOS CHECKBOX NUEVOS DE EGRESO
				if($confirmacioDiagnostica === "false"){$confirmacioDiagnostica = "NULL";}else{$confirmacioDiagnostica= 1;}
				if($realizarTto === "false"){$realizarTto = "NULL";}else{$realizarTto= 1;}
				if($Seguimiento === "false"){$Seguimiento = "NULL";}else{$Seguimiento= 1;}
				if($otraConsulta === "false"){$otraConsulta = "NULL";}else{$otraConsulta= 1;}
				if ($centroDerivacion === "0") { $centroDerivacion = 'NULL'; }else{$centroDerivacion=$centroDerivacion;}


				$carpeta = 3;
				$nombreCampos = "PRONOSTICO_MEDICO"."|"."ALCOHOLEMIA"."|"."N_FRASCO"."|"."ANAMNESIS"."|"."CABEZA"."|"."CABEZA_TEXTO"."|"."TORAX"."|"."TORAX_TEXTO"."|"."ABDOMEN"."|"."ABDOMEN_TEXTO"."|"."PELVIS"."|"."PELVIS_TEXTO"."|"."EXT_SUPERIORES"."|"."EXT_SUPERIORES_TEXTO"."|"."EXT_INFERIORES"."|"."EXT_INFERIORES_TEXTO"."|"."EX_NEUROLOGICO"."|"."EX_NEUROLOGICO_TEXTO"."|"."SOSPECHA_DIAGNOSTICO"."|"."TRATAMIENTO_1_IND_1"."|"."TRATAMIENTO_1_IND_2"."|"."TRATAMIENTO_1_IND_3"."|"."RADIOGRAFIA"."|"."RADIOGRAFIA_TEXTO"."|"."EXAMEN_SANGRE"."|"."EXAMEN_SANGRE_TEXTO"."|"."ECG"."|"."REQUIERE_TRATAMIENTO"."|"."CONSTATACION_LESIONES"."|"."EXAMEN_FISICO"."|"."IMAGENOLOGIA"."|"."EXAMENES_LABORATORIOS"."|"."OTROS"."|"."ORIGEN_LESION"."|"."APRECIACION_CLINICA"."|"."LESIONADO_DIAS"."|"."LESIONADO_ACOMPANADO"."|"."NOMBRE_ACOMPANANTE"."|"."CALIDAD_ACOMPANANTE"."|"."NOTIFICACION_GES"."|"."DIAGNOTICO_GES"."|"."TRATAMIENTO_1_IND_1_PROCEDIMIENTO"."|"."TRATAMIENTO_1_IND_2_PROCEDIMIENTO"."|"."TRATAMIENTO_1_IND_3_PROCEDIMIENTO"."|";
				$valorCampos = $pronMedicoLegal."|".$Alcoholemia."|".$nFrasco."|".$Anamnesis."|".$cabeza."|".$detCabeza."|".$torax."|".$detTorax."|".$abdomen."|".$detAbdomen."|".$pelvis."|".$detPelvis."|".$extSuperiores."|".$detExtSup."|".$extInferiores."|".$detExtInf."|".$exNeurologico."|".$detExamNeuro."|".$sospDiagnostica."|".$ind1."|".$ind2."|".$ind3."|".$radiografia."|".$detRadio."|".$ExamenSangre."|".$detExSangre."|".$ecg."|".$RequiereTratamiento."|".$requiereConstLesion."|".$examenFisicoConst."|".$imagenConst."|".$exLabConst."|".$otrosConst."|".$origenLesionRelatoLesionado."|".$origenLesionClinica."|".$diasLesion."|".$vieneAcompanado."|".$nombreAcompLesionado."|".$CalidadAcompLesionado."|".$esPacienteGes."|".$diagnosGes."|".$ObtenerListaind1."|".$ObtenerListaind2."|".$ObtenerListaind3."|";
				
					$modelo->setConId($conId);
					$modelo->setPerId($perId);
					$modelo->setCarpeta($carpeta);
					$modelo->setFechaIngreso($fechaYHoraPantalla);
					$modelo->setFechaSalida($fechaSalida);
					$modelo->setNombreCampos($nombreCampos);
					$modelo->setValorCampos($valorCampos);
					$data = $modelo->SP_INSERTAR_ATENCION_PACIENTE($conn);
					//echo json_encode($data);
					//$data[0] = Array("data" 	=> "true");
					//SI ES ERROR
					if ($data[0]["data"] == "false") {
						echo json_encode($data);
					} else {
							//echo json_encode($data);
							$carpetaEgreso = 5;
							$nombreCampos = "DIAGNOSTICO_EGRESO"."|"."EVOLUCION_OBSERVACION"."|"."TIPO_EGRESO"."|"."CENTRO_DERIVACION"."|"."GRUPO_DIAGNOSTICO_DEIS"."|"."CATEGORIZACION_EGRESO"."|"."HORA_CATEGORIZACION_EGRESO"."|"."INDICACIONES_RECETA"."|"."SOSPECHA_AUGE"."|"."SOSPECHA_AUGE_TEXTO"."|"."SUBPROBLEMA_AUGE_TEXTO"."|"."ESPECIALIDAD"."|"."CONFIRMAR_DIAGNOSTICO"."|"."REALIZAR_TTO"."|"."SEGUIMIENTO"."|"."OTRA_CONSULTA"."|"."OTRA_CONSULTA_TEXTO"."|";

							$valorCampos = $diagnostico."|".$EvolucionObsMed."|".$tipoAlta."|".$centroDerivacion."|".$grupoDiagnostico."|".$CatFinal."|".$horaCatEgreso."|".$EgresoInd."|".$sospechaAuge."|".$sospechaSaludAuge."|".$subproblemaAuge."|".$especialidad."|".$confirmacioDiagnostica."|".$realizarTto."|".$Seguimiento."|".$otraConsulta."|".$consultaTextoEspecificar."|";

							$bd->Desconectar();
							$conn = $bd->Conectar();

							$modelo->setConId($conId);
							$modelo->setPerId($perId);
							$modelo->setCarpeta($carpetaEgreso);
							$modelo->setFechaIngreso($fechaYHoraPantalla);
							$modelo->setFechaSalida($fechaSalida);
							$modelo->setNombreCampos($nombreCampos);
							$modelo->setValorCampos($valorCampos);
							$data = $modelo->SP_INSERTAR_ALTA_EGRESO($conn);

							//echo json_encode($data);

							if ($data[0]["data"] == "0") {
								$data[0] = Array("data" 	=> "false");
								//echo json_encode($data);
								echo "2";
							}else{
								echo json_encode($data);
							}
					}
					
					
					/*if ($data[0]["data"] == "false") {
						$data[0] = Array("data" 	=> "false");
						echo json_encode($data);
					//	echo "no paso ";
					}else{100558
						//echo "Paso al 5";
						echo json_encode($data);

							/*$carpetaEgreso = 5;
							$nombreCampos = "DIAGNOSTICO_EGRESO"."|"."EVOLUCION_OBSERVACION"."|"."TIPO_EGRESO"."|"."CENTRO_DERIVACION"."|"."GRUPO_DIAGNOSTICO_DEIS"."|"."CATEGORIZACION_EGRESO"."|"."HORA_CATEGORIZACION_EGRESO"."|"."INDICACIONES_RECETA"."|"."SOSPECHA_AUGE"."|"."SOSPECHA_AUGE_TEXTO"."|"."SUBPROBLEMA_AUGE_TEXTO"."|"."ESPECIALIDAD"."|"."CONFIRMAR_DIAGNOSTICO"."|"."REALIZAR_TTO"."|"."SEGUIMIENTO"."|"."OTRA_CONSULTA"."|"."OTRA_CONSULTA_TEXTO"."|";

							$valorCampos = $diagnostico."|".$EvolucionObsMed."|".$tipoAlta."|".$centroDerivacion."|".$grupoDiagnostico."|".$CatFinal."|".$horaCatEgreso."|".$EgresoInd."|".$sospechaAuge."|".$sospechaSaludAuge."|".$subproblemaAuge."|".$especialidad."|".$confirmacioDiagnostica."|".$realizarTto."|".$Seguimiento."|".$otraConsulta."|".$consultaTextoEspecificar."|";

							$bd->Desconectar();
							$conn = $bd->Conectar();

							$modelo->setConId($conId);
							$modelo->setPerId($perId);
							$modelo->setCarpeta($carpetaEgreso);
							$modelo->setFechaIngreso($fechaYHoraPantalla);
							$modelo->setFechaSalida($fechaSalida);
							$modelo->setNombreCampos($nombreCampos);
							$modelo->setValorCampos($valorCampos);
							$data = $modelo->SP_INSERTAR_ALTA_EGRESO($conn);
							if ($data[0]["data"] == "0") {
								echo "0";
							}else{
								echo json_encode($data);
							}*/
					//}
			break;
			default:
				echo "No se ha podido realizar ninguna acción";
			break;
		}// END SWITCH

	}
?>