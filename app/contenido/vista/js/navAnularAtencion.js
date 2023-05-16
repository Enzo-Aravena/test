$(document).ready(function() {
	title= "Anular atención Pacientes";
	window.parent.$("#tituloPestaña").append(title);
	$("#myTable").hide();
	$("#buscarDni").hide();	

	$("#ejecutar").on("click",function(){
	});

	$("#volverSeleccionCentro").on("click",function(){
		$(location).attr('href',"../../seleccionPuestoTrabajo/vista/seleccionPuestoTrabajo.php");
		window.parent.$("#tituloPestaña").empty();
	});

	$("input:radio[name=rdbBuscar]").change(function(){
		var tipoDato = $("input:radio[name=rdbBuscar]:checked").val();
		if (tipoDato === "rut") {
			$("#buscarRut").show();
			$("#buscarDni").hide();
			$("#buscarDni").val("");
		}else{
			$("#buscarRut").hide();
			$("#buscarDni").show();
			$("#buscarRut").val("");
		}
	});
});