function cargarPronosticoLegal() {
    var url = "../controlador/servidor/atencionRegistrada.php";
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
            window.parent.$("#loader").hide();
            if (resultado.sesion === undefined) {
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

function cargarTipoAltaEgreso() {
    var url = "../controlador/servidor/atencionRegistrada.php";
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
            window.parent.$("#loader").hide();
            if (resultado.sesion === undefined) {
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
    var url = "../controlador/servidor/atencionRegistrada.php";
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
            window.parent.$("#loader").hide();
            if (resultado.sesion === undefined) {
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
    var url = "../controlador/servidor/atencionRegistrada.php";
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
                window.parent.$("#loader").hide();
            } else {
                window.parent.$("#loader").hide();
                valorsesion = resultado.sesion;
            }
        }, // End success
        error: function(error) {
                console.log("Error en la petición");
            } // End error
    }); //End ajax
}

function cargarDatosPaciente(conId) {
    var url = "../controlador/servidor/atencionRegistrada.php";
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
            window.parent.$("#loader").hide();
            resultado = response;
            if (resultado === "0") {
                window.parent.$("#loader").hide();
                alert("Error: No se han podido Cargar los datos.");
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
                    //if (resultado[0].OTROS_EC_DESC === "SI" || resultado[0].OTROS_EC_DESC === "") {$("#otrosEcDescrip").prop('disabled', true);}else{ $("#otrosEcDescrip").prop('disabled', false);}
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
                    window.parent.$("#loader").hide();

                    //AQUI DEBE EJECUTAR LA OPCION DE ABRIR POPUP EN FUNCION
                    if (Fn.validaRut(resultado[0].RUT)) {
                        var rut = resultado[0].RUT;
                        var dni = "";
                    } else {
                        var rut = "";
                        var dni = resultado[0].RUT;
                    }
                    ObtenerAtencionesAnteriores(rut, dni);
                } else {
                    window.parent.$("#loader").hide();
                    alert('Su sesión fue cerrada por inactividad en los últimos 45 minutos.');
                    window.setTimeout(function() {
                        window.top.location.href = '../../../index.php';
                    }, 3000);
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
    var url = "../controlador/servidor/atencionRegistrada.php";
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

function cargarListaProcedimientos() {
    var url = "../controlador/servidor/ObservacionYTto.php";
    var type = "POST";
    var resultado = null;
    var data = {
        evento: 'obtenerListaProcedimientos'
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
            $('select[name=ObtenerListaind1]').empty();
            $('select[name=ObtenerListaind2]').empty();
            $('select[name=ObtenerListaind3]').empty();
            if (resultado.sesion === undefined) {
                select = select + "<option value= '0' selected=''> Seleccione ...</option>";
                for (var aux = 0 in resultado) {
                    select = select + "<option value = " + resultado[aux].CODIGO + ">" + resultado[aux].NOMBRE + "</option>";
                }
                $('select[name=ObtenerListaind1]').append(select);
                $('select[name=ObtenerListaind2]').append(select);
                $('select[name=ObtenerListaind3]').append(select);
            } else {
                valorsesion = resultado.sesion;
            }
        }, // End success
        error: function(error) {
                console.log("Error en la petición");
            } // End error
    }); //End ajax
}

function ObtenerAtencionesAnteriores(rut, dni) {
    var url = "../controlador/servidor/atencionRegistrada.php";
    var type = "POST";
    var resultado = null;
    var data = {
        evento: 'obtenerAtencionesAnteriores',
        rut: rut,
        dni: dni
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
            $("#resultadoFlash").empty();
            resultado = response;
            if (resultado === "0") {
                window.parent.$("#loader").hide();
                $("#modalFlash").modal('hide');
            } else {
                resultado = JSON.parse(response);
                if (resultado.sesion === undefined) {
                    $("#modalFlash").modal('show');
                    for (var aux = 0 in resultado) {
                        contadors = contadors + 1;
                        tabla = tabla + '<tr id= "MostrarDetalle' + contadors + '" style="border: 1px solid #ddd !important;">';
                        //tabla = tabla +'<td class="check hidden-xs ultra"><i class="fa fa-fw fa-plus" ></i> </td>';
                        tabla = tabla + '<td class="check hidden-xs ultra"></td>';
                        tabla = tabla + '<td class="check hidden-xs">' + resultado[aux].FECHA_ATENCION + " " + resultado[aux].HORA + ' </td>';
                        tabla = tabla + '<td class="check hidden-xs">' + resultado[aux].CENTRO_ATENCION + ' </td>';
                        tabla = tabla + '<td class="check hidden-xs">' + resultado[aux].DIAGNOSTICO_EGRESO + ' </td>';
                        tabla = tabla + '<td class="check hidden-xs"><b>* Indicaciones Receta</b> <br>' + nl2br(resultado[aux].INDICACIONES_RECETA) + ' </td>';
                        //tabla = tabla +'<tr class="ultradetalle" id="ultradetalle"><td colspan="1"></td><td colspan="3"> <b>* Indicaciones Receta</b> <br>'+nl2br(indicaciones)+'</td></tr>';
                        /*let indicaciones = resultado[aux].INDICACIONES_RECETA;
                        if (indicaciones !== "") {
                        	//TABLA OCULTA SIMULA DRILLDOWN
                        	//tabla = tabla +'<tr class="ultradetalle"><td colspan="1"></td><td colspan="3"> <b>* Indicaciones Receta</b> <br>'+nl2br(indicaciones)+'</td></tr>';
                        	tabla = tabla +'<tr class="ultradetalle" id="ultradetalle"><td colspan="1"></td><td colspan="3"> <b>* Indicaciones Receta</b> <br>'+nl2br(indicaciones)+'</td></tr>';
                        }*/
                        tabla = tabla + '</tr>';
                    }

                    $("#resultadoFlash").append(tabla);
                    /*flashVisible = false;
                    $("#ultradetalle").hide();

                    $(".ultra").on("click",function(){
                    	if (!flashVisible) {
                    		$("#ultradetalle").show();	
                    		flashVisible = true;
                    	}else{
                    		$("#ultradetalle").hide();
                    		flashVisible = false;
                    	}
                    });*/

                } else {
                    window.parent.$("#loader").hide();
                    alert('Su sesión fue cerrada por inactividad en los últimos 45 minutos.');
                    window.setTimeout(function() {
                        window.top.location.href = '../../../index.php';
                    }, 3000);
                }
            }
        }, // End success
        error: function(error) {
                console.log("Error en la petición");
            } // End error
    }); //End ajax
}


function registrarAtencion(conId, horaIngresoPantalla, fechaYHoraPantalla, pronMedicoLegal, Alcoholemia, nFrasco, Anamnesis, cabeza, detCabeza, torax, detTorax, abdomen, detAbdomen, pelvis, detPelvis, extSuperiores, detExtSup, extInferiores, detExtInf, exNeurologico, detExamNeuro, sospDiagnostica, ind1, ind2, ind3, radiografia, detRadio, ExamenSangre, detExSangre, ecg, perId, fechaSalida, RequiereTratamiento, requiereConstLesion, examenFisicoConst, imagenConst, exLabConst, otrosConst, origenLesionRelatoLesionado, origenLesionClinica, diasLesion, vieneAcompanado, nombreAcompLesionado, CalidadAcompLesionado, ObtenerListaind1, ObtenerListaind2, ObtenerListaind3, esPacienteGes, diagnosGes) {
    var url = "../controlador/servidor/atencionRegistrada.php";
    var type = "POST";
    var resultado = null;
    var data = {
        evento: 'ingresarAtencionPaciente',
        conId: conId,
        horaIngresoPantalla: horaIngresoPantalla,
        fechaYHoraPantalla: fechaYHoraPantalla,
        pronMedicoLegal: pronMedicoLegal,
        Alcoholemia: Alcoholemia,
        nFrasco: nFrasco,
        Anamnesis: Anamnesis,
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
        sospDiagnostica: sospDiagnostica,
        ind1: ind1,
        ind2: ind2,
        ind3: ind3,
        radiografia: radiografia,
        detRadio: detRadio,
        ExamenSangre: ExamenSangre,
        detExSangre: detExSangre,
        ecg: ecg,
        perId: perId,
        fechaSalida: fechaSalida,
        RequiereTratamiento: RequiereTratamiento,
        requiereConstLesion: requiereConstLesion,
        examenFisicoConst: examenFisicoConst,
        imagenConst: imagenConst,
        exLabConst: exLabConst,
        otrosConst: otrosConst,
        origenLesionRelatoLesionado: origenLesionRelatoLesionado,
        origenLesionClinica: origenLesionClinica,
        diasLesion: diasLesion,
        vieneAcompanado: vieneAcompanado,
        nombreAcompLesionado: nombreAcompLesionado,
        CalidadAcompLesionado: CalidadAcompLesionado,
        ObtenerListaind1: ObtenerListaind1,
        ObtenerListaind2: ObtenerListaind2,
        ObtenerListaind3: ObtenerListaind3,
        esPacienteGes: esPacienteGes,
        diagnosGes: diagnosGes
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
            $("#mensaje").empty();
            if (resultado.sesion === undefined) {
                window.parent.$("#loader").hide();
                window.parent.$("html,body").animate({ scrollTop: 0 }, 600);
                $("#ingresarNspPaciente").hide();
                $("#myModal").modal();
                if (resultado[0].data === "true") {
                    $("#cargandoPdf").show();
                    $("#Aceptar").hide();
                    $("#mensaje").empty();
                    $("#cerrarPop").hide();
                    var texto = "<h3> Se ha ingresado la atención del paciente.  </h3>";
                    redireccionar();
                } else {
                    $("#Aceptar").show();
                    $("#cargandoPdf").hide();
                    $("#mensaje").empty();
                    var texto = "<h3> No se ha ingresado la atención.  </h3>";
                    $("#cerrarPop").show();
                    $("#myModal").modal({ backdrop: 'static', keyboard: false });
                }
                $("#mensaje").append(texto);
                $("#myModal").modal({ backdrop: 'static', keyboard: false });
            } else {
                window.parent.$("#loader").hide();
                valorsesion = resultado.sesion;
            }
        }, // End success
        error: function(error) {
                console.log("Error en la petición");
            } // End error
    }); //End ajax
}

// FUNCION QUE HACE PARTE DE LA ATENCION Y EL EGRESO DEL PACIENTE
//function registrarAtencionParaEgreso(conId, horaIngresoPantalla, fechaYHoraPantalla, pronMedicoLegal, Alcoholemia, nFrasco, Anamnesis, cabeza, detCabeza, torax, detTorax, abdomen, detAbdomen, pelvis, detPelvis, extSuperiores, detExtSup, extInferiores, detExtInf, exNeurologico, detExamNeuro, sospDiagnostica, ind1, ind2, ind3, radiografia, detRadio, ExamenSangre, detExSangre, ecg, perId, fechaSalida, RequiereTratamiento, requiereConstLesion, examenFisicoConst, imagenConst, exLabConst, otrosConst, origenLesionRelatoLesionado, origenLesionClinica, diasLesion, vieneAcompanado, nombreAcompLesionado, CalidadAcompLesionado, ObtenerListaind1, ObtenerListaind2, ObtenerListaind3, esPacienteGes, diagnosGes, diagnostico, EvolucionObsMed, EgresoInd, tipoAlta, centroDerivacion, grupoDiagnostico, CatFinal, especialidad, confirmacioDiagnostica, realizarTto, Seguimiento, otraConsulta, consultaTextoEspecificar) {
function registrarAtencionParaEgreso(conId, horaIngresoPantalla, fechaYHoraPantalla, pronMedicoLegal, Alcoholemia, nFrasco, Anamnesis, cabeza, detCabeza, torax, detTorax, abdomen, detAbdomen, pelvis, detPelvis, extSuperiores, detExtSup, extInferiores, detExtInf, exNeurologico, detExamNeuro, sospDiagnostica, ind1, ind2, ind3, radiografia, detRadio, ExamenSangre, detExSangre, ecg, perId, fechaSalida, RequiereTratamiento, requiereConstLesion, examenFisicoConst, imagenConst, exLabConst, otrosConst, origenLesionRelatoLesionado, origenLesionClinica, diasLesion, vieneAcompanado, nombreAcompLesionado, CalidadAcompLesionado, ObtenerListaind1, ObtenerListaind2, ObtenerListaind3, esPacienteGes, diagnosGes, diagnostico, EvolucionObsMed, tipoAlta, centroDerivacion, grupoDiagnostico, CatFinal, horaCatEgreso, EgresoInd, especialidad, confirmacioDiagnostica, realizarTto, Seguimiento, otraConsulta, consultaTextoEspecificar) {
    var url = "../controlador/servidor/atencionRegistrada.php";
    var RequiereTratamiento = RequiereTratamiento;
    var conId = conId;
    var type = "POST";
    var resultado = null;
    var data = {
        evento: 'registrarAtencionParaEgreso',
        conId: conId,
        horaIngresoPantalla: horaIngresoPantalla,
        fechaYHoraPantalla: fechaYHoraPantalla,
        pronMedicoLegal: pronMedicoLegal,
        Alcoholemia: Alcoholemia,
        nFrasco: nFrasco,
        Anamnesis: Anamnesis,
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
        sospDiagnostica: sospDiagnostica,
        ind1: ind1,
        ind2: ind2,
        ind3: ind3,
        radiografia: radiografia,
        detRadio: detRadio,
        ExamenSangre: ExamenSangre,
        detExSangre: detExSangre,
        ecg: ecg,
        perId: perId,
        fechaSalida: fechaSalida,
        RequiereTratamiento: RequiereTratamiento,
        requiereConstLesion: requiereConstLesion,
        examenFisicoConst: examenFisicoConst,
        imagenConst: imagenConst,
        exLabConst: exLabConst,
        otrosConst: otrosConst,
        origenLesionRelatoLesionado: origenLesionRelatoLesionado,
        origenLesionClinica: origenLesionClinica,
        diasLesion: diasLesion,
        vieneAcompanado: vieneAcompanado,
        nombreAcompLesionado: nombreAcompLesionado,
        CalidadAcompLesionado: CalidadAcompLesionado,
        ObtenerListaind1: ObtenerListaind1,
        ObtenerListaind2: ObtenerListaind2,
        ObtenerListaind3: ObtenerListaind3,
        esPacienteGes: esPacienteGes,
        diagnosGes: diagnosGes,
        //EGRESO
        diagnostico: diagnostico,
        EvolucionObsMed: EvolucionObsMed,
        tipoAlta: tipoAlta,
        centroDerivacion: centroDerivacion,
        grupoDiagnostico: grupoDiagnostico,
        CatFinal: CatFinal,
        horaCatEgreso: horaCatEgreso,
        EgresoInd: EgresoInd,
        especialidad: especialidad,
        confirmacioDiagnostica: confirmacioDiagnostica,
        realizarTto: realizarTto,
        Seguimiento: Seguimiento,
        otraConsulta: otraConsulta,
        esPacienteGes: esPacienteGes,
        diagnosGes: diagnosGes,
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
            window.parent.$("html,body").animate({ scrollTop: 0 }, 600);
            var texto = "";
            $("#mensaje").empty();
            if (resultado.sesion === undefined) {
                if (resultado[0].data === "true") {
                    $("#cerrarPop").hide();
                    $("#cargandoPdf").show();
                    $("#AceptarEgreso").hide();
                    $("#idValidacion").hide();
                    $("#Aceptar").hide();
                    var texto = "<h3> Se ha dado de alta al paciente, Generando dato Sapu..  </h3>";
                    $("#mensaje").append(texto);
                    $("#myModal").modal();
                    setTimeout(cuentaAtras(conId), 2000);
                    redireccionar();
                } else {
                    $("#cargandoPdf").hide();
                    $("#idValidacion").show(); 
                    //$("#AceptarEgreso").show();
                    $("#Aceptar").hide();
                    var texto = "<h3> No se ha podido dar el alta al paciente, favor revisar formulario  </h3>";
                    $("#mensaje").append(texto);
                    $("#myModal").modal();
                }
            } else {
                window.parent.$("#loader").hide();
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
                    $("#idValidacion").hide();
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


function obtenerValidacionIngresoPacientes(conId, tab, fechaHora, perId, carId) {
    var url = "../controlador/servidor/atencionRegistrada.php";
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
            resultado = JSON.parse(response);
            window.parent.$("#loader").hide();
            $("#mensaje").empty();
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
                window.parent.$("#loader").hide();
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
        contador--;
        setTimeout(cuentaAtras(conId), 2000);
    }
}


function FinalizarSesion() {
    alert('Su sesión fue cerrada por inactividad en los últimos 45 minutos.');
    window.setTimeout(function() {
        window.top.location.href = '../../../index.php';
    }, 3000);
}

//REDIRECCIONA AL MENU PRINCIPAL CUANDO INGRESA UN REGISTRO
function redireccionar() {
    window.setTimeout("obtenerValidacionIngresoPacientesDesbl()", 2000);
}

function obtenerValidacionIngresoPacientesDesbl() {
    var tab = "tab3";
    var conId = $("#conId").val();
    var fechaHoy = $("#fechaHoy").val();
    var hora = window.parent.$("#reloj").val();
    var fechaHora = fechaHoy + " " + hora;
    var perId = window.parent.$("#perId").val();
    var carId = 3;
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


//FUNCION QUE VALIDA SI EL EXAMEN FISICO SE QUEDO EN SI Y NO SE REDACTO NADA EN LA CASILLA
//ESTO SE DEBE VALIDAR Y REORDENAR LA IDEA
function ValidaExamenFisico(cabeza, detCabeza, torax, detTorax, abdomen, detAbdomen, pelvis, detPelvis, extSuperiores, detExtSup, extInferiores, detExtInf, exNeurologico, detExamNeuro) {

    /*if(cabeza === "NO" && detCabeza !== "" ){
    	$("input[name=cabeza]").next().css('color', 'darkgray','font-weight', 'bold'); 
    	$("#detCabeza").css({"border-color":"darkgray", "border-width":"1px"});
    }else{
    	$("input[name=cabeza]").next().css('color', 'red','font-weight', 'unset'); 
    	$("#detCabeza").css({"border-color":"red", "border-width":"1px"});
    }
    if(torax === "NO" && detTorax !== "" ){
    	$("input[name=torax]").next().css('color', 'red','font-weight', 'bold'); 
    }else{
    	$("input[name=torax]").next().css('color', 'darkgray','font-weight', 'unset'); 
    }
    if(abdomen === "NO" && detAbdomen !== "" ){
    	$("input[name=abdomen]").next().css('color', 'red','font-weight', 'bold'); 
    }else{
    	$("input[name=abdomen]").next().css('color', 'darkgray','font-weight', 'unset'); 
    }
    if(pelvis === "NO" && detPelvis !== "" ){
    	$("input[name=pelvis]").next().css('color', 'red','font-weight', 'bold'); 
    }else{
    	$("input[name=pelvis]").next().css('color', 'darkgray','font-weight', 'unset'); 
    }
    if(extSuperiores === "NO" && detExtSup !== "" ){
    	$("input[name=extSuperiores]").next().css('color', 'red','font-weight', 'bold'); 
    }else{
    	$("input[name=extSuperiores]").next().css('color', 'darkgray','font-weight', 'unset'); 
    }
    if(extInferiores === "NO" && detExtInf !== "" ){
    	$("input[name=extInferiores]").next().css('color', 'red','font-weight', 'bold'); 
    }else{
    	$("input[name=extInferiores]").next().css('color', 'darkgray','font-weight', 'unset'); 
    }
    if(exNeurologico === "NO" && detExamNeuro !== "" ){
    	$("input[name=exNeurologico]").next().css('color', 'red','font-weight', 'bold'); 
    }else{
    	$("input[name=exNeurologico]").next().css('color', 'darkgray','font-weight', 'unset'); 
    }*/
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