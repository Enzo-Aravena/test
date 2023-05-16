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
	<script src='../../../lib/jquery-3.2.1.min.js'></script>
	<?php include_once("../../../lib/components.php");?>
	<script src="http://code.jquery.com/ui/1.10.3/jquery-ui.js"></script>
	<script src="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/3.3.7/js/bootstrap.min.js"></script>
	<script src='../../../lib/jquery/jquery.tablesorter.min.js'></script> 
	<script src='../../../lib/jquery/jquery.tablesorter.widgets.min.js'></script> 
	<script src='../../../lib/jquery/jquery.tablesorter.widgets.js'></script> 
	<script src="../controlador/cliente/controladorAnularAtencion.js"></script>
	<script src="js/navAnularAtencion.js"></script>
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
		.Mostrar input[type="radio"]:checked + span:after {
		    content: "";
		    width: 8px;
		    height: 8px;
		    position: absolute;
		    top: 6px;
		    left: -15px !important;
		    background-color: #900;
		    border-radius: 50%;
		    display: block;
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
							<div class="col-md-2">
								<button type="button" class="btn btn-danger" style="background: #900;" id="volverSeleccionCentro"> Vover a Seleccion Centro </button>
							</div>							
						</div>
						<br><br><br><br>
						<div class="form-horizontal">
							<div class="form-group">
								<label class="control-label col-md-3">Buscar paciente por : </label>
								<div class="col-md-7">
									<label class="radio-inline Mostrar">
										<input name="rdbBuscar" type="radio" value="rut" checked>
										<span>Rut Paciente</span>
									</label>
									<label class="radio-inline Mostrar">
										<input name="rdbBuscar" type="radio" value="dni">
										<span> DNI o Pasaporte </span>
									</label>
								</div>
							</div>
				          	<div class="form-group">
					            <label class="control-label col-md-2"> </label>
					            <div class="col-md-3">
									<input class="form-control" placeholder="Rut Paciente ..." type="text" id="buscarRut" name="buscarRut" autocomplete="off">
									<input class="form-control" placeholder="DNI o Pasaporte" type="text" id="buscarDni" name="buscarDni" autocomplete="off">
					            </div>
								 <button class="btn btn-primary" id="buscarPacientesCancelados" name="buscarPacientesCancelados" style="display: inline-block;">Buscar Paciente</button>
				          	</div>
				        </div>

						<!-- INICIO DATOS PACIENTE -->
						<!--<div class="form-horizontal">
							<table class="table table-bordered" id="myTable" >
								<thead style="background: #900;color: white;" >
									<th class="hidden-xs"> </th>
									
								</thead>
								<tbody id="resultRegistradas"></tbody>
							</table>
						</div>-->
						<br>
						
					</div>
				</div>
			</div>
		</div>
	</body>
</html>