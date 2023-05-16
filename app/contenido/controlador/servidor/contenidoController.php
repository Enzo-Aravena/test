<?php
	session_start();
	header('Content-Type: text/html; charset=UTF-8');
	date_default_timezone_set('America/Santiago');

	require_once("../../../../lib/conexion/conexion.php");
	require_once("../../modelo/modeloDashboard.php");
	//SE AÑADE EL MODELO DEL DESBLOQUEO PACIENTE
	require_once("../../modelo/modeloDesblPaciente.php");
	$desbloqueo = new desbloqueoPaciente();
	$tabla ="";
	$aux = 0;

	$cabeceraTablaEgresos ='<table class="table table-bordered">
			<thead class="tableContent" >	
			<th style="height: 3em !important;"> N° </th>
			<th class="hidden-xs"> Fecha y Hora </th>
			<th class="hidden-xs"> RUT / DNI </th>
			<th> Paciente </th>
			<th class="hidden-xs"> Edad </th>
			<th class="hidden-xs"> Sexo </th>
			<th class="hidden-xs"> Motivo Consulta </th>
			<th class="hidden-xs"> Lugar Atención </th>
			<th class="hidden-xs"> Firma </th>';

			//FECHA_INGRESO, RUT, PACIENTE, EDAD, SEXO, MOTIVO_CONSULTA, PREVISION, FIRMA, CATEGORIZACION, ESTADO, CON_ID 

	$cabeceraTabla ='<table class="table table-bordered">
			<thead class="tableContent" >	
			<th style="height: 3em !important;"> N° </th>
			<th class="hidden-xs"> Fecha y Hora </th>
			<th class="hidden-xs"> RUT / DNI </th>
			<th> Paciente </th>
			<th class="hidden-xs"> Edad </th>
			<th class="hidden-xs"> Sexo </th>
			<th class="hidden-xs"> Motivo Consulta </th>
			<th class="hidden-xs"> Previsión </th>
			<th class="hidden-xs"> Firma </th>';

	$hombre = '<img src="../../../lib/images/men.png" style="margin-left: auto;margin-right: auto;">';
	$mujer = '<img src="../../../lib/images/woman.png" style="margin-left: auto;margin-right: auto;">';

	$CATC1 = '<img src="../../../lib/images/icon.png" style="background-color: #FF0033;cursor: pointer;">';
	$CATC2= '<img src="../../../lib/images/icon.png" style="background-color: #FF9933;cursor: pointer;">';
	$CATC3 = '<img src="../../../lib/images/icon.png" style="background-color: #FFFF00;cursor: pointer;">';
	$CATC4 = '<img src="../../../lib/images/icon.png" style="background-color: #00CC33;cursor: pointer;">';
	$CATC5 = '<img src="../../../lib/images/icon.png" style="background-color: #0066FF;cursor: pointer;">';

	$selectBox = "<option value= '0' selected=''> Seleccione ...</option>";
	$select= "";

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
				$primApe = "";
				$segunApe = "";
				$nombrePaciente = "";
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
			case 'cargarSexo':
				$data = $modelo->SP_OBTENER_SEXO($conn);
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
				$modelo->setNombrePac(addslashes($nombrePac));
				$modelo->setApePat(addslashes($apePat));
				$modelo->setApeMat(addslashes($apeMat));
				$modelo->setFnac($fnac);
				$modelo->setSexo($sexo);
				$modelo->setNacionalidad($nacionalidad);
				$modelo->setDireccion(addslashes($direccion));
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
				$modelo->setCorreo(addslashes($correo));
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
				$aux = 0;
				$centroTrabajo = $_REQUEST["centroTrabajo"];
				$modelo->setCarpeta($carpetaId);
				$modelo->setCentro($centroTrabajo);
				$data = $modelo->SP_OBTENER_ADMISION($conn);
				if ($data[0]["data"] == "2") {
					echo "2";
				}else{
					$tabla = $tabla.$cabeceraTabla.'</thead>';
					$tabla = $tabla.'<tbody id="resultRegistradas">';
					if ($data[0]["data"] == "0") {
						$tabla = $tabla.'<tr>';
						$tabla = $tabla.'<td colspan = 12> No se han encontrado resultados ..</td>';
						$tabla = $tabla.'</tr>';
					}else{
						foreach($data as $clave => $valor){
							$aux = $aux+1;
							$tabla = $tabla.'<tr>';
							$tabla = $tabla.'<td>'.$aux.'</td>';
							$tabla = $tabla.'<td>'.$valor["fecha"].'</td>';
							$tabla = $tabla.'<td>'.$valor["rut"].'</td>';
							$tabla = $tabla.'<td>'.$valor["paciente"].'</td>';
							$tabla = $tabla.'<td>'.$valor["edad"].'</td>';
							if ($valor["sexo"] === "Femenino") {
								$tabla = $tabla.'<td>'.$mujer.'</td>';	
							}else{
								$tabla = $tabla.'<td>'.$hombre.'</td>';
							}
							$tabla = $tabla.'<td>'.$valor["motivo"].'</td>';
							$tabla = $tabla.'<td>'.$valor["prevision"].'</td>';
							$tabla = $tabla.'<td>'.$valor["firma"].'</td>';
							$tabla = $tabla.'</tr>';		
						}
						$tabla = $tabla.'</tbody>';
						$tabla = $tabla.'</table>';
					}
					echo $tabla."///_".$aux;
				}
			break;

			case 'obtenerRegistroTriage':
				$carpetaId = 2;
				$centroTrabajo = $_REQUEST["centroTrabajo"];
				$modelo->setCarpeta($carpetaId);
				$modelo->setCentro($centroTrabajo);
				$data = $modelo->SP_OBTENER_TRIAGE($conn);
				//echo json_encode($data);

				$tabla = $tabla.$cabeceraTabla.'</thead>';
				$tabla = $tabla.'<tbody id="resultTriadas">';
				$aux = 0;
				if ($data[0]["data"] == "0") {
					$tabla = $tabla.'<tr>';
					$tabla = $tabla.'<td colspan = 12> No se han encontrado resultados ..</td>';
					$tabla = $tabla.'</tr>';
				}else{
					//FECHA_INGRESO, RUT, PACIENTE, EDAD, SEXO, MOTIVO_CONSULTA, PREVISION, FIRMA, CATEGORIZACION, ESTADO, CON_ID 
					foreach($data as $clave => $valor){
						$estado = $valor["estado"];
						$dato = $valor["con_id"];
						$aux = $aux+1;
						///VALIDA SI ESTA TOMADO ES ESTADO 1
						if ($estado == "1") {
							$tabla = $tabla.'<tr class = "Validatr">';
						}else{
							$tabla = $tabla.'<tr>';
						}
						$tabla = $tabla.'<td><a class="most" style="cursor:pointer;" id="idRedirec'.$aux.'"> <input type = "hidden" name= "conf" class="Seleccion" value="'.$dato.'">'.$aux.'</a></td>';
						$tabla = $tabla.'<td><a class="most" style="cursor:pointer;" id="idRedirec'.$aux.'"> <input type = "hidden" name= "conf" class="Seleccion" value="'.$dato.'">'.$valor["fecha"].'</a></td>';
						$tabla = $tabla.'<td><a class="most" style="cursor:pointer;" id="idRedirec'.$aux.'"> <input type = "hidden" name= "conf" class="Seleccion" value="'.$dato.'">'.$valor["rut"].'</a></td>';
						$tabla = $tabla.'<td><a class="most" style="cursor:pointer;" id="idRedirec'.$aux.'"> <input type = "hidden" name= "conf" class="Seleccion" value="'.$dato.'">'.$valor["paciente"].'</a></td>';
						$tabla = $tabla.'<td><a class="most" style="cursor:pointer;" id="idRedirec'.$aux.'"> <input type = "hidden" name= "conf" class="Seleccion" value="'.$dato.'">'.$valor["edad"].'</a></td>';

						if ($valor["sexo"] === "Femenino") {
							$tabla = $tabla.'<td><a class="most" style="cursor:pointer;" id="idRedirec'.$aux.'"> <input type = "hidden" name= "conf" class="Seleccion" value="'.$dato.'">'.$mujer.'</a></td>';
						}else{
							$tabla = $tabla.'<td><a class="most" style="cursor:pointer;" id="idRedirec'.$aux.'"> <input type = "hidden" name= "conf" class="Seleccion" value="'.$dato.'">'.$hombre.'</a></td>';
						}
						$tabla = $tabla.'<td><a class="most" style="cursor:pointer;" id="idRedirec'.$aux.'"> <input type = "hidden" name= "conf" class="Seleccion" value="'.$dato.'">'.$valor["motivo"].'</a></td>';
						$tabla = $tabla.'<td><a class="most" style="cursor:pointer;" id="idRedirec'.$aux.'"> <input type = "hidden" name= "conf" class="Seleccion" value="'.$dato.'">'.$valor["prevision"].'</a></td>';
						$tabla = $tabla.'<td><a class="most" style="cursor:pointer;" id="idRedirec'.$aux.'"> <input type = "hidden" name= "conf" class="Seleccion" value="'.$dato.'">'.$valor["firma"].'</a></td>';
						$tabla = $tabla.'</tr>';
					}
					$tabla = $tabla.'</tbody>';
					$tabla = $tabla.'</table>';
				}
				echo $tabla."///_".$aux;
			break;

			case 'obtenerRegistroAtencion':
				$carpetaId = 3;
				$aux = 0;
				$centroTrabajo = $_REQUEST["centroTrabajo"];
				$modelo->setCarpeta($carpetaId);
				$modelo->setCentro($centroTrabajo);
				$data = $modelo->SP_OBTENER_REGISTRO_ATENCION($conn);
				$tabla = $tabla.$cabeceraTabla.'</thead>';
				$tabla = $tabla.'<tbody id="resultAtendidas">';
				if ($data[0]["data"] == "0") {
					$tabla = $tabla.'<tr>';
					$tabla = $tabla.'<td colspan = 12> No se han encontrado resultados ..</td>';
					$tabla = $tabla.'</tr>';
				}else{
					foreach($data as $clave => $valor){
						$estado = $valor["estado"];
						$dato = $valor["con_id"];
						$aux = $aux+1;
						///VALIDA SI ESTA TOMADO ES ESTADO 1
						if ($estado == "1") {
							$tabla = $tabla.'<tr class = "Validatr">';
						}else{
							$tabla = $tabla.'<tr>';
						}
						switch ($valor['categorizacion']) {
							case "C1":$tabla = $tabla.'<td ><a class="mostrar" style="cursor:pointer;" id="idRedirec'.$aux.'"> <input type = "hidden" name= "conf" class="obtener" value="'.$dato.'">'.$CATC1.'</a></td>'; break;
							case "C2":$tabla = $tabla.'<td><a class="mostrar" style="cursor:pointer;" id="idRedirec'.$aux.'"> <input type = "hidden" name= "conf" class="obtener" value="'.$dato.'">'.$CATC2.'</a></td>'; break;
							case "C3":$tabla = $tabla.'<td><a class="mostrar" style="cursor:pointer;" id="idRedirec'.$aux.'"> <input type = "hidden" name= "conf" class="obtener" value="'.$dato.'">'.$CATC3.'</a></td>'; break;
							case "C4":$tabla = $tabla.'<td><a class="mostrar" style="cursor:pointer;" id="idRedirec'.$aux.'"> <input type = "hidden" name= "conf" class="obtener" value="'.$dato.'">'.$CATC4.'</a></td>'; break;
							case "C5":$tabla = $tabla.'<td><a class="mostrar" style="cursor:pointer;" id="idRedirec'.$aux.'"> <input type = "hidden" name= "conf" class="obtener" value="'.$dato.'">'.$CATC5.'</a></td>'; break;
							default:$tabla = $tabla.'<td><a class="mostrar" style="cursor:pointer;" id="idRedirec'.$aux.'"> <input type = "hidden" name= "conf" class="obtener" value="'.$dato.'">'.$aux.'</a></td>';break;
						}

						$tabla = $tabla.'<td><a class="mostrar" style="cursor:pointer;" id="idRedirec'.$aux.'"> <input type = "hidden" name= "conf" class="obtener" value="'.$dato.'">'.$valor["fecha"].'</a></td>';
						$tabla = $tabla.'<td><a class="mostrar" style="cursor:pointer;" id="idRedirec'.$aux.'"> <input type = "hidden" name= "conf" class="obtener" value="'.$dato.'">'.$valor["rut"].'</a></td>';
						$tabla = $tabla.'<td><a class="mostrar" style="cursor:pointer;" id="idRedirec'.$aux.'"> <input type = "hidden" name= "conf" class="obtener" value="'.$dato.'">'.$valor["paciente"].'</a></td>';
						$tabla = $tabla.'<td><a class="mostrar" style="cursor:pointer;" id="idRedirec'.$aux.'"> <input type = "hidden" name= "conf" class="obtener" value="'.$dato.'">'.$valor["edad"].'</a></td>';

						if ($valor["sexo"] === "Femenino") {
							$tabla = $tabla.'<td><a class="mostrar" style="cursor:pointer;" id="idRedirec'.$aux.'"> <input type = "hidden" name= "conf" class="obtener" value="'.$dato.'">'.$mujer.'</a></td>';
						}else{
							$tabla = $tabla.'<td><a class="mostrar" style="cursor:pointer;" id="idRedirec'.$aux.'"> <input type = "hidden" name= "conf" class="obtener" value="'.$dato.'">'.$hombre.'</a></td>';
						}
						
						$tabla = $tabla.'<td><a class="mostrar" style="cursor:pointer;" id="idRedirec'.$aux.'"> <input type = "hidden" name= "conf" class="obtener" value="'.$dato.'">'.$valor["motivo"].'</a></td>';
						$tabla = $tabla.'<td><a class="mostrar" style="cursor:pointer;" id="idRedirec'.$aux.'"> <input type = "hidden" name= "conf" class="obtener" value="'.$dato.'">'.$valor["prevision"].'</a></td>';
						$tabla = $tabla.'<td><a class="mostrar" style="cursor:pointer;" id="idRedirec'.$aux.'"> <input type = "hidden" name= "conf" class="obtener" value="'.$dato.'">'.$valor["firma"].'</a></td>';
						$tabla = $tabla.'</tr>';
					}
					$tabla = $tabla.'</tbody>';
					$tabla = $tabla.'</table>';
				}
				echo $tabla."///_".$aux;
			break;

			case 'obtenerMisProcedimientos':
				$carpetaId = 4;
				$aux = 0;
				$centroTrabajo = $_REQUEST["centroTrabajo"];
				$modelo->setCarpeta($carpetaId);
				$modelo->setCentro($centroTrabajo);
				$data = $modelo->SP_OBTENER_REGISTRO_OBSERVACION_TTO($conn);
				$tabla = $tabla.$cabeceraTabla.'</thead>';
				$tabla = $tabla.'<tbody id="resultadosObsYtto">';
				if ($data[0]["data"] == "0") {
					$tabla = $tabla.'<tr>';
					$tabla = $tabla.'<td colspan = 12> No se han encontrado resultados ..</td>';
					$tabla = $tabla.'</tr>';
				}else{
					foreach($data as $clave => $valor){
						$estado = $valor["estado"];
						$dato = $valor["con_id"];
						$aux = $aux+1;
						///VALIDA SI ESTA TOMADO ES ESTADO 1
						if ($estado == "1") {
							$tabla = $tabla.'<tr class = "Validatr">';
						}else{
							$tabla = $tabla.'<tr>';
						}

						switch ($valor['categorizacion']) {
							case "C1":$tabla = $tabla.'<td><a class="mostObsTto" style="cursor:pointer;" id="idRedirec'.$aux.'"> <input type = "hidden" name= "conf" class="enviarPro" value="'.$dato.'">'.$CATC1.'</a></td>';break;
							case "C2":$tabla = $tabla.'<td><a class="mostObsTto" style="cursor:pointer;" id="idRedirec'.$aux.'"> <input type = "hidden" name= "conf" class="enviarPro" value="'.$dato.'">'.$CATC2.'</a></td>';break;
							case "C3":$tabla = $tabla.'<td><a class="mostObsTto" style="cursor:pointer;" id="idRedirec'.$aux.'"> <input type = "hidden" name= "conf" class="enviarPro" value="'.$dato.'">'.$CATC3.'</a></td>';break;
							case "C4":$tabla = $tabla.'<td><a class="mostObsTto" style="cursor:pointer;" id="idRedirec'.$aux.'"> <input type = "hidden" name= "conf" class="enviarPro" value="'.$dato.'">'.$CATC4.'</a></td>';break;
							case "C5":$tabla = $tabla.'<td><a class="mostObsTto" style="cursor:pointer;" id="idRedirec'.$aux.'"> <input type = "hidden" name= "conf" class="enviarPro" value="'.$dato.'">'.$CATC5.'</a></td>';break;
							default:$tabla = $tabla.'<td><a class="mostObsTto" style="cursor:pointer;" id="idRedirec'.$aux.'"> <input type = "hidden" name= "conf" class="enviarPro" value="'.$dato.'">'.$aux.'</a></td>';break;
						}
						
						$tabla = $tabla.'<td><a class="mostObsTto" style="cursor:pointer;" id="idRedirec'.$aux.'"> <input type = "hidden" name= "conf" class="enviarPro" value="'.$dato.'">'.$valor["fecha"].'</a></td>';
						$tabla = $tabla.'<td><a class="mostObsTto" style="cursor:pointer;" id="idRedirec'.$aux.'"> <input type = "hidden" name= "conf" class="enviarPro" value="'.$dato.'">'.$valor["rut"].'</a></td>';
						$tabla = $tabla.'<td><a class="mostObsTto" style="cursor:pointer;" id="idRedirec'.$aux.'"> <input type = "hidden" name= "conf" class="enviarPro" value="'.$dato.'">'.$valor["paciente"].'</a></td>';
						$tabla = $tabla.'<td><a class="mostObsTto" style="cursor:pointer;" id="idRedirec'.$aux.'"> <input type = "hidden" name= "conf" class="enviarPro" value="'.$dato.'">'.$valor["edad"].'</a></td>';

						if ($valor["sexo"] === "Femenino") {
							$tabla = $tabla.'<td><a class="mostObsTto" style="cursor:pointer;" id="idRedirec'.$aux.'"> <input type = "hidden" name= "conf" class="enviarPro" value="'.$dato.'">'.$mujer.'</a></td>';
						}else{
							$tabla = $tabla.'<td><a class="mostObsTto" style="cursor:pointer;" id="idRedirec'.$aux.'"> <input type = "hidden" name= "conf" class="enviarPro" value="'.$dato.'">'.$hombre.'</a></td>';
						}
						
						$tabla = $tabla.'<td><a class="mostObsTto" style="cursor:pointer;" id="idRedirec'.$aux.'"> <input type = "hidden" name= "conf" class="enviarPro" value="'.$dato.'">'.$valor["motivo"].'</a></td>';
						$tabla = $tabla.'<td><a class="mostObsTto" style="cursor:pointer;" id="idRedirec'.$aux.'"> <input type = "hidden" name= "conf" class="enviarPro" value="'.$dato.'">'.$valor["prevision"].'</a></td>';
						$tabla = $tabla.'<td><a class="mostObsTto" style="cursor:pointer;" id="idRedirec'.$aux.'"> <input type = "hidden" name= "conf" class="enviarPro" value="'.$dato.'">'.$valor["firma"].'</a></td>';
						$tabla = $tabla.'</tr>';
					}
					$tabla = $tabla.'</tbody>';
					$tabla = $tabla.'</table>';
				}
				echo $tabla."///_".$aux;
			break;

			case 'obtenerEgresoPaciente':
				$carpetaId = 5;
				$aux = 0;
				$centroTrabajo = $_REQUEST["centroTrabajo"];
				$modelo->setCarpeta($carpetaId);
				$modelo->setCentro($centroTrabajo);
				$data = $modelo->SP_OBTENER_REGISTRO_EGRESO($conn);
				$tabla = $tabla.$cabeceraTabla.'</thead>';
				$tabla = $tabla.'<tbody id="resultAlta">';
				if ($data[0]["data"] == "0") {
					$tabla = $tabla.'<tr>';
					$tabla = $tabla.'<td colspan = 12> No se han encontrado resultados ..</td>';
					$tabla = $tabla.'</tr>';
				}else{
					foreach($data as $clave => $valor){
						$estado = $valor["estado"];
						$dato = $valor["con_id"];
						$aux = $aux+1;
						///VALIDA SI ESTA TOMADO ES ESTADO 1
						if ($estado == "1") {
							$tabla = $tabla.'<tr class = "Validatr">';
						}else{
							$tabla = $tabla.'<tr>';
						}
						switch ($valor['categorizacion']) {
							case "C1":$tabla = $tabla.'<td><a class="mostrarEgreso" style="cursor:pointer;" id="idRedirec'.$aux.'"> <input type = "hidden" name= "conf" class="obtenerEgreso" value="'.$dato.'">'.$CATC1.'</a></td>';break;
							case "C2":$tabla = $tabla.'<td><a class="mostrarEgreso" style="cursor:pointer;" id="idRedirec'.$aux.'"> <input type = "hidden" name= "conf" class="obtenerEgreso" value="'.$dato.'">'.$CATC2.'</a></td>';break;
							case "C3":$tabla = $tabla.'<td><a class="mostrarEgreso" style="cursor:pointer;" id="idRedirec'.$aux.'"> <input type = "hidden" name= "conf" class="obtenerEgreso" value="'.$dato.'">'.$CATC3.'</a></td>';break;
							case "C4":$tabla = $tabla.'<td><a class="mostrarEgreso" style="cursor:pointer;" id="idRedirec'.$aux.'"> <input type = "hidden" name= "conf" class="obtenerEgreso" value="'.$dato.'">'.$CATC4.'</a></td>';break;
							case "C5":$tabla = $tabla.'<td><a class="mostrarEgreso" style="cursor:pointer;" id="idRedirec'.$aux.'"> <input type = "hidden" name= "conf" class="obtenerEgreso" value="'.$dato.'">'.$CATC5.'</a></td>';break;
							default:$tabla = $tabla.'<td><a class="mostrarEgreso" style="cursor:pointer;" id="idRedirec'.$aux.'"> <input type = "hidden" name= "conf" class="obtenerEgreso" value="'.$dato.'">'.$aux.'</a></td>';break;
						}
						$tabla = $tabla.'<td><a class="mostrarEgreso" style="cursor:pointer;" id="idRedirec'.$aux.'"> <input type = "hidden" name= "conf" class="obtenerEgreso" value="'.$dato.'">'.$valor["fecha"].'</a></td>';
						$tabla = $tabla.'<td><a class="mostrarEgreso" style="cursor:pointer;" id="idRedirec'.$aux.'"> <input type = "hidden" name= "conf" class="obtenerEgreso" value="'.$dato.'">'.$valor["rut"].'</a></td>';
						$tabla = $tabla.'<td><a class="mostrarEgreso" style="cursor:pointer;" id="idRedirec'.$aux.'"> <input type = "hidden" name= "conf" class="obtenerEgreso" value="'.$dato.'">'.$valor["paciente"].'</a></td>';
						$tabla = $tabla.'<td><a class="mostrarEgreso" style="cursor:pointer;" id="idRedirec'.$aux.'"> <input type = "hidden" name= "conf" class="obtenerEgreso" value="'.$dato.'">'.$valor["edad"].'</a></td>';
						
						if ($valor["sexo"] === "Femenino") {
							$tabla = $tabla.'<td><a class="mostrarEgreso" style="cursor:pointer;" id="idRedirec'.$aux.'"> <input type = "hidden" name= "conf" class="obtenerEgreso" value="'.$dato.'">'.$mujer.'</a></td>';
						}else{
							$tabla = $tabla.'<td><a class="mostrarEgreso" style="cursor:pointer;" id="idRedirec'.$aux.'"> <input type = "hidden" name= "conf" class="obtenerEgreso" value="'.$dato.'">'.$hombre.'</a></td>';
						}
						
						$tabla = $tabla.'<td><a class="mostrarEgreso" style="cursor:pointer;" id="idRedirec'.$aux.'"> <input type = "hidden" name= "conf" class="obtenerEgreso" value="'.$dato.'">'.$valor["motivo"].'</a></td>';
						$tabla = $tabla.'<td><a class="mostrarEgreso" style="cursor:pointer;" id="idRedirec'.$aux.'"> <input type = "hidden" name= "conf" class="obtenerEgreso" value="'.$dato.'">'.$valor["prevision"].'</a></td>';
						$tabla = $tabla.'<td><a class="mostrarEgreso" style="cursor:pointer;" id="idRedirec'.$aux.'"> <input type = "hidden" name= "conf" class="obtenerEgreso" value="'.$dato.'">'.$valor["firma"].'</a></td>';
						$tabla = $tabla.'</tr>';
					}
					$tabla = $tabla.'</tbody>';
					$tabla = $tabla.'</table>';
				}
				echo $tabla."///_".$aux;
			break;

			case 'obtenerPacientesDadosDeAlta':
				$centroTrabajo = $_REQUEST["centroTrabajo"];
				$carpetaId = 6;
				$aux = 0;
				$fechaHoy = $_REQUEST['fechaHoy'];
				$modelo->setCarpeta($carpetaId);
				$modelo->setCentro($centroTrabajo);
				$modelo->setFechaHoy($fechaHoy);
				$data = $modelo->SP_OBTENER_REGISTRO_DADOS_ALTA($conn);
				$tabla = $tabla.$cabeceraTablaEgresos;
				//$tabla = $tabla.'<th class="hidden-xs"> PDF DAU </th></thead>';
				$tabla = $tabla.'<tbody id="resultAlta">';
				if ($data[0]["data"] == "0") {
					$tabla = $tabla.'<tr>';
					$tabla = $tabla.'<td colspan = 14> No se han encontrado resultados ..</td>';
					$tabla = $tabla.'</tr>';
				}else{
					foreach($data as $clave => $valor){
						$dato = $valor["CON_ID"];
						$aux = $aux+1;
						$tabla = $tabla.'<tr>';
						
						$tabla = $tabla.'<td><a class="mostrarDadosAlta" style="cursor:pointer;" id="idRedirec'.$aux.'"> <input type = "hidden" name= "conf" class="mostDadosAltaPac" value="'.$dato.'">'.$aux.'</a></td>';
						$tabla = $tabla.'<td><a class="mostrarDadosAlta" style="cursor:pointer;" id="idRedirec'.$aux.'"> <input type = "hidden" name= "conf" class="mostDadosAltaPac" value="'.$dato.'">'.$valor["FECHA_INGRESO"].'</a></td>';
						$tabla = $tabla.'<td><a class="mostrarDadosAlta" style="cursor:pointer;" id="idRedirec'.$aux.'"> <input type = "hidden" name= "conf" class="mostDadosAltaPac" value="'.$dato.'">'.$valor["RUT"].'</a></td>';
						$tabla = $tabla.'<td><a class="mostrarDadosAlta" style="cursor:pointer;" id="idRedirec'.$aux.'"> <input type = "hidden" name= "conf" class="mostDadosAltaPac" value="'.$dato.'">'.$valor["PACIENTE"].'</a></td>';
						$tabla = $tabla.'<td><a class="mostrarDadosAlta" style="cursor:pointer;" id="idRedirec'.$aux.'"> <input type = "hidden" name= "conf" class="mostDadosAltaPac" value="'.$dato.'">'.$valor["EDAD"].'</a></td>';

						if ($valor["SEXO"] === "Femenino") {
							$tabla = $tabla.'<td><a class="mostrarDadosAlta" style="cursor:pointer;" id="idRedirec'.$aux.'"> <input type = "hidden" name= "conf" class="mostDadosAltaPac" value="'.$dato.'">'.$mujer.'</a></td>';
						}else{
							$tabla = $tabla.'<td><a class="mostrarDadosAlta" style="cursor:pointer;" id="idRedirec'.$aux.'"> <input type = "hidden" name= "conf" class="mostDadosAltaPac" value="'.$dato.'">'.$hombre.'</a></td>';
						}
						
						$tabla = $tabla.'<td><a class="mostrarDadosAlta" style="cursor:pointer;" id="idRedirec'.$aux.'"> <input type = "hidden" name= "conf" class="mostDadosAltaPac" value="'.$dato.'">'.$valor["MOTIVO_CONSULTA"].'</a></td>';
						$tabla = $tabla.'<td><a class="mostrarDadosAlta" style="cursor:pointer;" id="idRedirec'.$aux.'"> <input type = "hidden" name= "conf" class="mostDadosAltaPac" value="'.$dato.'">'.$valor["CENTRO"].'</a></td>';
						$tabla = $tabla.'<td><a class="mostrarDadosAlta" style="cursor:pointer;" id="idRedirec'.$aux.'"> <input type = "hidden" name= "conf" class="mostDadosAltaPac" value="'.$dato.'">'.$valor["FIRMA"].'</a></td>';
						/*$tabla = $tabla.'<td><a class="mostrarDadosAlta" style="cursor:pointer;" id="idRedirec'.$aux.'"> <input type = "hidden" name= "conf" class="mostDadosAltaPac" value="'.$dato.'">'.$valor["NACIONALIDAD"].'</a></td>';
						$tabla = $tabla.'<td><a class="mostrarDadosAlta" style="cursor:pointer;" id="idRedirec'.$aux.'"> <input type = "hidden" name= "conf" class="mostDadosAltaPac" value="'.$dato.'">'.$valor["COMUNA"].'</a></td>';
						$tabla = $tabla.'<td><a class="mostrarDadosAlta" style="cursor:pointer;" id="idRedirec'.$aux.'"> <input type = "hidden" name= "conf" class="mostDadosAltaPac" value="'.$dato.'">'.$valor["PREVISION"].'</a></td>';
						$tabla = $tabla.'<td><a class="mostrarDadosAlta" style="cursor:pointer;" id="idRedirec'.$aux.'"> <input type = "hidden" name= "conf" class="mostDadosAltaPac" value="'.$dato.'">'.$valor["FIRMA"].'</a></td>';
						$tabla = $tabla.'<td><a class="mostrarDadosAlta" style="cursor:pointer;" id="idRedirec'.$aux.'"> <input type = "hidden" name= "conf" class="mostDadosAltaPac" value="'.$dato.'">VISUALIZAR DAU</a></td>';*/
						$tabla = $tabla.'</tr>';
					}
					$tabla = $tabla.'</tbody>';
					$tabla = $tabla.'</table>';					
				}
				echo $tabla."///_".$aux;
			break;

			case 'obtenerNspPacientes':
				$centroTrabajo = $_REQUEST["centroTrabajo"];
				$carpetaId = 7;		
				$aux = 0;	
				$fechaHoy = $_REQUEST['fechaHoy'];
				$modelo->setCarpeta($carpetaId);
				$modelo->setCentro($centroTrabajo);
				$modelo->setFechaHoy($fechaHoy);
				$data = $modelo->SP_OBTENER_REGISTRO_CANCELADAS($conn);
				//echo json_encode($data);
				$tabla = $tabla.$cabeceraTablaEgresos;
				
				$tabla = $tabla.'<tbody id="resultAlta">';
				if ($data[0]["data"] == "0") {
					$tabla = $tabla.'<tr>';
					$tabla = $tabla.'<td colspan = 14> No se han encontrado resultados ..</td>';
					$tabla = $tabla.'</tr>';
				}else{
					foreach($data as $clave => $valor){
						$dato = $valor["MOTIVO_CANCELADO"]."_/".$valor["OBSERVACION"];
						$aux = $aux+1;
						$tabla = $tabla.'<tr>';
						$tabla = $tabla.'<td><a class="mostrarNsp" style="cursor:pointer;" id="idRedirec'.$aux.'"> <input type = "hidden" name= "conf" class="mostrarNspPac" value="'.$dato.'">'.$aux.'</a></td>';
						$tabla = $tabla.'<td><a class="mostrarNsp" style="cursor:pointer;" id="idRedirec'.$aux.'"> <input type = "hidden" name= "conf" class="mostrarNspPac" value="'.$dato.'">'.$valor["FECHA_INGRESO"].'</a></td>';
						$tabla = $tabla.'<td><a class="mostrarNsp" style="cursor:pointer;" id="idRedirec'.$aux.'"> <input type = "hidden" name= "conf" class="mostrarNspPac" value="'.$dato.'">'.$valor["RUT"].'</a></td>';
						$tabla = $tabla.'<td><a class="mostrarNsp" style="cursor:pointer;" id="idRedirec'.$aux.'"> <input type = "hidden" name= "conf" class="mostrarNspPac" value="'.$dato.'">'.$valor["PACIENTE"].'</a></td>';
						$tabla = $tabla.'<td><a class="mostrarNsp" style="cursor:pointer;" id="idRedirec'.$aux.'"> <input type = "hidden" name= "conf" class="mostrarNspPac" value="'.$dato.'">'.$valor["EDAD"].'</a></td>';
						
						if ($valor["SEXO"] === "Femenino") {
							$tabla = $tabla.'<td><a class="mostrarNsp" style="cursor:pointer;" id="idRedirec'.$aux.'"> <input type = "hidden" name= "conf" class="mostrarNspPac" value="'.$dato.'">'.$mujer.'</a></td>';
						}else{
							$tabla = $tabla.'<td><a class="mostrarNsp" style="cursor:pointer;" id="idRedirec'.$aux.'"> <input type = "hidden" name= "conf" class="mostrarNspPac" value="'.$dato.'">'.$hombre.'</a></td>';
						}
						
						$tabla = $tabla.'<td><a class="mostrarNsp" style="cursor:pointer;" id="idRedirec'.$aux.'"> <input type = "hidden" name= "conf" class="mostrarNspPac" value="'.$dato.'">'.$valor["MOTIVO_CONSULTA"].'</a></td>';
						$tabla = $tabla.'<td><a class="mostrarNsp" style="cursor:pointer;" id="idRedirec'.$aux.'"> <input type = "hidden" name= "conf" class="mostrarNspPac" value="'.$dato.'">'.$valor["CENTRO"].'</a></td>';
						$tabla = $tabla.'<td><a class="mostrarNsp" style="cursor:pointer;" id="idRedirec'.$aux.'"> <input type = "hidden" name= "conf" class="mostrarNspPac" value="'.$dato.'">'.$valor["FIRMA"].'</a></td>';
						$tabla = $tabla.'</tr>';
					}
					$tabla = $tabla.'</tbody>';
					$tabla = $tabla.'</table>';					
				}

				echo $tabla."///_".$aux;
			break;

			case 'obtenerPacientesReportPacienteAlta':
				$tabla ='';
				$centroTrabajo = $_REQUEST["centroTrabajo"];
				$carpeta= 6;
				$aux = 0;
				$fechaBusqueda = $_REQUEST["fechaBusqueda"];
				$rut = $_REQUEST["rut"];				
				if ($rut === "") {$rut = 'NULL';}else{$rut= $rut;}
				if ($fechaBusqueda === "") {$fechaBusqueda = 'NULL';}else{$fechaBusqueda= $fechaBusqueda;}
				$modelo->setCarpeta($carpeta);
				$modelo->setCentro($centroTrabajo);
				$modelo->setFechaCreacion($fechaBusqueda);
				$modelo->setRutPac($rut);
				$data = $modelo->SP_OBTENER_ATENCION_FINALIZADA_DAODS_ALTA($conn);

				$tabla = $tabla.$cabeceraTablaEgresos;
				//$tabla = $tabla.'<th class="hidden-xs"> PDF DAU </th></thead>';
				$tabla = $tabla.'<tbody id="resultAlta">';
				if ($data[0]["data"] == "0") {
					$tabla = $tabla.'<tr>';
					$tabla = $tabla.'<td colspan = 14> No se han encontrado resultados ..</td>';
					$tabla = $tabla.'</tr>';
				}else{
					foreach($data as $clave => $valor){
						$dato = $valor["CON_ID"];
						$aux = $aux+1;
						$tabla = $tabla.'<tr>';
						
						$tabla = $tabla.'<td><a class="mostrarDadosAlta" style="cursor:pointer;" id="idRedirec'.$aux.'"> <input type = "hidden" name= "conf" class="mostDadosAltaPac" value="'.$dato.'">'.$aux.'</a></td>';
						$tabla = $tabla.'<td><a class="mostrarDadosAlta" style="cursor:pointer;" id="idRedirec'.$aux.'"> <input type = "hidden" name= "conf" class="mostDadosAltaPac" value="'.$dato.'">'.$valor["FECHA_INGRESO"].'</a></td>';
						$tabla = $tabla.'<td><a class="mostrarDadosAlta" style="cursor:pointer;" id="idRedirec'.$aux.'"> <input type = "hidden" name= "conf" class="mostDadosAltaPac" value="'.$dato.'">'.$valor["RUT"].'</a></td>';
						$tabla = $tabla.'<td><a class="mostrarDadosAlta" style="cursor:pointer;" id="idRedirec'.$aux.'"> <input type = "hidden" name= "conf" class="mostDadosAltaPac" value="'.$dato.'">'.$valor["PACIENTE"].'</a></td>';
						$tabla = $tabla.'<td><a class="mostrarDadosAlta" style="cursor:pointer;" id="idRedirec'.$aux.'"> <input type = "hidden" name= "conf" class="mostDadosAltaPac" value="'.$dato.'">'.$valor["EDAD"].'</a></td>';

						if ($valor["SEXO"] === "Femenino") {
							$tabla = $tabla.'<td><a class="mostrarDadosAlta" style="cursor:pointer;" id="idRedirec'.$aux.'"> <input type = "hidden" name= "conf" class="mostDadosAltaPac" value="'.$dato.'">'.$mujer.'</a></td>';
						}else{
							$tabla = $tabla.'<td><a class="mostrarDadosAlta" style="cursor:pointer;" id="idRedirec'.$aux.'"> <input type = "hidden" name= "conf" class="mostDadosAltaPac" value="'.$dato.'">'.$hombre.'</a></td>';
						}
						
						$tabla = $tabla.'<td><a class="mostrarDadosAlta" style="cursor:pointer;" id="idRedirec'.$aux.'"> <input type = "hidden" name= "conf" class="mostDadosAltaPac" value="'.$dato.'">'.$valor["MOTIVO_CONSULTA"].'</a></td>';
						$tabla = $tabla.'<td><a class="mostrarDadosAlta" style="cursor:pointer;" id="idRedirec'.$aux.'"> <input type = "hidden" name= "conf" class="mostDadosAltaPac" value="'.$dato.'">'.$valor["CENTRO"].'</a></td>';
						$tabla = $tabla.'<td><a class="mostrarDadosAlta" style="cursor:pointer;" id="idRedirec'.$aux.'"> <input type = "hidden" name= "conf" class="mostDadosAltaPac" value="'.$dato.'">'.$valor["FIRMA"].'</a></td>';
						/*$tabla = $tabla.'<td><a class="mostrarDadosAlta" style="cursor:pointer;" id="idRedirec'.$aux.'"> <input type = "hidden" name= "conf" class="mostDadosAltaPac" value="'.$dato.'">'.$valor["NACIONALIDAD"].'</a></td>';
						$tabla = $tabla.'<td><a class="mostrarDadosAlta" style="cursor:pointer;" id="idRedirec'.$aux.'"> <input type = "hidden" name= "conf" class="mostDadosAltaPac" value="'.$dato.'">'.$valor["COMUNA"].'</a></td>';
						$tabla = $tabla.'<td><a class="mostrarDadosAlta" style="cursor:pointer;" id="idRedirec'.$aux.'"> <input type = "hidden" name= "conf" class="mostDadosAltaPac" value="'.$dato.'">'.$valor["PREVISION"].'</a></td>';
						$tabla = $tabla.'<td><a class="mostrarDadosAlta" style="cursor:pointer;" id="idRedirec'.$aux.'"> <input type = "hidden" name= "conf" class="mostDadosAltaPac" value="'.$dato.'">'.$valor["FIRMA"].'</a></td>';
						$tabla = $tabla.'<td><a class="mostrarDadosAlta" style="cursor:pointer;" id="idRedirec'.$aux.'"> <input type = "hidden" name= "conf" class="mostDadosAltaPac" value="'.$dato.'">VISUALIZAR DAU</a></td>';*/
						$tabla = $tabla.'</tr>';
					}
					$tabla = $tabla.'</tbody>';
					$tabla = $tabla.'</table>';					
				}
				echo $tabla."///_".$aux;
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
				$tabla = $tabla.$cabeceraTablaEgresos;
				//$tabla = $tabla.'<th class="hidden-xs">  </th></thead>';
				$tabla = $tabla.'<tbody id="resultAlta">';
				if ($data[0]["data"] == "0") {
					$tabla = $tabla.'<tr>';
					$tabla = $tabla.'<td colspan = 14> No se han encontrado resultados ..</td>';
					$tabla = $tabla.'</tr>';
				}else{
					foreach($data as $clave => $valor){
						$dato = $valor["MOTIVO_CANCELADO"]."_/".$valor["OBSERVACION"]; //$dato = $valor["OBSERVACION"];
						$aux = $aux+1;
						$tabla = $tabla.'<tr>';
						$tabla = $tabla.'<td><a class="mostrarNsp" style="cursor:pointer;" id="idRedirec'.$aux.'"> <input type = "hidden" name= "conf" class="mostrarNspPac" value="'.$dato.'">'.$aux.'</a></td>';
						$tabla = $tabla.'<td><a class="mostrarNsp" style="cursor:pointer;" id="idRedirec'.$aux.'"> <input type = "hidden" name= "conf" class="mostrarNspPac" value="'.$dato.'">'.$valor["FECHA_INGRESO"].'</a></td>';
						$tabla = $tabla.'<td><a class="mostrarNsp" style="cursor:pointer;" id="idRedirec'.$aux.'"> <input type = "hidden" name= "conf" class="mostrarNspPac" value="'.$dato.'">'.$valor["RUT"].'</a></td>';
						$tabla = $tabla.'<td><a class="mostrarNsp" style="cursor:pointer;" id="idRedirec'.$aux.'"> <input type = "hidden" name= "conf" class="mostrarNspPac" value="'.$dato.'">'.$valor["PACIENTE"].'</a></td>';
						$tabla = $tabla.'<td><a class="mostrarNsp" style="cursor:pointer;" id="idRedirec'.$aux.'"> <input type = "hidden" name= "conf" class="mostrarNspPac" value="'.$dato.'">'.$valor["EDAD"].'</a></td>';
						if ($valor["SEXO"] === "Femenino") {
							$tabla = $tabla.'<td><a class="mostrarNsp" style="cursor:pointer;" id="idRedirec'.$aux.'"> <input type = "hidden" name= "conf" class="mostrarNspPac" value="'.$dato.'">'.$mujer.'</a></td>';
						}else{
							$tabla = $tabla.'<td><a class="mostrarNsp" style="cursor:pointer;" id="idRedirec'.$aux.'"> <input type = "hidden" name= "conf" class="mostrarNspPac" value="'.$dato.'">'.$hombre.'</a></td>';
						}
						$tabla = $tabla.'<td><a class="mostrarNsp" style="cursor:pointer;" id="idRedirec'.$aux.'"> <input type = "hidden" name= "conf" class="mostrarNspPac" value="'.$dato.'">'.$valor["MOTIVO_CONSULTA"].'</a></td>';
						$tabla = $tabla.'<td><a class="mostrarNsp" style="cursor:pointer;" id="idRedirec'.$aux.'"> <input type = "hidden" name= "conf" class="mostrarNspPac" value="'.$dato.'">'.$valor["CENTRO"].'</a></td>';
						$tabla = $tabla.'<td><a class="mostrarNsp" style="cursor:pointer;" id="idRedirec'.$aux.'"> <input type = "hidden" name= "conf" class="mostrarNspPac" value="'.$dato.'">'.$valor["FIRMA"].'</a></td>';
						$tabla = $tabla.'</tr>';
					}
					$tabla = $tabla.'</tbody>';
					$tabla = $tabla.'</table>';
				}

				echo $tabla."///_".$aux;
			break;

			case 'obtenerPacientesConsultaDau':
				$tabla ='';
				$carpeta= 6;
				$aux = 0;
				$fechaBusqueda = $_REQUEST["fechaBusqueda"];
				$rut = $_REQUEST["rut"];				
				if ($rut === "") {$rut = 'NULL';}else{$rut= "'".$rut."'";}
				if ($fechaBusqueda === "") {$fechaBusqueda = 'NULL';}else{$fechaBusqueda= "'".$fechaBusqueda."'";}
				$modelo->setFechaHoy($fechaBusqueda);
				$modelo->setRutPac($rut);
				$data = $modelo->SP_OBTENER_CONSULTA_DAU($conn);
				
				$tabla = $tabla.$cabeceraTablaEgresos;
				//$tabla = $tabla.'<th class="hidden-xs"> PDF DAU </th></thead>';
				$tabla = $tabla.'<tbody id="resultAlta">';
				if ($data[0]["data"] == "0") {
					$tabla = $tabla.'<tr>';
					$tabla = $tabla.'<td colspan = 14> No se han encontrado resultados ..</td>';
					$tabla = $tabla.'</tr>';
				}else{
					foreach($data as $clave => $valor){
						$dato = $valor["CON_ID"];
						$aux = $aux+1;
						$tabla = $tabla.'<tr>';
						$tabla = $tabla.'<td><a class="mostrarConsultaDau" style="cursor:pointer;" id="idRedirec'.$aux.'"> <input type = "hidden" name= "conf" class="mostConsultaDau" value="'.$dato.'">'.$aux.'</a></td>';
						$tabla = $tabla.'<td><a class="mostrarConsultaDau" style="cursor:pointer;" id="idRedirec'.$aux.'"> <input type = "hidden" name= "conf" class="mostConsultaDau" value="'.$dato.'">'.$valor["FECHA_INGRESO"].'</a></td>';
						$tabla = $tabla.'<td><a class="mostrarConsultaDau" style="cursor:pointer;" id="idRedirec'.$aux.'"> <input type = "hidden" name= "conf" class="mostConsultaDau" value="'.$dato.'">'.$valor["RUT"].'</a></td>';
						$tabla = $tabla.'<td><a class="mostrarConsultaDau" style="cursor:pointer;" id="idRedirec'.$aux.'"> <input type = "hidden" name= "conf" class="mostConsultaDau" value="'.$dato.'">'.$valor["PACIENTE"].'</a></td>';
						$tabla = $tabla.'<td><a class="mostrarConsultaDau" style="cursor:pointer;" id="idRedirec'.$aux.'"> <input type = "hidden" name= "conf" class="mostConsultaDau" value="'.$dato.'">'.$valor["EDAD"].'</a></td>';

						if ($valor["SEXO"] === "Femenino") {
							$tabla = $tabla.'<td><a class="mostrarConsultaDau" style="cursor:pointer;" id="idRedirec'.$aux.'"> <input type = "hidden" name= "conf" class="mostConsultaDau" value="'.$dato.'">'.$mujer.'</a></td>';
						}else{
							$tabla = $tabla.'<td><a class="mostrarConsultaDau" style="cursor:pointer;" id="idRedirec'.$aux.'"> <input type = "hidden" name= "conf" class="mostConsultaDau" value="'.$dato.'">'.$hombre.'</a></td>';
						}

						$tabla = $tabla.'<td><a class="mostrarConsultaDau" style="cursor:pointer;" id="idRedirec'.$aux.'"> <input type = "hidden" name= "conf" class="mostConsultaDau" value="'.$dato.'">'.$valor["MOTIVO_CONSULTA"].'</a></td>';
						$tabla = $tabla.'<td><a class="mostrarConsultaDau" style="cursor:pointer;" id="idRedirec'.$aux.'"> <input type = "hidden" name= "conf" class="mostConsultaDau" value="'.$dato.'">'.$valor["CENTRO"].'</a></td>';
						$tabla = $tabla.'<td><a class="mostrarConsultaDau" style="cursor:pointer;" id="idRedirec'.$aux.'"> <input type = "hidden" name= "conf" class="mostConsultaDau" value="'.$dato.'">'.$valor["FIRMA"].'</a></td>';
						/*$tabla = $tabla.'<td><a class="mostrarConsultaDau" style="cursor:pointer;" id="idRedirec'.$aux.'"> <input type = "hidden" name= "conf" class="mostConsultaDau" value="'.$dato.'">'.$valor["NACIONALIDAD"].'</a></td>';
						$tabla = $tabla.'<td><a class="mostrarConsultaDau" style="cursor:pointer;" id="idRedirec'.$aux.'"> <input type = "hidden" name= "conf" class="mostConsultaDau" value="'.$dato.'">'.$valor["COMUNA"].'</a></td>';
						$tabla = $tabla.'<td><a class="mostrarConsultaDau" style="cursor:pointer;" id="idRedirec'.$aux.'"> <input type = "hidden" name= "conf" class="mostConsultaDau" value="'.$dato.'">'.$valor["PREVISION"].'</a></td>';
						$tabla = $tabla.'<td><a class="mostrarConsultaDau" style="cursor:pointer;" id="idRedirec'.$aux.'"> <input type = "hidden" name= "conf" class="mostConsultaDau" value="'.$dato.'">'.$valor["FIRMA"].'</a></td>';
						$tabla = $tabla.'<td><a class="mostrarConsultaDau" style="cursor:pointer;" id="idRedirec'.$aux.'"> <input type = "hidden" name= "conf" class="mostConsultaDau" value="'.$dato.'">VISUALIZAR DAU</a></td>';*/
						$tabla = $tabla.'</tr>';
					}
					$tabla = $tabla.'</tbody>';
					$tabla = $tabla.'</table>';					
				}
				echo $tabla."///_".$aux;
			break;

			case 'obtenerEstadoPacientes':
				$conId = $_REQUEST['conId'];
				$bloqueo = $_REQUEST['bloqueo'];
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
			default: print_r("No se ha podido realizar ninguna acción");break;
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