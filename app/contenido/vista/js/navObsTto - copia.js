let countClicks = 0;
let recuadroDataVisible = false;
let valorsesion = 0;

$( document ).ready(function() {
	$('body').tooltip({selector: '[data-toggle=tooltip]'});
	$("#cargandoPdf").hide();
	$("#recuadroData").hide();
	$("#AceptarEgreso").hide();
	var test = location.search.replace('?', '').split('&');
	$("#conId").val("");
	//OBTIENE EL CONID DEL PACIENTE
	var parameter = test[0]; 
	var radio =parameter.split('=');
	var conId = radio[1];
	//obtiene el tab
	var parameter = test[1]; 
	var tab =parameter.split('=');
	var tab = tab[1];
	$("#tabContent").val(tab);
	$("#horaIngresoPantalla").val("");
	$("#conId").val(conId);

	//INGRESO FECHA
	var moem = momentoActual = new Date();
	if (moem.getDate() <=9 ) {	dia = "0"+moem.getDate();}else{ dia = moem.getDate();}
	if ((moem.getMonth()+1) <= 9) {	mes = "0"+ (moem.getMonth()+1);	}else{ mes = (moem.getMonth()+1);}
	var fecha =  moem.getFullYear() +"/"+ mes + "/" + dia;// dia + > + mes + "/" + moem.getFullYear();
	$("#fechaYhoraIngreso").val(fecha);
	var reloj = window.parent.$("#reloj").val();
	$("#horaIngresoPantalla").val( reloj);
	if (valorsesion == 0) {cargarDatosPaciente(conId);}	
	if (valorsesion == "-1") {FinalizarSesion();}
	var centroTrabajo = window.parent.$("#centroTrabajo").val();
 	window.parent.$("#tituloPestaña").val("");
 	var title= "";

 	switch(centroTrabajo){
		case "1":
			title= "Observacion y Tratamiento Carol Urzúa";
			window.parent.$("#tituloPestaña").text(title);
		break;
		case "2":
			title= "Observacion y Tratamiento La Faena";
			window.parent.$("#tituloPestaña").text(title);
		break;
		case "3":
			title= "Observacion y Tratamiento San Luis";
			window.parent.$("#tituloPestaña").text(title);
		break;
		case "4":
			title= "Observacion y Tratamiento Lo Hermida";
			window.parent.$("#tituloPestaña").text(title);
		break;
		case "5":
			title= "Observacion y Tratamiento C. Silva Henriquez";
			window.parent.$("#tituloPestaña").text(title);
		break;
		case "8":
			title= "Observacion y Tratamiento SAR Carol Urzúa";
			window.parent.$("#tituloPestaña").text(title);
		break;
		case "9":
			title= "Observacion y Tratamiento SAPU La Faena";
			window.parent.$("#tituloPestaña").text(title);
		break;
		case "10":
			title= "Observacion y Tratamiento SAPU Lo Hermida";
			window.parent.$("#tituloPestaña").text(title);
		break;
		case "11":
			title= "Observacion y Tratamiento SAPU San Luis";
			window.parent.$("#tituloPestaña").text(title);
		break;
		case "12":
			title= "Observacion y Tratamiento P. Gerardo Whelan";
			window.parent.$("#tituloPestaña").text(title);
		break;
 	}

 	var hoy= new Date();
	var dd = hoy.getDate();
	var mm = hoy.getMonth()+1;
	var yyyy = hoy.getFullYear();
	if(dd<10) {dd='0'+dd}
	if(mm<10) {mm='0'+mm}
	fechaHoy = yyyy+'-'+mm+'-'+dd;
	$("#fechaHoy").val('');
	$("#fechaHoy").val(fechaHoy);

	$("#IngresarProcedimiento").on("click",function(){
		var moem = momentoActual = new Date();
		if (moem.getDate() <=9 ) {	dia = "0"+moem.getDate();}else{ dia = moem.getDate();}
		if ((moem.getMonth()+1) <= 9) {	mes = "0"+ (moem.getMonth()+1);	}else{ mes = (moem.getMonth()+1);}
		var fecha =  moem.getFullYear() +"/"+ mes + "/" + dia;// dia + > + mes + "/" + moem.getFullYear();
		var conId = $("#conId").val();
		
		///INGRESO PANTALLA
		var horaIngresoPantalla = $("#horaIngresoPantalla").val();
		var fechaIngrsoPantalla = $("#fechaYhoraIngreso").val();
		var fechaYHoraPantalla = fechaIngrsoPantalla+" "+ horaIngresoPantalla;
		var Realizado1 = $('input[name=Realizado1]').prop('checked');
		var Realizado2 = $('input[name=Realizado2]').prop('checked');
		var Realizado3 = $('input[name=Realizado3]').prop('checked');
		var indDos1 = $("#indDos1").val();
		var indDos2 = $("#indDos2").val();
		var indDos3 = $("#indDos3").val();
		var RealizadoIndDos1  = $('input[name=RealizadoIndDos1]').prop('checked');
		var RealizadoIndDos2  = $('input[name=RealizadoIndDos2]').prop('checked');
		var RealizadoIndDos3  = $('input[name=RealizadoIndDos3]').prop('checked');
		var indTres1 = $("#indTres1").val();
		var indTres2 = $("#indTres2").val();
		var indTres3 = $("#indTres3").val();
		var RealizadoIndTres1  = $('input[name=RealizadoIndTres1]').prop('checked');
		var RealizadoIndTres2  = $('input[name=RealizadoIndTres2]').prop('checked'); 
		var RealizadoIndTres3  = $('input[name=RealizadoIndTres3]').prop('checked');
		var horaControl1 = $("#horaControl1").val();
		var horaControl2 = $("#horaControl2").val();
		var horaControl3 = $("#horaControl3").val();
		var horaControl4 = $("#horaControl4").val();
		var horaControl5 = $("#horaControl5").val();
		var horaControl6 = $("#horaControl6").val();
		var fcCtr1 = $("#fcCtr1").val();
		var fcCtr2 = $("#fcCtr2").val();
		var fcCtr3 = $("#fcCtr3").val();
		var fcCtr4 = $("#fcCtr4").val();
		var fcCtr5 = $("#fcCtr5").val();
		var fcCtr6 = $("#fcCtr6").val();
		var frCtr1 = $("#frCtr1").val();
		var frCtr2 = $("#frCtr2").val();
		var frCtr3 = $("#frCtr3").val();
		var frCtr4 = $("#frCtr4").val();
		var frCtr5 = $("#frCtr5").val();
		var frCtr6 = $("#frCtr6").val();
		var temAxCtr1 = $("#temAxCtr1").val();
		var temAxCtr2 = $("#temAxCtr2").val();
		var temAxCtr3 = $("#temAxCtr3").val();
		var temAxCtr4 = $("#temAxCtr4").val();
		var temAxCtr5 = $("#temAxCtr5").val();
		var temAxCtr6 = $("#temAxCtr6").val();
		var satOCtr1 = $("#satOCtr1").val();
		var satOCtr2 = $("#satOCtr2").val();
		var satOCtr3 = $("#satOCtr3").val();
		var satOCtr4 = $("#satOCtr4").val();
		var satOCtr5 = $("#satOCtr5").val();
		var satOCtr6 = $("#satOCtr6").val();
		var hgtCtr1 = $("#hgtCtr1").val();
		var hgtCtr2= $("#hgtCtr2").val();
		var hgtCtr3= $("#hgtCtr3").val();
		var hgtCtr4= $("#hgtCtr4").val();
		var hgtCtr5= $("#hgtCtr5").val();
		var hgtCtr6= $("#hgtCtr6").val();
		var psCtr1 = $("#psCtr1").val();
		var psCtr2 = $("#psCtr2").val();
		var psCtr3 = $("#psCtr3").val();
		var psCtr4 = $("#psCtr4").val();
		var psCtr5 = $("#psCtr5").val();
		var psCtr6 = $("#psCtr6").val();
		var pdCtr1 = $("#pdCtr1").val();
		var pdCtr2 = $("#pdCtr2").val();
		var pdCtr3 = $("#pdCtr3").val();
		var pdCtr4 = $("#pdCtr4").val();
		var pdCtr5 = $("#pdCtr5").val();
		var pdCtr6 = $("#pdCtr6").val();
		var eGlsCrt1 = $("#eGlsCrt1").val();
		var eGlsCrt2 = $("#eGlsCrt2").val();
		var eGlsCrt3 = $("#eGlsCrt3").val();
		var eGlsCrt4 = $("#eGlsCrt4").val();
		var eGlsCrt5 = $("#eGlsCrt5").val();
		var eGlsCrt6 = $("#eGlsCrt6").val();
		var evaCtr1 = $("#evaCtr1").val();
		var evaCtr2 = $("#evaCtr2").val();
		var evaCtr3 = $("#evaCtr3").val();
		var evaCtr4 = $("#evaCtr4").val();
		var evaCtr5 = $("#evaCtr5").val();
		var evaCtr6 = $("#evaCtr6").val();
		var ObservacionesTto = $("#ObservacionesTto").val();
		var perId = window.parent.$("#perId").val();
		var relos = window.parent.$("#reloj").val();
		var fechaSalida = "";

		if (fcCtr2 === "" && fcCtr3 === "" && fcCtr4 === "" && fcCtr5 === "" && fcCtr6 === "") {
			countClicks = countClicks+ 1;
			if (countClicks=== 1) {				
				CrearProcedimientoYtto(conId,horaIngresoPantalla,fechaYHoraPantalla,Realizado1,Realizado2,Realizado3,indDos1,indDos2,indDos3,RealizadoIndDos1,RealizadoIndDos2,RealizadoIndDos3,indTres1,indTres2,indTres3,RealizadoIndTres1,RealizadoIndTres2,RealizadoIndTres3,horaControl1,horaControl2,horaControl3,horaControl4,horaControl5,horaControl6,fcCtr1,fcCtr2,fcCtr3,fcCtr4,fcCtr5,fcCtr6,frCtr1,frCtr2,frCtr3,frCtr4,frCtr5,frCtr6,temAxCtr1,temAxCtr2,temAxCtr3,temAxCtr4,temAxCtr5,temAxCtr6,satOCtr1,satOCtr2,satOCtr3,satOCtr4,satOCtr5,satOCtr6,hgtCtr1,hgtCtr2,hgtCtr3,hgtCtr4,hgtCtr5,hgtCtr6,psCtr1,psCtr2,psCtr3,psCtr4,psCtr5,psCtr6,pdCtr1,pdCtr2,pdCtr3,pdCtr4,pdCtr5,pdCtr6,eGlsCrt1,eGlsCrt2,eGlsCrt3,eGlsCrt4,eGlsCrt5,eGlsCrt6,evaCtr1,evaCtr2,evaCtr3,evaCtr4,evaCtr5,evaCtr6,ObservacionesTto,perId,fechaSalida);
				console.log("se resetea contador de "+ countClicks);
			}else{
				console.log("cantidad de clicks hechos"+ countClicks);
				alert("Debe clickear solo una vez, ya se esta procesando su ingreso.")
			}
			
		}else{
			//VALIDACION CONTROL 2
			if (document.getElementById('fcCtr2').disabled === false && document.getElementById('fcCtr3').disabled === true && document.getElementById('fcCtr4').disabled === true
			&& document.getElementById('fcCtr5').disabled === true && document.getElementById('fcCtr6').disabled === true) {

				if (fcCtr2 === "" && frCtr2 === "" && temAxCtr2 === "" && satOCtr2 === "" && psCtr2 === "" && pdCtr2 === "" && eGlsCrt2 === "" ){
					if (hgtCtr2 !== "" || evaCtr2 !== ""){
						alert("No se puede ingresar el registro,debe llenar los campos obligatorios para ingresar el procedimiento");
						countClicks = 0;
					}else{

						countClicks = countClicks+ 1;
						if (countClicks=== 1) {				
							CrearProcedimientoYtto(conId,horaIngresoPantalla,fechaYHoraPantalla,Realizado1,Realizado2,Realizado3,indDos1,indDos2,indDos3,RealizadoIndDos1,RealizadoIndDos2,RealizadoIndDos3,indTres1,indTres2,indTres3,RealizadoIndTres1,RealizadoIndTres2,RealizadoIndTres3,horaControl1,horaControl2,horaControl3,horaControl4,horaControl5,horaControl6,fcCtr1,fcCtr2,fcCtr3,fcCtr4,fcCtr5,fcCtr6,frCtr1,frCtr2,frCtr3,frCtr4,frCtr5,frCtr6,temAxCtr1,temAxCtr2,temAxCtr3,temAxCtr4,temAxCtr5,temAxCtr6,satOCtr1,satOCtr2,satOCtr3,satOCtr4,satOCtr5,satOCtr6,hgtCtr1,hgtCtr2,hgtCtr3,hgtCtr4,hgtCtr5,hgtCtr6,psCtr1,psCtr2,psCtr3,psCtr4,psCtr5,psCtr6,pdCtr1,pdCtr2,pdCtr3,pdCtr4,pdCtr5,pdCtr6,eGlsCrt1,eGlsCrt2,eGlsCrt3,eGlsCrt4,eGlsCrt5,eGlsCrt6,evaCtr1,evaCtr2,evaCtr3,evaCtr4,evaCtr5,evaCtr6,ObservacionesTto,perId,fechaSalida);
							console.log("se resetea contador de "+ countClicks);
						}else{
							console.log("cantidad de clicks hechos"+ countClicks);
							alert("Debe clickear solo una vez, ya se esta procesando su ingreso.")
						}

					}
				}else{
					if (fcCtr2 === ""){$("#fcCtr2").css("border-color","red");}else{$("#fcCtr2").css("border-color","green");}
					if (frCtr2 === ""){$("#frCtr2").css("border-color","red");}else{$("#frCtr2").css("border-color","green");}
					if (temAxCtr2 === ""){$("#temAxCtr2").css("border-color","red");}else{$("#temAxCtr2").css("border-color","green");}
					if (satOCtr2 === ""){$("#satOCtr2").css("border-color","red");}else{$("#satOCtr2").css("border-color","green");}
					if (psCtr2 === ""){$("#psCtr2").css("border-color","red");}else{$("#psCtr2").css("border-color","green");}
					if (pdCtr2 === ""){$("#pdCtr2").css("border-color","red");}else{$("#pdCtr2").css("border-color","green");}
					if (eGlsCrt2 === ""){$("#eGlsCrt2").css("border-color","red");}else{$("#eGlsCrt2").css("border-color","green");}

					if(fcCtr2 !== "" && frCtr2 !== "" && temAxCtr2 !== "" && satOCtr2 !== "" && psCtr2 !== "" && pdCtr2 !== "" && eGlsCrt2 !== "" ){
						if (hgtCtr2 === "") {
							countClicks = countClicks+ 1;
							if (countClicks=== 1) {				
								CrearProcedimientoYtto(conId,horaIngresoPantalla,fechaYHoraPantalla,Realizado1,Realizado2,Realizado3,indDos1,indDos2,indDos3,RealizadoIndDos1,RealizadoIndDos2,RealizadoIndDos3,indTres1,indTres2,indTres3,RealizadoIndTres1,RealizadoIndTres2,RealizadoIndTres3,horaControl1,horaControl2,horaControl3,horaControl4,horaControl5,horaControl6,fcCtr1,fcCtr2,fcCtr3,fcCtr4,fcCtr5,fcCtr6,frCtr1,frCtr2,frCtr3,frCtr4,frCtr5,frCtr6,temAxCtr1,temAxCtr2,temAxCtr3,temAxCtr4,temAxCtr5,temAxCtr6,satOCtr1,satOCtr2,satOCtr3,satOCtr4,satOCtr5,satOCtr6,hgtCtr1,hgtCtr2,hgtCtr3,hgtCtr4,hgtCtr5,hgtCtr6,psCtr1,psCtr2,psCtr3,psCtr4,psCtr5,psCtr6,pdCtr1,pdCtr2,pdCtr3,pdCtr4,pdCtr5,pdCtr6,eGlsCrt1,eGlsCrt2,eGlsCrt3,eGlsCrt4,eGlsCrt5,eGlsCrt6,evaCtr1,evaCtr2,evaCtr3,evaCtr4,evaCtr5,evaCtr6,ObservacionesTto,perId,fechaSalida);
								console.log("se resetea contador de "+ countClicks);
							}else{
								console.log("cantidad de clicks hechos"+ countClicks);
								alert("Debe clickear solo una vez, ya se esta procesando su ingreso.")
							}
						}else{
							if (isNaN(hgtCtr2)) {
								if ((hgtCtr2 === "HI" || hgtCtr2 === "LO") || (hgtCtr2 === "Hi" || hgtCtr2 === "Lo") || (hgtCtr2 === "hi" || hgtCtr2 === "lo") || (hgtCtr2 === "hI" || hgtCtr2 === "lO")) {
									countClicks = countClicks+ 1;
									if (countClicks=== 1) {				
										CrearProcedimientoYtto(conId,horaIngresoPantalla,fechaYHoraPantalla,Realizado1,Realizado2,Realizado3,indDos1,indDos2,indDos3,RealizadoIndDos1,RealizadoIndDos2,RealizadoIndDos3,indTres1,indTres2,indTres3,RealizadoIndTres1,RealizadoIndTres2,RealizadoIndTres3,horaControl1,horaControl2,horaControl3,horaControl4,horaControl5,horaControl6,fcCtr1,fcCtr2,fcCtr3,fcCtr4,fcCtr5,fcCtr6,frCtr1,frCtr2,frCtr3,frCtr4,frCtr5,frCtr6,temAxCtr1,temAxCtr2,temAxCtr3,temAxCtr4,temAxCtr5,temAxCtr6,satOCtr1,satOCtr2,satOCtr3,satOCtr4,satOCtr5,satOCtr6,hgtCtr1,hgtCtr2,hgtCtr3,hgtCtr4,hgtCtr5,hgtCtr6,psCtr1,psCtr2,psCtr3,psCtr4,psCtr5,psCtr6,pdCtr1,pdCtr2,pdCtr3,pdCtr4,pdCtr5,pdCtr6,eGlsCrt1,eGlsCrt2,eGlsCrt3,eGlsCrt4,eGlsCrt5,eGlsCrt6,evaCtr1,evaCtr2,evaCtr3,evaCtr4,evaCtr5,evaCtr6,ObservacionesTto,perId,fechaSalida);
										console.log("se resetea contador de "+ countClicks);
									}else{
										console.log("cantidad de clicks hechos"+ countClicks);
										alert("Debe clickear solo una vez, ya se esta procesando su ingreso.")
									}
								}else{
									alert("El valor ingresado debe ser HI o LO");
									$("#hgtCtr2").val("");
									countClicks = 0;
								}
							}else{
								if (hgtCtr2 >= 0 && hgtCtr2 <= 1000) {
									countClicks = countClicks+ 1;
									if (countClicks=== 1) {				
										CrearProcedimientoYtto(conId,horaIngresoPantalla,fechaYHoraPantalla,Realizado1,Realizado2,Realizado3,indDos1,indDos2,indDos3,RealizadoIndDos1,RealizadoIndDos2,RealizadoIndDos3,indTres1,indTres2,indTres3,RealizadoIndTres1,RealizadoIndTres2,RealizadoIndTres3,horaControl1,horaControl2,horaControl3,horaControl4,horaControl5,horaControl6,fcCtr1,fcCtr2,fcCtr3,fcCtr4,fcCtr5,fcCtr6,frCtr1,frCtr2,frCtr3,frCtr4,frCtr5,frCtr6,temAxCtr1,temAxCtr2,temAxCtr3,temAxCtr4,temAxCtr5,temAxCtr6,satOCtr1,satOCtr2,satOCtr3,satOCtr4,satOCtr5,satOCtr6,hgtCtr1,hgtCtr2,hgtCtr3,hgtCtr4,hgtCtr5,hgtCtr6,psCtr1,psCtr2,psCtr3,psCtr4,psCtr5,psCtr6,pdCtr1,pdCtr2,pdCtr3,pdCtr4,pdCtr5,pdCtr6,eGlsCrt1,eGlsCrt2,eGlsCrt3,eGlsCrt4,eGlsCrt5,eGlsCrt6,evaCtr1,evaCtr2,evaCtr3,evaCtr4,evaCtr5,evaCtr6,ObservacionesTto,perId,fechaSalida);
										console.log("se resetea contador de "+ countClicks);
									}else{
										console.log("cantidad de clicks hechos"+ countClicks);
										alert("Debe clickear solo una vez, ya se esta procesando su ingreso.")
									}
								}else{
									alert("El valor ingresado no puede ser igual a 0 o mayor a 1000");
									$("#hgtCtr2").val("");
									countClicks = 0;
								}
							}
						}		
					}else{
						alert("Debe completar Todos los campos obligatorios.");
						countClicks = 0;
						countClicks = 0;
					}
				}
			}else
				//VALIDACION CONTROL 3
				if (document.getElementById('fcCtr2').disabled === true && document.getElementById('fcCtr3').disabled === false && document.getElementById('fcCtr4').disabled === true
				&& document.getElementById('fcCtr5').disabled === true && document.getElementById('fcCtr6').disabled === true) {

					if (fcCtr3 === "" && frCtr3 === "" && temAxCtr3 === "" && satOCtr3 === "" && psCtr3 === "" && pdCtr3 === "" && eGlsCrt3 === "" ){
						if (hgtCtr3 !== "" || evaCtr3 !== ""){
							alert("No se puede ingresar el registro,debe llenar los campos obligatorios para ingresar el procedimiento");
							countClicks = 0;
						}else{
							countClicks = countClicks+ 1;
							if (countClicks=== 1) {				
								CrearProcedimientoYtto(conId,horaIngresoPantalla,fechaYHoraPantalla,Realizado1,Realizado2,Realizado3,indDos1,indDos2,indDos3,RealizadoIndDos1,RealizadoIndDos2,RealizadoIndDos3,indTres1,indTres2,indTres3,RealizadoIndTres1,RealizadoIndTres2,RealizadoIndTres3,horaControl1,horaControl2,horaControl3,horaControl4,horaControl5,horaControl6,fcCtr1,fcCtr2,fcCtr3,fcCtr4,fcCtr5,fcCtr6,frCtr1,frCtr2,frCtr3,frCtr4,frCtr5,frCtr6,temAxCtr1,temAxCtr2,temAxCtr3,temAxCtr4,temAxCtr5,temAxCtr6,satOCtr1,satOCtr2,satOCtr3,satOCtr4,satOCtr5,satOCtr6,hgtCtr1,hgtCtr2,hgtCtr3,hgtCtr4,hgtCtr5,hgtCtr6,psCtr1,psCtr2,psCtr3,psCtr4,psCtr5,psCtr6,pdCtr1,pdCtr2,pdCtr3,pdCtr4,pdCtr5,pdCtr6,eGlsCrt1,eGlsCrt2,eGlsCrt3,eGlsCrt4,eGlsCrt5,eGlsCrt6,evaCtr1,evaCtr2,evaCtr3,evaCtr4,evaCtr5,evaCtr6,ObservacionesTto,perId,fechaSalida);
								console.log("se resetea contador de "+ countClicks);
							}else{
								console.log("cantidad de clicks hechos"+ countClicks);
								alert("Debe clickear solo una vez, ya se esta procesando su ingreso.")
							}
						}
					}else{
						if (fcCtr3 === ""){$("#fcCtr3").css("border-color","red");}else{$("#fcCtr3").css("border-color","green");}
						if (frCtr3 === ""){$("#frCtr3").css("border-color","red");}else{$("#frCtr3").css("border-color","green");}
						if (temAxCtr3 === ""){$("#temAxCtr3").css("border-color","red");}else{$("#temAxCtr3").css("border-color","green");}
						if (satOCtr3 === ""){$("#satOCtr3").css("border-color","red");}else{$("#satOCtr3").css("border-color","green");}
						if (psCtr3 === ""){$("#psCtr3").css("border-color","red");}else{$("#psCtr3").css("border-color","green");}
						if (pdCtr3 === ""){$("#pdCtr3").css("border-color","red");}else{$("#pdCtr3").css("border-color","green");}
						if (eGlsCrt3 === ""){$("#eGlsCrt3").css("border-color","red");}else{$("#eGlsCrt3").css("border-color","green");}

						if(fcCtr3 !== "" && frCtr3 !== "" && temAxCtr3 !== "" && satOCtr3 !== "" && psCtr3 !== "" && pdCtr3 !== "" && eGlsCrt3 !== "" ) {
							if (hgtCtr3 === "") {
								countClicks = countClicks+ 1;
								if (countClicks=== 1) {				
									CrearProcedimientoYtto(conId,horaIngresoPantalla,fechaYHoraPantalla,Realizado1,Realizado2,Realizado3,indDos1,indDos2,indDos3,RealizadoIndDos1,RealizadoIndDos2,RealizadoIndDos3,indTres1,indTres2,indTres3,RealizadoIndTres1,RealizadoIndTres2,RealizadoIndTres3,horaControl1,horaControl2,horaControl3,horaControl4,horaControl5,horaControl6,fcCtr1,fcCtr2,fcCtr3,fcCtr4,fcCtr5,fcCtr6,frCtr1,frCtr2,frCtr3,frCtr4,frCtr5,frCtr6,temAxCtr1,temAxCtr2,temAxCtr3,temAxCtr4,temAxCtr5,temAxCtr6,satOCtr1,satOCtr2,satOCtr3,satOCtr4,satOCtr5,satOCtr6,hgtCtr1,hgtCtr2,hgtCtr3,hgtCtr4,hgtCtr5,hgtCtr6,psCtr1,psCtr2,psCtr3,psCtr4,psCtr5,psCtr6,pdCtr1,pdCtr2,pdCtr3,pdCtr4,pdCtr5,pdCtr6,eGlsCrt1,eGlsCrt2,eGlsCrt3,eGlsCrt4,eGlsCrt5,eGlsCrt6,evaCtr1,evaCtr2,evaCtr3,evaCtr4,evaCtr5,evaCtr6,ObservacionesTto,perId,fechaSalida);
									console.log("se resetea contador de "+ countClicks);
								}else{
									console.log("cantidad de clicks hechos"+ countClicks);
									alert("Debe clickear solo una vez, ya se esta procesando su ingreso.")
								}
							}else{
								if (isNaN(hgtCtr3)) {
									if ((hgtCtr3 === "HI" || hgtCtr3 === "LO") || (hgtCtr3 === "Hi" || hgtCtr3 === "Lo") || (hgtCtr3 === "hi" || hgtCtr3 === "lo") || (hgtCtr3 === "hI" || hgtCtr3 === "lO")) {
										countClicks = countClicks+ 1;
										if (countClicks=== 1) {				
											CrearProcedimientoYtto(conId,horaIngresoPantalla,fechaYHoraPantalla,Realizado1,Realizado2,Realizado3,indDos1,indDos2,indDos3,RealizadoIndDos1,RealizadoIndDos2,RealizadoIndDos3,indTres1,indTres2,indTres3,RealizadoIndTres1,RealizadoIndTres2,RealizadoIndTres3,horaControl1,horaControl2,horaControl3,horaControl4,horaControl5,horaControl6,fcCtr1,fcCtr2,fcCtr3,fcCtr4,fcCtr5,fcCtr6,frCtr1,frCtr2,frCtr3,frCtr4,frCtr5,frCtr6,temAxCtr1,temAxCtr2,temAxCtr3,temAxCtr4,temAxCtr5,temAxCtr6,satOCtr1,satOCtr2,satOCtr3,satOCtr4,satOCtr5,satOCtr6,hgtCtr1,hgtCtr2,hgtCtr3,hgtCtr4,hgtCtr5,hgtCtr6,psCtr1,psCtr2,psCtr3,psCtr4,psCtr5,psCtr6,pdCtr1,pdCtr2,pdCtr3,pdCtr4,pdCtr5,pdCtr6,eGlsCrt1,eGlsCrt2,eGlsCrt3,eGlsCrt4,eGlsCrt5,eGlsCrt6,evaCtr1,evaCtr2,evaCtr3,evaCtr4,evaCtr5,evaCtr6,ObservacionesTto,perId,fechaSalida);
											console.log("se resetea contador de "+ countClicks);
										}else{
											console.log("cantidad de clicks hechos"+ countClicks);
											alert("Debe clickear solo una vez, ya se esta procesando su ingreso.")
										}
									}else{
										alert("El valor ingresado debe ser HI o LO");
										$("#hgtCtr3").val("");
										countClicks = 0;
									}
								}else{
									if (hgtCtr3 >= 0 && hgtCtr3 <= 1000) {
										countClicks = countClicks+ 1;
										if (countClicks=== 1) {				
											CrearProcedimientoYtto(conId,horaIngresoPantalla,fechaYHoraPantalla,Realizado1,Realizado2,Realizado3,indDos1,indDos2,indDos3,RealizadoIndDos1,RealizadoIndDos2,RealizadoIndDos3,indTres1,indTres2,indTres3,RealizadoIndTres1,RealizadoIndTres2,RealizadoIndTres3,horaControl1,horaControl2,horaControl3,horaControl4,horaControl5,horaControl6,fcCtr1,fcCtr2,fcCtr3,fcCtr4,fcCtr5,fcCtr6,frCtr1,frCtr2,frCtr3,frCtr4,frCtr5,frCtr6,temAxCtr1,temAxCtr2,temAxCtr3,temAxCtr4,temAxCtr5,temAxCtr6,satOCtr1,satOCtr2,satOCtr3,satOCtr4,satOCtr5,satOCtr6,hgtCtr1,hgtCtr2,hgtCtr3,hgtCtr4,hgtCtr5,hgtCtr6,psCtr1,psCtr2,psCtr3,psCtr4,psCtr5,psCtr6,pdCtr1,pdCtr2,pdCtr3,pdCtr4,pdCtr5,pdCtr6,eGlsCrt1,eGlsCrt2,eGlsCrt3,eGlsCrt4,eGlsCrt5,eGlsCrt6,evaCtr1,evaCtr2,evaCtr3,evaCtr4,evaCtr5,evaCtr6,ObservacionesTto,perId,fechaSalida);
											console.log("se resetea contador de "+ countClicks);
										}else{
											console.log("cantidad de clicks hechos"+ countClicks);
											alert("Debe clickear solo una vez, ya se esta procesando su ingreso.")
										}
									}else{
										alert("El valor ingresado no puede ser igual a 0 o mayor a 1000");
										$("#hgtCtr3").val("");
										countClicks = 0;
									}
								}
							}

						}else{
							alert("Debe completar Todos los campos obligatorios.");
							countClicks = 0;
						}
					}
				}else
					//VALIDACION CONTROL 4
					if (document.getElementById('fcCtr2').disabled === true && document.getElementById('fcCtr3').disabled === true && document.getElementById('fcCtr4').disabled === false
					&& document.getElementById('fcCtr5').disabled === true && document.getElementById('fcCtr6').disabled === true) {

						if(fcCtr4 === "" && frCtr4 === "" && temAxCtr4 === "" && satOCtr4 === "" && psCtr4 === "" && pdCtr4 === "" && eGlsCrt4 === "") {
							if (hgtCtr4 !== "" || evaCtr4 !== ""){
								alert("No se puede ingresar el registro,debe llenar los campos obligatorios para ingresar el procedimiento");								
								countClicks = 0;
							}else{
								countClicks = countClicks+ 1;
								if (countClicks=== 1) {				
									CrearProcedimientoYtto(conId,horaIngresoPantalla,fechaYHoraPantalla,Realizado1,Realizado2,Realizado3,indDos1,indDos2,indDos3,RealizadoIndDos1,RealizadoIndDos2,RealizadoIndDos3,indTres1,indTres2,indTres3,RealizadoIndTres1,RealizadoIndTres2,RealizadoIndTres3,horaControl1,horaControl2,horaControl3,horaControl4,horaControl5,horaControl6,fcCtr1,fcCtr2,fcCtr3,fcCtr4,fcCtr5,fcCtr6,frCtr1,frCtr2,frCtr3,frCtr4,frCtr5,frCtr6,temAxCtr1,temAxCtr2,temAxCtr3,temAxCtr4,temAxCtr5,temAxCtr6,satOCtr1,satOCtr2,satOCtr3,satOCtr4,satOCtr5,satOCtr6,hgtCtr1,hgtCtr2,hgtCtr3,hgtCtr4,hgtCtr5,hgtCtr6,psCtr1,psCtr2,psCtr3,psCtr4,psCtr5,psCtr6,pdCtr1,pdCtr2,pdCtr3,pdCtr4,pdCtr5,pdCtr6,eGlsCrt1,eGlsCrt2,eGlsCrt3,eGlsCrt4,eGlsCrt5,eGlsCrt6,evaCtr1,evaCtr2,evaCtr3,evaCtr4,evaCtr5,evaCtr6,ObservacionesTto,perId,fechaSalida);
									console.log("se resetea contador de "+ countClicks);
								}else{
									console.log("cantidad de clicks hechos"+ countClicks);
									alert("Debe clickear solo una vez, ya se esta procesando su ingreso.")
								}
							}
						}else{
							if (fcCtr4 === ""){$("#fcCtr4").css("border-color","red");}else{$("#fcCtr4").css("border-color","green");}
							if (frCtr4 === ""){$("#frCtr4").css("border-color","red");}else{$("#frCtr4").css("border-color","green");}
							if (temAxCtr4 === ""){$("#temAxCtr4").css("border-color","red");}else{$("#temAxCtr4").css("border-color","green");}
							if (satOCtr4 === ""){$("#satOCtr4").css("border-color","red");}else{$("#satOCtr4").css("border-color","green");}
							if (psCtr4 === ""){$("#psCtr4").css("border-color","red");}else{$("#psCtr4").css("border-color","green");}
							if (pdCtr4 === ""){$("#pdCtr4").css("border-color","red");}else{$("#pdCtr4").css("border-color","green");}

							if(fcCtr4 !== "" && frCtr4 !== "" && temAxCtr4 !== "" && satOCtr4 !== "" && psCtr4 !== "" && pdCtr4 !== "" && eGlsCrt4 !== "") {

								if (hgtCtr4 === "") {
									countClicks = countClicks+ 1;
									if (countClicks=== 1) {				
										CrearProcedimientoYtto(conId,horaIngresoPantalla,fechaYHoraPantalla,Realizado1,Realizado2,Realizado3,indDos1,indDos2,indDos3,RealizadoIndDos1,RealizadoIndDos2,RealizadoIndDos3,indTres1,indTres2,indTres3,RealizadoIndTres1,RealizadoIndTres2,RealizadoIndTres3,horaControl1,horaControl2,horaControl3,horaControl4,horaControl5,horaControl6,fcCtr1,fcCtr2,fcCtr3,fcCtr4,fcCtr5,fcCtr6,frCtr1,frCtr2,frCtr3,frCtr4,frCtr5,frCtr6,temAxCtr1,temAxCtr2,temAxCtr3,temAxCtr4,temAxCtr5,temAxCtr6,satOCtr1,satOCtr2,satOCtr3,satOCtr4,satOCtr5,satOCtr6,hgtCtr1,hgtCtr2,hgtCtr3,hgtCtr4,hgtCtr5,hgtCtr6,psCtr1,psCtr2,psCtr3,psCtr4,psCtr5,psCtr6,pdCtr1,pdCtr2,pdCtr3,pdCtr4,pdCtr5,pdCtr6,eGlsCrt1,eGlsCrt2,eGlsCrt3,eGlsCrt4,eGlsCrt5,eGlsCrt6,evaCtr1,evaCtr2,evaCtr3,evaCtr4,evaCtr5,evaCtr6,ObservacionesTto,perId,fechaSalida);
										console.log("se resetea contador de "+ countClicks);
									}else{
										console.log("cantidad de clicks hechos"+ countClicks);
										alert("Debe clickear solo una vez, ya se esta procesando su ingreso.")
									}
								}else{
									if (isNaN(hgtCtr4)) {
										if ((hgtCtr4 === "HI" || hgtCtr4 === "LO") || (hgtCtr4 === "Hi" || hgtCtr4 === "Lo") || (hgtCtr4 === "hi" || hgtCtr4 === "lo") || (hgtCtr4 === "hI" || hgtCtr4 === "lO")) {
											countClicks = countClicks+ 1;
											if (countClicks=== 1) {				
												CrearProcedimientoYtto(conId,horaIngresoPantalla,fechaYHoraPantalla,Realizado1,Realizado2,Realizado3,indDos1,indDos2,indDos3,RealizadoIndDos1,RealizadoIndDos2,RealizadoIndDos3,indTres1,indTres2,indTres3,RealizadoIndTres1,RealizadoIndTres2,RealizadoIndTres3,horaControl1,horaControl2,horaControl3,horaControl4,horaControl5,horaControl6,fcCtr1,fcCtr2,fcCtr3,fcCtr4,fcCtr5,fcCtr6,frCtr1,frCtr2,frCtr3,frCtr4,frCtr5,frCtr6,temAxCtr1,temAxCtr2,temAxCtr3,temAxCtr4,temAxCtr5,temAxCtr6,satOCtr1,satOCtr2,satOCtr3,satOCtr4,satOCtr5,satOCtr6,hgtCtr1,hgtCtr2,hgtCtr3,hgtCtr4,hgtCtr5,hgtCtr6,psCtr1,psCtr2,psCtr3,psCtr4,psCtr5,psCtr6,pdCtr1,pdCtr2,pdCtr3,pdCtr4,pdCtr5,pdCtr6,eGlsCrt1,eGlsCrt2,eGlsCrt3,eGlsCrt4,eGlsCrt5,eGlsCrt6,evaCtr1,evaCtr2,evaCtr3,evaCtr4,evaCtr5,evaCtr6,ObservacionesTto,perId,fechaSalida);
												console.log("se resetea contador de "+ countClicks);
											}else{
												console.log("cantidad de clicks hechos"+ countClicks);
												alert("Debe clickear solo una vez, ya se esta procesando su ingreso.")
											}
										}else{
											alert("El valor ingresado debe ser HI o LO");
											$("#hgtCtr4").val("");
											countClicks = 0;
										}
									}else{
										if (hgtCtr4 >= 0 && hgtCtr4 <= 1000) {
											countClicks = countClicks+ 1;
											if (countClicks=== 1) {				
												CrearProcedimientoYtto(conId,horaIngresoPantalla,fechaYHoraPantalla,Realizado1,Realizado2,Realizado3,indDos1,indDos2,indDos3,RealizadoIndDos1,RealizadoIndDos2,RealizadoIndDos3,indTres1,indTres2,indTres3,RealizadoIndTres1,RealizadoIndTres2,RealizadoIndTres3,horaControl1,horaControl2,horaControl3,horaControl4,horaControl5,horaControl6,fcCtr1,fcCtr2,fcCtr3,fcCtr4,fcCtr5,fcCtr6,frCtr1,frCtr2,frCtr3,frCtr4,frCtr5,frCtr6,temAxCtr1,temAxCtr2,temAxCtr3,temAxCtr4,temAxCtr5,temAxCtr6,satOCtr1,satOCtr2,satOCtr3,satOCtr4,satOCtr5,satOCtr6,hgtCtr1,hgtCtr2,hgtCtr3,hgtCtr4,hgtCtr5,hgtCtr6,psCtr1,psCtr2,psCtr3,psCtr4,psCtr5,psCtr6,pdCtr1,pdCtr2,pdCtr3,pdCtr4,pdCtr5,pdCtr6,eGlsCrt1,eGlsCrt2,eGlsCrt3,eGlsCrt4,eGlsCrt5,eGlsCrt6,evaCtr1,evaCtr2,evaCtr3,evaCtr4,evaCtr5,evaCtr6,ObservacionesTto,perId,fechaSalida);
												console.log("se resetea contador de "+ countClicks);
											}else{
												console.log("cantidad de clicks hechos"+ countClicks);
												alert("Debe clickear solo una vez, ya se esta procesando su ingreso.")
											}
										}else{
											alert("El valor ingresado no puede ser igual a 0 o mayor a 1000");
											$("#hgtCtr4").val("");
											countClicks = 0;
										}
									}
								}


							}else{
								if (eGlsCrt4 === ""){$("#eGlsCrt4").css("border-color","red");}else{$("#eGlsCrt4").css("border-color","green");}
								alert("Debe completar Todos los campos obligatorios.");
								countClicks = 0;
							}
						}
					}else{
						//VALIDACION CONTROL 5
						if (document.getElementById('fcCtr2').disabled === true && document.getElementById('fcCtr3').disabled === true && document.getElementById('fcCtr4').disabled === true
						&& document.getElementById('fcCtr5').disabled === false && document.getElementById('fcCtr6').disabled === true) {
							if(fcCtr5 === "" && frCtr5 === "" && temAxCtr5 === "" && satOCtr5 === "" && psCtr5 === "" && pdCtr5 === "" && eGlsCrt5 === "" ) {
								if (hgtCtr5 !== "" || evaCtr5 !== ""){
									alert("No se puede ingresar el registro,debe llenar los campos obligatorios para ingresar el procedimiento");									
									countClicks = 0;
								}else{
									countClicks = countClicks+ 1;
									if (countClicks=== 1) {				
										CrearProcedimientoYtto(conId,horaIngresoPantalla,fechaYHoraPantalla,Realizado1,Realizado2,Realizado3,indDos1,indDos2,indDos3,RealizadoIndDos1,RealizadoIndDos2,RealizadoIndDos3,indTres1,indTres2,indTres3,RealizadoIndTres1,RealizadoIndTres2,RealizadoIndTres3,horaControl1,horaControl2,horaControl3,horaControl4,horaControl5,horaControl6,fcCtr1,fcCtr2,fcCtr3,fcCtr4,fcCtr5,fcCtr6,frCtr1,frCtr2,frCtr3,frCtr4,frCtr5,frCtr6,temAxCtr1,temAxCtr2,temAxCtr3,temAxCtr4,temAxCtr5,temAxCtr6,satOCtr1,satOCtr2,satOCtr3,satOCtr4,satOCtr5,satOCtr6,hgtCtr1,hgtCtr2,hgtCtr3,hgtCtr4,hgtCtr5,hgtCtr6,psCtr1,psCtr2,psCtr3,psCtr4,psCtr5,psCtr6,pdCtr1,pdCtr2,pdCtr3,pdCtr4,pdCtr5,pdCtr6,eGlsCrt1,eGlsCrt2,eGlsCrt3,eGlsCrt4,eGlsCrt5,eGlsCrt6,evaCtr1,evaCtr2,evaCtr3,evaCtr4,evaCtr5,evaCtr6,ObservacionesTto,perId,fechaSalida);
										console.log("se resetea contador de "+ countClicks);
									}else{
										console.log("cantidad de clicks hechos"+ countClicks);
										alert("Debe clickear solo una vez, ya se esta procesando su ingreso.")
									}
								}
							}else{
								if (fcCtr5 === ""){$("#fcCtr5").css("border-color","red");}else{$("#fcCtr5").css("border-color","green");}
								if (frCtr5 === ""){$("#frCtr5").css("border-color","red");}else{$("#frCtr5").css("border-color","green");}
								if (temAxCtr5 === ""){$("#temAxCtr5").css("border-color","red");}else{$("#temAxCtr5").css("border-color","green");}
								if (satOCtr5 === ""){$("#satOCtr5").css("border-color","red");}else{$("#satOCtr5").css("border-color","green");}
								if (psCtr5 === ""){$("#psCtr5").css("border-color","red");}else{$("#psCtr5").css("border-color","green");}
								if (pdCtr5 === ""){$("#pdCtr5").css("border-color","red");}else{$("#pdCtr5").css("border-color","green");}
								if (eGlsCrt5 === ""){$("#eGlsCrt5").css("border-color","red");}else{$("#eGlsCrt5").css("border-color","green");}

								if(fcCtr5 !== "" && frCtr5 !== "" && temAxCtr5 !== "" && satOCtr5 !== "" && psCtr5 !== "" && pdCtr5 !== "" && eGlsCrt5 !== "" ) {
									if (hgtCtr5 === "") {
										countClicks = countClicks+ 1;
										if (countClicks=== 1) {				
											CrearProcedimientoYtto(conId,horaIngresoPantalla,fechaYHoraPantalla,Realizado1,Realizado2,Realizado3,indDos1,indDos2,indDos3,RealizadoIndDos1,RealizadoIndDos2,RealizadoIndDos3,indTres1,indTres2,indTres3,RealizadoIndTres1,RealizadoIndTres2,RealizadoIndTres3,horaControl1,horaControl2,horaControl3,horaControl4,horaControl5,horaControl6,fcCtr1,fcCtr2,fcCtr3,fcCtr4,fcCtr5,fcCtr6,frCtr1,frCtr2,frCtr3,frCtr4,frCtr5,frCtr6,temAxCtr1,temAxCtr2,temAxCtr3,temAxCtr4,temAxCtr5,temAxCtr6,satOCtr1,satOCtr2,satOCtr3,satOCtr4,satOCtr5,satOCtr6,hgtCtr1,hgtCtr2,hgtCtr3,hgtCtr4,hgtCtr5,hgtCtr6,psCtr1,psCtr2,psCtr3,psCtr4,psCtr5,psCtr6,pdCtr1,pdCtr2,pdCtr3,pdCtr4,pdCtr5,pdCtr6,eGlsCrt1,eGlsCrt2,eGlsCrt3,eGlsCrt4,eGlsCrt5,eGlsCrt6,evaCtr1,evaCtr2,evaCtr3,evaCtr4,evaCtr5,evaCtr6,ObservacionesTto,perId,fechaSalida);
											console.log("se resetea contador de "+ countClicks);
										}else{
											console.log("cantidad de clicks hechos"+ countClicks);
											alert("Debe clickear solo una vez, ya se esta procesando su ingreso.")
										}
									}else{
										if (isNaN(hgtCtr5)) {
											if ((hgtCtr5 === "HI" || hgtCtr5 === "LO") || (hgtCtr5 === "Hi" || hgtCtr5 === "Lo") || (hgtCtr5 === "hi" || hgtCtr5 === "lo") || (hgtCtr5 === "hI" || hgtCtr5 === "lO")) {
												countClicks = countClicks+ 1;
												if (countClicks=== 1) {				
													CrearProcedimientoYtto(conId,horaIngresoPantalla,fechaYHoraPantalla,Realizado1,Realizado2,Realizado3,indDos1,indDos2,indDos3,RealizadoIndDos1,RealizadoIndDos2,RealizadoIndDos3,indTres1,indTres2,indTres3,RealizadoIndTres1,RealizadoIndTres2,RealizadoIndTres3,horaControl1,horaControl2,horaControl3,horaControl4,horaControl5,horaControl6,fcCtr1,fcCtr2,fcCtr3,fcCtr4,fcCtr5,fcCtr6,frCtr1,frCtr2,frCtr3,frCtr4,frCtr5,frCtr6,temAxCtr1,temAxCtr2,temAxCtr3,temAxCtr4,temAxCtr5,temAxCtr6,satOCtr1,satOCtr2,satOCtr3,satOCtr4,satOCtr5,satOCtr6,hgtCtr1,hgtCtr2,hgtCtr3,hgtCtr4,hgtCtr5,hgtCtr6,psCtr1,psCtr2,psCtr3,psCtr4,psCtr5,psCtr6,pdCtr1,pdCtr2,pdCtr3,pdCtr4,pdCtr5,pdCtr6,eGlsCrt1,eGlsCrt2,eGlsCrt3,eGlsCrt4,eGlsCrt5,eGlsCrt6,evaCtr1,evaCtr2,evaCtr3,evaCtr4,evaCtr5,evaCtr6,ObservacionesTto,perId,fechaSalida);
													console.log("se resetea contador de "+ countClicks);
												}else{
													console.log("cantidad de clicks hechos"+ countClicks);
													alert("Debe clickear solo una vez, ya se esta procesando su ingreso.")
												}
											}else{
												alert("El valor ingresado debe ser HI o LO");
												$("#hgtCtr5").val("");
												countClicks = 0;
											}
										}else{
											if (hgtCtr5 >= 0 && hgtCtr5 <= 1000) {
												countClicks = countClicks+ 1;
												if (countClicks=== 1) {				
													CrearProcedimientoYtto(conId,horaIngresoPantalla,fechaYHoraPantalla,Realizado1,Realizado2,Realizado3,indDos1,indDos2,indDos3,RealizadoIndDos1,RealizadoIndDos2,RealizadoIndDos3,indTres1,indTres2,indTres3,RealizadoIndTres1,RealizadoIndTres2,RealizadoIndTres3,horaControl1,horaControl2,horaControl3,horaControl4,horaControl5,horaControl6,fcCtr1,fcCtr2,fcCtr3,fcCtr4,fcCtr5,fcCtr6,frCtr1,frCtr2,frCtr3,frCtr4,frCtr5,frCtr6,temAxCtr1,temAxCtr2,temAxCtr3,temAxCtr4,temAxCtr5,temAxCtr6,satOCtr1,satOCtr2,satOCtr3,satOCtr4,satOCtr5,satOCtr6,hgtCtr1,hgtCtr2,hgtCtr3,hgtCtr4,hgtCtr5,hgtCtr6,psCtr1,psCtr2,psCtr3,psCtr4,psCtr5,psCtr6,pdCtr1,pdCtr2,pdCtr3,pdCtr4,pdCtr5,pdCtr6,eGlsCrt1,eGlsCrt2,eGlsCrt3,eGlsCrt4,eGlsCrt5,eGlsCrt6,evaCtr1,evaCtr2,evaCtr3,evaCtr4,evaCtr5,evaCtr6,ObservacionesTto,perId,fechaSalida);
													console.log("se resetea contador de "+ countClicks);
												}else{
													console.log("cantidad de clicks hechos"+ countClicks);
													alert("Debe clickear solo una vez, ya se esta procesando su ingreso.")
												}
											}else{
												alert("El valor ingresado no puede ser igual a 0 o mayor a 1000");
												$("#hgtCtr5").val("");
												countClicks = 0;
											}
										}
									}
								}else{
									alert("Debe completar Todos los campos obligatorios.");
									countClicks = 0;
								}
							}
						}else{
								if(fcCtr6 !== "" && frCtr6 !== "" && temAxCtr6 !== "" && satOCtr6 !== "" && psCtr6 !== "" && pdCtr6 !== "" && eGlsCrt6 !== "" ) {
									countClicks = countClicks+ 1;
									if (countClicks=== 1) {				
										CrearProcedimientoYtto(conId,horaIngresoPantalla,fechaYHoraPantalla,Realizado1,Realizado2,Realizado3,indDos1,indDos2,indDos3,RealizadoIndDos1,RealizadoIndDos2,RealizadoIndDos3,indTres1,indTres2,indTres3,RealizadoIndTres1,RealizadoIndTres2,RealizadoIndTres3,horaControl1,horaControl2,horaControl3,horaControl4,horaControl5,horaControl6,fcCtr1,fcCtr2,fcCtr3,fcCtr4,fcCtr5,fcCtr6,frCtr1,frCtr2,frCtr3,frCtr4,frCtr5,frCtr6,temAxCtr1,temAxCtr2,temAxCtr3,temAxCtr4,temAxCtr5,temAxCtr6,satOCtr1,satOCtr2,satOCtr3,satOCtr4,satOCtr5,satOCtr6,hgtCtr1,hgtCtr2,hgtCtr3,hgtCtr4,hgtCtr5,hgtCtr6,psCtr1,psCtr2,psCtr3,psCtr4,psCtr5,psCtr6,pdCtr1,pdCtr2,pdCtr3,pdCtr4,pdCtr5,pdCtr6,eGlsCrt1,eGlsCrt2,eGlsCrt3,eGlsCrt4,eGlsCrt5,eGlsCrt6,evaCtr1,evaCtr2,evaCtr3,evaCtr4,evaCtr5,evaCtr6,ObservacionesTto,perId,fechaSalida);
										console.log("se resetea contador de "+ countClicks);
									}else{
										console.log("cantidad de clicks hechos"+ countClicks);
										alert("Debe clickear solo una vez, ya se esta procesando su ingreso.")
									}
								}else{
									if (fcCtr6 === ""){$("#fcCtr6").css("border-color","red");}else{$("#fcCtr6").css("border-color","green");}
									if (frCtr6 === ""){$("#frCtr6").css("border-color","red");}else{$("#frCtr6").css("border-color","green");}
									if (temAxCtr6 === ""){$("#temAxCtr6").css("border-color","red");}else{$("#temAxCtr6").css("border-color","green");}
									if (satOCtr6 === ""){$("#satOCtr6").css("border-color","red");}else{$("#satOCtr6").css("border-color","green");}
									if (psCtr6 === ""){$("#psCtr6").css("border-color","red");}else{$("#psCtr6").css("border-color","green");}
									if (pdCtr6 === ""){$("#pdCtr6").css("border-color","red");}else{$("#pdCtr6").css("border-color","green");}
									if (eGlsCrt6 === ""){$("#eGlsCrt6").css("border-color","red");}else{$("#eGlsCrt6").css("border-color","green");}

									if(fcCtr6 !== "" && frCtr6 !== "" && temAxCtr6 !== "" && satOCtr6 !== "" && psCtr6 !== "" && pdCtr6 !== "" && eGlsCrt6 !== "" ) {
										if (hgtCtr6 === "") {
											countClicks = countClicks+ 1;
											if (countClicks=== 1) {				
												CrearProcedimientoYtto(conId,horaIngresoPantalla,fechaYHoraPantalla,Realizado1,Realizado2,Realizado3,indDos1,indDos2,indDos3,RealizadoIndDos1,RealizadoIndDos2,RealizadoIndDos3,indTres1,indTres2,indTres3,RealizadoIndTres1,RealizadoIndTres2,RealizadoIndTres3,horaControl1,horaControl2,horaControl3,horaControl4,horaControl5,horaControl6,fcCtr1,fcCtr2,fcCtr3,fcCtr4,fcCtr5,fcCtr6,frCtr1,frCtr2,frCtr3,frCtr4,frCtr5,frCtr6,temAxCtr1,temAxCtr2,temAxCtr3,temAxCtr4,temAxCtr5,temAxCtr6,satOCtr1,satOCtr2,satOCtr3,satOCtr4,satOCtr5,satOCtr6,hgtCtr1,hgtCtr2,hgtCtr3,hgtCtr4,hgtCtr5,hgtCtr6,psCtr1,psCtr2,psCtr3,psCtr4,psCtr5,psCtr6,pdCtr1,pdCtr2,pdCtr3,pdCtr4,pdCtr5,pdCtr6,eGlsCrt1,eGlsCrt2,eGlsCrt3,eGlsCrt4,eGlsCrt5,eGlsCrt6,evaCtr1,evaCtr2,evaCtr3,evaCtr4,evaCtr5,evaCtr6,ObservacionesTto,perId,fechaSalida);
												console.log("se resetea contador de "+ countClicks);
											}else{
												console.log("cantidad de clicks hechos"+ countClicks);
												alert("Debe clickear solo una vez, ya se esta procesando su ingreso.")
											}
										}else{
											if (isNaN(hgtCtr6)) {
												if ((hgtCtr6 === "HI" || hgtCtr6 === "LO") || (hgtCtr6 === "Hi" || hgtCtr6 === "Lo") || (hgtCtr6 === "hi" || hgtCtr6 === "lo") || (hgtCtr6 === "hI" || hgtCtr6 === "lO")) {
													countClicks = countClicks+ 1;
													if (countClicks=== 1) {				
														CrearProcedimientoYtto(conId,horaIngresoPantalla,fechaYHoraPantalla,Realizado1,Realizado2,Realizado3,indDos1,indDos2,indDos3,RealizadoIndDos1,RealizadoIndDos2,RealizadoIndDos3,indTres1,indTres2,indTres3,RealizadoIndTres1,RealizadoIndTres2,RealizadoIndTres3,horaControl1,horaControl2,horaControl3,horaControl4,horaControl5,horaControl6,fcCtr1,fcCtr2,fcCtr3,fcCtr4,fcCtr5,fcCtr6,frCtr1,frCtr2,frCtr3,frCtr4,frCtr5,frCtr6,temAxCtr1,temAxCtr2,temAxCtr3,temAxCtr4,temAxCtr5,temAxCtr6,satOCtr1,satOCtr2,satOCtr3,satOCtr4,satOCtr5,satOCtr6,hgtCtr1,hgtCtr2,hgtCtr3,hgtCtr4,hgtCtr5,hgtCtr6,psCtr1,psCtr2,psCtr3,psCtr4,psCtr5,psCtr6,pdCtr1,pdCtr2,pdCtr3,pdCtr4,pdCtr5,pdCtr6,eGlsCrt1,eGlsCrt2,eGlsCrt3,eGlsCrt4,eGlsCrt5,eGlsCrt6,evaCtr1,evaCtr2,evaCtr3,evaCtr4,evaCtr5,evaCtr6,ObservacionesTto,perId,fechaSalida);
														console.log("se resetea contador de "+ countClicks);
													}else{
														console.log("cantidad de clicks hechos"+ countClicks);
														alert("Debe clickear solo una vez, ya se esta procesando su ingreso.")
													}
												}else{
													alert("El valor ingresado debe ser HI o LO");
													$("#hgtCtr6").val("");
													countClicks = 0;
												}
											}else{
												if (hgtCtr6 >= 0 && hgtCtr6 <= 1000) {
													countClicks = countClicks+ 1;
													if (countClicks=== 1) {				
														CrearProcedimientoYtto(conId,horaIngresoPantalla,fechaYHoraPantalla,Realizado1,Realizado2,Realizado3,indDos1,indDos2,indDos3,RealizadoIndDos1,RealizadoIndDos2,RealizadoIndDos3,indTres1,indTres2,indTres3,RealizadoIndTres1,RealizadoIndTres2,RealizadoIndTres3,horaControl1,horaControl2,horaControl3,horaControl4,horaControl5,horaControl6,fcCtr1,fcCtr2,fcCtr3,fcCtr4,fcCtr5,fcCtr6,frCtr1,frCtr2,frCtr3,frCtr4,frCtr5,frCtr6,temAxCtr1,temAxCtr2,temAxCtr3,temAxCtr4,temAxCtr5,temAxCtr6,satOCtr1,satOCtr2,satOCtr3,satOCtr4,satOCtr5,satOCtr6,hgtCtr1,hgtCtr2,hgtCtr3,hgtCtr4,hgtCtr5,hgtCtr6,psCtr1,psCtr2,psCtr3,psCtr4,psCtr5,psCtr6,pdCtr1,pdCtr2,pdCtr3,pdCtr4,pdCtr5,pdCtr6,eGlsCrt1,eGlsCrt2,eGlsCrt3,eGlsCrt4,eGlsCrt5,eGlsCrt6,evaCtr1,evaCtr2,evaCtr3,evaCtr4,evaCtr5,evaCtr6,ObservacionesTto,perId,fechaSalida);
														console.log("se resetea contador de "+ countClicks);
													}else{
														console.log("cantidad de clicks hechos"+ countClicks);
														alert("Debe clickear solo una vez, ya se esta procesando su ingreso.")
													}
												}else{
													alert("El valor ingresado no puede ser igual a 0 o mayor a 1000");
													$("#hgtCtr6").val("");
													countClicks = 0;
												}
											}
										}//END ELSE 
									}else{
										alert("Error al guardar el procedimiento, Debe completar los campos en Rojo.");
										countClicks = 0;
									}//END ELSE
								}// END ELSE
						}//END ELSE
					}//END ELSE
		}//END ELSE
	});

	$("#terminarProcedimientos").on("click",function(){
		var conId = $("#conId").val();		
		///INGRESO PANTALLA
		var horaIngresoPantalla = $("#horaIngresoPantalla").val();
		var fechaIngrsoPantalla = $("#fechaYhoraIngreso").val();
		var fechaYHoraPantalla = fechaIngrsoPantalla+" "+ horaIngresoPantalla;

		var Realizado1 = $('input[name=Realizado1]').prop('checked');
		var Realizado2 = $('input[name=Realizado2]').prop('checked');
		var Realizado3 = $('input[name=Realizado3]').prop('checked');
		var indDos1 = $("#indDos1").val();
		var indDos2 = $("#indDos2").val();
		var indDos3 = $("#indDos3").val();		
		var RealizadoIndDos1  = $('input[name=RealizadoIndDos1]').prop('checked'); 
		var RealizadoIndDos2  = $('input[name=RealizadoIndDos2]').prop('checked'); 
		var RealizadoIndDos3  = $('input[name=RealizadoIndDos3]').prop('checked'); 
		var indTres1 = $("#indTres1").val();
		var indTres2 = $("#indTres2").val();
		var indTres3 = $("#indTres3").val();
		var RealizadoIndTres1  = $('input[name=RealizadoIndTres1]').prop('checked'); 
		var RealizadoIndTres2  = $('input[name=RealizadoIndTres2]').prop('checked'); 
		var RealizadoIndTres3  = $('input[name=RealizadoIndTres3]').prop('checked');
		var horaControl1 = $("#horaControl1").val();
		var horaControl2 = $("#horaControl2").val();
		var horaControl3 = $("#horaControl3").val();
		var horaControl4 = $("#horaControl4").val();
		var horaControl5 = $("#horaControl5").val();
		var horaControl6 = $("#horaControl6").val();
		var fcCtr1 = $("#fcCtr1").val();
		var fcCtr2 = $("#fcCtr2").val();
		var fcCtr3 = $("#fcCtr3").val();
		var fcCtr4 = $("#fcCtr4").val();
		var fcCtr5 = $("#fcCtr5").val();
		var fcCtr6 = $("#fcCtr6").val();
		var frCtr1 = $("#frCtr1").val();
		var frCtr2 = $("#frCtr2").val();
		var frCtr3 = $("#frCtr3").val();
		var frCtr4 = $("#frCtr4").val();
		var frCtr5 = $("#frCtr5").val();
		var frCtr6 = $("#frCtr6").val();
		var temAxCtr1 = $("#temAxCtr1").val();
		var temAxCtr2 = $("#temAxCtr2").val();
		var temAxCtr3 = $("#temAxCtr3").val();
		var temAxCtr4 = $("#temAxCtr4").val();
		var temAxCtr5 = $("#temAxCtr5").val();
		var temAxCtr6 = $("#temAxCtr6").val();
		var satOCtr1 = $("#satOCtr1").val();
		var satOCtr2 = $("#satOCtr2").val();
		var satOCtr3 = $("#satOCtr3").val();
		var satOCtr4 = $("#satOCtr4").val();
		var satOCtr5 = $("#satOCtr5").val();
		var satOCtr6 = $("#satOCtr6").val();
		var hgtCtr1 = $("#hgtCtr1").val();
		var hgtCtr2= $("#hgtCtr2").val();
		var hgtCtr3= $("#hgtCtr3").val();
		var hgtCtr4= $("#hgtCtr4").val();
		var hgtCtr5= $("#hgtCtr5").val();
		var hgtCtr6= $("#hgtCtr6").val();
		var psCtr1 = $("#psCtr1").val();
		var psCtr2 = $("#psCtr2").val();
		var psCtr3 = $("#psCtr3").val();
		var psCtr4 = $("#psCtr4").val();
		var psCtr5 = $("#psCtr5").val();
		var psCtr6 = $("#psCtr6").val();
		var pdCtr1 = $("#pdCtr1").val();
		var pdCtr2 = $("#pdCtr2").val();
		var pdCtr3 = $("#pdCtr3").val();
		var pdCtr4 = $("#pdCtr4").val();
		var pdCtr5 = $("#pdCtr5").val();
		var pdCtr6 = $("#pdCtr6").val();
		var eGlsCrt1 = $("#eGlsCrt1").val();
		var eGlsCrt2 = $("#eGlsCrt2").val();
		var eGlsCrt3 = $("#eGlsCrt3").val();
		var eGlsCrt4 = $("#eGlsCrt4").val();
		var eGlsCrt5 = $("#eGlsCrt5").val();
		var eGlsCrt6 = $("#eGlsCrt6").val();
		var evaCtr1 = $("#evaCtr1").val();
		var evaCtr2 = $("#evaCtr2").val();
		var evaCtr3 = $("#evaCtr3").val();
		var evaCtr4 = $("#evaCtr4").val();
		var evaCtr5 = $("#evaCtr5").val();
		var evaCtr6 = $("#evaCtr6").val();
		var ObservacionesTto = $("#ObservacionesTto").val();
		var perId = window.parent.$("#perId").val();
		var relos = window.parent.$("#reloj").val();
		var fechaSalida = fecha+" "+relos;

		//para terminar procedimiento
		var ind1 = $("#ind1").val();
		var ind2 = $("#ind2").val();
		var ind3 = $("#ind3").val();

		if ((ind1 !== "" && Realizado1 === false) || (ind2 !== "" && Realizado2 === false ) || (ind3 !== "" && Realizado3 === false ) ) {
			alert("debe checkear el medicamento a tratar");
			countClicks = 0;
			window.parent.$("html,body").animate({ scrollTop: 0 }, 600);
		}else{
			countClicks = countClicks+ 1;
			if (countClicks=== 1) {				
				CrearProcedimientoYtto(conId,horaIngresoPantalla,fechaYHoraPantalla,Realizado1,Realizado2,Realizado3,indDos1,indDos2,indDos3,RealizadoIndDos1,RealizadoIndDos2,RealizadoIndDos3,indTres1,indTres2,indTres3,RealizadoIndTres1,RealizadoIndTres2,RealizadoIndTres3,horaControl1,horaControl2,horaControl3,horaControl4,horaControl5,horaControl6,fcCtr1,fcCtr2,fcCtr3,fcCtr4,fcCtr5,fcCtr6,frCtr1,frCtr2,frCtr3,frCtr4,frCtr5,frCtr6,temAxCtr1,temAxCtr2,temAxCtr3,temAxCtr4,temAxCtr5,temAxCtr6,satOCtr1,satOCtr2,satOCtr3,satOCtr4,satOCtr5,satOCtr6,hgtCtr1,hgtCtr2,hgtCtr3,hgtCtr4,hgtCtr5,hgtCtr6,psCtr1,psCtr2,psCtr3,psCtr4,psCtr5,psCtr6,pdCtr1,pdCtr2,pdCtr3,pdCtr4,pdCtr5,pdCtr6,eGlsCrt1,eGlsCrt2,eGlsCrt3,eGlsCrt4,eGlsCrt5,eGlsCrt6,evaCtr1,evaCtr2,evaCtr3,evaCtr4,evaCtr5,evaCtr6,ObservacionesTto,perId,fechaSalida);
				console.log("se resetea contador de "+ countClicks);
			}else{
				console.log("cantidad de clicks hechos"+ countClicks);
				alert("Debe clickear solo una vez, ya se esta procesando su ingreso.")
			}
		}
		
	});

	$("#IngresarMasTTo").on("click",function(){

		var ind1 = $("#ind1").val();
		var ind2 = $("#ind2").val();
		var ind3 = $("#ind3").val();
		var Realizado1 = $('input[name=Realizado1]').prop('checked');
		var Realizado2 = $('input[name=Realizado2]').prop('checked');
		var Realizado3 = $('input[name=Realizado3]').prop('checked');


		if ((ind1 !== "" && ind2 !== "" && ind3 !== "") &&  (Realizado1 !== false && Realizado2 !== false && Realizado3 !== false) ) {
			$("#manejoYTratamientoDosyTres").show();
		}else
			if ((ind1 !== "" && ind2 !== "" && ind3 === "") && (Realizado1 !== false && Realizado2 !== false && Realizado3 === false) ) {
				$("#manejoYTratamientoDosyTres").show();
			}else
				if ((ind1 !== "" && ind2 === "" && ind3 === "") && (Realizado1 !== false && Realizado2 === false && Realizado3 === false) ) {
					$("#manejoYTratamientoDosyTres").show();
				}else{
					window.parent.$("#loader").hide();
					$("#manejoYTratamientoDosyTres").hide();
					alert("No se ha realizado las indicaciones descritas");
					window.parent.$("html,body").animate({ scrollTop: 0 }, 600);
				}
	});

	$("#ObservacionesTto").keyup(function(){
		var data = $("#ObservacionesTto").val().length;
		var maxLength = 150;
		var minlength = 0;
		var contador = (minlength + data);
		if (contador == 150) {
			document.getElementById("charNum").innerHTML = contador+'/'+maxLength;
		}else{
			document.getElementById("charNum").innerHTML = contador+'/'+maxLength;
		}
	});

	$("#Aceptar").on("click",function(){
		var tab = $("#tabContent").val();
		var conId = $("#conId").val();
		var fechaHoy = $("#fechaHoy").val();
	 	var hora = window.parent.$("#reloj").val();
	 	var fechaHora = fechaHoy+" "+hora;
	 	var perId = window.parent.$("#perId").val();
		var carId = 4;
	 	obtenerValidacionIngresoPacientes(conId,tab,fechaHora,perId,carId);
	});

	$("#volver").on("click",function(){
		var tab = $("#tabContent").val();
		var conId = $("#conId").val();
		var fechaHoy = $("#fechaHoy").val();
	 	var hora = window.parent.$("#reloj").val();
	 	var fechaHora = fechaHoy+" "+hora;
	 	var perId = window.parent.$("#perId").val();
		var carId = 4;
	 	obtenerValidacionIngresoPacientes(conId,tab,fechaHora,perId,carId);
	});
	

	//INGRESA EL NSP PACIENTE
	$("#ingresarNspPac").on("click",function(){	
		var conId = $("#conId").val();

		///INGRESO PANTALLA
		var horaIngresoPantalla = $("#horaIngresoPantalla").val();
		var fechaIngrsoPantalla = $("#fechaYhoraIngreso").val();
		var fechaYHoraPantalla = fechaIngrsoPantalla+" "+ horaIngresoPantalla;
		
		var ObservacionNsp = $("#ObservacionNsp").val();
		var perId = window.parent.$("#perId").val();
		var relos = window.parent.$("#reloj").val();
		var fechaSalida = fecha+" "+relos;
		if (ObservacionNsp !=="") {
			registrarNspPaciente(conId,fechaYHoraPantalla,ObservacionNsp,perId,fechaSalida);
		}else{
			window.parent.$("#loader").hide();
			alert("Error al ingresar el NSP, Favor Complete los campos en rojo.");
			window.parent.$("html,body").animate({ scrollTop: 0 }, 600);
		}		
	});


	$("#mostrarMas").on("click",function(){
		if (!recuadroDataVisible) {
			$("#recuadroData").show();	
			recuadroDataVisible = true;
		}else{
			$("#recuadroData").hide();
			recuadroDataVisible = false;
		}
	});


	$("#ingresarNsp").on("click",function(){
		$("#ObservacionNsp").val("");
		$("#numNsp").text("0/700");
		var rutPaci = $("#rutPaci").val();
		window.parent.$("html,body").animate({ scrollTop: 0 }, 600);
		$("#ingresarNspPaciente").modal();		
	});


	$("#ObservacionNsp").keyup(function(){
		var data = $("#ObservacionNsp").val().length;
		var maxLength = 700;
		var minlength = 0;
		var contador = (minlength + data);
		if (contador == 700) {
			document.getElementById("numNsp").innerHTML = contador+'/'+maxLength;
		}else
		{
			document.getElementById("numNsp").innerHTML = contador+'/'+maxLength;
		}
	});

	$("#AceptarEgreso").on("click",function(){
		var tab = $("#tabContent").val();
		$(location).attr('href',"dashboard.php?tab="+tab);
	});

/*******************************************************************************************/
	// INICIO VALIDACIONES FRECUENCIA CARDIACA
		$("#fcCtr2").keyup(function(){
			var fc = $("#fcCtr2").val();
			if (fc >= 0 && fc <= 300 ) {
			}else{			
				alert("El valor ingresado no puede ser mayor a 300");
				$("#fcCtr2").val("");
			}
		});

		$("#fcCtr3").keyup(function(){
			var fc = $("#fcCtr3").val();
			if (fc >= 0 && fc <= 300 ) {
			}else{			
				alert("El valor ingresado no puede ser mayor a 300");
				$("#fcCtr3").val("");
			}
		});
		$("#fcCtr4").keyup(function(){
			var fc = $("#fcCtr4").val();
			if (fc >= 0 && fc <= 300 ) {
			}else{			
				alert("El valor ingresado no puede ser mayor a 300");
				$("#fcCtr4").val("");
			}
		});
		$("#fcCtr5").keyup(function(){
			var fc = $("#fcCtr5").val();
			if (fc >= 0 && fc <= 300 ) {
			}else{			
				alert("El valor ingresado no puede ser mayor a 300");
				$("#fcCtr5").val("");
			}
		});
		$("#fcCtr6").keyup(function(){
			var fc = $("#fcCtr6").val();
			if (fc >= 0 && fc <= 300 ) {
			}else{			
				alert("El valor ingresado no puede ser mayor a 300");
				$("#fcCtr6").val("");
			}
		});	

	// INICIO VALIDACIONES FRECUENCIA RESPIRATORIA
		$("#frCtr2").keyup(function(){
			var fr = $("#frCtr2").val();
			if (fr >=0 && fr <= 100 ) {
			}else{			
				alert("El valor ingresado no puede ser mayor a 100");
				$("#frCtr2").val("");
			}
		});

		$("#frCtr3").keyup(function(){
			var fr = $("#frCtr3").val();
			if (fr >=0 && fr <= 100 ) {
			}else{			
				alert("El valor ingresado no puede ser mayor a 100");
				$("#frCtr3").val("");
			}
		});

		$("#frCtr4").keyup(function(){
			var fr = $("#frCtr4").val();
			if (fr >=0 && fr <= 100 ) {
			}else{			
				alert("El valor ingresado no puede ser mayor a 100");
				$("#frCtr4").val("");
			}
		});

		$("#frCtr5").keyup(function(){
			var fr = $("#frCtr5").val();
			if (fr >=0 && fr <= 100 ) {
			}else{			
				alert("El valor ingresado no puede ser mayor a 100");
				$("#frCtr5").val("");
			}
		});

		$("#frCtr6").keyup(function(){
			var fr = $("#frCtr6").val();
			if (fr >=0 && fr <= 100 ) {
			}else{			
				alert("El valor ingresado no puede ser mayor a 100");
				$("#frCtr6").val("");
			}
		});

	// INICIO VALIDACIONES TEMPERATURA AXILAR
		function isCommaDecimalNumber(value) {
		  return /^-?(?:\d+(?:,\d*)?)$/.test(value);
		}

		$("#temAxCtr2").keyup(function(){
			var tempAx = $("#temAxCtr2").val();
			if (tempAx === "") {
			}else{
				if (isCommaDecimalNumber(tempAx) === true) {
					var valid = tempAx.split(",");
					if (valid[0]>=0 && valid[0]<=45) {
					}else{
						alert("El valor ingresado no puede ser mayor a 45");
						$("#temAxCtr2").val("");
					}
				}else{
					alert("El valor ingresado no puede llevar otro separador que no sea una ',' ");
					$("#temAxCtr2").val("");
				}
			}
		});


		$("#temAxCtr3").keyup(function(){
			var tempAx = $("#temAxCtr3").val();
			if (tempAx === "") {
			}else{
				if (isCommaDecimalNumber(tempAx) === true) {
					var valid = tempAx.split(",");
					if (valid[0]>=0 && valid[0]<=45) {
					}else{
						alert("El valor ingresado no puede ser mayor a 45");
						$("#temAxCtr3").val("");
					}
				}else{
					alert("El valor ingresado no puede llevar otro separador que no sea una ',' ");
					$("#temAxCtr3").val("");
				}
			}
		});

		$("#temAxCtr4").keyup(function(){
			var tempAx = $("#temAxCtr4").val();
			if (tempAx === "") {
			}else{
				if (isCommaDecimalNumber(tempAx) === true) {
					var valid = tempAx.split(",");
					if (valid[0]>=0 && valid[0]<=45) {
					}else{
						alert("El valor ingresado no puede ser mayor a 45");
						$("#temAxCtr4").val("");
					}
				}else{
					alert("El valor ingresado no puede llevar otro separador que no sea una ',' ");
					$("#temAxCtr4").val("");
				}
			}
		});

		$("#temAxCtr5").keyup(function(){
			var tempAx = $("#temAxCtr5").val();
			if (tempAx === "") {
			}else{
				if (isCommaDecimalNumber(tempAx) === true) {
					var valid = tempAx.split(",");
					if (valid[0]>=0 && valid[0]<=45) {
					}else{
						alert("El valor ingresado no puede ser mayor a 45");
						$("#temAxCtr5").val("");
					}
				}else{
					alert("El valor ingresado no puede llevar otro separador que no sea una ',' ");
					$("#temAxCtr5").val("");
				}
			}
		});

		$("#temAxCtr6").keyup(function(){
			var tempAx = $("#temAxCtr6").val();
			if (tempAx === "") {
			}else{
				if (isCommaDecimalNumber(tempAx) === true) {
					var valid = tempAx.split(",");
					if (valid[0]>=0 && valid[0]<=45) {
					}else{
						alert("El valor ingresado no puede ser mayor a 45");
						$("#temAxCtr6").val("");
					}
				}else{
					alert("El valor ingresado no puede llevar otro separador que no sea una ',' ");
					$("#temAxCtr6").val("");
				}
			}
		});
	
	// INICIO VALIDACIONES SAT O2
		$("#satOCtr2").keyup(function(){
			var satO2 = $("#satOCtr2").val();
			if (satO2 >=0 && satO2 <= 100 ) {
			}else{			
				alert("El valor ingresado no puede ser mayor a 100");
				$("#satOCtr2").val("");
			}
		});

		$("#satOCtr3").keyup(function(){
			var satO2 = $("#satOCtr3").val();
			if (satO2 >=0 && satO2 <= 100 ) {
			}else{			
				alert("El valor ingresado no puede ser mayor a 100");
				$("#satOCtr3").val("");
			}
		});

		$("#satOCtr4").keyup(function(){
			var satO2 = $("#satOCtr4").val();
			if (satO2 >=0 && satO2 <= 100 ) {
			}else{			
				alert("El valor ingresado no puede ser mayor a 100");
				$("#satOCtr4").val("");
			}
		});

		$("#satOCtr5").keyup(function(){
			var satO2 = $("#satOCtr5").val();
			if (satO2 >=0 && satO2 <= 100 ) {
			}else{			
				alert("El valor ingresado no puede ser mayor a 100");
				$("#satOCtr5").val("");
			}
		});

		$("#satOCtr6").keyup(function(){
			var satO2 = $("#satOCtr6").val();
			if (satO2 >=0 && satO2 <= 100 ) {
			}else{			
				alert("El valor ingresado no puede ser mayor a 100");
				$("#satOCtr6").val("");
			}
		});

	// INICIO VALIDACIONES HGT

	
	$("#hgt").keyup(function(){
		var hgt = $("#hgt").val();

		if (hgt === "" || hgt.length < 2 ) {
		}else{
			if ((hgt >= 0 && hgt <= 1000) || (hgt === "HI" || hgt === "LO") || (hgt === "Hi" || hgt === "Lo") || (hgt === "hi" || hgt === "lo") || (hgt === "hI" || hgt === "lO")  ) {
			}else{
				if ((hgt !== "HI" || hgt !== "LO") || (hgt !== "Hi" || hgt !== "Lo") || (hgt !== "hi" || hgt !== "lo") || (hgt === "hI" || hgt === "lO")  ) {
					alert("El valor ingresado debe ser HI o LO");
					$("#hgt").val("");
				}else{
					alert("El valor ingresado no puede ser igual a 0 o mayor a 1000");
					$("#hgt").val("");
				}
			}
		}
	});
	


	$("#hgtCtr2").on("keydown",function(e){
		if (!BlockKeys(/[0-9hiloHILO]/, e.key)) { return false; }
		var hgt = $("#hgtCtr2").val();
			//SI ES LETRA
			if (isNaN(hgt)) {				
				if (hgt.length < 2 ) {
				}else{
					if ((hgt === "HI" || hgt === "LO") || (hgt === "Hi" || hgt === "Lo") || (hgt === "hi" || hgt === "lo") || (hgt === "hI" || hgt === "lO")) {
					}else{
						alert("El valor ingresado debe ser HI o LO");
						$("#hgtCtr2").val("");
					}
				}
			}else{
				if (hgt >= 0 && hgt <= 1000) {

				}else{
					alert("El valor ingresado no puede ser igual a 0 o mayor a 1000");
					$("#hgtCtr2").val("");
				}
			}
	});


		$("#hgtCtr3").on("keydown",function(e){
			if (!BlockKeys(/[0-9hiloHILO]/, e.key)) { return false; }
			var hgt = $("#hgtCtr3").val();
			if (hgt === "" || hgt.length < 2 ) {
			}else{
				if ((hgt >= 0 && hgt <= 1000) || (hgt === "HI" || hgt === "LO") || (hgt === "Hi" || hgt === "Lo") || (hgt === "hi" || hgt === "lo") || (hgt === "hI" || hgt === "lO")  ) {
				}else{
					if ((hgt !== "HI" || hgt !== "LO") || (hgt !== "Hi" || hgt !== "Lo") || (hgt !== "hi" || hgt !== "lo") || (hgt === "hI" || hgt === "lO")  ) {
						alert("El valor ingresado debe ser HI o LO");
						$("#hgtCtr3").val("");
					}else{
						alert("El valor ingresado no puede ser igual a 0 o mayor a 1000");
						$("#hgtCtr3").val("");
					}
				}
			}
		});
		$("#hgtCtr4").on("keydown",function(e){
			if (!BlockKeys(/[0-9hiloHILO]/, e.key)) { return false; }
			var hgt = $("#hgtCtr4").val();
			if (hgt === "" || hgt.length < 2 ) {
			}else{
				if ((hgt >= 0 && hgt <= 1000) || (hgt === "HI" || hgt === "LO") || (hgt === "Hi" || hgt === "Lo") || (hgt === "hi" || hgt === "lo") || (hgt === "hI" || hgt === "lO")  ) {
				}else{
					if ((hgt !== "HI" || hgt !== "LO") || (hgt !== "Hi" || hgt !== "Lo") || (hgt !== "hi" || hgt !== "lo") || (hgt === "hI" || hgt === "lO")  ) {
						alert("El valor ingresado debe ser HI o LO");
						$("#hgtCtr4").val("");
					}else{
						alert("El valor ingresado no puede ser igual a 0 o mayor a 1000");
						$("#hgtCtr4").val("");
					}
				}
			}
		});
		$("#hgtCtr5").on("keydown",function(e){
			if (!BlockKeys(/[0-9hiloHILO]/, e.key)) { return false; }
			var hgt = $("#hgtCtr5").val();
			if (hgt === "" || hgt.length < 2 ) {
			}else{
				if ((hgt >= 0 && hgt <= 1000) || (hgt === "HI" || hgt === "LO") || (hgt === "Hi" || hgt === "Lo") || (hgt === "hi" || hgt === "lo") || (hgt === "hI" || hgt === "lO")  ) {
				}else{
					if ((hgt !== "HI" || hgt !== "LO") || (hgt !== "Hi" || hgt !== "Lo") || (hgt !== "hi" || hgt !== "lo") || (hgt === "hI" || hgt === "lO")  ) {
						alert("El valor ingresado debe ser HI o LO");
						$("#hgtCtr5").val("");
					}else{
						alert("El valor ingresado no puede ser igual a 0 o mayor a 1000");
						$("#hgtCtr5").val("");
					}
				}
			}
		});
		$("#hgtCtr6").on("keydown",function(e){
			if (!BlockKeys(/[0-9hiloHILO]/, e.key)) { return false; }
			var hgt = $("#hgtCtr6").val();
			if (hgt === "" || hgt.length < 2 ) {
			}else{
				if ((hgt >= 0 && hgt <= 1000) || (hgt === "HI" || hgt === "LO") || (hgt === "Hi" || hgt === "Lo") || (hgt === "hi" || hgt === "lo") || (hgt === "hI" || hgt === "lO")  ) {
				}else{
					if ((hgt !== "HI" || hgt !== "LO") || (hgt !== "Hi" || hgt !== "Lo") || (hgt !== "hi" || hgt !== "lo") || (hgt === "hI" || hgt === "lO")  ) {
						alert("El valor ingresado debe ser HI o LO");
						$("#hgtCtr6").val("");
					}else{
						alert("El valor ingresado no puede ser igual a 0 o mayor a 1000");
						$("#hgtCtr6").val("");
					}
				}
			}
		});

	// INICIO VALIDACIONES PRESION ARTERIAL SISTOLICA
		$("#psCtr2").keyup(function(){
			var ps = $("#psCtr2").val();
			if (ps >=0 && ps <= 300 ) {
			}else{			
				alert("El valor ingresado no puede ser mayor a 300");
				$("#psCtr2").val("");
			}
		});

		$("#psCtr3").keyup(function(){
			var ps = $("#psCtr3").val();
			if (ps >=0 && ps <= 300 ) {
			}else{			
				alert("El valor ingresado no puede ser mayor a 300");
				$("#psCtr3").val("");
			}
		});

		$("#psCtr4").keyup(function(){
			var ps = $("#psCtr4").val();
			if (ps >=0 && ps <= 300 ) {
			}else{			
				alert("El valor ingresado no puede ser mayor a 300");
				$("#psCtr4").val("");
			}
		});

		$("#psCtr5").keyup(function(){
			var ps = $("#psCtr5").val();
			if (ps >=0 && ps <= 300 ) {
			}else{			
				alert("El valor ingresado no puede ser mayor a 300");
				$("#psCtr5").val("");
			}
		});

		$("#psCtr6").keyup(function(){
			var ps = $("#psCtr6").val();
			if (ps >=0 && ps <= 300 ) {
			}else{			
				alert("El valor ingresado no puede ser mayor a 300");
				$("#psCtr6").val("");
			}
		});

	// INICIO VALIDACIONES PRESION ARTERIAL DIASISTOLICA
		$("#pdCtr2").keyup(function(){
			var pd = $("#pdCtr2").val();
			if (pd >=0 && pd <= 300 ) {
			}else{			
				alert("El valor ingresado no puede ser mayor a 300");
				$("#pdCtr2").val("");
			}
		});
		$("#pdCtr3").keyup(function(){
			var pd = $("#pdCtr3").val();
			if (pd >=0 && pd <= 300 ) {
			}else{			
				alert("El valor ingresado no puede ser mayor a 300");
				$("#pdCtr3").val("");
			}
		});
		$("#pdCtr4").keyup(function(){
			var pd = $("#pdCtr4").val();
			if (pd >=0 && pd <= 300 ) {
			}else{			
				alert("El valor ingresado no puede ser mayor a 300");
				$("#pdCtr4").val("");
			}
		});
		$("#pdCtr5").keyup(function(){
			var pd = $("#pdCtr5").val();
			if (pd >=0 && pd <= 300 ) {
			}else{			
				alert("El valor ingresado no puede ser mayor a 300");
				$("#pdCtr5").val("");
			}
		});
		$("#pdCtr6").keyup(function(){
			var pd = $("#pdCtr6").val();
			if (pd >=0 && pd <= 300 ) {
			}else{			
				alert("El valor ingresado no puede ser mayor a 300");
				$("#pdCtr6").val("");
			}
		});
	
	// INICIO VALIDACIONES EXAMEN EVA
		$("#evaCtr2").keyup(function(){
			var eEva = $("#evaCtr2").val();
			if (eEva > 0 && eEva <= 10 ) {
			}else{
				if (eEva !== "") {
					alert("El valor ingresado no puede ser mayor a 10");
					$("#evaCtr2").val("");
				}
			}
		});
		$("#evaCtr3").keyup(function(){
			var eEva = $("#evaCtr3").val();
			if (eEva > 0 && eEva <= 10 ) {
			}else{
				if (eEva !== "") {
					alert("El valor ingresado no puede ser mayor a 10");
					$("#evaCtr3").val("");
				}
			}
		});

		$("#evaCtr4").keyup(function(){
			var eEva = $("#evaCtr4").val();
			if (eEva > 0 && eEva <= 10 ) {
			}else{
				if (eEva !== "") {
					alert("El valor ingresado no puede ser mayor a 10");
					$("#evaCtr4").val("");
				}
			}
		});

		$("#evaCtr5").keyup(function(){
			var eEva = $("#evaCtr5").val();
			if (eEva > 0 && eEva <= 10 ) {
			}else{
				if (eEva !== "") {
					alert("El valor ingresado no puede ser mayor a 10");
					$("#evaCtr5").val("");
				}
			}
		});

		$("#evaCtr6").keyup(function(){
			var eEva = $("#evaCtr6").val();
			if (eEva > 0 && eEva <= 10 ) {
			}else{
				if (eEva !== "") {
					alert("El valor ingresado no puede ser mayor a 10");
					$("#evaCtr6").val("");
				}
			}
		});

		//RESTRICCION CARACTERES ESPECIALES 
	/*	$("#fcCtr2").on("keydown",function(e){
			if (!BlockKeys(/[0-9]/, e.key)) { return false; }
		});
		
		$("#fcCtr3").on("keydown",function(e){
			if (!BlockKeys(/[0-9]/, e.key)) { return false; }
		});
		
		$("#fcCtr4").on("keydown",function(e){
			if (!BlockKeys(/[0-9]/, e.key)) { return false; }
		});
		
		$("#fcCtr5").on("keydown",function(e){
			if (!BlockKeys(/[0-9]/, e.key)) { return false; }
		});
		
		$("#fcCtr6").on("keydown",function(e){
			if (!BlockKeys(/[0-9]/, e.key)) { return false; }
		});
		
		$("#frCtr2").on("keydown",function(e){
			if (!BlockKeys(/[0-9]/, e.key)) { return false; }
		});
		
		$("#frCtr3").on("keydown",function(e){
			if (!BlockKeys(/[0-9]/, e.key)) { return false; }
		});
		
		$("#frCtr4").on("keydown",function(e){
			if (!BlockKeys(/[0-9]/, e.key)) { return false; }
		});
		
		$("#frCtr5").on("keydown",function(e){
			if (!BlockKeys(/[0-9]/, e.key)) { return false; }
		});
		
		$("#frCtr6").on("keydown",function(e){
			if (!BlockKeys(/[0-9]/, e.key)) { return false; }
		});
				
		$("#satOCtr2").on("keydown",function(e){
			if (!BlockKeys(/[0-9]/, e.key)) { return false; }
		});
		
		$("#satOCtr3").on("keydown",function(e){
			if (!BlockKeys(/[0-9]/, e.key)) { return false; }
		});
		
		$("#satOCtr4").on("keydown",function(e){
			if (!BlockKeys(/[0-9]/, e.key)) { return false; }
		});
		
		$("#satOCtr5").on("keydown",function(e){
			if (!BlockKeys(/[0-9]/, e.key)) { return false; }
		});
		
		$("#satOCtr6").on("keydown",function(e){
			if (!BlockKeys(/[0-9]/, e.key)) { return false; }
		});
		
		$("#psCtr2").on("keydown",function(e){
			if (!BlockKeys(/[0-9]/, e.key)) { return false; }
		});
		
		$("#psCtr3").on("keydown",function(e){
			if (!BlockKeys(/[0-9]/, e.key)) { return false; }
		});
		
		$("#psCtr4").on("keydown",function(e){
			if (!BlockKeys(/[0-9]/, e.key)) { return false; }
		});
		
		$("#psCtr5").on("keydown",function(e){
			if (!BlockKeys(/[0-9]/, e.key)) { return false; }
		});
		
		$("#psCtr6").on("keydown",function(e){
			if (!BlockKeys(/[0-9]/, e.key)) { return false; }
		});
		
		$("#pdCtr2").on("keydown",function(e){
			if (!BlockKeys(/[0-9]/, e.key)) { return false; }
		});
		
		$("#pdCtr3").on("keydown",function(e){
			if (!BlockKeys(/[0-9]/, e.key)) { return false; }
		});
		
		$("#pdCtr4").on("keydown",function(e){
			if (!BlockKeys(/[0-9]/, e.key)) { return false; }
		});
		
		$("#pdCtr5").on("keydown",function(e){
			if (!BlockKeys(/[0-9]/, e.key)) { return false; }
		});
		
		$("#pdCtr6").on("keydown",function(e){
			if (!BlockKeys(/[0-9]/, e.key)) { return false; }
		});
		
		$("#eGlsCrt1").on("keydown",function(e){
			if (!BlockKeys(/[0-9]/, e.key)) { return false; }
		});
		
		$("#eGlsCrt2").on("keydown",function(e){
			if (!BlockKeys(/[0-9]/, e.key)) { return false; }
		});
		
		$("#eGlsCrt3").on("keydown",function(e){
			if (!BlockKeys(/[0-9]/, e.key)) { return false; }
		});
		
		$("#eGlsCrt4").on("keydown",function(e){
			if (!BlockKeys(/[0-9]/, e.key)) { return false; }
		});
		
		$("#eGlsCrt5").on("keydown",function(e){
			if (!BlockKeys(/[0-9]/, e.key)) { return false; }
		});
		
		$("#eGlsCrt6").on("keydown",function(e){
			if (!BlockKeys(/[0-9]/, e.key)) { return false; }
		});
		
		$("#evaCtr2").on("keydown",function(e){
			if (!BlockKeys(/[0-9]/, e.key)) { return false; }
		});
		
		$("#evaCtr3").on("keydown",function(e){
			if (!BlockKeys(/[0-9]/, e.key)) { return false; }
		});
		
		$("#evaCtr4").on("keydown",function(e){
			if (!BlockKeys(/[0-9]/, e.key)) { return false; }
		});
		
		$("#evaCtr5").on("keydown",function(e){
			if (!BlockKeys(/[0-9]/, e.key)) { return false; }
		});
		
		$("#evaCtr6").on("keydown",function(e){
			if (!BlockKeys(/[0-9]/, e.key)) { return false; }
		});
		
		$("#temAxCtr2").on("keydown",function(e){
			if (!BlockKeys(/[0-9,]/, e.key)) { return false; }
		});

		$("#temAxCtr3").on("keydown",function(e){
			if (!BlockKeys(/[0-9,]/, e.key)) { return false; }
		});

		$("#temAxCtr4").on("keydown",function(e){
			if (!BlockKeys(/[0-9,]/, e.key)) { return false; }
		});

		$("#temAxCtr5").on("keydown",function(e){
			if (!BlockKeys(/[0-9,]/, e.key)) { return false; }
		});

		$("#temAxCtr6").on("keydown",function(e){
			if (!BlockKeys(/[0-9,]/, e.key)) { return false; }
		});

		$("#ObservacionesTto").on("keydown",function(e){
			if (!BlockKeys(/[a-zA-Z,./1-9-*""#$%&()?¿¡!=´+áúéíóüñÑ0°<>_;:']/, e.key)) { return false; }
		});

		$("#ObservacionNsp").on("keydown",function(e){
			if (!BlockKeys(/[a-zA-Z,./1-9-*""#$%&()?¿¡!=´+áúéíóüñÑ0°<>_;:']/, e.key)) { return false; }
		});*/
	
});

	function BlockKeys(regexPermitido, key) {
       if (key != "Backspace" && key != " " && key != "Tab" && !key.match(regexPermitido)) {
           return false; //dont display key if it is a number
       }
       return true;
   }