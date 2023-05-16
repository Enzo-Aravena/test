let valorsesion = 0;
let texto = "";

$(document).ready(function() {
    window.parent.$("#tituloPestaña").val("");
    title = "Desbloqueo Pacientes";
    window.parent.$("#tituloPestaña").text(title);

    var hoy = new Date();
    var dd = hoy.getDate();
    var mm = hoy.getMonth() + 1;
    var yyyy = hoy.getFullYear();
    if (dd < 10) { dd = '0' + dd }
    if (mm < 10) { mm = '0' + mm }
    fechaHoy = yyyy + '-' + mm + '-' + dd;
    cargarFechaInicialPantalla();
    $("#fechaHoy").val('');
    $("#fechaHoy").val(fechaHoy);
    if (valorsesion == 0) { cargarCentros(); }
    if (valorsesion == "-1") { FinalizarSesion(); }
    $("#myTable").hide();

    $("#ejecutar").on("click", function() {
        texto = "";
        var centro = $("select[name=centroi]").val();
        if (centro === "0") { $("select[name=centroi]").css("border-color", "red"); } else { $("select[name=centroi]").css("border-color", "lightgray"); }
        if (centro === "0") {
            texto = "Debe seleccionar el centro.";
            $("#mensaje").text(texto);
            window.parent.$("#loader").hide();
            $("#validacion").modal();
        } else {
            $("#myTable").show();
            obtenerPacienteParaDesbloqueo(centro);
        }
    });

    //INGRESA LA DATA
    $("#desbloquearPacientes").on("click", function() {
        texto = "";
        document.getElementById("charNum").innerHTML = '0/150';
        let info = $("#infoaEnviar").val();
        var separa = info.split("_");
        var dato = separa[0];
        var carId = parseInt(separa[1]);
        var bloqueo = 2;
        var fechaHoy = $("#fechaHoy").val();
        var hora = window.parent.$("#reloj").val();
        var fechaHora = fechaHoy + " " + hora;
        var perId = window.parent.$("#perId").val();
        var ultimaAtencion = separa[2];
        var motivo = $("#motivoDesbloqueo").val();
        var centro = $("select[name=centroi]").val();
        if (centro === "0") { $("select[name=centroi]").css("border-color", "red"); } else { $("select[name=centroi]").css("border-color", "lightgray"); }
        if (motivo === "") { $("#motivoDesbloqueo").css("border-color", "red"); } else { $("#motivoDesbloqueo").css("border-color", "lightgray"); }

        if (centro === "0" && motivo === "") {
            texto = "Debe seleccionar su centro y completar el motivo del desbloqueo.";
            $("#mensaje").text(texto);
        } else {
            if (centro === "0") {
                texto = "Debe seleccionar su centro.";
                $("#mensaje").text(texto);
            } else
            if (motivo === "") {
                texto = "Debe completar el motivo del desbloqueo.";
                $("#mensaje").text(texto);
            } else {
                if (centro !== "0" && motivo !== "") {
                    $("#myTable").show();
                    //obtenerPacienteParaDesbloqueo(centro);
                    obtenerValidacionIngresoPacientes(dato, bloqueo, fechaHora, perId, centro, carId, ultimaAtencion, motivo);
                }
            }
        }
    });

    // CONTADOR DE CARACTERES
    $("#motivoDesbloqueo").keyup(function() {
        var data = $("#motivoDesbloqueo").val().length;
        var maxLength = 150;
        var minlength = 0;
        var contador = (minlength + data);
        if (contador == 150) {
            document.getElementById("charNum").innerHTML = contador + '/' + maxLength;
        } else {
            document.getElementById("charNum").innerHTML = contador + '/' + maxLength;
        }
    });

    // VOLVER ATRAS
    $("#volverSeleccionCentro").on("click", function() {
        $(location).attr('href', "../../seleccionPuestoTrabajo/vista/seleccionPuestoTrabajo.php");
        window.parent.$("#tituloPestaña").empty();
    });

});