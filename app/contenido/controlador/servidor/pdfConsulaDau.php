<?php
    session_start();
    error_reporting(0);
    set_time_limit(300);
    require_once ("../../../../lib/conexion/conexion.php");
    require_once("../../modelo/modeloAltaEgreso.php");

    $bd = new Conexion();
    $modelo = new altaEgreso();

    $conn = $bd->Conectar();

    // Cargamos la librería dompdf que hemos instalado en la carpeta dompdf
    require_once '../../../../lib/dompdf/autoload.inc.php';
    use Dompdf\Dompdf;
    $dompdf = new DOMPDF();
    header('Content-Type: text/html; charset=UTF-8');
    $conId = $_REQUEST['conId'];
    $code ='';
    $modelo->setConId($conId);
    $data = $modelo->SP_OBTENER_ANTECEDENTES_PARA_PDF_HISTORICO($conn);
   // var_dump($data);

    $code.='<style type="text/css">
                div.page_break + div.page_break{
                    page-break-before: always;
                }
            </style>';



            if ($data[0]["data"] == "0") { 
                echo "Error Al generar Archivo PDF, Favor contactarse con el equipo informatica salud.";
                
            }else{
                $i = 0;
                foreach($data as $clave => $valor)
                {
                    $fechaIngreso = explode("/", $valor['FECHA_INGRESO']);
                    $valueGes = $valor['NOTIFICACION_GES'];
        
                    $code .='<div style="border:1px solid black;">';
                        $code .='<div style="margin-left:6;margin-right:6;">';
                            $code .='<table style="width:100%;">
                                        <tr>
                                            <th colspan="3"> <img style="margin-top:4px;" src="../../../../lib/images/logo.png" width="150"> </th>
                                            <th colspan="1" style="text-align: left;font-size: 15px;">
                                                <label> Centro Atención: </label>';
                                                switch ($valor["CENTRO_ATENCION"]) {
                                                    case 'C.SILVA HENRIQUEZ':
                                                        $code.='<label  style="width: 110;border: none;border-bottom: 0.5px solid;font-size: 13px;display:inline-block;"> C. SILVA HENRIQUEZ <label>';
                                                    break;
                                                    case 'PADRE GERARDO WHELAN': 
                                                        $code.='<label  style="width: 115;border: none;border-bottom: 0.5px solid;font-size: 13px;display:inline-block;"> P. GERARDO WHELAN <label>';
                                                    break;
                                                    case 'Urgencia cesfam carol Urzua':
                                                        $code.='<label  style="width: 110;border: none;border-bottom: 0.5px solid;font-size: 13px;display:inline-block;">Urg. Cesfam C.U. <label>';
                                                    break;
                                                    case 'Urgencia cesfam padre gerardo whelan': 
                                                        $code.='<label  style="width: 115;border: none;border-bottom: 0.5px solid;font-size: 13px;display:inline-block;"> Urg. Cesfam Padre G.W. <label>';
                                                    break;
                                                    default:
                                                        $code.='<label  style="width: 100;border: none;border-bottom: 0.5px solid;font-size: 13px;display:inline-block;">'.$valor["CENTRO_ATENCION"].'<label>';
                                                    break;
                                                }
                                    $code .='</th>
                                            <th colspan="1" style="text-align: left;font-size: 15px;">
                                                <label> Nº DE DAU </label>
                                                <label  style="width: 15;border: none;border-bottom: 0.5px solid;font-size: 13px;display:inline-block;"> '.$valor["DAU"].' </label>
                                            </th>
                                        </tr>
                                        <tr>
                                            <td colspan="5"><label style="text-align:center;"><b><h3> DATO DE ATENCIÓN DE URGENCIA (DAU) </b></h3></label></td>
                                        </tr>
                                    </table>';
        
                            $code .='<div style=" margin-left: 0; margin-right: 0;">
                                        <div style="margin-left:6;">
                                            <label style="font-size:15px;"> Apellido Paterno :</label>
                                            <label  style="width: 90;border: none;border-bottom: 0.5px solid;font-size: 13px;display:inline-block;"> '.$valor["APELLIDO_PATERNO"].' </label>
                                            <label style="font-size:15px;"> Apellido Materno :</label>
                                            <label  style="width: 90;border: none;border-bottom: 0.5px solid;font-size: 13px;display:inline-block;"> '.$valor["APELLIDO_MATERNO"].' </label>
                                            <label style="font-size:15px;"> Nombres  :</label>
                                            <label  style="width: 85;border: none;border-bottom: 0.5px solid;font-size: 13px;display:inline-block;"> '.$valor["NOMBRE"].' </label>
                                        </div>
                                        <div style="margin-left:6;">
                                            <label style="font-size:15px;">RUN o DNI :</label>';
                                            if ($valor["RUT_PASAPORTE"] !== "SIN DOCUMENTO") {
                                                $code .= '<label  style="width: 70;border: none;border-bottom: 0.5px solid;font-size: 13px;display:inline-block;"> '.$valor["RUT_PASAPORTE"].' </label>
                                                <label style="font-size:15px;"> Fecha de Nacimiento: </label>
                                                    <label  style="width: 70;border: none;border-bottom: 0.5px solid;font-size: 13px;display:inline-block;"> '.$valor["FECHA_NACIMIENTO"].' </label>
                                                    <label style="font-size:15px;"> Edad : </label>
                                                    <label  style="width: 145;border: none;border-bottom: 0.5px solid;font-size: 13px;display:inline-block;"> '.$valor["EDAD"].'</label>
                                                </div>';
                                            }else{
                                                $code .= '<label  style="width: 90;border: none;border-bottom: 0.5px solid;font-size: 13px;display:inline-block;"> SIN DOCUMENTO </label>
                                                    <label style="font-size:15px;"> Fecha de Nacimiento: </label>
                                                    <label  style="width: 60;border: none;border-bottom: 0.5px solid;font-size: 13px;display:inline-block;"> '.$valor["FECHA_NACIMIENTO"].' </label>
                                                    <label style="font-size:15px;"> Edad : </label>
                                                    <label  style="width: 140;border: none;border-bottom: 0.5px solid;font-size: 13px;display:inline-block;"> '.$valor["EDAD"].'</label>
                                                </div>';
                                            }
                            $code .='   <div style="margin-left:6;">
                                            <label style="font-size:15px;"> Previsión </label>
                                            <label  style="width: 75;border: none;border-bottom: 0.5px solid;font-size: 13px;display:inline-block;"> '.$valor["PREVISION"].'</label>
                                            <label style="font-size:15px;"> Teléfono </label>
                                            <label  style="width: 53;border: none;border-bottom: 0.5px solid;font-size: 13px;display:inline-block;">'.$valor["TELEFONO"].'</label>
                                            <label style="font-size:15px;"> Dirección </label>
                                            <label  style="width: 213;border: none;border-bottom: 0.5px solid;font-size: 13px;display:inline-block;">'.$valor["DIRECCION"].'</label>
                                        </div>
        
                                         <div style="margin-left:6;">
                                            <label style="font-size:15px;"> Comuna </label>
                                            <label  style="width: 30%;border: none;border-bottom: 0.5px solid;font-size: 13px;display:inline-block;">'.$valor["COMUNA"].'</label>
                                            <label style="font-size:15px;">Fecha ingreso :</label>
                                            <label  style="width: 15%;border: none;border-bottom: 0.5px solid;font-size: 13px;display:inline-block;"> '.$valor["FECHA_INGRESO"].' </label>
                                            <label style="font-size:15px;"> Hora: </label>
                                            <label  style="width: 23%;border: none;border-bottom: 0.5px solid;font-size: 13px;display:inline-block;"> '.$valor["HORA"].' </label>
                                        </div>
        
                                        <div style="margin-left:6;">
                                            <label style="font-size:15px;"> Nombre Acompañante </label>
                                            <label  style="width: 18%;border: none;border-bottom: 0.5px solid;font-size: 13px;display:inline-block;"> '.$valor["NOMBRE_ACOMPANANTE"].' </label>
                                            <label style="font-size:15px;"> Motivo de Consulta </label>
                                            <label  style="width: 40%;border: none;border-bottom: 0.5px solid;font-size: 13px;display:inline-block;"> '.$valor["MOTIVO_CONSULTA"].' </label>
                                        </div>
        
                                        <div style="margin-left:6;">
                                            <label style="font-size:15px;"> Tipo de Consulta: </label>
                                            <label  style="width: 30%;border: none;border-bottom: 0.5px solid;font-size: 13px;display:inline-block;"> '.$valor["TIPO_CONSULTA"].' </label>
                                            <label style="font-size:15px;"> Medio de Transporte: </label>
                                            <label  style="width: 30%;border: none;border-bottom: 0.5px solid;font-size: 13px;display:inline-block;"> '.$valor["MEDIO_TRANSPORTE"].' </label>
                                        </div>
                                    </div>';
        
                            $code .='<div style="margin-left:4;margin-right:0;">
                                        <table style="border:1px solid black;border-collapse:collapse; border-bottom: none;width:100% !important;">
                                            <tr style="background: #d4d4d4;">
                                                <th colspan="5" style="text-align: left;border: 1px solid;font-size: 15px;">Signos Vitales al ingreso </th>
                                                 <th colspan="2" style="text-align: left;border: 1px solid;font-size: 15px;"> Categorización:  '.$valor["CATEGORIZACION_INGRESO"].' </th>
                                                <th colspan="2" style="text-align: left;border: 1px solid;font-size: 15px;">Hora: '.$valor["HORA_TRIAGE"].'  </th>
                                            </tr>
                                            <tr style="background: #d4d4d4;">
                                                <th style="text-align:center;border: 1px solid;font-size: 13px;">F.C </th>
                                                <th style="text-align:center;border: 1px solid;font-size: 13px;">F.R </th>
                                                <th style="text-align:center;border: 1px solid;font-size: 13px;">Tº AX </th>
                                                <th style="text-align:center;border: 1px solid;font-size: 13px;">SAT O2 </th>
                                                <th style="text-align:center;border: 1px solid;font-size: 13px;"> P.A </th>
                                                <th style="text-align:center;border: 1px solid;font-size: 13px;;"> HGT</th>
                                                <th style="text-align:center;border: 1px solid;font-size: 13px;"> E. EVA </th>
                                                <th style="text-align:center;border: 1px solid;font-size: 13px;"> E. GLASGOW </th>
                                                <th style="text-align:center;border: 1px solid;font-size: 13px;"> PESO </th>
                                            </tr>
                                            <tr>
                                                <th style="text-align:center; border: 1px solid;font-size: 13px;font-weight: none;"> '.$valor["FC"].' </th>
                                                <th style="text-align:center; border: 1px solid;font-size: 13px;font-weight: none;"> '.$valor["FR"].' </th>
                                                <th style="text-align:center; border: 1px solid;font-size: 13px;font-weight: none;"> '.$valor["T_AUX"].' </th>
                                                <th style="text-align:center; border: 1px solid;font-size: 13px;font-weight: none;"> '.$valor["SAT_02"].' </th>
                                                <th style="text-align:center; border: 1px solid;font-size: 13px;font-weight: none;"> '.$valor["PA_SISTOLICA"]."/".$valor["PA_DIASTOLICA"].' </th>';
                            $code .='           <th style="text-align:center; border: 1px solid;font-size: 13px;font-weight: none;"> '.$valor["HGT"].'</th>
                                                <th style="text-align:center; border: 1px solid;font-size: 13px;font-weight: none;"> '.$valor["E_EVA"].'</th>
                                                <th style="text-align:center; border: 1px solid;font-size: 13px;font-weight: none;"> '.$valor["E_GLASGOW"].'</th>
                                                <th style="text-align:center; border: 1px solid;font-size: 13px;font-weight: none;"> '.$valor["PESO"].'</th>
                                            </tr>
                                            <tr>
                                                <th colspan="9" style="text-align: left;font-size: 15px;font-weight: normal;font-weight: bold;"> Alergias : <label style="word-wrap: break-word;font-size:13px;font-weight: none;">'.nl2br($valor["ALERGIAS"]) .'</label></th>
                                            </tr>
        
                                            <tr style="background: #d4d4d4;">
                                                <th colspan="7" style="text-align: left;border: 1px solid;font-size: 15px;"> Atención Médica </th>
                                                <th colspan="2" style="text-align: left;border: 1px solid;font-size: 15px;"> Hora: '.$valor["HORA_ATENCION_MEDICA"].'  </th>
                                            </tr>
                                            <tr>
                                                <th colspan="5"  style="border: 1px solid;font-size: 14px;font-weight: bold;"> Pronóstico Médico - Legal : '.$valor['PRONOSTICO_MEDICO'].'</th>
                                                <th colspan="2"  style="border: 1px solid;font-size: 14px;font-weight: bold;">  Alcoholemia : '; 
                                                if ($valor['ALCOHOLEMIA'] === "1" ) { $code .= 'Si';}else{if ($valor['ALCOHOLEMIA'] === "0") {$code .= '-';}else {$code .= $valor['ALCOHOLEMIA'];}}
        
                                                //if ($valor['N_FRASCO'] === "0") {$frasco = "-";}else{$frasco = $valor['N_FRASCO'];}
                                    $code .='   <th colspan="2"  style="border: 1px solid;font-size: 14px;font-weight: bold;"> N° Frasco : '.$valor['N_FRASCO'].'</th>
                                            </tr>
                                            <tr>
                                                <td colspan="9" style="border: 1px solid;font-size: 15px;font-weight: bold;"> Anamnesis :<br> <label style="font-size:13px;font-weight: none;">'.nl2br($valor["ANAMNESIS"]).'<br>
                                                <label style="font-size: 14px;font-weight: bold;"> Examen Físico : </label><br>';
        
                                                if (( $valor["CABEZA"] === "NO"  || $valor["CABEZA"] === "No" || $valor["CABEZA"] === "no" )  &&
                                                    ($valor["TORAX"] === "NO"  || $valor["TORAX"] === "No" || $valor["TORAX"] === "no" ) &&
                                                    ($valor["ABDOMEN"] === "NO"  || $valor["ABDOMEN"] === "No" || $valor["ABDOMEN"] === "no" ) &&
                                                    ($valor["PELVIS"] === "NO"  || $valor["PELVIS"] === "No" || $valor["PELVIS"] === "no" ) &&
                                                    ($valor["EXT_SUPERIORES"] === "NO"  || $valor["EXT_SUPERIORES"] === "No" || $valor["EXT_SUPERIORES"] === "no" ) &&
                                                    ($valor["EXT_INFERIORES"] === "NO"  || $valor["EXT_INFERIORES"] === "No" || $valor["EXT_INFERIORES"] === "no"  )&& 
                                                    ($valor["EX_NEUROLOGICO"] === "NO"  || $valor["EX_NEUROLOGICO"] === "No" || $valor["EX_NEUROLOGICO"] === "no" ) ) {
                                                    $code .= '<label style="font-weight: bold;"> Sin observaciones.';
                                                }else{
                                                    if($valor["CABEZA"] === "Si" || $valor["CABEZA"] === "SI" || $valor["CABEZA"] === "si"){
                                                        $code .= '<label style="font-weight: bold;"> Cabeza </label>: '.$valor["CABEZA_TEXTO"].'<br>';
                                                    }
                                                    if($valor["TORAX"] === "Si" || $valor["TORAX"] === "SI" || $valor["TORAX"] === "si"){
                                                        $code .= '<label style="font-weight: bold;"> Tórax </label>: '.$valor["TORAX_TEXTO"].'<br>';
                                                    }
                                                    if($valor["ABDOMEN"] === "Si" || $valor["ABDOMEN"] === "SI" || $valor["ABDOMEN"] === "si"){
                                                        $code .= '<label style="font-weight: bold;"> Abdomen </label>: '.$valor["ABDOMEN_TEXTO"].'<br>';
                                                    }
                                                    if($valor["PELVIS"] === "Si" || $valor["PELVIS"] === "SI" || $valor["PELVIS"] === "si"){
                                                        $code .= '<label style="font-weight: bold;"> Pelvis : </label>'.$valor["PELVIS_TEXTO"].'<br>';
                                                    }
                                                    if($valor["EXT_SUPERIORES"] === "Si" || $valor["EXT_SUPERIORES"] === "SI" || $valor["EXT_SUPERIORES"] === "si"){
                                                        $code .= '<label style="font-weight: bold;"> Ext. Superiores </label>: '.$valor["EXT_SUPERIORES_TEXTO"].'<br>';
                                                    }
                                                    if($valor["EXT_INFERIORES"] === "Si" || $valor["EXT_INFERIORES"] === "SI" || $valor["EXT_INFERIORES"] === "si"){
                                                        $code .= '<label style="font-weight: bold;"> Ext. Inferiores </label>: '.$valor["EXT_INFERIORES_TEXTO"].'<br>';
                                                    }
                                                    if($valor["EX_NEUROLOGICO"] === "Si" || $valor["EX_NEUROLOGICO"] === "SI" || $valor["EX_NEUROLOGICO"] === "si"){
                                                        $code .= '<label style="font-weight: bold;"> Ex. Neurológico </label>: '.$valor["EX_NEUROLOGICO_TEXTO"].'';
                                                    }   
                                                }
                                                 
                            $code .= '         </label> </td>
                                            </tr>
        
                                            <tr>
                                                <td colspan="9" style="border: 1px solid;font-size: 15px;font-weight: bold;"> Manejo y tratamiento de indicado en SAPU/SAR :<br> <label style="font-size:13px;font-weight: none;word-wrap: break-word;">';
        
                                                    //VALIDACIONES SI NO HAY NADA 
                                                    if($valor["TRATAMIENTO_1_IND_1"] === "" && $valor["TRATAMIENTO_1_IND_2"] === "" && $valor["TRATAMIENTO_1_IND_3"] === "" && $valor["TRATAMIENTO_2_IND_1"] === "" && $valor["TRATAMIENTO_2_IND_2"] === "" && $valor["TRATAMIENTO_2_IND_3"] === "" && $valor["TRATAMIENTO_3_IND_1"] === "" && $valor["TRATAMIENTO_3_IND_2"] === "" && $valor["TRATAMIENTO_3_IND_3"] === ""){
                                                         $code.= '<label style="font-weight: bold;"> Sin observaciones. </label><br>';
                                                    }else{
                                                        //indicaciones 1
                                                        if($valor["TRATAMIENTO_1_IND_1"] !== "" && $valor["TRATAMIENTO_1_IND_2"] !== "" && $valor["TRATAMIENTO_1_IND_3"] !== ""){
                                                            $code.= "<label style='font-weight: bold;'>Indicaciones 1:</label> ".$valor["TRATAMIENTO_1_IND_1"]." , ".$valor["TRATAMIENTO_1_IND_2"]." , ".$valor["TRATAMIENTO_1_IND_3"]."<br>";
                                                        }else
                                                            if($valor["TRATAMIENTO_1_IND_1"] !== "" && $valor["TRATAMIENTO_1_IND_2"] === "" && $valor["TRATAMIENTO_1_IND_3"] === ""){
                                                                $code.= "<label style='font-weight: bold;'>Indicaciones 1:</label> ".$valor["TRATAMIENTO_1_IND_1"]."<br>";
                                                            }else
                                                                if($valor["TRATAMIENTO_1_IND_1"] !== "" && $valor["TRATAMIENTO_1_IND_2"] !== "" && $valor["TRATAMIENTO_1_IND_3"] === ""){
                                                                    $code.= "<label style='font-weight: bold;'>Indicaciones 1:</label> ".$valor["TRATAMIENTO_1_IND_1"]." , ".$valor["TRATAMIENTO_1_IND_2"]."<br>";
                                                                }
        
                                                        //INDICACIONES 2
                                                        if($valor["TRATAMIENTO_2_IND_1"] !== "" && $valor["TRATAMIENTO_2_IND_2"] !== "" && $valor["TRATAMIENTO_2_IND_3"] !== ""){
                                                            $code.= "<label style='font-weight: bold;'>Indicaciones 2:</label> ".$valor["TRATAMIENTO_2_IND_1"]." , ".$valor["TRATAMIENTO_2_IND_2"]." , ".$valor["TRATAMIENTO_2_IND_3"]."<br>";
                                                        }else
                                                            if($valor["TRATAMIENTO_2_IND_1"] !== "" && $valor["TRATAMIENTO_2_IND_2"] === "" && $valor["TRATAMIENTO_2_IND_3"] === ""){
                                                                $code.= "<label style='font-weight: bold;'>Indicaciones 2:</label> ".$valor["TRATAMIENTO_2_IND_1"]."<br>";
                                                            }else
                                                                if($valor["TRATAMIENTO_2_IND_1"] !== "" && $valor["TRATAMIENTO_2_IND_2"] !== "" && $valor["TRATAMIENTO_2_IND_3"] === ""){
                                                                    $code.= "<label style='font-weight: bold;'>Indicaciones 2:</label> ".$valor["TRATAMIENTO_2_IND_1"]." , ".$valor["TRATAMIENTO_2_IND_2"]."<br>";
                                                                }
        
                                                        //INDICACIONES 3
                                                        if($valor["TRATAMIENTO_3_IND_1"] !== "" && $valor["TRATAMIENTO_3_IND_2"] !== "" && $valor["TRATAMIENTO_3_IND_3"] !== ""){
                                                            $code.= "<label style='font-weight: bold;'>Indicaciones 3:</label> ".$valor["TRATAMIENTO_3_IND_1"]." , ".$valor["TRATAMIENTO_3_IND_2"]." , ".$valor["TRATAMIENTO_3_IND_3"]."<br>";
                                                        }else
                                                            if($valor["TRATAMIENTO_3_IND_1"] !== "" && $valor["TRATAMIENTO_3_IND_2"] === "" && $valor["TRATAMIENTO_3_IND_3"] === ""){
                                                                $code.= "<label style='font-weight: bold;'>Indicaciones 3:</label> ".$valor["TRATAMIENTO_3_IND_1"]."<br>";
                                                            }else
                                                                if($valor["TRATAMIENTO_3_IND_1"] !== "" && $valor["TRATAMIENTO_3_IND_2"] !== "" && $valor["TRATAMIENTO_3_IND_3"] === ""){
                                                                    $code.= "<label style='font-weight: bold;'>Indicaciones 3:</label> ".$valor["TRATAMIENTO_3_IND_1"]." , ".$valor["TRATAMIENTO_3_IND_2"]."<br>";
                                                                }
        
                                                    }// END ELSE
                            $code .= '        </label>  </td>
                                                </tr>';
        
                            //ACA IRIA EL NUEVO CAMPO DE LAS OBSERVACIONES DE LA ENFERMERA
                            /*$code .= '      <tr>
                                                <td colspan="9" style="border: 1px solid;font-size: 15px;font-weight: bold;"> Observaciones de Enfermería :<br> <label style="font-size:13px;font-weight: none;word-wrap: break-word;">';
                            $code .= '          </td>
                                            </tr>';*/
        
                            $code .= '      <tr>
                                                <td colspan="4" style="border: 1px solid;font-size: 15px;font-weight: bold;"> Exámenes :';
                                                if ($valor['EXAMEN_SANGRE'] == "1") {
                            $code .='               <label style="font-size:13px;font-weight: none;word-wrap: break-word;">'.$valor['EXAMEN_SANGRE_TEXTO'].'</label>';
                                                }else{
                            $code .='               <label style="font-size:13px;font-weight: none;word-wrap: break-word;">'.$valor['EXAMEN_SANGRE_TEXTO'].'</label>';
                                                }
                            $code .='           </td>
                                                <td colspan="3" style="border: 1px solid;font-size: 15px;font-weight: bold;"> Radiografía:';
                                                    if ($valor['RADIOGRAFIA'] == "1") {
                            $code .='                   <label style="font-size:13px;font-weight: none;word-wrap: break-word;">'.$valor['RADIOGRAFIA_TEXTO'].'</label>';
                                                    }else{
                            $code .='                   <label style="font-size:13px;font-weight: none;word-wrap: break-word;">'.$valor['RADIOGRAFIA_TEXTO'].'</label>';
                                                    }
                            $code .='           </td>
                                                <td colspan="2" style="border: 1px solid;font-size: 15px;font-weight: bold;"> ECG:';
                                                    if ($valor['ECG'] == "1") {
                            $code .='                   <label style="font-size:13px;font-weight: none;word-wrap: break-word;">SÍ</label>';
                                                    }else{
                                                        if ($valor['ECG'] === "0") {$electro = "-";}else {$electro = $valor['ECG'];}
        
                            $code .='                   <label style="font-size:13px;font-weight: none;word-wrap: break-word;">'.$electro.'</label>';
                                                    }
                            $code .= '          </td>
                                            </tr>';
        
                                    // ULTIMO_SV QUE LLENA LA HORA Y LOS SIGNOS VITALES
                                    $ultimosSignos= explode("|", $valor["ULTIMO_SV"]);
        
                            $code .= '      <tr style="background: #d4d4d4;">
                                                <th colspan="7" style="text-align: left;border: 1px solid;font-size: 15px;"> Últimos signos Vitales </th>
                                                <th colspan="2" style="text-align: left;border: 1px solid;font-size: 15px;">Hora: '.$ultimosSignos[0].'  </th>                 
                                            </tr>
                                            <tr style="background: #d4d4d4;">
                                                <th style="text-align:center;border: 1px solid;font-size: 13px;">F.C </th>
                                                <th style="text-align:center;border: 1px solid;font-size: 13px;">F.R </th>
                                                <th style="text-align:center;border: 1px solid;font-size: 13px;">Tº AX </th>
                                                <th style="text-align:center;border: 1px solid;font-size: 13px;">SAT O2 </th>
                                                <th style="text-align:center;border: 1px solid;font-size: 13px;"> P.A </th>
                                                <th style="text-align:center;border: 1px solid;font-size: 13px;;"> HGT</th>
                                                <th style="text-align:center;border: 1px solid;font-size: 13px;"> E. EVA </th>
                                                <th colspan=2 style="text-align:center;border: 1px solid;font-size: 13px;"> E. GLASGOW </th>
                                            </tr>';
                            $code.='        <tr>
                                                <th style="border: 1px solid;font-size: 13px;text-align:center;font-weight: none;"> '.$ultimosSignos[1].' </th>
                                                <th style="border: 1px solid;font-size: 13px;text-align:center;font-weight: none;"> '.$ultimosSignos[2].' </th>
                                                <th style="border: 1px solid;font-size: 13px;text-align:center;font-weight: none;"> '.$ultimosSignos[3].' </th>
                                                <th style="border: 1px solid;font-size: 13px;text-align:center;font-weight: none;"> '.$ultimosSignos[4].' </th>
                                                <th style="border: 1px solid;font-size: 13px;text-align:center;font-weight: none;"> '.$ultimosSignos[5]." / ".$ultimosSignos[6].' </th>';
                            $code.='            <th style="border: 1px solid;font-size: 13px;text-align:center;font-weight: none;"> '.$ultimosSignos[7].' </th>
                                                <th style="border: 1px solid;font-size: 13px;text-align:center;font-weight: none;"> '.$ultimosSignos[8].' </th>
                                                <th colspan=2 style="border: 1px solid;font-size: 13px;text-align:center;font-weight: none;"> '.$ultimosSignos[9].' </th>
                                            </tr>
                                            <tr>
                                               <td colspan="9" style="border: 1px solid;font-size: 15px;font-weight: bold;"> Evolución y observaciones: <br>
                                                <label style="font-size:13px;font-weight: none;word-wrap: break-word;">'. nl2br($valor["EVOLUCION_OBSERVACION"]).'</label>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td colspan="9" style="border: 1px solid;font-size: 15px;font-weight: bold;"> Diagnóstico de Egreso: <br> <label style="font-size:13px;word-wrap: break-word;font-weight: none;"> 
                                                '.nl2br($valor["DIAGNOSTICO_EGRESO"]).' </label></td>
                                            </tr>                                    
                                            <tr>
                                                <td colspan="9" style="border: 1px solid;font-size: 15px;font-weight: bold;"> Indicaciones y/o receta al egreso : <br><label style="font-size:13px;font-weight: none;word-wrap: break-word;"> '.nl2br($valor["INDICACIONES_RECETA"]).' </label></td>
                                            </tr>';
                            $code .='       <tr>
                                                <td colspan="4" style="border: 1px solid;font-size: 15px;font-weight: bold;">Tipo Egreso: <label style="font-size:13px;font-weight: none;">'.$valor["TIPO_EGRESO"].'  </label></td>
                                                <td colspan="2" style="border: 1px solid;font-size: 15px;font-weight: bold;">C. de derivación: <label style="font-size:13px;font-weight: none;">'.$valor["CENTRO_DERIVACION"].'  </label></td>
                                                <td colspan="1" style="border: 1px solid;font-size: 15px;font-weight: bold;">Cat Final: <label style="font-size:13px;font-weight: none;">'.$valor["CATEGORIZACION_EGRESO"].' </label></td>
                                                <td colspan="2" style="border: 1px solid;font-size: 15px;font-weight: bold;">Hora egreso: <label style="font-size:13px;font-weight: none;">'.$valor["HORA_EGRESO"].'  </label></td>
                                            </tr>
        
                                        </table>
                                    </div>';
                            $code .='<br><div style=" margin-left: 0; margin-right: 0;">';
        
                            //VALIDA EL NOMBRE DEL REPRESENTANTE
        
                            $hoy = Date('Y');
                            $edad = explode("/", $valor["FECHA_NACIMIENTO"]);
                            $calcEdad = $hoy - $edad[2];
        
                            $tipo = "";
                            if ( $calcEdad < 18) {
                                $NombrePaciente = $valor["NOMBRE_ACOMPANANTE"];//$valor["NOMBRE"]." ".$valor["APELLIDO_PATERNO"]." ".$valor["APELLIDO_MATERNO"];    
                                $tipo = "Representante";
                            } else {
                                $NombrePaciente = $valor["NOMBRE"]." ".$valor["APELLIDO_PATERNO"]." ".$valor["APELLIDO_MATERNO"];
                                $tipo = "Paciente";
                            }
        
                            $textoPaciente = "";
        
                            if ($valueGes == "1") {
                                $textoPaciente = '"Estimado paciente, su problema de salud puede agravarse. Si esto ocurre, <br>debe volver a consultar en el SAPU/SAR más cercano o en su CESFAM.'."<br>".'En el caso de patologías con garantías explícitas en salud, este dato de atención tiene validez como formulario de constancia e información al paciente GES."';
                            }else{
                                $textoPaciente = "Estimado paciente, su problema de salud puede agravarse. Si esto ocurre, <br>debe volver a consultar en el SAPU/SAR más cercano o en su CESFAM.";
                            }
                            
                            //<table style="border:1px solid black;border-collapse:collapse; border-bottom: none;width:100% !important;">
                            $code.='<div style="margin-left:4;margin-right:0;">
                                        <table>
                                            <tr>
                                                <td style="padding: 4em;"> &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </td>';
                            if ($valueGes == "1") {
                                $code.='         <td>
                                                    <div style="text-align:center;">
                                                        <label>________________________ </label><br>
                                                        <label style="font-size: 15px;">  '.$valor["RUT_PASAPORTE"].'</label><br>
                                                        <label style="font-size: 15px;">  '.$NombrePaciente.'</label><br>
                                                        <label style="font-size: 15px;"> '.$tipo.' </label>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div style="text-align:center;">
                                                        <label>________________________ </label><br>
                                                        <label style="width: 250;font-size: 15px;">  '.$valor["RUT_PROFESIONAL"].'</label><br>
                                                        <label style="font-size: 15px; width: 112.5;">  '.$valor["NOMBRE_PROFESIONAL"].'</label><br>
                                                        <label style="font-size: 15px;padding: 30px;">  Profesional </label>
                                                    </div>
                                                </td>';    
                            }else{
                                $code.='         <td>
                                                    <div style="text-align:center;">
                                                        <label> &nbsp; </label><br>
                                                        <label> &nbsp;</label><br>
                                                        <label >&nbsp; <br>
                                                        <label>&nbsp; </label>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div style="text-align:center;margin-left: 10em;">
                                                        <label>________________________ </label><br>
                                                        <label style="width: 250;font-size: 15px;">  '.$valor["RUT_PROFESIONAL"].'</label><br>
                                                        <label style="font-size: 15px; width: 112.5;">  '.$valor["NOMBRE_PROFESIONAL"].'</label><br>
                                                        <label style="font-size: 15px;padding: 30px;">  Profesional </label>
                                                    </div>
                                                </td>';    
                            }
                            $code.='             
                                            </tr>
                                        </table>';
                            $code .='<br><div style=" margin-left: 0; margin-right: 0;text-align:center !important;">';
                            $code .=' <em> '.$textoPaciente.'</em><br>';
                            $code .='</div>';
        
                        $code .= '</div>';
                    $code .='</div>';
                    $code .='</div>';
        
                    //$code.= '<p> ============================ MUESTRA EL SALTO DE LINEA ================ <p>';
        
                // ====================================================================================================================================================
                //                  PDF DE INTERCONSULTA HOSPITALARIA
                // ====================================================================================================================================================
                    if ($valor["TIPO_EGRESO"] === "DERIVACION HOSPITALARIA") {
                        $code.= '<div style="page-break-before: always;"></div>';
        
                            $code .='<div >';
                            $code .='<div style="margin-left:6;margin-right:6;">';
                                $code .='<table style="width:100%;">
                                            <tr>
                                                <td colspan="8"> 
                                                <img style="vertical-align: middle;" src="../../../../lib/images/logo.png" width="150"/>
                                                <label style="position: inherit;">SOLICITUD DE INTERCONSULTA O DERIVACIÓN</label>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td colspan="5"> &nbsp; </td>
                                                <td colspan="2">
                                                    <label style="font-size:15px;"> Fecha de Solicitud : </label>
                                                    <label  style="width: 50;border: none;border-bottom: 0.5px solid;font-size: 13px;display:inline-block;">'.$valor["FECHA_INGRESO"].'</label>
                                                </td>
                                                <td colspan="1">
                                                    <label style="font-size:15px;"> Hora : </label>
                                                    <label  style="width: 50;border: none;border-bottom: 0.5px solid;font-size: 13px;display:inline-block;">'.$valor["HORA"].'</label>
                                                </td>
                                            </tr>
                                        </table> <br>';
                                $code .='<table style="border:1px solid black;border-collapse:collapse; border-bottom: none;width:100% !important;">
                                        <tr>
                                            <td colspan="2" style="border: 1px solid;font-size: 13px;font-weight: none;"><label style="font-weight: bold;">Servicio de Salud:</label> SERVICIO DE SALUD METROPOLITANO ORIENTE </td>
                                        </tr>
                                        <tr>
                                            <td colspan="2" style="border: 1px solid;font-size: 13px;font-weight: none;"><label style="font-weight: bold;">Establecimiento: </label>'.$valor["CENTRO_ATENCION"].'</td>
                                        </tr>
                                    </table><br>';
                                $code .='<table border="1" style="border:1px solid black;border-collapse:collapse; border-bottom: none;width:100% !important;">
                                            <tr>
                                                <td colspan="9" style="background: #0009bf;">
                                                    <label style="background: #0009bf;color: white;font-size: 13px;">
                                                        DATOS DEL (LA) PACIENTE  
                                                    </label>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td colspan="5" style="font-size: 13px;"> <label style="font-weight: bold;"> Nombre: </label> '.$valor["APELLIDO_PATERNO"]." ".$valor["APELLIDO_MATERNO"]." ".$valor["NOMBRE"].'</td>
                                                <td colspan="4" style="font-size: 13px;"> <label style="font-weight: bold;"> Historia Clínica: </label> - </td>                
                                            </tr>
                                            <tr>
                                                <td colspan="4" style="font-size: 13px;"> <label style="font-weight: bold;">Rut:</label>'.$valor["RUT_PASAPORTE"].' </td>
                                                <td colspan="5" style="font-size: 13px;"> <label style="font-weight: bold;">Si es recién Nacido, RUT de padre o Madre:</label> - </td>
                                            </tr>
                                            <tr>
                                                <td colspan="2" style="font-size: 13px;"> <label style="font-weight: bold;"> Sexo:</label>'.$valor["SEXO"].'</td>
                                                <td colspan="4" style="font-size: 13px;"> <label style="font-weight: bold;"> Fecha de Nacimiento:</label>'.$valor["FECHA_NACIMIENTO"].' </td>
                                                <td colspan="3" style="font-size: 13px;"> <label style="font-weight: bold;"> Edad:</label>'.$valor["EDAD"].' </td>
                                            </tr>
                                            <tr>
                                                <td colspan="9" style="font-size: 13px;"> <label style="font-weight: bold;"> Dirección:</label>'.$valor["DIRECCION"].' </td>                
                                            </tr>
                                            <tr>
                                                <td colspan="3" style="font-size: 13px;"> <label style="font-weight: bold;"> Comuna de Residencia:</label>'.$valor["COMUNA"].' </td>
                                                <td colspan="3" style="font-size: 13px;"> <label style="font-weight: bold;"> Teléfono:</label>'.$valor["TELEFONO"].' </td>
                                                <td colspan="3" style="font-size: 13px;"> <label style="font-weight: bold;"> Correo Electrónico:</label>'.$valor["CORREO_ELECTRONICO"].' </td>
                                            </tr>
                                        </table><br>';
        
                                $code .='<table border="1" style="border:1px solid black;border-collapse:collapse; border-bottom: none;width:100% !important;">
                                            <tr>
                                                <td colspan="9" style="background: #0009bf;">
                                                    <label style="background: #0009bf;color: white;font-size: 13px;">
                                                         DATOS CLÍNICOS (Para ser llenado por el (la) profesional que solicita la interconsulta o derivación)
                                                    </label>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td colspan="3" style="font-size: 13px;"> <label style="font-weight: bold;"> Se deriva para atención en: &nbsp; </label> '.$valor["CENTRO_DERIVACION"].' </td>';
        
                                            switch ($valor["CENTRO_DERIVACION"]) {
                                                case 'HLT': 
                                                    $code .='<td colspan="3" style="font-size: 13px;"><label style="font-weight: bold;"> Establecimiento: &nbsp; </label> Hospital Luis Tisne </td>';
                                                break;
                                                case 'HDS': 
                                                    $code .='<td colspan="3" style="font-size: 13px;"><label style="font-weight: bold;"> Establecimiento: &nbsp; </label> Hospital del Salvador </td>';
                                                break;
                                                case 'HLCM': 
                                                    $code .='<td colspan="3" style="font-size: 13px;"><label style="font-weight: bold;"> Establecimiento: &nbsp; </label> Hospital Luis Calvo Mackenna </td>';
                                                break;
                                                case 'INT': 
                                                    $code .='<td colspan="3" style="font-size: 13px;"><label style="font-weight: bold;"> Establecimiento: &nbsp; </label> Horwitz: Instituto Psiquiatrico Dr Jose Horwitz Barak </td>';
                                                break;
                                                case 'IML': 
                                                    $code .='<td colspan="3" style="font-size: 13px;"><label style="font-weight: bold;"> Establecimiento: &nbsp; </label> Instituto Medico Legal </td>';
                                                break;
                                                default: 
                                                    $code .='<td colspan="3" style="font-size: 13px;"><label style="font-weight: bold;"> Establecimiento: &nbsp; </label> Otro </td>';
                                                break;
                                            }
        
        
        
                                
        
                                $code .='       <td colspan="3" style="font-size: 13px;"> <label style="font-weight: bold;"> Especialidad: &nbsp;  </label>'.$valor["ESPECIALIDAD"].'  </td>
                                            </tr>
                                            <tr>
                                                <td colspan="9" style="font-size: 13px;">
                                                <label style="font-weight: bold;"> Se envía a consulta para </label>';
        
                                                    if($valor["CONFIRMAR_DIAGNOSTICO"]  === "1"){
                                $code .='               <label style="font-size:13px;">
                                                            <input type="checkbox" id="cbox1" checked=""> Confirmación Diagnóstica
                                                        </label>';
                                                    }else{
                                $code .='               <label style="font-size:13px;">
                                                            <input type="checkbox" id="cbox1"> Confirmación Diagnóstica
                                                        </label>';
                                                    }
                                                    if($valor["REALIZAR_TTO"] === "1"){
                                $code .='               <label style="font-size:13px;">
                                                            <input type="checkbox" id="cbox1" checked=""> Realizar tratamiento
                                                        </label>';
                                                    }else{
                                $code .='               <label style="font-size:13px;">
                                                            <input type="checkbox" id="cbox1"> Realizar tratamiento
                                                        </label>';
                                                    }
                                                    if($valor["SEGUIMIENTO"] === "1"){
                                $code .='               <label style="font-size:13px;">
                                                            <input type="checkbox" id="cbox1" checked=""> Seguimiento
                                                        </label>';
                                                    }else{
                                $code .='               <label style="font-size:13px;">
                                                            <input type="checkbox" id="cbox1"> Seguimiento
                                                        </label>';
                                                    }
                                                    if($valor["OTRA_CONSULTA"] === "1"){
                                $code .='               <label style="font-size:13px;">
                                                            <input type="checkbox" id="cbox1" checked=""> Otro
                                                        </label>';
                                                    }else{
                                $code .='               <label style="font-size:13px;">
                                                            <input type="checkbox" id="cbox1"> Otro
                                                        </label>';
                                                    }
        
                                $code .='           <br><b>Especifique </b>:  '.nl2br($valor["OTRA_CONSULTA_TEXTO"]).'
                                                </td>
                                            </tr>
                                            <tr>
                                                <td colspan="9" style="font-size: 13px;"><label style="font-weight: bold;"> Hipótesis Diagnóstica o diagnóstico: </label><br>
                                                '.nl2br($valor["DIAGNOSTICO_EGRESO"]).'
                                                </td>
                                            </tr>
                                            <tr>
                                                <td colspan="9" style="font-size: 13px;">
                                                    <label style="font-weight: bold;"> Fundamentos del Diagnóstico : </label><br>
                                                    <label style="font-size: 14px;font-weight: bold;"> Anamnesis : </label>'.nl2br($valor["ANAMNESIS"]).'<br>
                                                    <label style="font-size: 14px;font-weight: bold;"> Exámen Físico : </label><br>';
                                                    if (( $valor["CABEZA"] === "NO"  || $valor["CABEZA"] === "No" || $valor["CABEZA"] === "no" )  &&
                                                    ($valor["TORAX"] === "NO"    || $valor["TORAX"] === "No"   || $valor["TORAX"] ===   "no") &&
                                                    ($valor["ABDOMEN"] === "NO"  || $valor["ABDOMEN"] === "No" || $valor["ABDOMEN"] === "no") &&
                                                    ($valor["PELVIS"] === "NO"   || $valor["PELVIS"] === "No"  || $valor["PELVIS"] ===  "no") &&
                                                    ($valor["EXT_SUPERIORES"] === "NO"  || $valor["EXT_SUPERIORES"] === "No" || $valor["EXT_SUPERIORES"] === "no" ) &&
                                                    ($valor["EXT_INFERIORES"] === "NO"  || $valor["EXT_INFERIORES"] === "No" || $valor["EXT_INFERIORES"] === "no" ) && 
                                                    ($valor["EX_NEUROLOGICO"] === "NO"  || $valor["EX_NEUROLOGICO"] === "No" || $valor["EX_NEUROLOGICO"] === "no" ) ) {
                                                    $code .= '<label style="font-weight: bold;"> Sin observaciones.';
                                                }else{
                                                    if($valor["CABEZA"] === "Si" || $valor["CABEZA"] === "SI" || $valor["CABEZA"] === "si"){
                                                        $code .= '<label style="font-weight: bold;"> Cabeza </label>: '.$valor["CABEZA_TEXTO"].'<br>';
                                                    }
                                                    if($valor["TORAX"] === "Si" || $valor["TORAX"] === "SI" || $valor["TORAX"] === "si"){
                                                        $code .= '<label style="font-weight: bold;"> Tórax </label>: '.$valor["TORAX_TEXTO"].'<br>';
                                                    }
                                                    if($valor["ABDOMEN"] === "Si" || $valor["ABDOMEN"] === "SI" || $valor["ABDOMEN"] === "si"){
                                                        $code .= '<label style="font-weight: bold;"> Abdomen </label>: '.$valor["ABDOMEN_TEXTO"].'<br>';
                                                    }
                                                    if($valor["PELVIS"] === "Si" || $valor["PELVIS"] === "SI" || $valor["PELVIS"] === "si"){
                                                        $code .= '<label style="font-weight: bold;"> Pelvis : </label>'.$valor["PELVIS_TEXTO"].'<br>';
                                                    }
                                                    if($valor["EXT_SUPERIORES"] === "Si" || $valor["EXT_SUPERIORES"] === "SI" || $valor["EXT_SUPERIORES"] === "si"){
                                                        $code .= '<label style="font-weight: bold;"> Ext. Superiores </label>: '.$valor["EXT_SUPERIORES_TEXTO"].'<br>';
                                                    }
                                                    if($valor["EXT_INFERIORES"] === "Si" || $valor["EXT_INFERIORES"] === "SI" || $valor["EXT_INFERIORES"] === "si"){
                                                        $code .= '<label style="font-weight: bold;"> Ext. Inferiores </label>: '.$valor["EXT_INFERIORES_TEXTO"].'<br>';
                                                    }
                                                    if($valor["EX_NEUROLOGICO"] === "Si" || $valor["EX_NEUROLOGICO"] === "SI" || $valor["EX_NEUROLOGICO"] === "si"){
                                                        $code .= '<label style="font-weight: bold;"> Ex. Neurológico </label>: '.$valor["EX_NEUROLOGICO_TEXTO"].'';
                                                    }   
                                                }
                                $code .='      </label> </td>
                                            </tr>
                                            <tr>
                                                <td colspan="9" style="font-size: 13px;"><label style="font-weight: bold;"> Exámenes Realizados :  </label><br>';
                                                if ($valor['EXAMEN_SANGRE'] === "1") {
                            $code .='              Exámenes : <label style="font-size:13px;font-weight: none;word-wrap: break-word;">'.$valor['EXAMEN_SANGRE_TEXTO'].'</label> <br>';
                                                }else{
                            $code .='              Exámenes : <label style="font-size:13px;font-weight: none;word-wrap: break-word;"> - </label> <br>';
                                                }
                                                if ($valor['ECG'] === "1") {
                            $code .='               ECG : <label style="font-size:13px;font-weight: none;word-wrap: break-word;"> SÍ </label> <br>';
                                                }else{
                            $code .='               ECG : <label style="font-size:13px;font-weight: none;word-wrap: break-word;"> - </label> <br>'; //'.$valor['ECG'].'
                                                }
        
                                                if ($valor['RADIOGRAFIA'] === "1") {
                            $code .='               Radiografía: <label style="font-size:13px;font-weight: none;word-wrap: break-word;">'.$valor['RADIOGRAFIA_TEXTO'].'</label> <br>';
                                                }else{
                            $code .='               Radiografía: <label style="font-size:13px;font-weight: none;word-wrap: break-word;"> - </label> <br>'; // '.$valor['RADIOGRAFIA_TEXTO'].'
                                                }
                            $code .= '          </td>
                                            </tr>
                                        </table><br>';
        
                                $code .='<table border="1" style="border:1px solid black;border-collapse:collapse; border-bottom: none;width:100% !important;">
                                            <tr>
                                                <td colspan="6" style="background: #0009bf;">
                                                    <label style="background: #0009bf;color: white;font-size: 13px;">
                                                         DATOS DEL (LA) PROFESIONAL
                                                    </label>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td colspan="6" style="font-size: 13px;">
                                                   <label style="font-weight: bold;">  Nombre: &nbsp; </label> '.$valor["NOMBRE_PROFESIONAL"].'
                                                </td>
                                            </tr>
                                            <tr>
                                                <td colspan="3" style="font-size: 13px;">
                                                    <label style="font-weight: bold;"> Rut : &nbsp;  </label>'.$valor["RUT_PROFESIONAL"].'
                                                </td>
                                                <td colspan="3" style="font-size: 13px;"><br>
                                                    <label style="font-weight: bold;"> Firma Profesional </label> _______________________
                                                    <br>
                                                    <br>
                                                </td>
                                            </tr>                        
                                        </table><br>';
                            $code .='</div>';
                            $code .='</div>';
                            $code .='</div>';
                        /*************************************************************************************************************************************************************/                
                    }
        
                // ====================================================================================================================================================
                //                  PDF DE CONSTATACION DE LESIONES 
                // ====================================================================================================================================================
                    if ($valor["CONSTATACION_LESIONES"] === "1") {
                        $code.= '<div style="page-break-before: always;"></div>';
        
                        
        
                        //ASIGNA EL MES EN BASE AL NUMERO
                        switch ($fechaIngreso[1]) {
                            case '01':$mes = "Enero"; break;
                            case '02':$mes = "Febrero"; break;
                            case '03':$mes = "Marzo"; break;
                            case '04':$mes = "Abril"; break;
                            case '05':$mes = "Mayo"; break;
                            case '06':$mes = "Junio"; break;
                            case '07':$mes = "Julio"; break;
                            case '08':$mes = "Agosto"; break;
                            case '09':$mes = "Septiembre"; break;
                            case '10':$mes = "Octubre"; break;
                            case '11':$mes = "Noviembre"; break;
                            case '12':$mes = "Diciembre"; break;
                        }
        
        
                        $code .='<div style="border:1px solid black;">';
                        $code .='<div style="margin-left:6;margin-right:6;">';
                        $code .='  <div style="margin-left:6;margin-right:6;">
                                        <img style="margin-top:4px;vertical-align: middle;" src="../../../../lib/images/logo.png" width="150px">
                                        <label style="margin-left: 90px;"><b>INFORME MEDICO DE LESIONES</b></label>
                                   </div>';
                        $code .='   <table style="border:1px solid black;width:100% !important;border-radius:5px;">
                                       <tr>
                                            <td>
                                                En Santiago, a &nbsp; <label  style="border: none;border-bottom: 0.5px solid;display:inline-block;">'.$fechaIngreso[0].' </label> &nbsp; del mes de &nbsp; <label  style="border: none;border-bottom: 0.5px solid;display:inline-block;"> '.$mes.' </label> &nbsp; del año &nbsp; <label  style="border: none;border-bottom: 0.5px solid;display:inline-block;">'.$fechaIngreso[2].'</label> &nbsp; siendo las &nbsp; <label  style="border: none;border-bottom: 0.5px solid;display:inline-block;"> '.$valor['HORA'].'</label> &nbsp; hrs y de conformidad con lo señalado en los articulos 314,315,322 del Código Procesal Penal, se procede a emitir el siguiente informe de lesiones:
                                            </td>
                                        </tr>
                                    </table>';
                        $code .='   <table style="border:1px solid black;width:100% !important;border-radius:5px;">
                                        <tr>
                                            <td colspan= "9">
                                                <label style="font-weight: bold;">
                                                Nombre completo Examinado:
                                                </label>
                                                <label  style="border: none;border-bottom: 0.5px solid;display:inline-block;width: 25.8em;">'.$valor["APELLIDO_PATERNO"]." ".$valor["APELLIDO_MATERNO"]." ".$valor["NOMBRE"].'
                                                </label>
                                            </td>
                                        </tr>
        
        
                                        <tr>
                                            <td colspan= "3">
                                                <label style="font-weight: bold;">Rut:</label>
                                                <label  style="width: 90;border: none;border-bottom: 0.5px solid;font-size: 13px;display:inline-block;">'.$valor['RUT_PASAPORTE'].'</label>
                                            </td>
                                            <td colspan= "3">
                                                <label style="font-weight: bold;">Edad:</label>
                                                <label  style="width: 110;border: none;border-bottom: 0.5px solid;font-size: 13px;display:inline-block;">'.$valor['EDAD'].'</label>
                                            </td>
                                            <td colspan= "3">
                                                <label style="font-weight: bold;">Sexo:</label>
                                                <label  style="width: 90;border: none;border-bottom: 0.5px solid;font-size: 13px;display:inline-block;">'.$valor["SEXO"].'</label>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td colspan="9">
                                                <label style="font-weight: bold;">1.- Diagnóstico clínico de las lesiones y breve descripción del examen físico Relevante</label>
                                                <label style="font-size: 12px;">
                                                    (Erosiones, Cicatrices, heridas contusas, heridas cortantes, heridas punzantes,equimosis,hematomas,etc. Describir hallazgo positivo, motivo del diagnóstico, con ubicación topográfica).
                                                </label><br>
                                                <label style="font-size: 14px;font-weight: bold;"> Anamnesis : </label> <label style="font-size: 13px;">'.nl2br($valor["ANAMNESIS"]).'</label><br>
                                                <label style="font-size: 14px;font-weight: bold;"> Exámen Físico : </label><br>';
                                                if (( $valor["CABEZA"] === "NO"  || $valor["CABEZA"] === "No" || $valor["CABEZA"] === "no" )  &&
                                                    ($valor["TORAX"] === "NO"    || $valor["TORAX"] === "No"   || $valor["TORAX"] ===   "no") &&
                                                    ($valor["ABDOMEN"] === "NO"  || $valor["ABDOMEN"] === "No" || $valor["ABDOMEN"] === "no") &&
                                                    ($valor["PELVIS"] === "NO"   || $valor["PELVIS"] === "No"  || $valor["PELVIS"] ===  "no") &&
                                                    ($valor["EXT_SUPERIORES"] === "NO"  || $valor["EXT_SUPERIORES"] === "No" || $valor["EXT_SUPERIORES"] === "no" ) &&
                                                    ($valor["EXT_INFERIORES"] === "NO"  || $valor["EXT_INFERIORES"] === "No" || $valor["EXT_INFERIORES"] === "no" ) && 
                                                    ($valor["EX_NEUROLOGICO"] === "NO"  || $valor["EX_NEUROLOGICO"] === "No" || $valor["EX_NEUROLOGICO"] === "no" ) ) {
                                                    $code .= '<label style="font-weight: bold;font-size: 13px;"> Sin observaciones.';
                                                }else{
                                                    if($valor["CABEZA"] === "Si" || $valor["CABEZA"] === "SI" || $valor["CABEZA"] === "si"){
                                                        $code .= '<label style="font-weight: bold;font-size: 14px;"> Cabeza </label>: 
                                                        <label style="font-size: 13px;"> '.$valor["CABEZA_TEXTO"].'</label><br>';
                                                    }
                                                    if($valor["TORAX"] === "Si" || $valor["TORAX"] === "SI" || $valor["TORAX"] === "si"){
                                                        $code .= '<label style="font-weight: bold;font-size: 14px;"> Tórax </label>: 
                                                        <label style="font-size: 13px;"> '.$valor["TORAX_TEXTO"].'</label><br>';
                                                    }
                                                    if($valor["ABDOMEN"] === "Si" || $valor["ABDOMEN"] === "SI" || $valor["ABDOMEN"] === "si"){
                                                        $code .= '<label style="font-weight: bold;font-size: 14px;"> Abdomen </label>: 
                                                        <label style="font-size: 13px;"> '.$valor["ABDOMEN_TEXTO"].'</label><br>';
                                                    }
                                                    if($valor["PELVIS"] === "Si" || $valor["PELVIS"] === "SI" || $valor["PELVIS"] === "si"){
                                                        $code .= '<label style="font-weight: bold;font-size: 14px;"> Pelvis : </label>
                                                        <label style="font-size: 13px;"> '.$valor["PELVIS_TEXTO"].'</label><br>';
                                                    }
                                                    if($valor["EXT_SUPERIORES"] === "Si" || $valor["EXT_SUPERIORES"] === "SI" || $valor["EXT_SUPERIORES"] === "si"){
                                                        $code .= '<label style="font-weight: bold;font-size: 14px;"> Ext. Superiores </label>: 
                                                        <label style="font-size: 13px;"> '.$valor["EXT_SUPERIORES_TEXTO"].'</label><br>';
                                                    }
                                                    if($valor["EXT_INFERIORES"] === "Si" || $valor["EXT_INFERIORES"] === "SI" || $valor["EXT_INFERIORES"] === "si"){
                                                        $code .= '<label style="font-weight: bold;font-size: 14px;"> Ext. Inferiores </label>: 
                                                        <label style="font-size: 13px;"> '.$valor["EXT_INFERIORES_TEXTO"].'</label><br>';
                                                    }
                                                    if($valor["EX_NEUROLOGICO"] === "Si" || $valor["EX_NEUROLOGICO"] === "SI" || $valor["EX_NEUROLOGICO"] === "si"){
                                                        $code .= '<label style="font-weight: bold;font-size: 14px;"> Ex. Neurológico </label>: 
                                                        <label style="font-size: 13px;"> '.$valor["EX_NEUROLOGICO_TEXTO"].' </label>';
                                                    }   
                                                }
                                $code .='      </label> 
                                            </td>
                                        </tr>
                                        <tr>
                                            <td colspan= "9">
                                            <label style="font-weight: bold;"> 2.- Método del Diagnóstico</label>
                                            </td>
                                        </tr>
                                        <tr>
                                        <td colspan="9">';
                                                    if($valor["EXAMEN_FISICO"]  == "1"){
                                $code .='               <label style="font-size:13px;">
                                                            <input type="checkbox" id="cbox1" checked=""> Examen Fisico 
                                                        </label>';
                                                    }else{
                                $code .='               <label style="font-size:13px;">
                                                            <input type="checkbox" id="cbox1"> Examen Fisico 
                                                        </label>';
                                                    }
                                                    if($valor["IMAGENOLOGIA"] == "1"){
                                $code .='               <label style="font-size:13px;">
                                                            <input type="checkbox" id="cbox1" checked=""> Imagenología 
                                                        </label>';
                                                    }else{
                                $code .='               <label style="font-size:13px;">
                                                            <input type="checkbox" id="cbox1"> Imagenología 
                                                        </label>';
                                                    }
                                                    if($valor["EXAMENES_LABORATORIOS"] == "1"){
                                $code .='               <label style="font-size:13px;">
                                                            <input type="checkbox" id="cbox1" checked=""> Examenes de Laboratorio
                                                        </label>';
                                                    }else{
                                $code .='               <label style="font-size:13px;">
                                                            <input type="checkbox" id="cbox1"> Examenes de Laboratorio
                                                        </label>';
                                                    }
                                                    if($valor["OTROS"] == "1"){
                                $code .='               <label style="font-size:13px;">
                                                            <input type="checkbox" id="cbox1" checked=""> Otros 
                                                        </label>';
                                                    }else{
                                $code .='               <label style="font-size:13px;">
                                                            <input type="checkbox" id="cbox1"> Otros 
                                                        </label>';
                                                    }
        
                                $code .='</td>
                                        </tr>
                                        <tr>
                                            <td colspan="9">
                                                <label style="font-weight: bold;">3.- Describir brevemente origen de la lesión:</label><br>
                                                <label style="font-weight: bold;font-size: 14px;">
                                                    Según relato lesionado: 
                                                </label>
                                                <label style="font-size: 13px;">
                                                    '.$valor["ORIGEN_LESION"].'
                                                </label>
        
                                                <!---- SEGUN APRECIACION CLINICA ---->
                                                <br>
                                                <label style="font-weight: bold;font-size: 14px;">
                                                    Según apreciación clínica:
                                                </label>
                                                <label style="font-size: 13px;">
                                                    '.$valor["APRECIACION_CLINICA"].'
                                                </label>
                                                <br>
                                                <label style="font-size: 12px;">
                                                    Ej. : Caida de altura, objeto contundente. No puede el medico certificar la intencionalidad de la caída ni referenciar entre contundentes causantes: palo, piedra, manopla, etc.
                                                </label>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td colspan="9">
                                                <label style="font-weight: bold;">
                                                4.- Lesiones que ocasionarán al lesionado enfermedad y/o incapacidad para el trabajo por
                                                <label  style="border: none;border-bottom: 0.5px solid;display:inline-block;">'.$valor["LESIONADO_DIAS"].' </label> días.
                                                </label>
                                                <br>
                                                <label style="font-size: 12px;">
                                                   (Si el examinadio es un niño, o una persona que no trabaja se considera el tiempo que tarde en poder realizar una actividad normal para su edad o para su condición previa al momento de ser lesionado.)
                                                </label>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td colspan="9">
                                                <label style="font-weight: bold;">5.- Diagnóstico Médico Legal de las lesiones: </label>
                                                <label style="font-size: 13px;"> '.$valor["PRONOSTICO_MEDICO"].'</label>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td colspan= "5">
                                                <label style="font-weight: bold;">6.- Lesionado viene acompañado:</label>
                                            </td>';
        
                                            if ($valor["LESIONADO_ACOMPANADO"] === "1") {
                        $code .='               <td colspan= "1">
                                                    <label style="font-size:13px;">
                                                    <input type="checkbox" id="cbox1" value="1" checked=""> &nbsp; Si </label>
                                                </td>
                                                <td colspan= "1">
                                                    <label style="font-size:13px;">
                                                    <input type="checkbox" id="cbox1" value="1"> &nbsp; No </label>
                                                </td>';
                                            }else{
                        $code .='               <td colspan= "1">
                                                    <label style="font-size:13px;">
                                                    <input type="checkbox" id="cbox1" value="1"> &nbsp; Si </label>
                                                </td>
                                                <td colspan= "1">
                                                    <label style="font-size:13px;">
                                                    <input type="checkbox" id="cbox1" value="1" checked=""> &nbsp; No </label>
                                                </td>';
                                            }
                        $code .='       </tr>
                                        <tr>
                                            <td colspan="9">
                                            <label style="font-weight: bold;">6.1 .- Identificación persona que acompaña al lesionado: </label>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td colspan="9">
                                                Nombre: &nbsp; <label  style="border: none;border-bottom: 0.5px solid;display:inline-block;width: 35.3em;"> '.$valor["NOMBRE_ACOMPANANTE_LESIONADO"].'
                                                </label>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td colspan="9">
                                                Calidad (<label style="font-size:13px;">Pariente, funcionario de carabineros, ambulancia, vecino, etc.</label>): <label  style="border: none;border-bottom: 0.5px solid;display:inline-block;width: 15em;"> '.$valor["CALIDAD_ACOMPANANTE"].'
                                                </label>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td colspan="9">
                                               <!-- <label style="font-size:13px; margin-left: 100px;"> Pariente, funcionario de carabineros, ambulancia, vecino, etc.</label>-->
                                            </td>
                                        </tr>
                                    </table>';
        
                        $code .='   <table style="border:1px solid black;width:100% !important;border-radius:5px;">
                                        <tr>
                                            <td rowspan="4" style="background: #cacaca;width:25px;">
                                                <div style="margin-left: -1em;writing-mode: vertical-lr; transform: rotate(270deg);">
                                                    <p> MEDICO</p>
                                                </div>
                                            </td>
                                            <td colspan= "3">
                                                <label style="font-size: 14px;">Nombres </label>
                                                <label  style="border: none;border-bottom: 0.5px solid;display:inline-block;font-size: 14px;">'.$valor['NOMBRE_PROFESIONAL'].'</label>
                                            </td>
                                            <td rowspan="3" colspan="3">
                                            <!--- TABLA INTERNA -->
                                                <table style="border:1px solid black;border-collapse: collapse;width:100% !important;">
                                                    <tr style="background:#c1c1c1;">
                                                        <td style="border: 1px solid black;text-align:center;">
                                                           <label style="font-weight: bold;font-size: 14px;"> CENTRO ASISTENCIAL </label>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td style="border: 1px solid black;">
                                                           <label style="font-size: 14px;"> '.$valor['CENTRO_ATENCION'].' </label>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td style="border: 1px solid black;">
                                                            <label style="font-size: 14px;"> DAU N° </label>'.$valor['DAU'].'
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td style="border: 1px solid black;">
                                                            <label style="margin-left:90px;font-size: 14px;">TIMBRE</label>
                                                        </td>
                                                    </tr>
                                                </table>
                                            </td>
                                            <!-- TABLA INTERNA --->
                                        </tr>
                                        <tr>
                                            <td colspan="3">
                                                <label style="font-size: 14px;">R.U.T</label>
                                                <label  style="border: none;border-bottom: 0.5px solid;display:inline-block;width: 17.3em;font-size: 14px;"> '.$valor['RUT_PROFESIONAL'].'</label>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td colspan="3"> 
                                                <label style="font-size: 14px;">Firma</label>
                                                <label  style="border: none;border-bottom: 0.5px solid;display:inline-block;width:17em;">
                                                </label>
                                            </td>                            
                                        </tr>
                                        <tr>
                                            <td colspan="3">
                                                &nbsp;
                                            </td>
                                        </tr>
                                    </table>';
                        $code .='<br></div>';
                        $code .='</div>';
                    }
        
                    
        
                }// END FOR
        
                //AQUI DEBE IR LA VALIDACION SI SE HIZO LA ALCOHOLEMIA Y SI REQUIERE INTERCONSULTA
                
                //$code.= '<div style="page-break-before: always;"></div>';
                
         
                /*************************************************************************************************************************************************************/
        
        
             try{
                    $dompdf->setPaper("A4", "portrait");
                    //$dompdf->set_paper(array(0, 0, 595, 841), 'portrait');
        
                    //VALIDA SI EL PACIENTE ES NOTIFICADO GES O NO 
                    if ($valueGes == "1") {
                        $cargaFinalData = $code . '</div><br><div style="page-break-before: always;"></div>'.  $code;
        
                    } else {
                        $cargaFinalData = $code;
                    }
                    
        
        
                    $dompdf->load_html($cargaFinalData);
                    ini_set("memory_limit","256M"); 
                    $dompdf->render();
                    $dompdf->stream("Dato de Urgencia Sapu.pdf", array("Attachment" => 0));
        
        
                }catch(DOMPDF_Exception $e){
                    echo '<pre>',print_r($e),'</pre>';
                } 
        
        
               echo $code;
        
            }//END ELSE


?>
