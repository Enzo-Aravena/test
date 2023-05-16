<?php
    session_start();
    error_reporting(0);
    set_time_limit(300);
    require_once ("../../../../lib/conexion/conexion.php");
    require_once("../../modelo/modeloPdfminsal.php");

    // Cargamos la librería dompdf que hemos instalado en la carpeta dompdf
    require_once '../../../../lib/dompdf/autoload.inc.php';
    use Dompdf\Dompdf;
    $dompdf = new DOMPDF();
    header('Content-Type: text/html; charset=UTF-8');

    $bd = new Conexion();
    $modelo = new PdfMinsal();
    $conn = $bd->Conectar();

    //variable global
    $code ='';
    $pacId = $_REQUEST['pacId'];
    $centro = $_REQUEST['centro'];

    $modelo->setPacId($pacId);
    $data = $modelo->SP_OBTENER_DATOS_MINSAL($conn);



    $code.='<div style="margin-left:6;margin-right:6;">
                <table style="width:100%;">
                    <tr style="border-collapse: collapse;">
                        <th colspan="9"> <img style="margin-top:4px;margin-left:45%;display:block;"
                        src="../../../../lib/images/imgCoronaVirus.png" width="100px"> </th>
                        <th colspan="1" style="text-align: left;font-size: 15px;">
                    </tr>
                </table>
            </div>';
    $code.='<div style="margin-left:6;margin-right:6;">
                <table style="width:100%;">
                    <tr style="border-collapse: collapse;">
                        <th colspan="6"> <img style="margin-top:4px;" src="../../../../lib/images/infoCovid.png"> </th>
                        <th colspan="3"> <img style="margin-top:4px;margin-left:50%;" src="../../../../lib/images/logoGob.png"> </th>
                    </tr>
                </table>
            </div><br>';

     $code.='<div style="margin-left:6;margin-right:6;">
                <table style="width:100%;">
                    <th colspan="2">
                        <label style="margin-left:15%;">FORMULARIO DE SOLICITUD DE EXAMEN PCR COVID19</label>
                    </th>
                </table>
            </div><br><br>';

    $code.='<div style="margin-left:6;margin-right:6;">
                <table style="width:100%;">
                    <th colspan="2" style="font-size: 13px;">
                        <label style="margin-left:35%;"> INFORMACION PACIENTE </label>
                    </th>
                </table>
            </div>';
    foreach($data as $clave => $valor){
        $code.='<div style="margin-left:6;margin-right:6;">
                <table style="width:100%;">
                    <tr>
                        <th colspan="2" style="font-size: 13px;">NOMBRE:
                            <label style="font-weight: none;">'.$valor['PACIENTE'].'<label>
                        </th>
                    </tr>
                    <tr>
                        <th colspan="2" style="font-size: 13px;">RUT:
                            <label style="font-weight: none;">'.$valor['RUT_PASAPORTE'].' <label>
                        </th>
                    </tr>
                    <tr>
                        <th colspan="2" style="font-size: 13px;">GENERO:
                            <label style="font-weight: none;">'.$valor['SEXO'].' <label>
                        </th>
                    </tr>
                    <tr>
                        <th colspan="2" style="font-size: 13px;">FECHA NACIMIENTO :
                            <label style="font-weight: none;">'.$valor['FECHA_NACIMIENTO'].' <label>
                        </th>
                    </tr>
                    <tr>
                        <th colspan="2" style="font-size: 13px;">EDAD :
                            <label style="font-weight: none;">'.$valor['EDAD'].' <label>
                        </th>
                    </tr>

                     <tr>
                        <th colspan="2" style="font-size: 13px;">DIRECCION :
                            <label style="font-weight: none;">'.$valor['DIRECCION'].'<label>
                        </th>
                    </tr>
                    <tr>
                        <th colspan="2" style="font-size: 13px;">COMUNA :
                            <label style="font-weight: none;">'.$valor['COMUNA'].' <label>
                        </th>
                    </tr>
                    <tr>
                        <th colspan="2" style="font-size: 13px;">VILLA : </th>
                    </tr>
                    <tr>
                        <th colspan="2" style="font-size: 13px;">TELEFONO :
                            <label style="font-weight: none;">'.$valor['TELEFONO'].' <label>
                        </th>
                    </tr>
                    <tr>
                        <th colspan="2" style="font-size: 13px;">CORREO ELECTRONICO:
                            <label style="font-weight: none;">'.$valor['CORREO'].' <label>
                        </th>
                    </tr>
                    <tr>
                        <th colspan="2" style="font-size: 13px;">FOLIO EPIVIGILIA: </th>
                    </tr>
                    </table>
                </div><br>';
    }

    

        $code.='<div style="margin-left:6;margin-right:6;">
                <table style="width:100%;">
                    <th colspan="2" style="font-size: 13px;">
                        <label style="margin-left:35%;"> DATOS PROCEDENCIA </label>
                    </th>
                </table>
            </div>';

        $code.='<div style="margin-left:6;margin-right:6;">
                    <table style="width:100%;">
                        <tr><th colspan="2" style="font-size: 13px;">CENTRO DERIVADOR: </th></tr>
                        <tr><th colspan="2" style="font-size: 13px;">CORREO CONTACTO: </th></tr>
                        <tr><th colspan="2" style="font-size: 13px;">TELEFONO  CONTACTO: </th></tr>
                        <tr><th colspan="2" style="font-size: 13px;">HORA REGISTRO: </th></tr>
                        <tr><th colspan="2" style="font-size: 13px;">FECHA REGISTRO TOMA DE MUESTRA: </th></tr>
                         <tr><th colspan="2" style="font-size: 13px;">LABORATORIO DONDE DERIVA: HDS/HLCM/HLT </th></tr>
                        <tr><th colspan="2" style="font-size: 13px;">CORREO: </th></tr>
                    </table>
                </div><br><br><br>';
     /*    switch ($centro) {
            // SAR CAROL URZUA
            case "8":
                $code.='<div style="margin-left:6;margin-right:6;">
                        <table style="width:100%;">
                            <tr>
                                <th colspan="2" style="font-size: 13px;">CENTRO DERIVADOR: <label style="font-weight: none;"> SAR CAROL URZUA <label></th>
                            </tr>
                            <tr>
                                <th colspan="2" style="font-size: 13px;">CORREO CONTACTO: <label style="font-weight: none;">  <label></th>
                            </tr>
                            <tr>
                                <th colspan="2" style="font-size: 13px;">TELEFONO  CONTACTO: <label style="font-weight: none;">  <label></th>
                            </tr>
                            <tr>
                                <th colspan="2" style="font-size: 13px;">HORA REGISTRO: <label style="font-weight: none;">  <label></th>
                            </tr>
                            <tr>
                                <th colspan="2" style="font-size: 13px;">FECHA REGISTRO TOMA DE MUESTRA: <label style="font-weight: none;">  <label></th>
                            </tr>
                             <tr>
                                <th colspan="2" style="font-size: 13px;">LABORATORIO DONDE DERIVA: HDS/HLCM/HLT <label style="font-weight: none;">  <label></th>
                            </tr>
                            <tr>
                                <th colspan="2" style="font-size: 13px;">CORREO: <label style="font-weight: none;">  <label></th>
                            </tr>
                        </table>
                    </div><br><br><br>';
            break;
            //  SAPU LA FAENA
            case "9":
                $code.='<div style="margin-left:6;margin-right:6;">
                        <table style="width:100%;">
                            <tr>
                                <th colspan="2" style="font-size: 13px;">CENTRO DERIVADOR: <label style="font-weight: none;">  SAPU LA FAENA <label></th>
                            </tr>
                            <tr>
                                <th colspan="2" style="font-size: 13px;">CORREO CONTACTO: <label style="font-weight: none;">  <label></th>
                            </tr>
                            <tr>
                                <th colspan="2" style="font-size: 13px;">TELEFONO  CONTACTO: <label style="font-weight: none;">  <label></th>
                            </tr>
                            <tr>
                                <th colspan="2" style="font-size: 13px;">HORA REGISTRO: <label style="font-weight: none;">  <label></th>
                            </tr>
                            <tr>
                                <th colspan="2" style="font-size: 13px;">FECHA REGISTRO TOMA DE MUESTRA: <label style="font-weight: none;">  <label></th>
                            </tr>
                             <tr>
                                <th colspan="2" style="font-size: 13px;">LABORATORIO DONDE DERIVA: HDS/HLCM/HLT <label style="font-weight: none;">  <label></th>
                            </tr>
                            <tr>
                                <th colspan="2" style="font-size: 13px;">CORREO: <label style="font-weight: none;">  <label></th>
                            </tr>
                        </table>
                    </div><br><br><br>';
            break;
            // SAPU LO HERMIDA
            case "10":
                $code.='<div style="margin-left:6;margin-right:6;">
                        <table style="width:100%;">
                            <tr>
                                <th colspan="2" style="font-size: 13px;">CENTRO DERIVADOR: <label style="font-weight: none;"> SAPU LO HERMIDA <label></th>
                            </tr>
                            <tr>
                                <th colspan="2" style="font-size: 13px;">CORREO CONTACTO: <label style="font-weight: none;">  <label></th>
                            </tr>
                            <tr>
                                <th colspan="2" style="font-size: 13px;">TELEFONO  CONTACTO: <label style="font-weight: none;">  <label></th>
                            </tr>
                            <tr>
                                <th colspan="2" style="font-size: 13px;">HORA REGISTRO: <label style="font-weight: none;">  <label></th>
                            </tr>
                            <tr>
                                <th colspan="2" style="font-size: 13px;">FECHA REGISTRO TOMA DE MUESTRA: <label style="font-weight: none;">  <label></th>
                            </tr>
                             <tr>
                                <th colspan="2" style="font-size: 13px;">LABORATORIO DONDE DERIVA: HDS/HLCM/HLT <label style="font-weight: none;">  <label></th>
                            </tr>
                            <tr>
                                <th colspan="2" style="font-size: 13px;">CORREO: <label style="font-weight: none;">  <label></th>
                            </tr>
                        </table>
                    </div><br><br><br>';
            break;
            // SAPU SAN LUIS
            case "11":
                $code.='<div style="margin-left:6;margin-right:6;">
                        <table style="width:100%;">
                            <tr>
                                <th colspan="2" style="font-size: 13px;">CENTRO DERIVADOR: <label style="font-weight: none;"> SAPU SAN LUIS <label></th>
                            </tr>
                            <tr>
                                <th colspan="2" style="font-size: 13px;">CORREO CONTACTO: <label style="font-weight: none;"> fguajardo@cormup.cl <label></th>
                            </tr>
                            <tr>
                                <th colspan="2" style="font-size: 13px;">TELEFONO  CONTACTO: <label style="font-weight: none;"> 982098476 <label></th>
                            </tr>
                            <tr>
                                <th colspan="2" style="font-size: 13px;">HORA REGISTRO: <label style="font-weight: none;">  <label></th>
                            </tr>
                            <tr>
                                <th colspan="2" style="font-size: 13px;">FECHA REGISTRO TOMA DE MUESTRA: <label style="font-weight: none;">  <label></th>
                            </tr>
                             <tr>
                                <th colspan="2" style="font-size: 13px;">LABORATORIO DONDE DERIVA: HDS/HLCM/HLT <label style="font-weight: none;">  <label></th>
                            </tr>
                            <tr>
                                <th colspan="2" style="font-size: 13px;">CORREO: <label style="font-weight: none;">  <label></th>
                            </tr>
                        </table>
                    </div><br><br><br>';
            break;
            default:
                $code.='<div style="margin-left:6;margin-right:6;">
                    <table style="width:100%;">
                        <tr><th colspan="2" style="font-size: 13px;">CENTRO DERIVADOR: </th></tr>
                        <tr><th colspan="2" style="font-size: 13px;">CORREO CONTACTO: </th></tr>
                        <tr><th colspan="2" style="font-size: 13px;">TELEFONO  CONTACTO: </th></tr>
                        <tr><th colspan="2" style="font-size: 13px;">HORA REGISTRO: </th></tr>
                        <tr><th colspan="2" style="font-size: 13px;">FECHA REGISTRO TOMA DE MUESTRA: </th></tr>
                         <tr><th colspan="2" style="font-size: 13px;">LABORATORIO DONDE DERIVA: HDS/HLCM/HLT </th></tr>
                        <tr><th colspan="2" style="font-size: 13px;">CORREO: </th></tr>
                    </table>
                </div><br><br><br>';
            break;
        }*/

        $code.='<div style="margin-left:6;margin-right:6;">
                    <div style="margin-left: 10%;"> 
                        <div style="text-align:center;"> 
                            <label>________________________ </label><br>
                            <label style="width: 150;font-size: 15px;"> NOMBRE Y FIRMA RESPONSABLE</label>
                        </div> 
                    </div>
            </div>';

     try{
        //$dompdf->setPaper("A4", "portrait");
        $dompdf->set_paper(array(0, 0, 595, 841), 'portrait');
        $dompdf->load_html($code);
        ini_set("memory_limit","32M"); 
        $dompdf->render();
        $dompdf->stream("Dato de Urgencia Sapu.pdf", array("Attachment" => 0));
    }catch(DOMPDF_Exception $e){
        echo '<pre>',print_r($e),'</pre>';
    }

?>
