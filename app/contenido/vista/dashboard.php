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

		.Validatr{
			background-color: coral;
		}
	</style>
	<script src="../controlador/cliente/contController.js?id=99"></script>
	<script src="js/navDashboard.js?id=97"></script>
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

		setInterval('cuentaAtras()',10000); //30000 = 30 segundos  // 60000 = 1 minutos // 180000 =  3 minutos
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
										<button type="button" class="btn btn-danger" id="volverSeleccionCentro"> Volver a Selección Centro </button>	
									</div>
								</div>
								<div class="col-md-8"><div class="widget-container fluid-height"></div></div>
								<div class="col-md-2">
									<div class="widget-container fluid-height">										
										<button type="button" class="btn btn-danger" id="registrarUrgencia" ata-toggle="modal" data-target="#"> Registrar Urgencia </button>
									</div>
								</div>
							</div>
						</div>
						<br>
						<br>
						<!-- CONTENT TAB -->
						<div class="form-horizontal" id="contentTab" >
							<ul class="nav nav-tabs">
								<li class="active" ><a data-toggle="tab" href="#tab1"> <img src="../../../lib/images/registro.gif"> Registrada <label id="cantRegistradas"></label></a></li>
								<li><a data-toggle="tab" href="#tab2"> <img src="../../../lib/images/triage.gif"> Triadas <label id="CantidadTriadas"></label></a></li>
								<li><a data-toggle="tab" href="#tab3"> <img src="../../../lib/images/atendida.png"> Atención <label id="catAtendida"></label></a></li>
								<li><a data-toggle="tab" href="#tab4"> <img src="../../../lib/images/urgencia.png">  Observación y Tratamiento <label id="cantObsYTto"></label></a></li>
								<li><a data-toggle="tab" href="#tab5"> <img src="../../../lib/images/casita.png"> Egreso <label id="cantEgreso"></label></a></li>
								<li><a data-toggle="tab" href="#tab6"> <img src="../../../lib/images/comprobar.png"> Dados de Alta <label id="cantAlta"></label></a></li>
								<li><a data-toggle="tab" href="#tab7"> <img src="../../../lib/images/cancel.png"> Canceladas <label id="cantCanceladas"></label></a></li>
							</ul>
							<div class="tab-content" >
								<div class="tab_content" id="tab1">
									<div>&nbsp;  </div><input type="hidden" name="tabl1" id="tabl1" value="tab1" ><br><br>
									<div id="contenidoRegistradas"></div>
								</div>

								<div class="tab_content" id="tab2">
									<div>&nbsp;  </div><input type="hidden" name="tabl2" id="tabl2" value="tab2"><br><br>
									<div id="contenidoTriadas"></div>
								</div>

								<div class="tab_content" id="tab3">
									<div>&nbsp;  </div><input type="hidden" name="tabl3" id="tabl3" value="tab3" ><br>
									<div>
							            <div class="col-md-7 categorizacion">
							            	<label>Leyenda Categorización : </label>
											<label><img src="../../../lib/images/icon.png" style="background-color: #FF0033;cursor: pointer;"><span>C1</span></label><b style="color: black;">&nbsp; URGENCIA &nbsp;</b>
											<label><img src="../../../lib/images/icon.png" style="background-color: #FF9933;cursor: pointer;"><span>C2</span></label><b style="color: black;">&nbsp; URGENCIA &nbsp;</b>
											<label><img src="../../../lib/images/icon.png" style="background-color: #FFFF00;cursor: pointer;"><span>C3</span></label><b style="color: black;">&nbsp; URGENCIA  &nbsp;</b>
											<label><img src="../../../lib/images/icon.png" style="background-color: #00CC33;cursor: pointer;"><span>C4</span></label><b style="color: black;">&nbsp; URGENCIA LEVE &nbsp;</b>
											<label><img src="../../../lib/images/icon.png" style="background-color: #0066FF;cursor: pointer;"><span>C5</span></label><b style="color: black;">&nbsp; URGENCIA LEVE &nbsp;</b>
										</div>
									</div>
									<br><br>
									<div id="contenidoAtenciones"></div>
								</div>

								<div class="tab_content" id="tab4">
									<div>&nbsp;  </div><input type="hidden" name="tabl4" id="tabl4" value="tab4"><br>
									<div>
							            <div class="col-md-7 categorizacion">
							            	<label>Leyenda Categorización : </label>
											<label><img src="../../../lib/images/icon.png" style="background-color: #FF0033;cursor: pointer;"><span>C1</span></label><b style="color: black;">&nbsp; URGENCIA &nbsp;</b>
											<label><img src="../../../lib/images/icon.png" style="background-color: #FF9933;cursor: pointer;"><span>C2</span></label><b style="color: black;">&nbsp; URGENCIA &nbsp;</b>
											<label><img src="../../../lib/images/icon.png" style="background-color: #FFFF00;cursor: pointer;"><span>C3</span></label><b style="color: black;">&nbsp; URGENCIA  &nbsp;</b>
											<label><img src="../../../lib/images/icon.png" style="background-color: #00CC33;cursor: pointer;"><span>C4</span></label><b style="color: black;">&nbsp; URGENCIA LEVE &nbsp;</b>
											<label><img src="../../../lib/images/icon.png" style="background-color: #0066FF;cursor: pointer;"><span>C5</span></label><b style="color: black;">&nbsp; URGENCIA LEVE &nbsp;</b>
										</div>
									</div>
									<br><br>
									<div id="contenidoProcedimientos"></div>
								</div>

								<div class="tab_content" id="tab5">
									<div>&nbsp;  </div><input type="hidden" name="tabl5" id="tabl5" value="tab5"><br>
									<div>
							            <div class="col-md-7 categorizacion">
							            	<label>Leyenda Categorización : </label>
											<label><img src="../../../lib/images/icon.png" style="background-color: #FF0033;cursor: pointer;"><span>C1</span></label><b style="color: black;">&nbsp; URGENCIA &nbsp;</b>
											<label><img src="../../../lib/images/icon.png" style="background-color: #FF9933;cursor: pointer;"><span>C2</span></label><b style="color: black;">&nbsp; URGENCIA &nbsp;</b>
											<label><img src="../../../lib/images/icon.png" style="background-color: #FFFF00;cursor: pointer;"><span>C3</span></label><b style="color: black;">&nbsp; URGENCIA  &nbsp;</b>
											<label><img src="../../../lib/images/icon.png" style="background-color: #00CC33;cursor: pointer;"><span>C4</span></label><b style="color: black;">&nbsp; URGENCIA LEVE &nbsp;</b>
											<label><img src="../../../lib/images/icon.png" style="background-color: #0066FF;cursor: pointer;"><span>C5</span></label><b style="color: black;">&nbsp; URGENCIA LEVE &nbsp;</b>
										</div>
									</div>
									<br><br>
									<div id="contenidoEgreso"></div>
								</div>

								<div class="tab_content" id="tab6">
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
												  <input type="text" class="form-control Datepicker"  min="1900-01-01" id="fechaBusqueda" placeholder="dd/mm/yyyy">
								            </div>
											 <button class="btn btn-primary" id="buscarPacientesDadosDeAlta" style="display: inline-block;">Buscar Paciente</button>
							          	</div>
							        </div>
									<br>
									<div id="contenidoDadosAlta"></div>
								</div>

								<div class="tab_content" id="tab7">
									<div>&nbsp;  </div><input type="hidden" name="tabl7" id="tabl7" value="tab7" >
									<div class="form-horizontal">
										<div class="form-group">
											<label class="control-label col-md-3">Buscar paciente por : </label>
											<div class="col-md-7">
												<label class="radio-inline Mostrar">
													<input checked="" name="rdbBuscarDos" type="radio" value="fecha">
													<span> Fecha Cancelada </span>
												</label>
												<label class="radio-inline Mostrar">
													<input name="rdbBuscarDos" type="radio" value="rut">
													<span>Rut Paciente</span>
												</label>
											</div>
										</div>
							          	<div class="form-group">
								            <label class="control-label col-md-2"> </label>
								            <div class="col-md-3">
								              	<input class="form-control" placeholder="Rut Paciente ..." type="text" id="buscarRut" name="buscarRut" autocomplete="off">
												  <input type="text" class="form-control Datepicker"  min="1900-01-01" id="fechaBusquedaCancelada" placeholder="dd/mm/yyyy">
								            </div>
											 <button class="btn btn-primary" id="buscarPacientesCancelados" name="buscarPacientesCancelados" style="display: inline-block;">Buscar Paciente</button>
							          	</div>
							        </div>
									<div id="contenidoCancelados"></div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>

		<!-- MODAL DE INGRESO ACTUALIZACION PACIENTES SISTEMA SAPU-->
		<div class="modal fade" id="myModal" data-backdrop="static" data-keyboard="false" role="dialog" >
			<div class="modal-dialog" style="width: 76em !important;">
				<div class="modal-content">
					<div class="modal-header">
						<button type="button" class="close" data-dismiss="modal" style="color:white;">&times;</button>
						<h4 class="modal-title" style="color:white;">Pacientes</h4>
					</div>
					<!-- START MODAL BODY      height: 39em; -->
					<div class="modal-body" id="tamañopopup">
						<div class="row">
							<div class="form-horizontal" id="crearPaciente">
								<div class="form-group">
									<label id="Formcreacion"><h4><b>Registro de atención Paciente </b></h4></label>
									<br>
								</div>
								<input type="hidden" name="cargaDatosPaciente" id="cargaDatosPaciente" value="">
								<div class="col-md-6">
									<div class="form-group">
										<label class="checkbox-inline"><input type="checkbox" id="sinDoc" name="sinDoc"><span> <strong>Sin Documento <strong> </span></label>
									</div>
									<div class="form-group">
										<label for="rutPac"> Rut Paciente (*) </label>
										<input class="form-control " id="rutPac" name="rutPac" tabindex="1" oninput="checkRut(this)" placeholder="12345678-1" type="text" maxlength="10">
										<label id="validateRutError" style="color: red;"></label>
										<label id="validateRutOk" style="color: green;"></label>
									</div>
									<div class="form-group">
										<label for="nombrePac"> Nombre Paciente</label>
										<input class="form-control " id="nombrePac" tabindex="2" name="nombrePac" type="text" maxlength="20">
									</div>
									<div class="form-group">
										<label for="apeMat"> Apellido Materno</label>
										<input class="form-control " id="apeMat" tabindex="3" name="apeMat" type="text" maxlength="20">
									</div>
									<div class="form-group">
										<label for="sexo"> Sexo (*) </label>
										<select class="form-control " tabindex="4" id="sexo" name="sexo">
										</select>
									</div>
									<div class="form-group">
										<label for="direccion"> Dirección </label>
										<input class="form-control " id="direccion" tabindex="5" name="direccion" type="text" maxlength="50">
									</div>
									<div class="form-group">
										<label for="telefono"> Teléfono </label>
										<input class="form-control " id="telefono" tabindex="6" name="telefono" placeholder="+56998531423" type="text" maxlength="15">
									</div>
									<div class="form-group">
										<label for="correo"> Correo Electrónico </label>
										<input class="form-control" id="correo" name="correo" tabindex="7" placeholder="prueba@gmail.com" type="text">
									</div>
								</div>

								<div class="col-md-6">
									<div class="form-group">
										<label>&nbsp;</label>
									</div>
									<div class="form-group">
										<label for="dniPaci"> Pasaporte u Otro (*) </label>
										<input class="form-control  required" id="dniPac" name="dniPac" type="text">
										<label id="validateDniOk" style="color: green;"></label>
									</div>
									<div class="form-group">
										<label for="apePat"> Apellido Paterno</label>
										<input class="form-control " id="apePat" tabindex="2" name="apePat" type="text" maxlength="20">
									</div>
									<div class="form-group">
										<label > Fecha Nacimiento (*) </label>
										<!-- <label class="checkbox-inline"><input type="checkbox" id="sinFechaNac" name="sinFechaNac"><span> <strong> ¿En NN? <strong> </span></label> -->
										<input type="text" class="form-control" tabindex="3" min="1900-01-01" id="fnac" placeholder="dd/mm/yyyy" maxlength = "10">
									</div>
									<div class="form-group">
								        <label> Nacionalidad </label>
								        <select class="form-control  js-example-basic-single " tabindex="4" id="nacionalidad" name="nacionalidad"  data-live-search="true" style="width: 100% !important;"></select>
									</div>
									<div class="form-group">
										<label> Comuna </label>
										<select class="form-control js-example-basic-single-Dos " id="comuna" tabindex="5" name="comuna" data-show-subtext="true" data-live-search="true" style="width: 100% !important;"></select>
									</div>
									<div class="form-group">
										<label for="prevision"> Previsión (*)</label>
										<select class="form-control " tabindex="6" id="prevision" name="prevision">
										</select>
									</div>
								</div>
							</div>
							<div class="form-horizontal" id="RegistroUrgencia">
								<div class="form-group">
									<div class="col-md-8">
										<label><h4><b> INGRESO, DATOS DEMOGRÁFICOS Y MOTIVO DE CONSULTA </b></h4></label>
									</div>
									<div class="col-md-4"></div>
								</div>
								<input type="hidden" name="pacId" id="pacId">
								<input type="hidden" name="HTA" id="HTA">
								<input type="hidden" name="DM" id="DM">
								<input type="hidden" name="EPOC" id="EPOC">
								<input type="hidden" name="ASMA" id="ASMA">
								<input type="hidden" name="IRC" id="IRC">
								<input type="hidden" name="DHC" id="DHC">
								<input type="hidden" name="OTRASEC" id="OTRASEC">
								<input type="hidden" name="OTRASECDESC" id="OTRASECDESC">
								<div class="col-md-6">
									<div class="form-group">
										<label for="rutPaci"> Rut Paciente (*)</label>
										<input class="form-control  required" id="rutPaci" name="rutPaci" type="text">
									</div>
									<div class="form-group">
										<label for="nombrePaci"> Nombre Paciente</label>
										<input class="form-control " id="nombrePaci" name="nombrePaci" type="text">
									</div>
									<div class="form-group">
										<label for="apeMati"> Apellido Materno</label>
										<input class="form-control " id="apeMati" name="apeMati" type="text">
									</div>
									<div class="form-group">
										<label for="sexoi">  Sexo (*)</label>
										<select class="form-control " id="sexoi" name="sexoi">
										</select>
									</div>
									<div class="form-group">
										<label for="direccioni"> Dirección </label>
										<input class="form-control " id="direccioni" name="direccioni" type="text">
									</div>
									<div class="form-group">
										<label for="telefoni"> Teléfono </label>
										<input class="form-control " id="telefoni" placeholder="+56982336655" name="telefoni" type="text">
									</div>
									<div class="form-group">
										<div class="form-group">
											<label for="correoni"> Correo Electrónico </label>
											<input class="form-control " id="correoni" name="correoni" placeholder="prueba@gmail.com" type="text">
										</div>
										<input type="hidden" name="centroi" id="centroi">
									</div>

									<div class="form-group">
										<label for="motivoConsulta">Motivo Consulta (*)</label>
										<textarea class="form-control  textareaResize  required" maxlength="150" id="motivoConsulta" name="motivoConsulta" rows="3" cols="3" ></textarea>
										<p id="numMotivo">0/150</p>
									</div>

									<div class="form-group">
										<label for="tipoConsulta">Tipo Consulta (*)</label>
										<select class="form-control  required" id="tipoConsulta" name="tipoConsulta">
										</select>
									</div>

									<div class="form-group">
										<label for="medioTransporte">Medio Transporte (*)</label>
										<select class="form-control  required" id="medioTransporte" name="medioTransporte">
										</select>
									</div>
								</div>

								<div class="col-md-6">
									<div class="form-group">
										<label for="dniPaci">Pasaporte u Otro (*) </label>
										<input class="form-control " id="dniPaci" name="dniPaci" type="text">
									</div>
									<div class="form-group">
										<label for="apePati"> Apellido Paterno</label>
										<input class="form-control " id="apePati" name="apePati" type="text">
									</div>
									<div class="form-group">
										<label for="fnaci"> Fecha Nacimiento </label>
										<input class="form-control" id="fnaci" name="fnaci" type="text">
									</div>
									<div class="form-group">
								        <label> Nacionalidad </label>
										<select class="form-control" id="nacionalidadi" name="nacionalidadi"  data-live-search="true"></select>
									</div>
									<div class="form-group">
										<label> Comuna </label>
										<select class="form-control" id="comunai" name="comunai" data-show-subtext="true" data-live-search="true"></select>
									</div>
									<div class="form-group">
										<label for="previsioni"> Previsión </label>
										<select class="form-control " id="previsioni" name="previsioni">
										</select>
									</div>
									<div class="form-group">
										<label for="nombreAcompanante"> Nombre Acompañante </label>
										<input class="form-control " id="nombreAcompanante" name="nombreAcompanante" maxlength="25" type="text">
									</div>
									<div class="form-group">
										<label for="tipoAccidente"> Tipo Accidente </label>
										<select class="form-control " id="tipoAccidente" name="tipoAccidente">
										</select>
									</div>
									<div class="form-group">
										<label for="lugarAccidente"> Lugar Accidente </label>
										<select class="form-control " id="lugarAccidente" name="lugarAccidente">
										</select>
									</div>
								</div>
							</div>
						</div>
					</div>
					<!-- END MODAL BODY-->
					<div class="modal-footer">
						<div class="form-horizontal">
							<div class="col-md-2"></div>
							<div class="col-md-7"></div>
							<div class="col-md-3">
								<button type="button" class="btn btn-danger" id="crearPacienteSapu"> Aceptar </button>
								<button type="button" class="btn btn-danger" id="IngresarRegistro"> Crear Registro</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>

		<!-- MODAL DE VALIDACION -->
		<div class="modal fade" data-backdrop="static" data-keyboard="false" id="modalValidacion" role="dialog" style="z-index: 1151 !important;" >
			<div class="modal-dialog" style="width: 845px !important;">
				<div class="modal-content">
					<div class="modal-header">
						<button type="button" class="close" data-dismiss="modal" style="color:white;">&times;</button>
						<h4 class="modal-title" style="color:white;">Pacientes</h4>
					</div>
					<!-- START MODAL BODY-->
					<div class="modal-body" style="text-align: center;background-color: #fef9f4;">
						<label class="control-label" id="mensaje"></label>
						<div id="cargandoPdf" class="loader">
							<img style="width: 20%;" src="../../../lib/images/spinner-loader-animation.gif">
						</div>
					</div>
					<!-- END MODAL BODY-->
					<div class="modal-footer" style="background-color: #fef9f4 !important;">
						<div class="form-horizontal">
							<div class="col-md-9"></div>
							<div class="col-md-3">
								<button type="button" class="btn btn-default" data-dismiss="modal" id="CerrarNormal">Aceptar</button>
								<button type="button" class="btn btn-default" id="refrescarPantalla">Aceptar</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>

		<!-- MODAL DE VALIDACION  -->
		<div class="modal fade" data-backdrop="static" data-keyboard="false" id="modalNsp" role="dialog" style="z-index: 1151 !important;" >
			<div class="modal-dialog" style="width: 845px !important;">
				<div class="modal-content">
					<div class="modal-header">
						<button type="button" class="close" data-dismiss="modal" style="color:white;">&times;</button>
						<h4 class="modal-title" style="color:white;">Pacientes</h4>
					</div>
					<!-- START MODAL BODY-->
					<div class="modal-body">
						<!--<label class="control-label" id="mensajes"></label>-->
						<div class="form-group">
							<label for="grupoDiagnosticoNSP"  class="control-label col-md-2"> Motivo </label>
							<div class="col-md-8">
								<select class="form-control" id="grupoDiagnosticoNSP" name="grupoDiagnosticoNSP" required="" disabled="">
								</select>
							</div>
						</div>
						<br>
						<div> &nbsp;</div>
						<div class="form-group">
							<label for="ObservacionNsp"  class="control-label col-md-2"> Observación: (*) </label>
							<div class="col-md-8">
								<textarea class="form-control textareaResize" id="ObservacionNsp" name="diagnostico" rows="3" cols="3" maxlength="700" disabled=""></textarea>
							</div>
						</div>
					</div>
					<!-- END MODAL BODY-->
					<div class="modal-footer">
						<div> &nbsp;</div>
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
	</body>
</html>