function cargarDatosPaciente(conId) {
    var url = "../controlador/servidor/triageController.php";
    var type = "POST";
    var resultado = null;
    var data = {
        evento: 'buscar',
        conId: conId
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
            resultado = response;
            texto = '';
            sinRut = '';
            $("#mensaje").empty();
            if (resultado == "0" || resultado == "" || resultado.data === "0") {
                window.parent.$("#loader").hide();
                window.parent.$("html,body").animate({ scrollTop: 0 }, 600);
                $("#ingresarNspPaciente").hide();
                $("#myModal").modal();
                $("#mensaje").empty();
                texto = "<h3> No se ha podido ingresar los datos del Paciente, Contacte a Registro Clínico.  </h3>";
                $("#mensaje").append(texto);
            } else {
                resultado = JSON.parse(response);
                if (resultado.sesion === undefined) {
                    $("#dniPaciente").hide();
                    if (resultado[0].RUT !== "-" && resultado[0].RUT !== "") {
                        $("#rutPaci").text(resultado[0].RUT);
                    } else {
                        sinRut = "SIN DOCUMENTO";
                        $("#rutPaci").text(sinRut);
                    }

                    $("#fnac").text(resultado[0].FECHA_NACIMIENTO);
                    $("#direccion").text(resultado[0].DIRECCION);
                    $("#telefono").text(resultado[0].TELEFONO);
                    $("#nombrePaci").text(resultado[0].NOMBRE);
                    $('#sexo').text(resultado[0].SEXO);
                    $("#tipoConsulta").text(resultado[0].TIPO_CONSULTA);
                    $("#edadPac").text(resultado[0].EDAD);
                    $("#fechIngreso").text(resultado[0].HORA_ADMISION);
                    $("#motivoConsulta").text(resultado[0].MOTIVO_CONSULTA);
                    $("#correo").text(resultado[0].CORREO);
                    if (resultado[0].HTA === "SI") { $("#HTA").attr('checked', true); } else { $("#HTA").attr('checked', false); }
                    if (resultado[0].HTA === "SI") { $("#HTA").attr('checked', true); } else { $("#HTA").attr('checked', false); }
                    if (resultado[0].DM2 === "SI") { $("#DM2").attr('checked', true); } else { $("#DM2").attr('checked', false); }
                    if (resultado[0].EPOC === "SI") { $("#EPOC").attr('checked', true); } else { $("#EPOC").attr('checked', false); }
                    if (resultado[0].ASMA === "SI") { $("#ASMA").attr('checked', true); } else { $("#ASMA").attr('checked', false); }
                    if (resultado[0].IRC === "SI") { $("#IRC").attr('checked', true); } else { $("#IRC").attr('checked', false); }
                    if (resultado[0].DHC === "SI") { $("#DHC").attr('checked', true); } else { $("#DHC").attr('checked', false); }
                    if (resultado[0].OTROS_EC === "SI") { $("#OTRAS").attr('checked', true); } else { $("#OTRAS").attr('checked', false); }
                    $("#otrosEcDescrip").val(resultado[0].OTROS_EC_DESC);
                    window.parent.$("#loader").hide();
                } else {
                    alert('Su sesión fue cerrada por inactividad en los últimos 45 minutos.');
                    window.setTimeout(function() {
                        window.top.location.href = '../../../index.php';
                    }, 5000);
                } 
            }
        }, // End success
        error: function(error) {
                console.log("Error en la petición");
            } // End error
    }); //End ajax
}

function cargarListaMotivo() {
    var url = "../controlador/servidor/triageController.php";
    var type = "POST";
    var resultado = null;
    var data = {
        evento: 'cargarMotivo'
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
            $('select[name=grupoDiagnosticoNSP]').empty();
            if (resultado.sesion === undefined) {
                select = select + "<option value= '0' selected=''> Seleccione ...</option>";
                for (var aux = 0 in resultado) {
                    select = select + "<option value = " + resultado[aux].CODIGO + ">" + resultado[aux].NOMBRE + "</option>";
                }
                $('select[name=grupoDiagnosticoNSP]').append(select);
            } else {
                valorsesion = resultado.sesion;
            }
        }, // End success
        error: function(error) {
                console.log("Error en la petición");
            } // End error
    }); //End ajax
}


function cargarFechaInicialPantalla() {
    var url = "../controlador/servidor/triageController.php";
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


/** NUEVO REGISTRAR TRIAGE, INCLUYE PESO  */
function registrarTriage(conId, fechaYHoraPantalla, fc, fr, tempAx, satO, ps, pd, hgt, eEva, eglasgow, HTA, DM2, EPOC, ASMA, IRC, DHC, OTRAS, otrosEcDescrip, alergias, categorizacion, horaCat, perId, peso) {
    var url = "../controlador/servidor/triageController.php";
    var type = "POST";
    var conId = conId;
    var resultado = null;
    var data = {
        evento: 'registrarTriage',
        conId: conId,
        fechaYHoraPantalla: fechaYHoraPantalla,
        fc: fc,
        fr: fr,
        tempAx: tempAx,
        satO: satO,
        ps: ps,
        pd: pd,
        hgt: hgt,
        eEva: eEva,
        eglasgow: eglasgow,
        HTA: HTA,
        DM2: DM2,
        EPOC: EPOC,
        ASMA: ASMA,
        IRC: IRC,
        DHC: DHC,
        OTRAS: OTRAS,
        otrosEcDescrip: otrosEcDescrip,
        alergias: alergias,
        categorizacion: categorizacion,
        horaCat: horaCat,
        perId: perId,
        peso: peso
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
            window.parent.$("html,body").animate({ scrollTop: 0 }, 600);
            $("#mensaje").empty();
            if (resultado.sesion === undefined) {
                if (resultado[0].data === "true") {
                    $("#ingresarNspPaciente").hide();
                    $("#cerrarPop").hide();
                    $("#Aceptar").hide();
                    $("#cargandoPdf").show();
                    $("#myModal").modal();
                    $("#mensaje").empty();
                    var texto = "<h3> Se ha ingresado el triage.  </h3>";
                    $("#mensaje").append(texto);
                    redireccionar();
                } else {
                    $("#cargandoPdf").hide();
                    $("#cerrarPop").show();
                    $("#mensaje").empty();
                    var texto = "<h3> No se ha Triado al Paciente..  </h3>";
                    $("#mensaje").append(texto);
                    $("#myModal").modal();
                }
            } else {
                valorsesion = resultado.sesion;
            }
        }, // End success
        error: function(error) {
                console.log("Error en la petición");
            } // End error
    }); //End ajax
}



//NUEVO CAMBIO
function registrarNspPaciente(conId, fechaYHoraPantalla, ObservacionNsp, tipoMotivo, perId, fechaSalida) {
    var url = "../controlador/servidor/triageController.php";
    var type = "POST";
    var resultado = null;
    var data = {
        evento: 'ingresarNSPPaciente',
        conId: conId,
        fechaYHoraPantalla: fechaYHoraPantalla,
        ObservacionNsp: ObservacionNsp,
        tipoMotivo: tipoMotivo,
        perId: perId,
        fechaSalida: fechaSalida
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
            $("#mensaje").empty();
            window.parent.$("html,body").animate({ scrollTop: 0 }, 600);
            if (resultado.sesion === undefined) {
                $("#ingresarNspPaciente").hide();
                $("#myModal").modal();
                if (resultado[0].data === "true") {
                    $("#Aceptar").hide();
                    $("#AceptarEgreso").hide();
                    $("#mensaje").empty();
                    $("#cargandoPdf").show();
                    var texto = "<h3> Se ha registrado la ausencia del paciente. </h3>";
                    redireccionar();
                } else {
                    $("#cargandoPdf").hide();
                    $("#mensaje").empty();
                    $("#AceptarEgreso").hide();
                    $("#Aceptar").show();
                    var texto = "<h3> No se ha podido registrar el NSP.  </h3>";
                }
                $("#mensaje").append(texto);
                $("#myModal").modal({ backdrop: 'static', keyboard: false });
            } else {
                valorsesion = resultado.sesion;
            }
        }, // End success
        error: function(error) {
                console.log("Error en la petición");
            } // End error
    }); //End ajax
}

function obtenerValidacionIngresoPacientes(conId, tab, fechaHora, perId, carId) {
    var url = "../controlador/servidor/triageController.php";
    var type = "POST";
    var dato = dato
    var tab = tab;
    var resultado = null;
    var data = {
        evento: 'obtenerEstadoPacientes',
        conId: conId,
        fechaHora: fechaHora,
        perId: perId,
        carId: carId
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
            resultado = response;
            $("#mensaje").empty();
            if (resultado === "0") {
                $('#myModal').modal('hide');
                $("#mensaje").empty();
                var texto = "<h3>  Error al volver al inicio </h3>";
                $("#mensaje").append(texto);
                $('#modalValidacion').modal();
            } else {
                resultado = JSON.parse(response);
                if (resultado.sesion === undefined) {
                    $(location).attr('href', "dashboard.php?tab=" + tab);
                } else {
                    valorsesion = resultado.sesion;
                }
            }
        }, // End success
        error: function(error) {
                console.log("Error en la petición");
            } // End error
    }); //End ajax
}

function FinalizarSesion() {
    alert('Su sesion fue cerrada por inactividad en los ultimos 45 minutos.');
    window.setTimeout(function() {
        window.top.location.href = '../../../index.php';
    }, 5000);
}

//REDIRECCIONA AL MENU PRINCIPAL CUANDO INGRESA UN REGISTRO
function redireccionar() {
    window.setTimeout("obtenerValidacionIngresoPacientesDesbl()", 2000);
}

function obtenerValidacionIngresoPacientesDesbl() {
    var tab = "tab2";
    var conId = $("#conId").val();
    var fechaHoy = $("#fechaHoy").val();
    var hora = window.parent.$("#reloj").val();
    var fechaHora = fechaHoy + " " + hora;
    var perId = window.parent.$("#perId").val();
    var carId = 2;
    var url = "../controlador/servidor/triageController.php";
    var type = "POST";
    var dato = dato
    var tab = tab;
    var resultado = null;
    var data = {
        evento: 'obtenerEstadoPacientes',
        conId: conId,
        fechaHora: fechaHora,
        perId: perId,
        carId: carId
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
            resultado = response;
            $("#mensaje").empty();
            if (resultado === "0") {
                $('#myModal').modal('hide');
                $("#mensaje").empty();
                var texto = "<h3>  Error al volver al inicio </h3>";
                $("#mensaje").append(texto);
                $('#modalValidacion').modal();
            } else {
                resultado = JSON.parse(response);
                if (resultado.sesion === undefined) {
                    $(location).attr('href', "dashboard.php?tab=" + tab);
                } else {
                    valorsesion = resultado.sesion;
                }
            }
        }, // End success
        error: function(error) {
                console.log("Error en la petición");
            } // End error
    }); //End ajax
}


// ======================= FUNCIONES GENERALES  ===================
function inicializaDatos() {
    window.parent.$("#loader").show();
    $('body').tooltip({ selector: '[data-toggle=tooltip]' });
    $("#cargandoPdf").hide();
    $("#recuadroData").hide();
    window.parent.$("#tituloPestaña").text("");
    $("#AceptarEgreso").hide();
    $("#conId").val("");
}

function validaCampos(fc, fr, tempAx, satO, eglasgow, alergias, categorizacion) {
    if (fc === "") { $("#fc").css("border-color", "red"); } else { $("#fc").css("border-color", "green"); }
    if (fr === "") { $("#fr").css("border-color", "red"); } else { $("#fr").css("border-color", "green"); }
    if (tempAx === "") { $("#tempAx").css("border-color", "red"); } else { $("#tempAx").css("border-color", "green"); }
    if (satO === "") { $("#satO").css("border-color", "red"); } else { $("#satO").css("border-color", "green"); }
    if (eglasgow === "") { $("#eglasgow").css("border-color", "red"); } else { $("#eglasgow").css("border-color", "green"); }
    if (alergias === "") { $("#alergias").css("border-color", "red"); } else { $("#alergias").css("border-color", "green"); }
    if (categorizacion === undefined) { $("input[name=categorizacion]").next().css('color', 'red', 'font-weight', 'bold'); } else { $("input[name=categorizacion]").next().css('color', 'green', 'font-weight', 'unset'); }
}