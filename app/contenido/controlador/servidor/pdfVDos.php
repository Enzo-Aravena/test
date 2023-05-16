<?php

    require_once ("../../../../lib/conexion/conexion.php");
    require_once("../../modelo/modeloAltaEgreso.php");
    require_once '../../../../lib/dompdf/autoload.inc.php';
    use Dompdf\Dompdf;
    use Dompdf\Options; 
    use Dompdf\FontMetrics;
    $bd = new Conexion();
    $modelo = new altaEgreso();
    $conn = $bd->Conectar();
    $conId = "195094";// 195094 mas texto
    $carpeta  = 99;
    $modelo->setConId($conId);
    $modelo->setCarpeta($carpeta);
    $data = $modelo->SP_OBTENER_ANTECEDENTES_PARA_PDF($conn);

    //VARIABLES GLOBALES
    $examenFisico= "";
    $indicaciones= "";

    $html = file_get_contents("prueba.html");
    foreach($data as $clave => $valor){
        switch ($valor["CENTRO_ATENCION"]) {
            case 'C.SILVA HENRIQUEZ':   $code =' C. SILVA HENRIQUEZ';   break;
            case 'PADRE GERARDO WHELAN':    $code =' P. GERARDO WHELAN'; break;
            case 'URGENCIA CESFAM CAROL URZUA': $code ='URG. CESFAM C.U.';  break;
            case 'URGENCIA CESFAM PADRE GERARDO WHELAN':    $code =' URG. CESFAM PADRE G.W.';  break;
            default: $code =''.$valor["CENTRO_ATENCION"];   break;
        }

        //echo $valor["CENTRO_ATENCION"];
        $html = str_replace("<%CENTRO_ATENCION%>",$code,$html);
        $html = str_replace("<%num_dau%>",$valor["DAU"],$html);
        $html = str_replace("<%ape_pat%>",$valor["APELLIDO_PATERNO"],$html);
        $html = str_replace("<%ape_mat%>",$valor["APELLIDO_MATERNO"],$html);
        $html = str_replace("<%nombres%>",$valor["NOMBRE"],$html);
        $html = str_replace("<%documento%>",$valor["RUT_PASAPORTE"],$html);
        $html = str_replace("<%fechaNac%>",$valor["FECHA_NACIMIENTO"],$html);
        $html = str_replace("<%edad%>",$valor["EDAD"],$html);
        $html = str_replace("<%SEXO%>",$valor["SEXO"],$html);
        $html = str_replace("<%PREVISION%>",$valor["PREVISION"],$html);
        $html = str_replace("<%TELEFONO%>",$valor["TELEFONO"],$html);
        $html = str_replace("<%DIRECCION%>",$valor["DIRECCION"],$html);
        $html = str_replace("<%COMUNA%>",$valor["COMUNA"],$html);
        $html = str_replace("<%FECHA_INGRESO%>",$valor["FECHA_INGRESO"],$html);
        $html = str_replace("<%HORA%>",$valor["HORA"],$html);
        $html = str_replace("<%NOMBRE_ACOMPANANTE%>",$valor["NOMBRE_ACOMPANANTE"],$html);
        $html = str_replace("<%COMUNA%>",$valor["COMUNA"],$html);
        $html = str_replace("<%CORREO_ELECTRONICO%>",$valor["CORREO_ELECTRONICO"],$html);
        $html = str_replace("<%MOTIVO_CONSULTA%>",$valor["MOTIVO_CONSULTA"],$html);
        $html = str_replace("<%TIPO_CONSULTA%>",$valor["TIPO_CONSULTA"],$html);
        $html = str_replace("<%MEDIO_TRANSPORTE%>",$valor["MEDIO_TRANSPORTE"],$html);
        $html = str_replace("<%FC%>",$valor["FC"],$html);
        $html = str_replace("<%FR%>",$valor["FR"],$html);
        $html = str_replace("<%T_AUX%>",$valor["T_AUX"],$html);
        $html = str_replace("<%SAT_02%>",$valor["SAT_02"],$html);
        $html = str_replace("<%PA_SISTOLICA%>",$valor["PA_SISTOLICA"],$html);
        $html = str_replace("<%PA_DIASTOLICA%>",$valor["PA_DIASTOLICA"],$html);
        $html = str_replace("<%HGT%>",$valor["HGT"],$html);
        $html = str_replace("<%E_EVA%>",$valor["E_EVA"],$html);
        $html = str_replace("<%E_GLASGOW%>",$valor["E_GLASGOW"],$html);
        $html = str_replace("<%PESO%>",$valor["PESO"],$html);
        $html = str_replace("<%ALERGIAS%>",$valor["ALERGIAS"],$html);
        $html = str_replace("<%HORA_ATENCION_MEDICA%>",$valor["HORA_ATENCION_MEDICA"],$html);
        $html = str_replace("<%PRONOSTICO_MEDICO%>",$valor["PRONOSTICO_MEDICO"],$html);
        $html = str_replace("<%ALCOHOLEMIA%>",$valor["ALCOHOLEMIA"],$html);
        $html = str_replace("<%N_FRASCO%>",$valor["N_FRASCO"],$html);
        $html = str_replace("<%ANAMNESIS%>",$valor["ANAMNESIS"],$html);

        //EXAMEN FISICO
        if (( $valor["CABEZA"] === "NO"  || $valor["CABEZA"] === "No" || $valor["CABEZA"] === "no" )  &&
            ($valor["TORAX"] === "NO"  || $valor["TORAX"] === "No" || $valor["TORAX"] === "no" ) &&
            ($valor["ABDOMEN"] === "NO"  || $valor["ABDOMEN"] === "No" || $valor["ABDOMEN"] === "no" ) &&
            ($valor["PELVIS"] === "NO"  || $valor["PELVIS"] === "No" || $valor["PELVIS"] === "no" ) &&
            ($valor["EXT_SUPERIORES"] === "NO"  || $valor["EXT_SUPERIORES"] === "No" || $valor["EXT_SUPERIORES"] === "no" ) &&
            ($valor["EXT_INFERIORES"] === "NO"  || $valor["EXT_INFERIORES"] === "No" || $valor["EXT_INFERIORES"] === "no"  )&& 
            ($valor["EX_NEUROLOGICO"] === "NO"  || $valor["EX_NEUROLOGICO"] === "No" || $valor["EX_NEUROLOGICO"] === "no" ) ) {
                $examenFisico .= "Sin observaciones.";
            }else{
                if($valor["CABEZA"] === "Si" || $valor["CABEZA"] === "SI" || $valor["CABEZA"] === "si"){
                    $examenFisico .= "Cabeza : ".$valor["CABEZA_TEXTO"]."<br>";
                }
                if($valor["TORAX"] === "Si" || $valor["TORAX"] === "SI" || $valor["TORAX"] === "si"){
                    $examenFisico .= "Tórax : ".$valor["TORAX_TEXTO"]."<br>";
                }
                if($valor["ABDOMEN"] === "Si" || $valor["ABDOMEN"] === "SI" || $valor["ABDOMEN"] === "si"){
                    $examenFisico .= "Abdomen : ".$valor["ABDOMEN_TEXTO"]."<br>";
                }
                if($valor["PELVIS"] === "Si" || $valor["PELVIS"] === "SI" || $valor["PELVIS"] === "si"){
                    $examenFisico .= "Pelvis: ".$valor["PELVIS_TEXTO"]."<br>";
                }
                if($valor["EXT_SUPERIORES"] === "Si" || $valor["EXT_SUPERIORES"] === "SI" || $valor["EXT_SUPERIORES"] === "si"){
                    $examenFisico .= "Ext. Superiores: ".$valor["EXT_SUPERIORES_TEXTO"]."<br>";
                }
                if($valor["EXT_INFERIORES"] === "Si" || $valor["EXT_INFERIORES"] === "SI" || $valor["EXT_INFERIORES"] === "si"){
                    $examenFisico .= "Ext. Inferiores: ".$valor["EXT_INFERIORES_TEXTO"]."<br>";
                }
                if($valor["EX_NEUROLOGICO"] === "Si" || $valor["EX_NEUROLOGICO"] === "SI" || $valor["EX_NEUROLOGICO"] === "si"){
                    $examenFisico .= "Ex. Neurológico: ".$valor["EX_NEUROLOGICO_TEXTO"]."<br>";
                }
            }
        $html = str_replace("<%examenFisicoDetalle%>",$examenFisico,$html);


        //INDICACIONES
        if($valor["TRATAMIENTO_1_IND_1"] === "" && $valor["TRATAMIENTO_1_IND_2"] === "" && $valor["TRATAMIENTO_1_IND_3"] === "" && $valor["TRATAMIENTO_2_IND_1"] === "" && $valor["TRATAMIENTO_2_IND_2"] === "" && $valor["TRATAMIENTO_2_IND_3"] === "" && $valor["TRATAMIENTO_3_IND_1"] === "" && $valor["TRATAMIENTO_3_IND_2"] === "" && $valor["TRATAMIENTO_3_IND_3"] === ""){
            $indicaciones .= ' Sin observaciones. ';
            }else{
           //indicaciones 1
           if($valor["TRATAMIENTO_1_IND_1"] !== "" && $valor["TRATAMIENTO_1_IND_2"] !== "" && $valor["TRATAMIENTO_1_IND_3"] !== ""){
               $indicaciones .= 'Indicaciones 1:'.$valor["TRATAMIENTO_1_IND_1"]." , ".$valor["TRATAMIENTO_1_IND_2"]." , ".$valor["TRATAMIENTO_1_IND_3"].'<br>';
           }else
               if($valor["TRATAMIENTO_1_IND_1"] !== "" && $valor["TRATAMIENTO_1_IND_2"] === "" && $valor["TRATAMIENTO_1_IND_3"] === ""){
                   $indicaciones .= 'Indicaciones 1:'.$valor["TRATAMIENTO_1_IND_1"].'<br>';
               }else
                   if($valor["TRATAMIENTO_1_IND_1"] !== "" && $valor["TRATAMIENTO_1_IND_2"] !== "" && $valor["TRATAMIENTO_1_IND_3"] === ""){
                       $indicaciones .= 'Indicaciones 1:'.$valor["TRATAMIENTO_1_IND_1"]." , ".$valor["TRATAMIENTO_1_IND_2"].'<br>';
                   }

           //INDICACIONES 2
           if($valor["TRATAMIENTO_2_IND_1"] !== "" && $valor["TRATAMIENTO_2_IND_2"] !== "" && $valor["TRATAMIENTO_2_IND_3"] !== ""){
               $indicaciones .= 'Indicaciones 2:'.$valor["TRATAMIENTO_2_IND_1"]." , ".$valor["TRATAMIENTO_2_IND_2"]." , ".$valor["TRATAMIENTO_2_IND_3"].'<br>';
           }else
               if($valor["TRATAMIENTO_2_IND_1"] !== "" && $valor["TRATAMIENTO_2_IND_2"] === "" && $valor["TRATAMIENTO_2_IND_3"] === ""){
                   $indicaciones .= 'Indicaciones 2:'.$valor["TRATAMIENTO_2_IND_1"].'<br>';
               }else
                   if($valor["TRATAMIENTO_2_IND_1"] !== "" && $valor["TRATAMIENTO_2_IND_2"] !== "" && $valor["TRATAMIENTO_2_IND_3"] === ""){
                       $indicaciones .= 'Indicaciones 2:'.$valor["TRATAMIENTO_2_IND_1"]." , ".$valor["TRATAMIENTO_2_IND_2"].'<br>';
                   }

           //INDICACIONES 3
           if($valor["TRATAMIENTO_3_IND_1"] !== "" && $valor["TRATAMIENTO_3_IND_2"] !== "" && $valor["TRATAMIENTO_3_IND_3"] !== ""){
               $indicaciones .= 'Indicaciones 3:'.$valor["TRATAMIENTO_3_IND_1"]." , ".$valor["TRATAMIENTO_3_IND_2"]." , ".$valor["TRATAMIENTO_3_IND_3"].'<br>';
           }else
               if($valor["TRATAMIENTO_3_IND_1"] !== "" && $valor["TRATAMIENTO_3_IND_2"] === "" && $valor["TRATAMIENTO_3_IND_3"] === ""){
                   $indicaciones .= 'Indicaciones 3:'.$valor["TRATAMIENTO_3_IND_1"].'<br>';
               }else
                   if($valor["TRATAMIENTO_3_IND_1"] !== "" && $valor["TRATAMIENTO_3_IND_2"] !== "" && $valor["TRATAMIENTO_3_IND_3"] === ""){
                       $indicaciones .= 'Indicaciones 3:'.$valor["TRATAMIENTO_3_IND_1"]." , ".$valor["TRATAMIENTO_3_IND_2"].'<br>';
                   }

        }// END ELSE
       
        $html = str_replace("<%indicaciones%>",$indicaciones,$html);
        $html = str_replace("<%EXAMEN_SANGRE_TEXTO%>",$valor["EXAMEN_SANGRE_TEXTO"],$html);
        $html = str_replace("<%RADIOGRAFIA_TEXTO%>",$valor["RADIOGRAFIA_TEXTO"],$html);
        $html = str_replace("<%ECG%>",$valor["ECG"],$html);
        //INICIO ULTIMOS SIGNOS VITALES 
        $ultimosSignos= explode("|", $valor["ULTIMO_SV"]);
        $html = str_replace("<%FCFINAL%>",$valor["FC"],$html);
        $html = str_replace("<%FRFINAL%>",$valor["FR"],$html);
        $html = str_replace("<%T_AUXFINAL%>",$valor["T_AUX"],$html);
        $html = str_replace("<%SAT_02FINAL%>",$valor["SAT_02"],$html);
        $html = str_replace("<%PA_SISTOLICAFINAL%>",$valor["PA_SISTOLICA"],$html);
        $html = str_replace("<%PA_DIASTOLICAFINAL%>",$valor["PA_DIASTOLICA"],$html);
        $html = str_replace("<%HGTFINAL%>",$valor["HGT"],$html);
        $html = str_replace("<%E_EVAFINAL%>",$valor["E_EVA"],$html);
        $html = str_replace("<%E_GLASGOWFINAL%>",$valor["E_GLASGOW"],$html);
        //FIN ULTIMOS SIGNOS VITALES
        $html = str_replace("<%EVOLUCION_OBSERVACION%>",nl2br($valor["EVOLUCION_OBSERVACION"]),$html);
        $html = str_replace("<%DIAGNOSTICO_EGRESO%>",$valor["DIAGNOSTICO_EGRESO"],$html);
        $html = str_replace("<%INDICACIONES_RECETA%>",$valor["INDICACIONES_RECETA"],$html);
        $html = str_replace("<%TIPO_EGRESO%>",$valor["TIPO_EGRESO"],$html);
        $html = str_replace("<%CENTRO_DERIVACION%>",$valor["CENTRO_DERIVACION"],$html);
        $html = str_replace("<%CATEGORIZACION_EGRESO%>",$valor["CATEGORIZACION_EGRESO"],$html);
        $html = str_replace("<%HO RA_EGRESO%>",$valor["HORA_EGRESO"],$html);
        $html = str_replace("<%RUT_PROFESIONAL%>",$valor["RUT_PROFESIONAL"],$html);
        $html = str_replace("<%NOMBRE_PROFESIONAL%>",$valor["NOMBRE_PROFESIONAL"],$html);

        /* ==================================================================== */
        // INTERCONSULTAS
        $resultado_examen = "";
        $resultado_radiografia = "";
        $resultado_ecg = "";
        $Consulta = "";
        //CHECKBOX_VALIDACION

        if($valor["CONFIRMAR_DIAGNOSTICO"]  === "1"){
            $Consulta .='<label style="font-size:13px;">
                            <input type="checkbox" id="cbox1" checked=""> Confirmación Diagnóstica
                        </label>';
        }else{
            $Consulta .='<label style="font-size:13px;">
                            <input type="checkbox" id="cbox1"> Confirmación Diagnóstica
                        </label>';
        }
        if($valor["REALIZAR_TTO"] === "1"){
            $Consulta .='<label style="font-size:13px;">
                            <input type="checkbox" id="cbox1" checked=""> Realizar tratamiento
                        </label>';
        }else{
            $Consulta .='<label style="font-size:13px;">
                            <input type="checkbox" id="cbox1"> Realizar tratamiento
                        </label>';
        }
        if($valor["SEGUIMIENTO"] === "1"){
            $Consulta .='<label style="font-size:13px;">
                            <input type="checkbox" id="cbox1" checked=""> Seguimiento
                        </label>';
        }else{
            $Consulta .='<label style="font-size:13px;">
                            <input type="checkbox" id="cbox1"> Seguimiento
                        </label>';
        }
        if($valor["OTRA_CONSULTA"] === "1"){
            $Consulta .='<label style="font-size:13px;">
                            <input type="checkbox" id="cbox1" checked=""> Otro
                        </label>';
        }else{
            $Consulta .='<label style="font-size:13px;">
                            <input type="checkbox" id="cbox1"> Otro
                        </label>';
        }

        $html = str_replace("<%CHECKBOX_VALIDACION%>",$Consulta,$html);
        if ($valor['EXAMEN_SANGRE'] === "1") {$resultado_examen =$valor['EXAMEN_SANGRE_TEXTO'].'<br>';}else{$resultado_examen ='-';}
        if ($valor['ECG'] === "1") {$resultado_radiografia ='SÍ'.'<br>';}else{$resultado_radiografia =' - ';}
        if ($valor['RADIOGRAFIA'] === "1") {$resultado_ecg .= $valor['RADIOGRAFIA_TEXTO'].'<br>';}else{$resultado_ecg .=' - <br>';}
        $html = str_replace("<%resultado_examen%>",$resultado_examen,$html);
        $html = str_replace("<%resultado_radiografia%>",$resultado_radiografia,$html);
        $html = str_replace("<%resultado_ecg%>",$resultado_ecg,$html);
        $html = str_replace("<%OTRA_CONSULTA_TEXTO%>",$valor['OTRA_CONSULTA_TEXTO'],$html);
        $html = str_replace("<%ESPECIALIDAD%>",$valor['ESPECIALIDAD'],$html);
        
        

        
        

    }// END FOR

    $dompdf = new DOMPDF();
    $options = new Options(); 
    $options->set('isPhpEnabled', 'true');
    $dompdf->load_html($html);  
    $dompdf->render();
    $canvas = $dompdf->get_canvas();
    $canvas->page_text(555, 750, "","bold", 10, array(0,0,0));
    $canvas->page_script('
    // $pdf is the variable containing a reference to the canvas object provided by dompdf
    $pdf->line(10,730,800,730,array(0,0,0),1);
    ');

$dompdf->stream("prueba.pdf", array("Attachment" => false));

?>