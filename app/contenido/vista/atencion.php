<?php include_once("../../../lib/seguridad.php");?>
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />	
<meta http-equiv="cache-control" content="no-cache"/>
  <meta http-equiv="Expires" content="0">
  <meta http-equiv="Last-Modified" content="0">
  <meta http-equiv="Cache-Control" content="no-cache, mustrevalidate">
  <meta http-equiv="Pragma" content="no-cache">
	<link href="css/atne.css" media="all" rel="stylesheet" type="text/css" />
  	<link href="css/estilos.css" media="all" rel="stylesheet" type="text/css" />
	<link href="../../../lib/css/bootstrap.min.css" media="all" rel="stylesheet" type="text/css" />
	<link href="../../../lib/css/font-awesome.min.css" media="all" rel="stylesheet" type="text/css" />
	<link href="../../../lib/css/se7en-font.css" media="all" rel="stylesheet" type="text/css" />  
	<link href="../../../lib/css/style.css" media="all" rel="stylesheet" type="text/css" />
	<script src='../../../lib/jquery-3.2.1.min.js'></script>
	<?php include_once("../../../lib/components.php");?>
	<script src='../../../lib/jquery/jquery.tablesorter.min.js'></script> 
	<script src='../../../lib/jquery/jquery.tablesorter.widgets.min.js'></script> 
	<script src='../../../lib/jquery/jquery.tablesorter.widgets.js'></script> 
	<script src="../controlador/cliente/atencionController.js?id=99"></script>
	<script src="js/navAtencion.js?id=99"></script>
	<meta content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" name="viewport">
	<script type="text/javascript">
			function deshabilitaRetroceso(){
			    window.location.hash="no-back-button";
			    window.location.hash="Again-No-back-button" //chrome
			    window.onhashchange=function(){window.location.hash="no-back-button";}
			}

			//Evita que en el text area se añadan enter
			function pulsar(e) {
			  if (e.which === 13 && !e.shiftKey) {
			    e.preventDefault();
			    return false;
			  }
			}
		</script>
</head>
	<body onload="deshabilitaRetroceso()">
		<div class="row">
			<div class="col-md-12">
				<div class="widget-container">
					<div class="widget-content padded" style="margin-top: -17px;">
					<!-- INICIO DATOS PACIENTE -->
						<div class="form-horizontal">
							<input id="conId" name="conId" type="hidden" >
							<input type="hidden" name="fechaHoy" id="fechaHoy">
							<input id="horaIngresoPantalla" name="horaIngresoPantalla" type="hidden" >
							<input id="tabContent" name="tabContent" type="hidden" >
							<input id="motivo" name="motivo" type="hidden" disabled="">
							<input id="fechaYhoraIngreso" name="fechaYhoraIngreso" type="hidden" >
							<input id="fechaYhoraIngresoSistema" name="fechaYhoraIngresoSistema" type="hidden" >
							<table class="table table-bordered">
								<tr>
									<td>
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
										<input class="campoTexto " id="fnac" name="fnac" type="hidden" disabled="">
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
						<div class="form-horizontal" style="margin-top: 6px;background: #e6e6e6;display: -webkit-inline-box;border: 2px solid;width: 100%;">
							<div class="col-md-6">
								<table class="table table-bordered" style="width: 81%;">
									<tr><label><b>Triage Paciente</b></label></tr>
										<tr>
											<td colspan="5" style="border: none"><label><b> Signos Vitales </b></label>
												<label><b style="color: black;"> &nbsp; &nbsp; Hora Triage: </label>
												<input style="border: 0;background: #e6e6e6 !important;" id="horaTriage" name="horaTriage" type="text"></b>
											</td>
										</tr>
									<tr>
										<td style="border: none">
											<label> F.C : </label>
											<input style="width: 3em;" id="fc" name="fc" type="text" disabled>
										</td>
										<td style="border: none">
											<label for="fr"> F.R: </label>
											<input style="width: 3em;" id="fr" name="fr" type="text" disabled>
										</td>
										<td style="border: none">
											<label for="tempAx"> Tº AX: </label>
											<input style="width: 3em;" id="tempAx" name="tempAx" type="text"disabled >
										</td>
										<td style="border: none">
											<label for="satO"> SAT O2:</label>
											<input style="width: 3em;" id="satO" name="satO" type="text" disabled>
										</td>
										<td style="border: none">
											<label for="ps"> P.A : </label>
											<input style="width: 3em;" id="ps" name="ps" type="text" disabled> /
											<input style="width: 3em;" id="pd" name="pd" type="text" disabled>
										</td>									
									</tr>
									<tr>
										<td style="border: none">
											<label for="hgt"> HGT: </label>
											<input style="width: 3em;" id="hgt" name="hgt" type="text" disabled>
										</td>
										<td style="border: none">
											<label for="eEva"> E. EVA : </label>
											<input style="width: 3em;" id="eEva" name="eEva" type="text" disabled>
										</td>
										<td style="border: none">
											<label> E GLASGOW: </label>
											<input style="width: 3em;" id="eglasgow" name="eglasgow" type="text" disabled>
										</td>
										<td style="border: none">
											<label> PESO : </label>
											<input style="width: 4em;" id="peso" name="peso"  type="text" maxlength="5" disabled>
										</td>
									</tr>
									<tr>
										<td colspan="5" style="border: none"> &nbsp;</td>
									</tr>
								</table>
							</div>
							<div class="col-md-6">
								<table class="table table-bordered" id="antecedentesMorbidos">
									<tr><td style="border: none"><label><b> Antecedente Mórbidos </b></label></td></tr>
									<tr>
										<td style="border: none">
											<div class="col-md-12">
												<label><input type="checkbox" disabled id="HTA" name="HTA" ><span> HTA </span></label>
												<label><input type="checkbox" disabled id="DM2" name="DM2" ><span> DM2 </span></label>
												<label><input type="checkbox" disabled id="EPOC" name="EPOC" ><span> EPOC </span></label>
												<label><input type="checkbox" disabled id="ASMA" name="ASMA" ><span> ASMA </span></label>
												<label><input type="checkbox" disabled id="IRC" name="IRC" ><span> IRC </span></label>
												<label><input type="checkbox" disabled id="DHC" name="DHC" ><span> DHC </span></label>
												<label><input type="checkbox" disabled id="OTRAS" name="OTRAS" ><span> OTRAS EC </span></label>
												<label><input  id="otrosEcDescrip" disabled style="width: 9em;" name="otrosEcDescrip" type="text"></label>
											</div>
										</td>
									</tr>
									<tr>
										<td style="border: none">
											<label class="control-label col-md-2" style="width: 5em;"  for="alergias"> Alergias </label>
											<textarea class="textareaResize " style="width: 51%;" id="alergias" name="alergias" rows="3" cols="3" disabled></textarea>
										</td>									
									</tr>
									<tr>
										<td style="border: none">
											<label class="control-label col-md-2">Categorización</label>
											<div class="col-md-10">
												<label><input checked="" name="categorizacion" disabled  type="radio" id="C1" value="C1"><span> C 1</span></label>
												<label><input name="categorizacion" disabled type="radio" id="C2" value="C2"><span> C 2 </span></label>
												<label><input name="categorizacion" disabled type="radio" id="C3" value="C3"><span> C 3</span></label>
												<label><input name="categorizacion" disabled type="radio" id="C4" value="C4"><span> C 4 </span></label>
												<label><input name="categorizacion" disabled type="radio" id="C5" value="C5"><span> C 5 </span></label>
											</div>
										</td>
									</tr>
									<tr>
										<td colspan="5" style="border: none"> &nbsp;</td>
									</tr>
								</table>
							</div>	
						</div>
						<!-- FIN DATOS TRIAGE -->
						<br>
						<br><br>
						<label><h4><b> Atención Médica </b></h4></label>
						<label>&nbsp; Hora:&nbsp; &nbsp;<input id="horaAtencion" name="horaAtencion" type="text" disabled></label>
						<!-- INICIO ATENCION MEDICA -->
						<div class="form-horizontal">
							<div class="form-group">
								Requiere llenar constatación de lesiones (*)
								<label class="radio-inline requiereConst" style="margin-top: -1% !important;"><input name="requiereConstLesion" type="radio" value="1"><span> Si </span></label>
								<label class="radio-inline requiereConst" style="margin-top: -1% !important;"><input name="requiereConstLesion" type="radio" value="0" checked><span> No </span></label>
							</div>
							<br><br>
							<div class="col-md-6" id="constatacionDeLesionesUno">
								<table class="table table-bordered" style="border:1px solid black;width:100% !important;border-radius:5px;">
									<tr><td colspan="3">  Método del Diagnóstico</td></tr>
			                        <tr>
			                            <td colspan="3">
			                                <label><input type="checkbox" id="examenFisicoConst" name="examenFisicoConst"><span> Examen Físico </span></label>
											<label><input type="checkbox" id="imagenConst" name="imagenConst"><span> Imagenología </span></label>
											<label><input type="checkbox" id="exLabConst" name="exLabConst"><span> Examenes de Laboratorio</span></label>
											<label><input type="checkbox" id="otrosConst" name="otrosConst"><span> Otros </span></label>
			                            </td>
			                        </tr>
			                        <tr>
			                            <td colspan="3">  Describir brevemente origen de la lesión : </td>
			                        </tr>
			                        <tr>
			                            <td colspan="3"> 
			                            	<label for="origenLesionRelatoLesionado"> Según relato lesionado </label>
											<textarea style="width: 31em;" class="form-control textareaResize " maxlength="700" id="origenLesionRelatoLesionado" name="origenLesionRelatoLesionado" rows="2" cols="2"></textarea>
											<p id="numRelatoLesion">0/700</p>
			                            </td>
			                        </tr>
			                        <tr>
			                            <td colspan="3">
			                            	<label for="origenLesionClinica"> Según relato apreciación clínica (Ej. : Caída de altura, objeto contundente. No puede el médico certificar la intencionalidad de <br>
			                            	la caída ni referenciar entre contundentes causantes: palo, piedra, manopla, etc.) </label>
											<textarea style="width: 31em;" class="form-control textareaResize " maxlength="700" id="origenLesionClinica" name="origenLesionClinica" rows="2" cols="2"></textarea>
											<p id="numRelatoClinico">0/700</p>
			                            </td>
			                        </tr>
			                        <tr>
			                        	<td colspan="3">
			                        		Lesiones que ocasionarán al lesionado enfermedad y/o incapacidad para el trabajo por <input id="diasLesion" name="diasLesion" style="width: 3em;" maxlength="3" type="text" > días.
			                        		<br>
			                                <label style="font-size: 13px;">
			                                   Si el examinado es un niño, o una persona que no trabaja se considera el tiempo que tarde en poder realizar una actividad normal para su edad o para su condición previa al momento de ser lesionado.
			                                </label>
			                        	</td>
			                        </tr>
			                        <tr>
			                        	<td colspan="3">  Diagnóstico Médico Legal de las lesiones: 
			                        		<select id="pronMedicoLegal" name="pronMedicoLegal">
											</select>
										</td>
			                        </tr>
								</table><br><br>
							<br><br>
							</div>
							<div class="col-md-6" id="constatacionDeLesionesDos">
								<table class="table table-bordered" style="border:1px solid black;width:100% !important;border-radius:5px;">
									<tr>
			                            <td colspan="3">  Lesionado viene acompañado:</td>
			                        </tr>
			                        <tr>
			                            <td colspan="3">
											<label class="radio-inline examenFisico" style="margin-top: -1% !important;"><input id="vieneAcompanadoSi" name="vieneAcompanado" type="radio" value="1"><span> Si </span></label>
											<label class="radio-inline examenFisico" style="margin-top: -1% !important;"><input id="vieneAcompanadoNo" name="vieneAcompanado" checked="" type="radio" value="0"><span> No </span></label>
			                            </td>
			                        </tr>
			                        <tr>
			                            <td colspan="3"> Identificación persona que acompaña al lesionado: </td>
			                        </tr>
			                        <tr>
			                            <td colspan="3"> 
			                            	<label for="nombreAcompLesionado"> Nombre : &nbsp;</label>
											<input style="width: 30em;" id="nombreAcompLesionado" name="nombreAcompLesionado" type="text">
			                            </td>
			                        </tr>
			                        <tr>
			                            <td colspan="3"> 
			                            	<label for="CalidadAcompLesionado"> Calidad  </label>
											<input style="width: 30em;" id="CalidadAcompLesionado" name="CalidadAcompLesionado" type="text">
			                            </td>
			                        </tr>
									<tr><td>(Pariente, funcionario de carabineros, ambulancia, vecino, etc.)</td></tr>
								</table>
							<br><br>
							</div>
						</div>
						<div class="form-horizontal">
							<!-- CONSTATACION DE LESIONES NO  -->
							<table class="table table-bordered" >
								<tr>
									<td style="border: none">
										<label><input type="checkbox" id="Alcoholemia" name="Alcoholemia" ><span> Alcoholemia </span></label>
										<label>&nbsp; &nbsp; Nº Frasco </label>
										<input id="nFrasco" name="nFrasco" style="width: 7em;border: 1px solid #ccc !important; " maxlength="18" type="text" >
									</td>
									<td style="border: none;width: 37%;">												
									</td>
								</tr>
								<tr>
									<td style="border: none;">
										<label> Anamnesis (*) &nbsp; &nbsp;</label>
										<textarea class="textareaResize " style="width: 51%;    border: 1px solid #ccc !important; border-radius: 4px;" id="Anamnesis" name="Anamnesis" rows="3" cols="3" maxlength="900" pattern="^[0-9]+$"></textarea>
										<p style="margin-left: 7%;" id="numAnamnesis">0/900 </p>
									</td>
								</tr>
								<tr>
									<td style="border: none" colspan="1">
									</td>
								</tr>
							</table>
						</div>
						<div class="form-horizontal">
							<div class="form-group">
								<div class="col-md-6">
									<table class="table table-bordered" style="width: 95%;">
										<tbody>
											<tr>
												<td style="border: none"><label><h4><b> Examen Físico </b></h4></label></td>
											</tr>
											<tr>
												<td>
													<span style="font-weight: bold;color: blue;margin-left: 9%;"> * Importante: "En caso de efectuar un examen físico seleccione SI y describa el resultado"</span>
												</td>
											</tr>
											<tr>
												<td style="border: none"><label style="margin-left: 28em;position: static;"> Describa </label></td>
											</tr>
											<tr>
												<td style="border: none">
												<label class="control-label col-md-2"> Cabeza (*) </label>
												<label class="radio-inline examenFisico Margen" style="margin-top: -12% !important;"><input name="cabeza" type="radio" value="SI"><span>SI </span></label>
												<label class="radio-inline examenFisico Margen" style="margin-top: -12% !important;"><input checked="" name="cabeza" type="radio" value="NO"><span> NO </span></label>
												<label>
													<textarea class="textareaResize " style="width: 25em;" id="detCabeza" name="detCabeza" rows="3" cols="3" maxlength="400" onkeydown="pulsar(event)"></textarea>
													<p id="numngth">0/400</p>
												</label>

												</td>
											</tr>
											<tr>
												<td style="border: none">
													<label class="control-label col-md-2"> Tórax (*) </label>
													<label class="radio-inline examenFisico Margen" style="margin-top: -12% !important;"><input name="torax" type="radio" value="SI"><span>SI </span></label>
													<label class="radio-inline examenFisico Margen" style="margin-top: -12% !important;"><input checked="" name="torax" type="radio" value="NO"><span> NO </span></label>
													<label>
														<textarea class="textareaResize " style="width: 25em;" id="detTorax" name="detTorax" rows="3" cols="3" maxlength="400" onkeydown="pulsar(event)"></textarea>
														<p id="numdetTorax">0/400</p>
													</label>
												</td>
											</tr>
											<tr>
												<td style="border: none">
													<label class="control-label col-md-2"> Abdomen (*) </label>
													<label class="radio-inline examenFisico Margen" style="margin-top: -12% !important;"><input name="abdomen" type="radio" value="SI"><span>SI </span></label>
													<label class="radio-inline examenFisico Margen" style="margin-top: -12% !important;"><input checked="" name="abdomen" type="radio" value="NO"><span> NO </span></label>
													<label>
														<textarea class="textareaResize " style="width: 25em;" id="detAbdomen" name="detAbdomen" rows="3" cols="3" maxlength="400" onkeydown="pulsar(event)"></textarea>
														<p id="numdetAbdomen">0/400</p>
													</label>

												</td>
											</tr>
											<tr>
												<td style="border: none">
													<label class="control-label col-md-2"> Pelvis (*) </label>
													<label class="radio-inline examenFisico Margen" style="margin-top: -12% !important;"><input name="pelvis" type="radio" value="SI"><span>SI </span></label>
													<label class="radio-inline examenFisico Margen" style="margin-top: -12% !important;"><input checked="" name="pelvis" type="radio" value="NO"><span> NO </span></label>
													<label>
														<textarea class="textareaResize " style="width: 25em;" id="detPelvis" name="detPelvis" rows="3" cols="3" maxlength="400" onkeydown="pulsar(event)"></textarea>
														<p id="numdetPelvis">0/400</p>
													</label>
												</td>
											</tr>
											<tr>
												<td style="border: none">
													<label class="control-label col-md-2"> Ext. Superiores (*) </label>
													<label class="radio-inline examenFisico Margen" style="margin-top: -12% !important;"><input name="extSuperiores" type="radio" value="SI"><span>SI </span></label>
													<label class="radio-inline examenFisico Margen" style="margin-top: -12% !important;"><input checked="" name="extSuperiores" type="radio" value="NO"><span> NO</span></label>
													<label>
														<textarea class="textareaResize " style="width: 25em;" id="detExtSup" name="detExtSup" rows="3" cols="3" maxlength="400" onkeydown="pulsar(event)"></textarea>
														<p id="numdetExtSup">0/400</p>
													</label>
												</td>
											</tr>
											<tr>
												<td style="border: none">
													<label class="control-label col-md-2"> Ext. Inferiores (*) </label>
													<label class="radio-inline examenFisico Margen" style="margin-top: -12% !important;"><input name="extInferiores" type="radio" value="SI"><span>SI </span></label>
													<label class="radio-inline examenFisico Margen" style="margin-top: -12% !important;"><input checked="" name="extInferiores" type="radio" value="NO"><span> NO </span></label>
													<label>
														<textarea class="textareaResize " style="width: 25em;" id="detExtInf" name="detExtInf" rows="3" cols="3" maxlength="400" onkeydown="pulsar(event)"></textarea>
														<p id="numdetExtInf">0/400</p>
													</label>
												</td>
											</tr>
											<tr>
												<td style="border: none">
													<label class="control-label col-md-2"> Ex. Neurológico (*) </label>
													<label class="radio-inline examenFisico Margen" style="margin-top: -12% !important;"><input name="exNeurologico" type="radio" value="SI"><span>SI </span></label>
													<label class="radio-inline examenFisico Margen" style="margin-top: -12% !important;"><input checked="" name="exNeurologico" type="radio" value="NO"><span> NO </span></label>
													<label>
														<textarea class="textareaResize " style="width: 25em;" id="detExamNeuro" name="detExamNeuro" rows="3" cols="3" maxlength="400" onkeydown="pulsar(event)"></textarea>
														<p id="numdetExamNeuro">0/400</p>
													</label>
												</td>
											</tr>
										</tbody>
									</table>
								</div>
								<div class="col-md-6">
									<table class="table table-bordered">
										<tbody>
											<tr>
												<td style="border: none"> &nbsp;</td>
											</tr>
											<tr>
												<td style="border: none">
													<label for="sospDiagnostica"> Sospecha Diagnóstica (*) </label>
													<textarea style="width: 31em;" class="form-control textareaResize " maxlength="700" id="sospDiagnostica" name="sospDiagnostica" rows="2" cols="2"></textarea>
													<p id="numSospDiag">0/700</p>
												</td>
											</tr>
											<tr>
												<td style="border: none">
													<label><input type="checkbox" id="GES" name="GES" ><span> Notificación GES </span></label><br>
													<label  for="diagnosGes"> Diagnóstico GES</label>
													<select class="form-control" style="width: 20em; display: inline-block;" id="diagnosGes" name="diagnosGes">
													</select>
												</td>
											</tr>
											<tr>
												<td>
													Requiere Tratamiento (*)
													<label class="radio-inline examenFisico" style="margin-top: -1% !important;"><input name="requiereTto" type="radio" value="1"><span> Si </span></label>
													<label class="radio-inline examenFisico" style="margin-top: -1% !important;"><input name="requiereTto" type="radio" value="0"><span> No </span></label>
												</td>
											</tr>
										</tbody>
										<tbody  id="MostrarManejoYtto" style="border-top: none;">
											<tr>
												<td style="border: none">
													<label for="indicaciones"> Manejo y tratamiento de indicado en SAPU/SAR (*) </label><br>
													<div class="form-group">
														<label class="control-label col-md-1" style= "">Ind. 1</label>
														<div class="col-md-9">
															<div class="col-md-2" style="margin-right: 6%;">
																<select style="width: 9em;height: 2em;" id="ObtenerListaind1" name="ObtenerListaind1"></select>
															</div>
															<div class="col-md-5">
																<input style="width: 20em;" id="ind1" maxlength="60" name="ind1" type="text">
																<p id="numind1">0/60</p>

															</div>
														</div>
													</div>
													<div class="form-group">
														<label class="control-label col-md-1">Ind. 2</label>
														<div class="col-md-9">
														<div class="col-md-2" style="margin-right: 6%;">
																<select style="width: 9em;height: 2em;" id="ObtenerListaind2" name="ObtenerListaind2"></select>
															</div>
															<div class="col-md-5">
																<input style="width: 20em;" id="ind2" maxlength="60" name="ind2" type="text">
																<p id="numind2">0/60</p>
															</div>
														</div>
													</div>
													<div class="form-group">
														<label class="control-label col-md-1">Ind. 3</label>
														<div class="col-md-9">
															<div class="col-md-2" style="margin-right: 6%;">
																<select style="width: 9em;height: 2em;" id="ObtenerListaind3" name="ObtenerListaind3"></select>
															</div>
															<div class="col-md-5">
																<input style="width: 20em;" id="ind3" maxlength="60" name="ind3" type="text">
																<p id="numind3">0/60</p>
															</div>
														</div>
													</div>
												</td>
											</tr>
											<tr>
												<td style="border: none">
													<label style="margin-left: 6.5em;">Especifique</label>
												</td>
											</tr>
											<tr>
												<td style="border: none">
													<label><input type="checkbox" id="radiografia" name="radiografia" >
														<span> Radiografía </span>
													</label>
													<label><input style="width: 24em;" maxlength="50" id="detRadio" name="detRadio" type="text">
													</label>
												</td>
											</tr>
											<tr>
												<td style="border: none">
													<label><input type="checkbox" id="ExamenSangre" name="ExamenSangre" >
														<span> Exámenes </span>
													</label>
													<label><input style="width: 21em;" maxlength="50" id="detExSangre" name="detExSangre" type="text">
													</label>
												</td>
											</tr>
											<tr>
												<td style="border: none">
													<label><input type="checkbox" id="ecg" name="ecg" >
														<span> ECG </span>
													</label>
												</td>
											</tr>
										</tbody>
										<tbody id="MostrarPanelEgreso" style="border-top: none;">
											<tr>
												<td style="border: none"> &nbsp;</td>
											</tr>
											<tr>
												<td style="border: none">
													<label for="diagnostico"> Diagnóstico de egreso (*) </label>
													<textarea class="form-control textareaResize " maxlength="700" id="diagnostico" name="diagnostico" rows="2" cols="2"></textarea>
													<p id="numDiagnostEgreso">0/700</p>
												</td>
											</tr>
											<tr>
												<td style="border: none">
													<label for="EvolucionObsMed"> Evolución y observaciones médicas </label>
													<textarea class="form-control textareaResize " maxlength="700" id="EvolucionObsMed" name="EvolucionObsMed" rows="3" cols="3"></textarea>
													<p id="numEvoluYObs">0/700</p>
												</td>
											</tr>
										</tbody>
									</table>
								</div>
						</div>
						<div class="form-group" id="SegundoCuerpoEgreso">
								<div class="col-md-6">
									<table class="table-bordered" style="width: 55em;">
										<tr>
											<th colspan="5" style="border: none">
												<label for="EgresoInd"> Indicaciones y/o receta al egreso (*)</label>
												<textarea style="width: 94%;" class="form-control textareaResize " id="EgresoInd" maxlength="700" name="EgresoInd" rows="4" cols="3"></textarea><p id="numEgresoInd">0/700</p>
											</th> 
										</tr>
									</table>
								</div>
								<div class="col-md-6">
									<table class="table" style="width: 66%;">
										<tr>
											<td style="border: none">
												<label  for="tipoAlta"> Tipo de Alta o Egreso (*)</label>
												<select class="form-control " id="tipoAlta" name="tipoAlta">
												</select>
											</td>
										</tr>
										<tr>
											<td style="border: none" id="centroDeriv">
												<label  for="centroDerivacion"> Centro Derivación (*)</label>
												<select class="form-control" id="centroDerivacion" name="centroDerivacion">
												</select>
											</td>
										</tr>
										<tr>
											<td style="border: none" id="EspecialidadAtencion">
												<div class="form-group">
								                	<label for="especialidad">Especialidad</label>
								                	<input class="form-control" id="especialidad" name="especialidad" type="text">
								                </div>
											</td>
										</tr>
										<tr>
											<td id="seEnviaConsultaPara"> Se envía a consulta para <br>
												<label><input type="checkbox" id="confirmacioDiagnostica" name="confirmacioDiagnostica" ><span> Confirmación Diagnóstica </span></label>
												<label><input type="checkbox" id="realizarTto" name="realizarTto" ><span> Realizar tratamiento </span></label>
												<label><input type="checkbox" id="Seguimiento" name="Seguimiento" ><span> Seguimiento </span></label>
												<label><input type="checkbox" id="otraConsulta" name="otraConsulta" ><span> Otro </span></label>
	                                            <br>	                                            
	                                            <label for="consultaTextoEspecificar">Especifique :</label>
	                                            <textarea style="width: 94%;" class="form-control textareaResize " id="consultaTextoEspecificar" maxlength="700" name="consultaTextoEspecificar" rows="4" cols="3"></textarea>
												<p id="numconsultaTextoEspecificar">0/700</p>
	                                        </td>
										</tr>
										<tr>
											<td style="border: none">
												<label for="grupoDiagnostico" class="control-label col-md-6" style="text-align: left;"> GRUPO DIAGNOSTICO (DEIS) (*)</label>
												<select class="form-control" id="grupoDiagnostico" name="grupoDiagnostico" required="">
												</select>
												<label style="color: red;"> (*) No Olvidar Seleccionar el diagnóstico del paciente</label>
											</td>
										</tr>
										<tr>
											<td style="border: none">
												<label>(*) Categorización al Egreso</label>
												<label class="Mostrar"><input name="CatFinal" type="radio" value="C1"><span> C 1</span></label>
												<label class="Mostrar"><input name="CatFinal" type="radio" value="C2"><span> C 2 </span></label>
												<label class="Mostrar"><input name="CatFinal" type="radio" value="C3"><span> C 3</span></label>
												<label class="Mostrar"><input name="CatFinal" type="radio" value="C4"><span> C 4 </span></label>
												<label class="Mostrar"><input name="CatFinal" type="radio" value="C5"><span> C 5 </span></label>
											</td>
										</tr>
										<tr>
											<td style="border: none">
												<!--<label>Hora Categorizacion al Egreso</label>-->
												<input id="horaCatEgreso" name="horaCatEgreso" type="hidden" disabled="">
											</td>
										</tr>
									</table>
								</div>
							</div>
						<!-- INICIO ATENCION MEDICA -->
						<!-- INICIO BOTONES -->
						<div class="form-horizontal">
							<div class="col-md-6">
								<button type="button" class="btn btn-danger" id="volver"> Volver</button>
								<!-- <button type="button" class="btn btn-danger" id="ingresarNsp"> Ingresar NSP</button>-->
								<button type="button" class="btn btn-danger" id="ingresarNsp"> Cancelar Atención </button>
							</div> 
							<div class="col-md-3">
								<button type="button" class="btn btn-danger" id="ingresarAtencion"> Guardar</button>
							</div>
						</div>
						<!-- INICIO BOTONES -->
										
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
						<div class="modal fade" id="myModal"  data-backdrop="static" data-keyboard="false" role="dialog" >
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
												<button type="button" class="btn btn-default" data-dismiss="modal" id = "idValidacion" >Cerrar Modal</button>
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
		</div>

		<!-- MODAL  ATENCION --> 
		<div class="modal fade" data-backdrop="static" data-keyboard="false" id="modalFlash" role="dialog" style="z-index: 1151 !important;" >
			<div class="modal-dialog" style="width: 76em !important;min-width: 68em !important;">
				<div class="modal-content">
					<div class="modal-header">
						<button type="button" class="close" data-dismiss="modal" style="color:white;">&times;</button>
						<h4 class="modal-title" style="color:white;"> Flash Informativo paciente</h4>
					</div>
					<!-- START MODAL BODY-->
					<div class="modal-body">
						<div class="form-horizontal" id="crearPaciente">
							<div class="form-group">
								<label><h4><b> Historial de las 3 últimas consultas a centros de salud </b></h4></label>
							</div>
							<div class="form-group">
								<table class="table table-bordered Modal">
									<thead class="Modal">
										<th class="hidden-xs">  </th>
										<th class="hidden-xs"> Fecha y Hora </th>
										<th class="hidden-xs"> Centro de Atención </th>
										<th class="hidden-xs"> Diagnóstico </th>
										<th class="hidden-xs"> Indicaciones Receta </th>
									</thead>
									<tbody id="resultadoFlash" class="Modal">
									</tbody>
								</table>
							</div>
						</div>
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
	</body>
</html>