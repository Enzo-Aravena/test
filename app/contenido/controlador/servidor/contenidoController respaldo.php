<?php
	session_start();
	header('Content-Type: text/html; charset=UTF-8');
	date_default_timezone_set('America/Santiago');

	require_once("../../../../lib/conexion/conexion.php");
	require_once("../../modelo/modeloDashboard.php");

	if (!isset($_SESSION['username'])) {
		$data["sesion"] = "-1";// LA SESION MURIO

		echo json_encode($data);
		
	}else{
		$bd = new Conexion();
		$modelo = new dashboard();
		$conn = $bd->Conectar();		

		$GLOBALS["users"]= "";
		$GLOBALS["pacRegister"] = "";
		$evento = $_REQUEST["evento"];

		switch ($evento) {
			case 'buscar':
				$primApe = $_REQUEST['primApe'];
				$segunApe = $_REQUEST['segunApe'];
				$nombrePaciente = $_REQUEST['nombrePaciente'];
				$rutPaciente = $_REQUEST['rutPaciente'];
				$dniPaciente = $_REQUEST['dniPaciente'];
				$modelo->setRutPac($rutPaciente);
				$modelo->setDniPac($dniPaciente);
				$modelo->setNombrePac(utf8_decode($nombrePaciente));
				$modelo->setApePat(utf8_decode($primApe));
				$modelo->setApeMat(utf8_decode($segunApe));
				$data = $modelo->OBTENER_PACIENTE_SAPU($conn);

				if ($data[0]["data"] == "0") {
					echo "0";
				}else{
					echo json_encode($data);
				}
			break;

			case 'cargarNacionalidad':
				$data = $modelo->OBTENER_LISTA_PAISES($conn);
				if ($data[0]["data"] == "0") {
					echo "0";
				}else{
					echo json_encode($data);
				}
			break;

			case 'cargarComunas':
				$data = $modelo->OBTENER_LISTA_COMUNA($conn);
				if ($data[0]["data"] == "0") {
					echo "0";
				}else{
					echo json_encode($data);
				}			
			break;

			case 'cargarPrevision':
				$data = $modelo->OBTENER_LISTA_PREVISION($conn);
				if ($data[0]["data"] == "0") {
					echo "0";
				}else{
					echo json_encode($data);
				}
			break;

			case 'cargarCentros':
				$data = $modelo->SP_OBTENER_CENTRO($conn);
				if ($data[0]["data"] == "0") {
					echo "0";
				}else{
					echo json_encode($data);
				}
			break;

			case 'cargarTipoConsulta':
				$data = $modelo->SP_OBTENER_TIPO_CONSULTA($conn);
				if ($data[0]["data"] == "0") {
					echo "0";
				}else{
					echo json_encode($data);
				}
			break;

			case 'cargarMedioTransporte':
				$data = $modelo->SP_OBTENER_TIPO_TRASPORTE($conn);
				if ($data[0]["data"] == "0") {
					echo "0";
				}else{
					echo json_encode($data);
				}
			break;
			case 'cargarTipoAccidente':
				$data = $modelo->SP_OBTENER_TIPO_ACCIDENTE($conn);
				if ($data[0]["data"] == "0") {
					echo "0";
				}else{
					echo json_encode($data);
				}
			break;

			case 'cargarLugarAccidente':
				$data = $modelo->SP_OBTENER_LUGAR_ACCIDENTE($conn);
				if ($data[0]["data"] == "0") {
					echo "0";
				}else{
					echo json_encode($data);
				}
			break;
		
			case 'cargarSexo':
				$data = $modelo->SP_OBTENER_SEXO($conn);
				if ($data[0]["data"] == "0") {
					echo "0";
				}else{
					echo json_encode($data);
				}
			break;

			case 'crearPaciente':

				$pacId = $_REQUEST['pacId'];
				$rutPac = $_REQUEST['rutPac'];
				$dniPac = $_REQUEST['dniPac'];
				$nombrePac = utf8_decode($_REQUEST['nombrePac']);
				$apePat = utf8_decode($_REQUEST['apePat']);
				$apeMat = utf8_decode($_REQUEST['apeMat']);
				$fnac = $_REQUEST['fnac'];
				$sexo = $_REQUEST['sexo'];
				$nacionalidad = $_REQUEST['nacionalidad'];
				$direccion = utf8_decode($_REQUEST['direccion']);
				$comuna = $_REQUEST['comuna'];
				$telefono = $_REQUEST['telefono'];
				$prevision = $_REQUEST['prevision'];
				$hta = $_REQUEST['hta'];
				$dm2 = $_REQUEST['dm2'];
				$epoc = $_REQUEST['epoc'];
				$asma = $_REQUEST['asma'];
				$dhc = $_REQUEST['dhc'];
				$irc = $_REQUEST['irc'];
				$otros_ec = $_REQUEST['otros_ec'];
				$otros_ec_desc = $_REQUEST['otros_ec_desc'];
				$correo = $_REQUEST['correo'];
				$centro = $_REQUEST['centro'];

				if($pacId == "" ) {$pacId = "NULL";}else{$pacId = $pacId;}
				if($rutPac == "" ) {$rutPac = "";}else{$rutPac = $rutPac;}
				if($dniPac == "" ) {$dniPac = "";}else{$dniPac = $dniPac;}
				if($nacionalidad == "" ) {$nacionalidad = "NULL";}else{$nacionalidad = $nacionalidad;}
				if($fnac == ""){$fnac ="";}else{$fnac = $fnac ;}
				if($comuna == "0"){$comuna ="NULL";}else{$comuna = $comuna ;}
				if($prevision == "0"){$prevision ="NULL";}else{$prevision = $prevision ;}

				$modelo->setPacId($pacId);
				$modelo->setrutPac($rutPac);
				$modelo->setDniPac($dniPac);
				$modelo->setNombrePac($nombrePac);
				$modelo->setApePat($apePat);
				$modelo->setApeMat($apeMat);
				$modelo->setFnac($fnac);
				$modelo->setSexo($sexo);
				$modelo->setNacionalidad($nacionalidad);
				$modelo->setDireccion($direccion);
				$modelo->setComuna($comuna);
				$modelo->setTelefono($telefono);
				$modelo->setPrevision($prevision);
				$modelo->setHta($hta);
				$modelo->setDM2($dm2);
				$modelo->setEPOC($epoc);
				$modelo->setASMA($asma);
				$modelo->setIRC($dhc);
				$modelo->setDHC($irc);
				$modelo->setOTRAS($otros_ec);
				$modelo->setOtrosEcDescrip($otros_ec_desc);
				$modelo->setCorreo($correo);
				$modelo->setCentro($centro);			
				$data = $modelo->SP_INSERT_PAC($conn);
				if ($data[0]["data"] == "0") {
					echo "0";
				}else{
					echo json_encode($data);
				}

			break;

			case 'registrarUrgenciaSapu':
				$pacId = $_REQUEST['pacId'];
				$perID = $_REQUEST['perID'];
				$centroi = $_REQUEST['centroi'];
				//contenido de los campos
				$nombreAcompanante = utf8_decode($_REQUEST['nombreAcompanante']);
				$motivoConsulta = utf8_decode($_REQUEST['motivoConsulta']);
				$tipoAccidente = $_REQUEST['tipoAccidente'];
				$tipoConsulta = $_REQUEST['tipoConsulta'];
				$lugarAccidente = $_REQUEST['lugarAccidente'];
				$medioTransporte = $_REQUEST['medioTransporte'];
				$carpeta = 1;
				$nombreCampos = "CENTRO_ATENCION"."|"."NOMBRE_ACOMPANANTE"."|"."MOTIVO_CONSULTA"."|"."TIPO_ACCIDENTE"."|"."LUGAR_ACCIDENTE"."|"."TIPO_CONSULTA"."|"."MEDIO_TRANSPORTE"."|";
				$valorCampos = $centroi."|".$nombreAcompanante."|".$motivoConsulta."|".$tipoAccidente."|".$lugarAccidente."|".$tipoConsulta."|".$medioTransporte."|";
				$modelo->setPacId($pacId);
				$modelo->setPerId($perID);
				$modelo->setCentro($centroi);
				$modelo->setCarpeta($carpeta);
				$modelo->setNombreCampos($nombreCampos);
				$modelo->setValorCampos($valorCampos);
				$data = $modelo->SP_INSERTAR_ATENCION($conn);
				if ($data[0]["data"] == "0") {
					echo "0";
				}else{
					echo json_encode($data);
				}
			break;

			case 'obtenerRegistroIngresoPac':
				$carpetaId = 1;
				$centroTrabajo = $_REQUEST["centroTrabajo"];
				$modelo->setCarpeta($carpetaId);
				$modelo->setCentro($centroTrabajo);
				$data = $modelo->SP_OBTENER_ADMISION($conn);
				if ($data[0]["data"] == "0") {
					echo "0";
				}else{
					echo json_encode($data);
				}
			break;

			case 'obtenerRegistroTriage':
				$carpetaId = 2;
				$centroTrabajo = $_REQUEST["centroTrabajo"];
				$modelo->setCarpeta($carpetaId);
				$modelo->setCentro($centroTrabajo);
				$data = $modelo->SP_OBTENER_TRIAGE($conn);
				if ($data[0]["data"] == "0") {
					echo "0";
				}else{
					echo json_encode($data);
				}
			break;

			case 'obtenerRegistroAtencion':
				$carpetaId = 3;
				$centroTrabajo = $_REQUEST["centroTrabajo"];
				$modelo->setCarpeta($carpetaId);
				$modelo->setCentro($centroTrabajo);
				$data = $modelo->SP_OBTENER_REGISTRO_ATENCION($conn);
				if ($data[0]["data"] == "0") {
					echo "0";
				}else{
					echo json_encode($data);
				}
			break;

			case 'obtenerMisProcedimientos':
				$carpetaId = 4;
				$centroTrabajo = $_REQUEST["centroTrabajo"];
				$modelo->setCarpeta($carpetaId);
				$modelo->setCentro($centroTrabajo);
				$data = $modelo->SP_OBTENER_REGISTRO_OBSERVACION_TTO($conn);
				if ($data[0]["data"] == "0") {
					echo "0";
				}else{
					echo json_encode($data);
				}

			break;

			case 'obtenerEgresoPaciente':
				$carpetaId = 5;
				$centroTrabajo = $_REQUEST["centroTrabajo"];
				$modelo->setCarpeta($carpetaId);
				$modelo->setCentro($centroTrabajo);
				$data = $modelo->SP_OBTENER_REGISTRO_EGRESO($conn);
				if ($data[0]["data"] == "0") {
					echo "0";
				}else{
					echo json_encode($data);
				}
			break;

			case 'obtenerPacientesDadosDeAlta':
				$centroTrabajo = $_REQUEST["centroTrabajo"];
				$carpetaId = 6;
				$fechaHoy = $_REQUEST['fechaHoy'];
				$modelo->setCarpeta($carpetaId);
				$modelo->setCentro($centroTrabajo);
				$modelo->setFechaHoy($fechaHoy);
				$data = $modelo->SP_OBTENER_REGISTRO_DADOS_ALTA($conn);
				if ($data[0]["data"] == "0") {
					echo "0";
				}else{
					echo json_encode($data);
				}
			break;

			case 'obtenerNspPacientes':
				$centroTrabajo = $_REQUEST["centroTrabajo"];
				$carpetaId = 7;			
				$fechaHoy = $_REQUEST['fechaHoy'];
				$modelo->setCarpeta($carpetaId);
				$modelo->setCentro($centroTrabajo);
				$modelo->setFechaHoy($fechaHoy);
				$data = $modelo->SP_OBTENER_REGISTRO_CANCELADAS($conn);
				if ($data[0]["data"] == "0") {
					echo "0";
				}else{
					echo json_encode($data);
				}
			break;
			

			case 'obtenerPacientesReportPacienteAlta':
				$centroTrabajo = $_REQUEST["centroTrabajo"];
				$carpeta= 6;
				$fechaBusqueda = $_REQUEST["fechaBusqueda"];
				$rut = $_REQUEST["rut"];				
				if ($rut === "") {$rut = 'NULL';}else{$rut= $rut;}
				if ($fechaBusqueda === "") {$fechaBusqueda = 'NULL';}else{$fechaBusqueda= $fechaBusqueda;}
				$modelo->setCarpeta($carpeta);
				$modelo->setCentro($centroTrabajo);
				$modelo->setFechaCreacion($fechaBusqueda);
				$modelo->setRutPac($rut);
				$data = $modelo->SP_OBTENER_ATENCION_FINALIZADA_DAODS_ALTA($conn);
				if ($data[0]["data"] == "0") {
					echo "0";
				}else{
					echo json_encode($data);
				}
			break;

			case 'obtenerPacientesReportPacienteNSP':
				$centroTrabajo = $_REQUEST["centroTrabajo"];
				$carpeta= 7;
				$fechaBusqueda = $_REQUEST["fechaBusqueda"];
				$rut = $_REQUEST["rut"];
				
				if ($rut === "") {$rut = 'NULL';}else{$rut= $rut;}
				if ($fechaBusqueda === "") {$fechaBusqueda = 'NULL';}else{$fechaBusqueda= $fechaBusqueda;}

				$modelo->setCarpeta($carpeta);
				$modelo->setCentro($centroTrabajo);
				$modelo->setFechaCreacion($fechaBusqueda);
				$modelo->setRutPac($rut);
				$data = $modelo->SP_OBTENER_ATENCION_FINALIZADA_CANCELADOS($conn);
				if ($data[0]["data"] == "0") {
					echo "0";
				}else{
					echo json_encode($data);
				}
			break;

			case 'obtenerEstadoPacientes':
				$conId = $_REQUEST['conId'];
				$bloqueo = $_REQUEST['bloqueo'];
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
	}
?>