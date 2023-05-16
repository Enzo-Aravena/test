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
	<!-- <link rel="stylesheet" href="//code.jquery.com/ui/1.12.1/themes/base/jquery-ui.css">
  	<script src="https://code.jquery.com/jquery-1.12.4.js"></script>
  	<script src="https://code.jquery.com/ui/1.12.1/jquery-ui.js"></script>-->
	<link href="../../../lib/css/bootstrap.min.css" media="all" rel="stylesheet" type="text/css" />
	<link href="../../../lib/css/font-awesome.min.css" media="all" rel="stylesheet" type="text/css" />
	<link href="../../../lib/css/se7en-font.css" media="all" rel="stylesheet" type="text/css" />  
	<link href="../../../lib/css/style.css" media="all" rel="stylesheet" type="text/css" />
	<link href="css/estilos.css" media="all" rel="stylesheet" type="text/css" />
	<link href="css/atne.css" media="all" rel="stylesheet" type="text/css" />
	<script src='../../../lib/jquery-3.2.1.min.js'></script>
	<?php include_once("../../../lib/components.php");?>
	<!--<script src="http://code.jquery.com/ui/1.10.3/jquery-ui.js"></script>
	<script src="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/3.3.7/js/bootstrap.min.js"></script>-->
	<script src='../../../lib/jquery/jquery.tablesorter.min.js'></script> 
	<script src='../../../lib/jquery/jquery.tablesorter.widgets.min.js'></script> 
	<script src='../../../lib/jquery/jquery.tablesorter.widgets.js'></script> 
	<script src="../controlador/cliente/obsTtoController.js"></script>
	<script src="js/navObsTto.js"></script>
	<meta content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" name="viewport">
	<style type="text/css">
		.mayuscula{text-transform:uppercase;}
		.more{
			background: #900;
		    border-radius: 14px;
		    color: white;
		    width: 25px;
		    height: 25px;
		    display: flex;
		    justify-content: center;
		    align-items: center;
		}

		.recuadro{
			background-color: #e6e6e6;position: absolute;top: 25px;left: 10px;z-index: 3;width: 23em;border-style: double;
			-webkit-box-shadow: 0px 2px 13px 1px rgba(0,0,0,0.75);
			-moz-box-shadow: 0px 2px 13px 1px rgba(0,0,0,0.75);
			box-shadow: 0px 2px 13px 1px rgba(0,0,0,0.75);
		}

	</style>
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
						<form class="form-horizontal" enctype="multipart/form-data" id="detalle">
							<!-- INICIO DATOS PACIENTE -->
							<div class="form-horizontal" >
								<input id="conId" name="conId" type="hidden" >
								<input id="tabContent" name="tabContent" type="hidden" >
								<input id="horaIngresoPantalla" name="horaIngresoPantalla" type="hidden" >
								<input type="hidden" name="fechaHoy" id="fechaHoy">
								<input class="campoTexto" id="centro" name="centro" type="hidden" disabled="">
								<input class="campoTexto" id="prevision" name="prevision" type="hidden" disabled="">
								<input id="fechaYhoraIngreso" name="fechaYhoraIngreso" type="hidden" >								
								<input id="fecha" name="fecha" type="hidden" value="<?php date_default_timezone_set('America/Santiago'); echo date('H:i:s'); ?>"  disabled="">
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
							<!-- FIN DATOS PACIENTE -->
							<!-- INICIO DATOS TRIAGE -->
							<div class="form-horizontal" style="margin-top: 6px;background: #e6e6e6;display: -webkit-inline-box;border: 2px solid;width: 100%;">
								<div class="col-md-6">
									<table class="table table-bordered">
										<tr><label><b>Triage Paciente</b></label></tr>
											<tr>
												<td colspan="5" ><label><b> Signos Vitales </b></label>
													<label><b style="color: black;"> &nbsp; &nbsp; Hora Triage: </label>
													<input style="border: 0;background: #e6e6e6 !important;" id="horaTriage" name="horaTriage" type="text"></b>
												</td>
											</tr>
										<tr>
											<td >
												<label> F.C : </label>
												<input style="width: 3em;" id="fc" name="fc" type="text" disabled>
											</td>
											<td >
												<label for="tempAx"> Tº AX: </label>
												<input style="width: 3em;" id="tempAx" name="tempAx" type="text" disabled>
											</td>											
											<td >
												<label for="ps"> P.A : </label>
												<input style="width: 3em;" id="ps" name="ps" type="text" disabled> /
												<input style="width: 3em;" id="pd" name="pd" type="text" disabled>
											</td>
											<td >
												<label for="eEva"> E. EVA : </label>
												<input style="width: 3em;" id="eEva" name="eEva" type="text" disabled>
											</td>
										</tr>
										<tr>
											<td >
												<label for="fr"> F.R: </label>
												<input style="width: 3em;" id="fr" name="fr" type="text" disabled>
											</td>
											<td >
												<label for="satO"> SAT O2:</label>
												<input style="width: 3em;" id="satO" name="satO" type="text" disabled>
											</td>
											<td >
												<label for="hgt"> HGT: </label>
												<input style="width: 3em;" id="hgt" name="hgt" type="text" disabled>
											</td>
											<td >
												<label> E GLASGOW: </label>
												<input style="width: 3em;" id="eglasgow" name="eglasgow" type="text" disabled>
											</td>
											<td >
												<label> PESO : </label>
												<input style="width: 4em;" id="peso" name="peso"  type="text" maxlength="5" disabled>
											</td>
										</tr>
										<tr>
											<td colspan="5" > &nbsp;</td>
										</tr>
									</table>
								</div>
								<div class="col-md-6">
									<table class="table table-bordered" id="antecedentesMorbidos">
										<tr><td ><label><b> Antecedente Mórbidos </b></label></td></tr>
										<tr>
											<td >
												<div class="col-md-12">
													<label><input type="checkbox" disabled id="HTA" name="HTA" ><span> HTA </span></label>
													<label><input type="checkbox" disabled id="DM2" name="DM2" ><span> DM2 </span></label>
													<label><input type="checkbox" disabled id="EPOC" name="EPOC" ><span> EPOC </span></label>
													<label><input type="checkbox" disabled id="ASMA" name="ASMA" ><span> ASMA </span></label>
													<label><input type="checkbox" disabled id="IRC" name="IRC" ><span> IRC </span></label>
													<label><input type="checkbox" disabled id="DHC" name="DHC" ><span> DHC </span></label>
													<label><input type="checkbox" disabled id="OTRAS" name="OTRAS" ><span> OTRAS EC </span></label>
													<label><input type="text" disabled id="otrosEcDescrip" name="otrosEcDescrip" style="width: 9em;"></label>
												</div>
											</td>
										</tr>
										<tr>
											<td >
												<label class="control-label col-md-2" style="width: 5em;" for="alergias"> Alergias </label>
												<!--<input id="alergias" style="width: 34.6em;" name="alergias" disabled type="text" >-->
												<textarea class="textareaResize " style="width: 51%;" id="alergias" name="alergias" rows="3" cols="3" disabled></textarea>
											</td>									
										</tr>
										<tr>
											<td >
												<label class="control-label col-md-2">Categorización</label>
												<div class="col-md-10">
													<label><input checked="" name="categorizacion" disabled type="radio" id="C1" value="C1"><span> C 1</span></label>
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

							<!-- INICIO ATENCION MEDICA-->
							<div class="form-horizontal" style="margin-top: 6px;background: #e6e6e6;display: -webkit-inline-box;border: 2px solid;width: 100%;">
									<div class="col-md-6">
										<table class="table" style="border: 0;">
											<tr>
												<td >
													<label><h4><b> Atención Médica </b></h4></label>
													<label><b style="color: black;"> &nbsp; &nbsp; Hora Atención: </label>
													<input style="border: 0;background: #e6e6e6 !important;" id="horaAtencion" name="horaAtencion" type="text"></b>
												</td>										
											</tr>
											<tr>
												<td>
													<label> Anamnesis </label>
													<textarea class="textareaResize " style="width: 51%;margin-left:7%;" id="Anamnesis" name="Anamnesis" rows="3" disabled cols="3" maxlength="700"></textarea>
												</td>
											</tr>
											<tr>
												<td>
													<label> Sospecha Diagnóstica </label>
													<textarea class="textareaResize " style="width:51%;" disabled id="diagnostico" name="diagnostico" rows="3" cols="3"></textarea>
												</td>										
											</tr>
											<tr id="nombreExamenFisico">
												<td style="border: none"><label><h4><b> Examen Físico </b></h4></label></td>
											</tr>
											<tr id="mostrarCabeza">
												<td style="border: none">
													<label class="control-label col-md-2"> Cabeza </label>
													<label class="radio-inline examenFisico"><input disabled checked="" name="cabeza" name="cabeza"type="radio" value="SI" id="Normal1"><span> SI</span></label>
													<label class="radio-inline examenFisico"><input disabled name="cabeza" name="cabeza" type="radio" value="NO" id="Anormal1"><span> NO </span></label>
													<label>
														<!--<input style="width: 25em;" class="" id="detCabeza" name="detalleCabeza" type="text" maxlength="150">-->
														<textarea class="textareaResize " style="width: 25em;" id="detCabeza" name="detCabeza" rows="3" cols="3"></textarea>
													</label>
												</td>
											</tr>
											<tr id="mostrarTorax">
												<td style="border: none">
													<label class="control-label col-md-2"> Tórax </label>
													<label class="radio-inline examenFisico"><input disabled checked="" name="torax" type="radio" value="Normal" SI="Normal2" ><span> SI</span></label>
													<label class="radio-inline examenFisico"><input disabled name="torax" type="radio" value="NO" id="Anormal2" ><span>NO </span></label>
													<label>
														<!--<input style="width: 25em;" class="" id="detTorax" name="detTorax" type="text" maxlength="150">-->
														<textarea class="textareaResize " style="width: 25em;" id="detTorax" name="detTorax" rows="3" cols="3"></textarea>
														</label>
												</td>
											</tr>
											<tr id="mostrarAbdomen">
												<td style="border: none">
													<label class="control-label col-md-2"> Abdomen </label>
													<label class="radio-inline examenFisico"><input disabled checked="" name="abdomen" type="radio" value="SI" id="Normal3"><span> SI</span></label>
													<label class="radio-inline examenFisico"><input disabled name="abdomen" type="radio" value="NO" id="Anormal3"><span> NO </span></label>
													<label>
														<!--<input style="width: 25em;" class="" id="detAbdomen" name="detAbdomen" type="text" maxlength="150">-->
														<textarea class="textareaResize " style="width: 25em;" id="detAbdomen" name="detAbdomen" rows="3" cols="3"></textarea>
														</label>
												</td>
											</tr>
											<tr id="mostrarPelvis">
												<td style="border: none">
													<label class="control-label col-md-2"> Pelvis </label>
													<label class="radio-inline examenFisico"><input disabled checked="" name="pelvis" type="radio" value="SI" id="Normal4"><span> SI</span></label>
													<label class="radio-inline examenFisico"><input disabled name="pelvis" type="radio" value="NO" id="Anormal4"><span> NO </span></label>
													<label>
														<!--<input style="width: 25em;" class="" id="detPelvis" name="detPelvis" type="text" maxlength="150">-->
														<textarea class="textareaResize " style="width: 25em;" id="detPelvis" name="detPelvis" rows="3" cols="3"></textarea>
														</label>
												</td>
											</tr>
											<tr id="mostrarExtSuperiores">
												<td style="border: none">
													<label class="control-label col-md-2"> Ext. Superiores </label>
													<label class="radio-inline examenFisico"><input disabled checked="" name="extSuperiores" type="radio" value="SI" id="NormalCinco"><span> SI</span></label>
													<label class="radio-inline examenFisico"><input disabled name="extSuperiores" type="radio" value="NO" id="AnormalCinco"><span> NO</span></label>
													<label>
														<!--<input style="width: 25em;" class="" id="detExtSup" name="detExtSup" type="text" maxlength="150">-->
														<textarea class="textareaResize " style="width: 25em;" id="detExtSup" name="detExtSup" rows="3" cols="3"></textarea>
														</label>
												</td>
											</tr>
											<tr id="mostrarExtInferiores">
												<td style="border: none">
													<label class="control-label col-md-2"> Ext. Inferiores </label>
													<label class="radio-inline examenFisico"><input disabled checked="" name="extInferiores" type="radio" value="SI" id="Normal6"><span> SI</span></label>
													<label class="radio-inline examenFisico"><input disabled name="extInferiores" type="radio" value="NO" id="Anormal6"><span> NO </span></label>
													<label>
														<!--<input style="width: 25em;" class="" id="detExtInf" name="detExtInf" type="text" maxlength="150">-->
														<textarea class="textareaResize " style="width: 25em;" id="detExtInf" name="detExtInf" rows="3" cols="3"></textarea>
														</label>
												</td>
											</tr>
											<tr id="mostrarExNeurologico">
												<td style="border: none">
													<label class="control-label col-md-2"> Ex. Neurológico </label>
													<label class="radio-inline examenFisico"><input disabled checked="" name="exNeurologico" type="radio" value="SI" id="Normal7"><span> SI</span></label>
													<label class="radio-inline examenFisico"><input disabled name="exNeurologico" type="radio" value="NO" id="Anormal7"><span> NO </span></label>
													<label>
														<!--<input style="width: 25em;" class="" id="detExamNeuro" name="detExamNeuro" type="text" maxlength="150">-->
														<textarea class="textareaResize " style="width: 25em;" id="detExamNeuro" name="detExamNeuro" rows="3" cols="3"></textarea>
														</label>
												</td>
											</tr>
											<tr id="nombreExamenes">
												<td style="margin-left: 4%;">Exámenes</td>
											</tr>
											<tr id="mostrarRadiografia">
												<td style="border: none">
													<label style="margin-left: 4%;"><input type="checkbox" id="radiografia" name="radiografia" disabled >
														<span> Radiografía </span>
													</label>
													<label><input class="" style="width: 24em;" maxlength="50" id="detRadio" name="detRadio" type="text" disabled>
													</label>
												</td>
											</tr>
											<tr id="mostrarExamenSangre">
												<td style="border: none">
													<label style="margin-left: 4%;"><input type="checkbox" id="ExamenSangre" name="ExamenSangre" disabled >
														<span> Examen de Sangre </span>
													</label>
													<label><input class="" style="width: 21em;" maxlength="50" id="detExSangre" name="detExSangre" type="text" disabled>
													</label>
												</td>
											</tr>
											<tr id="mostrarEcg">
												<td style="border: none">
													<label style="margin-left: 4%;"><input type="checkbox" id="ecg" name="ecg" disabled >
														<span> ECG </span>
													</label>
												</td>
											</tr>
											<tr><td >&nbsp;</td></tr>
										</table>
									</div>
									<div class="col-md-6">
										<table class="table" style="border: 0;" >
											<tbody>
												<tr><td >&nbsp;</td></tr>
												<tr>
													<td>
														<label for="indicaciones"> Manejo y tratamiento (1) </label><br>
														Ind. 1: &nbsp;<input style="width: 25em;" id="ind1" name="ind1" type="text">
														<label><input type="checkbox" id="Realizado1" name="Realizado1"><span> Realizado </span></label><br>
														Ind. 2: &nbsp;<input style="width: 25em;" id="ind2" name="ind2" type="text">
														<label><input type="checkbox" id="Realizado2" name="Realizado2"><span> Realizado </span></label><br>
														Ind. 3: &nbsp;<input style="width: 25em;" id="ind3" name="ind3" type="text">
														<label><input type="checkbox" id="Realizado3" name="Realizado3"><span> Realizado </span></label><br><br>
														
													</td>
												</tr>
												<tr><td> <button type="button" class="btn btn-default" id="IngresarMasTTo">Añadir Tratamiento</button></td></tr>
											</tbody>
											
											<tbody id="manejoYTratamientoDosyTres" style="border-top: none !important;">
												<tr>
													<td id="manejoYttoDos">
														<label for="indicaciones"> Manejo y tratamiento (2) </label><br>
														Ind. 1: &nbsp;<input style="width: 25em;" id="indDos1" name="indDos1" type="text">
														<label><input type="checkbox" id="RealizadoIndDos1" name="RealizadoIndDos1"><span> Realizado </span></label><br>
														Ind. 2: &nbsp;<input style="width: 25em;" id="indDos2" name="indDos2" type="text">
														<label><input type="checkbox" id="RealizadoIndDos2" name="RealizadoIndDos2"><span> Realizado </span></label><br>
														Ind. 3: &nbsp;<input style="width: 25em;" id="indDos3" name="indDos3" type="text">
														<label><input type="checkbox" id="RealizadoIndDos3" name="RealizadoIndDos3"><span> Realizado </span></label>
													</td>
												</tr>
												<tr>
													<td id="manejoYttoDos">
														<label for="indicaciones"> Manejo y tratamiento (3) </label><br>
														Ind. 1: &nbsp;<input style="width: 25em;" id="indTres1" name="indTres1" type="text">
														<label><input type="checkbox" id="RealizadoIndTres1" name="RealizadoIndTres1"><span> Realizado </span></label><br>
														Ind. 2: &nbsp;<input style="width: 25em;" id="indTres2" name="indTres2" type="text">
														<label><input type="checkbox" id="RealizadoIndTres2" name="RealizadoIndTres2"><span> Realizado </span></label><br>
														Ind. 3: &nbsp;<input style="width: 25em;" id="indTres3" name="indTres3" type="text">
														<label><input type="checkbox" id="RealizadoIndTres3" name="RealizadoIndTres3"><span> Realizado </span></label><br>
													</td>
												</tr>
												<tr><td >&nbsp;</td></tr>
											</tbody>
											
										</table>
									</div>
							</div>
							<!-- FIN ATENCION MEDICA-->
							<br>

							<div class="form-horizontal" style="margin-top: 6px;background: #e6e6e6;display: -webkit-inline-box;border: 2px solid;width: 100%;">
								<div class="col-md-6" id="validaCampos">
									<table class="table">
										<tr>
											<td>
												<label><h4><b> Control de Signos Vitales </b></h4></label>
											</td>
										</tr>
										<tr>
											<td colspan="1"> &nbsp; </td>
											<td><b> 1º Control </b></td>
											<td><b> 2º Control </b></td>
											<td><b> 3º Control </b></td>
											<td><b> 4º Control </b></td>
											<td><b> 5º Control </b></td>
											<td><b> 6º Control </b></td>
										</tr>
										<tr>
											<td> <b>Hora Control </b></td>
											<td> <input style="width: 6em;" id="horaControl1" name="horaControl1" type="text" disabled> </td>
											<td> <input style="width: 6em;" id="horaControl2" name="horaControl2" type="text" disabled> </td>
											<td> <input style="width: 6em;" id="horaControl3" name="horaControl3" type="text" disabled> </td>
											<td> <input style="width: 6em;" id="horaControl4" name="horaControl4" type="text" disabled> </td>
											<td> <input style="width: 6em;" id="horaControl5" name="horaControl5" type="text" disabled> </td>
											<td> <input style="width: 6em;" id="horaControl6" name="horaControl6" type="text" disabled> </td>
										</tr>
										<tr>
											<td> <b>F.C (*)</b></td>
											<td> <input style="width: 6em;" id="fcCtr1" name="fcCtr1" type="text" disabled> </td>
											<td> <input style="width: 6em;" maxlength="3" id="fcCtr2" tabindex="1" name="fcCtr2" type="text"> </td>
											<td> <input style="width: 6em;" maxlength="3" id="fcCtr3" tabindex="2" name="fcCtr3" type="text"> </td>
											<td> <input style="width: 6em;" maxlength="3" id="fcCtr4" tabindex="3" name="fcCtr4" type="text"> </td>
											<td> <input style="width: 6em;" maxlength="3" id="fcCtr5" tabindex="4" name="fcCtr5" type="text"> </td>
											<td> <input style="width: 6em;" maxlength="3" id="fcCtr6" tabindex="5" name="fcCtr6" type="text"> </td>

											<input style="width: 6em;" maxlength="3" id="control2" tabindex="1" type="hidden">
											<input style="width: 6em;" maxlength="3" id="control3" tabindex="1" type="hidden">
											<input style="width: 6em;" maxlength="3" id="control4" tabindex="1" type="hidden">
											<input style="width: 6em;" maxlength="3" id="control5" tabindex="1" type="hidden">
											<input style="width: 6em;" maxlength="3" id="control6" tabindex="1" type="hidden">
										</tr>
										<tr>
											<td><b> F.R (*)</b></td>
											<td> <input style="width: 6em;" id="frCtr1" name="frCtr1" type="text" disabled> </td>
											<td> <input style="width: 6em;" maxlength="3" id="frCtr2"  tabindex="1"name="frCtr2" type="text"> </td>
											<td> <input style="width: 6em;" maxlength="3" id="frCtr3" name="frCtr3" type="text" tabindex="2"> </td>
											<td> <input style="width: 6em;" maxlength="3" id="frCtr4" name="frCtr4" type="text" tabindex="3"> </td>
											<td> <input style="width: 6em;" maxlength="3" id="frCtr5" name="frCtr5" type="text" tabindex="4"> </td>
											<td> <input style="width: 6em;" maxlength="3" id="frCtr6" name="frCtr6" type="text" tabindex="5"> </td>
										</tr>

										<tr>
											<td> <b> Tº AX (*)</b></td>
											<td> <input style="width: 6em;" id="temAxCtr1" maxlength="4" name="temAxCtr1" type="text" disabled> </td>
											<td> <input style="width: 6em;" id="temAxCtr2" maxlength="4" tabindex="1" name="temAxCtr2" type="text"> </td>
											<td> <input style="width: 6em;" id="temAxCtr3" maxlength="4" name="temAxCtr3" type="text" tabindex="2"> </td>
											<td> <input style="width: 6em;" id="temAxCtr4" maxlength="4" name="temAxCtr4" type="text" tabindex="3"> </td>
											<td> <input style="width: 6em;" id="temAxCtr5" maxlength="4" name="temAxCtr5" type="text" tabindex="4"> </td>
											<td> <input style="width: 6em;" id="temAxCtr6" maxlength="4" name="temAxCtr6" type="text" tabindex="5"> </td>
										</tr>
										<tr>
											<td> <b> SAT O2 (*)</b></td>
											<td> <input style="width: 6em;" id="satOCtr1" name="satOCtr1" type="text" disabled> </td>
											<td> <input style="width: 6em;" maxlength="3" id="satOCtr2" tabindex="1" name="satOCtr2" type="text"> </td>
											<td> <input style="width: 6em;" maxlength="3" id="satOCtr3" name="satOCtr3" tabindex="2" type="text"> </td>
											<td> <input style="width: 6em;" maxlength="3" id="satOCtr4" name="satOCtr4" tabindex="3" type="text"> </td>
											<td> <input style="width: 6em;" maxlength="3" id="satOCtr5" name="satOCtr5" tabindex="4" type="text"> </td>
											<td> <input style="width: 6em;" maxlength="3" id="satOCtr6" name="satOCtr6" tabindex="5" type="text"> </td>
										</tr>
										<tr>
											<td > <b> P.A (*)</b></td>
											<td > 
												<input style="width: 2.5em;" maxlength="3" id="psCtr1" name="psCtr1" type="text" disabled> / 
												<input style="width: 2.5em;" maxlength="3" id="pdCtr1" name="pdCtr1" type="text" disabled> </td>
											<td > 
												<input style="width: 2.5em;" maxlength="3" id="psCtr2" tabindex="1" name="psCtr2" type="text"> / 
												<input style="width: 2.5em;" maxlength="3" id="pdCtr2" tabindex="1" name="pdCtr2" type="text"> </td>
											<td > 
												<input style="width: 2.5em;" maxlength="3" id="psCtr3" tabindex="2" name="psCtr3" type="text"> / 
												<input style="width: 2.5em;" maxlength="3" id="pdCtr3" tabindex="2" name="pdCtr3" type="text"> </td>
											<td > 
												<input style="width: 2.5em;" maxlength="3" id="psCtr4" tabindex="3" name="psCtr4" type="text"> / 
												<input style="width: 2.5em;" maxlength="3" id="pdCtr4" tabindex="3" name="pdCtr4" type="text"> </td>
											<td > 
												<input style="width: 2.5em;" maxlength="3" id="psCtr5" tabindex="4" name="psCtr5" type="text"> / 
												<input style="width: 2.5em;" maxlength="3" id="pdCtr5" tabindex="4" name="pdCtr5" type="text"> </td>
											<td > 
												<input style="width: 2.5em;" maxlength="3" id="psCtr6" tabindex="5" name="psCtr6" type="text"> / 
												<input style="width: 2.5em;" maxlength="3" id="pdCtr6" tabindex="5" name="pdCtr6" type="text"> </td>
										</tr>
										
										<tr>
											<td> <b>HGT </b></td>
											<td> <input style="width: 6em;" id="hgtCtr1" name="hgtCtr1" type="text" disabled> </td>
											<td> <input style="width: 6em;" maxlength="4" id="hgtCtr2" tabindex="1" name="hgtCtr2" type="text"> </td>
											<td> <input style="width: 6em;" maxlength="4" id="hgtCtr3" name="hgtCtr3" tabindex="2" type="text"> </td>
											<td> <input style="width: 6em;" maxlength="4" id="hgtCtr4" name="hgtCtr4" tabindex="3" type="text"> </td>
											<td> <input style="width: 6em;" maxlength="4" id="hgtCtr5" name="hgtCtr5" tabindex="4" type="text"> </td>
											<td> <input style="width: 6em;" maxlength="4" id="hgtCtr6" name="hgtCtr6" tabindex="5" type="text"> </td>
										</tr>
										<tr>
											<td> <b> E. EVA </b></td>
											<td> <input style="width: 6em;" id="evaCtr1" name="evaCtr1" type="text" disabled> </td>
											<td> <input style="width: 6em;" maxlength="2" id="evaCtr2" name="evaCtr2" tabindex="1" type="text"> </td>
											<td> <input style="width: 6em;" maxlength="2" id="evaCtr3" name="evaCtr3" tabindex="2" type="text"> </td>
											<td> <input style="width: 6em;" maxlength="2" id="evaCtr4" name="evaCtr4" tabindex="3" type="text"> </td>
											<td> <input style="width: 6em;" maxlength="2" id="evaCtr5" name="evaCtr5" tabindex="4" type="text"> </td>
											<td> <input style="width: 6em;" maxlength="2" id="evaCtr6" name="evaCtr6" tabindex="5" type="text"> </td>
										</tr>
										<tr>
											<td> <b> E. GLASGOW (*) </b></td>
											<td> <input style="width: 6em;" id="eGlsCrt1" name="eGlsCrt1" type="text" disabled> </td>
											<td> <input style="width: 6em;" maxlength="2" id="eGlsCrt2" name="eGlsCrt2" tabindex="1" type="text"> </td>
											<td> <input style="width: 6em;" maxlength="2" id="eGlsCrt3" name="eGlsCrt3" tabindex="2" type="text"> </td>
											<td> <input style="width: 6em;" maxlength="2" id="eGlsCrt4" name="eGlsCrt4" tabindex="3" type="text"> </td>
											<td> <input style="width: 6em;" maxlength="2" id="eGlsCrt5" name="eGlsCrt5" tabindex="4" type="text"> </td>
											<td> <input style="width: 6em;" maxlength="2" id="eGlsCrt6" name="eGlsCrt6" tabindex="5" type="text"> </td>
										</tr>
										<tr><td >&nbsp;</td></tr>
									</table>
								</div>

								<div class="col-md-6">
									<table class="table">
										<tr><td > &nbsp;</td> <td > &nbsp;</td></tr>
										<tr>
											<td style="border: none;">
												&nbsp;
											</td>
											<td style="border: none;">
												&nbsp;
											</td>
										</tr>
										<tr>
											<td>
												<label for="ObservacionesTto"> Observaciones de Enfermería </label>
												<textarea style="width: 80%;" class="form-control textareaResize" tabindex="6" id="ObservacionesTto" maxlength="150" name="ObservacionesTto" rows="3" cols="3"></textarea><p id="charNum">0/150</p>
											</td>
										</tr>
									</table>
								</div>															
							</div>
						</form>



						<!-- INICIO POPUP NSP PACIENTE  -->
						<div class="modal fade" id="ingresarNspPaciente"  data-backdrop="static" data-keyboard="false" role="dialog" >
							<div class="modal-dialog" style="width: 845px !important;">
								<div class="modal-content">
									<div class="modal-header">
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
														<select class="form-control" id="grupoDiagnosticoNSP" name="grupoDiagnosticoNSP" disabled="" required="">
															<option value="0">00. NSP (Se retira antes de Recibir Atención Médica)</option>
														</select>
														<label style="color: red;"> No Olvidar Seleccionar el diagnóstico del paciente: (*)</label>
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
												<button type="button" class="btn btn-default" id="ingresarNspPac">Registrar NSP</button>
												<button type="button" class="btn btn-default" data-dismiss="modal">Cancelar</button>
											</div>
										</div>
									</div>

								</div>
							</div>
						</div>
						<!-- FIN POPUP NSP PACIENTE  -->

						<!-- INICIO MODAL DE VALIDACION -->
						<div class="modal fade" id="myModal" data-backdrop="static" data-keyboard="false" role="dialog" >
							<div class="modal-dialog" style="width: 845px !important;">
								<div class="modal-content">
									<div class="modal-header">
										<button type="button" id="botonClose" class="close" data-dismiss="modal" style="color:white;">&times;</button>
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
						
						<br>
						<div class="form-horizontal">
							<div class="col-md-6">
								<button type="button" class="btn btn-danger" id="volver"> Volver</button>
								<button type="button" class="btn btn-danger" id="ingresarNsp"> Ingresar NSP</button>
							</div>
							<div class="col-md-4">
								<button type="button" class="btn btn-primary" id="IngresarProcedimiento"> Guardar Procedimiento</button>
								<button type="button" class="btn btn-primary" id="terminarProcedimientos"> Terminar Procedimientos </button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</body>
</html>