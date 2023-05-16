function redirectToMenu(usuario){
	var resultado = null;
	var url = "../controlador/servidor/controladorMenu.php";
	var type = "POST";
	var data = {
		evento:"menu",
		usuario:usuario
	};
	$.ajax({
		url:url,
		type:type,
		data:data,
		beforesend:function(){
			console.log("Peticion enviada");º
		},
		success:function(response){
			resultado = JSON.parse(response);
			if (resultado === 0) {
				alert("Su sesion ha caducado");
				$(location).attr('href',"../../../index.php");
			}else{
				$('#menu').empty();
				for(var aux = 0 in resultado){
					var menu = '';
					menu = menu + '<li>';
					menu = menu + '<a href="#" id="usuarios">';
					menu = menu + '<label id="link'+aux+'" class="mostrar" url="'+resultado[aux].url+'">';

					var validate = resultado[aux].imagen;
					var verf = validate.substring(0,5);
					if ( verf === "se7en" )
					{					
						menu = menu + '<span aria-hidden="true" class="'+resultado[aux].imagen+'"></span>';					
					}
					else{
						menu = menu + '<span aria-hidden="true"><img src="'+resultado[aux].imagen+'" style="margin-top: -7px;"></span>';			
					}	
						menu = menu + '<label id = "nombre'+aux+'">'+resultado[aux].nombre+'</label>';
						menu = menu + '<input type="hidden" id="showData" value="'+resultado[aux].url+'" />';
						menu = menu + '</label></a>';
						menu = menu + '</li>';			
						$('#menu').append(menu);
				}

				var url = 'index.php';
				$("#contenido").attr("src",url);
				$('#loader').hide();
				$('.mostrar').on("click",function(){
					var usuario = $('#usuario').val();
					if (usuario === "" ) {
						$("#contenido").attr("src",url);
						$(location).attr('href',"../../../index.php");
					}else{
						var url = "../../"+$('#'+this.id+' #showData').val();
						$("#contenido").attr("src",url);
					}
				});
			}

		},
		error:function(error){
			console.log("no se pudo ingresar a la pagina");
		}
	});
}


function obtenerValidacionIngresoPacientes(conId,fechaHora,perId,carId){
	var url= "../controlador/servidor/controladorMenu.php";
	var type= "POST";
	var conId = conId
	var resultado = null;
	var data= {
		evento :'obtenerEstadoPacientes',
		conId:conId,		
		fechaHora:fechaHora,
		perId:perId,
		carId:carId
	};
	$.ajax({
		url:url,
		type:type,
		async: false,
		data:data,
		beforesend:function(){
			console.log("peticion recibida");
		},
		success:function(response){
			window.parent.$("#loader").hide();
			resultado = JSON.parse(response);
				if (resultado[0].estado !== "3") {
				}else{
					$(location).attr('href',"../../../index.php");
				}
		}, // End success
		error:function(error){
			console.log("Error en la peticion");
		} // End error
	});//End ajax
}



function SalirAplicacion(conId,fechaHora,perId,carId){
	var url= "../controlador/servidor/controladorMenu.php";
	var type= "POST";
	var conId = conId
	var resultado = null;
	var data= {
		evento :'obtenerEstadoPacientes',
		conId:conId,		
		fechaHora:fechaHora,
		perId:perId,
		carId:carId
	};
	$.ajax({
		url:url,
		type:type,
		async: false,
		data:data,
		beforesend:function(){
			console.log("peticion recibida");
		},
		success:function(response){
			window.parent.$("#loader").hide();
			resultado = JSON.parse(response);
				if (resultado[0].estado !== "3") {
				}else{
					return "Ud esta abandonando este sitio, su sesion se finalizara";
				}
		}, // End success
		error:function(error){
			console.log("Error en la peticion");
		} // End error
	});//End ajax
}


//-------------------------------------------------------- ProcesoDesbloqueo --------------------------------------------------------------------
function obtenerValidacionIngresoMuchosPacientes(dato) {
	var url= "../controlador/servidor/controladorMenu.php";
	var type= "POST";
	var centro = centro;
	var dato = dato;
	var resultado = null;
	var data= {
		evento :'cambiarEstadoPacientesFor',
		conId:dato
	};
	$.ajax({
		url:url,
		type:type,
		data:data,
		beforesend:function(){
			console.log("peticion recibida");
		},
		success:function(response){
			resultado = response;

			if (resultado === "0") {
				//alert("Hubo un error al desbloquear al paciente.");
			}else{
				//alert("Se ha desbloqueado exitosamente al paciente");
				//$(location).attr('href',"../../../index.php");
				$(location).attr('href',"../../contenido/vista/dashboard.php");
				
			}//END ELSE

		}, // End success
		error:function(error){
			console.log("Error en la peticion");
		} // End error
	});//End ajax
}