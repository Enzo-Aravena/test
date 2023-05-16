let valorsesion = 0;
let countClicks =0;
$( document ).ready(function() {
	$(".tab_content").hide();
	window.parent.$("#loader").show();
	var test = location.search.replace('?', '').split('=');
	var menutab;

	$("#refrescarPantalla").hide();

	if(test[0] == 0 || test[0] === ""){
		$("ul.nav li:first").addClass("active").show(); 
		$(".tab_content:first").show();	
	}else{
		
			if (test[0] === "centro") {
				var centroTrabajo = test[1];
				window.parent.$("#centroTrabajo").val(centroTrabajo);
				window.parent.$("#tituloPestaña").empty();
				var title= "";
				window.parent.$("#pullRigth").css("margin-top","2%");
				$("ul.nav li:first").addClass("active").show();
				$(".tab_content:first").show();

				switch(centroTrabajo){
					case "1":
						title= "Registro Urgencia Carol Urzúa";
						window.parent.$("#tituloPestaña").append(title);
					break;
					case "2":
						title= "Registro Urgencia La Faena";
						window.parent.$("#tituloPestaña").append(title);
					break;
					case "3":
						title= "Registro Urgencia San Luis";
						window.parent.$("#tituloPestaña").append(title);
					break;
					case "4":
						title= "Registro Urgencia Lo Hermida";
						window.parent.$("#tituloPestaña").append(title);
					break;
					case "5":
						title= "Registro Urgencia C. Silva Henriquez";
						window.parent.$("#tituloPestaña").append(title);
					break;
					case "8":
						title= "Registro Urgencia SAR Carol Urzúa";
						window.parent.$("#tituloPestaña").append(title);
					break;
					case "9":
						title= "Registro Urgencia SAPU La Faena";
						window.parent.$("#tituloPestaña").append(title);
					break;
					case "10":
						title= "Registro Urgencia SAPU Lo Hermida";
						window.parent.$("#tituloPestaña").append(title);
					break;
					case "11":
						title= "Registro Urgencia SAPU San Luis";
						window.parent.$("#tituloPestaña").append(title);
					break;
					case "12":
						title= "Registro Urgencia P. Gerardo Whelan";
						window.parent.$("#tituloPestaña").append(title);
					break;
				}
			}else{
				if (test[0] === "idCentro") {

					var centroTrabajo = test[1];
					window.parent.$("#tituloPestaña").empty();
					var title= "";
					window.parent.$("#pullRigth").css("margin-top","2%");

					if (centroTrabajo === "13") {
						$("ul.nav li").removeClass("active");
						var href = "#tab6";
						$(href).addClass("active");
						$(href).fadeIn();			
						$('[href="#tab6"]').tab('show');
						$('[href="#tab1"]').hide();
						$('[href="#tab2"]').hide();
						$('[href="#tab3"]').hide();
						$('[href="#tab4"]').hide();
						$('[href="#tab5"]').hide();
						$('[href="#tab7"]').hide();

					}else{
						$("ul.nav li:first").addClass("active").show();
						$(".tab_content:first").show();

					}

					
					switch(centroTrabajo){
						case "1":
							title= "Registro Urgencia Carol Urzúa";
							window.parent.$("#tituloPestaña").append(title);
							$("#registrarUrgencia").show();
						break;
						case "2":
							title= "Registro Urgencia La Faena";
							window.parent.$("#tituloPestaña").append(title);
							$("#registrarUrgencia").show();
						break;
						case "3":
							title= "Registro Urgencia San Luis";
							window.parent.$("#tituloPestaña").append(title);
							$("#registrarUrgencia").show();
						break;
						case "4":
							title= "Registro Urgencia Lo Hermida";
							window.parent.$("#tituloPestaña").append(title);
							$("#registrarUrgencia").show();
						break;
						case "5":
							title= "Registro Urgencia C. Silva Henriquez";
							window.parent.$("#tituloPestaña").append(title);
							$("#registrarUrgencia").show();
						break;
						case "8":
							title= "Registro Urgencia SAR Carol Urzúa";
							window.parent.$("#tituloPestaña").append(title);
							$("#registrarUrgencia").show();
						break;
						case "9":
							title= "Registro Urgencia SAPU La Faena";
							window.parent.$("#tituloPestaña").append(title);
							$("#registrarUrgencia").show();
						break;
						case "10":
							title= "Registro Urgencia SAPU Lo Hermida";
							window.parent.$("#tituloPestaña").append(title);
							$("#registrarUrgencia").show();
						break;
						case "11":
							title= "Registro Urgencia SAPU San Luis";
							window.parent.$("#tituloPestaña").append(title);
							$("#registrarUrgencia").show();
						break;
						case "12":
							title= "Registro Urgencia P. Gerardo Whelan";
							window.parent.$("#tituloPestaña").append(title);
							$("#registrarUrgencia").show();
						break;

						case "13":
							title= "Consulta DAU";
							window.parent.$("#tituloPestaña").append(title);

							$("#registrarUrgencia").hide();

						break;
					}	
				}else{
					var menutab = test[1];

					switch(menutab){
						case 'tab1':
							$("ul.nav li:first").addClass("active").show();
							$(".tab_content:first").show();
						break;
						case 'tab2':
							$("ul.nav li").removeClass("active");
							var href = "#tab2";
							$(href).addClass("active");
							$(href).fadeIn();			
							$('[href="#tab2"]').tab('show');			
						break;
						case 'tab3':
							$("ul.nav li").removeClass("active");
							var href = "#tab3";
							$(href).addClass("active");
							$(href).fadeIn();			
							$('[href="#tab3"]').tab('show');
						break;
						case 'tab4':
							$("ul.nav li").removeClass("active");
							var href = "#tab4";
							$(href).addClass("active");
							$(href).fadeIn();			
							$('[href="#tab4"]').tab('show');
						break;
						case 'tab5':
							$("ul.nav li").removeClass("active");
							var href = "#tab5";
							$(href).addClass("active");
							$(href).fadeIn();			
							$('[href="#tab5"]').tab('show');
						break;
						default:
							$("ul.nav li:first").addClass("active").show();
							$(".tab_content:first").show();
						break;
					}

					window.parent.$("#tituloPestaña").empty();
					var title= "";
					var centroTrabajo = window.parent.$("#centroTrabajo").val();
					switch(centroTrabajo){
						case "1":
							title= "Registro Urgencia Carol Urzúa";
							window.parent.$("#tituloPestaña").append(title);
						break;
						case "2":
							title= "Registro Urgencia La Faena";
							window.parent.$("#tituloPestaña").append(title);
						break;
						case "3":
							title= "Registro Urgencia San Luis";
							window.parent.$("#tituloPestaña").append(title);
						break;
						case "4":
							title= "Registro Urgencia Lo Hermida";
							window.parent.$("#tituloPestaña").append(title);
						break;
						case "5":
							title= "Registro Urgencia C. Silva Henriquez";
							window.parent.$("#tituloPestaña").append(title);
						break;
						case "8":
							title= "Registro Urgencia SAR Carol Urzúa";
							window.parent.$("#tituloPestaña").append(title);
						break;
						case "9":
							title= "Registro Urgencia SAPU La Faena";
							window.parent.$("#tituloPestaña").append(title);
						break;
						case "10":
							title= "Registro Urgencia SAPU Lo Hermida";
							window.parent.$("#tituloPestaña").append(title);
						break;
						case "11":
							title= "Registro Urgencia SAPU San Luis";
							window.parent.$("#tituloPestaña").append(title);
						break;
						case "12":
							title= "Registro Urgencia P. Gerardo Whelan";
							window.parent.$("#tituloPestaña").append(title);
						break;
					}
				}	
			}
	}


	$("#cargandoPdf").hide();

/************************** TAB CONTENT ***************************************************/
	$("ul.nav li").click(function() {
		//BORRA LOS FILTROS
		$("#filtrarTablaExamen").val('');
		$("#filtrarTablaRayos").val('');
		$("#filtrarTablaElectro").val('');
		$("#filtrarTablaDental").val('');

		$("ul.nav li").removeClass("active");
		$(this).addClass("active");
		$(".tab_content").hide();
		var activeTab = $(this).find("a").attr("href");

		switch(activeTab){
			case "#tab1":
				$(activeTab).fadeIn();
			break;

			case "#tab2":	
				$(activeTab).fadeIn();
			break;
			case "#tab3":
				$(activeTab).fadeIn();
			break;

			case "#tab4":
				$(activeTab).fadeIn();
			break;
			case "#tab5":
				$(activeTab).fadeIn();
			break;
			case "#tab6":
				$(activeTab).fadeIn();
			break;
			case "#tab7":
				$(activeTab).fadeIn();
			break;
		}

		return false;
	});

/*******************************************************************************************/
	
	$("#pacId").empty();
	$("#example").tablesorter();
	$("#contentTab").hide();
	$( "#desde" ).datepicker();
	$( "#fnac" ).datepicker();
	$( "#fechaBusqueda" ).datepicker();
	$( "#fechaBusquedaCancelada" ).datepicker();	

	$("#buscar").hide();
	$( "#buscarRut" ).hide();

	$( "#datepicker" ).datepicker({
      changeMonth: true,
      changeYear: true
    });


	var hoy= new Date();
	var dd = hoy.getDate();
	var mm = hoy.getMonth()+1; //hoy es 0!
	var yyyy = hoy.getFullYear();
	if(dd<10) {dd='0'+dd} 

	if(mm<10) {mm='0'+mm} 
	fechaHoy = yyyy+'-'+mm+'-'+dd;
	$("#fechaHoy").val('');
	$("#fechaHoy").val(fechaHoy);


	window.parent.$("html,body").animate({ scrollTop: 0 }, 600);
	var centroTrabajo = window.parent.$("#centroTrabajo").val();
	var num = 0;
	

		if (valorsesion == 0) {cargarNacionalidad();}
		if (valorsesion == 0) {cargarComunas();}
		if (valorsesion == 0) {cargarPrevision();}
		if (valorsesion == 0) {cargarCentros(centroTrabajo);}
		if (valorsesion == 0) {cargarTipoConsulta();}
		if (valorsesion == 0) {cargarMedioTransporte();}
		if (valorsesion == 0) {cargarTipoAccidente();}
		if (valorsesion == 0) {cargarLugarAccidente();}
		if (valorsesion == 0) {cargarLugarAccidente();}
		if (valorsesion == 0) {cargarSexo();}
		if (valorsesion == 0) {obtenerRegistroTriadaPaciente(centroTrabajo);}
		if (valorsesion == 0) {obtenerPacientesNuevosCreados(centroTrabajo);}
		if (valorsesion == 0) {obtenerPacientesParaAtencion(centroTrabajo);}
		if (valorsesion == 0) {obtenerMisProcedimientos(centroTrabajo);}
		if (valorsesion == 0) {obtenerEgresoPaciente(centroTrabajo);}

		// PERMITEN LA OBTENCION DE LOS PACIENTES LISTOS DEL DIA 
		if (valorsesion == 0) {obtenerPacientesDadosDeAlta(centroTrabajo,fechaHoy);}
		if (valorsesion == 0) {obtenerPacientesCancelados(centroTrabajo,fechaHoy);}


		if (valorsesion == "-1") {
			FinalizarSesion();
		}
	

	//ABRE POPUP PARA INGRESAR UN USUARIO O BUSQUEDA
	$("#registrarUrgencia").on("click",function(){

		countClicks = 0;
		$("#primApe").val("");
		$("#segunApe").val("");
		$("#nombrePaciente").val("");
		$("#rutPaciente").val("");
		$("#dniPaciente").val("");

		$("#IngresarRegistro").hide();
		$("#RegistroUrgencia").hide();
		$("#MostrarDatoPaciente").hide();

		$("#buscarPaciente").show();
		$("#anadirPaciente").show();
		$("#buscarDatoPaciente").show();
		$("#crearPaciente").hide();
		$("#crearPacienteSapu").hide();
		$("#modificarPacienteSapu").hide();
		$("#updatePaciente").hide();

		//$("#descargaMinsalPdf").hide();

		

		$('select[name=sexo').val(0);
		$('input[name=sinDoc]').prop('checked',false);
		 $("#telefono").val("");
		$('select[name=prevision]').val(0);
		$("#motivoConsulta").val("");
		$("#numMotivo").empty();
		$("#numMotivo").append("0/150");

		
		window.parent.$("html,body").animate({ scrollTop: 0 }, 600);
		$("#myModal").modal();
		//$('#mymodal').modal({backdrop: 'static', keyboard: false})
	});




	//busca el paciente
	$("#buscarPaciente").on("click",function(){
		$("#mostrarResultadoBusqueda").empty();
		$("#MostrarDatoPaciente").show();
		var primApe = $("#primApe").val();
		var segunApe = $("#segunApe").val();
		var nombrePaciente = $("#nombrePaciente").val();
		var rutPaciente = $("#rutPaciente").val();
		var dniPaciente = $("#dniPaciente").val();
		buscarPaciente(primApe,segunApe,nombrePaciente,rutPaciente,dniPaciente);
	});

	$("#primApe").keydown(function(e){
		var code = e.keyCode || e.which;
	    if (code == '9') {
	    	$("#mostrarResultadoBusqueda").empty();
			$("#MostrarDatoPaciente").show();
			var primApe = $("#primApe").val();
			var segunApe = $("#segunApe").val();
			var nombrePaciente = $("#nombrePaciente").val();
			var rutPaciente = $("#rutPaciente").val();
			var dniPaciente = $("#dniPaciente").val();
			buscarPaciente(primApe,segunApe,nombrePaciente,rutPaciente,dniPaciente);
	    }else{
	    }
	});

	$("#segunApe").keydown(function(e){
		var code = e.keyCode || e.which;
	    if (code == '9') {
	    	$("#mostrarResultadoBusqueda").empty();
			$("#MostrarDatoPaciente").show();
			var primApe = $("#primApe").val();
			var segunApe = $("#segunApe").val();
			var nombrePaciente = $("#nombrePaciente").val();
			var rutPaciente = $("#rutPaciente").val();
			var dniPaciente = $("#dniPaciente").val();
			buscarPaciente(primApe,segunApe,nombrePaciente,rutPaciente,dniPaciente);
	    }else{
	    }
	});

	$("#nombrePaciente").keydown(function(e){
		var code = e.keyCode || e.which;
	    if (code == '9') {
	    	$("#mostrarResultadoBusqueda").empty();
			$("#MostrarDatoPaciente").show();
			var primApe = $("#primApe").val();
			var segunApe = $("#segunApe").val();
			var nombrePaciente = $("#nombrePaciente").val();
			var rutPaciente = $("#rutPaciente").val();
			var dniPaciente = $("#dniPaciente").val();
			buscarPaciente(primApe,segunApe,nombrePaciente,rutPaciente,dniPaciente);
	    }else{
	    }
	});

	$("#rutPaciente").keydown(function(e){
		var code = e.keyCode || e.which;
	    if (code == '9') {
	    	$("#mostrarResultadoBusqueda").empty();
			$("#MostrarDatoPaciente").show();
			var primApe = $("#primApe").val();
			var segunApe = $("#segunApe").val();
			var nombrePaciente = $("#nombrePaciente").val();
			var rutPaciente = $("#rutPaciente").val();
			var dniPaciente = $("#dniPaciente").val();
			buscarPaciente(primApe,segunApe,nombrePaciente,rutPaciente,dniPaciente);
	    }else{
	    }
	});

	$("#dniPaciente").keydown(function(e){
		var code = e.keyCode || e.which;
	    if (code == '9') {
	    	$("#mostrarResultadoBusqueda").empty();
			$("#MostrarDatoPaciente").show();
			var primApe = $("#primApe").val();
			var segunApe = $("#segunApe").val();
			var nombrePaciente = $("#nombrePaciente").val();
			var rutPaciente = $("#rutPaciente").val();
			var dniPaciente = $("#dniPaciente").val();
			buscarPaciente(primApe,segunApe,nombrePaciente,rutPaciente,dniPaciente);
	    }else{
	    }
	});

	//añade al paciente
	$("#anadirPaciente").on("click",function(){
		$("#rutPac").css("border-color","lightgray");
		$("#sexo").css("border-color","lightgray");
		$("#dniPac").css("border-color","lightgray");
		$('input[name=fnac]').css("border-color","lightgray");
		$("#validateRutOk").empty();
		$("#validateRutError").empty();
		$("#dniPac").prop('disabled', false);
		$("#rutPac").prop('disabled', false);		
		
		document.getElementById("pacId").value = "";
		$("#pacId").val("");
		$("#rutPac").val("");
		$("#nombrePac").val("");
		$("#apePat").val("");
		$('select[name=sexo]').val();
		$("#direccion").val("");
		$('select[name=centro]').val();
		$("#dniPac").val("");
		$("#apeMat").val("");
		$("#fnac").val("");
		$("#motivoConsulta").val("");
		$('input[name=fnac]').val();
		$("#nacionalidad").val("");
		$("#comuna").val("");
		$("#correo").val("");
		$("#buscarPaciente").hide();
		$("#MostrarDatoPaciente").hide();
		$("#anadirPaciente").hide();
		$("#buscarDatoPaciente").hide();
		$("#updatePaciente").hide();
		$("#modificarPacienteSapu").hide();
		$("#crearPaciente").show();
		$("#crearPacienteSapu").show();
	});

	//crea  al paciente
	$("#crearPacienteSapu").on("click",function(){
		countClicks =0;
		var pacId = $("#pacId").val();
		var rutPac = $("#rutPac").val();
		var dniPac = $("#dniPac").val();
		var nombrePac = $("#nombrePac").val();
		var apePat = $("#apePat").val();
		var apeMat = $("#apeMat").val();
		var fnac = $('input[name=fnac]').val();

		if (fnac === "") {
			fnac= "NULL";
		}else{
			var fn = fnac.split("/");
			fnac = fn[2]+"/"+fn[1]+"/"+fn[0];
		}

		
		var sexo = $('select[name=sexo').val();
		var nacionalidad = $('select[name=nacionalidad]').val();
		var direccion = $("#direccion").val();
		var comuna = $('select[name=comuna]').val();
		var telefono = $("#telefono").val();
		var prevision = $('select[name=prevision]').val();
		var hta = $("#HTA").val();
		var dm2 = $("#DM").val();
		var epoc = $("#EPOC").val();
		var asma = $("#ASMA").val();
		var dhc = $("#IRC").val();
		var irc = $("#DHC").val();
		var otros_ec = $("#OTRASEC").val();
		var otros_ec_desc = $("#OTRASECDESC").val();
		var correo = $("#correo").val();
		var centro = window.parent.$("#centroTrabajo").val();

		if (nacionalidad !== null && comuna !== null) {
			nacionalidad = nacionalidad;
			comuna = comuna;
		}else
			if (nacionalidad !== null && comuna === null) {
				nacionalidad = nacionalidad;
				comuna = "0";
			}else
				if (nacionalidad === null && comuna !== null) {
					nacionalidad = "0";
					comuna = comuna;
				}else{
					nacionalidad = "0";
					comuna = "0";
				}
		
		if(sexo === "0"){  $("#sexo").css("border-color","red"); }else{ $("#sexo").css("border-color","lightgray"); }
		if(fnac === "NULL"){  $("input[name=fnac]").css("border-color","red"); }else{ $("input[name=fnac]").css("border-color","lightgray"); }
		var TieneDocumento = $('input[name=sinDoc]').prop('checked');
		if (TieneDocumento === true) {
			$("#dniPac").prop('disabled', true);
			$("#rutPac").prop('disabled', true);
			if( sexo !=="0" && fnac !== "NULL") {
				createPacSapu(pacId,rutPac,dniPac,nombrePac,apePat,apeMat,fnac,sexo,nacionalidad,direccion,comuna,telefono,prevision,hta,dm2,epoc,asma,dhc,irc,otros_ec,otros_ec_desc,correo,centro);
			}else{
				alert("Error al crear el paciente, Favor Complete los campos en rojo.");
			}
		}else{
			$("#dniPac").prop('disabled', false);
			$("#rutPac").prop('disabled', false);


			if (rutPac ==="" && dniPac !== "") {
				if (sexo !=="0" && fnac !== "NULL") {
					createPacSapu(pacId,rutPac,dniPac,nombrePac,apePat,apeMat,fnac,sexo,nacionalidad,direccion,comuna,telefono,prevision,hta,dm2,epoc,asma,dhc,irc,otros_ec,otros_ec_desc,correo,centro);	
				}else{
					alert("Error al crear el paciente, Favor Complete los campos en rojo.");
				}

			}else

				if (rutPac!== "" && dniPac === "") {
					if(rutPac === "" ){  $("#rutPac").css("border-color","red"); }else{ $("#rutPac").css("border-color","lightgray"); }
					var Fn = {
					    validaRut : function (rutPac) {
					        rutPac = rutPac.replace("‐","-");
					        if (!/^[0-9]+[-|‐]{1}[0-9kK]{1}$/.test( rutPac ))
					            return false;
					        var tmp     = rutPac.split('-');
					        var digv    = tmp[1]; 
					        var rutPac     = tmp[0];
					        if ( digv == 'K' ) digv = 'k' ;        
					        return (Fn.dv(rutPac) == digv );
					    },
					    dv : function(T){
					        var M=0,S=1;
					        for(;T;T=Math.floor(T/10))
					            S=(S+T%10*(9-M++%6))%11;
					        return S?S-1:'k';
					    }
					}

					var msj= "";
					$("#validateRutOk").empty();
					$("#validateRutError").empty();
					if(Fn.validaRut( $("#rutPac").val()) ){
						$("#rutPac").css("border-color","lightgray");
						msj = "Rut Valido";
						$("#validateRutOk").append(msj);
					}else{
						if ($("#rutPac").val() === "") {
							msj = "El Rut esta vacío";
							$("#rutPac").css("border-color","red");
							$("#rutPac").val('');
							$("#validateRutError").append(msj);
						}else{
							msj = "El Rut ingresado no es Valido";
							$("#rutPac").css("border-color","red");
							$("#validateRutError").append(msj);
						}
					}

			
					if (Fn.validaRut( $("#rutPac").val()) && sexo !=="0" && fnac !== "NULL") {
						createPacSapu(pacId,rutPac,dniPac,nombrePac,apePat,apeMat,fnac,sexo,nacionalidad,direccion,comuna,telefono,prevision,hta,dm2,epoc,asma,dhc,irc,otros_ec,otros_ec_desc,correo,centro);
					}else{
						alert("Error al crear el paciente, Favor Complete los campos en rojo.");
					}

				}else{
					if(rutPac === "" ){  $("#rutPac").css("border-color","red"); }else{ $("#rutPac").css("border-color","lightgray"); }
					var Fn = {
					    validaRut : function (rutPac) {
					        rutPac = rutPac.replace("‐","-");
					        if (!/^[0-9]+[-|‐]{1}[0-9kK]{1}$/.test( rutPac ))
					            return false;
					        var tmp     = rutPac.split('-');
					        var digv    = tmp[1]; 
					        var rutPac     = tmp[0];
					        if ( digv == 'K' ) digv = 'k' ;        
					        return (Fn.dv(rutPac) == digv );
					    },
					    dv : function(T){
					        var M=0,S=1;
					        for(;T;T=Math.floor(T/10))
					            S=(S+T%10*(9-M++%6))%11;
					        return S?S-1:'k';
					    }
					}

					var msj= "";
					$("#validateRutOk").empty();
					$("#validateRutError").empty();
					if(Fn.validaRut( $("#rutPac").val()) ){
						$("#rutPac").css("border-color","lightgray");
						msj = "Rut Valido";
						$("#validateRutOk").append(msj);
					}else{
						if ($("#rutPac").val() === "") {
							msj = "El Rut esta vacío";
							$("#rutPac").css("border-color","red");
							$("#rutPac").val('');
							$("#validateRutError").append(msj);
						}else{
							msj = "El Rut ingresado no es Valido";
							$("#rutPac").css("border-color","red");
							$("#validateRutError").append(msj);
						}
					}

					if (Fn.validaRut( $("#rutPac").val()) && sexo !=="0" && fnac !== "NULL") {
						createPacSapu(pacId,rutPac,dniPac,nombrePac,apePat,apeMat,fnac,sexo,nacionalidad,direccion,comuna,telefono,prevision,hta,dm2,epoc,asma,dhc,irc,otros_ec,otros_ec_desc,correo,centro);
					}else{
						alert("Error al crear el paciente, Favor Complete los campos en rojo.");
					}

				}
		}
	});

	//TRAE AL PACIENTE Y MODIFICA LA DATA, ADENÁS LO CREA EN LA TABLA
	$("#modificarPacienteSapu").on("click",function(){
		var pacId = $("#pacId").val();
		var rutPac = $("#rutPaces").val();
		var dniPac = $("#dniPaces").val();
		var nombrePac = $("#nombrePaces").val();
		var apePat = $("#apePates").val();
		var apeMat = $("#apeMates").val();
		var fnac = $("input[name=fnaces]").val();
		if (fnac === "") {
			fnac= "NULL";
		}else{
			var fn = fnac.split("/");
			fnac = fn[2]+"/"+fn[1]+"/"+fn[0];
		}
		var sexo = $("select[name=sexoes]").val();
		var nacionalidad = $("select[name=nacionalidadies]").val();
		var direccion = $("#direcciones").val();
		var comuna = $("select[name=comunaies]").val();
		var telefono = $("#telefonoes").val();
		var prevision = $("select[name=previsiones]").val();
		var hta = $("#HTA").val();
		var dm2 = $("#DM").val();
		var epoc = $("#EPOC").val();
		var asma = $("#ASMA").val();
		var dhc = $("#IRC").val();
		var irc = $("#DHC").val();
		var otros_ec = $("#OTRASEC").val();
		var otros_ec_desc = $("#OTRASECDESC").val();
		var correo = $("#correoes").val();
		var centro = window.parent.$("#centroTrabajo").val();
		createPacSapu(pacId,rutPac,dniPac,nombrePac,apePat,apeMat,fnac,sexo,nacionalidad,direccion,comuna,telefono,prevision,hta,dm2,epoc,asma,dhc,irc,otros_ec,otros_ec_desc,correo,centro);
	});

	//NGRESA EL REGISTRO DEL SISTEMA
	$("#IngresarRegistro").on("click",function(){
		
		var pacId = $("#pacId").val();
		var perID =  window.parent.$("#perId").val();
		var centroi = window.parent.$("#centroTrabajo").val();
		var nombreAcompanante = $("#nombreAcompanante").val();
		var motivoConsulta = $("#motivoConsulta").val();
		var tipoAccidente = $('select[name=tipoAccidente]').val();
		var tipoConsulta = $('select[name=tipoConsulta]').val();
		var lugarAccidente = $('select[name=lugarAccidente]').val();
		var medioTransporte = $('select[name=medioTransporte]').val();
		//validaciones
		if(motivoConsulta === ""){  $("#motivoConsulta").css("border-color","red"); }else{ $("#motivoConsulta").css("border-color","lightgray"); }
		if(tipoConsulta === "0"){  $("select[name=tipoConsulta]").css("border-color","red"); }else{ $("select[name=tipoConsulta]").css("border-color","lightgray"); }
		if(medioTransporte === "0"){  $("select[name=medioTransporte]").css("border-color","red"); }else{ $("select[name=medioTransporte]").css("border-color","lightgray"); }
		if (centroi !== "" && motivoConsulta !== "" && tipoConsulta !== "0" && medioTransporte !== "0") {
			countClicks = countClicks+ 1;

			if (countClicks=== 1) {				
				registrarUrgenciaSapu(pacId,perID,centroi,nombreAcompanante,motivoConsulta,tipoAccidente,tipoConsulta,lugarAccidente,medioTransporte);
				console.log("se resetea contador de "+ countClicks);
			}else{
				console.log("cantidad de clicks hechos"+ countClicks);
				alert("Debe clickear solo una vez, ya se esta procesando su ingreso.")
			}
		}else{
			alert("Error al registrar el paciente, Favor Complete los campos en rojo.");
			console.log("cantidad de clicks hechos"+ countClicks);
			countClicks = 0;
		}
	});


	$("#buscarPacientesDadosDeAlta").on("click",function(){
		var buscar = $("#buscar").val();
		var centroTrabajo = window.parent.$("#centroTrabajo").val();
		var fechaBusqueda = $("input[name=fechaBusqueda]").val();
		if(fechaBusqueda=== ""){
			fechaBusqueda= "";
		}else{
			var fn = fechaBusqueda.split("/");
			fechaBusqueda = fn[2]+"/"+fn[1]+"/"+fn[0];
		}

		if (buscar === "" && fechaBusqueda === "") {
			alert("Debe completar el campo!");
		}else
			if ((buscar !== "" && fechaBusqueda === "")  || (buscar === "" && fechaBusqueda !== "")) {
				enviarInfoBusqueda(buscar,centroTrabajo,fechaBusqueda);
			}else{
				window.parent.$("#loader").hide();
				alert("Debe completar el campo!");
			}
	});

	$("#buscarPacientesCancelados").on("click",function(){
		var buscar = $("#buscarRut").val();
		var fechaBusqueda = $("input[name=fechaBusquedaCancelada]").val();
		var centroTrabajo = window.parent.$("#centroTrabajo").val();

		if(fechaBusqueda=== ""){
			fechaBusqueda= "";
		}else{
			var fn = fechaBusqueda.split("/");
			fechaBusqueda = fn[2]+"/"+fn[1]+"/"+fn[0];
		}

		if (buscar === "" && fechaBusqueda === "") {
			alert("Debe completar el campo!");
		}else
			if ((buscar !== "" && fechaBusqueda === "")  || (buscar === "" && fechaBusqueda !== "")) {
				busquedaObtenerPacientesCancelados(buscar,fechaBusqueda,centroTrabajo);
			}else{
				window.parent.$("#loader").hide();
				alert("Debe completar el campo!");
			}
	});



	$("#descargaMinsalPdf").on("click",function(){
		var pacId = $("#pacId").val();
		var centroTrabajo = window.parent.$("#centroTrabajo").val();
		window.open("../controlador/servidor/solicitudExamenCovid.php?pacId="+pacId+"&centro="+centroTrabajo);
//		window.open("../controlador/servidor/solicitudExamenCovid.php");
	});

	$("#motivoConsulta").keyup(function(){
		var data = $("#motivoConsulta").val().length;
		var maxLength = 150;
		var minlength = 0;
		var contador = (minlength + data);
		if (contador == 150) {
			document.getElementById("numMotivo").innerHTML = '<span style="color: red;"> Ha alcanzado el maximo de caracteres '+maxLength+'</span>';
		}else{
			document.getElementById("numMotivo").innerHTML = contador+'/'+maxLength;
		}
	});

	$("input:radio[name=rdbBuscar]").change(function(){
		var tipoDato = $("input:radio[name=rdbBuscar]:checked").val();
		if (tipoDato === "fecha") {
			$("#buscar").val("");
			$("#fechaBusqueda").show();
			$("#buscar").hide();
		}else{
			$("#buscar").show();
			$('input[name=fechaBusqueda]').val("");
			$("#fechaBusqueda").hide();
		}
	});

	$("input:radio[name=rdbBuscarDos]").change(function(){
		var tipoDato = $("input:radio[name=rdbBuscarDos]:checked").val();
		if (tipoDato === "fecha") {
			$("#buscarRut").val("");
			$("#fechaBusquedaCancelada").show();
			$("#buscarRut").hide();
		}else{
			$('input[name=fechaBusquedaCancelada]').val("");
			$("#fechaBusquedaCancelada").hide();
			$("#buscarRut").show();
		}
	});

	//VALIDA SI TIENE DOCUMENTO O NO EL PACIENTE
	$('input[name=sinDoc]').change(function(){
		var TieneDocumento = $('input[name=sinDoc]').prop('checked');
		if (TieneDocumento === true) {
			$("#dniPac").prop('disabled', true);
			$("#rutPac").prop('disabled', true);
		}else{
			$("#dniPac").prop('disabled', false);
			$("#rutPac").prop('disabled', false);
		}
	});

	/*************************************************************************************/
	$("#volverSeleccionCentro").on("click",function(){
		//$(location).attr('href',"dashboard.php?tab="+tab);
		$(location).attr('href',"../../seleccionPuestoTrabajo/vista/seleccionPuestoTrabajo.php");
		window.parent.$("#tituloPestaña").empty();
	});

	/* ------------------------------ VALIDACIONES --------------------------------------*/
	//DESAHABILITA EL DNI SI SE ESCRIBE EN EL RUT 
	$("#rutPac").keyup(function(){
		var rutPac = $("#rutPac").val();
		if (rutPac !== "") {
			$("#sinDoc").attr("disabled", true);
			$("#dniPac").prop('disabled', true);
			$("#dniPac").css("border-color","lightgray");
		}else{
			$("#dniPac").prop('disabled', false);
			$("#dniPac").css("border-color","red");
			$("#dniPac").val('');
			$("#sinDoc").attr("disabled", false);
		}
	});

	//DESAHABILITA EL RUT SI SE ESCRIBE EN EL DNI 
	$("#dniPac").keyup(function(){
		var dniPac = $("#dniPac").val();
		if (dniPac !== "") {
			$("#sinDoc").attr("disabled", true);
			$("#rutPac").prop('disabled', true);
		}else{
			$("#rutPac").prop('disabled', false);
			$("#rutPac").val('');
			$("#sinDoc").attr("disabled", false);
		}
	});

	/* ------------------------------ VALIDACIONES --------------------------------------*/
	$("#refrescarPantalla").on("click",function(){
		var centroTrabajo = window.parent.$("#centroTrabajo").val();
		obtenerRegistroTriadaPaciente(centroTrabajo);
		obtenerPacientesNuevosCreados(centroTrabajo);
		obtenerPacientesParaAtencion(centroTrabajo);
		obtenerMisProcedimientos(centroTrabajo);
		obtenerEgresoPaciente(centroTrabajo);
		$('#modalValidacion').modal('hide');
	});

});