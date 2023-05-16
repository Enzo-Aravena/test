<?php include_once("../../../lib/seguridad.php");?>
<!DOCTYPE html>
<html ><!--style="    overflow: hidden;">-->
	<head>
		<title>Urgencia Sapu</title>
		  <meta http-equiv="Expires" content="0">
		  <meta http-equiv="Last-Modified" content="0">
		  <meta http-equiv="Cache-Control" content="no-cache, mustrevalidate">
		  <meta http-equiv="Pragma" content="no-cache">
		<meta charset="UTF-8">
		<!-- Revisar los iconos de imagenes-->
		<link rel="shortcut icon" href="favicon.ico" type="image/x-icon">
    	<link rel="icon" href="favicon.ico" type="image/x-icon">
		 <!--  EXTRAE TODA LA DATA DEL COMPONENTE PRINCIPAL-->
		<?php include_once("../../../lib/components.php");?>
    	<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/jquery-confirm/3.3.0/jquery-confirm.min.css">
    	<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery-confirm/3.3.0/jquery-confirm.min.js"></script>
    	<script src="https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.27.0/moment-with-locales.min.js"></script>
		<script src="https://cdnjs.cloudflare.com/ajax/libs/moment-timezone/0.5.31/moment-timezone-with-data.js"></script>
		<script src="../controlador/cliente/controladorMenu.js"></script>		
		<script src="js/menuController.js"></script>
		<style type="text/css">
			.loader{
			    position: absolute;
			    background-color: black;
			    z-index: 1001;
			    opacity: 0.80;
			    width: 109%;
			    min-width: 14em;
			    margin-left: -1%;
			    height: 100em;
			    margin-top: -9em;
			}

		</style>
		<script type="text/javascript">
			function mueveReloj(){
			    const event = new Date();
				var options = { hour12: false ,timeZone: 'America/Santiago'};
				let horaSignosVitales = event.toLocaleTimeString('es-ES', options);

				var validacion = horaSignosVitales.split(":");
				var hora = parseInt(validacion[0]);
				var min = validacion[1];
				var seg = validacion[2];

				if (hora <= 9) {
					hora = "0" + hora;
				}else{
					hora = hora;
				}

				let horaFinal = hora + ":"+ min + ":"+ seg;

				document.form_reloj.reloj.value = horaFinal;

				/*const ny = moment(new Date()).tz('America/Santiago');
				let fecha = ny.toString();
				let separar = fecha.split(" ");
				//OBTIENE LA HORA DESDE EL SERVER
				document.form_reloj.reloj.value = separar[4];*/

				setTimeout("mueveReloj()",1000);
			}	


			
			/*function salir(e)
			{
				var message='No debe cerrar el navegador. Si presiona Aceptar lo cerrará y perderá los cambios no guardados.';
				var evtobj=window.event? event : e;
				if(evtobj == e)
				{
					//firefox
					if (!evtobj.clientY)
					{
					evtobj.returnValue = message;
					}
				}
				else //IE
				{
					if (evtobj.clientY < 0)
					{
					evtobj.returnValue = message;
					}
				}
			}*/
		</script>	
		<meta content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" name="viewport">
	</head>
	<body class="page-header-fixed bg-1" onload="mueveReloj()" ><!--  style="background: #ffffff !important;" -->

<!-- loader que muestra el cargar de una pagina-->
		<div id="loader" class="loader">
			<img style="width: 10%;margin-top: 6%;margin-left: 39%;" src="../../../lib/images/spinner.gif">
		</div>

		<div id='contenedor'  >
			<div class="navbar navbar-fixed-top scroll-hide">
				<div class="container-fluid top-bar" style="height: 40px;border-bottom: none !important;">

					<label id="tituloPestaña" style="font-size: 21px;position: fixed;margin-top: 8px;"> </label>

					<div class="pull-right">
						<ul class="nav navbar-nav pull-right" id="pullRigth" style="margin-top: 2%;">

							<!--Trae la data para poder recibir el menu-->
							<input type='hidden' value='<?php echo $_SESSION['username'];?>' id='usuario' /> 
							<input type='hidden' value='<?php echo $_SESSION['sexo'];?>' id='sexo'>
							<input type='hidden' value='<?php echo $_SESSION['nombre'];?>' id='nombre'>
							<input type='hidden' value='<?php echo $_SESSION['perfil'];?>' id='perfil'>		
							<input type='hidden' value='<?php echo $_SESSION['centro'];?>' id='centro'>		
							<input type='hidden' value='<?php echo $_SESSION['clave'];?>' id='clave'>
							<input type='hidden' value='<?php echo $_SESSION['permisos'];?>' id='permisos'>
							<input type='hidden' value='<?php echo $_SESSION['perId'];?>' id='perId'>
							<input type='hidden' name="centroTrabajo" id='centroTrabajo'>
							<li class="dropdown messages hidden-xs">
								<form name="form_reloj">
									<input type="text" name="reloj" id="reloj" size="10" disabled="">
								</form>
							</li>
							<li class="dropdown messages hidden-xs">
								<!--<img style="cursor: pointer;" id="descargarManualUsuario" width="30" height="40" src="../../../lib/images/manualUsuario.png" data-toggle="popover" title="Manual de usuarios" >-->
							</li>
							<li class="dropdown user hidden-xs"><a data-toggle="dropdown" class="dropdown-toggle" href="#">
								<label id="images"> </label>
								<?php echo $_SESSION["nombre"] ?></a>
							</li>
							<li class="dropdown user hidden-xs">
								<div class="dropdown-toggle" id="logout" style="margin-top: 0.7em;">
									<img style="cursor: pointer;" width="22" height="22" src="../../../lib/images/shut-down-icon.png" />
								</div>
							</li>
						</ul>
					</div>
				</div>
			</div>

			<div class="widget-container stats-container" style="margin-top: -67px;">
				<input type="hidden" name="data" id="data">
				<br>
				<div class="embed-container" style="height: calc(100vh - 71px);" >
					<iframe id="contenido" src="" style="border: none;width:100%; height: calc(100vh - 71px) !important;" ></iframe>
				</div>
			</div>
		</div> 	

	</body>
</html>