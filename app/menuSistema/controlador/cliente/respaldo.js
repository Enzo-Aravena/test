//MENSAJE QUE CARGA Y VALIDA LA SESION SIEMPRE, SI NO ACEPTA RENOVAR TE BOTA

window.onload = intervalo();


var tope=0;
var intervalo;
var contador  = 60;
function renovarSesion(){
	$.confirm({
        title: 'Información',
        content: 'En 1 minuto su sesión caducará. ¿Desea refrescarla?',
        autoClose: 'logoutUser|60000',
        buttons: {
        	aceptar:function(){
        		$.alert('Su sesion se ha renovado');
        		location.reload();
        	},
           	logoutUser: {
                text: 'Cerrar Sesion',
                action: function () {
                   var titulo = $("#tituloPestaña").text();

                   if (titulo !== "") {
                   	var d = titulo.split(" ");
                   	var titulo = d[0];
                   }
                   var $currentIFrame = $('#contenido');

                   switch(titulo){
						case "Triage":
							var dato = $currentIFrame.contents().find("body #conId").val();
							var bloqueo = 2;
							obtenerValidacionIngresoPacientes(dato,bloqueo);
						break;
						case "Atencion":
							var dato = $currentIFrame.contents().find("body #conId").val();
							var bloqueo = 2;
							obtenerValidacionIngresoPacientes(dato,bloqueo);
						break;
						case "Alta":
							var dato = $currentIFrame.contents().find("body #conId").val();
							var bloqueo = 2;
							obtenerValidacionIngresoPacientes(dato,bloqueo);
						break;
						case "Observacion":
							var dato = $currentIFrame.contents().find("body #conId").val();
							var bloqueo = 2;
							obtenerValidacionIngresoPacientes(dato,bloqueo);
						break;
						default:
							//$(location).attr('href',"../../../index.php");
						break;
						
					}//END SWITCH
                }// END ACTION
            }//END LOGOUT USER
        }// END BUTTONS
	});

	tope++;
	if (tope>=50) {
		clearInterval(intervalo);
	}
}

//funcion que valida la sesion del profesional cada 45 minutos
 function intervalo() {
 	intervalo=setInterval(renovarSesion,60000); //45 min = 2700000 // 30 min = 1800000 // 15 MIN = 900000 // 5 MIN =  300000 // 2 MIN = 120000 // 1 MIN = 60000
 }
