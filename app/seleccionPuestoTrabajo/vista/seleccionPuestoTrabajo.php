<?php include_once("../../../lib/seguridad.php");?>
<!DOCTYPE html>
<html>
<head>
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
	<script src='../../../lib/jquery/jquery.tablesorter.min.js'></script> 
	<script src='../../../lib/jquery/jquery.tablesorter.widgets.min.js'></script> 
	<script src='../../../lib/jquery/jquery.tablesorter.widgets.js'></script>
	<script src="../controlador/cliente/seleccionPacienteController.js"></script>
	<script src="js/navegadorSeleccion.js"></script>
	<style>
	.datepicker{z-index:1151 !important;}
	.mayuscula{text-transform:uppercase;}

	#centroAtencionPac > tr:hover{
		background-color: #e4f4fd !important;
	}

	#centroAtencionPac > tr:nth-child(even){
		background-color: #eed;
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
	<body onload="deshabilitaRetroceso()" style="background-color: #fafafa;">
		<div class="row">
			<div class="col-md-12">
				<div class="widget-container">
					<div class="widget-content padded">
						<div class="form-horizontal">
							<label style="color:#fafafa; font-size: 21px; display: flex;
  							justify-content: center; margin-top:30px; color:black; font-size: 30px; background-color:#e4f4fd;">
							Seleccion de Centro de atención
							</label>
						</div>					
						<br>

						<!--<div style="margin-top:100px;     font: normal 12px/150% Georgia, Times New Roman, Times, serif;
    					background: linear-gradient(#dbdbcc, #fff4e1); overflow: hidden; -webkit-border-radius: 7px; 
    					-moz-border-radius: 7px; border-radius: 7px;" class="form-horizontal" id="mostrarCentro">
						</div>-->

						 <div class="form-horizontal">
								<table  style="margin-top:100px; font: normal 12px/150% Georgia, Times New Roman, Times, serif;
    					background: linear-gradient(#8bd3f8, white)!important; overflow: hidden; -webkit-border-radius: 7px; 
    					-moz-border-radius: 7px; border-radius: 7px;" class="table table-bordered">
									<thead>
										
									</thead>
									<tbody class="form-horizontal" id="mostrarCentro">
									<tbody>
								</table>
						



					</div>
				</div>
			</div>
		</div>
	</body>
</html>
