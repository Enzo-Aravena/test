let checkCloseX = 0;
$(document).ready(function() {
    var test = location.search.replace('?', '').split('=');
    if (test[0] == 0 || test[0] === "") {
        var sexo = $('#sexo').val();
        var usuario = $('#usuario').val();
        var nombre = $('#nombre').val();

        if (nombre === "") {
            $("#contenido").attr("src", url);
            $(location).attr('href', "../../../index.php");
        } else {
            var url = "../../seleccionPuestoTrabajo/vista/seleccionPuestoTrabajo.php";
            $("#contenido").attr("src", url);
        }

        if (sexo === "F") {
            var tipo = '<img width="28" height="28" src="../../../lib/images/girl.png"/>';
            $('#images').append(tipo);
        } else {
            var male = '<img width="28" height="28" src="../../../lib/images/boy.png"/>';
            $('#images').append(male);
        }
    } else {
        var centro = test[1];
        var url = "../../contenido/vista/dashboard.php?centro=" + centro;
        $("#contenido").attr("src", url);
    }


    $("#logout").click(function() {
        $(location).attr('href', "../../../index.php");
    });

    $(document).mousemove(function(e) {
        if (e.pageY <= 5) {
            checkCloseX = 1;
        } else {
            checkCloseX = 0;
        }

    });

    $("#descargarManualUsuario").on("click", function() {
        window.open("../controlador/servidor/tmp/prueba.pdf");
    });

}); // END DOCUMENT READY


//----------------------------- VALIDACION PARA HABILITAR UN PACIENTE EN CASO DE QUE SE HABILITE UNA SESION ------------------------------------------------------------------------

window.onload = intervalo();


var tope = 0;
var intervalo;

function renovarSesion() {
    $.confirm({
        title: 'Información',
        content: 'Su sesión caducará. ¿Desea refrescarla?',
        autoClose: 'logoutUser|30000',
        buttons: {
            aceptar: function() {
                $.alert('Su sesion se ha renovado');
            },
            logoutUser: {
                text: 'Salir',
                action: function() {
                        var titulo = $("#tituloPestaña").text();
                        if (titulo !== "") {
                            var d = titulo.split(" ");
                            var titulo = d[0];
                        }
                        var $currentIFrame = $('#contenido');
                        switch (titulo) {
                            case "Triage":
                                var conId = $currentIFrame.contents().find("body #conId").val();
                                var fechaHora = $currentIFrame.contents().find("body #fechaYhoraIngresoSistema").val();
                                var perId = $("#perId").val();
                                var carId = 2;
                                obtenerValidacionIngresoPacientes(conId, fechaHora, perId, carId);
                                break;
                            case "Atención":
                                var conId = $currentIFrame.contents().find("body #conId").val();
                                var fechaHora = $currentIFrame.contents().find("body #fechaYhoraIngresoSistema").val();
                                var perId = $("#perId").val();
                                var carId = 3;
                                var conId = $currentIFrame.contents().find("body #conId").val();
                                obtenerValidacionIngresoPacientes(conId, fechaHora, perId, carId);
                                break;
                            case "Observación":
                                var conId = $currentIFrame.contents().find("body #conId").val();
                                var fechaHora = $currentIFrame.contents().find("body #fechaYhoraIngresoSistema").val();
                                var perId = $("#perId").val();
                                var carId = 4;
                                var conId = $currentIFrame.contents().find("body #conId").val();
                                obtenerValidacionIngresoPacientes(conId, fechaHora, perId, carId);
                                break;
                            case "Alta":
                                var conId = $currentIFrame.contents().find("body #conId").val();
                                var fechaHora = $currentIFrame.contents().find("body #fechaYhoraIngresoSistema").val();
                                var perId = $("#perId").val();
                                var carId = 5;
                                var conId = $currentIFrame.contents().find("body #conId").val();
                                obtenerValidacionIngresoPacientes(conId, fechaHora, perId, carId);
                                break;
                            default:
                                $(location).attr('href', "../../../index.php");
                                break;
                        } // END SWITCH

                    } // END ACTION
            } //END LOGOUT USER
        } // END BUTTONS
    });

    tope++;
    if (tope >= 50) {
        clearInterval(intervalo);
    }
}


//funcion que valida la sesion del profesional cada 15 minutos
function intervalo() {
    intervalo = setInterval(renovarSesion, 2700000); // 1 hora = 1500000  //  45 min = 2700000 // 30 min = 1800000 // 15 MIN = 900000 // 5 MIN =  300000 // 2 MIN = 120000 // 1 MIN = 60000
}


$(document).bind('keypress', function(e) {
    if (e.keyCode == 116) {
        validNavigation = true;
        alert("f5");
    }
});


/*
window.onbeforeunload = function (event) { 
    if (event) {
    	if (checkCloseX == 1) { 
	    			var titulo = $("#tituloPestaña").text();
					if (titulo !== "") {
						var d = titulo.split(" ");
						var titulo = d[0];
					}
						var $currentIFrame = $('#contenido');
					switch(titulo){
						case "Triage":
							var conId = $currentIFrame.contents().find("body #conId").val();
							var fechaHoy = $currentIFrame.contents().find("body #fechaHoy").val();
						 	var hora = $("#reloj").val();
						 	var fechaHora = fechaHoy+" "+hora;
						 	var perId = $("#perId").val();
							var carId = 2;
						break;
						case "Atencion":
							var conId = $currentIFrame.contents().find("body #conId").val();
							var fechaHoy = $currentIFrame.contents().find("body #fechaHoy").val();
						 	var hora = $("#reloj").val();
						 	var fechaHora = fechaHoy+" "+hora;
						 	var perId = $("#perId").val();
							var carId = 3;
						break;
							case "Alta":
							var conId = $currentIFrame.contents().find("body #conId").val();
							var fechaHoy = $currentIFrame.contents().find("body #fechaHoy").val();
						 	var hora = $("#reloj").val();
						 	var fechaHora = fechaHoy+" "+hora;
						 	var perId = $("#perId").val();
							var carId = 4;
						break;
						case "Observacion":
						var conId = $currentIFrame.contents().find("body #conId").val();
							var fechaHoy = $currentIFrame.contents().find("body #fechaHoy").val();
						 	var hora = $("#reloj").val();
						 	var fechaHora = fechaHoy+" "+hora;
						 	var perId = $("#perId").val();
							var carId = 5;
						break;
						default:
							$(location).attr('href',"../../../index.php");
						break;
					}// END SWITCH

	    		
	    		var url= "../controlador/servidor/controladorMenu.php";
				var type= "POST";
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
	}
}
*/