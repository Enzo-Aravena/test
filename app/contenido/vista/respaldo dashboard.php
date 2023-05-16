<?php include_once("../../../lib/seguridad.php");
?>
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

	<link rel="stylesheet" href="//code.jquery.com/ui/1.12.1/themes/base/jquery-ui.css">
	<script src="https://code.jquery.com/jquery-1.12.4.js"></script>
	<script src="https://code.jquery.com/ui/1.12.1/jquery-ui.js"></script>


	<link href="../../../lib/css/bootstrap.min.css" media="all" rel="stylesheet" type="text/css" />
	<link href="../../../lib/css/font-awesome.min.css" media="all" rel="stylesheet" type="text/css" />
	<link href="../../../lib/css/se7en-font.css" media="all" rel="stylesheet" type="text/css" />  
	<link href="../../../lib/css/style.css" media="all" rel="stylesheet" type="text/css" />
	<script src='../../../lib/jquery-3.2.1.min.js'></script>
	<script src='../../../lib/bootstrap-datepicker-1.9.0-dist/js/bootstrap-datepicker.min.js'></script> 
	<link rel="stylesheet" type="text/css" href="../../../lib/bootstrap-datepicker-1.9.0-dist/css/bootstrap-datepicker.min.css">
	<?php include_once("../../../lib/components.php");?>
	<script src="../../../lib/jquery/jquery.tablesorter.min.js"></script> 
	<script src="../../../lib/jquery/jquery.tablesorter.widgets.min.js"></scrpt> 
	<script src="../../../lib/jquery/jquery.tablesorter.widgets.js"></script>
	<style>
	.datepicker{z-index:1151 !important;}
	.mayuscula.{text-transform:uppercase;}

	</style>
	<script src="../controlador/cliente/contController.js"></script>
	<script src="js/navDashboard.js?id=99"></script>


	<script type="text/javascript">

		function deshabilitaRetroceso(){
		    window.location.hash="no-back-button";
		    window.location.hash="Again-No-back-button" //chrome
		    window.onhashchange=function(){window.location.hash="no-back-button";}
		}

		//VALIDACION PARA  EVITAR CERRAR LA SESION O EL NAVEGADOR
		/*onBeforeUnload="return antesdecerrar()" 
		var salir=true;
		function cambiarvalor(){ salir=false;}
		//EJECUTA EL SCRIPT PARA PREGUNTAR SI DESEA CERRAR EL NAVEGADOR
		function antesdecerrar(){
		    if (salir==true){ return 'Si cierra el navegador los cambios realizados se perderán, ¿desea Continuar? ';}
		}
*/

		function cuentaAtras() { 
			var centroTrabajo = window.parent.$("#centroTrabajo").val();
			obtenerRegistroTriadaPaciente(centroTrabajo);
			obtenerPacientesNuevosCreados(centroTrabajo);
			obtenerPacientesParaAtencion(centroTrabajo);
			obtenerMisProcedimientos(centroTrabajo);
			obtenerEgresoPaciente(centroTrabajo);
		}

		setInterval('cuentaAtras()',30000); //30000 = 30 sugodos  // 60000 = 1 minutos // 180000 =  3 minutos
	</script>
</head>
	<body onload="deshabilitaRetroceso()"><!--onBeforeUnload="return antesdecerrar()">-->
		
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
										<button type="button" class="btn btn-danger" id="volverSeleccionCentro"> Vover a Seleccion Centro </button>	
									</div>
									
								</div>
								<div class="col-md-8"><div class="widget-container fluid-height"></div></div>
								<div class="col-md-2">
									<div class="widget-container fluid-height">										
										<button type="button" class="btn btn-danger" id="registrarUrgencia"> Registrar Urgencia </button>
									</div>
								</div>
							</div>
						</div>
						<br>
						<br>

						<!-- CONTENT TAB -->
						<div class="form-horizontal" id="contentTab">
							<ul class="nav nav-tabs">
								<li class="active" ><a data-toggle="tab" href="#tab1"> <img src="../../../lib/images/registro.gif"> Registrada (<label id="cantRegistradas"></label>)</a></li>
								<li><a data-toggle="tab" href="#tab2"> <img src="../../../lib/images/triage.gif"> Triadas (<label id="CantidadTriadas"></label>)</a></li>
								<li><a data-toggle="tab" href="#tab3"> <img src="../../../lib/images/atendida.png"> Atencion (<label id="catAtendida"></label>)</a></li>
								<li><a data-toggle="tab" href="#tab4"> <img src="../../../lib/images/urgencia.png">  Observacion y Tratamiento (<label id="cantObsYTto"></label>)</a></li>
								<li><a data-toggle="tab" href="#tab5"> <img src="../../../lib/images/casita.png"> Egreso (<label id="cantEgreso"></label>)</a></li>
								<li><a data-toggle="tab" href="#tab6"> <img src="../../../lib/images/comprobar.png"> Dados de Alta (<label id="cantAlta"></label>)</a></li>
								<li><a data-toggle="tab" href="#tab7"> <img src="../../../lib/images/cancel.png"> Canceladas (<label id="cantCanceladas"></label>)</a></li>
							</ul>

							<div class="tab-content" >
								<div class="tab_content" id="tab1">
									<div>&nbsp;  </div><input type="hidden" name="tabl1" id="tabl1" value="tab1" >
									<br>
									<br>
									<table class="table table-bordered" id="myTable">
										<thead class="tableContent">
											<th style="height: 3em !important;"> N° </th>
											<th class="hidden-xs"> Fecha y Hora </th>
											<th class="hidden-xs"> RUT / DNI</th>
											<th class="hidden-xs"> Paciente </th>
											<th class="hidden-xs"> Fecha Nacimiento </th>
											<th class="hidden-xs"> Edad </th>
											<th class="hidden-xs"> Sexo </th>
											<th class="hidden-xs"> Centro </th>
											<th class="hidden-xs"> Nacionalidad </th>
											<th class="hidden-xs"> Comuna </th>
											<th class="hidden-xs"> Prevision </th>
											<th class="hidden-xs"> Firma </th>
										</thead>
										<tbody id="resultRegistradas"></tbody>
									</table>
								</div>

								<div class="tab_content" id="tab2">
									<div>&nbsp;  </div><input type="hidden" name="tabl2" id="tabl2" value="tab2">
									<br>
									<br>
									<table class="table table-bordered" id="example2">
										<thead class="tableContent">	
											<th style="height: 3em !important;"> N° </th>
											<th class="hidden-xs"> Fecha y Hora </th>
											<th class="hidden-xs"> RUT / DNI </th>
											<th> Paciente </th>
											<th class="hidden-xs"> Edad </th>
											<th class="hidden-xs"> Sexo </th>
											<th class="hidden-xs"> Motivo Consulta </th>
											<th class="hidden-xs"> Lugar Atención </th>
											<th class="hidden-xs"> Nacionalidad </th>
											<th class="hidden-xs"> Comuna </th>
											<th class="hidden-xs"> Prevision </th>
											<th class="hidden-xs"> Perfil </th>
										</thead>
										<tbody id="resultTriadas"></tbody>
									</table>
								</div>

								<div class="tab_content" id="tab3">
									<div>&nbsp;  </div><input type="hidden" name="tabl3" id="tabl3" value="tab3" >
									<br>
									<div>
							            <div class="col-md-4 categorizacion">
							            	<label>Leyenda Categorización : </label>
											<label><img src="../../../lib/images/icon.png" style="background-color: #FF0033;cursor: pointer;"><span>C1</span></label>
											<label><img src="../../../lib/images/icon.png" style="background-color: #FF9933;cursor: pointer;"><span>C2</span></label>
											<label><img src="../../../lib/images/icon.png" style="background-color: #FFFF00;cursor: pointer;"><span>C3</span></label>
											<label><img src="../../../lib/images/icon.png" style="background-color: #00CC33;cursor: pointer;"><span>C4</span></label>
											<label><img src="../../../lib/images/icon.png" style="background-color: #0066FF;cursor: pointer;"><span>C5</span></label>
										</div>
									</div>
									<br>
									<br>
									<table class="table table-bordered" id="example3">
										<thead class="tableContent">
											<th style="height: 3em !important;"> Cat. </th>
											<th class="hidden-xs"> Fecha y Hora </th>
											<th class="hidden-xs"> RUT / DNI </th>
											<th> Paciente </th>
											<th class="hidden-xs"> Edad </th>
											<th class="hidden-xs"> Sexo </th>
											<th class="hidden-xs"> Motivo Consulta </th>
											<th class="hidden-xs"> Lugar Atención </th>
											<th class="hidden-xs"> Nacionalidad </th>
											<th class="hidden-xs"> Comuna </th>
											<th class="hidden-xs"> Prevision </th>
											<th class="hidden-xs"> Perfil </th>
										</thead>
										<tbody id="resultAtendidas"></tbody>
									</table>
								</div>

								<div class="tab_content" id="tab4">
									<div>&nbsp;  </div><input type="hidden" name="tabl4" id="tabl4" value="tab4" >
									<br>
									<div>
							            <div class="col-md-4 categorizacion">
							            	<label>Leyenda Categorización : </label>
											<label><img src="../../../lib/images/icon.png" style="background-color: #FF0033;cursor: pointer;"><span>C1</span></label>
											<label><img src="../../../lib/images/icon.png" style="background-color: #FF9933;cursor: pointer;"><span>C2</span></label>
											<label><img src="../../../lib/images/icon.png" style="background-color: #FFFF00;cursor: pointer;"><span>C3</span></label>
											<label><img src="../../../lib/images/icon.png" style="background-color: #00CC33;cursor: pointer;"><span>C4</span></label>
											<label><img src="../../../lib/images/icon.png" style="background-color: #0066FF;cursor: pointer;"><span>C5</span></label>
										</div>
									</div>
									<br>
									<br>
									<table class="table table-bordered" id="example4">
										<thead class="tableContent">
											<th style="height: 3em !important;"> Cat. </th>
											<th class="hidden-xs"> Fecha y Hora </th>
											<th class="hidden-xs"> RUT / DNI </th>
											<th> Paciente </th>
											<th class="hidden-xs"> Edad </th>
											<th class="hidden-xs"> Sexo </th>
											<th class="hidden-xs"> Motivo Consulta </th>
											<th class="hidden-xs"> Lugar Atención </th>
											<th class="hidden-xs"> Nacionalidad </th>
											<th class="hidden-xs"> Comuna </th>
											<th class="hidden-xs"> Prevision </th>
											<th class="hidden-xs"> Perfil </th>
										</thead>
										<tbody id="resultadosObsYtto"></tbody>
									</table>
								</div>

								<div class="tab_content" id="tab5">
									<div>&nbsp;  </div><input type="hidden" name="tabl5" id="tabl5" value="tab5" >
									<br>
									<div>
							            <div class="col-md-4 categorizacion">
							            	<label>Leyenda Categorización : </label>
											<label><img src="../../../lib/images/icon.png" style="background-color: #FF0033;cursor: pointer;"><span>C1</span></label>
											<label><img src="../../../lib/images/icon.png" style="background-color: #FF9933;cursor: pointer;"><span>C2</span></label>
											<label><img src="../../../lib/images/icon.png" style="background-color: #FFFF00;cursor: pointer;"><span>C3</span></label>
											<label><img src="../../../lib/images/icon.png" style="background-color: #00CC33;cursor: pointer;"><span>C4</span></label>
											<label><img src="../../../lib/images/icon.png" style="background-color: #0066FF;cursor: pointer;"><span>C5</span></label>
										</div>
									</div>
									<br>
									<br>
									<table class="table table-bordered" id="example5">
										<thead class="tableContent">
											<th style="height: 3em !important;"> Cat. </th>
											<th class="hidden-xs"> Fecha y Hora </th>
											<th class="hidden-xs"> RUT / DNI </th>
											<th> Paciente </th>
											<th class="hidden-xs"> Edad </th>
											<th class="hidden-xs"> Sexo </th>
											<th class="hidden-xs"> Motivo Consulta </th>
											<th class="hidden-xs"> Lugar Atención </th>
											<th class="hidden-xs"> Nacionalidad </th>
											<th class="hidden-xs"> Comuna </th>
											<th class="hidden-xs"> Prevision </th>
											<th class="hidden-xs"> Perfil </th>
										</thead>
										<tbody id="resultAlta"></tbody>
									</table>	
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
									            <div class="input-group date datepicker" style ="z-index: unset !important;" data-date-autoclose="true" data-date-format="dd/mm/yyyy" id="fechaBusqueda">
													<input class="form-control" type="text" name="fechaBusqueda" placeholder="dd/mm/yyyy" autocomplete="off">
													<span class="input-group-addon"><i class="fa fa-calendar"></i></span>
												</div>
								            </div>
											 <button class="btn btn-primary" id="buscarPacientesDadosDeAlta" style="display: inline-block;">Buscar Paciente</button>
							          	</div>
							        </div>
									<br>
									<div>
							            <div class="col-md-4 categorizacion">
							            	<label>Leyenda Categorización : </label>
											<label><img src="../../../lib/images/icon.png" style="background-color: #FF0033;cursor: pointer;"><span>C1</span></label>
											<label><img src="../../../lib/images/icon.png" style="background-color: #FF9933;cursor: pointer;"><span>C2</span></label>
											<label><img src="../../../lib/images/icon.png" style="background-color: #FFFF00;cursor: pointer;"><span>C3</span></label>
											<label><img src="../../../lib/images/icon.png" style="background-color: #00CC33;cursor: pointer;"><span>C4</span></label>
											<label><img src="../../../lib/images/icon.png" style="background-color: #0066FF;cursor: pointer;"><span>C5</span></label>
										</div>
									</div>
									<br>
									<br>
									<table class="table table-bordered" id="example6">
										<thead class="tableContent">
											<th style="height: 3em !important;"> Cat. </th>
											<th class="hidden-xs"> Fecha Ingreso </th>
											<th class="hidden-xs"> Fecha Alta </th>
											<th class="hidden-xs"> RUT / DNI </th>
											<th> Paciente </th>
											<th class="hidden-xs"> Edad </th>
											<th class="hidden-xs"> Sexo </th>
											<th class="hidden-xs"> Motivo Consulta </th>
											<th class="hidden-xs"> Lugar Atención </th>
											<th class="hidden-xs"> Nacionalidad </th>
											<th class="hidden-xs"> Comuna </th>
											<th class="hidden-xs"> Prevision </th>
											<th class="hidden-xs"> Perfil </th>
											<th class="hidden-xs"> PDF DAU </th>
										</thead>
										<tbody id="resultDadosDeAlta"></tbody>
									</table>
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
									            <div class="input-group date datepicker" style ="z-index: unset !important;" data-date-autoclose="true" data-date-format="dd/mm/yyyy" id="fechaBusquedaCancelada">
													<input class="form-control" type="text" name="fechaBusquedaCancelada" placeholder="dd/mm/yyyy" autocomplete="off">
													<span class="input-group-addon"><i class="fa fa-calendar"></i></span>
												</div>
								            </div>
											 <button class="btn btn-primary" id="buscarPacientesCancelados" name="buscarPacientesCancelados" style="display: inline-block;">Buscar Paciente</button>
							          	</div>
							        </div>

									
									<br>
									<br>
									<table class="table table-bordered" id="example7">
										<thead class="tableContent">
											<th style="height: 3em !important;"> N° </th>
											<th class="hidden-xs"> Fecha Ingreso </th>
											<th class="hidden-xs"> Fecha Cancelada </th>
											<th class="hidden-xs"> RUT / DNI </th>
											<th> Paciente </th>
											<th class="hidden-xs"> Edad </th>
											<th class="hidden-xs"> Sexo </th>
											<th class="hidden-xs"> Motivo Consulta </th>
											<th class="hidden-xs"> Lugar Atención </th>
											<th class="hidden-xs"> Nacionalidad </th>
											<th class="hidden-xs"> Comuna </th>
											<th class="hidden-xs"> Prevision </th>
											<th class="hidden-xs"> Perfil </th>
											<th class="hidden-xs"> Observacion </th>
										</thead>
										<tbody id="resultCanceladas"></tbody>										
									</table>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>

		<div class="modal fade" id="myModal" data-backdrop="static" data-keyboard="false" role="dialog" style="z-index: 1151 !important;">
			<div class="modal-dialog" style="width: 76em !important;">
				<div class="modal-content">
					<div class="modal-header">
						<button type="button" class="close" data-dismiss="modal" style="color:white;">&times;</button>
						<h4 class="modal-title" style="color:white;">Pacientes</h4>
					</div>
					<!-- START MODAL BODY      height: 39em; -->
					<div class="modal-body" id="tamañopopup">
						<div class="row">
							<div class="form-horizontal" id= "buscarDatoPaciente">
								<div class="form-group">
										<label><h4><b>Busqueda de Personas</b></h4></label>
										<br>
								</div>

								<div class="col-md-3">
									<div class="form-group">
										<label for="primApe">Primer apellido</label>
										<input class="form-control " id="primApe" name="primApe" maxlength="20" type="text">
									</div>
								</div>
								<div class="col-md-3">
									<div class="form-group">
										<label for="segunApe">Segundo apellido</label>
										<input class="form-control " id="segunApe" name="segunApe" maxlength="20" type="text">
									</div>
								</div>
								<div class="col-md-2">
									<div class="form-group">
										<label for="nombrePaciente">Nombre</label>
										<input class="form-control " id="nombrePaciente" name="nombrePaciente" maxlength="20" type="text">
									</div>
								</div>
								<div class="col-md-2">
									<div class="form-group">
										<label for="rutPaciente">Rut</label>
										<input class="form-control " id="rutPaciente" name="rutPaciente" maxlength="10" type="text">
									</div>
								</div>
								<div class="col-md-2">
									<div class="form-group">
										<label for="dniPaciente">Pasaporte u Otro </label>
										<input class="form-control " id="dniPaciente" name="dniPaciente" maxlength="11" type="text">
									</div>
								</div>	
							</div>
							<br>

							<div class="form-horizontal" id= "MostrarDatoPaciente">
								<table class="table table-bordered">
									<thead class="tableContent">
										<th class="hidden-xs"></th>
										<th class="hidden-xs"> Apellido Paterno </th>
										<th class="hidden-xs"> Apellido Materno </th>
										<th class="hidden-xs"> Nombre </th>
										<th class="hidden-xs"> NHC </th>
										<th class="hidden-xs"> RUT </th>
										<th class="hidden-xs"> Fecha Nacimiento </th>
									</thead>
									<tbody id="mostrarResultadoBusqueda"></tbody>
								</table>			
							</div>

							<div class="form-horizontal" id="crearPaciente">
								<div class="form-group">
									<label id="Formcreacion"><h4><b>Creacion Paciente </b></h4></label>
									<br>
								</div>

								<div class="col-md-6">
									<div class="form-group">
										<label class="checkbox-inline"><input type="checkbox" id="sinDoc" name="sinDoc"><span> <strong>Sin Documento <strong> </span></label>
									</div>

									<div class="form-group">
										<label for="rutPac"> Rut Paciente (*) </label>
										<input class="form-control " id="rutPac" name="rutPac" tabindex="1" placeholder="12345678-1" type="text" maxlength="13">
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
										<label for="direccion"> Direccion </label>
										<input class="form-control " id="direccion" tabindex="5" name="direccion" type="text" maxlength="50">
									</div>
									<div class="form-group">
										<label for="telefono"> Telefono </label>
										<input class="form-control " id="telefono" tabindex="6" name="telefono" placeholder="+56998531423" type="text" maxlength="15">
									</div>

									<div class="form-group">
										<label for="correo"> Correo Electrónico </label>
										<input class="form-control" id="correo" name="correo" placeholder="prueba@gmail.com" type="text">
									</div>
								</div>

								<div class="col-md-6">
									<div class="form-group">
										<label>&nbsp;</label>
									</div>
									<div class="form-group">
										<label for="dniPaci"> Pasaporte u Otro (*) </label><!--<label for="dniPac"> DNI Paciente </label>-->
										<input class="form-control  required" id="dniPac" name="dniPac" type="text" maxlength="10">
										<label id="validateDniError" style="color: red;"></label>
										<label id="validateDniOk" style="color: green;"></label>
									</div>

									<div class="form-group">
										<label for="apePat"> Apellido Paterno</label>
										<input class="form-control " id="apePat" tabindex="2" name="apePat" type="text" maxlength="20">
									</div>

									<div class="form-group">
										<label > Fecha Nacimiento (*) </label>
										<div class="input-group date datepicker" data-date-autoclose="true" data-date-format="dd/mm/yyyy" id="fnac">
											<input class="form-control" type="text" tabindex="3" name="fnac" placeholder="dd/mm/yyyy" autocomplete="off">
												<span class="input-group-addon">
													<i class="fa fa-calendar"></i>
												</span>
										</div>
									</div>

									<div class="form-group">
								        <label> Nacionalidad </label>
										<select class="js-example-basic-single " tabindex="4" id="nacionalidad" name="nacionalidad"  data-live-search="true"></select>
									</div>

									<div class="form-group">
										<label> Comuna </label>
										<select class="js-example-basic-single-Dos " id="comuna" tabindex="5" name="comuna" data-show-subtext="true" data-live-search="true"></select>
									</div>

									<div class="form-group">
										<label for="prevision"> Prevision </label>
										<select class="form-control " tabindex="6" id="prevision" name="prevision">
										</select>
									</div>
								</div>
							</div>


							<div class="form-horizontal" id="updatePaciente">
								<div class="form-group">
									<label id="FormUpdate"><h4><b>Actualización Datos Paciente </b></h4></label>
									<br>
								</div>

								<div class="col-md-6">
									<div class="form-group">
										<label for="rutPaces"> Rut Paciente (*) </label>
										<input class="form-control " id="rutPaces" name="rutPaces" placeholder="12345678-1" type="text" maxlength="10">
									</div>

									<div class="form-group">
										<label for="nombrePaces"> Nombre Paciente</label>
										<input class="form-control " id="nombrePaces" name="nombrePaces" type="text" maxlength="20">
									</div>

									<div class="form-group">
										<label for="apeMates"> Apellido Materno</label>
										<input class="form-control " id="apeMates" name="apeMates" type="text" maxlength="20">
									</div>									

									<div class="form-group">
										<label for="sexoes"> Sexo (*) </label>
										<select class="form-control " id="sexoes" name="sexoes">											
										</select>
									</div>

									<div class="form-group">
										<label for="direcciones"> Direccion </label>
										<input class="form-control " id="direcciones" name="direcciones" type="text" maxlength="50">
									</div>
									<div class="form-group">
										<label for="telefonoes"> Telefono </label>
										<input class="form-control " id="telefonoes" name="telefonoes" placeholder="+56998531423" type="text" maxlength="15">
									</div>
									<div class="form-group">
										<label for="correoes"> Correo Electrónico </label>
										<input class="form-control " id="correoes" name="correoes" placeholder="prueba@gmail.com" type="text">
									</div>
								</div>

								<div class="col-md-6">
									<div class="form-group">
										<label for="dniPaces"> Pasaporte u Otro (*) </label><!--<label for="dniPac"> DNI Paciente </label>-->
										<input class="form-control  required" id="dniPaces" name="dniPaces" type="text" maxlength="10">
									</div>

									<div class="form-group">
										<label for="apePates"> Apellido Paterno</label>
										<input class="form-control " id="apePates" name="apePates" type="text" maxlength="20">
									</div>									

									<div class="form-group">
										<label > Fecha Nacimiento</label>
										<div class="input-group date datepicker" data-date-autoclose="true" data-date-format="dd/mm/yyyy" id="fnaces">
											<input class="form-control" type="text" name="fnaces" placeholder="dd/mm/yyyy" autocomplete="off">
												<span class="input-group-addon">
													<i class="fa fa-calendar"></i>
												</span>
										</div>
									</div>

									<div class="form-group">
								        <label> Nacionalidad </label>
										<select class="form-control" id="nacionalidadies" name="nacionalidadies"  data-live-search="true"></select>
									</div>

									<div class="form-group">
										<label> Comuna </label>
										<select class="form-control" id="comunaies" name="comunaies" data-show-subtext="true" data-live-search="true"></select>
									</div>

									<div class="form-group">
										<label for="previsiones"> Prevision </label>
										<select class="form-control " id="previsiones" name="previsiones">
										</select>
									</div>
								</div>
							</div>

							<div class="form-horizontal" id="RegistroUrgencia"> <!-- style="height:642px; overflow:auto;">-->
								<div class="form-group">
									<div class="col-md-8">
										<label><h4><b> INGRESO, DATOS DEMOGRÁFICOS Y MOTIVO DE CONSULTA </b></h4></label> <!-- Registro Urgencia Sapu / SAR -->
									</div>
									<div class="col-md-4">
									<!--	<label><h4><b>Nº DAU </b></h4></label>
										<input style="width: 5em;" id="numDau" name="numDau" type="text" disabled>-->
									</div>
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
										<label for="direccioni"> Direccion </label>
										<input class="form-control " id="direccioni" name="direccioni" type="text">
									</div>

									<div class="form-group">
										<label for="telefoni"> Telefono </label>
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
										<textarea class="form-control  textareaResize  required" maxlength="150" id="motivoConsulta" name="motivoConsulta" rows="3" cols="3"></textarea>
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
										<label for="dniPaci">Pasaporte u Otro (*) </label><!--<label for="dniPac"> DNI Paciente </label>-->
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
										<label for="previsioni"> Prevision </label>
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
							<div class="col-md-2">
								<!--<button type="button" class="btn btn-danger" id="descargaMinsalPdf"> Descargar Reporte Minsal</button>-->
							</div>
							<div class="col-md-7"></div>
							<div class="col-md-3">
								<button type="button" class="btn btn-danger" id="buscarPaciente"> Buscar</button>
								<button type="button" class="btn btn-danger" id="anadirPaciente"> Añadir</button>
								<button type="button" class="btn btn-danger" id="crearPacienteSapu"> Crear Paciente</button>
								<button type="button" class="btn btn-danger" id="modificarPacienteSapu"> Actualizar Datos</button>
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
					<div class="modal-body" style="text-align: center;">
						<label class="control-label" id="mensaje"></label>
						<div id="cargandoPdf" class="loader">
							<img style="width: 20%;" src="../../../lib/images/spinner-loader-animation.gif">
						</div>
					</div>
					<!-- END MODAL BODY-->
					<div class="modal-footer">
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

		<!-- MODAL DE VALIDACION -->
		<div class="modal fade" data-backdrop="static" data-keyboard="false" id="modalNsp" role="dialog" style="z-index: 1151 !important;" >
			<div class="modal-dialog" style="width: 845px !important;">
				<div class="modal-content">
					<div class="modal-header">
						<button type="button" class="close" data-dismiss="modal" style="color:white;">&times;</button>
						<h4 class="modal-title" style="color:white;">Pacientes</h4>
					</div>
					<!-- START MODAL BODY-->
					<div class="modal-body">
						<label class="control-label" id="mensajes"></label>
					</div>
					<!-- END MODAL BODY-->
					<div class="modal-footer">
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
		</div>
	</body>
</html>