<?php include_once("../../../lib/seguridad.php"); ?>
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />	
	<meta http-equiv="cache-control" content="no-cache"/>
	<meta http-equiv="Expires" content="0">
	<meta http-equiv="Last-Modified" content="0">
	<meta http-equiv="Cache-Control" content="no-cache, mustrevalidate">
	<meta http-equiv="Pragma" content="no-cache">
	<link href="../../../lib/nuevoCDN/jquery-ui-1.12.1.custom/jquery-ui.css" rel="stylesheet" />
	<script src="../../../lib/nuevoCDN/jquery-1.12.4.js"></script>
	<script src="../../../lib/nuevoCDN/jquery-ui.js"></script>
	<link href="../../../lib/css/bootstrap.min.css" media="all" rel="stylesheet" type="text/css" />
	<link href="../../../lib/css/font-awesome.min.css" media="all" rel="stylesheet" type="text/css" />
	<link href="../../../lib/css/se7en-font.css" media="all" rel="stylesheet" type="text/css" />  
	<link href="../../../lib/css/style.css" media="all" rel="stylesheet" type="text/css" />
	<link href="css/estilos.css" media="all" rel="stylesheet" type="text/css" />
	<link href="css/atne.css" media="all" rel="stylesheet" type="text/css" />
	<script src='../../../lib/jquery-3.2.1.min.js'></script>
	<?php include_once("../../../lib/components.php");?>
	<script src='../../../lib/jquery/jquery.tablesorter.min.js'></script> 
	<script src='../../../lib/jquery/jquery.tablesorter.widgets.min.js'></script> 
	<script src='../../../lib/jquery/jquery.tablesorter.widgets.js'></script> 
	<script src="../controlador/cliente/triageController.js?id=99"></script>
	<script src="js/navTriage.js?id=98"></script>
	<meta content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" name="viewport">
	<script type="text/javascript">
		function deshabilitaRetroceso(){
		    window.location.hash="no-back-button";
		    window.location.hash="Again-No-back-button" //chrome
		    window.onhashchange=function(){window.location.hash="no-back-button";}
		}
	</script>
</head>
	<body onload="deshabilitaRetroceso()">
		<div class="row">
			<div class="col-md-12">
				<div class="widget-container">
					<div class="widget-content padded">
						<!-- INICIO DATOS PACIENTE -->
						<div class="form-horizontal">
							<input id="conId" name="conId" type="hidden" >
							<input id="tabContent" name="tabContent" type="hidden" >
							<input id="motivo" name="motivo" type="hidden" disabled="">
							<input id="fechaYhoraIngresoSistema" name="fechaYhoraIngresoSistema" type="hidden" >
							<table class="table table-bordered">
								<tr>
									<td >
										<label for="nombrePaci"> Nombre Paciente: </label>
										<span id="nombrePaci" name="nombrePaci"></span>
										<span class="position-relative" style="display: inline-block;position: relative;">
											<div id="mostrarMas" class="more d-flex justify-content-center align-items-center p-2" data-toggle="tooltip" data-placement="bottom" title="Click para ver mas">
												<span class="fa fa-fw fa-info " ></span>
											</div>
											<div class="position-absolute d-none recuadro" id="recuadroData" style="padding: 10px;">
												<br>
												<div class="form-horizontal">
													<div class="form-group">
														<label for="rutPaci"> Rut Paciente: </label>
														<span id="rutPaci"></span>
													</div>
													<div class="form-group">
														<label for="fnac"> Fecha Nacimiento: </label>
														<span id="fnac"></span>
													</div>
													<div class="form-group">
														<label for="direccion"> Dirección: </label>
														<span id="direccion"></span>
													</div>
													<div class="form-group">
														<label for="telefono"> Teléfono: </label>
														<span id="telefono"></span>
													</div>
													<div class="form-group">
														<label for="correo"> Correo: </label>
														<span id="correo"></span>
													</div>
												</div>
											</div>
										</span>
									</td>
									<td>
										<label for="sexo"> Sexo: </label>
										<span id="sexo"></span>
									</td>
									<td>
										<label for="edadPac"> Edad: </label>
										<input class="campoTexto" id="fnac" name="fnac" type="hidden" disabled="">
										<span id="edadPac"></span>
									</td>
								</tr>
								<tr>
									<td>
										<label for="fechIngreso"> Hora de Admisión: </label>
										<span id="fechIngreso"></span>
									</td>
									<td>
										<label for="tipoConsulta"> Tipo de Consulta: </label>
										<span id="tipoConsulta"></span>
									</td>
									<td>
										<label  for="motivoConsulta"> Motivo de Consulta: </label>
										<span id="motivoConsulta"></span>
									</td>
								</tr>
							</table>
						</div>
						<br>
						<!-- FIN DATOS PACIENTE -->

						<!-- INICIO DATOS TRIAGE -->
						<div class="form-horizontal" style="margin-top: 6px;background: #e6e6e6;border: 2px solid;">
							<label><b>Triage Paciente</b></label>
							<table class="table table-bordered" style="width: 60%;">
								<tr>
									<td style="border: none">
										<label> F.C : (*) </label>
										<input style="width: 3em;" id="fc" name="fc" type="text" maxlength="3" >
									</td>
									<td style="border: none">
										<label for="fr">F.R: (*) </label>
										<input style="width: 3em;" id="fr" name="fr" type="text" maxlength="3">
									</td>
									<td style="border: none">
										<label for="tempAx">Tº AX: (*) </label>
										<input style="width: 3em;" id="tempAx" name="tempAx" type="text" maxlength="4">
									</td>
									<td style="border: none">
										<label for="satO">SAT O2: (*)</label>
										<input style="width: 3em;" id="satO" name="satO" type="text" maxlength="3">
									</td>
									<td style="border: none">
										<label for="ps"> P.A : </label>
										<input style="width: 3em;" id="ps" name="ps" type="text" maxlength="3"> /
										<input style="width: 3em;" id="pd" name="pd" type="text" maxlength="3" >
									</td>
								</tr>
								<tr>
									<td style="border: none">
										<label for="hgt"> HGT: </label>
										<input style="width: 3em;" id="hgt" name="hgt" type="text" maxlength="4">
									</td>
									<td style="border: none">
										<label for="eEva"> E. EVA : </label>
										<input style="width: 3em;" id="eEva" name="eEva" type="text" maxlength="2">
									</td>
									<td style="border: none">
										<label> E GLASGOW: (*) </label>
										<input style="width: 3em;" id="eglasgow" name="eglasgow"  type="text" maxlength="2" >
									</td>
									<td style="border: none">
										<label> PESO : </label>
										<input style="width: 4em;" id="peso" name="peso"  type="text" maxlength="5" >
									</td>
								</tr>
							</table>
							<br>
						</div>
						<!-- FIN DATOS TRIAGE -->
						<br>
						<!-- INICIO ANTECEDENTES MORBIDOS -->
						<div class="form-horizontal" style="margin-top: 6px;background: #e6e6e6;border: 2px solid;">
							<label><b> Antecedente Mórbidos </b></label>
							<table class="table table-bordered">
								<tr>
									<td style="border: none">
										<div class="col-md-9">
											<label class="checkbox-inline"><input type="checkbox" id="HTA" name="HTA" ><span> HTA </span></label>
											<label class="checkbox-inline"><input type="checkbox" id="DM2" name="DM2" ><span> DM2 </span></label>
											<label class="checkbox-inline"><input type="checkbox" id="EPOC" name="EPOC" ><span> EPOC </span></label>
											<label class="checkbox-inline"><input type="checkbox" id="ASMA" name="ASMA" ><span> ASMA </span></label>
											<label class="checkbox-inline"><input type="checkbox" id="IRC" name="IRC" ><span> IRC </span></label>
											<label class="checkbox-inline"><input type="checkbox" id="DHC" name="DHC" ><span> DHC </span></label>
											<label class="checkbox-inline"><input type="checkbox" id="OTRAS" name="OTRAS" ><span> OTRAS EC </span></label>
											<label><input id="otrosEcDescrip" placeholder="Describa.." name="otrosEcDescrip" maxlength="30" type="text"></label>
										</div>
									</td>
								</tr>
								<tr>
									<td style="border: none">
										<label class="control-label col-md-2 " style="width: 7em;" for="alergias"> Alergias:(*) </label>
										<div class="col-md-6">
											<textarea class="form-control textareaResize" maxlength="150" id="alergias" name="alergias" rows="3" cols="3"></textarea>
											<p  style="margin-left: 90%;" id="charNum">0/150</p>
										</div>
									</td>									
								</tr>
								<tr>
									<td style="border: none">
										<label class="control-label col-md-2" style="width: 10em;"> Categorización: (*)</label>
										<div class="col-md-10">
											<label class="radio-inline Mostrar"><input name="categorizacion" type="radio" value="C1"><span> C 1</span></label>
											<label class="radio-inline Mostrar"><input name="categorizacion" type="radio" value="C2"><span> C 2 </span></label>
											<label class="radio-inline Mostrar"><input name="categorizacion" type="radio" value="C3"><span> C 3</span></label>
											<label class="radio-inline Mostrar"><input name="categorizacion" type="radio" value="C4"><span> C 4 </span></label>
											<label class="radio-inline Mostrar"><input name="categorizacion" type="radio" value="C5"><span> C 5 </span></label>
										</div>
									</td>
								</tr>
								<tr>
									<td style="border: none">
									<br>
										<div class="col-md-7 categorizacion">
											<label style="color: black;">Leyenda Categorización : </label>
											<label><img src="../../../lib/images/icon.png" style="background-color: #FF0033;cursor: pointer;"><span>C1</span></label><b style="color: black;">&nbsp; URGENCIA &nbsp;</b>
											<label><img src="../../../lib/images/icon.png" style="background-color: #FF9933;cursor: pointer;"><span>C2</span></label><b style="color: black;">&nbsp; URGENCIA &nbsp;</b>
											<label><img src="../../../lib/images/icon.png" style="background-color: #FFFF00;cursor: pointer;"><span>C3</span></label><b style="color: black;">&nbsp; URGENCIA  &nbsp;</b>
											<label><img src="../../../lib/images/icon.png" style="background-color: #00CC33;cursor: pointer;"><span>C4</span></label><b style="color: black;">&nbsp; URGENCIA LEVE &nbsp;</b>
											<label><img src="../../../lib/images/icon.png" style="background-color: #0066FF;cursor: pointer;"><span>C5</span></label><b style="color: black;">&nbsp; URGENCIA LEVE &nbsp;</b>
										</div>

									</td>
								</tr>
								<tr><td style="border: none">&nbsp;</td></tr>
								<tr>
									<td style="border: none">
										<label><input id="horaCat" name="horaCat" type="hidden" disabled></label>
									</td>
								</tr>
							</table>
							<br>
						</div>
						<!-- FIN ANTECEDENTES MORBIDOS -->
						<br>
						<div class="form-horizontal">
							<div class="col-md-6">
								<button type="button" class="btn btn-danger" id="volver"> Volver</button>
								<!-- <button type="button" class="btn btn-danger" id="ingresarNsp"> Ingresar NSP</button>-->
								<button type="button" class="btn btn-danger" id="ingresarNsp"> Cancelar Atención </button>
							</div>
							<div class="col-md-2">
								<button type="button" class="btn btn-danger" id="ingresarTriage"> Ingresar Triage</button>								
							</div>
						</div>
					</div>

					<!-- INICIO POPUP NSP PACIENTE ANTIGUO
						<div class="modal fade" id="ingresarNspPaciente"  data-backdrop="static" data-keyboard="false" role="dialog" >
							<div class="modal-dialog" style="width: 845px !important;">
								<div class="modal-content">
									<div class="modal-header">
										<button type="button" class="close" data-dismiss="modal" style="color:white;">&times;</button>
										<h4 class="modal-title" style="color:white;">Pacientes</h4>
									</div>
									<div class="modal-body" id="tamañopopup">
										<div class="row">
											<div class="form-horizontal">
												<div class="form-group">
													<label for="grupoDiagnosticoNSP"  class="control-label col-md-4"> GRUPO DIAGNOSTICO (DEIS) </label>
													<div class="col-md-6">
														<select class="form-control" id="grupoDiagnosticoNSP" name="grupoDiagnosticoNSP" disabled="" required="">
															<option value="0">00. NSP (Se retira antes de Recibir Atención Médica)</option>
														</select>
														<label style="color: red;"> (*) No Olvidar Seleccionar el diagnostico del paciente</label>
													</div>
												</div>
												<div class="form-group">
													<label for="ObservacionNsp"  class="control-label col-md-4"> Observación (*) </label>
													<div class="col-md-6">
														<textarea class="form-control textareaResize " id="ObservacionNsp" name="diagnostico" rows="3" cols="3" 
														maxlength="700"></textarea><p id="numNsp">0/700</p>
													</div>
												</div>											
											</div>
										</div>
									</div>
									<div class="modal-footer">
										<div class="form-horizontal">
											<div class="col-md-8"></div>
											<div class="col-md-4">
												<button type="button" class="btn btn-default" id="ingresarNspPac">Registrar NSP</button>
												<button type="button" class="btn btn-default" data-dismiss="modal">Cancelar</button>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					FIN POPUP NSP PACIENTE  -->
										
					<!-- INICIO POPUP NSP PACIENTE  NUEVO -->
					<div class="modal fade" id="ingresarNspPaciente"  data-backdrop="static" data-keyboard="false" role="dialog" >
							<div class="modal-dialog" style="width: 845px !important;">
								<div class="modal-content">
									<div class="modal-header">
										<button type="button" class="close" data-dismiss="modal" style="color:white;">&times;</button>
										<h4 class="modal-title" style="color:white;">Pacientes</h4>
									</div>
									<div class="modal-body" id="tamañopopup">
										<div class="row">
											<div class="form-horizontal">
												<div class="form-group">
													<label for="grupoDiagnosticoNSP"  class="control-label col-md-4"> Motivo </label>
													<div class="col-md-6">
														<select class="form-control" id="grupoDiagnosticoNSP" name="grupoDiagnosticoNSP" required="">
														</select>
													</div>
												</div>
												<div class="form-group">
													<label for="ObservacionNsp"  class="control-label col-md-4"> Observación: (*) </label>
													<div class="col-md-6">
														<textarea class="form-control textareaResize" id="ObservacionNsp" name="diagnostico" rows="3" cols="3" 
														maxlength="700"></textarea><p id="numNsp">0/700</p>
													</div>
												</div>											
											</div>
										</div>
									</div>
									<div class="modal-footer">
										<div class="form-horizontal">
											<div class="col-md-8"></div>
											<div class="col-md-4">
												<button type="button" class="btn btn-default" id="ingresarNspPac">Guardar Registro</button>
												<button type="button" class="btn btn-default" data-dismiss="modal">Cancelar</button>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					<!-- FIN POPUP NSP PACIENTE NUEVO -->



					<!-- INICIO MODAL DE VALIDACION -->
					<div class="modal fade" id="myModal"   data-backdrop="static" data-keyboard="false" role="dialog" >
						<div class="modal-dialog" style="width: 845px !important;">
							<div class="modal-content">
								<div class="modal-header">
									<button type="button" id="cerrarPop" class="close" data-dismiss="modal" style="color:white;">&times;</button>
									<h4 class="modal-title" style="color:white;">Pacientes</h4>
								</div>
								<!-- START MODAL BODY-->
								<div class="modal-body" style="text-align: center;background-color: #fef9f4 !important;">
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
											<button type="button" class="btn btn-default" id="Aceptar">Aceptar</button>
											<button type="button" class="btn btn-default" id="AceptarEgreso">Aceptar</button>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<!-- FIN MODAL DE VALIDACION -->
				</div>
			</div>
		</div>
	</body>
</html>