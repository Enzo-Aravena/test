<?php include_once("../../../lib/seguridad.php");?>
<!DOCTYPE html>
<html>
<head>
	<meta http-equiv="cache-control" content="no-cache"/>
  	<meta http-equiv="Expires" content="0">
  	<meta http-equiv="Last-Modified" content="0">
  	<meta http-equiv="Cache-Control" content="no-cache, mustrevalidate">
  	<meta http-equiv="Pragma" content="no-cache">
	<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />	
	<link href="css/style.css" media="all" rel="stylesheet" type="text/css" />
	<link href="../../../lib/css/bootstrap.min.css" media="all" rel="stylesheet" type="text/css" />
	<link href="../../../lib/css/font-awesome.min.css" media="all" rel="stylesheet" type="text/css" />
	<link href="../../../lib/css/se7en-font.css" media="all" rel="stylesheet" type="text/css" />  
	<link href="../../../lib/css/style.css" media="all" rel="stylesheet" type="text/css" />
	<?php include_once("../../../lib/components.php");?>
	<link href="../../../lib/nuevoCDN/jquery-ui-1.12.1.custom/jquery-ui.css" rel="stylesheet" />
	<script src="../../../lib/nuevoCDN/jquery-1.12.4.js"></script>
	<script src="../../../lib/nuevoCDN/jquery-ui.js"></script>
	<script src="../../../lib/nuevoCDN/bootstrap.min.js"></script>
	<script src="../../../lib/nuevoCDN/select2.full.min.js"></script>
	<link href="../../../lib/nuevoCDN/select2.min.css" rel="stylesheet" />
	<script src="../../../lib/nuevoCDN/select2.min.js"></script>
	<style>
		.datepicker{z-index:1151 !important;}
		.mayuscula{text-transform:uppercase;}
		.ui-datepicker .ui-datepicker-header{ background: #ff0707;}
		.ui-state-active, .ui-widget-content .ui-state-active, .ui-widget-header .ui-state-active, a.ui-button:active, .ui-button:active, .ui-button.ui-state-active:hover {
			border: 1px solid #900 !important;
			background: #ff2121 !important;
			font-weight: normal;
			color: #b7b7b7;
			color: white !important;
		}

		.ui-state-default, .ui-widget-content .ui-state-default, .ui-widget-header .ui-state-default, .ui-button, html .ui-button.ui-state-disabled:hover, html .ui-button.ui-state-disabled:active {
			    border: 1px solid #d9534f;
				background: #ffffff;
				font-weight: normal;
				color: #000;
		}

		.ui-state-highlight, .ui-widget-content .ui-state-highlight, .ui-widget-header .ui-state-highlight {
			border: 1px solid #a50049;
			background: #fff400;
			color: #000000;
		}

        .ui-widget.ui-widget-content {
            border: 1px solid #900;
        }
	</style>
	<script src="../controlador/cliente/contController.js?id=9654"></script>
	<script src="js/navConsulta.js?id=39"></script>
	<script type="text/javascript">
		//window.parent.$("#loader").show();
		function deshabilitaRetroceso(){
		    window.location.hash="no-back-button";
		    window.location.hash="Again-No-back-button"; //chrome
		    window.onhashchange=function(){window.location.hash="no-back-button";}
		}

		function cuentaAtras() {
			contadorCarga = 1; 
			let centroTrabajo = window.parent.$("#centroTrabajo").val();
			let fechaHoy = $("#fechaHoy").val();
			contador = 1;
			if (centroTrabajo !== "13") {
				obtenerPacientesNuevosCreados(centroTrabajo);
			}
		}

		setInterval('cuentaAtras()',30000); //30000 = 30 segundos  // 60000 = 1 minutos // 180000 =  3 minutos
	</script>
</head>
	<body onload="deshabilitaRetroceso()">
		<div class="row">
			<div class="col-md-12">
				<div class="widget-container">
					<div class="widget-content padded">
						<!-- REGISTRA LA URGENCIA -->
						<div class="form-horizontal">
							<input type="hidden" name="fechaHoy" id="fechaHoy">
							<div class="row">
								<div class="col-md-2">
									<div class="widget-container fluid-height">
										<button type="button" class="btn btn-danger" id="volverSeleccionCentro"> Vover a Selección Centro </button>	
									</div>
								</div>
								<div class="col-md-8"><div class="widget-container fluid-height"></div></div>
								<div class="col-md-2">
									<div class="widget-container fluid-height">										
										
									</div>
								</div>
							</div>
						</div>
						<br>
						<br>
						<!-- CONTENT TAB -->
						<div class="form-horizontal" id="contentTab">
							<ul class="nav nav-tabs">
								<li class="active" ><a data-toggle="tab" href="#tab1"> <img src="../../../lib/images/registro.gif"> Consulta DAU <label id="cantAltaDau"></label></a></li>
							</ul>
							<div class="tab-content" >
								<div class="tab_content" id="tab1">
                                <div>&nbsp;  </div><input type="hidden" name="tabl6" id="tabl6" value="tab6" >
							        <div class="form-horizontal">
										<div class="form-group">
											<label class="control-label col-md-3">Buscar paciente por : </label>
											<div class="col-md-7">
												<label class="radio-inline Mostrar">
													<input checked="" name="rdbBuscar" type="radio" value="fecha">
													<span> Fecha Alta</span>
												</label>
												<label class="radio-inline Mostrar">
													<input name="rdbBuscar" type="radio" value="rut">
													<span>Rut Paciente</span>
												</label>
											</div>
										</div>
							          	<div class="form-group">
								            <label class="control-label col-md-2"> </label>
								            <div class="col-md-3">
								              	<input class="form-control" placeholder="Rut Paciente ..." type="text" id="buscar" name="buscar" autocomplete="off">
												<input type="text" class="form-control Datepicker"  min="1900-01-01" id="fechaBusqueda" placeholder="dd/mm/yyyy" maxlength="10">
								            </div>
											 <button class="btn btn-primary" id="buscarPacientesDadosDeAlta" style="display: inline-block;">Buscar Paciente</button>
							          	</div>
							        </div>
									<br>
									<div id="contenidoConsultaDau"></div> <!-- style= "display: flex;" -->
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>

	
	</body>
</html>