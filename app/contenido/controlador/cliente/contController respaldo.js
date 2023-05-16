function createPacSapu(pacId,rutPac,dniPac,nombrePac,apePat,apeMat,fnac,sexo,nacionalidad,direccion,comuna,telefono,prevision,hta,dm2,epoc,asma,dhc,irc,otros_ec,otros_ec_desc,correo,centro){
	var url= "../controlador/servidor/contenidoController.php";
	var dato = pacId+"_/"+rutPac+"_/"+dniPac+"_/"+nombrePac+"_/"+apePat+"_/"+apeMat+"_/"+fnac+"_/"+sexo+"_/"+nacionalidad+"_/"+direccion+"_/"+comuna+"_/"+telefono+"_/"+prevision+"_/"+correo;
	var type= "POST";
	var resultado = null;
	var data= {
		evento :'crearPaciente',
		pacId:pacId,
		rutPac:rutPac,
		dniPac:dniPac,
		nombrePac:nombrePac,
		apePat:apePat,
		apeMat:apeMat,
		fnac:fnac,
		sexo:sexo,
		nacionalidad:nacionalidad,
		direccion:direccion,
		comuna:comuna,
		telefono:telefono,
		prevision:prevision,
		hta:hta,
		dm2:dm2,
		epoc:epoc,
		asma:asma,
		dhc:dhc,
		irc:irc,
		otros_ec:otros_ec,
		otros_ec_desc:otros_ec_desc,
		correo:correo,
		centro:centro
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
			resultado = response;
			window.parent.$("#loader").hide();
			window.parent.$("#loader").hide();
			if (resultado.sesion === undefined) {
				if (resultado == "" || resultado.data === "0") {
				}else{
					resultado = JSON.parse(response);
					$("#numDau").val("");
					$("#pacId").val("");
					$("#rutPaci").val("");		
					$("#nombrePaci").val("");
					$("#apePati").val("");
					$('select[name=sexoi]').val();
					$("#direccioni").val("");
					$("#dniPaci").val("");
					$("#apeMati").val("");
					$('input[name=fnac]').val("");
					$("#nacionalidadi").val("");
					$('select[name=centroi]').val();
					$("#telefoni").val("");
					$('select[name=previsioni]').val();
					$("#motivoConsulta").val("");
					$("#nombreAcompanante").val("");
					$('select[name=tipoConsulta]').val();
					$('select[name=medioTransporte]').val();
					$('select[name=tipoAccidente]').val();
					$('select[name=lugarAccidente]').val();
					var esVisible = $("#updatePaciente").is(":visible");

					if ( esVisible ===  true) {
						$("#modificarPacienteSapu").hide();
						$("#updatePaciente").hide();					
					}else{
						$("#MostrarDatoPaciente").hide();
						$("#buscarPaciente").hide();
						$("#anadirPaciente").hide();
					}

					$("#IngresarRegistro").show();
					$("#RegistroUrgencia").show();

					var datas = dato.split("_/");
					//IMPRIME EL REGISTRO DEL PACIENTE
					$("#pacId").val(resultado[0].PAC_ID);
					$("#rutPaci").val(datas[1]);
					$("#dniPaci").val(datas[2]);
					$("#nombrePaci").val(datas[3]);
					$("#apePati").val(datas[4]);
					$("#apeMati").val(datas[5]);

					if(datas[6] === "NULL"){
						$('input[name=fnaci]').val("");
					}else{
						$('input[name=fnaci]').val(datas[6]);
					}

					$('input[name=fnaci]').val();
					$('select[name=sexoi]').val(datas[7]);
					$('select[name=nacionalidadi]').val(datas[8]);
					$("#direccioni").val(datas[9]);
					$('select[name=comunai]').val(datas[10]);
					$("#telefoni").val(datas[11]);
					$('select[name=previsioni]').val(datas[12]);
					$("#correoni").val(datas[13]);
					//deshabilita los datos del formulario
					$("#pacId").prop('disabled', true);
					$("#rutPaci").prop('disabled', true);
					$("#dniPaci").prop('disabled', true);
					$("#nombrePaci").prop('disabled', true);
					$("#apePati").prop('disabled', true);
					$("#apeMati").prop('disabled', true);
					$('input[name=fnaci]').prop('disabled', true);
					$('select[name=sexoi]').prop('disabled', true);
					$('select[name=nacionalidadi]').prop('disabled', true);
					$("#direccioni").prop('disabled', true);
					$('select[name=comunai]').prop('disabled', true);
					$("#telefoni").prop('disabled', true);
					$('select[name=previsioni]').prop('disabled', true);
					$("#correoni").prop('disabled', true);
					$("#buscarDatoPaciente").hide();
					$("#crearPaciente").hide();
					$("#crearPacienteSapu").hide();
					$('select[name=centroi]').val(0);
					$('select[name=tipoAccidente]').val(0);
					$('select[name=tipoConsulta]').val(0);
					$('select[name=lugarAccidente]').val(0);
					$('select[name=medioTransporte]').val(0);
				}
			}else{
				valorsesion = resultado.sesion;
			}		
		}, // End success
		error:function(error){
			console.log("Error en la peticion");
		} // End error
	});//End ajax
}

function registrarUrgenciaSapu(pacId,perID,centroi,nombreAcompanante,motivoConsulta,tipoAccidente,tipoConsulta,lugarAccidente,medioTransporte){
	var url= "../controlador/servidor/contenidoController.php";
	var type= "POST";
	var rutPaci = rutPaci;
	var resultado = null;
	var data= {
		evento :'registrarUrgenciaSapu',
		pacId: pacId,
		perID: perID,
		centroi: centroi,
		nombreAcompanante: nombreAcompanante,
		motivoConsulta: motivoConsulta,
		tipoAccidente: tipoAccidente,
		tipoConsulta: tipoConsulta,
		lugarAccidente: lugarAccidente,
		medioTransporte: medioTransporte
	};
	$.ajax({
		url:url,
		type:type,
		async:false,
		data:data,
		beforesend:function(){
			console.log("peticion recibida");
		},
		success:function(response){
			resultado = response;
			window.parent.$("#loader").hide();
			window.parent.$("html,body").animate({ scrollTop: 0 }, 600);
			$("#mensaje").empty();
			if (resultado == "" || resultado.data === "0") {
			}else{
				resultado = JSON.parse(response);
				if (resultado.sesion === undefined) {
					window.parent.$("html,body").animate({ scrollTop: 0 }, 600);
					if (resultado[0].con_id === "TRUE") {
						$("#cargandoPdf").show();
						$('#myModal').modal('hide');
						$("#mensaje").empty();
						$("#CerrarNormal").hide();
					    var texto = "<h3> Se ha ingresado la urgencia..  </h3>";
					    $("#mensaje").append(texto);
						$('#modalValidacion').modal();
						redireccionar();
						var centroTrabajo = window.parent.$("#centroTrabajo").val();
						obtenerRegistroTriadaPaciente(centroTrabajo);
						obtenerPacientesNuevosCreados(centroTrabajo);
					}else{
						$('#myModal').modal('hide');
						$("#mensaje").empty();
						$("#CerrarNormal").show();
					    var texto = "<h3> Hubo un error al ingresar la urgencia ..  </h3>";
					    $("#cargandoPdf").hide();
					    $("#mensaje").append(texto);
						$('#modalValidacion').modal();
					}
				}else{
					valorsesion = resultado.sesion;
				}
			}
		}, // End success
		error:function(error){
			console.log("Error en la peticion");
		} // End error
	});//End ajax
}

function redireccionar() {
	window.setTimeout("cerrarModal()",4000);
}

function cerrarModal(){
	$('#modalValidacion').modal('hide');
	$('#modalValidacion').hide();
}

function buscarPaciente(primApe,segunApe,nombrePaciente,rutPaciente,dniPaciente){
	var url= "../controlador/servidor/contenidoController.php";
	var type= "POST";
	var resultado = null;
	var data= {
		evento :'buscar',
		primApe:primApe,
		segunApe:segunApe,
		nombrePaciente:nombrePaciente,
		rutPaciente:rutPaciente,
		dniPaciente:dniPaciente
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
			$("#mostrarResultadoBusqueda").empty();
			resultado = response;
			window.parent.$("#loader").hide();
			var tabla = "";
			if (resultado == "0" ) {
				tabla = tabla + '<tr>';
					tabla = tabla + '<td colspan = 9> No se han encontrado resultados ..</td>';								
				tabla = tabla + '</tr>';
				$("#mostrarResultadoBusqueda").append(tabla);
			}else{
				resultado = JSON.parse(response);
				if (resultado.sesion === undefined) {
					for(var aux = 0 in resultado){
						var telefono = "";
						var data = resultado[aux].PAC_ID+"_"+resultado[aux].RUT+"_"+resultado[aux].PASAPORTE+"_"+resultado[aux].NOMBRE+"_"+resultado[aux].APELLIDO_PATERNO+"_"+resultado[aux].APELLIDO_MATERNO+"_"+resultado[aux].FECHA_NACIMIENTO+"_"+resultado[aux].SEXO+"_"+resultado[aux].NACIONALIDAD+"_"+resultado[aux].COMUNA+"_"+resultado[aux].DIRECCION+"_"+resultado[aux].PREVISION+"_"+resultado[aux].HTA+"_"+resultado[aux].DM2+"_"+resultado[aux].EPOC+"_"+resultado[aux].ASMA+"_"+resultado[aux].IRC+"_"+resultado[aux].DHC+"_"+resultado[aux].OTROS_EC+"_"+resultado[aux].OTROS_EC_DESC+"_"+resultado[aux].TELEFONO+"_"+resultado[aux].CORREO;
						tabla = tabla + '<tr>';
						tabla = tabla +'<td class="check hidden-xs"><label for="idButton'+aux+'" class="radio-inline botonRadio">';
						tabla = tabla +'<input name="confirmar" class="textos" type="radio" id="idButton'+aux+'"  value="'+data+'">';
						tabla = tabla +'<span></span></label> </td>';
						tabla = tabla + '<td> '+ resultado[aux].APELLIDO_PATERNO +'</td>';
						tabla = tabla + '<td> '+ resultado[aux].APELLIDO_MATERNO +'</td>';
						tabla = tabla + '<td> '+ resultado[aux].NOMBRE +'</td>';
						tabla = tabla + '<td> NHC</td>';

						if(resultado[aux].RUT !== ""){
							tabla = tabla + '<td> '+ resultado[aux].RUT +'</td>';
						}else{
							tabla = tabla + '<td> SIN DOCUMENTO </td>';
						}
						tabla = tabla + '<td> '+ resultado[aux].FECHA_NACIMIENTO +'</td>';
						tabla = tabla + '</tr>';
					}//END FOR

					$("#mostrarResultadoBusqueda").append(tabla);
					$(".botonRadio").click(function(){
						var dato = $(".textos",this).val();
						if (dato === "") {
							alert("Error al cargar el Formulario");
						}else{
							$("#buscarDatoPaciente").hide();
							$("#MostrarDatoPaciente").hide();
							$("#buscarPaciente").hide();
							$("#anadirPaciente").hide();
							$("#IngresarRegistro").hide();
							$("#RegistroUrgencia").hide();
							$("#crearPacienteSapu").hide();					
							$("#updatePaciente").show();
							$("#modificarPacienteSapu").show();
							$("#rutPaces").val("");
							$("#nombrePaces").val("");
							$("#apePates").val("");
							$("#sexoes").val("");
							$("#direcciones").val("");
							$("#dniPaces").val("");
							$("#apeMates").val("");
							$("#telefonoes").val("");
							$("input[name=fnaces]").val("");
							$("select[name=nacionalidadies]").val("");
							$("select[name=comunaies]").val("");
							$("select[name=previsiones]").val("");
							var data = dato.split("_");
							var nada = "";
							//IMPRIME EL REGISTRO DEL PACIENTE
							$("#pacId").val(data[0]);
							if (data[1] === "") {$("#rutPaces").val(nada); }else{ $("#rutPaces").val(data[1]);}
							if (data[2] === "") {$("#dniPaces").val(nada); }else{ $("#dniPaces").val(data[2]);}
							$("#nombrePaces").val(data[3]);
							$("#apePates").val(data[4]);
							$("#apeMates").val(data[5]);
							$("input[name=fnaces]").val(data[6]);
							$("select[name=sexoes]").val(data[7]);

							if (data[8] === "") {
								$("select[name=nacionalidadies]").val(99);
							}else{
								$("select[name=nacionalidadies]").val(data[8]);	
							}
							
							$("select[name=comunaies]").val(data[9]);
							$("#direcciones").val(data[10]);
							$("select[name=previsiones]").val(data[11]);
							$("#HTA").val(data[12]);
							$("#DM").val(data[13]);
							$("#EPOC").val(data[14]);
							$("#ASMA").val(data[15]);
							$("#IRC").val(data[16]);
							$("#DHC").val(data[17]);
							$("#OTRASEC").val(data[18]);
							$("#OTRASECDESC").val(data[19]);
							$("#telefonoes").val(data[20]);
							$("#correoes").val(data[21]);
							$("#rutPaces").prop('disabled', true);
							$("#nombrePaces").prop('disabled', true);
							$("#apePates").prop('disabled', true);
							$("#sexoes").prop('disabled', true);							
							$("#dniPaces").prop('disabled', true);
							$("#apeMates").prop('disabled', true);
						}
					});	//END SELECT BOX
				}else{
					valorsesion = resultado.sesion;
				}
			}// END ELSE
			window.parent.$("html,body").animate({ scrollTop: 0 }, 600);
		}, // End success
		error:function(error){
			console.log("Error en la peticion");
		} // End error
	});//End ajax
}

/******************************************************/
	function cargarPrevision(){
		var url= "../controlador/servidor/contenidoController.php";
		var type= "POST";
		var resultado = null;
		var data= {
			evento :'cargarPrevision'
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
				resultado = JSON.parse(response);
				if (resultado.sesion === undefined) {
					var select  = $('select[name=prevision]').val();
					var select2  = $('select[name=previsioni]').val();
					var select3 = $('select[name=previsiones]').val();
						if (select === "Seleccione ...") {
							$('#prevision').empty();
							$('#prevision').append("<option value= '0' selected=''> Seleccione ...</option>");
							for(var aux = 0 in resultado){
								if (resultado[aux].NOMBRE === null || resultado[aux].NOMBRE === "null" ||resultado[aux].NOMBRE === "undefined"
								|| resultado[aux].NOMBRE === undefined || resultado[aux].NOMBRE === "" ) {					 	
									console.log("Error de carga");
								}else{
									$('#prevision').append("<option value = " +resultado[aux].CODIGO+">"+resultado[aux].NOMBRE+"</option>");
								}
							}
						}else{
							$('#prevision').empty();
							$('#prevision').append("<option value= '0' selected=''> Seleccione ...</option>");
							for(var aux = 0 in resultado){
								if (resultado[aux].NOMBRE === null || resultado[aux].NOMBRE === "null" ||resultado[aux].NOMBRE === "undefined"
								|| resultado[aux].NOMBRE === undefined || resultado[aux].NOMBRE === "" ) {
									console.log("Error de carga");
								}else{
									$('#prevision').append("<option value = " +resultado[aux].CODIGO+">"+resultado[aux].NOMBRE+"</option>");
								}
							}
						}

						if (select2 === "0") {
							$('#previsioni').empty();
							$('#previsioni').append("<option value= '0' selected=''> Seleccione ...</option>");
							for(var aux = 0 in resultado){
								if (resultado[aux].NOMBRE === null || resultado[aux].NOMBRE === "null" ||resultado[aux].NOMBRE === "undefined"
								|| resultado[aux].NOMBRE === undefined || resultado[aux].NOMBRE === "" ) {					 	
									console.log("Error de carga");
								}else{
									$('#previsioni').append("<option value = " +resultado[aux].CODIGO+">"+resultado[aux].NOMBRE+"</option>");
								}
							}
						}else{
							$('#previsioni').empty();
							$('#previsioni').append("<option value= '0' selected=''> Seleccione ...</option>");
							for(var aux = 0 in resultado){
								if (resultado[aux].NOMBRE === null || resultado[aux].NOMBRE === "null" ||resultado[aux].NOMBRE === "undefined"
								|| resultado[aux].NOMBRE === undefined || resultado[aux].NOMBRE === "" ) {
									console.log("Error de carga");
								}else{
									$('#previsioni').append("<option value = " +resultado[aux].CODIGO+">"+resultado[aux].NOMBRE+"</option>");
								}
							}
						}

						if (select3 === "0") {
							$('#previsiones').empty();
							$('#previsiones').append("<option value= '0' selected=''> Seleccione ...</option>");
							for(var aux = 0 in resultado){
								if (resultado[aux].NOMBRE === null || resultado[aux].NOMBRE === "null" ||resultado[aux].NOMBRE === "undefined"
								|| resultado[aux].NOMBRE === undefined || resultado[aux].NOMBRE === "" ) {					 	
									console.log("Error de carga");
								}else{
									$('#previsiones').append("<option value = " +resultado[aux].CODIGO+">"+resultado[aux].NOMBRE+"</option>");
								}
							}
						}else{
							$('#previsiones').empty();
							$('#previsiones').append("<option value= '0' selected=''> Seleccione ...</option>");
							for(var aux = 0 in resultado){
								if (resultado[aux].NOMBRE === null || resultado[aux].NOMBRE === "null" ||resultado[aux].NOMBRE === "undefined"
								|| resultado[aux].NOMBRE === undefined || resultado[aux].NOMBRE === "" ) {
									console.log("Error de carga");
								}else{
									$('#previsiones').append("<option value = " +resultado[aux].CODIGO+">"+resultado[aux].NOMBRE+"</option>");
								}
							}
						}
				}else{
					valorsesion = resultado.sesion;
				}
			}, // End success
			error:function(error){
				console.log("Error en la peticion");
			} // End error
		});//End ajax
	}

	function cargarSexo(){
		var url= "../controlador/servidor/contenidoController.php";
		var type= "POST";
		var resultado = null;
		var data= {
			evento :'cargarSexo'
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
				resultado = JSON.parse(response);
				if (resultado.sesion === undefined) {
					var select  = $('select[name=sexo]').val();
					var select2  = $('select[name=sexoi]').val();
					var select3  = $('select[name=sexoes]').val();

						if (select === "Seleccione ...") {
							$('#sexo').empty();
							$('#sexo').append("<option value= '0' selected=''> Seleccione ...</option>");
							for(var aux = 0 in resultado){
								if (resultado[aux].NOMBRE === null || resultado[aux].NOMBRE === "null" ||resultado[aux].NOMBRE === "undefined"
								|| resultado[aux].NOMBRE === undefined || resultado[aux].NOMBRE === "" ) {					 	
									console.log("Error de carga");
								}else{
									$('#sexo').append("<option value = " +resultado[aux].CODIGO+">"+resultado[aux].NOMBRE+"</option>");
								}
							}
						}else{
							$('#sexo').empty();
							$('#sexo').append("<option value= '0' selected=''> Seleccione ...</option>");
							for(var aux = 0 in resultado){
								if (resultado[aux].NOMBRE === null || resultado[aux].NOMBRE === "null" ||resultado[aux].NOMBRE === "undefined"
								|| resultado[aux].NOMBRE === undefined || resultado[aux].NOMBRE === "" ) {
									console.log("Error de carga");
								}else{
									$('#sexo').append("<option value = " +resultado[aux].CODIGO+">"+resultado[aux].NOMBRE+"</option>");
								}
							}
						}

						
						if (select2 === "0") {
							$('#sexoi').empty();
							$('#sexoi').append("<option value= '0' selected=''> Seleccione ...</option>");
							for(var aux = 0 in resultado){
								if (resultado[aux].NOMBRE === null || resultado[aux].NOMBRE === "null" ||resultado[aux].NOMBRE === "undefined"
								|| resultado[aux].NOMBRE === undefined || resultado[aux].NOMBRE === "" ) {					 	
									console.log("Error de carga");
								}else{
									$('#sexoi').append("<option value = " +resultado[aux].CODIGO+">"+resultado[aux].NOMBRE+"</option>");
								}
							}
						}else{
							$('#sexoi').empty();
							$('#sexoi').append("<option value= '0' selected=''> Seleccione ...</option>");
							for(var aux = 0 in resultado){
								if (resultado[aux].NOMBRE === null || resultado[aux].NOMBRE === "null" ||resultado[aux].NOMBRE === "undefined"
								|| resultado[aux].NOMBRE === undefined || resultado[aux].NOMBRE === "" ) {
									console.log("Error de carga");
								}else{
									$('#sexoi').append("<option value = " +resultado[aux].CODIGO+">"+resultado[aux].NOMBRE+"</option>");
								}
							}
						}

						if (select3 === "0") {
							$('#sexoes').empty();
							$('#sexoes').append("<option value= '0' selected=''> Seleccione ...</option>");
							for(var aux = 0 in resultado){
								if (resultado[aux].NOMBRE === null || resultado[aux].NOMBRE === "null" ||resultado[aux].NOMBRE === "undefined"
								|| resultado[aux].NOMBRE === undefined || resultado[aux].NOMBRE === "" ) {					 	
									console.log("Error de carga");
								}else{
									$('#sexoes').append("<option value = " +resultado[aux].CODIGO+">"+resultado[aux].NOMBRE+"</option>");
								}
							}
						}else{
							$('#sexoes').empty();
							$('#sexoes').append("<option value= '0' selected=''> Seleccione ...</option>");
							for(var aux = 0 in resultado){
								if (resultado[aux].NOMBRE === null || resultado[aux].NOMBRE === "null" ||resultado[aux].NOMBRE === "undefined"
								|| resultado[aux].NOMBRE === undefined || resultado[aux].NOMBRE === "" ) {
									console.log("Error de carga");
								}else{
									$('#sexoes').append("<option value = " +resultado[aux].CODIGO+">"+resultado[aux].NOMBRE+"</option>");
								}
							}
						}
				}else{
					valorsesion = resultado.sesion;
				}
			}, // End success
			error:function(error){
				console.log("Error en la peticion");
			} // End error
		});//End ajax
	}


	function cargarTipoAccidente(){
		var url= "../controlador/servidor/contenidoController.php";
		var type= "POST";
		var resultado = null;
		var data= {
			evento :'cargarTipoAccidente'
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
				resultado = JSON.parse(response);

				if (resultado.sesion === undefined) {
					var select  = $('select[name=tipoAccidente]').val();

						if (select === "Seleccione ...") {
							$('#tipoAccidente').empty();
							$('#tipoAccidente').append("<option value= '0' selected=''> Seleccione ...</option>");
							for(var aux = 0 in resultado){
								if (resultado[aux].NOMBRE === null || resultado[aux].NOMBRE === "null" ||resultado[aux].NOMBRE === "undefined"
								|| resultado[aux].NOMBRE === undefined || resultado[aux].NOMBRE === "" ) {					 	
									console.log("Error de carga");
								}else{
									$('#tipoAccidente').append("<option value = " +resultado[aux].CODIGO+">"+resultado[aux].NOMBRE+"</option>");
								}
							}
						}else{
							$('#tipoAccidente').empty();
							$('#tipoAccidente').append("<option value= '0' selected=''> Seleccione ...</option>");
							for(var aux = 0 in resultado){
								if (resultado[aux].NOMBRE === null || resultado[aux].NOMBRE === "null" ||resultado[aux].NOMBRE === "undefined"
								|| resultado[aux].NOMBRE === undefined || resultado[aux].NOMBRE === "" ) {
									console.log("Error de carga");
								}else{
									$('#tipoAccidente').append("<option value = " +resultado[aux].CODIGO+">"+resultado[aux].NOMBRE+"</option>");
								}
							}
						}
				}else{
					valorsesion = resultado.sesion;
				}
					
				
			}, // End success
			error:function(error){
				console.log("Error en la peticion");
			} // End error
		});//End ajax
	}

	function cargarLugarAccidente(){
		var url= "../controlador/servidor/contenidoController.php";
		var type= "POST";
		var resultado = null;
		var data= {
			evento :'cargarLugarAccidente'
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
				resultado = JSON.parse(response);
				if (resultado.sesion === undefined) {
					var select  = $('select[name=lugarAccidente]').val();
					if (select === "Seleccione ...") {
						$('#lugarAccidente').empty();
						$('#lugarAccidente').append("<option value= '0' selected=''> Seleccione ...</option>");
						for(var aux = 0 in resultado){
							if (resultado[aux].NOMBRE === null || resultado[aux].NOMBRE === "null" ||resultado[aux].NOMBRE === "undefined"
							|| resultado[aux].NOMBRE === undefined || resultado[aux].NOMBRE === "" ) {					 	
								console.log("Error de carga");
							}else{
								$('#lugarAccidente').append("<option value = " +resultado[aux].CODIGO+">"+resultado[aux].NOMBRE+"</option>");
							}
						}
					}else{
						$('#lugarAccidente').empty();
						$('#lugarAccidente').append("<option value= '0' selected=''> Seleccione ...</option>");
						for(var aux = 0 in resultado){
							if (resultado[aux].NOMBRE === null || resultado[aux].NOMBRE === "null" ||resultado[aux].NOMBRE === "undefined"
							|| resultado[aux].NOMBRE === undefined || resultado[aux].NOMBRE === "" ) {
								console.log("Error de carga");
							}else{
								$('#lugarAccidente').append("<option value = " +resultado[aux].CODIGO+">"+resultado[aux].NOMBRE+"</option>");
							}
						}
					}
				}else{
					valorsesion = resultado.sesion;
				}
			}, // End success
			error:function(error){
				console.log("Error en la peticion");
			} // End error
		});//End ajax
	}

	function cargarMedioTransporte(){
		var url= "../controlador/servidor/contenidoController.php";
		var type= "POST";
		var resultado = null;
		var data= {
			evento :'cargarMedioTransporte'
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
				resultado = JSON.parse(response);
				if (resultado.sesion === undefined) {
					var select  = $('select[name=medioTransporte]').val();
					if (select === "Seleccione ...") {
						$('#medioTransporte').empty();
						$('#medioTransporte').append("<option value= '0' selected=''> Seleccione ...</option>");
						for(var aux = 0 in resultado){
							if (resultado[aux].NOMBRE === null || resultado[aux].NOMBRE === "null" ||resultado[aux].NOMBRE === "undefined"
							|| resultado[aux].NOMBRE === undefined || resultado[aux].NOMBRE === "" ) {					 	
								console.log("Error de carga");
							}else{
								$('#medioTransporte').append("<option value = " +resultado[aux].CODIGO+">"+resultado[aux].NOMBRE+"</option>");
							}
						}
					}else{
						$('#medioTransporte').empty();
						$('#medioTransporte').append("<option value= '0' selected=''> Seleccione ...</option>");
						for(var aux = 0 in resultado){
							if (resultado[aux].NOMBRE === null || resultado[aux].NOMBRE === "null" ||resultado[aux].NOMBRE === "undefined"
							|| resultado[aux].NOMBRE === undefined || resultado[aux].NOMBRE === "" ) {
								console.log("Error de carga");
							}else{
								$('#medioTransporte').append("<option value = " +resultado[aux].CODIGO+">"+resultado[aux].NOMBRE+"</option>");
							}
						}
					}
				}else{
					valorsesion = resultado.sesion;
				}
			}, // End success
			error:function(error){
				console.log("Error en la peticion");
			} // End error
		});//End ajax
	}

	function cargarTipoConsulta(){
		var url= "../controlador/servidor/contenidoController.php";
		var type= "POST";
		var resultado = null;
		var data= {
			evento :'cargarTipoConsulta'
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
				resultado = JSON.parse(response);
				if (resultado.sesion === undefined) {
					var select  = $('select[name=tipoConsulta]').val();

					if (select === "Seleccione ...") {
						$('#tipoConsulta').empty();
						$('#tipoConsulta').append("<option value= '0' selected=''> Seleccione ...</option>");
						for(var aux = 0 in resultado){
							if (resultado[aux].NOMBRE === null || resultado[aux].NOMBRE === "null" ||resultado[aux].NOMBRE === "undefined"
							|| resultado[aux].NOMBRE === undefined || resultado[aux].NOMBRE === "" ) {					 	
								console.log("Error de carga");
							}else{
								$('#tipoConsulta').append("<option value = " +resultado[aux].CODIGO+">"+resultado[aux].NOMBRE+"</option>");
							}
						}
					}else{
						$('#tipoConsulta').empty();
						$('#tipoConsulta').append("<option value= '0' selected=''> Seleccione ...</option>");
						for(var aux = 0 in resultado){
							if (resultado[aux].NOMBRE === null || resultado[aux].NOMBRE === "null" ||resultado[aux].NOMBRE === "undefined"
							|| resultado[aux].NOMBRE === undefined || resultado[aux].NOMBRE === "" ) {
								console.log("Error de carga");
							}else{
								$('#tipoConsulta').append("<option value = " +resultado[aux].CODIGO+">"+resultado[aux].NOMBRE+"</option>");
							}
						}
					}
				}else{
					valorsesion = resultado.sesion;
				}
			}, // End success
			error:function(error){
				console.log("Error en la peticion");
			} // End error
		});//End ajax
	}

	function cargarCentros(centroTrabajo){
		var url= "../controlador/servidor/contenidoController.php";
		var type= "POST";
		centroTrabajo = centroTrabajo;
		var resultado = null;
		var data= {
			evento :'cargarCentros'
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
				resultado = JSON.parse(response);
				$("#centroi").empty();
				if (resultado.sesion === undefined) {
					for(var aux = 0 in resultado){
						if (resultado[aux].CODIGO === centroTrabajo) {
							$('#centroi').append(resultado[aux].CODIGO);
						}
					}
				}else{
					valorsesion = resultado.sesion;
				}
			}, // End success
			error:function(error){
				console.log("Error en la peticion");
			} // End error
		});//End ajax
	}

	function cargarNacionalidad(){
		var url= "../controlador/servidor/contenidoController.php";
		var type= "POST";
		var resultado = null;
		var data= {
			evento :'cargarNacionalidad'
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
				resultado = JSON.parse(response);
				if (resultado.sesion === undefined) {
					var select  = $('select[name=nacionalidad]').val();
					var selectDos  = $('select[name=nacionalidadi]').val();
					var selectTres  = $('select[name=nacionalidadies]').val();
					if (select === "Seleccione ...") {
						$('#nacionalidad').empty();
						$('#nacionalidad').append("<option value= '0' selected=''> Seleccione ...</option>");
						for(var aux = 0 in resultado){
							if (resultado[aux].NOMBRE === null || resultado[aux].NOMBRE === "null" ||resultado[aux].NOMBRE === "undefined"
							|| resultado[aux].NOMBRE === undefined || resultado[aux].NOMBRE === "" ) {					 	
								console.log("Error de carga");
							}else{
								$('#nacionalidad').append("<option value = " +resultado[aux].CODIGO+">"+resultado[aux].NOMBRE+"</option>");
							}
						}
					}else{
						$('#nacionalidad').empty();
						$('#nacionalidad').append("<option value= '0' selected=''> Seleccione ...</option>");
						for(var aux = 0 in resultado){
							if (resultado[aux].NOMBRE === null || resultado[aux].NOMBRE === "null" ||resultado[aux].NOMBRE === "undefined"
							|| resultado[aux].NOMBRE === undefined || resultado[aux].NOMBRE === "" ) {
								console.log("Error de carga");
							}else{
								$('#nacionalidad').append("<option value = " +resultado[aux].CODIGO+">"+resultado[aux].NOMBRE+"</option>");
							}
						}
					}
					$('.js-example-basic-single').select2();

					if (selectDos === "Seleccione ...") {
						$('#nacionalidadi').empty();
						$('#nacionalidadi').append("<option value= '0' selected=''> Seleccione ...</option>");
						for(var aux = 0 in resultado){
							if (resultado[aux].NOMBRE === null || resultado[aux].NOMBRE === "null" ||resultado[aux].NOMBRE === "undefined"
							|| resultado[aux].NOMBRE === undefined || resultado[aux].NOMBRE === "" ) {					 	
								console.log("Error de carga");
							}else{
								$('#nacionalidadi').append("<option value = " +resultado[aux].CODIGO+">"+resultado[aux].NOMBRE+"</option>");
							}
						}
					}else{
						$('#nacionalidadi').empty();
						$('#nacionalidadi').append("<option value= '0' selected=''> Seleccione ...</option>");
						for(var aux = 0 in resultado){
							if (resultado[aux].NOMBRE === null || resultado[aux].NOMBRE === "null" ||resultado[aux].NOMBRE === "undefined"
							|| resultado[aux].NOMBRE === undefined || resultado[aux].NOMBRE === "" ) {
								console.log("Error de carga");
							}else{
								$('#nacionalidadi').append("<option value = " +resultado[aux].CODIGO+">"+resultado[aux].NOMBRE+"</option>");
							}
						}
					}				

					if (selectTres === "Seleccione ...") {
						$('#nacionalidadies').empty();
						$('#nacionalidadies').append("<option value= '0' selected=''> Seleccione ...</option>");
						for(var aux = 0 in resultado){
							if (resultado[aux].NOMBRE === null || resultado[aux].NOMBRE === "null" ||resultado[aux].NOMBRE === "undefined"
							|| resultado[aux].NOMBRE === undefined || resultado[aux].NOMBRE === "" ) {					 	
								console.log("Error de carga");
							}else{
								$('#nacionalidadies').append("<option value = " +resultado[aux].CODIGO+">"+resultado[aux].NOMBRE+"</option>");
							}
						}
					}else{
						$('#nacionalidadies').empty();
						$('#nacionalidadies').append("<option value= '0' selected=''> Seleccione ...</option>");
						for(var aux = 0 in resultado){
							if (resultado[aux].NOMBRE === null || resultado[aux].NOMBRE === "null" ||resultado[aux].NOMBRE === "undefined"
							|| resultado[aux].NOMBRE === undefined || resultado[aux].NOMBRE === "" ) {
								console.log("Error de carga");
							}else{
								$('#nacionalidadies').append("<option value = " +resultado[aux].CODIGO+">"+resultado[aux].NOMBRE+"</option>");
							}
						}
					}
				}else{
					valorsesion = resultado.sesion;
				}
			}, // End success
			error:function(error){
				console.log("Error en la peticion");
			} // End error
		});//End ajax
	}

	function cargarComunas(){
		var url= "../controlador/servidor/contenidoController.php";
		var type= "POST";
		var resultado = null;
		var data= {
			evento :'cargarComunas'
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
				resultado = JSON.parse(response);
				if (resultado.sesion === undefined) {
					var select  = $('select[name=comuna]').val();
					var select2  = $('select[name=comunai]').val();
					var select3  = $('select[name=comunaies]').val();
					if (select === "Seleccione ...") {
						$('#comuna').empty();
						$('#comuna').append("<option value= '0' selected=''> Seleccione ...</option>");
						for(var aux = 0 in resultado){
							if (resultado[aux].NOMBRE === null || resultado[aux].NOMBRE === "null" ||resultado[aux].NOMBRE === "undefined"
							|| resultado[aux].NOMBRE === undefined || resultado[aux].NOMBRE === "" ) {
								console.log("Error de carga");
							}else{
								$('#comuna').append("<option value = " +resultado[aux].CODIGO+">"+resultado[aux].material+"</option>");
							}
						}
					}else{
						$('#comuna').empty();
						$('#comuna').append("<option value= '0' selected=''> Seleccione ...</option>");
						for(var aux = 0 in resultado){
							if (resultado[aux].NOMBRE === null || resultado[aux].NOMBRE === "null" ||resultado[aux].NOMBRE === "undefined"
							|| resultado[aux].NOMBRE === undefined || resultado[aux].NOMBRE === "" ) {
								console.log("Error de carga");
							}else{
								$('#comuna').append("<option value = " +resultado[aux].CODIGO+">"+resultado[aux].NOMBRE+"</option>");
							}
						}
					}
					$('.js-example-basic-single-Dos').select2();

					if (select2 === "Seleccione ...") {
						$('#comunai').empty();
						$('#comunai').append("<option value= '0' selected=''> Seleccione ...</option>");
						for(var aux = 0 in resultado){
							if (resultado[aux].NOMBRE === null || resultado[aux].NOMBRE === "null" ||resultado[aux].NOMBRE === "undefined"
							|| resultado[aux].NOMBRE === undefined || resultado[aux].NOMBRE === "" ) {
								console.log("Error de carga");
							}else{
								$('#comunai').append("<option value = " +resultado[aux].CODIGO+">"+resultado[aux].material+"</option>");
							}
						}
					}else{
						$('#comunai').empty();
						$('#comunai').append("<option value= '0' selected=''> Seleccione ...</option>");
						for(var aux = 0 in resultado){
							if (resultado[aux].NOMBRE === null || resultado[aux].NOMBRE === "null" ||resultado[aux].NOMBRE === "undefined"
							|| resultado[aux].NOMBRE === undefined || resultado[aux].NOMBRE === "" ) {
								console.log("Error de carga");
							}else{
								$('#comunai').append("<option value = " +resultado[aux].CODIGO+">"+resultado[aux].NOMBRE+"</option>");
							}
						}
					}
					
					if (select3 === "Seleccione ...") {
						$('#comunaies').empty();
						$('#comunaies').append("<option value= '0' selected=''> Seleccione ...</option>");
						for(var aux = 0 in resultado){
							if (resultado[aux].NOMBRE === null || resultado[aux].NOMBRE === "null" ||resultado[aux].NOMBRE === "undefined"
							|| resultado[aux].NOMBRE === undefined || resultado[aux].NOMBRE === "" ) {
								console.log("Error de carga");
							}else{
								$('#comunaies').append("<option value = " +resultado[aux].CODIGO+">"+resultado[aux].material+"</option>");
							}
						}
					}else{
						$('#comunaies').empty();
						$('#comunaies').append("<option value= '0' selected=''> Seleccione ...</option>");
						for(var aux = 0 in resultado){
							if (resultado[aux].NOMBRE === null || resultado[aux].NOMBRE === "null" ||resultado[aux].NOMBRE === "undefined"
							|| resultado[aux].NOMBRE === undefined || resultado[aux].NOMBRE === "" ) {
								console.log("Error de carga");
							}else{
								$('#comunaies').append("<option value = " +resultado[aux].CODIGO+">"+resultado[aux].NOMBRE+"</option>");
							}
						}
					}
				}else{
					valorsesion = resultado.sesion;
				}
			}, // End success
			error:function(error){
				console.log("Error en la peticion");
			} // End error
		});//End ajax
	}

	function FinalizarSesion(){
		alert('Su sesion fue cerrada por inactividad en los ultimos 45 minutos.');
		window.setTimeout(function () { 
        	window.top.location.href= '../../../index.php';
        }, 5000);
	}
/******************************************************/

//Mostrar Paciente que se ha registrado
function obtenerPacientesNuevosCreados(centroTrabajo){
	var url= "../controlador/servidor/contenidoController.php";
	var type= "POST";
	var rutPaci = rutPaci;
	var resultado = null;
	//$("#myTable").trigger("destroy");
	var data= {
		evento :'obtenerRegistroIngresoPac',
		centroTrabajo:centroTrabajo
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
			resultado = response;
			window.parent.$("#loader").hide();
			$("#contentTab").show();
			var tabla = "";
			$("#resultRegistradas").empty();
			if(resultado === "0" || resultado === 0){
				var cantidad = 0;
                $("#cantRegistradas").empty();
			    $("#cantRegistradas").append(cantidad);
				tabla = tabla + '<tr>';
					tabla = tabla + '<td colspan = 12> No se han encontrado resultados ..</td>';
				tabla = tabla + '</tr>';
				$("#resultRegistradas").append(tabla);
				window.parent.$("#loader").hide();
			}else{
				resultado = JSON.parse(response);
				if (resultado.sesion === undefined) {
					$("#cantRegistradas").empty();
				    $("#cantRegistradas").append(resultado[0].cantidad);
				    var i= 1;
			    	for(var aux = 0 in resultado){
						tabla = tabla + '<tr>';
						tabla = tabla +'<td class="check hidden-xs">'+i+' </td>';
						tabla = tabla + '<td> <input type = "hidden" name= "conf" class="Sele">'+ resultado[aux].fecha +'</td>';

						if(resultado[aux].rut !== "-" && resultado[aux].rut !== ""){
							tabla = tabla + '<td> <input type = "hidden" name= "conf" class="Sele">'+ resultado[aux].rut +'</td>';
						}else{
							tabla = tabla + '<td> <input type = "hidden" name= "conf" class="Sele"> SIN DOCUMENTO </td>';
						}

						tabla = tabla + '<td> <input type = "hidden" name= "conf" class="Sele">'+ resultado[aux].paciente +'</td>';

						if (resultado[aux].fechaNac === "") {
							tabla = tabla + '<td> <input type = "hidden" name= "conf" class="Sele"> - </td>';							
						}else{
							tabla = tabla + '<td> <input type = "hidden" name= "conf" class="Sele">'+ resultado[aux].fechaNac +'</td>';
						}

						if (resultado[aux].edad === "" || resultado[aux].edad === "NULL") {
							tabla = tabla + '<td> <input type = "hidden" name= "conf" class="Sele"> - </td>';							
						}else{
							tabla = tabla + '<td> <input type = "hidden" name= "conf" class="Sele">'+ resultado[aux].edad +'</td>';
						}

						if (resultado[aux].sexo === "Femenino") {
							tabla = tabla +'<td class="check hidden-xs"><input type = "hidden" name= "conf" class="Seleccion">';
							tabla = tabla +'<img src="../../../lib/images/woman.png" style="display: block;margin-left: auto;margin-right: auto;">';
							tabla = tabla +'</td>';
						}else{
							tabla = tabla +'<td class="check hidden-xs"><input type = "hidden" name= "conf" class="Seleccion">';
							tabla = tabla +'<img src="../../../lib/images/men.png" style="display: block;margin-left: auto;margin-right: auto;">';
							tabla = tabla +'</td>';
						}
						tabla = tabla + '<td> <input type = "hidden" name= "conf" class="Sele">'+ resultado[aux].centro +'</td>';					
						tabla = tabla + '<td> <input type = "hidden" name= "conf" class="Sele">'+ resultado[aux].nacionalidad +'</td>';
						tabla = tabla + '<td> <input type = "hidden" name= "conf" class="Sele">'+ resultado[aux].comuna +'</td>';
						tabla = tabla + '<td> <input type = "hidden" name= "conf" class="Sele">'+ resultado[aux].prevision +'</td>';
						tabla = tabla + '<td> <input type = "hidden" name= "conf" class="Sele">'+ resultado[aux].firma +'</td>';
						tabla = tabla + '</tr>';
						i++;
					}
						$("#resultRegistradas").append(tabla);
						//$("#myTable").tablesorter();
						//window.parent.$("html,body").animate({ scrollTop: 0 }, 600);
						window.parent.$("#loader").hide();
				}else{
					valorsesion = resultado.sesion;
				}
			}//END ELSE
		}, // End success
		error:function(error){
			console.log("Error en la peticion");
		} // End error
	});//End ajax
}

//Mostrar Paciente listo Para Triage
function obtenerRegistroTriadaPaciente(centroTrabajo){
	var url= "../controlador/servidor/contenidoController.php";
	var type= "POST";
	var rutPaci = rutPaci;
	var resultado = null;
	var data= {
		evento :'obtenerRegistroTriage',
		centroTrabajo:centroTrabajo
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
			resultado = response;
			window.parent.$("#loader").hide();
			$("#resultTriadas").empty();
			$("#CantidadTriadas").empty();
			var tabla = "";
			var cantidad = 0;

			//CORREGIR
			if (resultado === "" || resultado === "[]_0" || resultado.length == 0 ) {
				$("#resultTriadas").empty();
				tabla = tabla + '<tr>';
					tabla = tabla + '<td colspan = 12> No se han encontrado resultados ..</td>';								
				tabla = tabla + '</tr>';
				$("#resultTriadas").append(tabla);
			}else{
				resultado = JSON.parse(response);
				if (resultado.sesion === undefined) {
					$("#contentTab").show();
					if(resultado === "0" || resultado === 0 || resultado === 0){
					 	var cantidad = 0;
	                    $("#CantidadTriadas").empty();
					    $("#CantidadTriadas").append(cantidad);
					    $("#resultTriadas").empty();
						tabla = tabla + '<tr>';
							tabla = tabla + '<td colspan = 12> No se han encontrado resultados ..</td>';								
						tabla = tabla + '</tr>';
	                }else{
	                   	resultado = JSON.parse(response);
					    $("#CantidadTriadas").empty();
					    cantidad= resultado[0].cantidad;
					    $("#CantidadTriadas").append(cantidad);
					    var i =1;
					    for(var aux = 0 in resultado){
							var dato = resultado[aux].con_id;
							tabla = tabla + '<tr>';
							tabla = tabla +'<td class="check hidden-xs">'+i+' </td>';
							tabla = tabla + '<td> <a class="most" style="cursor:pointer;" id="idRedirec'+aux+'"> <input type = "hidden" name= "conf" class="Seleccion" value="'+dato+'">'+ resultado[aux].fecha +'</a></td>';

							if(resultado[aux].rut !== "-" && resultado[aux].rut !== ""){
								tabla = tabla + '<td> <a class="most" style="cursor:pointer;" id="idRedirec'+aux+'"> <input type = "hidden" name= "conf" class="Seleccion" value="'+dato+'">'+ resultado[aux].rut +'</a></td>';
							}else{
								tabla = tabla + '<td> <a class="most" style="cursor:pointer;" id="idRedirec'+aux+'"> <input type = "hidden" name= "conf" class="Seleccion" value="'+dato+'"> SIN DOCUMENTO </a></td>';
							}
							
							tabla = tabla + '<td> <a class="most" style="cursor:pointer;" id="idRedirec'+aux+'"> <input type = "hidden" name= "conf" class="Seleccion" value="'+dato+'">'+ resultado[aux].paciente +'</a></td>';
							if (resultado[aux].edad === "" || resultado[aux].edad === "NULL") {
								tabla = tabla + '<td> <a class="most" style="cursor:pointer;" id="idRedirec'+aux+'"> <input type = "hidden" name= "conf" class="Seleccion" value="'+dato+'"> - </a></td>';
							}else{
								tabla = tabla + '<td> <a class="most" style="cursor:pointer;" id="idRedirec'+aux+'"> <input type = "hidden" name= "conf" class="Seleccion" value="'+dato+'">'+ resultado[aux].edad +'</a></td>';
							}

							if (resultado[aux].sexo === "Femenino") {
								tabla = tabla +'<td class="check hidden-xs"><a class="most" style="cursor:pointer;" id="idRedirec'+aux+'"> <input type = "hidden" name= "conf" class="Seleccion" value="'+dato+'">';
								tabla = tabla +'<img src="../../../lib/images/woman.png" style="display: block;margin-left: auto;margin-right: auto;">';
								tabla = tabla +'</a></td>';
							}else{
								tabla = tabla +'<td class="check hidden-xs"><a class="most" style="cursor:pointer;" id="idRedirec'+aux+'"> <input type = "hidden" name= "conf" class="Seleccion" value="'+dato+'">';
								tabla = tabla +'<img src="../../../lib/images/men.png" style="display: block;margin-left: auto;margin-right: auto;">';
								tabla = tabla +'</a></td>';
							}

							tabla = tabla + '<td> <a class="most" style="cursor:pointer;" id="idRedirec'+aux+'"> <input type = "hidden" name= "conf" class="Seleccion" value="'+dato+'" >'+ resultado[aux].motivo +'</a></td>';
							tabla = tabla + '<td> <a class="most" style="cursor:pointer;" id="idRedirec'+aux+'"> <input type = "hidden" name= "conf" class="Seleccion" value="'+dato+'" >'+ resultado[aux].centro +'</a></td>';					
							tabla = tabla + '<td> <a class="most" style="cursor:pointer;" id="idRedirec'+aux+'"> <input type = "hidden" name= "conf" class="Seleccion" value="'+dato+'" >'+ resultado[aux].nacionalidad +'</a></td>';
							tabla = tabla + '<td> <a class="most" style="cursor:pointer;" id="idRedirec'+aux+'"> <input type = "hidden" name= "conf" class="Seleccion" value="'+dato+'" >'+ resultado[aux].comuna +'</a></td>';
							tabla = tabla + '<td> <a class="most" style="cursor:pointer;" id="idRedirec'+aux+'"> <input type = "hidden" name= "conf" class="Seleccion" value="'+dato+'" >'+ resultado[aux].prevision +'</a></td>';
							tabla = tabla + '<td> <a class="most" style="cursor:pointer;" id="idRedirec'+aux+'"> <input type = "hidden" name= "conf" class="Seleccion" value="'+dato+'" >'+ resultado[aux].firma +'</a></td>';
							tabla = tabla + '</tr>';
							i++;
						} //END FOR
	                }

					$("#resultTriadas").append(tabla);				
					//// $("#example2").tablesorter();
					 window.parent.$("#loader").hide();

					$(".most").click(function(){
					 	var dato = $(".Seleccion",this).val();
					 	var tab = $("#tabl2").val();
					 	var fechaHoy = $("#fechaHoy").val();
					 	var hora = window.parent.$("#reloj").val();
					 	var fechaHora = fechaHoy+" "+hora;
					 	var perId = window.parent.$("#perId").val();
					 	var carId = 2;
					 	var bloqueo = 1;
					 	obtenerValidacionIngresoPacientes(dato,tab,bloqueo,fechaHora,perId,carId);
					 	//$(location).attr('href',"triage.php?dato="+dato+"&tab="+tab);
					});
				}else{
					valorsesion = resultado.sesion;
				}
			}
		}, // End success
		error:function(error){
			console.log("Error en la peticion");
		} // End error
	});//End ajax
}

function obtenerPacientesParaAtencion(centroTrabajo) {
	var url= "../controlador/servidor/contenidoController.php";
	var type= "POST";
	var rutPaci = rutPaci;
	var resultado = null;
	var data= {
		evento :'obtenerRegistroAtencion',
		centroTrabajo:centroTrabajo
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
			resultado = response;
			var cantidad = 0;
			window.parent.$("#loader").hide();
			$("#contentTab").show();
			$("#resultAtendidas").empty();
				if(resultado === "0" || resultado === 0 || resultado === 0){
				 	var cantidad = 0;
                    $("#catAtendida").empty();
				    $("#catAtendida").append(cantidad);
				    tabla = tabla + '<tr>';
						tabla = tabla + '<td colspan = 12> No se han encontrado resultados ..</td>';								
					tabla = tabla + '</tr>';
					$("#resultAtendidas").append(tabla);
					 window.parent.$("#loader").hide();
                }else{
                   	resultado = JSON.parse(response);
                   	if (resultado.sesion === undefined) {
                   		$("#catAtendida").empty();
                   		cantidad = resultado[0].cantidad;
					    $("#catAtendida").append(cantidad);
						var tabla = "";
						var i= 1;
						for(var aux = 0 in resultado){
							var dato = resultado[aux].con_id;
								tabla = tabla + '<tr>';
								switch(resultado[aux].categorizacion){
									case "C1":
										tabla = tabla +'<td class="check hidden-xs"><img src="../../../lib/images/icon.png" style="background-color: #FF0033;cursor: pointer;"> </td>';
									break;
									case "C2":
										tabla = tabla +'<td class="check hidden-xs"><img src="../../../lib/images/icon.png" style="background-color: #FF9933;cursor: pointer;"> </td>';
									break;
									case "C3":
										tabla = tabla +'<td class="check hidden-xs"><img src="../../../lib/images/icon.png" style="background-color: #FFFF00;cursor: pointer;"> </td>';
									break;
									case "C4":
										tabla = tabla +'<td class="check hidden-xs"><img src="../../../lib/images/icon.png" style="background-color: #00CC33;cursor: pointer;"> </td>';
									break;
									case "C5":
										tabla = tabla +'<td class="check hidden-xs"><img src="../../../lib/images/icon.png" style="background-color: #0066FF;cursor: pointer;"> </td>';
									break;
									default:
										tabla = tabla +'<td class="check hidden-xs">'+i+' </td>';
									break;
								}
								tabla = tabla + '<td> <a class="mostrar" style="cursor:pointer;" id="idRedirec'+aux+'"> <input type = "hidden" name= "conf" class="obtener" value="'+dato+'">'+ resultado[aux].fecha +'</a></td>';

								if(resultado[aux].rut !== "-" && resultado[aux].rut !== ""){
									tabla = tabla + '<td> <a class="mostrar" style="cursor:pointer;" id="idRedirec'+aux+'"> <input type = "hidden" name= "conf" class="obtener" value="'+dato+'">'+ resultado[aux].rut +'</a></td>';
								}else{
									tabla = tabla + '<td> <a class="mostrar" style="cursor:pointer;" id="idRedirec'+aux+'"> <input type = "hidden" name= "conf" class="obtener" value="'+dato+'"> SIN DOCUMENTO </a></td>';
								}
								
								tabla = tabla + '<td> <a class="mostrar" style="cursor:pointer;" id="idRedirec'+aux+'"> <input type = "hidden" name= "conf" class="obtener" value="'+dato+'">'+ resultado[aux].paciente +'</a></td>';
								if (resultado[aux].edad === "" || resultado[aux].edad === "NULL") {
									tabla = tabla + '<td> <a class="mostrar" style="cursor:pointer;" id="idRedirec'+aux+'"> <input type = "hidden" name= "conf" class="obtener" value="'+dato+'"> - </a></td>';
								}else{
									tabla = tabla + '<td> <a class="mostrar" style="cursor:pointer;" id="idRedirec'+aux+'"> <input type = "hidden" name= "conf" class="obtener" value="'+dato+'">'+ resultado[aux].edad +'</a></td>';
								}

								if (resultado[aux].sexo === "Femenino") {
									tabla = tabla +'<td class="check hidden-xs"><a class="mostrar" style="cursor:pointer;" id="idRedirec'+aux+'"> <input type = "hidden" name= "conf" class="obtener" value="'+dato+'">';
									tabla = tabla +'<img src="../../../lib/images/woman.png" style="display: block;margin-left: auto;margin-right: auto;">';
									tabla = tabla +'</a></td>';
								}else{
									tabla = tabla +'<td class="check hidden-xs"><a class="mostrar" style="cursor:pointer;" id="idRedirec'+aux+'"> <input type = "hidden" name= "conf" class="obtener" value="'+dato+'">';
									tabla = tabla +'<img src="../../../lib/images/men.png" style="display: block;margin-left: auto;margin-right: auto;">';
									tabla = tabla +'</a></td>';
								}

								tabla = tabla + '<td> <a class="mostrar" style="cursor:pointer;" id="idRedirec'+aux+'"> <input type = "hidden" name= "conf" class="obtener" value="'+dato+'" >'+ resultado[aux].motivo +'</a></td>';
								tabla = tabla + '<td> <a class="mostrar" style="cursor:pointer;" id="idRedirec'+aux+'"> <input type = "hidden" name= "conf" class="obtener" value="'+dato+'" >'+ resultado[aux].centro +'</a></td>';					
								tabla = tabla + '<td> <a class="mostrar" style="cursor:pointer;" id="idRedirec'+aux+'"> <input type = "hidden" name= "conf" class="obtener" value="'+dato+'" >'+ resultado[aux].nacionalidad +'</a></td>';
								tabla = tabla + '<td> <a class="mostrar" style="cursor:pointer;" id="idRedirec'+aux+'"> <input type = "hidden" name= "conf" class="obtener" value="'+dato+'" >'+ resultado[aux].comuna +'</a></td>';
								tabla = tabla + '<td> <a class="mostrar" style="cursor:pointer;" id="idRedirec'+aux+'"> <input type = "hidden" name= "conf" class="obtener" value="'+dato+'" >'+ resultado[aux].prevision +'</a></td>';
								tabla = tabla + '<td> <a class="mostrar" style="cursor:pointer;" id="idRedirec'+aux+'"> <input type = "hidden" name= "conf" class="obtener" value="'+dato+'" >'+ resultado[aux].firma +'</a></td>';
								tabla = tabla + '</tr>';
								i++;
						}

						$("#resultAtendidas").append(tabla);
						 window.parent.$("#loader").hide();

						$(".mostrar").click(function(){
						 	var dato = $(".obtener",this).val();
						 	var tab = $("#tabl3").val();
						 	var fechaHoy = $("#fechaHoy").val();
						 	var hora = window.parent.$("#reloj").val();
						 	var fechaHora = fechaHoy+" "+hora;
						 	var perId = window.parent.$("#perId").val();
						 	var carId = 3;
						 	var bloqueo = 1;
						 	obtenerValidacionIngresoPacientes(dato,tab,bloqueo,fechaHora,perId,carId);
						});
					}else{
						valorsesion = resultado.sesion;
					}
				    
                }//END ELSE

		}, // End success
		error:function(error){
			console.log("Error en la peticion");
		} // End error
	});//End ajax
}

function obtenerMisProcedimientos(centroTrabajo){
	var url= "../controlador/servidor/contenidoController.php";
	var type= "POST";
	var resultado = null;
	var data= {
		evento :'obtenerMisProcedimientos',
		centroTrabajo:centroTrabajo
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
			resultado = response;
			var cantidad = 0;
			window.parent.$("#loader").hide();
			//$("#example4").trigger("destroy");
			$("#contentTab").show();
			$("#resultadosObsYtto").empty();
			var tabla = "";
				if(resultado === "0" || resultado === 0){				 	
                    $("#cantObsYTto").empty();
				    $("#cantObsYTto").append(cantidad);
				    tabla = tabla + '<tr>';
						tabla = tabla + '<td colspan = 12> No se han encontrado resultados ..</td>';
					tabla = tabla + '</tr>';
					$("#resultadosObsYtto").append(tabla);
                }else{
                   	resultado = JSON.parse(response);
                   	if (resultado.sesion === undefined) {
                   		$("#cantObsYTto").empty();
                   		cantidad = resultado[0].cantidad;
					    $("#cantObsYTto").append(cantidad);
					    var i= 1;
					    for(var aux = 0 in resultado){	
							var dato = resultado[aux].con_id;
								tabla = tabla + '<tr>';
								switch(resultado[aux].categorizacion){
									case "C1":
										tabla = tabla +'<td class="check hidden-xs"><img src="../../../lib/images/icon.png" style="background-color: #FF0033;cursor: pointer;"> </td>';
									break;
									case "C2":
										tabla = tabla +'<td class="check hidden-xs"><img src="../../../lib/images/icon.png" style="background-color: #FF9933;cursor: pointer;"> </td>';
									break;
									case "C3":
										tabla = tabla +'<td class="check hidden-xs"><img src="../../../lib/images/icon.png" style="background-color: #FFFF00;cursor: pointer;"> </td>';
									break;
									case "C4":
										tabla = tabla +'<td class="check hidden-xs"><img src="../../../lib/images/icon.png" style="background-color: #00CC33;cursor: pointer;"> </td>';
									break;
									case "C5":
										tabla = tabla +'<td class="check hidden-xs"><img src="../../../lib/images/icon.png" style="background-color: #0066FF;cursor: pointer;"> </td>';
									break;
									default:
										tabla = tabla +'<td class="check hidden-xs">'+i+' </td>';
									break;
								}
								tabla = tabla + '<td> <a class="mostObsTto" style="cursor:pointer;" id="idRedirec'+aux+'"> <input type = "hidden" name= "conf" class="enviarPro" value="'+dato+'">'+ resultado[aux].fecha +'</a></td>';

								if(resultado[aux].rut !== "-" && resultado[aux].rut !== "" ){
									tabla = tabla + '<td> <a class="mostObsTto" style="cursor:pointer;" id="idRedirec'+aux+'"> <input type = "hidden" name= "conf" class="enviarPro" value="'+dato+'">'+ resultado[aux].rut +'</a></td>';
								}else{
									tabla = tabla + '<td> <a class="mostObsTto" style="cursor:pointer;" id="idRedirec'+aux+'"> <input type = "hidden" name= "conf" class="enviarPro" value="'+dato+'"> SIN DOCUMENTO </a></td>';
								}
								
								tabla = tabla + '<td> <a class="mostObsTto" style="cursor:pointer;" id="idRedirec'+aux+'"> <input type = "hidden" name= "conf" class="enviarPro" value="'+dato+'">'+ resultado[aux].paciente +'</a></td>';
								if (resultado[aux].edad === "" || resultado[aux].edad === "NULL") {
									tabla = tabla + '<td> <a class="mostObsTto" style="cursor:pointer;" id="idRedirec'+aux+'"> <input type = "hidden" name= "conf" class="enviarPro" value="'+dato+'"> - </a></td>';
								}else{
									tabla = tabla + '<td> <a class="mostObsTto" style="cursor:pointer;" id="idRedirec'+aux+'"> <input type = "hidden" name= "conf" class="enviarPro" value="'+dato+'">'+ resultado[aux].edad +'</a></td>';
								}

								if (resultado[aux].sexo === "Femenino") {
									tabla = tabla +'<td class="check hidden-xs"><a class="mostObsTto" style="cursor:pointer;" id="idRedirec'+aux+'"> <input type = "hidden" name= "conf" class="enviarPro" value="'+dato+'">';
									tabla = tabla +'<img src="../../../lib/images/woman.png" style="display: block;margin-left: auto;margin-right: auto;">';
									tabla = tabla +'</a></td>';
								}else{
									tabla = tabla +'<td class="check hidden-xs"><a class="mostObsTto" style="cursor:pointer;" id="idRedirec'+aux+'"> <input type = "hidden" name= "conf" class="enviarPro" value="'+dato+'">';
									tabla = tabla +'<img src="../../../lib/images/men.png" style="display: block;margin-left: auto;margin-right: auto;">';
									tabla = tabla +'</a></td>';
								}

								tabla = tabla + '<td> <a class="mostObsTto" style="cursor:pointer;" id="idRedirec'+aux+'"> <input type = "hidden" name= "conf" class="enviarPro" value="'+dato+'" >'+ resultado[aux].motivo +'</a></td>';
								tabla = tabla + '<td> <a class="mostObsTto" style="cursor:pointer;" id="idRedirec'+aux+'"> <input type = "hidden" name= "conf" class="enviarPro" value="'+dato+'" >'+ resultado[aux].centro +'</a></td>';					
								tabla = tabla + '<td> <a class="mostObsTto" style="cursor:pointer;" id="idRedirec'+aux+'"> <input type = "hidden" name= "conf" class="enviarPro" value="'+dato+'" >'+ resultado[aux].nacionalidad +'</a></td>';
								tabla = tabla + '<td> <a class="mostObsTto" style="cursor:pointer;" id="idRedirec'+aux+'"> <input type = "hidden" name= "conf" class="enviarPro" value="'+dato+'" >'+ resultado[aux].comuna +'</a></td>';
								tabla = tabla + '<td> <a class="mostObsTto" style="cursor:pointer;" id="idRedirec'+aux+'"> <input type = "hidden" name= "conf" class="enviarPro" value="'+dato+'" >'+ resultado[aux].prevision +'</a></td>';
								tabla = tabla + '<td> <a class="mostObsTto" style="cursor:pointer;" id="idRedirec'+aux+'"> <input type = "hidden" name= "conf" class="enviarPro" value="'+dato+'" >'+ resultado[aux].firma +'</a></td>';
								tabla = tabla + '</tr>';
								i++;
						}
						$("#resultadosObsYtto").append(tabla);
						 window.parent.$("#loader").hide();

						 $(".mostObsTto").click(function(){
						 	var dato = $(".enviarPro",this).val();
						 	var tab = $("#tabl4").val();
						 	var fechaHoy = $("#fechaHoy").val();
						 	var hora = window.parent.$("#reloj").val();
						 	var fechaHora = fechaHoy+" "+hora;
						 	var perId = window.parent.$("#perId").val();
						 	var carId = 4;
						 	var bloqueo = 1;
						 	obtenerValidacionIngresoPacientes(dato,tab,bloqueo,fechaHora,perId,carId);
						});
					}else{
						valorsesion = resultado.sesion;
					}
					    
                }
		}, // End success
		error:function(error){
			console.log("Error en la peticion");
		} // End error
	});//End ajax
}

function obtenerEgresoPaciente(centroTrabajo){
	var url= "../controlador/servidor/contenidoController.php";
	var type= "POST";
	var resultado = null;
	var data= {
		evento :'obtenerEgresoPaciente',
		centroTrabajo:centroTrabajo
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
			resultado = response;
			var cantidad = 0;
			window.parent.$("#loader").hide();
			//$("#example5").trigger("destroy");
			$("#contentTab").show();
			$("#resultAlta").empty();
			var tabla = "";
			if (resultado == "" || resultado.length == 0) {
				resultado == "";
			}else{
				if(resultado === "0" || resultado === 0){
                    $("#cantEgreso").empty();
				    $("#cantEgreso").append(cantidad);
				    tabla = tabla + '<tr>';
						tabla = tabla + '<td colspan = 12> No se han encontrado resultados ..</td>';								
					tabla = tabla + '</tr>';
					$("#resultAlta").append(tabla);
                }else{
                   	resultado = JSON.parse(response);
                   	if (resultado.sesion === undefined) {
                   		$("#cantEgreso").empty();
                   		cantidad = resultado[0].cantidad;
					    $("#cantEgreso").append(cantidad);
					    var i= 1;
					    arreglo = ["C1","C2","C3","C4","C5"];
					    for(var aux = 0 in resultado){
					    	var dato = resultado[aux].con_id;
							tabla = tabla + '<tr>';
								switch(resultado[aux].categorizacion){
									case "C1":
										tabla = tabla +'<td class="check hidden-xs"><img src="../../../lib/images/icon.png" style="background-color: #FF0033;cursor: pointer;"> </td>';
									break;
									case "C2":
										tabla = tabla +'<td class="check hidden-xs"><img src="../../../lib/images/icon.png" style="background-color: #FF9933;cursor: pointer;"> </td>';
									break;
									case "C3":
										tabla = tabla +'<td class="check hidden-xs"><img src="../../../lib/images/icon.png" style="background-color: #FFFF00;cursor: pointer;"> </td>';
									break;
									case "C4":
										tabla = tabla +'<td class="check hidden-xs"><img src="../../../lib/images/icon.png" style="background-color: #00CC33;cursor: pointer;"> </td>';
									break;
									case "C5":
										tabla = tabla +'<td class="check hidden-xs"><img src="../../../lib/images/icon.png" style="background-color: #0066FF;cursor: pointer;"> </td>';
									break;
									default:
										tabla = tabla +'<td class="check hidden-xs">'+i+' </td>';
									break;
								}
							tabla = tabla + '<td> <a class="mostrarEgreso" style="cursor:pointer;" id="idRedirec'+aux+'"> <input type = "hidden" name= "conf" class="obtenerEgreso" value="'+dato+'">'+ resultado[aux].fecha +'</a></td>';

							if(resultado[aux].rut !== "-" && resultado[aux].rut !== ""){
								tabla = tabla + '<td> <a class="mostrarEgreso" style="cursor:pointer;" id="idRedirec'+aux+'"> <input type = "hidden" name= "conf" class="obtenerEgreso" value="'+dato+'">'+ resultado[aux].rut +'</a></td>';
							}else{
								tabla = tabla + '<td> <a class="mostrarEgreso" style="cursor:pointer;" id="idRedirec'+aux+'"> <input type = "hidden" name= "conf" class="obtenerEgreso" value="'+dato+'"> SIN DOCUMENTO </a></td>';
							}
							
							tabla = tabla + '<td> <a class="mostrarEgreso" style="cursor:pointer;" id="idRedirec'+aux+'"> <input type = "hidden" name= "conf" class="obtenerEgreso" value="'+dato+'">'+ resultado[aux].paciente +'</a></td>';

							if (resultado[aux].edad === "" || resultado[aux].edad === "NULL") {
								tabla = tabla + '<td> <a class="mostrarEgreso" style="cursor:pointer;" id="idRedirec'+aux+'"> <input type = "hidden" name= "conf" class="obtenerEgreso" value="'+dato+'"> - </a></td>';
							}else{
								tabla = tabla + '<td> <a class="mostrarEgreso" style="cursor:pointer;" id="idRedirec'+aux+'"> <input type = "hidden" name= "conf" class="obtenerEgreso" value="'+dato+'">'+ resultado[aux].edad +'</a></td>';
							}

							if (resultado[aux].sexo === "Femenino") {
								tabla = tabla +'<td class="check hidden-xs"><a class="mostrarEgreso" style="cursor:pointer;" id="idRedirec'+aux+'"> <input type = "hidden" name= "conf" class="obtenerEgreso" value="'+dato+'">';
								tabla = tabla +'<img src="../../../lib/images/woman.png" style="display: block;margin-left: auto;margin-right: auto;">';
								tabla = tabla +'</a></td>';
							}else{
								tabla = tabla +'<td class="check hidden-xs"><a class="mostrarEgreso" style="cursor:pointer;" id="idRedirec'+aux+'"> <input type = "hidden" name= "conf" class="obtenerEgreso" value="'+dato+'">';
								tabla = tabla +'<img src="../../../lib/images/men.png" style="display: block;margin-left: auto;margin-right: auto;">';
								tabla = tabla +'</a></td>';
							}

							tabla = tabla + '<td> <a class="mostrarEgreso" style="cursor:pointer;" id="idRedirec'+aux+'"> <input type = "hidden" name= "conf" class="obtenerEgreso" value="'+dato+'" >'+ resultado[aux].motivo +'</a></td>';
							tabla = tabla + '<td> <a class="mostrarEgreso" style="cursor:pointer;" id="idRedirec'+aux+'"> <input type = "hidden" name= "conf" class="obtenerEgreso" value="'+dato+'" >'+ resultado[aux].centro +'</a></td>';					
							tabla = tabla + '<td> <a class="mostrarEgreso" style="cursor:pointer;" id="idRedirec'+aux+'"> <input type = "hidden" name= "conf" class="obtenerEgreso" value="'+dato+'" >'+ resultado[aux].nacionalidad +'</a></td>';
							tabla = tabla + '<td> <a class="mostrarEgreso" style="cursor:pointer;" id="idRedirec'+aux+'"> <input type = "hidden" name= "conf" class="obtenerEgreso" value="'+dato+'" >'+ resultado[aux].comuna +'</a></td>';
							tabla = tabla + '<td> <a class="mostrarEgreso" style="cursor:pointer;" id="idRedirec'+aux+'"> <input type = "hidden" name= "conf" class="obtenerEgreso" value="'+dato+'" >'+ resultado[aux].prevision +'</a></td>';
							tabla = tabla + '<td> <a class="mostrarEgreso" style="cursor:pointer;" id="idRedirec'+aux+'"> <input type = "hidden" name= "conf" class="obtenerEgreso" value="'+dato+'" >'+ resultado[aux].firma +'</a></td>';
							tabla = tabla + '</tr>';
							i++;
						}
						$("#resultAlta").append(tabla);
						 ////$("#example5").tablesorter();
						 window.parent.$("#loader").hide();
						$(".mostrarEgreso").on("click",function(){
							var dato = $(".obtenerEgreso",this).val();
							var tab = $("#tabl5").val();
							var fechaHoy = $("#fechaHoy").val();
						 	var hora = window.parent.$("#reloj").val();
						 	var fechaHora = fechaHoy+" "+hora;
						 	var perId = window.parent.$("#perId").val();
						 	var carId = 5;
						 	var bloqueo = 1;
						 	obtenerValidacionIngresoPacientes(dato,tab,bloqueo,fechaHora,perId,carId);
						});


						$(".esport").on("click",function(){
							var rutPac = $(".ExportData",this).val();
							window.open("../controlador/servidor/pdf.php?rutPac="+rutPac);
						});
					}else{
						valorsesion = resultado.sesion;
					}
                }//END ELSE
			}/// END ELSE PRINCIPAL
		}, // End success
		error:function(error){
			console.log("Error en la peticion");
		} // End error
	});//End ajax
}

function obtenerPacientesDadosDeAlta(centroTrabajo,fechaHoy){
	var url= "../controlador/servidor/contenidoController.php";
	var type= "POST";
	var rutPaci = rutPaci;
	var resultado = null;
	var data= {
		evento :'obtenerPacientesDadosDeAlta',
		centroTrabajo:centroTrabajo,
		fechaHoy:fechaHoy
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
			resultado = response;
			var cantidad = 0;
			window.parent.$("#loader").hide();
			//$("#example6").trigger("destroy");
			$("#contentTab").show();
			$("#resultDadosDeAlta").empty();
				var tabla = "";
				if(resultado === "0" || resultado === 0){				 	
                    $("#cantAlta").empty();
				    $("#cantAlta").append(cantidad);
				    tabla = tabla + '<tr>';
						tabla = tabla + '<td colspan = 14> No se han encontrado resultados ..</td>';								
					tabla = tabla + '</tr>';
					 $("#resultDadosDeAlta").append(tabla);
					window.parent.$("#loader").hide();
                }else{
                   	resultado = JSON.parse(response);
				    if (resultado.sesion === undefined) {
				    	$("#cantAlta").empty();
				    	var cantidad = resultado.length;
				    	$("#cantAlta").append(cantidad);
					    var i = 1;
					    for(var aux = 0 in resultado){
					    	var dato = resultado[aux].CON_ID;
							tabla = tabla + '<tr>';
								switch(resultado[aux].categorizacion){
									case "C1":
										tabla = tabla +'<td class="check hidden-xs"><img src="../../../lib/images/icon.png" style="background-color: #FF0033;cursor: pointer;"> </td>';
									break;
									case "C2":
										tabla = tabla +'<td class="check hidden-xs"><img src="../../../lib/images/icon.png" style="background-color: #FF9933;cursor: pointer;"> </td>';
									break;
									case "C3":
										tabla = tabla +'<td class="check hidden-xs"><img src="../../../lib/images/icon.png" style="background-color: #FFFF00;cursor: pointer;"> </td>';
									break;
									case "C4":
										tabla = tabla +'<td class="check hidden-xs"><img src="../../../lib/images/icon.png" style="background-color: #00CC33;cursor: pointer;"> </td>';
									break;
									case "C5":
										tabla = tabla +'<td class="check hidden-xs"><img src="../../../lib/images/icon.png" style="background-color: #0066FF;cursor: pointer;"> </td>';
									break;
									default:
										tabla = tabla +'<td class="check hidden-xs">'+i+' </td>';
									break;
								}
								tabla = tabla + '<td> <a class="mostrarDadosAlta" style="cursor:pointer;" id="idRedirec'+aux+'"> <input type = "hidden" name= "conf" class="mostDadosAltaPac" value="'+dato+'">'+ resultado[aux].FECHA_INGRESO +'</a></td>';
								tabla = tabla + '<td> <a class="mostrarDadosAlta" style="cursor:pointer;" id="idRedirec'+aux+'"> <input type = "hidden" name= "conf" class="mostDadosAltaPac" value="'+dato+'">'+ resultado[aux].FECHA_ALTA +'</a></td>';

								if(resultado[aux].rut !== "-" && resultado[aux].rut !== ""){
									tabla = tabla + '<td> <a class="mostrarDadosAlta" style="cursor:pointer;" id="idRedirec'+aux+'"> <input type = "hidden" name= "conf" class="mostDadosAltaPac" value="'+dato+'">'+ resultado[aux].RUT +'</a></td>';
								}else{
									tabla = tabla + '<td> <a class="mostrarDadosAlta" style="cursor:pointer;" id="idRedirec'+aux+'"> <input type = "hidden" name= "conf" class="mostDadosAltaPac" value="'+dato+'"> SIN DOCUMENTO </a></td>';
								}
								
								tabla = tabla + '<td> <a class="mostrarDadosAlta" style="cursor:pointer;" id="idRedirec'+aux+'"> <input type = "hidden" name= "conf" class="mostDadosAltaPac" value="'+dato+'">'+ resultado[aux].PACIENTE +'</a></td>';

								if (resultado[aux].EDAD === "" || resultado[aux].EDAD === "NULL") {
									tabla = tabla + '<td> <a class="mostrarDadosAlta" style="cursor:pointer;" id="idRedirec'+aux+'"> <input type = "hidden" name= "conf" class="mostDadosAltaPac" value="'+dato+'"> - </a></td>';
								}else{
									tabla = tabla + '<td> <a class="mostrarDadosAlta" style="cursor:pointer;" id="idRedirec'+aux+'"> <input type = "hidden" name= "conf" class="mostDadosAltaPac" value="'+dato+'">'+ resultado[aux].EDAD +'</a></td>';
								}

								if (resultado[aux].SEXO === "Femenino") {
									tabla = tabla +'<td class="check hidden-xs"><a class="mostrarDadosAlta" style="cursor:pointer;" id="idRedirec'+aux+'"> <input type = "hidden" name= "conf" class="mostDadosAltaPac" value="'+dato+'">';
									tabla = tabla +'<img src="../../../lib/images/woman.png" style="display: block;margin-left: auto;margin-right: auto;">';
									tabla = tabla +'</a></td>';
								}else{
									tabla = tabla +'<td class="check hidden-xs"><a class="mostrarDadosAlta" style="cursor:pointer;" id="idRedirec'+aux+'"> <input type = "hidden" name= "conf" class="mostDadosAltaPac" value="'+dato+'">';
									tabla = tabla +'<img src="../../../lib/images/men.png" style="display: block;margin-left: auto;margin-right: auto;">';
									tabla = tabla +'</a></td>';
								}

								tabla = tabla + '<td> <a class="mostrarDadosAlta" style="cursor:pointer;" id="idRedirec'+aux+'"> <input type = "hidden" name= "conf" class="mostDadosAltaPac" value="'+dato+'" >'+ resultado[aux].MOTIVO_CONSULTA +'</a></td>';
								tabla = tabla + '<td> <a class="mostrarDadosAlta" style="cursor:pointer;" id="idRedirec'+aux+'"> <input type = "hidden" name= "conf" class="mostDadosAltaPac" value="'+dato+'" >'+ resultado[aux].CENTRO +'</a></td>';					
								tabla = tabla + '<td> <a class="mostrarDadosAlta" style="cursor:pointer;" id="idRedirec'+aux+'"> <input type = "hidden" name= "conf" class="mostDadosAltaPac" value="'+dato+'" >'+ resultado[aux].NACIONALIDAD +'</a></td>';
								tabla = tabla + '<td> <a class="mostrarDadosAlta" style="cursor:pointer;" id="idRedirec'+aux+'"> <input type = "hidden" name= "conf" class="mostDadosAltaPac" value="'+dato+'" >'+ resultado[aux].COMUNA +'</a></td>';
								tabla = tabla + '<td> <a class="mostrarDadosAlta" style="cursor:pointer;" id="idRedirec'+aux+'"> <input type = "hidden" name= "conf" class="mostDadosAltaPac" value="'+dato+'" >'+ resultado[aux].PREVISION +'</a></td>';
								tabla = tabla + '<td> <a class="mostrarDadosAlta" style="cursor:pointer;" id="idRedirec'+aux+'"> <input type = "hidden" name= "conf" class="mostDadosAltaPac" value="'+dato+'" >'+ resultado[aux].FIRMA +'</a></td>';
								tabla = tabla + '<td> <a class="mostrarDadosAlta" style="cursor:pointer;" id="idRedirec'+aux+'"> <input type = "hidden" name= "conf" class="mostDadosAltaPac" value="'+dato+'" > VISUALIZAR PDF PACIENTE </a></td>';
								tabla = tabla + '</tr>';
								i++;
						}// END FOR

						$("#resultDadosDeAlta").append(tabla);
						window.parent.$("#loader").hide();
						$(".mostrarDadosAlta").click(function(){
							var conId = $(".mostDadosAltaPac",this).val();
							window.open("../controlador/servidor/pdf.php?conId="+conId);
						});				    	
					}else{
						valorsesion = resultado.sesion;
					}// END ELSE INTERNO
                }//END ELSE PRINCIPAL
		}, // End success
		error:function(error){
			console.log("Error en la peticion");
		} // End error
	});//End ajax
}

function obtenerPacientesCancelados(centroTrabajo,fechaHoy){
	var url= "../controlador/servidor/contenidoController.php";
	var type= "POST";
	var rutPaci = rutPaci;
	var resultado = null;
	var data= {
		evento :'obtenerNspPacientes',
		centroTrabajo:centroTrabajo,
		fechaHoy:fechaHoy
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
			resultado = response;
			var cantidad = 0;
			window.parent.$("#loader").hide();
			$("#resultCanceladas").empty();
			var tabla = "";
			$("#contentTab").show();
				if(resultado === "0" || resultado === 0){
                    $("#cantCanceladas").empty();
				    $("#cantCanceladas").append(cantidad);
			    	tabla = tabla + '<tr>';
						tabla = tabla + '<td colspan = 14> No se han encontrado resultados ..</td>';								
					tabla = tabla + '</tr>';
					$("#resultCanceladas").append(tabla);
					window.parent.$("#loader").hide();
                }else{
                   	resultado = JSON.parse(response);
                   	if (resultado.sesion === undefined) {
                   		$("#cantCanceladas").empty();
					    var cantidad = resultado.length;
					    $("#cantCanceladas").append(cantidad);
					    for(var aux = 0 in resultado){
					    	var dato = resultado[aux].OBSERVACION;
					    	var i = 1;
							tabla = tabla + '<tr>';
								tabla = tabla +'<td class="check hidden-xs">'+i+' </td>';
								tabla = tabla + '<td> <a class="mostrarNsp" style="cursor:pointer;" id="idRedirec'+aux+'"> <input type = "hidden" name= "conf" class="mostrarNspPac" value="'+dato+'">'+ resultado[aux].FECHA_INGRESO +'</a></td>';
								tabla = tabla + '<td> <a class="mostrarNsp" style="cursor:pointer;" id="idRedirec'+aux+'"> <input type = "hidden" name= "conf" class="mostrarNspPac" value="'+dato+'">'+ resultado[aux].FECHA_ALTA +'</a></td>';
								
								if(resultado[aux].rut !== "-" && resultado[aux].rut !== "" ){
									tabla = tabla + '<td> <a class="mostrarNsp" style="cursor:pointer;" id="idRedirec'+aux+'"> <input type = "hidden" name= "conf" class="mostrarNspPac" value="'+dato+'">'+ resultado[aux].RUT +'</a></td>';
								}else{
									tabla = tabla + '<td> <a class="mostrarNsp" style="cursor:pointer;" id="idRedirec'+aux+'"> <input type = "hidden" name= "conf" class="mostrarNspPac" value="'+dato+'">SIN DOCUMENTO </a></td>';
								}
								tabla = tabla + '<td> <a class="mostrarNsp" style="cursor:pointer;" id="idRedirec'+aux+'"> <input type = "hidden" name= "conf" class="mostrarNspPac" value="'+dato+'">'+ resultado[aux].PACIENTE +'</a></td>';
								
								if (resultado[aux].EDAD === "NULL" || resultado[aux].EDAD === "") {
									tabla = tabla + '<td> <a class="mostrarNsp" style="cursor:pointer;" id="idRedirec'+aux+'"> <input type = "hidden" name= "conf" class="mostrarNspPac" value="'+dato+'"> - </a></td>';
								}else{
									tabla = tabla + '<td> <a class="mostrarNsp" style="cursor:pointer;" id="idRedirec'+aux+'"> <input type = "hidden" name= "conf" class="mostrarNspPac" value="'+dato+'">'+ resultado[aux].EDAD +'</a></td>';
								}

								if (resultado[aux].SEXO === "Femenino") {
									tabla = tabla +'<td class="check hidden-xs"><a class="mostrarNsp" style="cursor:pointer;" id="idRedirec'+aux+'"> <input type = "hidden" name= "conf" class="mostrarNspPac" value="'+dato+'">';
									tabla = tabla +'<img src="../../../lib/images/woman.png" style="display: block;margin-left: auto;margin-right: auto;">';
									tabla = tabla +'</a></td>';
								}else{
									tabla = tabla +'<td class="check hidden-xs"><a class="mostrarNsp" style="cursor:pointer;" id="idRedirec'+aux+'"> <input type = "hidden" name= "conf" class="mostrarNspPac" value="'+dato+'">';
									tabla = tabla +'<img src="../../../lib/images/men.png" style="display: block;margin-left: auto;margin-right: auto;">';
									tabla = tabla +'</a></td>';
								}

								tabla = tabla + '<td> <a class="mostrarNsp" style="cursor:pointer;" id="idRedirec'+aux+'"> <input type = "hidden" name= "conf" class="mostrarNspPac" value="'+dato+'" >'+ resultado[aux].MOTIVO_CONSULTA +'</a></td>';
								tabla = tabla + '<td> <a class="mostrarNsp" style="cursor:pointer;" id="idRedirec'+aux+'"> <input type = "hidden" name= "conf" class="mostrarNspPac" value="'+dato+'" >'+ resultado[aux].CENTRO +'</a></td>';					
								tabla = tabla + '<td> <a class="mostrarNsp" style="cursor:pointer;" id="idRedirec'+aux+'"> <input type = "hidden" name= "conf" class="mostrarNspPac" value="'+dato+'" >'+ resultado[aux].NACIONALIDAD +'</a></td>';
								tabla = tabla + '<td> <a class="mostrarNsp" style="cursor:pointer;" id="idRedirec'+aux+'"> <input type = "hidden" name= "conf" class="mostrarNspPac" value="'+dato+'" >'+ resultado[aux].COMUNA +'</a></td>';
								tabla = tabla + '<td> <a class="mostrarNsp" style="cursor:pointer;" id="idRedirec'+aux+'"> <input type = "hidden" name= "conf" class="mostrarNspPac" value="'+dato+'" >'+ resultado[aux].PREVISION +'</a></td>';
								tabla = tabla + '<td> <a class="mostrarNsp" style="cursor:pointer;" id="idRedirec'+aux+'"> <input type = "hidden" name= "conf" class="mostrarNspPac" value="'+dato+'" >'+ resultado[aux].FIRMA +'</a></td>';
								tabla = tabla + '<td> <a class="mostrarNsp" style="cursor:pointer;" id="idRedirec'+aux+'"> <input type = "hidden" name= "conf" class="mostrarNspPac" value="'+dato+'" >'+resultado[aux].OBSERVACION+' </a></td>';
								tabla = tabla + '</tr>';
								i++;							
						}//END FOR
						$("#resultCanceladas").append(tabla);
						 window.parent.$("#loader").hide();

						$(".mostrarNsp").click(function(){
						 	var dato = $(".mostrarNspPac",this).val();
						 	//datepicker{z-index:1151 !important;}
						 	$("#fechaBusquedaCancelada").css({ 'z-index' : 'inherit !important'});
						 	$(".datepicker").css({ 'z-index' : 'inherit !important'});
						 	$("#mensajes").empty();
						 	var msj= "";
							msj = msj +'<div class="form-group">';
							msj = msj +'<label for="motivoConsulta">* Observacion NSP: </label>';
							msj = msj +'<textarea style="width: 55em;" class="form-control mayuscula textareaResize mayuscula required" maxlength="100" id="motivoConsulta" name="motivoConsulta" rows="3" cols="3">'+dato+'</textarea>';
							msj = msj +'</div>';
						    $("#mensajes").append(msj);
							$('#modalNsp').modal();
						});
					}else{
						valorsesion = resultado.sesion;
					}
                }
		}, // End success
		error:function(error){
			console.log("Error en la peticion");
		} // End error
	});//End ajax
}

function enviarInfoBusqueda(buscar,centroTrabajo,fechaBusqueda){
	var url= "../controlador/servidor/contenidoController.php";
	var type= "POST";
	var rutPaci = rutPaci;
	var resultado = null;
	var data= {
		evento :'obtenerPacientesReportPacienteAlta',
		rut:buscar,
		fechaBusqueda:fechaBusqueda,
		centroTrabajo:centroTrabajo
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
			resultado = response;
			////$("#example6").trigger("destroy");
			$("#contentTab").show();
			$("#resultDadosDeAlta").empty();
				var tabla = "";
				if(resultado === "0" || resultado === 0){
				 	var cantidad = 0;
                    $("#cantAlta").empty();
				    $("#cantAlta").append(cantidad);
				    tabla = tabla + '<tr>';
						tabla = tabla + '<td colspan = 14> No se han encontrado resultados ..</td>';								
					tabla = tabla + '</tr>';
					window.parent.$("#loader").hide();
					$("#resultDadosDeAlta").append(tabla);
                }else{
                   	resultado = JSON.parse(response);				    
				    if (resultado.sesion === undefined) {
				    	$("#cantAlta").empty();
				    	var cantidad = resultado.length;
				    	$("#cantAlta").append(cantidad);
					    var i = 1;
					    for(var aux = 0 in resultado){
					    	var dato = resultado[aux].CON_ID;
							tabla = tabla + '<tr>';
								switch(resultado[aux].categorizacion){
									case "C1":
										tabla = tabla +'<td class="check hidden-xs"><img src="../../../lib/images/icon.png" style="background-color: #FF0033;cursor: pointer;"> </td>';
									break;
									case "C2":
										tabla = tabla +'<td class="check hidden-xs"><img src="../../../lib/images/icon.png" style="background-color: #FF9933;cursor: pointer;"> </td>';
									break;
									case "C3":
										tabla = tabla +'<td class="check hidden-xs"><img src="../../../lib/images/icon.png" style="background-color: #FFFF00;cursor: pointer;"> </td>';
									break;
									case "C4":
										tabla = tabla +'<td class="check hidden-xs"><img src="../../../lib/images/icon.png" style="background-color: #00CC33;cursor: pointer;"> </td>';
									break;
									case "C5":
										tabla = tabla +'<td class="check hidden-xs"><img src="../../../lib/images/icon.png" style="background-color: #0066FF;cursor: pointer;"> </td>';
									break;
									default:
										tabla = tabla +'<td class="check hidden-xs">'+i+' </td>';
									break;
								}
								tabla = tabla + '<td> <a class="mostrarDadosAlta" style="cursor:pointer;" id="idRedirec'+aux+'"> <input type = "hidden" name= "conf" class="mostDadosAltaPac" value="'+dato+'">'+ resultado[aux].FECHA_INGRESO +'</a></td>';
								tabla = tabla + '<td> <a class="mostrarDadosAlta" style="cursor:pointer;" id="idRedirec'+aux+'"> <input type = "hidden" name= "conf" class="mostDadosAltaPac" value="'+dato+'">'+ resultado[aux].FECHA_ALTA +'</a></td>';

								if(resultado[aux].rut !== "-" && resultado[aux].rut !== ""){
									tabla = tabla + '<td> <a class="mostrarDadosAlta" style="cursor:pointer;" id="idRedirec'+aux+'"> <input type = "hidden" name= "conf" class="mostDadosAltaPac" value="'+dato+'">'+ resultado[aux].RUT +'</a></td>';
								}else{
									tabla = tabla + '<td> <a class="mostrarDadosAlta" style="cursor:pointer;" id="idRedirec'+aux+'"> <input type = "hidden" name= "conf" class="mostDadosAltaPac" value="'+dato+'"> SIN DOCUMENTO </a></td>';
								}
								
								tabla = tabla + '<td> <a class="mostrarDadosAlta" style="cursor:pointer;" id="idRedirec'+aux+'"> <input type = "hidden" name= "conf" class="mostDadosAltaPac" value="'+dato+'">'+ resultado[aux].PACIENTE +'</a></td>';

								if (resultado[aux].EDAD === "" || resultado[aux].EDAD === "NULL") {
									tabla = tabla + '<td> <a class="mostrarDadosAlta" style="cursor:pointer;" id="idRedirec'+aux+'"> <input type = "hidden" name= "conf" class="mostDadosAltaPac" value="'+dato+'"> - </a></td>';
								}else{
									tabla = tabla + '<td> <a class="mostrarDadosAlta" style="cursor:pointer;" id="idRedirec'+aux+'"> <input type = "hidden" name= "conf" class="mostDadosAltaPac" value="'+dato+'">'+ resultado[aux].EDAD +'</a></td>';
								}

								if (resultado[aux].SEXO === "Femenino") {
									tabla = tabla +'<td class="check hidden-xs"><a class="mostrarDadosAlta" style="cursor:pointer;" id="idRedirec'+aux+'"> <input type = "hidden" name= "conf" class="mostDadosAltaPac" value="'+dato+'">';
									tabla = tabla +'<img src="../../../lib/images/woman.png" style="display: block;margin-left: auto;margin-right: auto;">';
									tabla = tabla +'</a></td>';
								}else{
									tabla = tabla +'<td class="check hidden-xs"><a class="mostrarDadosAlta" style="cursor:pointer;" id="idRedirec'+aux+'"> <input type = "hidden" name= "conf" class="mostDadosAltaPac" value="'+dato+'">';
									tabla = tabla +'<img src="../../../lib/images/men.png" style="display: block;margin-left: auto;margin-right: auto;">';
									tabla = tabla +'</a></td>';
								}

								tabla = tabla + '<td> <a class="mostrarDadosAlta" style="cursor:pointer;" id="idRedirec'+aux+'"> <input type = "hidden" name= "conf" class="mostDadosAltaPac" value="'+dato+'" >'+ resultado[aux].MOTIVO_CONSULTA +'</a></td>';
								tabla = tabla + '<td> <a class="mostrarDadosAlta" style="cursor:pointer;" id="idRedirec'+aux+'"> <input type = "hidden" name= "conf" class="mostDadosAltaPac" value="'+dato+'" >'+ resultado[aux].CENTRO +'</a></td>';					
								tabla = tabla + '<td> <a class="mostrarDadosAlta" style="cursor:pointer;" id="idRedirec'+aux+'"> <input type = "hidden" name= "conf" class="mostDadosAltaPac" value="'+dato+'" >'+ resultado[aux].NACIONALIDAD +'</a></td>';
								tabla = tabla + '<td> <a class="mostrarDadosAlta" style="cursor:pointer;" id="idRedirec'+aux+'"> <input type = "hidden" name= "conf" class="mostDadosAltaPac" value="'+dato+'" >'+ resultado[aux].COMUNA +'</a></td>';
								tabla = tabla + '<td> <a class="mostrarDadosAlta" style="cursor:pointer;" id="idRedirec'+aux+'"> <input type = "hidden" name= "conf" class="mostDadosAltaPac" value="'+dato+'" >'+ resultado[aux].PREVISION +'</a></td>';
								tabla = tabla + '<td> <a class="mostrarDadosAlta" style="cursor:pointer;" id="idRedirec'+aux+'"> <input type = "hidden" name= "conf" class="mostDadosAltaPac" value="'+dato+'" >'+ resultado[aux].FIRMA +'</a></td>';
								tabla = tabla + '<td> <a class="mostrarDadosAlta" style="cursor:pointer;" id="idRedirec'+aux+'"> <input type = "hidden" name= "conf" class="mostDadosAltaPac" value="'+dato+'" > VISUALIZAR PDF PACIENTE </a></td>';

								tabla = tabla + '</tr>';
								i++;
						}// END FOR

						$("#resultDadosDeAlta").append(tabla);
						window.parent.$("#loader").hide();
						$(".mostrarDadosAlta").click(function(){
							var conId = $(".mostDadosAltaPac",this).val();
							window.open("../controlador/servidor/pdf.php?conId="+conId);
						});
					}else{
						alert('Su sesion fue cerrada por inactividad en los ultimos 45 minutos.');
						window.setTimeout(function () {
					    	window.top.location.href= '../../../index.php';
					    }, 5000);
					}//END ELSE validacion sesion
                }//END ELSE INTERNO
		}//END ELSE PRINCIPAL
	});
}

function busquedaObtenerPacientesCancelados(buscar,fechaBusqueda,centroTrabajo){
	var url= "../controlador/servidor/contenidoController.php";
	var type= "POST";
	var rutPaci = rutPaci;
	var resultado = null;
	var data= {
		evento :'obtenerPacientesReportPacienteNSP',
		rut:buscar,
		fechaBusqueda:fechaBusqueda,
		centroTrabajo:centroTrabajo
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
			resultado = response;
			var cantidad = 0;
			$("#resultCanceladas").empty();
			var tabla = "";
			$("#contentTab").show();
				if(resultado === "0" || resultado === 0){
                    $("#cantCanceladas").empty();
				    $("#cantCanceladas").append(cantidad);
			    	tabla = tabla + '<tr>';
						tabla = tabla + '<td colspan = 14> No se han encontrado resultados ..</td>';								
					tabla = tabla + '</tr>';
					$("#resultCanceladas").append(tabla);
					window.parent.$("#loader").hide();
                }else{
                   	resultado = JSON.parse(response);
                   	if (resultado.sesion === undefined) {
                   		$("#cantCanceladas").empty();				    
						var cantidad = resultado.length;
					    $("#cantCanceladas").append(cantidad);
					    for(var aux = 0 in resultado){
					    	var dato = resultado[aux].OBSERVACION;
					    	var i = 1;
							tabla = tabla + '<tr>';
								tabla = tabla +'<td class="check hidden-xs">'+i+' </td>';
								tabla = tabla + '<td> <a class="mostrarNsp" style="cursor:pointer;" id="idRedirec'+aux+'"> <input type = "hidden" name= "conf" class="mostrarNspPac" value="'+dato+'">'+ resultado[aux].FECHA_INGRESO +'</a></td>';
								tabla = tabla + '<td> <a class="mostrarNsp" style="cursor:pointer;" id="idRedirec'+aux+'"> <input type = "hidden" name= "conf" class="mostrarNspPac" value="'+dato+'">'+ resultado[aux].FECHA_ALTA +'</a></td>';
								
								if(resultado[aux].rut !== "-" && resultado[aux].rut !== "" ){
									tabla = tabla + '<td> <a class="mostrarNsp" style="cursor:pointer;" id="idRedirec'+aux+'"> <input type = "hidden" name= "conf" class="mostrarNspPac" value="'+dato+'">'+ resultado[aux].RUT +'</a></td>';
								}else{
									tabla = tabla + '<td> <a class="mostrarNsp" style="cursor:pointer;" id="idRedirec'+aux+'"> <input type = "hidden" name= "conf" class="mostrarNspPac" value="'+dato+'">SIN DOCUMENTO </a></td>';
								}
								tabla = tabla + '<td> <a class="mostrarNsp" style="cursor:pointer;" id="idRedirec'+aux+'"> <input type = "hidden" name= "conf" class="mostrarNspPac" value="'+dato+'">'+ resultado[aux].PACIENTE +'</a></td>';
								
								if (resultado[aux].EDAD === "NULL" || resultado[aux].EDAD === "") {
									tabla = tabla + '<td> <a class="mostrarNsp" style="cursor:pointer;" id="idRedirec'+aux+'"> <input type = "hidden" name= "conf" class="mostrarNspPac" value="'+dato+'"> - </a></td>';
								}else{
									tabla = tabla + '<td> <a class="mostrarNsp" style="cursor:pointer;" id="idRedirec'+aux+'"> <input type = "hidden" name= "conf" class="mostrarNspPac" value="'+dato+'">'+ resultado[aux].EDAD +'</a></td>';
								}

								if (resultado[aux].SEXO === "Femenino") {
									tabla = tabla +'<td class="check hidden-xs"><a class="mostrarNsp" style="cursor:pointer;" id="idRedirec'+aux+'"> <input type = "hidden" name= "conf" class="mostrarNspPac" value="'+dato+'">';
									tabla = tabla +'<img src="../../../lib/images/woman.png" style="display: block;margin-left: auto;margin-right: auto;">';
									tabla = tabla +'</a></td>';
								}else{
									tabla = tabla +'<td class="check hidden-xs"><a class="mostrarNsp" style="cursor:pointer;" id="idRedirec'+aux+'"> <input type = "hidden" name= "conf" class="mostrarNspPac" value="'+dato+'">';
									tabla = tabla +'<img src="../../../lib/images/men.png" style="display: block;margin-left: auto;margin-right: auto;">';
									tabla = tabla +'</a></td>';
								}

								tabla = tabla + '<td> <a class="mostrarNsp" style="cursor:pointer;" id="idRedirec'+aux+'"> <input type = "hidden" name= "conf" class="mostrarNspPac" value="'+dato+'" >'+ resultado[aux].MOTIVO_CONSULTA +'</a></td>';
								tabla = tabla + '<td> <a class="mostrarNsp" style="cursor:pointer;" id="idRedirec'+aux+'"> <input type = "hidden" name= "conf" class="mostrarNspPac" value="'+dato+'" >'+ resultado[aux].CENTRO +'</a></td>';					
								tabla = tabla + '<td> <a class="mostrarNsp" style="cursor:pointer;" id="idRedirec'+aux+'"> <input type = "hidden" name= "conf" class="mostrarNspPac" value="'+dato+'" >'+ resultado[aux].NACIONALIDAD +'</a></td>';
								tabla = tabla + '<td> <a class="mostrarNsp" style="cursor:pointer;" id="idRedirec'+aux+'"> <input type = "hidden" name= "conf" class="mostrarNspPac" value="'+dato+'" >'+ resultado[aux].COMUNA +'</a></td>';
								tabla = tabla + '<td> <a class="mostrarNsp" style="cursor:pointer;" id="idRedirec'+aux+'"> <input type = "hidden" name= "conf" class="mostrarNspPac" value="'+dato+'" >'+ resultado[aux].PREVISION +'</a></td>';
								tabla = tabla + '<td> <a class="mostrarNsp" style="cursor:pointer;" id="idRedirec'+aux+'"> <input type = "hidden" name= "conf" class="mostrarNspPac" value="'+dato+'" >'+ resultado[aux].FIRMA +'</a></td>';
								tabla = tabla + '<td> <a class="mostrarNsp" style="cursor:pointer;" id="idRedirec'+aux+'"> <input type = "hidden" name= "conf" class="mostrarNspPac" value="'+dato+'" >'+resultado[aux].OBSERVACION+' </a></td>';
								tabla = tabla + '</tr>';
								i++;
						}//END FOR

						$("#resultCanceladas").append(tabla);
							window.parent.$("#loader").hide();					
						 //$("#example7").tablesorter();
						 $(".mostrarNsp").click(function(){
						 	var dato = $(".mostrarNspPac",this).val();
						 	$("#mensajes").empty();
						 	var msj= "";
							msj = msj +'<div class="form-group">';
							msj = msj +'<label for="motivoConsulta">* Observacion NSP: </label>';
							msj = msj +'<textarea style="width: 55em;" class="form-control mayuscula textareaResize mayuscula required" maxlength="100" id="motivoConsulta" name="motivoConsulta" rows="3" cols="3">'+dato+'</textarea>';
							msj = msj +'</div>';
						    $("#mensajes").append(msj);
							$('#modalNsp').modal();
						});
					}else{
						valorsesion = resultado.sesion;
					}
				   		
                }
		}, // End success
		error:function(error){
			console.log("Error en la peticion");
		} // End error
	});//End ajax
}

function obtenerValidacionIngresoPacientes(dato,tab,bloqueo,fechaHora,perId,carId) {
	var url= "../controlador/servidor/contenidoController.php";
	var type= "POST";
	var carId =  carId;
	var dato = dato
	var tab = tab;
	var resultado = null;
	var data= {
		evento :'obtenerEstadoPacientes',
		conId:dato,
		bloqueo:bloqueo,
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
			resultado = response;
			$("#mensaje").empty();
			if (resultado === "0") {
				$('#myModal').modal('hide');
				$("#mensaje").empty();
			    var texto = "<h3> No se ha podido ingresar al modulo..  </h3>";
			    $("#mensaje").append(texto);
				$('#modalValidacion').modal();
			}else
				resultado = JSON.parse(response);
				if (resultado.sesion === undefined) {
					switch(resultado[0].estado){
						case '1':
							switch(tab){
								case 'tab2': $(location).attr('href',"triage.php?dato="+dato+"&tab="+tab); break;
								case 'tab3': $(location).attr('href',"atencion.php?dato="+dato+"&tab="+tab); break;
								case 'tab4': $(location).attr('href',"observacionYTto.php?dato="+dato+"&tab="+tab); break;
								case 'tab5': $(location).attr('href',"altaEgreso.php?dato="+dato+"&tab="+tab); break;
							}
						break;
						case '2':
							$('#myModal').modal('hide');
							$("#refrescarPantalla").show();
							$("#CerrarNormal").hide();
							$("#mensaje").empty();
							var texto='';
							texto = texto + '<h3><label>El paciente esta siento atendido por el profesional</label><br>';
							texto = texto + '<b>'+resultado[0].NOMBRE_PROFESIONAL+'</b>,<br>';
							texto = texto +' Desde las <b>'+resultado[0].FECHA_HORA_BLOQUEO+' .</b></h3>';
						    $("#mensaje").append(texto);
							$('#modalValidacion').modal();
						break;
						case '3':
							switch(tab){
								case 'tab2': $(location).attr('href',"triage.php?dato="+dato+"&tab="+tab); break;
								case 'tab3': $(location).attr('href',"atencion.php?dato="+dato+"&tab="+tab); break;
								case 'tab4': $(location).attr('href',"observacionYTto.php?dato="+dato+"&tab="+tab); break;
								case 'tab5': $(location).attr('href',"altaEgreso.php?dato="+dato+"&tab="+tab); break;
							}
						break;
						case '4':
							$('#myModal').modal('hide');
							$("#refrescarPantalla").show();
							$("#CerrarNormal").hide();
							$("#mensaje").empty();
							var texto='';
							switch(carId){
								case 2:
									texto = texto + '<h3><label>El paciente  ya fue atendido en Triage </label><br>';
								break;
								case 3:
									texto = texto + '<h3><label>El paciente  ya fue atendido en Consulta Médica </label><br>';
								break;
								case 4:
									texto = texto + '<h3><label>El paciente  ya fue atendido en Observación y Tratamiento </label><br>';
								break;
								case 5:
									texto = texto + '<h3><label>El paciente  ya fue Egresado </label><br>';
								break;
							}
						    $("#mensaje").append(texto);
							$('#modalValidacion').modal();
						break;
						case '5':
							$('#myModal').modal('hide');
							$("#refrescarPantalla").show();
							$("#CerrarNormal").hide();
							$("#mensaje").empty();
							var texto='';
							texto = texto + '<h3><label>No tiene permisos para ingresar al egreso</label><br>';
						    $("#mensaje").append(texto);
							$('#modalValidacion').modal();
						break;
					}
				}else{
					valorsesion = resultado.sesion;
				}
					
		}, // End success
		error:function(error){
			console.log("Error en la peticion");
		} // End error
	});//End ajax
}