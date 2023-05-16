<?php include_once("../../../lib/seguridad.php");?>
<!DOCTYPE html>
<html>
<head>
	<meta http-equiv="Expires" content="0">
	<meta http-equiv="Last-Modified" content="0">
	<meta http-equiv="Cache-Control" content="no-cache, mustrevalidate">
	<meta http-equiv="Pragma" content="no-cache">
	<meta content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" name="viewport">	
	<script src='../../../lib/jquery-3.2.1.min.js'></script>
	<!--  EXTRAE TODA LA DATA DL COMPONENTE PRINCIPAL-->
  	<?php include_once("../../../lib/components.php");?>
  		<!-- load jQuery and tablesorter scripts -->
	<script type="text/javascript" src="../../../lib/jquery/jquery.tablesorter.min.js"></script>
	<!-- tablesorter widgets (optional) -->
	<script type="text/javascript" src="../../../lib/jquery/jquery.tablesorter.widgets.js"></script>

	<script src="../controlador/cliente/bucadorSapuController.js"></script>
	<script src="js/navBuscadorSapu.js"></script>
	<script type="text/javascript">
		function deshabilitaRetroceso(){
		    window.location.hash="no-back-button";
		    window.location.hash="Again-No-back-button" //chrome
		    window.onhashchange=function(){window.location.hash="no-back-button";}
		}
	</script>
	<style type="text/css">
		.opacity input[type="radio"]:checked + span:after {
		    content: "";
		    width: 8px;
		    height: 8px;
		    position: absolute;
		    top: 6px;
		    left: -16px !important;
		    border-radius: 50%;
		    display: block;
		}
	</style>
	</head>
	<body>
		<div class="row">
			<div class="widget-container padded">
				<div class="widget-content padded">
					<div class="form-horizontal">
						<div class="widget-container fluid-height">
							<button type="button" class="btn btn-danger" style="background: #900;" id="volverSeleccionCentro"> Volver a Seleccion Centro </button>	
						</div>						
					</div>
					<div class="form-horizontal"> &nbsp;</div>
		    		<div class="form-horizontal">
					    <div class="form-group">
								<label class="control-label col-md-3">Seleccione el tipo de dato a buscar : </label>
								<div class="col-md-7">		
									<label class="radio-inline">
										<input style="cursor: pointer;" name="rdbBuscar" type="radio" value="rut" checked><span> Rut</span>
									</label>	
									<label class="radio-inline">
										<input style="cursor: pointer;" name="rdbBuscar" type="radio" value="fecha"><span> Fecha</span>
									</label>								
								</div>
						</div>				        			        	
				        <div class="form-group">
					            <label class="control-label col-md-2"> </label>
					            <div class="col-md-3">			        
					              	<input style="cursor: pointer;" class="form-control" placeholder="10045678-9" type="text" id="rutPaciente" autocomplete="off" name="rutPaciente" minlength="3" maxlength="11">

									<div class="input-group date datepicker" data-date-autoclose="true" data-date-format="dd/mm/yyyy"  id="desde">
										<input class="form-control" type="text" placeholder="dia/mes/año" name="desde" style="height: 28px !important;" autocomplete="off"/>
										<span class="input-group-addon">
											<i class="fa fa-calendar"></i>
										</span>
									</div>
					            </div>
								<button class="btn btn-primary" id="ejecutar">Buscar</button>
								<button class="btn btn-primary" id="descargar">Descargar Archivo Excel</button>
				        </div>
		    		</div>

		    		<div class="form-horizontal" id="tablesContent">
		    			<div class="form-group" style="overflow-x:auto;">
			          			<table class="table table-bordered table-hover tablesorter" id="dataTable">
				          			<thead style="background-color:#900;color: white;">
										<th >CENTRO_ATENCION</th>
										<th >NOMBRE_PROFESIONAL</th>
										<th >PROFESION</th>
										<th >RUT_PROFESIONAL</th>
										<th >CENTRO_PACIENTE</th>
										<th >SECTOR_PACIENTE</th>
										<th >RUT_PACIENTE</th>
										<th >NOMBRE_PACIENTE</th>
										<th >SEXO</th>
										<th >DOMICILIO</th>
										<th >FECHA_NACIMIENTO</th>
										<th >EDAD_VISITA_PACIENTE</th>
										<th >RANGO_ETARIO_1</th>
										<th >RANGO_ETARIO_2</th>
										<th >EPISODIO</th>
										<th >PROTOCOLO</th>
										<th >FECHA_ATENCION</th>
										<th >HORA_ATENCION</th>
										<th >NUM_ATENCION_SAPU</th>
										<th >TIPO_INSCRIPCION</th>
										<th >MOTIVO_CONSULTA</th>
										<th >EMBARAZADA</th>
										<th >CONSTATACION_DE_LESIONES</th>
										<th >ALCOHOLEMIA</th>
										<th >REALIZA_REANIMACION</th>
										<th >PACIENTE_FALLECIDO</th>
										<th >NSP</th>
										<th >derivacion_urgencia</th>
										<th >derivacion_urgencia_otro</th>
										<th >CAT_URGENCIA</th>
										<th >DIAGNOSTICO</th>
										<th >PAC_ID</th>
										<th >TIPO_REGISTRO</th>
									</thead>
									<tbody  id="tabla_resultados">
							       	</tbody>
				          		</table>
		          		</div>

		          		<div class="form-group">
				   		<div class="col-md-3"></div>
				   		<div class="col-md-6">
				    		<ul class="pagination pagination-lg pager" id="myPager"></ul>
				    	</div>
				   </div>
			        </div>	    		
		    	</div>
		    </div>
		</div>
			
	</body>
</html>