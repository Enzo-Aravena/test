function cargarFechaInicialPantalla() {
    var url = "../controlador/servidor/desbloqueoPacController.php";
    var type = "POST";
    var resultado = null;
    var data = {
        evento: 'retornaHora'
    };
    $.ajax({
        url: url,
        type: type,
        async: false,
        data: data,
        beforesend: function() {
            console.log("petición recibida");
        },
        success: function(response) {
            resultado = JSON.parse(response);
            $("#fechaYhoraIngresoSistema").val(resultado[0].data);
        }, // End success
        error: function(error) {
                console.log("Error en la petición");
            } // End error
    }); //End ajax
}

function cargarCentros() {
    var url = "../controlador/servidor/desbloqueoPacController.php";
    var type = "POST";
    var resultado = null;
    var data = {
        evento: 'cargarCentros'
    };
    $.ajax({
        url: url,
        type: type,
        data: data,
        beforesend: function() {
            console.log("peticion recibida");
        },
        success: function(response) {
            resultado = JSON.parse(response);
            var select = $('select[name=centroi]').val();
            if (select === "Seleccione ...") {
                $('#centroi').empty();
                $('#centroi').append("<option value= '0' selected=''> Seleccione ...</option>");
                for (var aux = 0 in resultado) {
                    if (resultado[aux].CODIGO !== "50") {
                        $('#centroi').append("<option value = " + resultado[aux].CODIGO + ">" + resultado[aux].NOMBRE + "</option>");
                    }
                }
            } else {
                $('#centroi').empty();
                $('#centroi').append("<option value= '0' selected=''> Seleccione ...</option>");
                for (var aux = 0 in resultado) {
                    if (resultado[aux].CODIGO !== "50") {
                        $('#centroi').append("<option value = " + resultado[aux].CODIGO + ">" + resultado[aux].NOMBRE + "</option>");
                    }
                }
            }

        }, // End success
        error: function(error) {
                console.log("Error en la peticion");
            } // End error
    }); //End ajax
}

function obtenerPacienteParaDesbloqueo(centro) {
    var url = "../controlador/servidor/desbloqueoPacController.php";
    var type = "POST";
    var resultado = null;
    var centro = centro;
    var data = {
        evento: 'obtenerPacienteParaDesbloqueo',
        centro: centro
    };
    $.ajax({
        url: url,
        type: type,
        data: data,
        beforesend: function() {
            console.log("peticion recibida");
        },
        success: function(response) {
            resultado = response;
            $("#resultRegistradas").empty();
            var tabla = "";
            if (resultado === "0" || resultado === 0) {
                tabla = tabla + '<tr>';
                tabla = tabla + '<td colspan="8"> No se han encontrado resultados asociados a la busqueda.</td>';
                tabla = tabla + '</tr>';
            } else {
                resultado = JSON.parse(response);
                if (resultado[0].data === "0") {
                    tabla = tabla + '<tr>';
                    tabla = tabla + '<td colspan="8"> No se han encontrado resultados asociados a la busqueda.</td>';
                    tabla = tabla + '</tr>';
                } else {
                    var i = 1;
                    for (var aux = 0 in resultado) {
                        var dato = resultado[aux].CON_ID + "_" + resultado[aux].CAR_ID + "_" + resultado[aux].ULTIMA_ATENCION;
                        tabla = tabla + '<tr>';
                        tabla = tabla + '<td>' + i + '</td>';
                        tabla = tabla + '<td>' + resultado[aux].RUT_PASAPORTE + '</td>';
                        tabla = tabla + '<td>' + resultado[aux].NOMBRE + '</td>';
                        tabla = tabla + '<td>' + resultado[aux].APELLIDO_PATERNO + '</td>';
                        tabla = tabla + '<td>' + resultado[aux].APELLIDO_MATERNO + '</td>';
                        tabla = tabla + '<td>' + resultado[aux].FECHA_NACIMIENTO + '</td>';
                        tabla = tabla + '<td>' + resultado[aux].NOMBRE_PROFESIONAL + '</td>';
                        tabla = tabla + '<td>' + resultado[aux].ULTIMA_ATENCION + '</td>';
                        tabla = tabla + '<td> <a class="obtenerPAcDsbl" style="cursor:pointer;" id="idRedirec' + aux + '">';
                        tabla = tabla + ' <input type = "hidden" name= "conf" class="obtenerpacienteDsbl" value="' + dato + '" > Desbloquear Paciente</a></td>';
                        tabla = tabla + '</tr>';
                        i++;
                    }
                } //end else interno
            } // END ELSE

            $("#resultRegistradas").append(tabla);

            $(".obtenerPAcDsbl").on("click", function() {
                document.getElementById("charNum").innerHTML = '0/150';
                var dato = $(".obtenerpacienteDsbl", this).val();
                $("#infoaEnviar").val('');
                $("#infoaEnviar").val(dato);
                $("#myModal").modal();
                $("#motivoDesbloqueo").val("");
            });

        }, // End success
        error: function(error) {
                console.log("Error en la peticion");
            } // End error
    }); //End ajax
}

function obtenerValidacionIngresoPacientes(dato, bloqueo, fechaHora, perId, centro, carId, ultimaAtencion, motivo) {
    var url = "../controlador/servidor/desbloqueoPacController.php";
    var type = "POST";
    var centro = centro;
    var dato = dato;
    var resultado = null;
    var data = {
        evento: 'obtenerEstadoPacientes',
        conId: dato,
        bloqueo: bloqueo,
        fechaHora: fechaHora,
        perId: perId,
        carId: carId,
        ultimaAtencion: ultimaAtencion,
        motivo: motivo
    };
    $.ajax({
        url: url,
        type: type,
        data: data,
        beforesend: function() {
            console.log("peticion recibida");
        },
        success: function(response) {
            resultado = response.replace("\r\n\r\n", "");
            texto = "";
            if (resultado === "0") {
                texto = "Hubo un error al desbloquear al paciente.";
            } else {
                texto = "Se ha desbloqueado exitosamente al paciente.";
                obtenerPacienteParaDesbloqueo(centro);
            } //END ELSE

            $("#myModal").modal('hide');
            $("#mensaje").text(texto);
            $("#validacion").modal();
        }, // End success
        error: function(error) {
                console.log("Error en la peticion");
            } // End error
    }); //End ajax
}