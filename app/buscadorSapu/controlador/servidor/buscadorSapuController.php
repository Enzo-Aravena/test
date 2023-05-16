<?php

	require_once ("../../../../lib/conexion/conexionDb_Pagina.php");
	require_once("../../modelo/modeloBuscadorSapu.php");

	$bd = new Conexion();
	$modelo = new buscadorSapu();

	$conn = $bd->Conectar();
	$evento = $_REQUEST['evento'];


	switch ($evento) {
		case 'buscarPaciente':
			$rut  	= $_REQUEST['rut'];
			$fecha  = $_REQUEST['fecha'];

			if ($fecha == "") {
				$fecha = "NULL";
			}else{
				$fecha = "'".$fecha."'";
			}

			$rut = "'".$rut."'";
			$modelo->setRut($rut);
			$modelo->setFecha($fecha);
			$data = $modelo->OBTENER_ATENCION_SAPU($conn);
			if ($data[0]["data"] == "0") {
				echo "0";
			}else{
				echo  json_encode($data);
			}
		break;

		case 'exportTable':
			$tabla = "";
			$rut  	= $_REQUEST['rut'];
			$fecha  = $_REQUEST['fecha'];

			if ($fecha == "") {
				$fecha = "NULL";
			}else{
				$fecha = "'".$fecha."'";
			}

			$rut = "'".$rut."'";
			$modelo->setRut($rut);
			$modelo->setFecha($fecha);
			$data = $modelo->OBTENER_ATENCION_SAPU($conn);

			if ($data[0]["data"] == "0") {
				echo "0";
			}else{
				header("Content-Type: application/vnd.ms-excel; charset=utf-8");
				if ($fecha == "") {
					$fecha = "NULL";
					header('Content-Disposition: attachment; filename=Reporte_busqueda_Paciente.xls');
				}else{
					$dato = explode("/", $fecha);
					$fechaDescarga = $dato[0]."_".$dato[1]."_".$dato[2];
					header('Content-Disposition: attachment; filename=Reporte_busqueda_Paciente_'.$fecha.'.xls');
				}
				$tabla .= "<table class='table table-bordered'>";
					$tabla .= "<tr style='background: #990000;color: white;'>";
						$tabla .= "<td style='mso-style-parent:style0;border:.5pt solid windowtext;' >CENTRO_ATENCION</td>";
						$tabla .= "<td style='mso-style-parent:style0;border:.5pt solid windowtext;' >NOMBRE_PROFESIONAL</td>";
						$tabla .= "<td style='mso-style-parent:style0;border:.5pt solid windowtext;' >PROFESION</td>";
						$tabla .= "<td style='mso-style-parent:style0;border:.5pt solid windowtext;' >RUT_PROFESIONAL</td>";
						$tabla .= "<td style='mso-style-parent:style0;border:.5pt solid windowtext;' >CENTRO_PACIENTE</td>";
						$tabla .= "<td style='mso-style-parent:style0;border:.5pt solid windowtext;' >SECTOR_PACIENTE</td>";
						$tabla .= "<td style='mso-style-parent:style0;border:.5pt solid windowtext;' >RUT_PACIENTE</td>";
						$tabla .= "<td style='mso-style-parent:style0;border:.5pt solid windowtext;' >NOMBRE_PACIENTE</td>";
						$tabla .= "<td style='mso-style-parent:style0;border:.5pt solid windowtext;' >SEXO</td>";
						$tabla .= "<td style='mso-style-parent:style0;border:.5pt solid windowtext;' >DOMICILIO</td>";
						$tabla .= "<td style='mso-style-parent:style0;border:.5pt solid windowtext;' >FECHA_NACIMIENTO</td>";
						$tabla .= "<td style='mso-style-parent:style0;border:.5pt solid windowtext;' >EDAD_VISITA_PACIENTE</td>";
						$tabla .= "<td style='mso-style-parent:style0;border:.5pt solid windowtext;' >RANGO_ETARIO_1</td>";
						$tabla .= "<td style='mso-style-parent:style0;border:.5pt solid windowtext;' >RANGO_ETARIO_2</td>";
						$tabla .= "<td style='mso-style-parent:style0;border:.5pt solid windowtext;' >EPISODIO</td>";
						$tabla .= "<td style='mso-style-parent:style0;border:.5pt solid windowtext;' >PROTOCOLO</td>";
						$tabla .= "<td style='mso-style-parent:style0;border:.5pt solid windowtext;' >FECHA_ATENCION</td>";
						$tabla .= "<td style='mso-style-parent:style0;border:.5pt solid windowtext;' >HORA_ATENCION</td>";
						$tabla .= "<td style='mso-style-parent:style0;border:.5pt solid windowtext;' >NUM_ATENCION_SAPU</td>";
						$tabla .= "<td style='mso-style-parent:style0;border:.5pt solid windowtext;' >TIPO_INSCRIPCION</td>";
						$tabla .= "<td style='mso-style-parent:style0;border:.5pt solid windowtext;' >MOTIVO_CONSULTA</td>";
						$tabla .= "<td style='mso-style-parent:style0;border:.5pt solid windowtext;' >EMBARAZADA</td>";
						$tabla .= "<td style='mso-style-parent:style0;border:.5pt solid windowtext;' >CONSTATACION_DE_LESIONES</td>";
						$tabla .= "<td style='mso-style-parent:style0;border:.5pt solid windowtext;' >ALCOHOLEMIA</td>";
						$tabla .= "<td style='mso-style-parent:style0;border:.5pt solid windowtext;' >REALIZA_REANIMACION</td>";
						$tabla .= "<td style='mso-style-parent:style0;border:.5pt solid windowtext;' >PACIENTE_FALLECIDO</td>";
						$tabla .= "<td style='mso-style-parent:style0;border:.5pt solid windowtext;' >NSP</td>";
						$tabla .= "<td style='mso-style-parent:style0;border:.5pt solid windowtext;' >derivacion_urgencia</td>";
						$tabla .= "<td style='mso-style-parent:style0;border:.5pt solid windowtext;' >derivacion_urgencia_otro</td>";
						$tabla .= "<td style='mso-style-parent:style0;border:.5pt solid windowtext;' >CAT_URGENCIA</td>";
						$tabla .= "<td style='mso-style-parent:style0;border:.5pt solid windowtext;' >DIAGNOSTICO</td>";
						$tabla .= "<td style='mso-style-parent:style0;border:.5pt solid windowtext;' >PAC_ID</td>";
						$tabla .= "<td style='mso-style-parent:style0;border:.5pt solid windowtext;' >TIPO_REGISTRO</td>";
					$tabla .= "</tr>";					
					foreach ($data as $key => $valor) {
						$tabla .= "<tr>";
							$tabla .= "<td style='mso-style-parent:style0;border:.5pt solid windowtext;'>". $valor['CENTRO_ATENCION']."</td>";
							$tabla .= "<td style='mso-style-parent:style0;border:.5pt solid windowtext;'>". $valor['NOMBRE_PROFESIONAL']."</td>";
							$tabla .= "<td style='mso-style-parent:style0;border:.5pt solid windowtext;'>". $valor['PROFESION']."</td>";
							$tabla .= "<td style='mso-style-parent:style0;border:.5pt solid windowtext;'>". $valor['RUT_PROFESIONAL']."</td>";
							$tabla .= "<td style='mso-style-parent:style0;border:.5pt solid windowtext;'>". $valor['CENTRO_PACIENTE']."</td>";
							$tabla .= "<td style='mso-style-parent:style0;border:.5pt solid windowtext;'>". $valor['SECTOR_PACIENTE']."</td>";
							$tabla .= "<td style='mso-style-parent:style0;border:.5pt solid windowtext;'>". $valor['RUT_PACIENTE']."</td>";
							$tabla .= "<td style='mso-style-parent:style0;border:.5pt solid windowtext;'>". $valor['NOMBRE_PACIENTE']."</td>";
							$tabla .= "<td style='mso-style-parent:style0;border:.5pt solid windowtext;'>". $valor['SEXO']."</td>";
							$tabla .= "<td style='mso-style-parent:style0;border:.5pt solid windowtext;'>". $valor['DOMICILIO']."</td>";
							$tabla .= "<td style='mso-style-parent:style0;border:.5pt solid windowtext;'>". $valor['FECHA_NACIMIENTO']."</td>";
							$tabla .= "<td style='mso-style-parent:style0;border:.5pt solid windowtext;'>". $valor['EDAD_VISITA_PACIENTE']."</td>";
							$tabla .= "<td style='mso-style-parent:style0;border:.5pt solid windowtext;'>". $valor['RANGO_ETARIO_1']."</td>";
							$tabla .= "<td style='mso-style-parent:style0;border:.5pt solid windowtext;'>". $valor['RANGO_ETARIO_2']."</td>";
							$tabla .= "<td style='mso-style-parent:style0;border:.5pt solid windowtext;'>". $valor['EPISODIO']."</td>";
							$tabla .= "<td style='mso-style-parent:style0;border:.5pt solid windowtext;'>". $valor['PROTOCOLO']."</td>";
							$tabla .= "<td style='mso-style-parent:style0;border:.5pt solid windowtext;'>". $valor['FECHA_ATENCION']."</td>";
							$tabla .= "<td style='mso-style-parent:style0;border:.5pt solid windowtext;'>". $valor['HORA_ATENCION']."</td>";
							$tabla .= "<td style='mso-style-parent:style0;border:.5pt solid windowtext;'>". $valor['NUM_ATENCION_SAPU']."</td>";
							$tabla .= "<td style='mso-style-parent:style0;border:.5pt solid windowtext;'>". $valor['TIPO_INSCRIPCION']."</td>";
							$tabla .= "<td style='mso-style-parent:style0;border:.5pt solid windowtext;'>". $valor['MOTIVO_CONSULTA']."</td>";
							$tabla .= "<td style='mso-style-parent:style0;border:.5pt solid windowtext;'>". $valor['EMBARAZADA']."</td>";
							$tabla .= "<td style='mso-style-parent:style0;border:.5pt solid windowtext;'>". $valor['CONSTATACION_DE_LESIONES']."</td>";
							$tabla .= "<td style='mso-style-parent:style0;border:.5pt solid windowtext;'>". $valor['ALCOHOLEMIA']."</td>";
							$tabla .= "<td style='mso-style-parent:style0;border:.5pt solid windowtext;'>". $valor['REALIZA_REANIMACION']."</td>";
							$tabla .= "<td style='mso-style-parent:style0;border:.5pt solid windowtext;'>". $valor['PACIENTE_FALLECIDO']."</td>";
							$tabla .= "<td style='mso-style-parent:style0;border:.5pt solid windowtext;'>". $valor['NSP']."</td>";
							$tabla .= "<td style='mso-style-parent:style0;border:.5pt solid windowtext;'>". $valor['derivacion_urgencia']."</td>";
							$tabla .= "<td style='mso-style-parent:style0;border:.5pt solid windowtext;'>". $valor['derivacion_urgencia_otro']."</td>";
							$tabla .= "<td style='mso-style-parent:style0;border:.5pt solid windowtext;'>". $valor['CAT_URGENCIA']."</td>";
							$tabla .= "<td style='mso-style-parent:style0;border:.5pt solid windowtext;'>". $valor['DIAGNOSTICO']."</td>";
							$tabla .= "<td style='mso-style-parent:style0;border:.5pt solid windowtext;'>". $valor['PAC_ID']."</td>";
							$tabla .= "<td style='mso-style-parent:style0;border:.5pt solid windowtext;'>". $valor['TIPO_REGISTRO']."</td>";
						$tabla .= "</tr>";
					}
				$tabla .= "</table>";
				//echo $tabla;
				print utf8_decode($tabla);
			}
		break;

	}//end switch
?>