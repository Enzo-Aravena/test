function cargarDatosPaciente(conId) {
	var url= "../controlador/servidor/ObservacionYTto.php";
	var type= "POST";
	var resultado = null;
	var data= {
		evento :'buscar',
		conId:conId
	};
	$.ajax({
		url:url,
		type:type,
		async: false,
		data:data,
		beforesend:function(){
			console.log("petición recibida");
		},
		success:function(response){
			resultado = response;
			if (resultado === "0") {
			}else{
				window.parent.$("#loader").hide();
				resultado = JSON.parse(response);
				if (resultado.sesion === undefined) {
					window.parent.$("html,body").animate({ scrollTop: 0 }, 600);
					$("#horaTriage").val(resultado[0].HORA_TRIAGE);
					if (resultado[0].RUT  !== "-" && resultado[0].RUT  !== "") {
						$("#rutPaci").text(resultado[0].RUT);
					}else{
						var sinRut  = "SIN DOCUMENTO";
						$("#rutPaci").text(sinRut);
					}

					$("#fnac").text(resultado[0].FECHA_NACIMIENTO);
					$("#direccion").text(resultado[0].DIRECCION);
					$("#telefono").text(resultado[0].TELEFONO);
					$("#nombrePaci").text(resultado[0].PACIENTE);
					$('#sexo').text(resultado[0].SEXO);
					$("#tipoConsulta").text(resultado[0].TIPO_CONSULTA);
					$("#edadPac").text(resultado[0].EDAD);
					$("#fechIngreso").text(resultado[0].HORA_ADMISION);
					$("#motivoConsulta").text(resultado[0].MOTIVO_CONSULTA);
					$("#correo").text(resultado[0].CORREO);
					if (resultado[0].HTA === "1" ) {$("#HTA").attr('checked', true);}else{ $("#HTA").attr('checked', false);}
					if (resultado[0].DM2 === "1" ) {$("#DM2").attr('checked', true);}else{ $("#DM2").attr('checked', false);}
					if (resultado[0].EPOC === "1" ) {$("#EPOC").attr('checked', true);}else{ $("#EPOC").attr('checked', false);}
					if (resultado[0].ASMA === "1" ) {$("#ASMA").attr('checked', true);}else{ $("#ASMA").attr('checked', false);}
					if (resultado[0].IRC === "1" ) {$("#IRC").attr('checked', true);}else{ $("#IRC").attr('checked', false);}
					if (resultado[0].DHC === "1" ) {$("#DHC").attr('checked', true);}else{ $("#DHC").attr('checked', false);}
					if (resultado[0].OTRA_EC === "1" ) {$("#OTRAS").attr('checked', true);}else{ $("#OTRAS").attr('checked', false);}
					$("#otrosEcDescrip").val(resultado[0].OTRA_TEXTO);
					$("#fc").val(resultado[0].FC);
					$("#fr").val(resultado[0].FR);
					$("#tempAx").val(resultado[0].T_AUX);
					$("#satO").val(resultado[0].SAT_02);
					$("#ps").val(resultado[0].PA_SISTOLICA);
					$("#pd").val(resultado[0].PA_DIASTOLICA);
					$("#hgt").val(resultado[0].HGT);
					$("#eEva").val(resultado[0].E_EVA);
					$("#eglasgow").val(resultado[0].E_GLASGOW);
					$("#peso").val(resultado[0].PESO);

					/*************************************************************************************************************/
					$("#Anamnesis").val(resultado[0].ANAMNESIS);
					$("#detCabeza").prop('disabled', true);
					$("#detTorax").prop('disabled', true);
					$("#detAbdomen").prop('disabled', true);
					$("#detPelvis").prop('disabled', true);
					$("#detExtSup").prop('disabled', true);
					$("#detExtInf").prop('disabled', true);
					$("#detExamNeuro").prop('disabled', true);
					if (resultado[0].CABEZA === "SI" || resultado[0].TORAX === "SI" || resultado[0].ABDOMEN === "SI" || resultado[0].PELVIS === "SI"
					 || resultado[0].EXT_SUPERIORES === "SI" || resultado[0].EXT_INFERIORES === "SI" || resultado[0].EX_NEUROLOGICO === "SI" ) {
						$("#nombreExamenFisico").show();
					}else{
						$("#nombreExamenFisico").hide();
					}

					switch(resultado[0].CABEZA){
						case 'SI': $("#Normal1").prop("checked", true); 
						$("#mostrarCabeza").show();
						break;
						case 'NO': $("#Anormal1").prop("checked", true); 
						$("#mostrarCabeza").hide();
						break;
					}

					switch(resultado[0].TORAX){
						case 'SI':$("#Normal2").prop("checked", true);	
						$("#mostrarTorax").show();
						break;
						case 'NO':$("#Anormal2").prop("checked", true); 
						$("#mostrarTorax").hide();
						break;
					}

					switch(resultado[0].ABDOMEN){
						case 'SI':$("#Normal3").prop("checked", true);	
						$("#mostrarAbdomen").show();
						break;
						case 'NO':$("#Anormal3").prop("checked", true); 
						$("#mostrarAbdomen").hide();
						break;
					}

					switch(resultado[0].PELVIS){
						case 'SI':$("#Normal4").prop("checked", true);	
						$("#mostrarPelvis").show();
						break;
						case 'NO': $("#Anormal4").prop("checked", true);
						$("#mostrarPelvis").hide();
						break;
					}

					switch(resultado[0].EXT_SUPERIORES){
						case 'SI':	$("#NormalCinco").prop("checked", true);
						$("#mostrarExtSuperiores").show();
						break;
						case 'NO': $("#AnormalCinco").prop("checked", true); 
						$("#mostrarExtSuperiores").hide();
						break;
					}

					switch(resultado[0].EXT_INFERIORES){
						case 'SI':$("#Normal6").prop("checked", true);	
						$("#mostrarExtInferiores").show();
						break;
						case 'NO':$("#Anormal6").prop("checked", true); 
						$("#mostrarExtInferiores").hide();
						break;
					}

					switch(resultado[0].EX_NEUROLOGICO){
						case 'SI':	$("#Normal7").prop("checked", true); 
						$("#mostrarExNeurologico").show();
						break;
						case 'NO': $("#Anormal7").prop("checked", true); 
						$("#mostrarExNeurologico").hide();
						break;
					}

					$("#detCabeza").val(resultado[0].CABEZA_TEXTO);
					$("#detTorax").val(resultado[0].TORAX_TEXTO);
					$("#detAbdomen").val(resultado[0].ABDOMEN_TEXTO);
					$("#detPelvis").val(resultado[0].PELVIS_TEXTO);
					$("#detExtSup").val(resultado[0].EXT_SUPERIORES_TEXTO);
					$("#detExtInf").val(resultado[0].EXT_INFERIORES_TEXTO);
					$("#detExamNeuro").val(resultado[0].EX_NEUROLOGICO_TEXTO);

					if (resultado[0].RADIOGRAFIA === "1" ||resultado[0].EXAMEN_SANGRE === "1" ||resultado[0].ECG === "1") {
						$("#nombreExamenes").show();	
					}else{
						$("#nombreExamenes").hide();
					}

					if(resultado[0].RADIOGRAFIA === "1"){
						$("#radiografia").prop("checked", true);
						$("#detRadio").val(resultado[0].RADIOGRAFIA_TEXTO);
						$("#mostrarRadiografia").show();
					}else{
						$("#radiografia").prop("checked", false);
						$("#mostrarRadiografia").hide();
						$("#detRadio").prop('disabled', true);
					}

					if(resultado[0].EXAMEN_SANGRE === "1"){
						$("#ExamenSangre").prop("checked", true);
						$("#detExSangre").val(resultado[0].EXAMEN_SANGRE_TEXTO);
						$("#mostrarExamenSangre").show();
					}else{
						$("#ExamenSangre").prop("checked", false);
						$("#mostrarExamenSangre").hide();
						$("#detExSangre").prop('disabled', true);
					}

					if(resultado[0].ECG === "1"){
						$("#ecg").prop("checked", true);
						$("#mostrarEcg").show();
					}else{
						$("#ecg").prop("checked", false);
						$("#mostrarEcg").hide();
					}

					/*************************************************************************************************************/
					$("#alergias").val(resultado[0].ALERGIAS);
					switch(resultado[0].CATEGORIZACION){
						case 'C1':$("#C1").attr('checked', true);break;
						case 'C2':$("#C2").attr('checked', true);break;
						case 'C3':$("#C3").attr('checked', true);break;
						case 'C4':$("#C4").attr('checked', true);break;
						case 'C5':$("#C5").attr('checked', true);break;
					}
					
					$("#horaAtencion").val(resultado[0].HORA_ATENCION_MEDICA);
					$("#diagnostico").val(resultado[0].SOSPECHA_DIAGNOSTICO);
					$("#ind1").val(resultado[0].TRATAMIENTO_1_IND_1);
					$("#ind2").val(resultado[0].TRATAMIENTO_1_IND_2);
					$("#ind3").val(resultado[0].TRATAMIENTO_1_IND_3);

					//LLENA EL PRIMER CONTROL  QUE PERTENECE A TRIAGE
						$("#indDos1").val(resultado[0].TRATAMIENTO_2_IND_1);
						$("#indDos2").val(resultado[0].TRATAMIENTO_2_IND_2);
						$("#indDos3").val(resultado[0].TRATAMIENTO_2_IND_3);
						$("#indTres1").val(resultado[0].TRATAMIENTO_3_IND_1);
						$("#indTres2").val(resultado[0].TRATAMIENTO_3_IND_2);
						$("#indTres3").val(resultado[0].TRATAMIENTO_3_IND_3);
						if (resultado[0].TRATAMIENTO_1_IND_1_REALIZADO === "1" ) {$("#Realizado1").attr('checked', true);  }else{ $("#Realizado1").attr('checked', false);}
						if (resultado[0].TRATAMIENTO_1_IND_2_REALIZADO === "1" ) {$("#Realizado2").attr('checked', true);  }else{ $("#Realizado2").attr('checked', false);}
						if (resultado[0].TRATAMIENTO_1_IND_3_REALIZADO === "1" ) {$("#Realizado3").attr('checked', true);  }else{ $("#Realizado3").attr('checked', false);}
						if (resultado[0].TRATAMIENTO_2_IND_1_REALIZADO === "1" ) {$("#RealizadoIndDos1").attr('checked', true);  }else{ $("#RealizadoIndDos1").attr('checked', false);}
						if (resultado[0].TRATAMIENTO_2_IND_2_REALIZADO === "1" ) {$("#RealizadoIndDos2").attr('checked', true);  }else{ $("#RealizadoIndDos2").attr('checked', false);}
						if (resultado[0].TRATAMIENTO_2_IND_3_REALIZADO === "1" ) {$("#RealizadoIndDos3").attr('checked', true);  }else{ $("#RealizadoIndDos3").attr('checked', false);}
						if (resultado[0].TRATAMIENTO_3_IND_1_REALIZADO === "1" ) {$("#RealizadoIndTres1").attr('checked', true);  }else{ $("#RealizadoIndTres1").attr('checked', false);}
						if (resultado[0].TRATAMIENTO_3_IND_2_REALIZADO === "1" ) {$("#RealizadoIndTres2").attr('checked', true);  }else{ $("#RealizadoIndTres2").attr('checked', false);}
						if (resultado[0].TRATAMIENTO_3_IND_3_REALIZADO === "1" ) {$("#RealizadoIndTres3").attr('checked', true);  }else{ $("#RealizadoIndTres3").attr('checked', false);}

						if ((ind1 !== "" && ind2 !== "" && ind3 !== "") &&  (Realizado1 !== false && Realizado2 !== false && Realizado3 !== false) ) {
							$("#manejoYTratamientoDosyTres").show();
							$("#IngresarMasTTo").hide();
						}else
							if ((ind1 !== "" && ind2 !== "" && ind3 === "") && (Realizado1 !== false && Realizado2 !== false && Realizado3 === false) ) {
								$("#manejoYTratamientoDosyTres").show();
								$("#IngresarMasTTo").hide();
							}else
								if ((ind1 !== "" && ind2 === "" && ind3 === "") && (Realizado1 !== false && Realizado2 === false && Realizado3 === false) ) {
									$("#manejoYTratamientoDosyTres").show();
									$("#IngresarMasTTo").hide();
								}else{
									$("#manejoYTratamientoDosyTres").hide();
									$("#IngresarMasTTo").show();
									alert("No se ha realizado las indicaciones descritas");
								}

						$("#horaControl1").val(resultado[0].HORA_TRIAGE);
						$("#horaControl2").val(resultado[0].HORA_CONTRAL_2);
						$("#horaControl3").val(resultado[0].HORA_CONTRAL_3);
						$("#horaControl4").val(resultado[0].HORA_CONTRAL_4);
						$("#horaControl5").val(resultado[0].HORA_CONTRAL_5);
						$("#horaControl6").val(resultado[0].HORA_CONTRAL_6);
						$("#fcCtr1").val(resultado[0].FC);
						$("#fcCtr2").val(resultado[0].FC_2);
						$("#fcCtr3").val(resultado[0].FC_3);
						$("#fcCtr4").val(resultado[0].FC_4);
						$("#fcCtr5").val(resultado[0].FC_5);
						$("#fcCtr6").val(resultado[0].FC_6);
						$("#frCtr1").val(resultado[0].FR);
						$("#frCtr2").val(resultado[0].FR_2);
						$("#frCtr3").val(resultado[0].FR_3);
						$("#frCtr4").val(resultado[0].FR_4);
						$("#frCtr5").val(resultado[0].FR_5);
						$("#frCtr6").val(resultado[0].FR_6);
						$("#temAxCtr1").val(resultado[0].T_AUX);
						$("#temAxCtr2").val(resultado[0].TEMP_AUX_2);
						$("#temAxCtr3").val(resultado[0].TEMP_AUX_3);
						$("#temAxCtr4").val(resultado[0].TEMP_AUX_4);
						$("#temAxCtr5").val(resultado[0].TEMP_AUX_5);
						$("#temAxCtr6").val(resultado[0].TEMP_AUX_6);
						$("#satOCtr1").val(resultado[0].SAT_02);
						$("#satOCtr2").val(resultado[0].SAT_02_2);
						$("#satOCtr3").val(resultado[0].SAT_02_3);
						$("#satOCtr4").val(resultado[0].SAT_02_4);
						$("#satOCtr5").val(resultado[0].SAT_02_5);
						$("#satOCtr6").val(resultado[0].SAT_02_6);
						$("#hgtCtr1").val(resultado[0].HGT);
						$("#hgtCtr2").val(resultado[0].HGT_2);
						$("#hgtCtr3").val(resultado[0].HGT_3);
						$("#hgtCtr4").val(resultado[0].HGT_4);
						$("#hgtCtr5").val(resultado[0].HGT_5);
						$("#hgtCtr6").val(resultado[0].HGT_6);
						$("#psCtr1").val(resultado[0].PA_SISTOLICA);
						$("#psCtr2").val(resultado[0].PA_SISTOLICA_2);
						$("#psCtr3").val(resultado[0].PA_SISTOLICA_3);
						$("#psCtr4").val(resultado[0].PA_SISTOLICA_4);
						$("#psCtr5").val(resultado[0].PA_SISTOLICA_5);
						$("#psCtr6").val(resultado[0].PA_SISTOLICA_6);
						$("#pdCtr1").val(resultado[0].PA_DIASTOLICA);
						$("#pdCtr2").val(resultado[0].PA_DIASTOLICA_2);
						$("#pdCtr3").val(resultado[0].PA_DIASTOLICA_3);
						$("#pdCtr4").val(resultado[0].PA_DIASTOLICA_4);
						$("#pdCtr5").val(resultado[0].PA_DIASTOLICA_5);
						$("#pdCtr6").val(resultado[0].PA_DIASTOLICA_6);		
						$("#eGlsCrt1").val(resultado[0].E_GLASGOW);
						$("#eGlsCrt2").val(resultado[0].E_GLASGOW_2);
						$("#eGlsCrt3").val(resultado[0].E_GLASGOW_3);
						$("#eGlsCrt4").val(resultado[0].E_GLASGOW_4);
						$("#eGlsCrt5").val(resultado[0].E_GLASGOW_5);
						$("#eGlsCrt6").val(resultado[0].E_GLASGOW_6);
						$("#evaCtr1").val(resultado[0].E_EVA);
						$("#evaCtr2").val(resultado[0].E_EVA_2);
						$("#evaCtr3").val(resultado[0].E_EVA_3);
						$("#evaCtr4").val(resultado[0].E_EVA_4);
						$("#evaCtr5").val(resultado[0].E_EVA_5);
						$("#evaCtr6").val(resultado[0].E_EVA_6);
						$("#ObservacionesTto").val(resultado[0].OBSERVACIONES);

						var data = resultado[0].OBSERVACIONES.length;
						var maxLength = 150;
						var minlength = 0;
						var contador = (minlength + data);
						if (contador == 150) {
							document.getElementById("charNum").innerHTML = contador+'/'+maxLength;
						}else{
							document.getElementById("charNum").innerHTML = contador+'/'+maxLength;
						}

					/*************************************************** VALIDACIONES************************************************************************/

						var TRATAMIENTO_1_IND_1= resultado[0].TRATAMIENTO_1_IND_1;
						var TRATAMIENTO_1_IND_2= resultado[0].TRATAMIENTO_1_IND_2;
						var TRATAMIENTO_1_IND_3= resultado[0].TRATAMIENTO_1_IND_3;

						$("#ind1").prop('disabled', true);
						$("#ind2").prop('disabled', true);
						$("#ind3").prop('disabled', true);
						if (TRATAMIENTO_1_IND_1 !== "" && resultado[0].TRATAMIENTO_1_IND_1_REALIZADO === "1" ) {
						$("#Realizado1").attr('disabled', true); }else{ $("#Realizado1").attr('disabled', false);}

						if (TRATAMIENTO_1_IND_2 !== "" && resultado[0].TRATAMIENTO_1_IND_2_REALIZADO === "1" ) {
							$("#Realizado2").attr('disabled', true);
						}else{
							if (TRATAMIENTO_1_IND_2 === ""){
								$("#Realizado2").attr('disabled', true);
							}else{
								$("#Realizado2").attr('disabled', false);
							}
						}

						if (resultado[0].TRATAMIENTO_1_IND_3_REALIZADO === "1" ) {
							$("#Realizado3").attr('disabled', true); }
						else{
							if (TRATAMIENTO_1_IND_3 === "") {
								$("#Realizado3").attr('disabled', true);
							}else{
								$("#Realizado3").attr('disabled', false);
							}
						}

						//VALIDA SI EXISTE DATA EN LAS INDICACIONES 2 Y 3
						var perfil = resultado[0].PERMISO_MEDICO;
						if (resultado[0].TRATAMIENTO_2_IND_1=== "") {
							switch(perfil){
								case '1': // MEDICOS
								    $("#IngresarMasTTo").show();
								    $("#manejoYTratamientoDosyTres").hide();
								break;
								case '2': // ENFERMERA
								    $("#manejoYTratamientoDosyTres").hide();
								break;
								case '3': // TECNICOS
								    $("#manejoYTratamientoDosyTres").hide();
								break;
								case '4': //INFORMATICA
								    $("#IngresarMasTTo").show();
								    $("#manejoYTratamientoDosyTres").hide();
								break;
								case '5': // ADMINISTRATIVOS
								    $("#manejoYTratamientoDosyTres").hide();
								break;
								default: // SIN CLASIFICACION
									$("#manejoYTratamientoDosyTres").hide();
								break;
							}
						}else{
							$("#manejoYTratamientoDosyTres").show();
						}

						if (resultado[0].TRATAMIENTO_2_IND_1_REALIZADO === "1" ) {$("#RealizadoIndDos1").attr('disabled', true); }else{ $("#RealizadoIndDos1").attr('disabled', false);}
						if (resultado[0].TRATAMIENTO_2_IND_2_REALIZADO === "1" ) {$("#RealizadoIndDos2").attr('disabled', true); }else{ $("#RealizadoIndDos2").attr('disabled', false);}
						if (resultado[0].TRATAMIENTO_2_IND_3_REALIZADO === "1" ) {$("#RealizadoIndDos3").attr('disabled', true); }else{ $("#RealizadoIndDos3").attr('disabled', false);}
						if (resultado[0].TRATAMIENTO_3_IND_1_REALIZADO === "1" ) {$("#RealizadoIndTres1").attr('disabled', true); }else{ $("#RealizadoIndTres1").attr('disabled', false);}
						if (resultado[0].TRATAMIENTO_3_IND_2_REALIZADO === "1" ) {$("#RealizadoIndTres2").attr('disabled', true); }else{ $("#RealizadoIndTres2").attr('disabled', false);}
						if (resultado[0].TRATAMIENTO_3_IND_3_REALIZADO === "1" ) {$("#RealizadoIndTres3").attr('disabled', true); }else{ $("#RealizadoIndTres3").attr('disabled', false);}
						if(resultado[0].TRATAMIENTO_2_IND_1=== ""){$("#indDos1").prop('disabled', false);}else{$("#indDos1").prop('disabled', true);}
						if(resultado[0].TRATAMIENTO_2_IND_2=== ""){$("#indDos2").prop('disabled', false);}else{$("#indDos2").prop('disabled', true);}
						if(resultado[0].TRATAMIENTO_2_IND_3=== ""){$("#indDos3").prop('disabled', false);}else{$("#indDos3").prop('disabled', true);}
						if(resultado[0].TRATAMIENTO_3_IND_1=== ""){$("#indTres1").prop('disabled', false);}else{$("#indTres1").prop('disabled', true);}
						if(resultado[0].TRATAMIENTO_3_IND_2=== ""){$("#indTres2").prop('disabled', false);}else{$("#indTres2").prop('disabled', true);}
						if(resultado[0].TRATAMIENTO_3_IND_3=== ""){$("#indTres3").prop('disabled', false);}else{$("#indTres3").prop('disabled', true);}
						if(resultado[0].FC_2=== ""){$("#fcCtr2").prop('disabled', false);}else{$("#fcCtr2").prop('disabled', true);}
						if(resultado[0].FC_3=== ""){$("#fcCtr3").prop('disabled', false);}else{$("#fcCtr3").prop('disabled', true);}
						if(resultado[0].FC_4=== ""){$("#fcCtr4").prop('disabled', false);}else{$("#fcCtr4").prop('disabled', true);}
						if(resultado[0].FC_5=== ""){$("#fcCtr5").prop('disabled', false);}else{$("#fcCtr5").prop('disabled', true);}
						if(resultado[0].FC_6=== ""){$("#fcCtr6").prop('disabled', false);}else{$("#fcCtr6").prop('disabled', true);}
						if(resultado[0].FR_2=== ""){$("#frCtr2").prop('disabled', false);}else{$("#frCtr2").prop('disabled', true);}
						if(resultado[0].FR_3=== ""){$("#frCtr3").prop('disabled', false);}else{$("#frCtr3").prop('disabled', true);}
						if(resultado[0].FR_4=== ""){$("#frCtr4").prop('disabled', false);}else{$("#frCtr4").prop('disabled', true);}
						if(resultado[0].FR_5=== ""){$("#frCtr5").prop('disabled', false);}else{$("#frCtr5").prop('disabled', true);}
						if(resultado[0].FR_6=== ""){$("#frCtr6").prop('disabled', false);}else{$("#frCtr6").prop('disabled', true);}
						if(resultado[0].TEMP_AUX_2=== ""){$("#temAxCtr2").prop('disabled', false);}else{$("#temAxCtr2").prop('disabled', true);}
						if(resultado[0].TEMP_AUX_3=== ""){$("#temAxCtr3").prop('disabled', false);}else{$("#temAxCtr3").prop('disabled', true);}
						if(resultado[0].TEMP_AUX_4=== ""){$("#temAxCtr4").prop('disabled', false);}else{$("#temAxCtr4").prop('disabled', true);}
						if(resultado[0].TEMP_AUX_5=== ""){$("#temAxCtr5").prop('disabled', false);}else{$("#temAxCtr5").prop('disabled', true);}
						if(resultado[0].TEMP_AUX_6=== ""){$("#temAxCtr6").prop('disabled', false);}else{$("#temAxCtr6").prop('disabled', true);}
						if(resultado[0].SAT_02_2=== ""){$("#satOCtr2").prop('disabled', false);}else{$("#satOCtr2").prop('disabled', true);}
						if(resultado[0].SAT_02_3=== ""){$("#satOCtr3").prop('disabled', false);}else{$("#satOCtr3").prop('disabled', true);}
						if(resultado[0].SAT_02_4=== ""){$("#satOCtr4").prop('disabled', false);}else{$("#satOCtr4").prop('disabled', true);}
						if(resultado[0].SAT_02_5=== ""){$("#satOCtr5").prop('disabled', false);}else{$("#satOCtr5").prop('disabled', true);}
						if(resultado[0].SAT_02_6=== ""){$("#satOCtr6").prop('disabled', false);}else{$("#satOCtr6").prop('disabled', true);}
						if(resultado[0].HGT_2=== ""){$("#hgtCtr2").prop('disabled', false);}else{$("#hgtCtr2").prop('disabled', true);}
						if(resultado[0].HGT_3=== ""){$("#hgtCtr3").prop('disabled', false);}else{$("#hgtCtr3").prop('disabled', true);}
						if(resultado[0].HGT_4=== ""){$("#hgtCtr4").prop('disabled', false);}else{$("#hgtCtr4").prop('disabled', true);}
						if(resultado[0].HGT_5=== ""){$("#hgtCtr5").prop('disabled', false);}else{$("#hgtCtr5").prop('disabled', true);}
						if(resultado[0].HGT_6=== ""){$("#hgtCtr6").prop('disabled', false);}else{$("#hgtCtr6").prop('disabled', true);}
						if(resultado[0].PA_SISTOLICA_2=== ""){$("#psCtr2").prop('disabled', false);}else{$("#psCtr2").prop('disabled', true);}
						if(resultado[0].PA_SISTOLICA_3=== ""){$("#psCtr3").prop('disabled', false);}else{$("#psCtr3").prop('disabled', true);}
						if(resultado[0].PA_SISTOLICA_4=== ""){$("#psCtr4").prop('disabled', false);}else{$("#psCtr4").prop('disabled', true);}
						if(resultado[0].PA_SISTOLICA_5=== ""){$("#psCtr5").prop('disabled', false);}else{$("#psCtr5").prop('disabled', true);}
						if(resultado[0].PA_SISTOLICA_6=== ""){$("#psCtr6").prop('disabled', false);}else{$("#psCtr6").prop('disabled', true);}
						if(resultado[0].PA_DIASTOLICA_2=== ""){$("#pdCtr2").prop('disabled', false);}else{$("#pdCtr2").prop('disabled', true);}
						if(resultado[0].PA_DIASTOLICA_3=== ""){$("#pdCtr3").prop('disabled', false);}else{$("#pdCtr3").prop('disabled', true);}
						if(resultado[0].PA_DIASTOLICA_4=== ""){$("#pdCtr4").prop('disabled', false);}else{$("#pdCtr4").prop('disabled', true);}
						if(resultado[0].PA_DIASTOLICA_5=== ""){$("#pdCtr5").prop('disabled', false);}else{$("#pdCtr5").prop('disabled', true);}
						if(resultado[0].PA_DIASTOLICA_6=== ""){$("#pdCtr6").prop('disabled', false);}else{$("#pdCtr6").prop('disabled', true);}
						if(resultado[0].E_GLASGOW_2=== ""){$("#eGlsCrt2").prop('disabled', false);}else{$("#eGlsCrt2").prop('disabled', true);}
						if(resultado[0].E_GLASGOW_3=== ""){$("#eGlsCrt3").prop('disabled', false);}else{$("#eGlsCrt3").prop('disabled', true);}
						if(resultado[0].E_GLASGOW_4=== ""){$("#eGlsCrt4").prop('disabled', false);}else{$("#eGlsCrt4").prop('disabled', true);}
						if(resultado[0].E_GLASGOW_5=== ""){$("#eGlsCrt5").prop('disabled', false);}else{$("#eGlsCrt5").prop('disabled', true);}
						if(resultado[0].E_GLASGOW_6=== ""){$("#eGlsCrt6").prop('disabled', false);}else{$("#eGlsCrt6").prop('disabled', true);}
						if(resultado[0].E_EVA_2=== ""){$("#evaCtr2").prop('disabled', false);}else{$("#evaCtr2").prop('disabled', true);}
						if(resultado[0].E_EVA_3=== ""){$("#evaCtr3").prop('disabled', false);}else{$("#evaCtr3").prop('disabled', true);}
						if(resultado[0].E_EVA_4=== ""){$("#evaCtr4").prop('disabled', false);}else{$("#evaCtr4").prop('disabled', true);}
						if(resultado[0].E_EVA_5=== ""){$("#evaCtr5").prop('disabled', false);}else{$("#evaCtr5").prop('disabled', true);}
						if(resultado[0].E_EVA_6=== ""){$("#evaCtr6").prop('disabled', false);}else{$("#evaCtr6").prop('disabled', true);}

						//HABILIAR Y DESHABILITAR CAMPOS
						if(resultado[0].FC_2 === ""){
							$("#fcCtr3").prop('disabled', true);
							$("#frCtr3").prop('disabled', true);
							$("#temAxCtr3").prop('disabled', true);
							$("#satOCtr3").prop('disabled', true);
							$("#hgtCtr3").prop('disabled', true);
							$("#psCtr3").prop('disabled', true);
							$("#pdCtr3").prop('disabled', true);
							$("#eGlsCrt3").prop('disabled', true);
							$("#evaCtr3").prop('disabled', true);
							$("#fcCtr4").prop('disabled', true);
							$("#frCtr4").prop('disabled', true);
							$("#temAxCtr4").prop('disabled', true);
							$("#satOCtr4").prop('disabled', true);
							$("#hgtCtr4").prop('disabled', true);
							$("#psCtr4").prop('disabled', true);
							$("#pdCtr4").prop('disabled', true);
							$("#eGlsCrt4").prop('disabled', true);
							$("#evaCtr4").prop('disabled', true);
							$("#fcCtr5").prop('disabled', true);
							$("#frCtr5").prop('disabled', true);
							$("#temAxCtr5").prop('disabled', true);
							$("#satOCtr5").prop('disabled', true);
							$("#hgtCtr5").prop('disabled', true);
							$("#psCtr5").prop('disabled', true);
							$("#pdCtr5").prop('disabled', true);
							$("#eGlsCrt5").prop('disabled', true);
							$("#evaCtr5").prop('disabled', true);
							$("#fcCtr6").prop('disabled', true);
							$("#frCtr6").prop('disabled', true);
							$("#temAxCtr6").prop('disabled', true);
							$("#satOCtr6").prop('disabled', true);
							$("#hgtCtr6").prop('disabled', true);
							$("#psCtr6").prop('disabled', true);
							$("#pdCtr6").prop('disabled', true);
							$("#eGlsCrt6").prop('disabled', true);
							$("#evaCtr6").prop('disabled', true);
						}
						if(resultado[0].FC_3 === ""){
							$("#fcCtr4").prop('disabled', true);
							$("#frCtr4").prop('disabled', true);
							$("#temAxCtr4").prop('disabled', true);
							$("#satOCtr4").prop('disabled', true);
							$("#hgtCtr4").prop('disabled', true);
							$("#psCtr4").prop('disabled', true);
							$("#pdCtr4").prop('disabled', true);
							$("#eGlsCrt4").prop('disabled', true);
							$("#evaCtr4").prop('disabled', true);
							$("#fcCtr5").prop('disabled', true);
							$("#frCtr5").prop('disabled', true);
							$("#temAxCtr5").prop('disabled', true);
							$("#satOCtr5").prop('disabled', true);
							$("#hgtCtr5").prop('disabled', true);
							$("#psCtr5").prop('disabled', true);
							$("#pdCtr5").prop('disabled', true);
							$("#eGlsCrt5").prop('disabled', true);
							$("#evaCtr5").prop('disabled', true);
							$("#fcCtr6").prop('disabled', true);
							$("#frCtr6").prop('disabled', true);
							$("#temAxCtr6").prop('disabled', true);
							$("#satOCtr6").prop('disabled', true);
							$("#hgtCtr6").prop('disabled', true);
							$("#psCtr6").prop('disabled', true);
							$("#pdCtr6").prop('disabled', true);
							$("#eGlsCrt6").prop('disabled', true);
							$("#evaCtr6").prop('disabled', true);
						}
						if(resultado[0].FC_4 === ""){
							$("#fcCtr5").prop('disabled', true);
							$("#frCtr5").prop('disabled', true);
							$("#temAxCtr5").prop('disabled', true);
							$("#satOCtr5").prop('disabled', true);
							$("#hgtCtr5").prop('disabled', true);
							$("#psCtr5").prop('disabled', true);
							$("#pdCtr5").prop('disabled', true);
							$("#eGlsCrt5").prop('disabled', true);
							$("#evaCtr5").prop('disabled', true);
							$("#fcCtr6").prop('disabled', true);
							$("#frCtr6").prop('disabled', true);
							$("#temAxCtr6").prop('disabled', true);
							$("#satOCtr6").prop('disabled', true);
							$("#hgtCtr6").prop('disabled', true);
							$("#psCtr6").prop('disabled', true);
							$("#pdCtr6").prop('disabled', true);
							$("#eGlsCrt6").prop('disabled', true);
							$("#evaCtr6").prop('disabled', true);
						}
						if(resultado[0].FC_5 === ""){
							$("#fcCtr6").prop('disabled', true);
							$("#frCtr6").prop('disabled', true);
							$("#temAxCtr6").prop('disabled', true);
							$("#satOCtr6").prop('disabled', true);
							$("#hgtCtr6").prop('disabled', true);
							$("#psCtr6").prop('disabled', true);
							$("#pdCtr6").prop('disabled', true);
							$("#eGlsCrt6").prop('disabled', true);
							$("#evaCtr6").prop('disabled', true);
						}

						if(resultado[0].FC_2 !== "" && resultado[0].FR_2 !== "" && resultado[0].TEMP_AUX_2 !== "" && resultado[0].SAT_02_2 !== "" && resultado[0].PA_SISTOLICA_2 !== "" && resultado[0].PA_DIASTOLICA_2 !== "" ){
							$("#fcCtr2").prop('disabled', true);
							$("#frCtr2").prop('disabled', true);
							$("#temAxCtr2").prop('disabled', true);
							$("#satOCtr2").prop('disabled', true);
							$("#hgtCtr2").prop('disabled', true);
							$("#psCtr2").prop('disabled', true);
							$("#pdCtr2").prop('disabled', true);
							$("#eGlsCrt2").prop('disabled', true);
							$("#evaCtr2").prop('disabled', true);
						}

						if(resultado[0].FC_3 !== "" && resultado[0].FR_3 !== "" && resultado[0].TEMP_AUX_3 !== "" && resultado[0].SAT_03_3 !== "" && resultado[0].PA_SISTOLICA_3 !== "" && resultado[0].PA_DIASTOLICA_3 !== "" ){
							$("#fcCtr3").prop('disabled', true);
							$("#frCtr3").prop('disabled', true);
							$("#temAxCtr3").prop('disabled', true);
							$("#satOCtr3").prop('disabled', true);
							$("#hgtCtr3").prop('disabled', true);
							$("#psCtr3").prop('disabled', true);
							$("#pdCtr3").prop('disabled', true);
							$("#eGlsCrt3").prop('disabled', true);
							$("#evaCtr3").prop('disabled', true);
						}

						if(resultado[0].FC_4 !== "" && resultado[0].FR_4 !== "" && resultado[0].TEMP_AUX_4 !== "" && resultado[0].SAT_04_4 !== "" && resultado[0].PA_SISTOLICA_4 !== "" && resultado[0].PA_DIASTOLICA_4 !== "" ){
							$("#fcCtr4").prop('disabled', true);
							$("#frCtr4").prop('disabled', true);
							$("#temAxCtr4").prop('disabled', true);
							$("#satOCtr4").prop('disabled', true);
							$("#hgtCtr4").prop('disabled', true);
							$("#psCtr4").prop('disabled', true);
							$("#pdCtr4").prop('disabled', true);
							$("#eGlsCrt4").prop('disabled', true);
							$("#evaCtr4").prop('disabled', true);
						}

						if(resultado[0].FC_5 !== "" && resultado[0].FR_5 !== "" && resultado[0].TEMP_AUX_5 !== "" && resultado[0].SAT_05_5 !== "" && resultado[0].PA_SISTOLICA_5 !== "" && resultado[0].PA_DIASTOLICA_5 !== "" ){
							$("#fcCtr5").prop('disabled', true);
							$("#frCtr5").prop('disabled', true);
							$("#temAxCtr5").prop('disabled', true);
							$("#satOCtr5").prop('disabled', true);
							$("#hgtCtr5").prop('disabled', true);
							$("#psCtr5").prop('disabled', true);
							$("#pdCtr5").prop('disabled', true);
							$("#eGlsCrt5").prop('disabled', true);
							$("#evaCtr5").prop('disabled', true);
						}

						if(resultado[0].FC_6 !== "" && resultado[0].FR_6 !== "" && resultado[0].TEMP_AUX_6 !== "" && resultado[0].SAT_06_6 !== "" && resultado[0].PA_SISTOLICA_6 !== "" && resultado[0].PA_DIASTOLICA_6 !== "" ){
							$("#fcCtr6").prop('disabled', true);
							$("#frCtr6").prop('disabled', true);
							$("#temAxCtr6").prop('disabled', true);
							$("#satOCtr6").prop('disabled', true);
							$("#hgtCtr6").prop('disabled', true);
							$("#psCtr6").prop('disabled', true);
							$("#pdCtr6").prop('disabled', true);
							$("#eGlsCrt6").prop('disabled', true);
							$("#evaCtr6").prop('disabled', true);
						}

					/*************************************************** VALIDACIONES************************************************************************/
				}else{
					valorsesion = resultado.sesion;
				}

			
			}// END ELSE
			 
		}, // End success
		error:function(error){
			console.log("Error en la petición");
		} // End error
	});//End ajax
}

function CrearProcedimientoYtto(conId,horaIngresoPantalla,fechaYHoraPantalla,Realizado1,Realizado2,Realizado3,indDos1,indDos2,indDos3,RealizadoIndDos1,RealizadoIndDos2,RealizadoIndDos3,indTres1,indTres2,indTres3,RealizadoIndTres1,RealizadoIndTres2,RealizadoIndTres3,horaControl1,horaControl2,horaControl3,horaControl4,horaControl5,horaControl6,fcCtr1,fcCtr2,fcCtr3,fcCtr4,fcCtr5,fcCtr6,frCtr1,frCtr2,frCtr3,frCtr4,frCtr5,frCtr6,temAxCtr1,temAxCtr2,temAxCtr3,temAxCtr4,temAxCtr5,temAxCtr6,satOCtr1,satOCtr2,satOCtr3,satOCtr4,satOCtr5,satOCtr6,hgtCtr1,hgtCtr2,hgtCtr3,hgtCtr4,hgtCtr5,hgtCtr6,psCtr1,psCtr2,psCtr3,psCtr4,psCtr5,psCtr6,pdCtr1,pdCtr2,pdCtr3,pdCtr4,pdCtr5,pdCtr6,eGlsCrt1,eGlsCrt2,eGlsCrt3,eGlsCrt4,eGlsCrt5,eGlsCrt6,evaCtr1,evaCtr2,evaCtr3,evaCtr4,evaCtr5,evaCtr6,ObservacionesTto,perId,fechaSalida){
	var url= "../controlador/servidor/ObservacionYTto.php";
	var type= "POST";
	var resultado = null;
	var fechaSalida = fechaSalida;
	var data= {
		evento :'ingresarTratamiento',
		conId:conId,
		horaIngresoPantalla:horaIngresoPantalla,
		fechaYHoraPantalla:fechaYHoraPantalla,
		Realizado1:Realizado1,
		Realizado2:Realizado2,
		Realizado3:Realizado3,
		indDos1:indDos1,
		indDos2:indDos2,
		indDos3:indDos3,
		RealizadoIndDos1:RealizadoIndDos1,
		RealizadoIndDos2:RealizadoIndDos2,
		RealizadoIndDos3:RealizadoIndDos3,
		indTres1:indTres1,
		indTres2:indTres2,
		indTres3:indTres3,
		RealizadoIndTres1:RealizadoIndTres1,
		RealizadoIndTres2:RealizadoIndTres2,
		RealizadoIndTres3:RealizadoIndTres3,
		horaControl1:horaControl1,
		horaControl2:horaControl2,
		horaControl3:horaControl3,
		horaControl4:horaControl4,
		horaControl5:horaControl5,
		horaControl6:horaControl6,
		fcCtr1:fcCtr1,
		fcCtr2:fcCtr2,
		fcCtr3:fcCtr3,
		fcCtr4:fcCtr4,
		fcCtr5:fcCtr5,
		fcCtr6:fcCtr6,
		frCtr1:frCtr1,
		frCtr2:frCtr2,
		frCtr3:frCtr3,
		frCtr4:frCtr4,
		frCtr5:frCtr5,
		frCtr6:frCtr6,
		temAxCtr1:temAxCtr1,
		temAxCtr2:temAxCtr2,
		temAxCtr3:temAxCtr3,
		temAxCtr4:temAxCtr4,
		temAxCtr5:temAxCtr5,
		temAxCtr6:temAxCtr6,
		satOCtr1:satOCtr1,
		satOCtr2:satOCtr2,
		satOCtr3:satOCtr3,
		satOCtr4:satOCtr4,
		satOCtr5:satOCtr5,
		satOCtr6:satOCtr6,
		hgtCtr1:hgtCtr1,
		hgtCtr2:hgtCtr2,
		hgtCtr3:hgtCtr3,
		hgtCtr4:hgtCtr4,
		hgtCtr5:hgtCtr5,
		hgtCtr6:hgtCtr6,
		psCtr1:psCtr1,
		psCtr2:psCtr2,
		psCtr3:psCtr3,
		psCtr4:psCtr4,
		psCtr5:psCtr5,
		psCtr6:psCtr6,
		pdCtr1:pdCtr1,
		pdCtr2:pdCtr2,
		pdCtr3:pdCtr3,
		pdCtr4:pdCtr4,
		pdCtr5:pdCtr5,
		pdCtr6:pdCtr6,
		eGlsCrt1:eGlsCrt1,
		eGlsCrt2:eGlsCrt2,
		eGlsCrt3:eGlsCrt3,
		eGlsCrt4:eGlsCrt4,
		eGlsCrt5:eGlsCrt5,
		eGlsCrt6:eGlsCrt6,
		evaCtr1:evaCtr1,
		evaCtr2:evaCtr2,
		evaCtr3:evaCtr3,
		evaCtr4:evaCtr4,
		evaCtr5:evaCtr5,
		evaCtr6:evaCtr6,
		ObservacionesTto:ObservacionesTto,
		perId:perId,
		fechaSalida:fechaSalida
	};
	$.ajax({
		url:url,
		type:type,
		async: false,
		data:data,
		beforesend:function(){
			console.log("petición recibida");
		},
		success:function(response){
			window.parent.$("#loader").hide();
			resultado = JSON.parse(response);
			if (resultado.sesion === undefined) {
				window.parent.$("html,body").animate({ scrollTop: 0 }, 600);
				$("#ingresarNspPaciente").hide();
				$("#myModal").modal();
				if (resultado[0].data === "true") {
						//validacion para el mensaje a traves de la fecha de salida dle sistema
						$("#botonClose").hide();
						if (fechaSalida === "") {
							$("#cargandoPdf").show();
							$("#Aceptar").hide();
							$("#AceptarEgreso").hide();
							$("#mensaje").empty();
							var texto = "<h3> Se ha guardado el tratamiento del paciente.  </h3>";
						}else{
							$("#cargandoPdf").show();
							$("#Aceptar").hide();
							$("#AceptarEgreso").hide();
							$("#mensaje").empty();
							var texto = "<h3> Se ha finalizado el tratamiento del paciente.  </h3>";
						}
						redireccionar();
				}else{
					$("#cargandoPdf").hide();
					$("#Aceptar").show();
					$("#AceptarEgreso").hide();
					$("#botonClose").show();
					$("#mensaje").empty();
					var texto = "<h3> No se ha guardado el tratamiento.  </h3>";
					$("#myModal").modal({backdrop: 'static', keyboard: false});
				}
				$("#mensaje").append(texto);
				$("#myModal").modal({backdrop: 'static', keyboard: false});
			}else{
				valorsesion = resultado.sesion;
			}
		}, // End success
		error:function(error){
			console.log("Error en la petición");
		} // End error
	});//End ajax
}

function obtenerValidacionIngresoPacientes(conId,tab,fechaHora,perId,carId){
	var url= "../controlador/servidor/ObservacionYTto.php";
	var type= "POST";
	var conId = conId
	var tab = tab;
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
			console.log("petición recibida");
		},
		success:function(response){
			window.parent.$("#loader").hide();
			resultado = JSON.parse(response);
			if (resultado.sesion === undefined) {
				if (resultado[0].data === "0") {
					$("#cargandoPdf").hide();
					$('#myModal').modal('hide');
					$("#mensaje").empty();
				    var texto = "<h3>  Error al volver al inicio </h3>";
				    $("#mensaje").append(texto);
					$('#modalValidacion').modal();
				}else{
					resultado = JSON.parse(response);
					$(location).attr('href',"dashboard.php?tab="+tab);
				}
			}else{
				valorsesion = resultado.sesion;
			}
		}, // End success
		error:function(error){
			console.log("Error en la petición");
		} // End error
	});//End ajax
}

function registrarNspPaciente(conId,fechaYHoraPantalla,ObservacionNsp,perId,fechaSalida){
	var url= "../controlador/servidor/ObservacionYTto.php";
	var type= "POST";
	var resultado = null;
	var data= {
		evento :'ingresarNSPPaciente',
		conId:conId,
		fechaYHoraPantalla:fechaYHoraPantalla,
		ObservacionNsp:ObservacionNsp,
		perId:perId,
		fechaSalida:fechaSalida
	};
	$.ajax({
		url:url,
		type:type,
		async: false,
		data:data,
		beforesend:function(){
			console.log("petición recibida");
		},
		success:function(response){
			resultado = JSON.parse(response);
			window.parent.$("html,body").animate({ scrollTop: 0 }, 600);
			$("#ingresarNspPaciente").hide();
			$("#myModal").modal();

			if (resultado.sesion === undefined) {
				if (resultado[0].data === "true") {
					$("#Aceptar").hide();
					$("#cargandoPdf").show();
					$("#AceptarEgreso").hide();
					$("#mensaje").empty();
					var texto = "<h3> Se ha registrado la ausencia del paciente. </h3>";
					redireccionar();
				}else{
					$("#cargandoPdf").hide();
					$("#mensaje").empty();
					$("#AceptarEgreso").hide();
					$("#Aceptar").show();
					var texto = "<h3> No se ha podido registrar el NSP.  </h3>";
				}
				$("#mensaje").append(texto);
				$("#myModal").modal({backdrop: 'static', keyboard: false});
			}else{
				valorsesion = resultado.sesion;
			}
		}, // End success
		error:function(error){
			console.log("Error en la petición");
		} // End error
	});//End ajax
}

var contador = 3;
function cuentaAtras() {
	if (contador==0) {
		$(location).attr('href',"dashboard.php");
	} else {
		contador--;
		setTimeout(cuentaAtras, 1000);
	}
}

function FinalizarSesion(){
	alert('Su sesión fue cerrada por inactividad en los últimos 45 minutos.');
	window.setTimeout(function () { 
    	window.top.location.href= '../../../index.php';
    }, 5000);
}


//REDIRECCIONA AL MENU PRINCIPAL CUANDO INGRESA UN REGISTRO
	function redireccionar() {
		window.setTimeout("obtenerValidacionIngresoPacientesDesbl()",2000);
	}


	function obtenerValidacionIngresoPacientesDesbl() {
		var tab = "tab4";
		var conId = $("#conId").val();
		var fechaHoy = $("#fechaHoy").val();
	 	var hora = window.parent.$("#reloj").val();
	 	var fechaHora = fechaHoy+" "+hora;
	 	var perId = window.parent.$("#perId").val();
		var carId = 2;
		var url= "../controlador/servidor/triageController.php";
		var type= "POST";
		var dato = dato
		var tab = tab;
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
				console.log("petición recibida");
			},
			success:function(response){
				resultado = response;
				$("#mensaje").empty();
				if (resultado === "0") {
					$('#myModal').modal('hide');
					$("#mensaje").empty();
				    var texto = "<h3>  Error al volver al inicio </h3>";
				    $("#mensaje").append(texto);
					$('#modalValidacion').modal();
				}else{
					resultado = JSON.parse(response);
					if (resultado.sesion === undefined) {
						$(location).attr('href',"dashboard.php?tab="+tab);
					}else{
						valorsesion = resultado.sesion;
					}
				}
			}, // End success
			error:function(error){
				console.log("Error en la petición");
			} // End error
		});//End ajax
	}
