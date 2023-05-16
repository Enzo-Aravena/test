function cargarCentros(){
		var url= "../controlador/servidor/seleccionController.php";
		var type= "POST";
		var resultado = null;
		var data= {
			evento :'cargarCentros'
		};
		$.ajax({
			url:url,
			type:type,
			data:data,
			beforesend:function(){
				console.log("peticion recibida");
			},
			success:function(response){
				var perfil = window.parent.$("#perfil").val();
				window.parent.$("html,body").animate({ scrollTop: 0 }, 600);
				resultado = JSON.parse(response);
				if (resultado.sesion === undefined) {
					$("#centroAtencionPac").empty();
					var tabla = '';
					for(var aux = 0 in resultado){
						var codigoCentro = resultado[aux].CODIGO;
						tabla = tabla + '<tr>';
							tabla = tabla + '<td> <a class="most" style="cursor:pointer;" id="idRedirec'+aux+'"> <input type = "hidden" name= "conf" class="Seleccion" value="'+codigoCentro+'">'+ resultado[aux].NOMBRE +'</a></td>';
							tabla = tabla + '<td> <a class="most" style="cursor:pointer;" id="idRedirec'+aux+'"> <input type = "hidden" name= "conf" class="Seleccion" value="'+codigoCentro+'"> <u> Ingresar a centro </u> </a></td>';
						tabla = tabla + '</tr>';
					}

					//var permisos = window.parent.$("#permisos").val();
					//if(permisos === "12" || permisos === "10"){
					var perId = window.parent.$("#perId").val();
					if(perId === "1368333" || perId === "1375053" || perId === "1368373" || perId === "923842" || perId === "345837" || perId === "1338953" || perId === "345552" || perId === "113229" 
						|| perId === "507671" || perId === "543362" || perId === "880773" || perId === "1012787" || perId ==="345397" || perId ==="345023" || perId ==="922473"|| perId ==="1120829"|| perId ==="352408"|| perId ==="1173871"
						|| perId === "951703" || perId === "1547831" || perId === "1146250"){
						tabla = tabla + '<tr>';
							tabla = tabla + '<td> <a href="../../contenido/vista/desbloqueoPacientes.php" style="cursor:pointer;"> DESBLOQUEO PACIENTES </a></td>';
							tabla = tabla + '<td> <a href="../../contenido/vista/desbloqueoPacientes.php" style="cursor:pointer;"> <u> Ingresar </u> </a></td>';
						tabla = tabla + '</tr>';

					/*	tabla = tabla + '<tr>';
							tabla = tabla + '<td> <a href="../../contenido/vista/anularAtencion.php" style="cursor:pointer;"> ANULAR ATENCION </a></td>';
							tabla = tabla + '<td> <a href="../../contenido/vista/anularAtencion.php" style="cursor:pointer;"> <u> Ingresar </u> </a></td>';
						tabla = tabla + '</tr>';*/
					}

					tabla = tabla + '<tr>';
						tabla = tabla + '<td> <a href="../../buscadorSapu/vista/buscadorSapu.php" style="cursor:pointer;"> BUSCADOR PACIENTES SAPU </a></td>';
						tabla = tabla + '<td> <a href="../../buscadorSapu/vista/buscadorSapu.php" style="cursor:pointer;"> <u> Ingresar </u> </a></td>';
					tabla = tabla + '</tr>';

					$("#centroAtencionPac").append(tabla);
					$(".most").click(function(){
					 	var dato = $(".Seleccion",this).val();
					 	window.parent.$("#centroTrabajo").val(dato);
					 	$(location).attr('href',"../../contenido/vista/dashboard.php?idCentro="+dato);
					});
				}else{
					alert('Su sesion fue cerrada por inactividad en los ultimos 45 minutos.');
					window.setTimeout(function () { 
                    	window.top.location.href= '../../../index.php';
                    }, 5000);
					
				}// END IF
			}, // End success
			error:function(error){
				console.log("Error en la peticion");
			} // End error
		});//End ajax
	}