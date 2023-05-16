function cargarPronosticoLegal() {
    var url = "../controlador/servidor/altaEgrController.php";
    var type = "POST";
    var resultado = null;
    var data = {
        evento: 'cargarPronostico'
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
            if (resultado.sesion === undefined) {
                window.parent.$("#loader").hide();
                var select = $('select[name=pronMedicoLegal]').val();
                if (select === "Seleccione ...") {
                    $('#pronMedicoLegal').empty();
                    $('#pronMedicoLegal').append("<option value= '0' selected=''> Seleccione ...</option>");
                    for (var aux = 0 in resultado) {
                        if (resultado[aux].NOMBRE === null || resultado[aux].NOMBRE === "null" || resultado[aux].NOMBRE === "undefined" ||
                            resultado[aux].NOMBRE === undefined || resultado[aux].NOMBRE === "") {
                            console.log("Error de carga");
                        } else {
                            $('#pronMedicoLegal').append("<option value = " + resultado[aux].CODIGO + ">" + resultado[aux].NOMBRE + "</option>");
                        }
                    }
                } else {
                    $('#pronMedicoLegal').empty();
                    $('#pronMedicoLegal').append("<option value= '0' selected=''> Seleccione ...</option>");
                    for (var aux = 0 in resultado) {
                        if (resultado[aux].NOMBRE === null || resultado[aux].NOMBRE === "null" || resultado[aux].NOMBRE === "undefined" ||
                            resultado[aux].NOMBRE === undefined || resultado[aux].NOMBRE === "") {
                            console.log("Error de carga");
                        } else {
                            $('#pronMedicoLegal').append("<option value = " + resultado[aux].CODIGO + ">" + resultado[aux].NOMBRE + "</option>");
                        }
                    }
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


function cargarListaGes() {
    var url = "../controlador/servidor/atencionRegistrada.php";
    var type = "POST";
    var resultado = null;
    var data = {
        evento: 'cargarListaGes'
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
            select = "";
            resultado = JSON.parse(response);
            $('select[name=diagnosGes]').empty();
            if (resultado.sesion === undefined) {
                select = select + "<option value= '0' selected=''> Seleccione ...</option>";
                for (var aux = 0 in resultado) {
                    select = select + "<option value = " + resultado[aux].CODIGO + ">" + resultado[aux].NOMBRE + "</option>";
                }
                $('select[name=diagnosGes]').append(select);
            } else {
                valorsesion = resultado.sesion;
            }
        }, // End success
        error: function(error) {
                console.log("Error en la petición");
            } // End error
    }); //End ajax
}

function cargarTipoAltaEgreso() {
    var url = "../controlador/servidor/altaEgrController.php";
    var type = "POST";
    var resultado = null;
    var data = {
        evento: 'cargarTipoAltaEgreso'
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
            if (resultado.sesion === undefined) {
                window.parent.$("#loader").hide();
                var select = $('select[name=tipoAlta]').val();
                if (select === "Seleccione ...") {
                    $('#tipoAlta').empty();
                    $('#tipoAlta').append("<option value= '0' selected=''> Seleccione ...</option>");
                    for (var aux = 0 in resultado) {
                        if (resultado[aux].NOMBRE === null || resultado[aux].NOMBRE === "null" || resultado[aux].NOMBRE === "undefined" ||
                            resultado[aux].NOMBRE === undefined || resultado[aux].NOMBRE === "") {
                            console.log("Error de carga");
                        } else {
                            $('#tipoAlta').append("<option value = " + resultado[aux].CODIGO + ">" + resultado[aux].NOMBRE + "</option>");
                        }
                    }
                } else {
                    $('#tipoAlta').empty();
                    $('#tipoAlta').append("<option value= '0' selected=''> Seleccione ...</option>");
                    for (var aux = 0 in resultado) {
                        if (resultado[aux].NOMBRE === null || resultado[aux].NOMBRE === "null" || resultado[aux].NOMBRE === "undefined" ||
                            resultado[aux].NOMBRE === undefined || resultado[aux].NOMBRE === "") {
                            console.log("Error de carga");
                        } else {
                            $('#tipoAlta').append("<option value = " + resultado[aux].CODIGO + ">" + resultado[aux].NOMBRE + "</option>");
                        }
                    }
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

function cargarCentroDerivacion() {
    var url = "../controlador/servidor/altaEgrController.php";
    var type = "POST";
    var resultado = null;
    var data = {
        evento: 'cargarCentroDerivacion'
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
            if (resultado.sesion === undefined) {
                window.parent.$("#loader").hide();
                var select = $('select[name=centroDerivacion]').val();
                if (select === "Seleccione ...") {
                    $('#centroDerivacion').empty();
                    $('#centroDerivacion').append("<option value= '0' selected=''> Seleccione ...</option>");
                    for (var aux = 0 in resultado) {
                        if (resultado[aux].NOMBRE === null || resultado[aux].NOMBRE === "null" || resultado[aux].NOMBRE === "undefined" ||
                            resultado[aux].NOMBRE === undefined || resultado[aux].NOMBRE === "") {
                            console.log("Error de carga");
                        } else {
                            $('#centroDerivacion').append("<option value = " + resultado[aux].CODIGO + ">" + resultado[aux].NOMBRE + "</option>");
                        }
                    }
                } else {
                    $('#centroDerivacion').empty();
                    $('#centroDerivacion').append("<option value= '0' selected=''> Seleccione ...</option>");
                    for (var aux = 0 in resultado) {
                        if (resultado[aux].NOMBRE === null || resultado[aux].NOMBRE === "null" || resultado[aux].NOMBRE === "undefined" ||
                            resultado[aux].NOMBRE === undefined || resultado[aux].NOMBRE === "") {
                            console.log("Error de carga");
                        } else {
                            $('#centroDerivacion').append("<option value = " + resultado[aux].CODIGO + ">" + resultado[aux].NOMBRE + "</option>");
                        }
                    }
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

function cargarGrupoDiagnostico() {
    var url = "../controlador/servidor/altaEgrController.php";
    var type = "POST";
    var resultado = null;
    var data = {
        evento: 'cargarGrupoDiagnostico'
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
            window.parent.$("#loader").hide();
            if (resultado.sesion === undefined) {
                var select = $('select[name=grupoDiagnostico]').val();
                if (select === "Seleccione ...") {
                    $('#grupoDiagnostico').empty();
                    $('#grupoDiagnostico').append("<option value= '0' selected=''> Seleccione ...</option>");
                    for (var aux = 0 in resultado) {
                        if (resultado[aux].NOMBRE === null || resultado[aux].NOMBRE === "null" || resultado[aux].NOMBRE === "undefined" ||
                            resultado[aux].NOMBRE === undefined || resultado[aux].NOMBRE === "") {
                            console.log("Error de carga");
                        } else {
                            $('#grupoDiagnostico').append("<option value = " + resultado[aux].CODIGO + ">" + resultado[aux].NOMBRE + "</option>");
                        }
                    }
                } else {
                    $('#grupoDiagnostico').empty();
                    $('#grupoDiagnostico').append("<option value= '0' selected=''> Seleccione ...</option>");
                    for (var aux = 0 in resultado) {
                        if (resultado[aux].NOMBRE === null || resultado[aux].NOMBRE === "null" || resultado[aux].NOMBRE === "undefined" ||
                            resultado[aux].NOMBRE === undefined || resultado[aux].NOMBRE === "") {
                            console.log("Error de carga");
                        } else {
                            $('#grupoDiagnostico').append("<option value = " + resultado[aux].CODIGO + ">" + resultado[aux].NOMBRE + "</option>");
                        }
                    }
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

function cargarDatosPaciente(conId) {
    var url = "../controlador/servidor/altaEgrController.php";
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
            window.parent.$("#loader").hide();
            if (resultado === "0") {
                // escribir error
                window.parent.$("#loader").hide();
                alert("No se pudo cargar los datos");
            } else {
                resultado = JSON.parse(response);
                if (resultado.sesion === undefined) {
                    window.parent.$("html,body").animate({ scrollTop: 0 }, 600);
                    $("#horaTriage").val(resultado[0].HORA_TRIAGE);
                    if (resultado[0].RUT !== "-" && resultado[0].RUT !== "") {
                        $("#rutPaci").text(resultado[0].RUT);
                    } else {
                        var sinRut = "SIN DOCUMENTO";
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

                    if (resultado[0].HTA === "1") { $("#HTA").attr('checked', true); } else { $("#HTA").attr('checked', false); }
                    if (resultado[0].HTA === "1") { $("#HTA").attr('checked', true); } else { $("#HTA").attr('checked', false); }
                    if (resultado[0].DM2 === "1") { $("#DM2").attr('checked', true); } else { $("#DM2").attr('checked', false); }
                    if (resultado[0].EPOC === "1") { $("#EPOC").attr('checked', true); } else { $("#EPOC").attr('checked', false); }
                    if (resultado[0].ASMA === "1") { $("#ASMA").attr('checked', true); } else { $("#ASMA").attr('checked', false); }
                    if (resultado[0].IRC === "1") { $("#IRC").attr('checked', true); } else { $("#IRC").attr('checked', false); }
                    if (resultado[0].DHC === "1") { $("#DHC").attr('checked', true); } else { $("#DHC").attr('checked', false); }
                    if (resultado[0].OTROS_EC === "1") { $("#OTRAS").attr('checked', true); } else { $("#OTRAS").attr('checked', false); }
                    $("#otrosEcDescrip").val(resultado[0].OTROS_EC_DESC);
                    $("#fc").val(resultado[0].FC);
                    $("#fr").val(resultado[0].FR);
                    $("#tempAx").val(resultado[0].TEMPAX);
                    $("#satO").val(resultado[0].SATO);
                    $("#ps").val(resultado[0].PS);
                    $("#pd").val(resultado[0].PD);
                    $("#hgt").val(resultado[0].HGT);
                    $("#eEva").val(resultado[0].EEVA);
                    $("#eglasgow").val(resultado[0].EGLASGOW);
                    $("#peso").val(resultado[0].PESO);
                    $("#alergias").val(resultado[0].ALERGIAS);
                    switch (resultado[0].CATEGORIZACION) {
                        case 'C1':
                            $("#C1").attr('checked', true);
                            break;
                        case 'C2':
                            $("#C2").attr('checked', true);
                            break;
                        case 'C3':
                            $("#C3").attr('checked', true);
                            break;
                        case 'C4':
                            $("#C4").attr('checked', true);
                            break;
                        case 'C5':
                            $("#C5").attr('checked', true);
                            break;
                    }

                    $("#horaAtencion").val(resultado[0].HORA_ATENCION);
                    $("#diagnostico").val(resultado[0].SOSPECHA_DIAGNOSTICA);
                    $("#horaAtencion").val(resultado[0].HORA_ATENCION);

                    if (resultado[0].PRONOSTICO_MEDICO === "") {
                        $('select[name=pronMedicoLegal]').val(1);
                    } else {
                        $('select[name=pronMedicoLegal]').val(resultado[0].PRONOSTICO_MEDICO);
                    }

                    if (resultado[0].ALCOHOLEMIA == "") {
                        $("#Alcoholemia").prop("checked", false);
                    } else {
                        $("#Alcoholemia").prop("checked", true);
                    }

                    if (resultado[0].NOTIFICACION_GES == "0") {
                        $("#GES").prop("checked", false);
                    } else {
                        $("#GES").prop("checked", true);
                    }


                    if (resultado[0].DIAGNOSTICO_GES === "0") {
                        $('select[name=diagnosGes]').val("0");
                    } else {
                        $('select[name=diagnosGes]').val(resultado[0].DIAGNOSTICO_GES);
                    }


                    $("#nFrasco").val(resultado[0].N_FRASCO);
                    $("#nFrasco").prop('disabled', true);
                    $("#Anamnesis").val(resultado[0].ANAMNESIS);
                    $("#Anamnesis").prop('disabled', true);
                    $("#detCabeza").val(resultado[0].CABEZA_TEXTO);
                    $("#detTorax").val(resultado[0].TORAX_TEXTO);
                    $("#detAbdomen").val(resultado[0].ABDOMEN_TEXTO);
                    $("#detPelvis").val(resultado[0].PELVIS_TEXTO);
                    $("#detExtSup").val(resultado[0].EXT_SUPERIORES_TEXTO);
                    $("#detExtInf").val(resultado[0].EXT_INFERIORES_TEXTO);
                    $("#detExamNeuro").val(resultado[0].EX_NEUROLOGICO_TEXTO);

                    //VALORES
                    var maxLength = 400;
                    var minlength = 0;
                    var mindetCabeza = $("#detCabeza").val().length;
                    var mindetTorax = $("#detTorax").val().length;
                    var mindetAbdomen = $("#detAbdomen").val().length;
                    var mindetPelvis = $("#detPelvis").val().length;
                    var mindetExtSup = $("#detExtSup").val().length;
                    var mindetExtInf = $("#detExtInf").val().length;
                    var mindetExamNeuro = $("#detExamNeuro").val().length;

                    if ($("#detCabeza").val().length > 0) {
                        document.getElementById("numngth").innerHTML = mindetCabeza + '/' + maxLength;
                    } else {
                        document.getElementById("numngth").innerHTML = minlength + '/' + maxLength;
                    }
                    if ($("#detTorax").val().length > 0) {
                        document.getElementById("numdetTorax").innerHTML = mindetTorax + '/' + maxLength;
                    } else {
                        document.getElementById("numdetTorax").innerHTML = minlength + '/' + maxLength;
                    }
                    if ($("#detAbdomen").val().length > 0) {
                        document.getElementById("numdetAbdomen").innerHTML = mindetAbdomen + '/' + maxLength;
                    } else {
                        document.getElementById("numdetAbdomen").innerHTML = minlength + '/' + maxLength;
                    }
                    if ($("#detPelvis").val().length > 0) {
                        document.getElementById("numdetPelvis").innerHTML = mindetPelvis + '/' + maxLength;
                    } else {
                        document.getElementById("numdetPelvis").innerHTML = minlength + '/' + maxLength;
                    }
                    if ($("#detExtSup").val().length > 0) {
                        document.getElementById("numdetExtSup").innerHTML = mindetExtSup + '/' + maxLength;
                    } else {
                        document.getElementById("numdetExtSup").innerHTML = minlength + '/' + maxLength;
                    }
                    if ($("#detExtInf").val().length > 0) {
                        document.getElementById("numdetExtInf").innerHTML = mindetExtInf + '/' + maxLength;
                    } else {
                        document.getElementById("numdetExtInf").innerHTML = minlength + '/' + maxLength;
                    }
                    if ($("#detExamNeuro").val().length > 0) {
                        document.getElementById("numdetExamNeuro").innerHTML = mindetExamNeuro + '/' + maxLength;
                    } else {
                        document.getElementById("numdetExamNeuro").innerHTML = minlength + '/' + maxLength;
                    }


                    switch (resultado[0].CABEZA) {
                        case 'SI':
                            $("#Normal1").prop("checked", true);
                            $("#detCabeza").prop('disabled', false);
                            break;

                        case 'NO':
                            $("#Anormal1").prop("checked", true);
                            $("#detCabeza").prop('disabled', true);
                            break;
                    }
                    switch (resultado[0].TORAX) {
                        case 'SI':
                            $("#Normal2").prop("checked", true);
                            $("#detTorax").prop('disabled', false);
                            break;
                        case 'NO':
                            $("#Anormal2").prop("checked", true);
                            $("#detTorax").prop('disabled', true);
                            break;
                    }
                    switch (resultado[0].ABDOMEN) {
                        case 'SI':
                            $("#Normal3").prop("checked", true);
                            $("#detAbdomen").prop('disabled', false);
                            break;

                        case 'NO':
                            $("#Anormal3").prop("checked", true);
                            $("#detAbdomen").prop('disabled', true);
                            break;
                    }
                    switch (resultado[0].PELVIS) {
                        case 'SI':
                            $("#Normal4").prop("checked", true);
                            $("#detPelvis").prop('disabled', false);
                            break;

                        case 'NO':
                            $("#Anormal4").prop("checked", true);
                            $("#detPelvis").prop('disabled', true);
                            break;
                    }
                    switch (resultado[0].EXT_SUPERIORES) {
                        case 'SI':
                            $("#Normal5").prop("checked", true);
                            $("#detExtSup").prop('disabled', false);
                            break;

                        case 'NO':
                            $("#Anormal5").prop("checked", true);
                            $("#detExtSup").prop('disabled', true);
                            break;
                    }
                    switch (resultado[0].EXT_INFERIORES) {
                        case 'SI':
                            $("#Normal6").prop("checked", true);
                            $("#detExtInf").prop('disabled', false);
                            break;

                        case 'NO':
                            $("#Anormal6").prop("checked", true);
                            $("#detExtInf").prop('disabled', true);
                            break;
                    }
                    switch (resultado[0].EX_NEUROLOGICO) {
                        case 'SI':
                            $("#Normal7").prop("checked", true);
                            $("#detExamNeuro").prop('disabled', false);
                            break;

                        case 'NO':
                            $("#Anormal7").prop("checked", true);
                            $("#detExamNeuro").prop('disabled', true);
                            break;
                    }

                    $("#NombreRadiografia").empty();
                    if (resultado[0].RADIOGRAFIA === "1") {
                        $("#radiografia").prop("checked", true);
                        $("#NombreRadiografia").append(resultado[0].RADIOGRAFIA_TEXTO);
                    } else {
                        $("#radiografia").prop("checked", false);
                        $("#detRadio").prop('disabled', true);
                    }
                    if (resultado[0].EXAMEN_SANGRE === "1") {
                        $("#ExamenSangre").prop("checked", true);
                        $("#NombreExamen").append(resultado[0].EXAMEN_SANGRE_TEXTO);
                    } else {
                        $("#ExamenSangre").prop("checked", false);
                        $("#detExSangre").prop('disabled', true);
                    }
                    if (resultado[0].ECG === "1") {
                        $("#ecg").prop("checked", true);
                    } else {
                        $("#ecg").prop("checked", false);
                        $("#detECG").prop('disabled', true);
                    }

                    //NUEVOS CAMPOS ATENCION PACIENTE
                    if (resultado[0].CONSTATACION_LESIONES === "1") {
                        $("#requiereConstLesionSi").prop("checked", true);
                        $("#constatacionDeLesionesUno").show();
                        $("#constatacionDeLesionesDos").show();
                    } else {
                        $("#requiereConstLesionNo").prop("checked", true);
                        $("#constatacionDeLesionesUno").hide();
                        $("#constatacionDeLesionesDos").hide();
                    }

                    if (resultado[0].EXAMEN_FISICO === "1") {
                        $("#examenFisicoConst").prop("checked", true);
                    }

                    if (resultado[0].IMAGENOLOGIA === "1") {
                        $("#imagenConst").prop("checked", true);
                    }

                    if (resultado[0].EXAMENES_LABORATORIOS === "1") {
                        $("#exLabConst").prop("checked", true);
                    }

                    if (resultado[0].OTROS === "1") {
                        $("#otrosConst").prop("checked", true);
                    }

                    $("#origenLesionRelatoLesionado").val(resultado[0].ORIGEN_LESION);
                    $("#origenLesionClinica").val(resultado[0].APRECIACION_CLINICA);
                    $("#diasLesion").val(resultado[0].LESIONADO_DIAS);
                    $("#origenLesionRelatoLesionado").prop('disabled', true);
                    $("#origenLesionClinica").prop('disabled', true);
                    $("#diasLesion").prop('disabled', true);

                    if (resultado[0].LESIONADO_ACOMPANADO === "1") {
                        $("#vieneAcompanadoSi").prop("checked", true);
                    } else {
                        $("#vieneAcompanadoNo").prop("checked", true);
                    }

                    $("#nombreAcompLesionado").val(resultado[0].NOMBRE_ACOMPANANTE);
                    $("#CalidadAcompLesionado").val(resultado[0].CALIDAD_ACOMPANANTE);
                    $("#nombreAcompLesionado").prop('disabled', true);
                    $("#CalidadAcompLesionado").prop('disabled', true);

                } else {
                    window.parent.$("#loader").hide();
                    alert('Su sesión fue cerrada por inactividad en los últimos 45 minutos.');
                    window.setTimeout(function() {
                        window.top.location.href = '../../../index.php';
                    }, 5000);
                }

            } // END ELSE
            window.parent.$("#loader").hide();
        }, // End success
        error: function(error) {
                console.log("Error en la petición");
            } // End error
    }); //End ajax
}

function cargarFechaInicialPantalla() {
    var url = "../controlador/servidor/altaEgrController.php";
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
            console.log("petición recibida.");
        },
        success: function(response) {
            resultado = JSON.parse(response);
            $("#fechaYhoraIngresoSistema").val(resultado[0].data);
        }, // End success
        error: function(error) {
                console.log("Error en la petición.");
            } // End error
    }); //End ajax
}


function ingresarAltaPaciente(conId, fechaYHoraPantalla, cabeza, detCabeza, torax, detTorax, abdomen, detAbdomen, pelvis, detPelvis, extSuperiores, detExtSup, extInferiores, detExtInf, exNeurologico, detExamNeuro, diagnostico, EvolucionObsMed, radiografia, detRadio, ExamenSangre, detExSangre, ecg, detECG, EgresoInd, tipoAlta, centroDerivacion, grupoDiagnostico, CatFinal, horaCatEgreso, fcDos, frDos, tempAxDos, satODos, psDos, pdDos, hgtDos, eEvaDos, eglasgowDos, perId, fechaSalida, sospechaAuge, sospechaSaludAuge, subproblemaAuge, especialidad, confirmacioDiagnostica, realizarTto, Seguimiento, otraConsulta, consultaTextoEspecificar) {
    var url = "../controlador/servidor/altaEgrController.php";
    var type = "POST";
    var conId = conId;
    var resultado = null;
    var rutPac = rutPac;
    var data = {
        evento: 'ingresarAlta',
        conId: conId,
        fechaYHoraPantalla: fechaYHoraPantalla,
        cabeza: cabeza,
        detCabeza: detCabeza,
        torax: torax,
        detTorax: detTorax,
        abdomen: abdomen,
        detAbdomen: detAbdomen,
        pelvis: pelvis,
        detPelvis: detPelvis,
        extSuperiores: extSuperiores,
        detExtSup: detExtSup,
        extInferiores: extInferiores,
        detExtInf: detExtInf,
        exNeurologico: exNeurologico,
        detExamNeuro: detExamNeuro,
        diagnostico: diagnostico,
        EvolucionObsMed: EvolucionObsMed,
        radiografia: radiografia,
        detRadio: detRadio,
        ExamenSangre: ExamenSangre,
        detExSangre: detExSangre,
        ecg: ecg,
        detECG: detECG,
        EgresoInd: EgresoInd,
        tipoAlta: tipoAlta,
        centroDerivacion: centroDerivacion,
        grupoDiagnostico: grupoDiagnostico,
        CatFinal: CatFinal,
        horaCatEgreso: horaCatEgreso,
        fcDos: fcDos,
        frDos: frDos,
        tempAxDos: tempAxDos,
        satODos: satODos,
        psDos: psDos,
        pdDos: pdDos,
        hgtDos: hgtDos,
        eEvaDos: eEvaDos,
        eglasgowDos: eglasgowDos,
        perId: perId,
        fechaSalida: fechaSalida,
        sospechaAuge: sospechaAuge,
        sospechaSaludAuge: sospechaSaludAuge,
        subproblemaAuge: subproblemaAuge,
        especialidad: especialidad,
        confirmacioDiagnostica: confirmacioDiagnostica,
        realizarTto: realizarTto,
        Seguimiento: Seguimiento,
        otraConsulta: otraConsulta,
        consultaTextoEspecificar: consultaTextoEspecificar
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
            window.parent.$("#loader").hide();
            if (resultado.sesion === undefined) {
                $("#mensaje").empty();
                if (resultado[0].data === "true") {
                    $("#botonClose").hide();
                    $("#Aceptar").hide();
                    var texto = "<h3> se ha dado de alta al paciente, Generando dato Sapu..  </h3>";
                    $("#cargandoPdf").show();
                    setTimeout(cuentaAtras(conId), 10000);
                    redireccionar();
                } else {
                    $("#Aceptar").show();
                    $("#botonClose").show();
                    var texto = "<h3> No se ha podido dar el alta al paciente, favor revisar formulario  </h3>";
                }
                window.parent.$("html,body").animate({ scrollTop: 0 }, 600);
                $("#mensaje").append(texto);
                $("#myModal").modal();
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
    var url = "../controlador/servidor/altaEgrController.php";
    var type = "POST";
    var conId = conId
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
            window.parent.$("#loader").hide();
            resultado = JSON.parse(response);
            if (resultado.sesion === undefined) {
                if (resultado[0].data === "0") {
                    $('#myModal').modal('hide');
                    $("#mensaje").empty();
                    var texto = "<h3>  Error al volver al inicio </h3>";
                    $("#mensaje").append(texto);
                    $('#modalValidacion').modal();
                } else {
                    resultado = JSON.parse(response);
                    $(location).attr('href', "dashboard.php?tab=" + tab);
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
                    $("#myModal").modal({ backdrop: 'static', keyboard: false });
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

var contador = 10;

function cuentaAtras(conId) {
    if (contador == 0) {
        window.open("../controlador/servidor/pdf.php?conId=" + conId);
    } else {
        window.parent.$("html,body").animate({ scrollTop: 0 }, 600);
        contador--;
        setTimeout(cuentaAtras(conId), 3000);
    }
}

function FinalizarSesion() {
    alert('Su sesión fue cerrada por inactividad en los últimos 45 minutos.');
    window.setTimeout(function() {
        window.top.location.href = '../../../index.php';
    }, 5000);
}

//REDIRECCIONA AL MENU PRINCIPAL CUANDO INGRESA UN REGISTRO
function redireccionar() {
    window.setTimeout("obtenerValidacionIngresoPacientesDesbl()", 2000);
}

function obtenerValidacionIngresoPacientesDesbl() {
    var tab = "tab5";
    var conId = $("#conId").val();
    var fechaHoy = $("#fechaHoy").val();
    var hora = window.parent.$("#reloj").val();
    var fechaHora = fechaHoy + " " + hora;
    var perId = window.parent.$("#perId").val();
    var carId = 5;
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


function ValidaExamenes(tipoExamenCheck, detallle) {
    let validacion = "";
    // SI EL EXAMEN NO ESTA CLICKEADO Y NO TIENE NADA EN EL DETALLE
    if (tipoExamenCheck === false && detallle === "") {
        validacion = "1";
    } else
    //SI EL EXAMEN ESTA CLICKEADO , PERO NO TIENE NADA EN EL DETALLE
    if (tipoExamenCheck === true && detallle === "") {
        validacion = "2";
    } else
    //SI EL EXAMEN NO ESTA CLICKEADO , PERO HAY TEXTO EN EL DETALLE
    if (tipoExamenCheck === false && detallle !== "") {
        validacion = "3";
    } else
    //SI EL EXAMEN ESTA CLICKEADO , PERO NO HAY TEXTO EN EL DETALLE
    if (tipoExamenCheck === true && detallle !== "") {
        validacion = "1";
    }

    return validacion;
}