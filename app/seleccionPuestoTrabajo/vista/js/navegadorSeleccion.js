$( document ).ready(function() {
	window.parent.$("#loader").hide();
	window.parent.$("#pullRigth").css("margin-top","1%");
	cargarCentros();
});

function cargarCentros() {
	if (window.XMLHttpRequest) {
           xmlhttp = new XMLHttpRequest();
    } else {
            xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }
    xmlhttp.onreadystatechange = function() {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
			window.parent.$("html,body").animate({ scrollTop: 0 }, 600);
			let resultado =  xmlhttp.responseText;
			if (resultado === "2") {
				FinalizarSesion();
			}else{
				document.getElementById("mostrarCentro").innerHTML = xmlhttp.responseText;
				$(".most").click(function(){
					var dato = $(".Seleccion",this).val();
					window.parent.$("#centroTrabajo").val(dato);
					//SI LA OPCION ES 50 REDIRIGE A CONSULTA DAU
					if (dato === "50") {
						$(location).attr('href',"../../contenido/vista/consultaDau.php");
					} else {
						$(location).attr('href',"../../contenido/vista/dashboard.php?idCentro="+dato);
					}
					window.parent.$("html,body").animate({ scrollTop: 0 }, 600);
				});
			}
        }
    }
    xmlhttp.open("GET","../controlador/servidor/seleccionController.php?evento=cargarCentros",true);
    xmlhttp.send();
}

function FinalizarSesion(){
	alert('Hubo un problema al Cargar el menu, favor contactar a la mesa de ayuda.');
	window.setTimeout(function () { 
    	window.top.location.href= '../../../index.php';
    }, 5000);
}