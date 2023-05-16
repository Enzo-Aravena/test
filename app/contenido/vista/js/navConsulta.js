$( document ).ready(function() {
    $("#buscar").hide();
    title= "Consulta DAU";
	window.parent.$("#tituloPestaña").text(title);

    $.datepicker.regional['es'] = {
        closeText: 'Cerrar',
        prevText: '< Ant',
        nextText: 'Sig >',
        currentText: 'Hoy',
        monthNames: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'],
        monthNamesShort: ['Ene','Feb','Mar','Abr', 'May','Jun','Jul','Ago','Sep', 'Oct','Nov','Dic'],
        dayNames: ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'],
        dayNamesShort: ['Dom','Lun','Mar','Mié','Juv','Vie','Sáb'],
        dayNamesMin: ['Do','Lu','Ma','Mi','Ju','Vi','Sá'],
        weekHeader: 'Sm',
        dateFormat: 'dd/mm/yy',
        firstDay: 1,
        isRTL: false,
        showMonthAfterYear: false,
        yearSuffix: ''
    };

    $.datepicker.setDefaults($.datepicker.regional['es']);

    $( "#fechaBusqueda").datepicker({
        dateFormat: 'dd/mm/yy',
        changeMonth: true,
        changeYear: true,
        yearRange: '1900:2050',
        minDate: new Date(1900, 1 - 1, 1),
        maxDate:  new Date,
        inline: true
    });

   $("#buscarPacientesDadosDeAlta").on("click",function(){
        var buscar = $("#buscar").val();
        var fechaBusqueda = document.getElementById("fechaBusqueda").value;
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
                buscarPacienteConsultaDau(buscar,fechaBusqueda);
            }else{
                window.parent.$("#loader").hide();
                alert("Debe completar el campo!");
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
            document.getElementById("fechaBusqueda").value = "";
            $("#fechaBusqueda").hide();
        }
    });



    //FUCION QUE SIRVE PARA VOLVER AL MENU PRINCIPAL
    $("#volverSeleccionCentro").on("click",function(){
		$(location).attr('href',"../../seleccionPuestoTrabajo/vista/seleccionPuestoTrabajo.php");
		window.parent.$("#tituloPestaña").text("");
	});
});