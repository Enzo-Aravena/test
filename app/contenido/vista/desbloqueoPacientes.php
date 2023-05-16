<?php include_once("../../../lib/seguridad.php");?>
<!DOCTYPE html>
<html>
<head>
	<meta http-equiv="cache-control" content="no-cache"/>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />	
  <meta http-equiv="Expires" content="0">
  <meta http-equiv="Last-Modified" content="0">
  <meta http-equiv="Cache-Control" content="no-cache, mustrevalidate">
  <meta http-equiv="Pragma" content="no-cache">
	<link rel="stylesheet" href="//code.jquery.com/ui/1.12.1/themes/base/jquery-ui.css">
  	<script src="https://code.jquery.com/jquery-1.12.4.js"></script>
  	<script src="https://code.jquery.com/ui/1.12.1/jquery-ui.js"></script>
	<link href="../../../lib/css/bootstrap.min.css" media="all" rel="stylesheet" type="text/css" />
	<link href="../../../lib/css/font-awesome.min.css" media="all" rel="stylesheet" type="text/css" />
	<link href="../../../lib/css/se7en-font.css" media="all" rel="stylesheet" type="text/css" />  
	<link href="../../../lib/css/style.css" media="all" rel="stylesheet" type="text/css" />
	<link href="css/estilos.css" media="all" rel="stylesheet" type="text/css" />
	<link href="css/atne.css" media="all" rel="stylesheet" type="text/css" />
	<script src='../../../lib/jquery-3.2.1.min.js'></script>
	<?php include_once("../../../lib/components.php");?>
	<script src="http://code.jquery.com/ui/1.10.3/jquery-ui.js"></script>
	<script src="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/3.3.7/js/bootstrap.min.js"></script>
	<script src='../../../lib/jquery/jquery.tablesorter.min.js'></script> 
	<script src='../../../lib/jquery/jquery.tablesorter.widgets.min.js'></script> 
	<script src='../../../lib/jquery/jquery.tablesorter.widgets.js'></script> 
	<script src="../controlador/cliente/desblPacienteController.js?id=97"></script>
	<script src="js/navDesbloPac.js?id=97"></script>
	<meta content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" name="viewport">
	<style type="text/css">
		.mayuscula{text-transform:uppercase;}
	</style>
	<script type="text/javascript">
		function deshabilitaRetroceso(){
		    window.location.hash="no-back-button";
		    window.location.hash="Again-No-back-button" //chrome
		    window.onhashchange=function(){window.location.hash="no-back-button";}
		}
	</script>
	<style type="text/css">
		.table {
    		margin-bottom: 10px !important;
		}
		.table-bordered {
		    border: 1px solid #ddd !important;
		}

		.table {
		    width: 100% !important;
		    margin-bottom: 20px !important;
		}
		.table {
		    margin-bottom: 10px !important;
		}
		.table-bordered {
		    border: 1px solid #ddd !important;
		}
		.table {
		    width: 100% !important;
		    margin-bottom: 20px !important;
		}
		
	</style>
</head>
	<body onload="deshabilitaRetroceso()">
		<div class="row">
			<div class="col-md-12">
				<div class="widget-container">
					<div class="widget-content padded">
						<div class="form-horizontal">
							<input type="hidden" name="fechaHoy" id="fechaHoy">
							<input id="fechaYhoraIngresoSistema" name="fechaYhoraIngresoSistema" type="hidden" >
							<div class="col-md-2">
								<button type="button" class="btn btn-danger" style="background: #900;" id="volverSeleccionCentro"> Vover a Seleccion Centro </button>
							</div>
						</div>
						<br><br>
						<br><br>
						<div class="form-horizontal">
							<div class="col-md-1"></div>
							<div class="col-md-6">
								<div class="form-group">
								<label class="control-label col-md-3">Centro de atención (*)</label>
								<div class="col-md-5">
									<select class="form-control mayuscula  required" id="centroi" name="centroi">
									</select>
								</div>								
								<button class="btn btn-primary" id="ejecutar" style="display: inline-block;">Buscar</button>
								</div>
							</div>
						</div>

						<!-- INICIO DATOS PACIENTE -->
						<div class="form-horizontal">
							<table class="table table-bordered" id="myTable" >
								<thead style="background: #900;color: white;" >
									<th class="hidden-xs"> N° </th>
									<th class="hidden-xs">RUT / PASAPORTE </th>
									<th class="hidden-xs">NOMBRE</th>
									<th class="hidden-xs">APELLIDO PATERNO</th>
									<th class="hidden-xs">APELLIDO MATERNO</th>
									<th class="hidden-xs">FECHA NACIMIENTO</th>
									<th class="hidden-xs">NOMBRE PROFESIONAL</th>
									<th class="hidden-xs">ULTIMA ATENCION</th>
									<th class="hidden-xs"> </th>
								</thead>
								<tbody id="resultRegistradas"></tbody>
							</table>
						</div>
						<br>
						
					</div>
				</div>
			</div>
		</div>


			<!-- INICIO MODAL DE VALIDACION -->
			<div class="modal fade" id="validacion"   data-backdrop="static" data-keyboard="false" role="dialog" >
				<div class="modal-dialog" style="width: 845px !important;">
					<div class="modal-content">
						<div class="modal-header">
							<button type="button" id="cerrarPop" class="close" data-dismiss="modal" style="color:white;">&times;</button>
							<h4 class="modal-title" style="color:white;">Desbloqueo Pacientes</h4>
						</div>
						<!-- START MODAL BODY-->
						<div class="modal-body" style="text-align: center;background-color: #fef9f4 !important;">
							<h3><label class="control-label" style="text-align: center" id="mensaje"> </label></h3>
						</div>
						<!-- END MODAL BODY-->
						<div class="modal-footer" style="background-color: #fef9f4 !important;">
							<div class="form-horizontal">
								<div class="col-md-9"></div>
								<div class="col-md-3">
									<button type="button" class="btn btn-default" data-dismiss="modal">Aceptar</button>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<!-- FIN MODAL DE VALIDACION -->


			<!-- INICIO MODAL DE VALIDACION -->
			<div class="modal fade" id="myModal"   data-backdrop="static" data-keyboard="false" role="dialog" >
				<div class="modal-dialog" style="width: 845px !important;">
					<div class="modal-content">
						<div class="modal-header">
							<button type="button" id="cerrarPop" class="close" data-dismiss="modal" style="color:white;">&times;</button>
							<h4 class="modal-title" style="color:white;">Desbloqueo Pacientes</h4>
						</div>
						<!-- START MODAL BODY-->
						<div class="modal-body" style="background-color: #fef9f4 !important;">
							<div>
								<div class="form-group">
									<input type= "hidden" id="infoaEnviar" name="infoaEnviar">
									<label for="motivoDesbloqueo"> Motivo del desbloqueo del paciente: </label>
									<textarea class="form-control textareaResize" maxlength="150" id="motivoDesbloqueo" name="motivoDesbloqueo" rows="3" cols="3"></textarea>
									<p  style="margin-left: 90%;" id="charNum">0/150</p>
								</div>
							</div>
						</div>
						<!-- END MODAL BODY-->
						<div class="modal-footer" style="background-color: #fef9f4 !important;">
							<div class="form-horizontal">
								<div class="col-md-7"></div>
								<div class="col-md-5">
									<!-- <button type="button" class="btn btn-default" data-dismiss="modal">Aceptar</button> -->
									<button type="button" class="btn btn-default" id="desbloquearPacientes" > Ingresar </button>
									<button type="button" class="btn btn-default" data-dismiss="modal"> Cancelar </button>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<!-- FIN MODAL DE VALIDACION -->


	</body>
</html>