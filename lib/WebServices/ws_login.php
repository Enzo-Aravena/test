<?php
include('lib/nusoap.php');
include('conexion.php');

$server = new soap_server;
//                      nombreWS               namespace
$server->configureWSDL('obtenerUsuarioLogin', 'urn:datosUsuario');   

if (!isset($HTTP_RAW_POST_DATA)) {
  $HTTP_RAW_POST_DATA = file_get_contents('php://input');
}

function obtenerDetalleUser($usuario){
  $bd    = new Conexion();  
  $conn  = $bd->Conectar();
  $i=0;
  $data = Array();
  $query="";
  $datos = $conn->query("call buscarUsuario('$usuario')");
  $arreglo  = [];
  while ($fila = mysqli_fetch_array($datos)) {
       $data[$i] = Array(
        "data"     => "1",       
        "clave"    => utf8_encode($fila[0]),
        "estado"   => utf8_encode($fila[1]),
        "perfil"   => utf8_encode($fila[2]),
        "perId"   => utf8_encode($fila[3]),
        "cargo"   => $fila[4]
        );//end array
    $i++;
  }
  return json_encode($data);
}

//echo obtenerDetalleUser('mhen')."<br>";


function obtenerNombreUsuario($usuario){
  $bd     = new Conexion();  
  $conn  = $bd->Conectar();
  $i=0;
  $data = Array();
  $query="";
  $datos = $conn->query("SELECT 
      CONCAT(ZU.NOMBRE,' ',CONCAT(ZU.APELLIDO1,' ',ZU.APELLIDO2))   AS 'NOMBRE',
    ZU.PERFIL_HABITUAL                        AS 'PERFIL',
      ZU.SEXO                               AS 'SEXO',
      ZU.id_centro                          AS 'CENTRO',
      ZU.PASSWORD                         AS 'CLAVE',
      ZU.CARGOS                           AS 'PERMISOS',
    ZU.FIRMA                            AS 'FIRMA',
    ZU.RUT                              AS 'RUT',
  ZU.PER_ID                              AS 'PER_ID'
  FROM  Z_USUARIOS_OMI ZU 
  WHERE ZU.USERNAME = '$usuario'");
  $arreglo  = [];

  while ($fila = mysqli_fetch_array($datos)) {
       $data[$i] = Array(
        "data"     => "1",       
        "nombre"    => utf8_encode($fila[0]),
        "perfil"    => utf8_encode($fila[1]),
        "sexo"    => utf8_encode($fila[2]),
        "centro"    => utf8_encode($fila[3]),
        "clave"    => utf8_encode($fila[4]),
        "permisos"    => $fila[5],
        "firma"    => utf8_encode($fila[6]),
        "rut"    => utf8_encode($fila[7]),
        "perId"    => utf8_encode($fila[8])
        );//end array
    $i++;
  }
  return json_encode($data);
}

//echo obtenerNombreUsuario('mhen');

//                  nombreFuncion         parameter                         retorno data               nombreNamespace      acciondatonamespace+metodo        rpc  codifica   definicion metodo
$server->register('obtenerDetalleUser',array('usuario'=>'xsd:string'), array('return'=>'xsd:string'),'urn:datosUsuario','urn:datosUsuario#obtenerDetalleUser','rpc','encoded', 'obtenerUsuarioLogin');
$server->register('obtenerNombreUsuario',array('usuario'=>'xsd:string'), array('return'=>'xsd:string'),'urn:datosUsuario','urn:datosUsuario#obtenerNombreUsuario','rpc','encoded', 'obtenerUsuarioLogin');
$server->service($HTTP_RAW_POST_DATA);

?>

