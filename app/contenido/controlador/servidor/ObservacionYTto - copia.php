<?php
	date_default_timezone_set('America/Santiago');
	header('Content-Type: text/html; charset=UTF-8');
	session_start();
	set_time_limit(300);
	require_once ("../../../../lib/conexion/conexion.php");
	require_once("../../modelo/modeloObsyTto.php");

	if (!isset($_SESSION['username'])) {
		$data["sesion"] = "-1";// LA SESION MURIO
		echo json_encode($data);
	}else{
		$bd = new Conexion();
		$modelo = new observacionYTto();
		$conn = $bd->Conectar();
		$evento = $_REQUEST["evento"];

		switch ($evento) {
			case 'buscar': 
				$conId = $_REQUEST['conId'];
				$carpeta  = 4;
				$modelo->setConId($conId);
				$modelo->setCarpeta($carpeta);
				$data = $modelo->SP_OBTENER_ANTECEDENTES($conn);
				if ($data[0]["data"] == "0") {
					echo "0";
				}else{
					echo json_encode($data);
				}
			break;
			case 'ingresarTratamiento': 
				$conId = $_REQUEST['conId'];
				$fechaYHoraPantalla = $_REQUEST['fechaYHoraPantalla'];
				$Realizado1 = $_REQUEST['Realizado1'];
				$Realizado2 = $_REQUEST['Realizado2'];
				$Realizado3 = $_REQUEST['Realizado3'];
				$indDos1 = utf8_decode($_REQUEST['indDos1']);
				$indDos2 = utf8_decode($_REQUEST['indDos2']);
				$indDos3 = utf8_decode($_REQUEST['indDos3']);
				$RealizadoIndDos1 = $_REQUEST['RealizadoIndDos1'];
				$RealizadoIndDos2 = $_REQUEST['RealizadoIndDos2'];
				$RealizadoIndDos3 = $_REQUEST['RealizadoIndDos3'];
				$indTres1 = utf8_decode($_REQUEST['indTres1']);
				$indTres2 = utf8_decode($_REQUEST['indTres2']);
				$indTres3 = utf8_decode($_REQUEST['indTres3']);
				$RealizadoIndTres1 = $_REQUEST['RealizadoIndTres1'];
				$RealizadoIndTres2 = $_REQUEST['RealizadoIndTres2'];
				$RealizadoIndTres3 = $_REQUEST['RealizadoIndTres3'];
				$horaControl1 = $_REQUEST['horaControl1'];
				$horaControl2 = $_REQUEST['horaControl2'];
				$horaControl3 = $_REQUEST['horaControl3'];
				$horaControl4 = $_REQUEST['horaControl4'];
				$horaControl5 = $_REQUEST['horaControl5'];
				$horaControl6 = $_REQUEST['horaControl6'];
				$fcCtr1 = $_REQUEST['fcCtr1'];
				$fcCtr2 = $_REQUEST['fcCtr2'];
				$fcCtr3 = $_REQUEST['fcCtr3'];
				$fcCtr4 = $_REQUEST['fcCtr4'];
				$fcCtr5 = $_REQUEST['fcCtr5'];
				$fcCtr6 = $_REQUEST['fcCtr6'];
				$frCtr1 = $_REQUEST['frCtr1'];
				$frCtr2 = $_REQUEST['frCtr2'];
				$frCtr3 = $_REQUEST['frCtr3'];
				$frCtr4 = $_REQUEST['frCtr4'];
				$frCtr5 = $_REQUEST['frCtr5'];
				$frCtr6 = $_REQUEST['frCtr6'];
				$temAxCtr1 = $_REQUEST['temAxCtr1'];
				$temAxCtr2 = $_REQUEST['temAxCtr2'];
				$temAxCtr3 = $_REQUEST['temAxCtr3'];
				$temAxCtr4 = $_REQUEST['temAxCtr4'];
				$temAxCtr5 = $_REQUEST['temAxCtr5'];
				$temAxCtr6 = $_REQUEST['temAxCtr6'];
				$satOCtr1 = $_REQUEST['satOCtr1'];
				$satOCtr2 = $_REQUEST['satOCtr2'];
				$satOCtr3 = $_REQUEST['satOCtr3'];
				$satOCtr4 = $_REQUEST['satOCtr4'];
				$satOCtr5 = $_REQUEST['satOCtr5'];
				$satOCtr6 = $_REQUEST['satOCtr6'];
				$hgtCtr1 = $_REQUEST['hgtCtr1'];
				$hgtCtr2 = $_REQUEST['hgtCtr2'];
				$hgtCtr3 = $_REQUEST['hgtCtr3'];
				$hgtCtr4 = $_REQUEST['hgtCtr4'];
				$hgtCtr5 = $_REQUEST['hgtCtr5'];
				$hgtCtr6 = $_REQUEST['hgtCtr6'];
				$psCtr1 = $_REQUEST['psCtr1'];
				$psCtr2 = $_REQUEST['psCtr2'];
				$psCtr3 = $_REQUEST['psCtr3'];
				$psCtr4 = $_REQUEST['psCtr4'];
				$psCtr5 = $_REQUEST['psCtr5'];
				$psCtr6 = $_REQUEST['psCtr6'];
				$pdCtr1 = $_REQUEST['pdCtr1'];
				$pdCtr2 = $_REQUEST['pdCtr2'];
				$pdCtr3 = $_REQUEST['pdCtr3'];
				$pdCtr4 = $_REQUEST['pdCtr4'];
				$pdCtr5 = $_REQUEST['pdCtr5'];
				$pdCtr6 = $_REQUEST['pdCtr6'];
				$eGlsCrt1 = $_REQUEST['eGlsCrt1'];
				$eGlsCrt2 = $_REQUEST['eGlsCrt2'];
				$eGlsCrt3 = $_REQUEST['eGlsCrt3'];
				$eGlsCrt4 = $_REQUEST['eGlsCrt4'];
				$eGlsCrt5 = $_REQUEST['eGlsCrt5'];
				$eGlsCrt6 = $_REQUEST['eGlsCrt6'];
				$evaCtr1 = $_REQUEST['evaCtr1'];
				$evaCtr2 = $_REQUEST['evaCtr2'];
				$evaCtr3 = $_REQUEST['evaCtr3'];
				$evaCtr4 = $_REQUEST['evaCtr4'];
				$evaCtr5 = $_REQUEST['evaCtr5'];
				$evaCtr6 = $_REQUEST['evaCtr6'];
				$ObservacionesTto = utf8_decode($_REQUEST['ObservacionesTto']);
				$perId = $_REQUEST['perId'];
				$fechaSalida = $_REQUEST['fechaSalida'];

				/*======================================= INICIO VALIDACIONES DE CAMPOS NUMERICOS =============================================*/
					if($fcCtr2 !== "" || $frCtr2 !== "" || $temAxCtr2 !== "" || $satOCtr2 !== "" || $hgtCtr2 !== "" || $psCtr2 !== "" || $pdCtr2 !== "" || $eGlsCrt2 !== "" || $evaCtr2 !== ""){
						$horaControl2 = date('H:i:s');
					}else{
						$horaControl2 = "";
					}

					if($fcCtr3 !== "" || $frCtr3 !== "" || $temAxCtr3 !== "" || $satOCtr3 !== "" || $hgtCtr3 !== "" || $psCtr3 !== "" || $pdCtr3 !== "" || $eGlsCrt3 !== "" || $evaCtr3 !== ""){
						$horaControl3 = date('H:i:s');
					}else{
						$horaControl3 = "";
					}

					if($fcCtr4 !== "" || $frCtr4 !== "" || $temAxCtr4 !== "" || $satOCtr4 !== "" || $hgtCtr4 !== "" || $psCtr4 !== "" || $pdCtr4 !== "" || $eGlsCrt4 !== "" || $evaCtr4 !== ""){
						$horaControl4 = date('H:i:s');
					}else{
						$horaControl4 = "";
					}

					if($fcCtr5 !== "" || $frCtr5 !== "" || $temAxCtr5 !== "" || $satOCtr5 !== "" || $hgtCtr5 !== "" || $psCtr5 !== "" || $pdCtr5 !== "" || $eGlsCrt5 !== "" || $evaCtr5 !== ""){
						$horaControl5 = date('H:i:s');
					}else{
						$horaControl5 = "";
					}

					if($fcCtr6 !== "" || $frCtr6 !== "" || $temAxCtr6 !== "" || $satOCtr6 !== "" || $hgtCtr6 !== "" || $psCtr6 !== "" || $pdCtr6 !== "" || $eGlsCrt6 !== "" || $evaCtr6 !== ""){
						$horaControl6 = date('H:i:s');
					}else{
						$horaControl6 = "";
					}

					if($fechaSalida === ""){ $fechaSalida = "NULL"; }else{ $fechaSalida= date('Y-m-d H:i:s'); }
					if($Realizado1 === "false"){ $Realizado1 = "NULL"; }else{ $Realizado1= 1; }
					if($Realizado2 === "false"){ $Realizado2 = "NULL"; }else{ $Realizado2= 1; }
					if($Realizado3 === "false"){ $Realizado3 = "NULL"; }else{ $Realizado3= 1; }
					if($RealizadoIndDos1 === "false"){ $RealizadoIndDos1 = "NULL"; }else{ $RealizadoIndDos1= 1; }
					if($RealizadoIndDos2 === "false"){ $RealizadoIndDos2 = "NULL"; }else{ $RealizadoIndDos2= 1; }
					if($RealizadoIndDos3 === "false"){ $RealizadoIndDos3 = "NULL"; }else{ $RealizadoIndDos3= 1; }
					if($RealizadoIndTres1 === "false"){ $RealizadoIndTres1 = "NULL"; }else{ $RealizadoIndTres1= 1; }
					if($RealizadoIndTres2 === "false"){ $RealizadoIndTres2 = "NULL"; }else{ $RealizadoIndTres2= 1; }
					if($RealizadoIndTres3 === "false"){ $RealizadoIndTres3 = "NULL"; }else{ $RealizadoIndTres3= 1; }

				/*======================================= FIN DE VALIDACIONES DE CAMPOS NUMERICOS =============================================*/

				$carpeta = 4;
				$nombreCampos = "TRATAMIENTO_1_IND_1_REALIZADO"."|"."TRATAMIENTO_1_IND_2_REALIZADO"."|"."TRATAMIENTO_1_IND_3_REALIZADO"."|"."TRATAMIENTO_2_IND_1"."|"."TRATAMIENTO_2_IND_2"."|"."TRATAMIENTO_2_IND_3"."|"."TRATAMIENTO_2_IND_1_REALIZADO"."|"."TRATAMIENTO_2_IND_2_REALIZADO"."|"."TRATAMIENTO_2_IND_3_REALIZADO"."|"."TRATAMIENTO_3_IND_1"."|"."TRATAMIENTO_3_IND_2"."|"."TRATAMIENTO_3_IND_3"."|"."TRATAMIENTO_3_IND_1_REALIZADO"."|"."TRATAMIENTO_3_IND_2_REALIZADO"."|"."TRATAMIENTO_3_IND_3_REALIZADO"."|"."HORA_CONTRAL_1"."|"."HORA_CONTRAL_2"."|"."HORA_CONTRAL_3"."|"."HORA_CONTRAL_4"."|"."HORA_CONTRAL_5"."|"."HORA_CONTRAL_6"."|"."FC_1"."|"."FC_2"."|"."FC_3"."|"."FC_4"."|"."FC_5"."|"."FC_6"."|"."FR_1"."|"."FR_2"."|"."FR_3"."|"."FR_4"."|"."FR_5"."|"."FR_6"."|"."T_AUX_1"."|"."T_AUX_2"."|"."T_AUX_3"."|"."T_AUX_4"."|"."T_AUX_5"."|"."T_AUX_6"."|"."SAT_02_1"."|"."SAT_02_2"."|"."SAT_02_3"."|"."SAT_02_4"."|"."SAT_02_5"."|"."SAT_02_6"."|"."HGT_1"."|"."HGT_2"."|"."HGT_3"."|"."HGT_4"."|"."HGT_5"."|"."HGT_6"."|"."PA_SISTOLICA_1"."|"."PA_SISTOLICA_2"."|"."PA_SISTOLICA_3"."|"."PA_SISTOLICA_4"."|"."PA_SISTOLICA_5"."|"."PA_SISTOLICA_6"."|"."PA_DIASTOLICA_1"."|"."PA_DIASTOLICA_2"."|"."PA_DIASTOLICA_3"."|"."PA_DIASTOLICA_4"."|"."PA_DIASTOLICA_5"."|"."PA_DIASTOLICA_6"."|"."E_GLASGOW_1"."|"."E_GLASGOW_2"."|"."E_GLASGOW_3"."|"."E_GLASGOW_4"."|"."E_GLASGOW_5"."|"."E_GLASGOW_6"."|"."E_EVA_1"."|"."E_EVA_2"."|"."E_EVA_3"."|"."E_EVA_4"."|"."E_EVA_5"."|"."E_EVA_6"."|"."OBSERVACIONES"."|";

				$valorCampos = $Realizado1."|".$Realizado2."|".$Realizado3."|".$indDos1."|".$indDos2."|".$indDos3."|".$RealizadoIndDos1."|".$RealizadoIndDos2."|".$RealizadoIndDos3."|".$indTres1."|".$indTres2."|".$indTres3."|".$RealizadoIndTres1."|".$RealizadoIndTres2."|".$RealizadoIndTres3."|".$horaControl1."|".$horaControl2."|".$horaControl3."|".$horaControl4."|".$horaControl5."|".$horaControl6."|".$fcCtr1."|".$fcCtr2."|".$fcCtr3."|".$fcCtr4."|".$fcCtr5."|".$fcCtr6."|".$frCtr1."|".$frCtr2."|".$frCtr3."|".$frCtr4."|".$frCtr5."|".$frCtr6."|".$temAxCtr1."|".$temAxCtr2."|".$temAxCtr3."|".$temAxCtr4."|".$temAxCtr5."|".$temAxCtr6."|".$satOCtr1."|".$satOCtr2."|".$satOCtr3."|".$satOCtr4."|".$satOCtr5."|".$satOCtr6."|".$hgtCtr1."|".$hgtCtr2."|".$hgtCtr3."|".$hgtCtr4."|".$hgtCtr5."|".$hgtCtr6."|".$psCtr1."|".$psCtr2."|".$psCtr3."|".$psCtr4."|".$psCtr5."|".$psCtr6."|".$pdCtr1."|".$pdCtr2."|".$pdCtr3."|".$pdCtr4."|".$pdCtr5."|".$pdCtr6."|".$eGlsCrt1."|".$eGlsCrt2."|".$eGlsCrt3."|".$eGlsCrt4."|".$eGlsCrt5."|".$eGlsCrt6."|".$evaCtr1."|".$evaCtr2."|".$evaCtr3."|".$evaCtr4."|".$evaCtr5."|".$evaCtr6."|".$ObservacionesTto."|";

				$modelo->setConId($conId);
				$modelo->setPerId($perId);
				$modelo->setCarpeta($carpeta);
				$modelo->setFechaIngreso($fechaYHoraPantalla);
				$modelo->setFechaSalida($fechaSalida);
				$modelo->setNombreCampos($nombreCampos);
				$modelo->setValorCampos($valorCampos);
				$data = $modelo->SP_INSERTAR_OBSERVACION_TRATAMIENTO($conn);
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
				$modelo->setEstado($bloqueo);
				$modelo->setConId($conId);
				$modelo->setCarpeta($carId);
				$modelo->setFechaHoy($fechaHora);
				$modelo->setPerId($perId);
				$data = $modelo->obteneryActualizarEstadoPaciente($conn);
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
				$perId = $_REQUEST['perId'];
				$fechaSalida = $_REQUEST['fechaSalida'];
				$carpeta = 7;
				$nombreCampos = "OBSERVACION_NSP"."|";
				$valorCampos = $ObservacionNsp."|";
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
				
				//$data[0] = Array("data" 	=> "false");
				//echo json_encode($data);
			break;
			
			default: print_r("No se ha podido realizar ninguna accion");break;
		}
	}
?>
