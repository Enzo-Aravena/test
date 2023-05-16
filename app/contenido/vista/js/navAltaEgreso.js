let countClicks = 0;
let recuadroDataVisible = false;
let valorsesion = 0;
let select = "";
let contadorTexto = '';

$(document).ready(function() {
    window.parent.$("#loader").show();
    $('body').tooltip({ selector: '[data-toggle=tooltip]' });
    $("#cargandoPdf").hide();
    $("#recuadroData").hide();
    $("#cargandoPdf").hide();
    var test = location.search.replace('?', '').split('&');
    $("#conId").val("");
    //OBTIENE EL CONID DEL PACIENTE
    var parameter = test[0];
    var radio = parameter.split('=');
    var conId = radio[1];
    //obtiene el tab
    var parameter = test[1];
    var tab = parameter.split('=');
    var tab = tab[1];
    $("#tabContent").val(tab);
    $("#horaIngresoPantalla").val("");
    $("#conId").val(conId);
    //INGRESO FECHA
    var moem = momentoActual = new Date();
    if (moem.getDate() <= 9) { dia = "0" + moem.getDate(); } else { dia = moem.getDate(); }
    if ((moem.getMonth() + 1) <= 9) { mes = "0" + (moem.getMonth() + 1); } else { mes = (moem.getMonth() + 1); }
    var fecha = moem.getFullYear() + "/" + mes + "/" + dia; // dia + > + mes + "/" + moem.getFullYear();
    $("#fechaYhoraIngreso").val(fecha);
    var reloj = window.parent.$("#reloj").val();
    $("#horaIngresoPantalla").val(reloj);
    $("#horaAtencion").val(reloj);
    $("#AceptarTTo").hide();
    cargarFechaInicialPantalla();

    if (valorsesion == 0) { cargarListaMotivo(); }
    if (valorsesion == 0) { cargarPronosticoLegal(); }
    if (valorsesion == 0) { cargarListaGes(); }
    if (valorsesion == 0) { cargarDatosPaciente(conId); }
    if (valorsesion == 0) { cargarTipoAltaEgreso(); }
    if (valorsesion == 0) { cargarCentroDerivacion(); }
    if (valorsesion == 0) { cargarGrupoDiagnostico(); }
    if (valorsesion == "-1") { FinalizarSesion(); }

    $("#sospechaSaludAuge").prop('disabled', true);
    $("#centroDeriv").hide();
    $("#sospechaProblemaSaludAuge").hide();
    $("#subproblemaSaludAuge").hide();
    $("#EspecialidadAtencion").hide();
    $("#seEnviaConsultaPara").hide();
    $("#dniPaci").hide();
    var centroTrabajo = window.parent.$("#centroTrabajo").val();
    window.parent.$("#tituloPestaña").val("");
    var title = "";

    switch (centroTrabajo) {
        case "1":
            title = "Alta Paciente Carol Urzúa";
            break;
        case "2":
            title = "Alta Paciente La Faena";
            break;
        case "3":
            title = "Alta Paciente San Luis";
            break;
        case "4":
            title = "Alta Paciente Lo Hermida";
            break;
        case "5":
            title = "Alta Paciente C. Silva Henriquez";
            break;
        case "8":
            title = "Alta Paciente SAR Carol Urzúa";
            break;
        case "9":
            title = "Alta Paciente SAPU La Faena";
            break;
        case "10":
            title = "Alta Paciente SAPU Lo Hermida";
            break;
        case "11":
            title = "Alta Paciente SAPU San Luis";
            break;
        case "12":
            title = "Alta Paciente P. Gerardo Whelan";
            break;
        case "13":
            title = "Alta Pacientes Las Torres";
            break;
            //case "99":	title= "Registro Urgencia SAPU Las Torres";	break;
    }
    window.parent.$("#tituloPestaña").text(title);

    var hoy = new Date();
    var dd = hoy.getDate();
    var mm = hoy.getMonth() + 1;
    var yyyy = hoy.getFullYear();
    if (dd < 10) { dd = '0' + dd }
    if (mm < 10) { mm = '0' + mm }
    fechaHoy = yyyy + '-' + mm + '-' + dd;
    $("#fechaHoy").val('');
    $("#fechaHoy").val(fechaHoy);

    //ESTA FUNCION SIRVE PARA MOSTRAR SI EL TIPO DE ALTA QUE SE SOLICITO ES "Derivación Hospitalaria", MUESTRA EL CENTRO DE DERIVACION
    $('select[name=tipoAlta]').change(function() {
        var tipoAlta = $('select[name=tipoAlta]').val();
        if (tipoAlta === "2") {
            $("#centroDeriv").show();
            $("#sospechaProblemaSaludAuge").show();
            $("#subproblemaSaludAuge").show();
            $("#EspecialidadAtencion").show();
            $("#seEnviaConsultaPara").show();
        } else {
            $('select[name=centroDerivacion]').val("0");
            $("#centroDeriv").hide();
            $("#sospechaProblemaSaludAuge").hide();
            $("#subproblemaSaludAuge").hide();
            $("#EspecialidadAtencion").hide();
            $("#seEnviaConsultaPara").hide();
            $("#especialidad").val("");
            $('input[name=confirmacioDiagnostica]').prop('checked', false);
            $('input[name=realizarTto]').prop('checked', false);
            $('input[name=Seguimiento]').prop('checked', false);
            $('input[name=otraConsulta]').prop('checked', false);
            $("#consultaTextoEspecificar").val("");
        }
    });

    $("#consultaTextoEspecificar").keyup(function() {
        contadorTexto = '';
        var data = $("#consultaTextoEspecificar").val().length;
        var maxLength = 700;
        var minlength = 0;
        var contador = (minlength + data);
        if (contador == 700) { contadorTexto = contador + '/' + maxLength; } else { contadorTexto = contador + '/' + maxLength; }
        document.getElementById("numconsultaTextoEspecificar").innerHTML = contadorTexto
    });

    $("#ingresarAtencion").on("click", function() {
        var conId = $("#conId").val();
        ///INGRESO PANTALLA
        var fechaYHoraPantalla = $("#fechaYhoraIngresoSistema").val();
        var cabeza = $('input:radio[name=cabeza]:checked').val();
        var detCabeza = $("#detCabeza").val();
        var torax = $('input:radio[name=torax]:checked').val();
        var detTorax = $("#detTorax").val();
        var abdomen = $('input:radio[name=abdomen]:checked').val();
        var detAbdomen = $("#detAbdomen").val();
        var pelvis = $('input:radio[name=pelvis]:checked').val();
        var detPelvis = $("#detPelvis").val();
        var extSuperiores = $('input:radio[name=extSuperiores]:checked').val();
        var detExtSup = $("#detExtSup").val();
        var extInferiores = $('input:radio[name=extInferiores]:checked').val();
        var detExtInf = $("#detExtInf").val();
        var exNeurologico = $('input:radio[name=exNeurologico]:checked').val();
        var detExamNeuro = $("#detExamNeuro").val();
        var diagnostico = $("#diagnostico").val();
        var EvolucionObsMed = $("#EvolucionObsMed").val();
        var radiografia = $('input[name=radiografia]').prop('checked');
        var detRadio = $("#detRadio").val();
        var ExamenSangre = $('input[name=ExamenSangre]').prop('checked');
        var detExSangre = $("#detExSangre").val();
        var ecg = $('input[name=ecg]').prop('checked');
        var detECG = $("#detECG").val();
        var EgresoInd = $("#EgresoInd").val();
        var tipoAlta = $('select[name=tipoAlta]').val();
        var centroDerivacion = $('select[name=centroDerivacion]').val();
        var grupoDiagnostico = $('select[name=grupoDiagnostico]').val();
        var CatFinal = $('input:radio[name=CatFinal]:checked').val();
        var horaCatEgreso = $("#horaCatEgreso").val();
        var fcDos = $("#fcDos").val();
        var frDos = $("#frDos").val();
        var tempAxDos = $("#tempAxDos").val();
        var satODos = $("#satODos").val();
        var psDos = $("#psDos").val();
        var pdDos = $("#pdDos").val();
        var hgtDos = $("#hgtDos").val();
        var eEvaDos = $("#eEvaDos").val();
        var eglasgowDos = $("#eglasgowDos").val();
        var perId = window.parent.$("#perId").val();
        var relos = window.parent.$("#reloj").val();
        var fechaSalida = fecha + " " + relos;
        //nuevos campos del egreso
        var sospechaAuge = "";
        var sospechaSaludAuge = "";
        var subproblemaAuge = "";
        var especialidad = $("#especialidad").val();
        var confirmacioDiagnostica = $('input[name=confirmacioDiagnostica]').prop('checked');
        var realizarTto = $('input[name=realizarTto]').prop('checked');
        var Seguimiento = $('input[name=Seguimiento]').prop('checked');
        var otraConsulta = $('input[name=otraConsulta]').prop('checked');
        var consultaTextoEspecificar = $("#consultaTextoEspecificar").val();

        //	VALIDACIONES DE CAMPOS OBLIGATORIOS
        if (diagnostico === "") { $("#diagnostico").css("border-color", "red"); } else { $("#diagnostico").css("border-color", "green"); }
        if (EvolucionObsMed === "") { $("#EvolucionObsMed").css("border-color", "red"); } else { $("#EvolucionObsMed").css("border-color", "green"); }
        if (tipoAlta === "0") { $("#tipoAlta").css("border-color", "red"); } else { $("#tipoAlta").css("border-color", "green"); }
        if (centroDerivacion === "0") { $("#centroDerivacion").css("border-color", "red"); } else { $("#centroDerivacion").css("border-color", "green"); }
        if (grupoDiagnostico === "0") { $("#grupoDiagnostico").css("border-color", "red"); } else { $("#grupoDiagnostico").css("border-color", "green"); }
        if (EgresoInd === "") { $("#EgresoInd").css("border-color", "red"); } else { $("#EgresoInd").css("border-color", "green"); }
        if (CatFinal === undefined) { $("input[name=CatFinal]").next().css('color', 'red', 'font-weight', 'bold'); } else { $("input[name=CatFinal]").next().css('color', 'green', 'font-weight', 'unset'); }

        if (radiografia === true && detRadio === "") {
            window.parent.$("#loader").hide();
            $("#detRadio").css("border-color", "red");
            alert("Debe completar el detalle del examen solicitado.");
        } else {
            if (radiografia === false && detRadio === "") {
                $("#detRadio").css("border-color", "darkgray");
            } else {
                $("#detRadio").css("border-color", "green");
            }
        }

        if (ExamenSangre === true && detExSangre === "") {
            window.parent.$("#loader").hide();
            $("#detExSangre").css("border-color", "red");
            alert("Debe completar el detalle del examen solicitado.");
        } else {
            if (ExamenSangre === false && detExSangre === "") {
                $("#detExSangre").css("border-color", "darkgray");
            } else {
                $("#detExSangre").css("border-color", "green");
            }
        }

        if (ecg === true && detECG === "") {
            window.parent.$("#loader").hide();
            $("#detECG").css("border-color", "red");
            alert("Debe completar el detalle del examen solicitado.");
        } else {
            if (ecg === false && detECG === "") {
                $("#detECG").css("border-color", "darkgray");
            } else {
                $("#detECG").css("border-color", "green");
            }
        }


        var ExSangre = ValidaExamenes(ExamenSangre, detExSangre);
        var exRadio = ValidaExamenes(radiografia, detRadio);
        var exECG = ValidaExamenes(ecg, detECG);


        if (diagnostico !== "" && EvolucionObsMed !== "" && tipoAlta !== "0" && grupoDiagnostico !== "0" && EgresoInd !== "" && horaCatEgreso !== "" && CatFinal !== undefined) {
            if (tipoAlta === "Derivación Hospitalaria" && centroDerivacion === "0") {
                window.parent.$("#loader").hide();
                countClicks = 0;
                alert("Error, Debe seleciconar el centro de derivación");
            } else {
                if (ExSangre === "1" && exRadio === "1" && exECG === "1") {
                    //SI TRAE EXAMENES DEBE VALIDAR QUE LOS SIGNOS VITALES ESTEN TODOS COMPLETOS
                    if (fcDos !== "" || frDos !== "" || tempAxDos !== "" || satODos !== "" || psDos !== "" || pdDos !== "" || hgtDos !== "" || eEvaDos !== "" || eglasgowDos !== "") {
                        validaCampos(fcDos, frDos, tempAxDos, satODos, psDos, pdDos, eglasgowDos);
                        //SI HAY ALGUN CAMPO LLENO DE LOS SIGNOS VITALES, DEBE LLENAR TODO
                        if (hgtDos === "") {
                            countClicks = countClicks + 1;
                            if (countClicks === 1) {
                                ingresarAltaPaciente(conId, fechaYHoraPantalla, cabeza, detCabeza, torax, detTorax, abdomen, detAbdomen, pelvis, detPelvis, extSuperiores, detExtSup, extInferiores, detExtInf, exNeurologico, detExamNeuro, diagnostico, EvolucionObsMed, radiografia, detRadio, ExamenSangre, detExSangre, ecg, detECG, EgresoInd, tipoAlta, centroDerivacion, grupoDiagnostico, CatFinal, horaCatEgreso, fcDos, frDos, tempAxDos, satODos, psDos, pdDos, hgtDos, eEvaDos, eglasgowDos, perId, fechaSalida, sospechaAuge, sospechaSaludAuge, subproblemaAuge, especialidad, confirmacioDiagnostica, realizarTto, Seguimiento, otraConsulta, consultaTextoEspecificar);
                                console.log("se resetea contador de " + countClicks);
                            } else {
                                console.log("cantidad de clicks hechos" + countClicks);
                                alert("Debe clickear solo una vez, ya se esta procesando su ingreso.")
                            }
                        } else {
                            if (isNaN(hgtDos)) {
                                if ((hgtDos === "HI" || hgtDos === "LO") || (hgtDos === "Hi" || hgtDos === "Lo") || (hgtDos === "hi" || hgtDos === "lo") || (hgtDos === "hI" || hgtDos === "lO")) {

                                    if (fcDos !== "" && frDos !== "" && tempAxDos !== "" && satODos !== "" && psDos !== "" && pdDos !== "" && eglasgowDos !== "") {
                                        countClicks = countClicks + 1;
                                        if (countClicks === 1) {
                                            ingresarAltaPaciente(conId, fechaYHoraPantalla, cabeza, detCabeza, torax, detTorax, abdomen, detAbdomen, pelvis, detPelvis, extSuperiores, detExtSup, extInferiores, detExtInf, exNeurologico, detExamNeuro, diagnostico, EvolucionObsMed, radiografia, detRadio, ExamenSangre, detExSangre, ecg, detECG, EgresoInd, tipoAlta, centroDerivacion, grupoDiagnostico, CatFinal, horaCatEgreso, fcDos, frDos, tempAxDos, satODos, psDos, pdDos, hgtDos, eEvaDos, eglasgowDos, perId, fechaSalida, sospechaAuge, sospechaSaludAuge, subproblemaAuge, especialidad, confirmacioDiagnostica, realizarTto, Seguimiento, otraConsulta, consultaTextoEspecificar);
                                            console.log("se resetea contador de " + countClicks);
                                        } else {
                                            console.log("cantidad de clicks hechos" + countClicks);
                                            alert("Debe clickear solo una vez, ya se esta procesando su ingreso.")
                                        }
                                    } else {
                                        alert("Debe completar los campos en rojo.");
                                        countClicks = 0;
                                    }
                                } else {
                                    alert("El valor ingresado debe ser HI o LO");
                                    $("#hgtDos").val("");
                                    countClicks = 0;
                                }
                            } else {
                                if (hgtDos >= 0 && hgtDos <= 1000) {
                                    if (fcDos !== "" && frDos !== "" && tempAxDos !== "" && satODos !== "" && psDos !== "" && pdDos !== "" && eglasgowDos !== "") {
                                        countClicks = countClicks + 1;
                                        if (countClicks === 1) {
                                            ingresarAltaPaciente(conId, fechaYHoraPantalla, cabeza, detCabeza, torax, detTorax, abdomen, detAbdomen, pelvis, detPelvis, extSuperiores, detExtSup, extInferiores, detExtInf, exNeurologico, detExamNeuro, diagnostico, EvolucionObsMed, radiografia, detRadio, ExamenSangre, detExSangre, ecg, detECG, EgresoInd, tipoAlta, centroDerivacion, grupoDiagnostico, CatFinal, horaCatEgreso, fcDos, frDos, tempAxDos, satODos, psDos, pdDos, hgtDos, eEvaDos, eglasgowDos, perId, fechaSalida, sospechaAuge, sospechaSaludAuge, subproblemaAuge, especialidad, confirmacioDiagnostica, realizarTto, Seguimiento, otraConsulta, consultaTextoEspecificar);
                                            console.log("se resetea contador de " + countClicks);
                                        } else {
                                            console.log("cantidad de clicks hechos" + countClicks);
                                            alert("Debe clickear solo una vez, ya se esta procesando su ingreso.")
                                        }
                                    } else {
                                        alert("Debe completar los campos en rojo.");
                                        countClicks = 0;
                                    }
                                } else {
                                    alert("El valor ingresado no puede ser igual a 0 o mayor a 1000");
                                    $("#hgtDos").val("");
                                    countClicks = 0;
                                }
                            }
                        }
                    } else {
                        //SI NO EXISTEN DATOS EN LOS SIGNOS VITALES, ENVIA EL ALTA DE INMEDIATO
                        countClicks = countClicks + 1;
                        if (countClicks === 1) {
                            ingresarAltaPaciente(conId, fechaYHoraPantalla, cabeza, detCabeza, torax, detTorax, abdomen, detAbdomen, pelvis, detPelvis, extSuperiores, detExtSup, extInferiores, detExtInf, exNeurologico, detExamNeuro, diagnostico, EvolucionObsMed, radiografia, detRadio, ExamenSangre, detExSangre, ecg, detECG, EgresoInd, tipoAlta, centroDerivacion, grupoDiagnostico, CatFinal, horaCatEgreso, fcDos, frDos, tempAxDos, satODos, psDos, pdDos, hgtDos, eEvaDos, eglasgowDos, perId, fechaSalida, sospechaAuge, sospechaSaludAuge, subproblemaAuge, especialidad, confirmacioDiagnostica, realizarTto, Seguimiento, otraConsulta, consultaTextoEspecificar);
                            console.log("se resetea contador de " + countClicks);
                        } else {
                            console.log("cantidad de clicks hechos" + countClicks);
                            alert("Debe clickear solo una vez, ya se esta procesando su ingreso.")
                        }
                    }
                } else {
                    if (ExSangre === "1" && exRadio === "1" && exECG === "1") {

                        if (fcDos !== "" || frDos !== "" || tempAxDos !== "" || satODos !== "" || psDos !== "" || pdDos !== "" || hgtDos !== "" || eEvaDos !== "" || eglasgowDos !== "") {
                            validaCampos(fcDos, frDos, tempAxDos, satODos, psDos, pdDos, eglasgowDos);
                            //SI HAY ALGUN CAMPO LLENO DE LOS SIGNOS VITALES, DEBE LLENAR TODO
                            if (hgtDos === "") {
                                countClicks = countClicks + 1;
                                if (countClicks === 1) {
                                    ingresarAltaPaciente(conId, fechaYHoraPantalla, cabeza, detCabeza, torax, detTorax, abdomen, detAbdomen, pelvis, detPelvis, extSuperiores, detExtSup, extInferiores, detExtInf, exNeurologico, detExamNeuro, diagnostico, EvolucionObsMed, radiografia, detRadio, ExamenSangre, detExSangre, ecg, detECG, EgresoInd, tipoAlta, centroDerivacion, grupoDiagnostico, CatFinal, horaCatEgreso, fcDos, frDos, tempAxDos, satODos, psDos, pdDos, hgtDos, eEvaDos, eglasgowDos, perId, fechaSalida, sospechaAuge, sospechaSaludAuge, subproblemaAuge, especialidad, confirmacioDiagnostica, realizarTto, Seguimiento, otraConsulta, consultaTextoEspecificar);
                                    console.log("se resetea contador de " + countClicks);
                                } else {
                                    console.log("cantidad de clicks hechos" + countClicks);
                                    alert("Debe clickear solo una vez, ya se esta procesando su ingreso.")
                                }
                            } else {
                                if (isNaN(hgtDos)) {
                                    if ((hgtDos === "HI" || hgtDos === "LO") || (hgtDos === "Hi" || hgtDos === "Lo") || (hgtDos === "hi" || hgtDos === "lo") || (hgtDos === "hI" || hgtDos === "lO")) {

                                        if (fcDos !== "" && frDos !== "" && tempAxDos !== "" && satODos !== "" && psDos !== "" && pdDos !== "" && eglasgowDos !== "") {
                                            countClicks = countClicks + 1;
                                            if (countClicks === 1) {
                                                ingresarAltaPaciente(conId, fechaYHoraPantalla, cabeza, detCabeza, torax, detTorax, abdomen, detAbdomen, pelvis, detPelvis, extSuperiores, detExtSup, extInferiores, detExtInf, exNeurologico, detExamNeuro, diagnostico, EvolucionObsMed, radiografia, detRadio, ExamenSangre, detExSangre, ecg, detECG, EgresoInd, tipoAlta, centroDerivacion, grupoDiagnostico, CatFinal, horaCatEgreso, fcDos, frDos, tempAxDos, satODos, psDos, pdDos, hgtDos, eEvaDos, eglasgowDos, perId, fechaSalida, sospechaAuge, sospechaSaludAuge, subproblemaAuge, especialidad, confirmacioDiagnostica, realizarTto, Seguimiento, otraConsulta, consultaTextoEspecificar);
                                                console.log("se resetea contador de " + countClicks);
                                            } else {
                                                console.log("cantidad de clicks hechos" + countClicks);
                                                alert("Debe clickear solo una vez, ya se esta procesando su ingreso.")
                                            }
                                        } else {
                                            alert("Debe completar los campos en rojo.");
                                            countClicks = 0;
                                        }
                                    } else {
                                        alert("El valor ingresado debe ser HI o LO");
                                        $("#hgtDos").val("");
                                        countClicks = 0;
                                    }
                                } else {
                                    if (hgtDos >= 0 && hgtDos <= 1000) {
                                        if (fcDos !== "" && frDos !== "" && tempAxDos !== "" && satODos !== "" && psDos !== "" && pdDos !== "" && eglasgowDos !== "") {
                                            countClicks = countClicks + 1;
                                            if (countClicks === 1) {
                                                ingresarAltaPaciente(conId, fechaYHoraPantalla, cabeza, detCabeza, torax, detTorax, abdomen, detAbdomen, pelvis, detPelvis, extSuperiores, detExtSup, extInferiores, detExtInf, exNeurologico, detExamNeuro, diagnostico, EvolucionObsMed, radiografia, detRadio, ExamenSangre, detExSangre, ecg, detECG, EgresoInd, tipoAlta, centroDerivacion, grupoDiagnostico, CatFinal, horaCatEgreso, fcDos, frDos, tempAxDos, satODos, psDos, pdDos, hgtDos, eEvaDos, eglasgowDos, perId, fechaSalida, sospechaAuge, sospechaSaludAuge, subproblemaAuge, especialidad, confirmacioDiagnostica, realizarTto, Seguimiento, otraConsulta, consultaTextoEspecificar);
                                                console.log("se resetea contador de " + countClicks);
                                            } else {
                                                console.log("cantidad de clicks hechos" + countClicks);
                                                alert("Debe clickear solo una vez, ya se esta procesando su ingreso.")
                                            }
                                        } else {
                                            alert("Debe completar los campos en rojo.");
                                            countClicks = 0;
                                        }
                                    } else {
                                        alert("El valor ingresado no puede ser igual a 0 o mayor a 1000");
                                        $("#hgtDos").val("");
                                        countClicks = 0;
                                    }
                                }
                            }
                        } else {
                            //SI NO EXISTEN DATOS EN LOS SIGNOS VITALES, ENVIA EL ALTA DE INMEDIATO
                            countClicks = countClicks + 1;
                            if (countClicks === 1) {
                                ingresarAltaPaciente(conId, fechaYHoraPantalla, cabeza, detCabeza, torax, detTorax, abdomen, detAbdomen, pelvis, detPelvis, extSuperiores, detExtSup, extInferiores, detExtInf, exNeurologico, detExamNeuro, diagnostico, EvolucionObsMed, radiografia, detRadio, ExamenSangre, detExSangre, ecg, detECG, EgresoInd, tipoAlta, centroDerivacion, grupoDiagnostico, CatFinal, horaCatEgreso, fcDos, frDos, tempAxDos, satODos, psDos, pdDos, hgtDos, eEvaDos, eglasgowDos, perId, fechaSalida, sospechaAuge, sospechaSaludAuge, subproblemaAuge, especialidad, confirmacioDiagnostica, realizarTto, Seguimiento, otraConsulta, consultaTextoEspecificar);
                                console.log("se resetea contador de " + countClicks);
                            } else {
                                console.log("cantidad de clicks hechos" + countClicks);
                                alert("Debe clickear solo una vez, ya se esta procesando su ingreso.")
                            }
                        }
                    } else {
                        window.parent.$("#loader").hide();
                        alert("Error al ingresar la atención del paciente, Favor Complete los campos en rojo.");
                        window.parent.$("html,body").animate({ scrollTop: 0 }, 600);
                        countClicks = 0;
                    }
                }
            }
        } else {
            window.parent.$("#loader").hide();
            alert("Error al ingresar la atención del paciente, Favor Complete los campos en rojo.");
            window.parent.$("html,body").animate({ scrollTop: 0 }, 600);
            countClicks = 0;
        }
    });

    // -- INICIO CONTADOR DE CARACTERES
    $("#diagnostico").keyup(function() {
        contadorTexto = '';
        var data = $("#diagnostico").val().length;
        var maxLength = 700;
        var minlength = 0;
        var contador = (minlength + data);
        if (contador == 700) { contadorTexto = contador + '/' + maxLength; } else { contadorTexto = contador + '/' + maxLength; }
        document.getElementById("numDiagnostEgreso").innerHTML = contadorTexto;
    });

    $("#EvolucionObsMed").keyup(function() {
        contadorTexto = '';
        var data = $("#EvolucionObsMed").val().length;
        var maxLength = 700;
        var minlength = 0;
        var contador = (minlength + data);
        if (contador == 700) { contadorTexto = contador + '/' + maxLength; } else { contadorTexto = contador + '/' + maxLength; }
        document.getElementById("numEvoluYObs").innerHTML = contadorTexto;
    });

    function validaCampos(fcDos, frDos, tempAxDos, satODos, psDos, pdDos, eglasgowDos) {
        if (fcDos === "") { $("#fcDos").css("border-color", "red"); } else { $("#fcDos").css("border-color", "green"); }
        if (frDos === "") { $("#frDos").css("border-color", "red"); } else { $("#frDos").css("border-color", "green"); }
        if (tempAxDos === "") { $("#tempAxDos").css("border-color", "red"); } else { $("#tempAxDos").css("border-color", "green"); }
        if (satODos === "") { $("#satODos").css("border-color", "red"); } else { $("#satODos").css("border-color", "green"); }
        if (psDos === "") { $("#psDos").css("border-color", "red"); } else { $("#psDos").css("border-color", "green"); }
        if (pdDos === "") { $("#pdDos").css("border-color", "red"); } else { $("#pdDos").css("border-color", "green"); }
        if (eglasgowDos === "") { $("#eglasgowDos").css("border-color", "red"); } else { $("#eglasgowDos").css("border-color", "green"); }
        countClicks = 0;
    }


    $("#EgresoInd").keyup(function() {
        contadorTexto = '';
        var data = $("#EgresoInd").val().length;
        var maxLength = 700;
        var minlength = 0;
        var contador = (minlength + data);
        if (contador == 700) { contadorTexto = contador + '/' + maxLength; } else { contadorTexto = contador + '/' + maxLength; }
        document.getElementById("numEgresoInd").innerHTML = contadorTexto;
    });

    // -- FIN CONTADOR DE CARACTERES

    $("input:radio[name=CatFinal]").change(function() {
        var valor = $("input:radio[name=CatFinal]:checked").val();
        switch (valor) {
            case "C1":
                $("#horaCatEgreso").empty();
                var reloj = window.parent.$("#reloj").val();
                $("#horaCatEgreso").val(reloj);
                break;
            case "C2":
                $("#horaCatEgreso").empty();
                var reloj = window.parent.$("#reloj").val();
                $("#horaCatEgreso").val(reloj);
                break;
            case "C3":
                $("#horaCatEgreso").empty();
                var reloj = window.parent.$("#reloj").val();
                $("#horaCatEgreso").val(reloj);
                break;
            case "C4":
                $("#horaCatEgreso").empty();
                var reloj = window.parent.$("#reloj").val();
                $("#horaCatEgreso").val(reloj);
                break;
            case "C5":
                $("#horaCatEgreso").empty();
                var reloj = window.parent.$("#reloj").val();
                $("#horaCatEgreso").val(reloj);
                break;
            default:
                window.parent.$("#loader").hide();
                alert("NO SE PUDO CATEGORIZAR AL PACIENTE.");
                break;
        }
    });

    $("#Aceptar").on("click", function() {
        var tab = $("#tabContent").val();
        $(location).attr('href', "dashboard.php?tab=" + tab);
    });

    $("#volver").on("click", function() {
        var tab = $("#tabContent").val();
        var conId = $("#conId").val();
        var fechaHoy = $("#fechaHoy").val();
        var hora = window.parent.$("#reloj").val();
        var fechaHora = fechaHoy + " " + hora;
        var perId = window.parent.$("#perId").val();
        var carId = 5;
        obtenerValidacionIngresoPacientes(conId, tab, fechaHora, perId, carId);
    });


    //INGRESA EL NSP PACIENTE
    $("#ingresarNspPac").on("click", function() {
        var conId = $("#conId").val();
        var fechaYHoraPantalla = $("#fechaYhoraIngresoSistema").val();
        var ObservacionNsp = $("#ObservacionNsp").val();
        var tipoMotivo = $('select[name=grupoDiagnosticoNSP]').val();
        var perId = window.parent.$("#perId").val();
        var relos = window.parent.$("#reloj").val();
        var fechaSalida = fechaYHoraPantalla;

        if (tipoMotivo === "0") { $("#grupoDiagnosticoNSP").css("border-color", "red"); } else { $("#grupoDiagnosticoNSP").css("border-color", "#ccc"); }
        if (ObservacionNsp === "") { $("#ObservacionNsp").css("border-color", "red"); } else { $("#ObservacionNsp").css("border-color", "#ccc"); }
        if (ObservacionNsp !== "" && tipoMotivo !== "0") {
            registrarNspPaciente(conId, fechaYHoraPantalla, ObservacionNsp, tipoMotivo, perId, fechaSalida);
        } else {
            window.parent.$("html,body").animate({ scrollTop: 0 }, 600);
            window.parent.$("#loader").hide();
            alert("Error al ingresar el NSP, Favor Complete los campos en rojo.");
        }
    });



    $('input:radio[name=sospechaAuge]').change(function() {
        var sospechaAuge = $('input:radio[name=sospechaAuge]:checked').val();
        // SI ES SI
        if (sospechaAuge === "1") {
            $("#sospechaSaludAuge").prop('disabled', false);
            $("#subproblemaAuge").prop('disabled', false);
        } else {
            $("#sospechaSaludAuge").prop('disabled', true);
        }
    });

    $("#mostrarMas").on("click", function() {
        if (!recuadroDataVisible) {
            $("#recuadroData").show();
            recuadroDataVisible = true;
        } else {
            $("#recuadroData").hide();
            recuadroDataVisible = false;
        }
    });

    $("#ingresarNsp").on("click", function() {
        $('select[name=grupoDiagnosticoNSP]').val("0");
        $("#grupoDiagnosticoNSP").css("border-color", "#ccc");
        $("#ObservacionNsp").css("border-color", "#ccc");
        $("#ObservacionNsp").val("");
        $("#numNsp").text("0/700");
        var rutPaci = $("#rutPaci").val();
        window.parent.$("html,body").animate({ scrollTop: 0 }, 600);
        $("#ingresarNspPaciente").modal();
    });

    $("#sospechaSaludAuge").keyup(function() {
        contadorTexto = '';
        var data = $("#sospechaSaludAuge").val().length;
        var maxLength = 700;
        var minlength = 0;
        var contador = (minlength + data);
        if (contador == 700) { contadorTexto = contador + '/' + maxLength; } else { contadorTexto = contador + '/' + maxLength; }
        document.getElementById("numSospSaludAuge").innerHTML = contadorTexto;
    });

    $("#subproblemaAuge").keyup(function() {
        contadorTexto = '';
        var data = $("#subproblemaAuge").val().length;
        var maxLength = 700;
        var minlength = 0;
        var contador = (minlength + data);
        if (contador == 700) { contadorTexto = contador + '/' + maxLength; } else { contadorTexto = contador + '/' + maxLength; }
        document.getElementById("numsubGrupoAuge").innerHTML = contadorTexto;
    });


    $("#ObservacionNsp").keyup(function() {
        contadorTexto = '';
        var data = $("#ObservacionNsp").val().length;
        var maxLength = 700;
        var minlength = 0;
        var contador = (minlength + data);
        if (contador == 700) { contadorTexto = contador + '/' + maxLength; } else { contadorTexto = contador + '/' + maxLength; }
        document.getElementById("numNsp").innerHTML = contadorTexto;
    });

    $("#fcDos").keyup(function() {
        var fcDos = $("#fcDos").val();
        if (fcDos >= 0 && fcDos <= 300) {} else {
            if (fcDos === "") {} else {
                alert("El valor ingresado no puede ser mayor a 300");
                $("#fcDos").val("");
            }
        }
    });

    $("#frDos").keyup(function() {
        var frDos = $("#frDos").val();
        if (frDos >= 0 && frDos <= 100) {} else {
            if (frDos === "") {} else {
                alert("El valor ingresado no puede ser mayor a 100");
                $("#frDos").val("");
            }
        }
    });

    $("#psDos").keyup(function() {
        var psDos = $("#psDos").val();
        if (psDos >= 0 && psDos <= 300) {} else {
            if (psDos === "") {} else {
                alert("El valor ingresado no puede ser mayor a 300");
                $("#psDos").val("");
            }
        }
    });

    $("#pdDos").keyup(function() {
        var pdDos = $("#pdDos").val();
        if (pdDos >= 0 && pdDos <= 300) {} else {
            if (psDos === "") {} else {
                alert("El valor ingresado no puede ser mayor a 300");
                $("#pdDos").val("");
            }
        }
    });


    function isCommaDecimalNumber(value) {
        return /^-?(?:\d+(?:,\d*)?)$/.test(value);
    }

    $("#tempAxDos").keyup(function() {
        var tempAx = $("#tempAxDos").val();
        if (tempAx === "") {} else {
            if (isCommaDecimalNumber(tempAx) === true) {
                var valid = tempAx.split(",");
                if (valid[0] >= 0 && valid[0] <= 45) {} else {
                    alert("El valor ingresado no puede ser mayor a 45");
                    $("#tempAxDos").val("");
                }
            } else {
                alert("El valor ingresado no puede llevar otro separador que no sea una ',' ");
                $("#tempAxDos").val("");
            }
        }
    });

    $("#satO2Dos").keyup(function() {
        var satO2Dos = $("#satO2Dos").val();
        if (satO2Dos >= 0 && satO2Dos <= 100) {} else {
            if (satO2Dos === "") {} else {
                alert("El valor ingresado no puede ser mayor a 100");
                $("#satO2Dos").val("");
            }
        }
    });

    $("#hgtDos").on("keydown", function(e) {
        if (!BlockKeys(/[0-9hiloHILO]/, e.key)) { return false; }
        var hgt = $("#hgtDos").val();
        //SI ES LETRA
        if (isNaN(hgt)) {
            if (hgt.length < 2) {} else {
                if ((hgt === "HI" || hgt === "LO") || (hgt === "Hi" || hgt === "Lo") || (hgt === "hi" || hgt === "lo") || (hgt === "hI" || hgt === "lO")) {} else {
                    alert("El valor ingresado debe ser HI o LO");
                    $("#hgtDos").val("");
                }
            }
        } else {
            if (hgt >= 0 && hgt <= 1000) {} else {
                alert("El valor ingresado no puede ser igual a 0 o mayor a 1000");
                $("#hgtDos").val("");
            }
        }
    });

    $("#satODos").keyup(function() {
        var satODos = $("#satODos").val();
        if (satODos >= 0 && satODos <= 100) {} else {
            if (satODos === "") {} else {
                alert("El valor ingresado no puede ser mayor a 100");
                $("#satODos").val("");
            }
        }
    });

    $("#eEvaDos").keyup(function() {
        var eEvaDos = $("#eEvaDos").val();
        if (eEvaDos >= 1 && eEvaDos <= 1000) {} else {
            if (eEvaDos === "") {} else {
                alert("El valor ingresado no puede ser mayor a 1000");
                $("#eEvaDos").val("");
            }
        }
    });

    $("#eglasgowDos").keyup(function() {
        var eglasgowDos = $("#eglasgowDos").val();
        if (eglasgowDos > 0 && eglasgowDos <= 15) {} else {
            if (eglasgowDos !== "") {
                alert("El valor ingresado no puede ser mayor a 15");
                $("#eglasgowDos").val("");
            }
        }
    });



    /**************** VALIDACION EXAMEN FISICO MAX DE CARACTERES  ***********/
    $("#detCabeza").keyup(function() {
        contadorTexto = '';
        var data = $("#detCabeza").val().length;
        var maxLength = 400;
        var minlength = 0;
        var contador = (minlength + data);
        if (contador == 400) { contadorTexto = contador + '/' + maxLength; } else { contadorTexto = contador + '/' + maxLength; }
        document.getElementById("numngth").innerHTML = contadorTexto;
    });

    $("#detTorax").keyup(function() {
        contadorTexto = '';
        var data = $("#detTorax").val().length;
        var maxLength = 400;
        var minlength = 0;
        var contador = (minlength + data);
        if (contador == 400) { contadorTexto = contador + '/' + maxLength; } else { contadorTexto = contador + '/' + maxLength; }
        document.getElementById("numdetTorax").innerHTML = contadorTexto;
    });

    $("#detAbdomen").keyup(function() {
        contadorTexto = '';
        var data = $("#detAbdomen").val().length;
        var maxLength = 400;
        var minlength = 0;
        var contador = (minlength + data);
        if (contador == 400) { contadorTexto = contador + '/' + maxLength; } else { contadorTexto = contador + '/' + maxLength; }
        document.getElementById("numdetAbdomen").innerHTML = contadorTexto;
    });

    $("#detPelvis").keyup(function() {
        contadorTexto = '';
        var data = $("#detPelvis").val().length;
        var maxLength = 400;
        var minlength = 0;
        var contador = (minlength + data);
        if (contador == 400) { contadorTexto = contador + '/' + maxLength; } else { contadorTexto = contador + '/' + maxLength; }
        document.getElementById("numdetPelvis").innerHTML = contadorTexto;
    });

    $("#detExtSup").keyup(function() {
        contadorTexto = '';
        var data = $("#detExtSup").val().length;
        var maxLength = 400;
        var minlength = 0;
        var contador = (minlength + data);
        if (contador == 400) { contadorTexto = contador + '/' + maxLength; } else { contadorTexto = contador + '/' + maxLength; }
        document.getElementById("numdetExtSup").innerHTML = contadorTexto;
    });

    $("#detExtInf").keyup(function() {
        contadorTexto = '';
        var data = $("#detExtInf").val().length;
        var maxLength = 400;
        var minlength = 0;
        var contador = (minlength + data);
        if (contador == 400) { contadorTexto = contador + '/' + maxLength; } else { contadorTexto = contador + '/' + maxLength; }
        document.getElementById("numdetExtInf").innerHTML = contadorTexto;
    });

    $("#detExamNeuro").keyup(function() {
        contadorTexto = '';
        var data = $("#detExamNeuro").val().length;
        var maxLength = 400;
        var minlength = 0;
        var contador = (minlength + data);
        if (contador == 400) { contadorTexto = contador + '/' + maxLength; } else { contadorTexto = contador + '/' + maxLength; }
        document.getElementById("numdetExamNeuro").innerHTML = contadorTexto;
    });

    /******************************************* VALIDACION EXAMEN FISICO ********************************************/
    $("input:radio[name=cabeza]").change(function() {
        var cabeza = $("input:radio[name=cabeza]:checked").val();
        if (cabeza === "SI") {
            $("#detCabeza").prop('disabled', false);
        } else {
            $("#detCabeza").prop('disabled', true);
        }
    });

    $("input:radio[name=torax]").change(function() {
        var torax = $("input:radio[name=torax]:checked").val();
        if (torax === "SI") {
            $("#detTorax").prop('disabled', false);
        } else {
            $("#detTorax").prop('disabled', true);
        }
    });

    $("input:radio[name=abdomen]").change(function() {
        var abdomen = $("input:radio[name=abdomen]:checked").val();
        if (abdomen === "SI") {
            $("#detAbdomen").prop('disabled', false);
        } else {
            $("#detAbdomen").prop('disabled', true);
        }
    });

    $("input:radio[name=pelvis]").change(function() {
        var pelvis = $("input:radio[name=pelvis]:checked").val();
        if (pelvis === "SI") {
            $("#detPelvis").prop('disabled', false);
        } else {
            $("#detPelvis").prop('disabled', true);
        }
    });

    $("input:radio[name=extSuperiores]").change(function() {
        var extSuperiores = $("input:radio[name=extSuperiores]:checked").val();
        if (extSuperiores === "SI") {
            $("#detExtSup").prop('disabled', false);
        } else {
            $("#detExtSup").prop('disabled', true);
        }
    });

    $("input:radio[name=extInferiores]").change(function() {
        var extInferiores = $("input:radio[name=extInferiores]:checked").val();
        if (extInferiores === "SI") {
            $("#detExtInf").prop('disabled', false);
        } else {
            $("#detExtInf").prop('disabled', true);
        }
    });

    $("input:radio[name=exNeurologico]").change(function() {
        var exNeurologico = $("input:radio[name=exNeurologico]:checked").val();
        if (exNeurologico === "SI") {
            $("#detExamNeuro").prop('disabled', false);
        } else {
            $("#detExamNeuro").prop('disabled', true);
        }
    });

    $('input:text, textarea').on('keypress', function(e) {
        if (e.which !== 39 && e.which !== 47 && e.which !== 92 && e.which !== 64 && e.which !== 124 && e.which !== 172 && e.which !== 61 && e.which !== 95 && e.which !== 176 &&
            e.which !== 123 && e.which !== 125 && e.which !== 91 && e.which !== 93 && e.which !== 191 && e.which !== 161 && e.which !== 63 && e.which !== 34) {
            return true;
        } else {
            return false;
        }
    });

    //VALIDACIONES SIN CARACTERES RAROS QUE BOTEN AL SISTEMA 
    /*	$("#detCabeza").on("keydown",function(e){
    		if (!BlockKeys(/[a-zA-Z,./1-9-*""#$%&()?¿¡!=´+áúéíóüñÑ0°<>_;:']/, e.key)) { return false; }
    	});

    	$("#detTorax").on("keydown",function(e){
    		if (!BlockKeys(/[a-zA-Z,./1-9-*""#$%&()?¿¡!=´+áúéíóüñÑ0°<>_;:']/, e.key)) { return false; }
    	});

    	$("#detAbdomen").on("keydown",function(e){
    		if (!BlockKeys(/[a-zA-Z,./1-9-*""#$%&()?¿¡!=´+áúéíóüñÑ0°<>_;:']/, e.key)) { return false; }
    	});

    	$("#detPelvis").on("keydown",function(e){
    		if (!BlockKeys(/[a-zA-Z,./1-9-*""#$%&()?¿¡!=´+áúéíóüñÑ0°<>_;:']/, e.key)) { return false; }
    	});

    	$("#detExtSup").on("keydown",function(e){
    		if (!BlockKeys(/[a-zA-Z,./1-9-*""#$%&()?¿¡!=´+áúéíóüñÑ0°<>_;:']/, e.key)) { return false; }
    	});

    	$("#detExtInf").on("keydown",function(e){
    		if (!BlockKeys(/[a-zA-Z,./1-9-*""#$%&()?¿¡!=´+áúéíóüñÑ0°<>_;:']/, e.key)) { return false; }
    	});

    	$("#detExamNeuro").on("keydown",function(e){
    		if (!BlockKeys(/[a-zA-Z,./1-9-*""#$%&()?¿¡!=´+áúéíóüñÑ0°<>_;:']/, e.key)) { return false; }
    	});
    	
    	$("#diagnostico").on("keydown",function(e){
    		if (!BlockKeys(/[a-zA-Z,./1-9-*""#$%&()?¿¡!=´+áúéíóüñÑ0°<>_;:']/, e.key)) { return false; }
    	});

    	$("#diagnostico").keyup(function(){
    		var peso = this.value.replace(/[a-zA-Z,./1-9-*""#$%&()?¿¡!=´+áúéíóüñÑ0°<>_;:]/g, '').replace(/,/g, ',');
    	});

    	$("#EvolucionObsMed").on("keydown",function(e){
    		if (!BlockKeys(/[a-zA-Z,./1-9-*""#$%&()?¿¡!=´+áúéíóüñÑ0°<>_;:']/, e.key)) { return false; }
    	});

    	$("#detRadio").on("keydown",function(e){
    		if (!BlockKeys(/[a-zA-Z,./1-9-*""#$%&()?¿¡!=´+áúéíóüñÑ0°<>_;:']/, e.key)) { return false; }
    	});

    	$("#detExSangre").on("keydown",function(e){
    		if (!BlockKeys(/[a-zA-Z,./1-9-*""#$%&()?¿¡!=´+áúéíóüñÑ0°<>_;:']/, e.key)) { return false; }
    	});

    	$("#detECG").on("keydown",function(e){
    		if (!BlockKeys(/[a-zA-Z,./1-9-*""#$%&()?¿¡!=´+áúéíóüñÑ0°<>_;:']/, e.key)) { return false; }
    	});

    	$("#EgresoInd").on("keydown",function(e){
    		if (!BlockKeys(/[a-zA-Z,./1-9-*""#$%&()?¿¡!=´+áúéíóüñÑ0°<>_;:']/, e.key)) { return false; }
    	});

    	$("#especialidad").on("keydown",function(e){
    		if (!BlockKeys(/[a-zA-Z,./1-9-*""#$%&()?¿¡!=´+áúéíóüñÑ0°<>_;:']/, e.key)) { return false; }
    	});

    	$("#consultaTextoEspecificar").on("keydown",function(e){
    		if (!BlockKeys(/[a-zA-Z,./1-9-*""#$%&()?¿¡!=´+áúéíóüñÑ0°<>_;:']/, e.key)) { return false; }
    	});

    	$("#ObservacionNsp").on("keydown",function(e){
    		if (!BlockKeys(/[a-zA-Z,./1-9-*""#$%&()?¿¡!=´+áúéíóüñÑ0°<>_;:']/, e.key)) { return false; }
    	});*/
});

function BlockKeys(regexPermitido, key) {
    if (key != "Backspace" && key != " " && key != "Tab" && !key.match(regexPermitido)) {
        return false;
    }
    return true;
}