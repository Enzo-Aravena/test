<?php include_once("../../../lib/seguridad.php");?>
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />	
  <meta http-equiv="Expires" content="0">
  <meta http-equiv="cache-control" content="no-cache"/>
  <meta http-equiv="Last-Modified" content="0">
  <meta http-equiv="Cache-Control" content="no-cache, mustrevalidate">
  <meta http-equiv="Pragma" content="no-cache">
	<link href="css/style.css" media="all" rel="stylesheet" type="text/css" />
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
	<script src="../controlador/cliente/atencionController.js"></script>
	<script src="js/navAtencion.js"></script>
	<meta content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" name="viewport">	
</head>
	<body>
		<div class="row">
			<div class="col-md-12">
				<div class="widget-container">
					<div class="widget-content padded">
						<!-- INICIO DATOS PACIENTE -->
						<div class="form-horizontal">
							<div class="col-md-3">
								<div class="form-group">
									<label for="rutPaci" class="control-label col-md-4"> Rut Paciente </label>
									<div class="col-md-7">
										<input class="form-control" id="rutPaci" name="rutPaci" type="text" disabled="">
									</div>
								</div>

								<div class="form-group">
									<label for="edadPac" class="control-label col-md-4"> Edad </label>
									<div class="col-md-7">
										<input class="form-control" id="edadPac" name="edadPac" type="text" disabled="">
									</div>
								</div>

							</div>
							<div class="col-md-3">
									<div class="form-group">
										<label for="nombrePaci"  class="control-label col-md-4"> Nombre Paciente</label>
										<div class="col-md-7">
											<input class="form-control" id="nombrePaci" name="nombrePaci" type="text" disabled="">
										</div>
									</div>

								<div class="form-group">
									<label for="prevision"  class="control-label col-md-4"> Prevision </label>
									<div class="col-md-7">
										<select class="form-control" id="prevision" name="prevision" disabled="">
											<option value="FONASA">FONASA</option>
											<option value="ISAPRE">ISAPRE</option>
											<option value="FUERZAS ARMADAS">FUERZAS ARMADAS</option>
											<option value="SIN PREVISION">SIN PREVISION</option>
											<option value="PRAIS">PRAIS</option>											
										</select>
									</div>
								</div>
							</div>

							<div class="col-md-3">
								<div class="form-group">
									<label for="sexo"  class="control-label col-md-4"> Sexo </label>
									<div class="col-md-7">
										<select class="form-control" id="sexo" name="sexo" disabled="">
											<option value="Femenino">Femenino</option>
											<option value="Masculino">Masculino</option>												
										</select>
									</div>
								</div>

								<div class="form-group">
									<label for="centro"  class="control-label col-md-4"> Centro de atención </label>
									<div class="col-md-7">
										<select class="form-control" id="centro" name="centro" disabled="">
											<option value="0">Seleccione Centro atencion</option>
											<option value="SAR Carol Urzua">SAR Carol Urzua</option>
											<option value="Carol Urzua">Carol Urzua</option>
											<option value="Sapu San Luis">Sapu San Luis</option>
											<option value="San Luis">San Luis</option>
											<option value="Sapu La Faena">Sapu La Faena</option>
											<option value="La Faena">La Faena</option>
											<option value="Sapu Lo Hermida">Sapu Lo Hermida</option>
											<option value="Lo Hermida">Lo Hermida</option>
											<option value="Padre G.W">Padre G.W</option>
											<option value="Cardenal S.H">Cardenal S.H</option>
										</select>
									</div>
								</div>

							</div>

							<div class="col-md-3">
								<div class="form-group">
									<label for="fnac"  class="control-label col-md-4"> Fecha Nacimiento </label>
									<div class="col-md-7">
										<input class="form-control" id="fnac" name="fnac" type="text" disabled="">
									</div>
								</div>

								<div class="form-group">
									<label for="fechIngreso"  class="control-label col-md-4"> Fecha Atencion</label>
									<div class="col-md-7">
										<input class="form-control" id="fechIngreso" name="fechIngreso" type="text" disabled="">
									</div>
								</div>
							</div>
						</div>
						<!-- FIN DATOS PACIENTE -->
						<br>
						<!-- cuerpo de la antencion-->

						<div class="form-horizontal"> &nbsp;</div>
						<div class="form-horizontal">
							<div class="form-group">
								<div class="col-md-6">
									<label><h4><b> Atención Médica </b></h4></label>
								</div>
								<div class="col-md-6">
									<button type="button" class="btn btn-danger" style="background: #900;" id="historialTriage"> Ver Historial Triage </button>
								</div>
								<br>
							</div>

							<div class="form-group">
								<div class="col-md-3">
									<label for="Alcoholemia"  class="control-label col-md-2"> &nbsp; </label>
									<label class="checkbox-inline"><input type="checkbox" id="Alcoholemia" name="Alcoholemia" ><span> Alcoholemia </span></label>
								</div>
								<div class="col-md-3">
									&nbsp;
								</div>
								<div class="col-md-3">
									
								</div>
							</div>

							<div class="form-group">
								<div class="col-md-3">
									<label for="nFrasco"  class="control-label col-md-3"> Nº Frasco </label>
									<div class="col-md-7">
										<input class="form-control" id="nFrasco" name="nFrasco" type="text" >
									</div>
								</div>
								<div class="col-md-6">
									<label class="control-label col-md-2" for="Anamnesis"> Anamnesis </label>
									<div class="col-md-6">
										<textarea class="form-control textareaResize" id="Anamnesis" name="Anamnesis" rows="3" cols="3"></textarea>
									</div>
								</div>
							</div>
						</div>

						<div class="form-horizontal"> &nbsp;</div>

						<div class="form-horizontal">
							<div class="form-group">
								<label class="control-label col-md-2"><h4><b> CONSTATACION DE LESIONES </b></h4></label>
								<br>
							</div>

							<div class="form-group">
								<div class="col-md-6">
									<div class="form-group">
										<label for="pronMedicoLegal"  class="control-label col-md-3"> Pronóstico Medico - Legal </label>
										<div class="col-md-3">
											<select class="form-control" id="pronMedicoLegal" name="pronMedicoLegal">
												<option value="Leve">Leve</option>
												<option value="MenosGrave">Menos Grave</option>
												<option value="Grave">Grave</option>
												<option value="Fatal">Fatal</option>											
											</select>
										</div>
									</div>									
								</div>
								<div class="col-md-6">
									&nbsp;
								</div>
								<br>
							</div>
						</div>

					</div>

					<div class="form-horizontal"> &nbsp;</div>
					<div class="form-horizontal">
						<div class="form-group">
							<label class="control-label col-md-2" style="margin-left: -9em;"><h4><b> EXAMEN FISICO </b></h4></label>
						</div>

						<div class="form-group">
							<label class="control-label col-md-2"> Cabeza </label>
							<div class="col-md-7">
								<label class="radio-inline Mostrar"><input checked="" name="cabeza" type="radio" value="SI"><span> SI</span></label>
								<label class="radio-inline Mostrar"><input name="cabeza" type="radio" value="NO"><span> NO </span></label>
								<label><input style="width: 19em;" class="form-control" id="detCabeza" name="detalleCabeza" type="text"></label>
							</div>
						</div>
						<div class="form-group">
							<label class="control-label col-md-2"> Torax </label>
							<div class="col-md-7">
								<label class="radio-inline Mostrar"><input checked="" name="torax" type="radio" value="SI"><span> SI</span></label>
								<label class="radio-inline Mostrar"><input name="torax" type="radio" value="NO"><span> NO </span></label>
								<label><input style="width: 19em;" class="form-control" id="detTorax" name="detTorax" type="text"></label>
							</div>
						</div>
						<div class="form-group">
							<label class="control-label col-md-2"> Abdomen </label>
							<div class="col-md-7">
								<label class="radio-inline Mostrar"><input checked="" name="abdomen" type="radio" value="SI"><span> SI</span></label>
								<label class="radio-inline Mostrar"><input name="abdomen" type="radio" value="NO"><span> NO </span></label>
								<label><input style="width: 19em;" class="form-control" id="detAbdomen" name="detAbdomen" type="text"></label>
							</div>
						</div>
						<div class="form-group">
							<label class="control-label col-md-2"> Pelvis </label>
							<div class="col-md-7">
								<label class="radio-inline Mostrar"><input checked="" name="pelvis" type="radio" value="SI"><span> SI</span></label>
								<label class="radio-inline Mostrar"><input name="pelvis" type="radio" value="NO"><span> NO </span></label>
								<label><input style="width: 19em;" class="form-control" id="detPelvis" name="detPelvis" type="text"></label>
							</div>
						</div>
						<div class="form-group">
							<label class="control-label col-md-2"> Extremidades Superiores </label>
							<div class="col-md-7">
								<label class="radio-inline Mostrar"><input checked="" name="extSuperiores" type="radio" value="SI"><span> SI</span></label>
								<label class="radio-inline Mostrar"><input name="extSuperiores" type="radio" value="NO"><span> NO </span></label>
								<label><input style="width: 19em;" class="form-control" id="detExtSup" name="detExtSup" type="text"></label>
							</div>
						</div>
						<div class="form-group">
							<label class="control-label col-md-2"> Extremidades Inferiores </label>
							<div class="col-md-7">
								<label class="radio-inline Mostrar"><input checked="" name="extInferiores" type="radio" value="SI"><span> SI</span></label>
								<label class="radio-inline Mostrar"><input name="extInferiores" type="radio" value="NO"><span> NO </span></label>
								<label><input style="width: 19em;" class="form-control" id="detExtInf" name="detExtInf" type="text"></label>
							</div>
						</div>
						<div class="form-group">
							<label class="control-label col-md-2"> Examen Neurológico </label>
							<div class="col-md-7">
								<label class="radio-inline Mostrar"><input checked="" name="exNeurologico" type="radio" value="SI"><span> SI</span></label>
								<label class="radio-inline Mostrar"><input name="exNeurologico" type="radio" value="NO"><span> NO </span></label>
								<label><input style="width: 19em;" class="form-control" id="detExamNeuro" name="detExamNeuro" type="text"></label>
							</div>
						</div>
					</div>

					<div class="form-horizontal"> &nbsp;</div>
					<div class="form-horizontal">
						<div class="form-group">
							<div class="col-md-1"></div>
							<div class="col-md-6">
								<label for="tratamiento"> TRATAMIENTO (para administrar en SAPU) </label>
								<textarea class="form-control textareaResize" id="tratamiento" name="tratamiento" rows="3" cols="3"></textarea>
							</div>
							<div class="col-md-1">
								<button type="button" class="btn btn-danger" style="background: #900;" id="ingresarTto"> Ingresar Tratamiento </button>
							</div>
						</div>

						<div class="form-group">
							<div class="col-md-1"></div>
							<div class="col-md-7">
								<label for="evolucionYObs"> Evolucion y Observaciones </label>
								<textarea class="form-control textareaResize" id="evolucionYObs" name="evolucionYObs" rows="3" cols="3"></textarea>
							</div>
						</div>

						<div class="form-group">
							<div class="col-md-1"></div>
							<div class="col-md-7">
								<label for="diagnostico"> Diagnostico </label>
								<textarea class="form-control textareaResize" id="diagnostico" name="diagnostico" rows="3" cols="3"></textarea>
							</div>
						</div>

						<div class="form-group">
							<div class="col-md-1"></div>
							<div class="col-md-7">
								<label for="indicaciones"> Indicaciones </label>
								<textarea class="form-control textareaResize" id="indicaciones" name="indicaciones" rows="3" cols="3"></textarea>
							</div>
						</div>						
					</div>


					<div class="form-horizontal"> &nbsp;</div>

					<div class="form-horizontal"> &nbsp;</div>
					<div class="form-horizontal">
						<div class="form-group">
							<label class="control-label col-md-2"><h4><b> SIGNOS VITALES AL ALTA </b></h4></label>
						</div>

						<div class="col-md-6">
							<div class="form-group">
								<label for="fc"  class="control-label col-md-2"> FC </label>
								<div class="col-md-7">
									<input class="form-control" id="fc" name="fc" type="text" >
								</div>
							</div>

							<div class="form-group">
								<label for="fr"  class="control-label col-md-2"> FR </label>
								<div class="col-md-7">
									<input class="form-control" id="fr" name="fr" type="text" >
								</div>
							</div>

							<div class="form-group">
								<label for="ps"  class="control-label col-md-2"> P/S </label>
								<div class="col-md-7">
									<input class="form-control" id="ps" name="ps" type="text" >
								</div>
							</div>

							<div class="form-group">
								<label for="pd"  class="control-label col-md-2"> P/D </label>
								<div class="col-md-7">
									<input class="form-control" id="pd" name="pd" type="text" >
								</div>
							</div>
						</div>
						<div class="col-md-6">
							<div class="form-group">
								<label for="tempAx"  class="control-label col-md-2"> TEMP. AX </label>
								<div class="col-md-7">
									<input class="form-control" id="tempAx" name="tempAx" type="text" >
								</div>
							</div>

							<div class="form-group">
								<label for="satO2"  class="control-label col-md-2"> SAT O2 </label>
								<div class="col-md-7">
									<input class="form-control" id="satO2" name="satO2" type="text" >
								</div>
							</div>

							<div class="form-group">
								<label for="hgt"  class="control-label col-md-2"> HGT </label>
								<div class="col-md-7">
									<input class="form-control" id="hgt" name="hgt" type="text" >
								</div>
							</div>

							<div class="form-group">
								&nbsp;
							</div>
						</div>
					</div>

					<div class="form-horizontal"> &nbsp;</div>
					<div class="form-horizontal">
						<div class="form-group">
							<label for="grupoDiagnostico"  class="control-label col-md-2"> GRUPO DIAGNOSTICO (DEIS) </label>
							<div class="col-md-4">
								<select class="form-control" id="grupoDiagnostico" name="grupoDiagnostico">
									<option value="00">00. NSP (Se retira antes de Recibir Atención Médica)</option>
									<option value="01">01. Ira Alta</option>
									<option value="02">02. Influenza</option>
									<option value="03">03. Neumonia</option>
									<option value="04">04. Bronquitis/Bronquitis Aguda</option>
									<option value="05">05. Crisis Obstructiva Bronquial (SBO)</option>
									<option value="06">06. Otra Causa Respiratoria</option>
									<option value="07">07. Infarto Agudo Miocardio</option>
									<option value="08">08. Accidente Vascular Encefálico</option>
									<option value="09">09. Crisis Hipertensiva</option>
									<option value="10">10. Arritmia Grave</option>
									<option value="11">11. Otras Causa Circulatorios</option>
									<option value="12">12. Accidentes del Transito</option>
									<option value="13">13. Otros Traumatismos</option>
									<option value="14">14. Heridas por arma blanca</option>
									<option value="15">15. Heridas por arma de fuego</option>
									<option value="16">16. Mordedura de perro</option>
									<option value="17">17. Mordedura de gato</option>
									<option value="18">18. Mordedura de roedor o animal de abasto</option>
									<option value="19">19. Exposición a Muercielago</option>
									<option value="20">20. Diarrea Aguda</option>
									<option value="21">21. Diabetes descompensada</option>
									<option value="22">22. Violencia Intrafamiliar (VIF)</option>
									<option value="23">23. Violencia Sexual</option>
									<option value="24">24. Otras Violencias (No incluidas anteriormente)</option>
									<option value="25">25. Intento de suicidio</option>
									<option value="26">26. Descompensación Psiquiátrica</option>
									<option value="27">27. Anticoncepcion de emergencia con entrega de PAE</option>
									<option value="28">28. Gastrointestinales otras</option>
									<option value="29">29. Otra Causal (No especificada)</option>
								</select>
								<label style="color: red;"> * No Olvidar Seleccionar el diagnostico del paciente</label>
							</div>

						</div>

						<div class="form-group">
							<label for="tipoAlta"  class="control-label col-md-2"> Tipo de Alta </label>
							<div class="col-md-4">
								<select class="form-control" id="tipoAlta" name="tipoAlta">
									<option value="Alta Domicilio"> Alta Domicilio </option>
									<option value="Derivación Hospitalaria"> Derivación Hospitalaria </option>
									<option value="Alta Voluntaria"> Alta Voluntaria </option>
									<option value="Fallecido"> Fallecido </option>
								</select>
							</div>
						</div>

						<div class="form-group">
							<label for="centroDerivacion"  class="control-label col-md-2"> Centro Derivación </label>
							<div class="col-md-4">
								<select class="form-control" id="centroDerivacion" name="centroDerivacion">
									<option value="HLT"> HLT </option>
									<option value="HDS"> HDS </option>
									<option value="HLCM"> HLCM </option>
									<option value="INST.HORWITZ"> INST.HORWITZ </option>
									<option value="IML"> IML </option>
									<option value="OTRO"> OTRO </option>
								</select>
							</div>
						</div>

						<div class="form-group">
							<label for="CategorizacionFinal"  class="control-label col-md-2"> Categorizacion Final </label>
							<div class="col-md-4">
								<select class="form-control" id="CategorizacionFinal" name="CategorizacionFinal">
									<option value="C1"> C1 </option>
									<option value="C2"> C2 </option>
									<option value="C3"> C3 </option>
									<option value="C4"> C4 </option>
									<option value="C5"> C5 </option>
								</select>
							</div>
						</div>
					</div>

					<div class="form-horizontal"> &nbsp;</div>
						<!-- FIN DATOS TRIAGE -->
						<div class="form-horizontal">
							<div class="col-md-9"></div>
							<div class="col-md-3">
								<button type="button" class="btn btn-danger" style="background: #900;" id="ingresarAtencion"> Guardar</button>
								<button type="button" class="btn btn-danger" style="background: #900;" id="ingresarNsp"> Ingresar NSP</button>
							</div>
						</div>



					<div class="modal fade" id="historialTriagePaciente" role="dialog" >
						<div class="modal-dialog" style="width: 845px !important;">
							<div class="modal-content">
								<div class="modal-header" style="background: #900;">
									<button type="button" class="close" data-dismiss="modal" style="color:white;">&times;</button>
									<h4 class="modal-title" style="color:white;">Pacientes</h4>
								</div>
								<!-- START MODAL BODY      height: 39em; -->
								<div class="modal-body" id="tamañopopup">
									<div class="row">
										<div class="form-horizontal">
											<div class="form-group">
												<label><h4><b>Triage</b></h4></label>
												<br>
											</div>

											<div class="col-md-3">
												<div class="form-group">
													<label for="fc"  class="control-label col-md-4"> FC </label>
													<div class="col-md-7">
														<input class="form-control" id="fci" name="fc" type="text" disabled >
													</div>
												</div>

												<div class="form-group">
													<label for="hgt"  class="control-label col-md-4"> HGT </label>
													<div class="col-md-7">
														<input class="form-control" id="hgti" name="hgt" type="text" disabled >
													</div>
												</div>
											</div>

											<div class="col-md-3">
												<div class="form-group">
													<label for="fr"  class="control-label col-md-4"> FR </label>
													<div class="col-md-7">
														<input class="form-control" id="fri" name="fr" type="text" disabled >
													</div>
												</div>

												<div class="form-group">
													<label for="tempAx"  class="control-label col-md-4"> TEMP. AX </label>
													<div class="col-md-7">
														<input class="form-control" id="tempAxi" name="tempAx" type="text"  disabled>
													</div>
												</div>
											</div>

											<div class="col-md-3">
												<div class="form-group">
													<label for="ps"  class="control-label col-md-4"> P/S </label>
													<div class="col-md-7">
														<input class="form-control" id="psi" name="ps" type="text"  disabled>
													</div>
												</div>

												<div class="form-group">
													<label for="pd"  class="control-label col-md-4"> P/D </label>
													<div class="col-md-7">
														<input class="form-control" id="pdi" name="pd" type="text" disabled >
													</div>
												</div>
											</div>

											<div class="col-md-3">
												<div class="form-group">
													<label for="satO"  class="control-label col-md-4"> SAT O2 </label>
													<div class="col-md-7">
														<input class="form-control" id="satOi" name="satO" type="text" disabled >
													</div>
												</div>
												<div class="form-group">
													<label class="control-label col-md-4"> &nbsp; </label>
													<div class="col-md-7">
														<input class="form-control" type="hidden" >
													</div>
												</div>
											</div>
										</div>

										<div class="form-horizontal"> &nbsp;</div>

										<div class="form-horizontal">
											<div class="form-group">
												<label><h4><b> Antecedente Mórbidos </b></h4></label>
												<br>
											</div>

											<div class="form-group">
												<div class="col-md-12">
												<label class="checkbox-inline"><input disabled="" type="checkbox" id="HTAi" name="HTAi" ><span> HTA </span></label>
												<label class="checkbox-inline"><input disabled="" type="checkbox" id="DM2i" name="DM2i" ><span> DM2 </span></label>
												<label class="checkbox-inline"><input disabled="" type="checkbox" id="EPOCi" name="EPOCi" ><span> EPOC </span></label>
												<label class="checkbox-inline"><input disabled="" type="checkbox" id="ASMAi" name="ASMAi" ><span> ASMA </span></label>
												<label class="checkbox-inline"><input disabled="" type="checkbox" id="IRCi" name="IRCi" ><span> IRC </span></label>
												<label class="checkbox-inline"><input disabled="" type="checkbox" id="DHCi" name="DHCi" ><span> DHC </span></label>
												<label class="checkbox-inline"><input disabled="" type="checkbox" id="OTRASi" name="OTRASi" ><span> OTRAS EC </span></label>
												<label><input class="form-control" disabled id="otrosEcDescripi" name="otrosEcDescripi" type="text" style="width: 10em;"></label>
												
												</div>
											</div>
										</div>
										<div class="form-horizontal"> &nbsp;</div>

										<div class="form-horizontal">
											<div class="form-group">
												<label class="control-label col-md-1" for="alergiasi"> Alergias </label>
												<div class="col-md-10">
													<textarea class="form-control textareaResize" id="alergiasi" disabled="" name="alergiasi" rows="3" cols="3"></textarea>
												</div>
											</div>
										</div>
										<div class="form-horizontal"> &nbsp;</div>

										<div class="form-horizontal">
											<div class="form-group">
												<label class="control-label col-md-1">Prioridad</label>
												<div class="col-md-10">
													<label class="radio-inline Mostrar"><input checked="" name="categorizacioni" id="C1" type="radio" value="C1" disabled=""><span> C 1</span></label>
													<label class="radio-inline Mostrar"><input name="categorizacioni" id="C2" type="radio" value="C2" disabled=""><span> C 2 </span></label>
													<label class="radio-inline Mostrar"><input name="categorizacioni" id="C3" type="radio" value="C3" disabled=""><span> C 3</span></label>
													<label class="radio-inline Mostrar"><input name="categorizacioni" id="C4" type="radio" value="C4" disabled=""><span> C 4 </span></label>
													<label class="radio-inline Mostrar"><input name="categorizacioni" id="C5" type="radio" value="C5" disabled=""><span> C 5 </span></label>
												</div>
											</div>
										</div>
										<!-- FIN DATOS TRIAGE -->					
									</div>
								</div>
								<div class="modal-footer">
									<div class="form-horizontal">
										<div class="col-md-9"></div>
										<div class="col-md-3">
											<button type="button" style="background: #900;" class="btn btn-default" data-dismiss="modal">Cerrar</button>
										</div>
									</div>
								</div>

							</div>
						</div>
					</div>



					<div class="modal fade" id="ingresarTratamientoPopUp" role="dialog" >
						<div class="modal-dialog" style="width: 845px !important;">
							<div class="modal-content">
								<div class="modal-header" style="background: #900;">
									<button type="button" class="close" data-dismiss="modal" style="color:white;">&times;</button>
									<h4 class="modal-title" style="color:white;">Pacientes</h4>
								</div>
								<!-- START MODAL BODY      height: 39em; -->
								<div class="modal-body" id="tamañopopup">
									<div class="row">
										
										
									</div>
								</div>
							</div>
						</div>
					</div>

					<div class="modal fade" id="ingresarNspPaciente" role="dialog" >
						<div class="modal-dialog" style="width: 845px !important;">
							<div class="modal-content">
								<div class="modal-header" style="background: #900;">
									<button type="button" class="close" data-dismiss="modal" style="color:white;">&times;</button>
									<h4 class="modal-title" style="color:white;">Pacientes</h4>
								</div>
								<!-- START MODAL BODY      height: 39em; -->
								<div class="modal-body" id="tamañopopup">
									<div class="row">
										<div class="form-horizontal">
											<div class="form-group">
												<label for="grupoDiagnosticoNSP"  class="control-label col-md-4"> GRUPO DIAGNOSTICO (DEIS) </label>
												<div class="col-md-6">
													<select class="form-control" id="grupoDiagnosticoNSP" name="grupoDiagnosticoNSP">
														<option value="00">00. NSP (Se retira antes de Recibir Atención Médica)</option>
													</select>
													<label style="color: red;"> * No Olvidar Seleccionar el diagnostico del paciente</label>
												</div>
											</div>

											<div class="form-group">
												<label for="ObservacionNsp"  class="control-label col-md-4"> Observación </label>
												<div class="col-md-6">
													<textarea class="form-control textareaResize" id="ObservacionNsp" name="diagnostico" rows="3" cols="3"></textarea>
												</div>
											</div>											
										</div>
									</div>
								</div>

								<div class="modal-footer">
									<div class="form-horizontal">
										<div class="col-md-8"></div>
										<div class="col-md-4">
											<button type="button" style="background: #900;" class="btn btn-default" id="ingresarNspPac">Registrar NSP</button>
											<button type="button" style="background: #900;" class="btn btn-default" data-dismiss="modal">Cancelar</button>
										</div>
									</div>
								</div>

							</div>
						</div>
					</div>

					<!-- INICIO MODAL DE VALIDACION -->
					<div class="modal fade" id="myModal" role="dialog" >
						<div class="modal-dialog" style="width: 845px !important;">
							<div class="modal-content">
								<div class="modal-header" style="background: #900;">
									<button type="button" class="close" data-dismiss="modal" style="color:white;">&times;</button>
									<h4 class="modal-title" style="color:white;">Pacientes</h4>
								</div>
								<!-- START MODAL BODY-->
								<div class="modal-body" style="text-align: center;">
									<label class="control-label" id="mensaje"></label>
								</div>
								<!-- END MODAL BODY-->
								<div class="modal-footer">
									<div class="form-horizontal">
										<div class="col-md-9"></div>
										<div class="col-md-3">
											<button type="button" style="background: #900;" class="btn btn-default" data-dismiss="modal">Aceptar</button>
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