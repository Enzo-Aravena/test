let countClicks = 0;
let contadorTexto = '';
let recuadroDataVisible = false;
let valorsesion = 0;
let tabla = "";
let contadors = 0;
let resultado = "";
let tablaAux = "";
let flashVisible = false;
let indicaciones = "";
let select = "";
let variableGlobal = "";

function nl2br(str) {
    return str.replace(/(?:\r\n|\r|\n)/g, '<br>');
}

let Fn = {
    validaRut: function(buscar) {
        buscar = buscar.replace("‐", "-");
        if (!/^[0-9]+[-|‐]{1}[0-9kK]{1}$/.test(buscar))
            return false;
        var tmp = buscar.split('-');
        var digv = tmp[1];
        var buscar = tmp[0];
        if (digv == 'K') digv = 'k';
        return (Fn.dv(buscar) == digv);
    },
    dv: function(T) {
        var M = 0,
            S = 1;
        for (; T; T = Math.floor(T / 10))
            S = (S + T % 10 * (9 - M++ % 6)) % 11;
        return S ? S - 1 : 'k';
    }
}

$(document).ready(function() {
    window.parent.$("#loader").show();
    $("#cargandoPdf").hide();
    $("#idValidacion").hide();


    $('body').tooltip({
        selector: '[data-toggle=tooltip]'
    });
    $("#cargandoPdf").hide();
    $("#cargandoPdf").hide();
    $("#recuadroData").hide();
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
    $("#centroDeriv").hide();
    $("#sospechaProblemaSaludAuge").hide();
    $("#subproblemaSaludAuge").hide();
    $("#EspecialidadAtencion").hide();
    $("#seEnviaConsultaPara").hide();
    $("#AceptarEgreso").hide();
    $("#MostrarPanelEgreso").hide();
    $("#SegundoCuerpoEgreso").hide();
    $("#MostrarManejoYtto").hide();
    $("#constatacionDeLesionesUno").hide();
    $("#constatacionDeLesionesDos").hide();
    $("#AceptarTTo").hide();
    $('#diagnosGes').prop('disabled', true);
    $("#nombreAcompLesionado").prop('disabled', true);
    $("#CalidadAcompLesionado").prop('disabled', true);
    $("#sospechaSaludAuge").prop('disabled', true);
    $("#detCabeza").prop('disabled', true);
    $("#detTorax").prop('disabled', true);
    $("#detAbdomen").prop('disabled', true);
    $("#detPelvis").prop('disabled', true);
    $("#detExtSup").prop('disabled', true);
    $("#detExtInf").prop('disabled', true);
    $("#detExamNeuro").prop('disabled', true);
    cargarFechaInicialPantalla();
    if (valorsesion == 0) { cargarListaProcedimientos(); }
    if (valorsesion == 0) { cargarListaMotivo(); }
    if (valorsesion == 0) { cargarTipoAltaEgreso(); }
    if (valorsesion == 0) { cargarCentroDerivacion(); }
    if (valorsesion == 0) { cargarGrupoDiagnostico(); }
    if (valorsesion == 0) { cargarListaGes(); }
    if (valorsesion == 0) { cargarDatosPaciente(conId); }
    if (valorsesion == 0) { cargarPronosticoLegal(); }
    if (valorsesion == "-1") { FinalizarSesion(); }

    //INGRESO FECHA
    var moem = momentoActual = new Date();
    if (moem.getDate() <= 9) { dia = "0" + moem.getDate(); } else { dia = moem.getDate(); }
    if ((moem.getMonth() + 1) <= 9) { mes = "0" + (moem.getMonth() + 1); } else { mes = (moem.getMonth() + 1); }
    var fecha = moem.getFullYear() + "/" + mes + "/" + dia; // dia + > + mes + "/" + moem.getFullYear();
    $("#fechaYhoraIngreso").val(fecha);
    var reloj = window.parent.$("#reloj").val();
    $("#horaIngresoPantalla").val(reloj);
    $("#horaAtencion").val(reloj);

    var centroTrabajo = window.parent.$("#centroTrabajo").val();
    window.parent.$("#tituloPestaña").val("");
    var title = "";
    switch (centroTrabajo) {
        case "1":
            title = "Atención Paciente Carol Urzúa";
            break;
        case "2":
            title = "Atención Paciente La Faena";
            break;
        case "3":
            title = "Atención Paciente San Luis";
            break;
        case "4":
            title = "Atención Paciente Lo Hermida";
            break;
        case "5":
            title = "Atención Paciente C. Silva Henriquez";
            break;
        case "8":
            title = "Atención Paciente SAR Carol Urzúa";
            break;
        case "9":
            title = "Atención Paciente SAPU La Faena";
            break;
        case "10":
            title = "Atención Paciente SAPU Lo Hermida";
            break;
        case "11":
            title = "Atención Paciente SAPU San Luis";
            break;
        case "12":
            title = "Atención Paciente P. Gerardo Whelan";
            break;
        case "13":
            title = "Atención Pacientes Las Torres";
            break;
            //case "99":	title= "Atención Pacientes SAPU Las Torres";	break;
    }

    window.parent.$("#tituloPestaña").text(title);

    var hoy = new Date();
    var dd = hoy.getDate();
    var mm = hoy.getMonth() + 1; //hoy es 0!
    var yyyy = hoy.getFullYear();
    if (dd < 10) { dd = '0' + dd }
    if (mm < 10) { mm = '0' + mm }
    fechaHoy = yyyy + '-' + mm + '-' + dd;
    $("#fechaHoy").val('');
    $("#fechaHoy").val(fechaHoy);
    var count_click = 0;
    //AÑADE UN CLICK AL EJECUTAR LA FUNCIÓN
    function count_click_add() {
        count_click += 1;
        return count_click;
    }

    $("#ingresarAtencion").on("click", function() {
        //window.parent.$("#loader").show();
        var conId = $("#conId").val();
        ///INGRESO PANTALLA
        var horaIngresoPantalla = $("#horaIngresoPantalla").val();
        var fechaIngrsoPantalla = $("#fechaYhoraIngreso").val();
        var fechaYHoraPantalla = $("#fechaYhoraIngresoSistema").val();
        var pronMedicoLegal = $('select[name=pronMedicoLegal]').val();
        var Alcoholemia = $('input[name=Alcoholemia]').prop('checked');
        var nFrasco = $("#nFrasco").val();
        var Anamnesis = $("#Anamnesis").val();
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
        var sospDiagnostica = $("#sospDiagnostica").val();
        var ind1 = $("#ind1").val();
        var ind2 = $("#ind2").val();
        var ind3 = $("#ind3").val();
        var radiografia = $('input[name=radiografia]').prop('checked');
        var detRadio = $("#detRadio").val();
        var ExamenSangre = $('input[name=ExamenSangre]').prop('checked');
        var detExSangre = $("#detExSangre").val();
        var ecg = $('input[name=ecg]').prop('checked');
        var perId = window.parent.$("#perId").val();
        var relos = window.parent.$("#reloj").val();
        var fechaSalida = fecha + " " + relos;
        var RequiereTratamiento = $("input:radio[name=requiereTto]:checked").val();

        //nuevos campos de la atencion
        var requiereConstLesion = $("input:radio[name=requiereConstLesion]:checked").val();
        var examenFisicoConst = $('input[name=examenFisicoConst]').prop('checked');
        var imagenConst = $('input[name=imagenConst]').prop('checked');
        var exLabConst = $('input[name=exLabConst]').prop('checked');
        var otrosConst = $('input[name=otrosConst]').prop('checked');
        var origenLesionRelatoLesionado = $("#origenLesionRelatoLesionado").val();
        var origenLesionClinica = $("#origenLesionClinica").val();
        var diasLesion = $("#diasLesion").val();
        var vieneAcompanado = $("input:radio[name=vieneAcompanado]:checked").val();
        var nombreAcompLesionado = $("#nombreAcompLesionado").val();
        var CalidadAcompLesionado = $("#CalidadAcompLesionado").val();
        //ACA SE AÑADE NUEVO GES
        var esPacienteGes = $('input[name=GES]').prop('checked');
        var diagnosGes = $('select[name=diagnosGes]').val();
        var ObtenerListaind1 = $('select[name=ObtenerListaind1]').val();
        var ObtenerListaind2 = $('select[name=ObtenerListaind2]').val();
        var ObtenerListaind3 = $('select[name=ObtenerListaind3]').val();

        //NUEVOS CAMPOS PARA EL EGRESO
        var diagnostico = $("#diagnostico").val();
        var EvolucionObsMed = $("#EvolucionObsMed").val();
        var EgresoInd = $("#EgresoInd").val();
        var tipoAlta = $('select[name=tipoAlta]').val();
        var especialidad = $("#especialidad").val();
        var confirmacioDiagnostica = $('input[name=confirmacioDiagnostica]').prop('checked');
        var realizarTto = $('input[name=realizarTto]').prop('checked');
        var Seguimiento = $('input[name=Seguimiento]').prop('checked');
        var otraConsulta = $('input[name=otraConsulta]').prop('checked');
        var consultaTextoEspecificar = $("#consultaTextoEspecificar").val();
        var centroDerivacion = $('select[name=centroDerivacion]').val();
        var grupoDiagnostico = $('select[name=grupoDiagnostico]').val();
        var CatFinal = $('input:radio[name=CatFinal]:checked').val();
        var horaCatEgreso = $("#horaCatEgreso").val();

        var edadPaci = 0;
        var edadPaciente = $("#fnac").text();
        if (edadPaciente !== "") {
            var edad = edadPaciente.split("/");
            edadPaci = edad[2];
            var hoy = new Date();
            var añoHoy = hoy.getFullYear();
            calcEdadPaciente = añoHoy - edadPaci;
            var validaEspisodioGes = validacionGes(esPacienteGes, diagnosGes, edadPaciente);
        } else {
            calcEdadPaciente = 0;
        }

        //validacion de campos obligatorios
        if (RequiereTratamiento === undefined) { $("input[name=requiereTto]").next().css('color', 'red', 'font-weight', 'bold'); } else { $("input[name=requiereTto]").next().css('color', 'green', 'font-weight', 'unset'); }
        if (Anamnesis === "") { $("#Anamnesis").css("border-color", "red"); } else { $("#Anamnesis").css("border-color", "green"); }
        if (sospDiagnostica === "") { $("#sospDiagnostica").css("border-color", "red"); } else { $("#sospDiagnostica").css("border-color", "green"); }
        //ValidaExamenFisico(cabeza,detCabeza,torax,detTorax,abdomen,detAbdomen,pelvis,detPelvis,extSuperiores,detExtSup,extInferiores,detExtInf,exNeurologico,detExamNeuro);
        if (ObtenerListaind1 === "0") { $("#ObtenerListaind1").css("border-color", "red"); } else { $("#ObtenerListaind1").css("border-color", "green"); }
        if (ind1 === "") { $("#ind1").css("border-color", "red"); } else { $("#ind1").css("border-color", "green"); }

        //VALIDACION SI REQUIERE TTO 
        if (RequiereTratamiento !== undefined) {
            //CUANDO SI NECESITA TRATAMIENTO
            if (RequiereTratamiento === "1") {

                if (Anamnesis !== "" && cabeza !== "" && torax !== "" && abdomen !== "" && pelvis !== "" && extSuperiores !== "" && extInferiores !== "" && exNeurologico !== "" && sospDiagnostica !== "" && ind1 !== "") {
                    if (Alcoholemia === false && nFrasco === "") {
                        //VALIDACION EXAMENES, RADIO Y ECG
                        var ExSangre = ValidaExamenes(ExamenSangre, detExSangre);
                        var exRadio = ValidaExamenes(radiografia, detRadio);

                        if ((radiografia === false && detRadio === "") === true || (ExamenSangre === false && detExSangre === "") === true || (ecg == false) === true) {
                            if (ExSangre === "1" && exRadio === "1") {

                                if (esPacienteGes === false) {
                                    countClicks = countClicks + 1;
                                    if (countClicks === 1) {
                                        countClicks = 0;
                                        registrarAtencion(conId, horaIngresoPantalla, fechaYHoraPantalla, pronMedicoLegal, Alcoholemia, nFrasco, Anamnesis, cabeza, detCabeza, torax, detTorax, abdomen, detAbdomen, pelvis, detPelvis, extSuperiores, detExtSup, extInferiores, detExtInf, exNeurologico, detExamNeuro, sospDiagnostica, ind1, ind2, ind3, radiografia, detRadio, ExamenSangre, detExSangre, ecg, perId, fechaSalida, RequiereTratamiento, requiereConstLesion, examenFisicoConst, imagenConst, exLabConst, otrosConst, origenLesionRelatoLesionado, origenLesionClinica, diasLesion, vieneAcompanado, nombreAcompLesionado, CalidadAcompLesionado, ObtenerListaind1, ObtenerListaind2, ObtenerListaind3, esPacienteGes, diagnosGes);
                                    } else {
                                        console.log("cantidad de clicks hechos" + countClicks);
                                        alert("Debe clickear solo una vez, ya se esta procesando su ingreso.");
                                    }
                                } else {
                                    if (validaEspisodioGes === 1) {
                                        countClicks = countClicks + 1;
                                        if (countClicks === 1) {
                                            countClicks = 0;
                                            registrarAtencion(conId, horaIngresoPantalla, fechaYHoraPantalla, pronMedicoLegal, Alcoholemia, nFrasco, Anamnesis, cabeza, detCabeza, torax, detTorax, abdomen, detAbdomen, pelvis, detPelvis, extSuperiores, detExtSup, extInferiores, detExtInf, exNeurologico, detExamNeuro, sospDiagnostica, ind1, ind2, ind3, radiografia, detRadio, ExamenSangre, detExSangre, ecg, perId, fechaSalida, RequiereTratamiento, requiereConstLesion, examenFisicoConst, imagenConst, exLabConst, otrosConst, origenLesionRelatoLesionado, origenLesionClinica, diasLesion, vieneAcompanado, nombreAcompLesionado, CalidadAcompLesionado, ObtenerListaind1, ObtenerListaind2, ObtenerListaind3, esPacienteGes, diagnosGes);
                                        } else {
                                            console.log("cantidad de clicks hechos" + countClicks);
                                            alert("Debe clickear solo una vez, ya se esta procesando su ingreso.");
                                        }
                                    } else {
                                        alert("No se puede ingresar la atención, los datos no coinciden con la edad del paciente.")
                                        countClicks = 0;
                                    }
                                }




                            } else {
                                alert("Si se clickea un tipo de Exámen, Radiografía, debe detallar el exámen.");
                                window.parent.$("#loader").hide();
                                window.parent.$("html,body").animate({ scrollTop: 0 }, 600);
                                countClicks = 0;
                            }
                        } else {
                            if ((radiografia === true && detRadio !== "") || (ExamenSangre === true && detExSangre !== "") === true || (ecg === true)) {

                                if (esPacienteGes === false) {
                                    countClicks = countClicks + 1;
                                    if (countClicks === 1) {
                                        countClicks = 0;
                                        registrarAtencion(conId, horaIngresoPantalla, fechaYHoraPantalla, pronMedicoLegal, Alcoholemia, nFrasco, Anamnesis, cabeza, detCabeza, torax, detTorax, abdomen, detAbdomen, pelvis, detPelvis, extSuperiores, detExtSup, extInferiores, detExtInf, exNeurologico, detExamNeuro, sospDiagnostica, ind1, ind2, ind3, radiografia, detRadio, ExamenSangre, detExSangre, ecg, perId, fechaSalida, RequiereTratamiento, requiereConstLesion, examenFisicoConst, imagenConst, exLabConst, otrosConst, origenLesionRelatoLesionado, origenLesionClinica, diasLesion, vieneAcompanado, nombreAcompLesionado, CalidadAcompLesionado, ObtenerListaind1, ObtenerListaind2, ObtenerListaind3, esPacienteGes, diagnosGes);
                                    } else {
                                        console.log("cantidad de clicks hechos" + countClicks);
                                        alert("Debe clickear solo una vez, ya se esta procesando su ingreso.");
                                    }

                                } else {
                                    if (validaEspisodioGes === 1) {
                                        countClicks = countClicks + 1;
                                        if (countClicks === 1) {
                                            countClicks = 0;
                                            registrarAtencion(conId, horaIngresoPantalla, fechaYHoraPantalla, pronMedicoLegal, Alcoholemia, nFrasco, Anamnesis, cabeza, detCabeza, torax, detTorax, abdomen, detAbdomen, pelvis, detPelvis, extSuperiores, detExtSup, extInferiores, detExtInf, exNeurologico, detExamNeuro, sospDiagnostica, ind1, ind2, ind3, radiografia, detRadio, ExamenSangre, detExSangre, ecg, perId, fechaSalida, RequiereTratamiento, requiereConstLesion, examenFisicoConst, imagenConst, exLabConst, otrosConst, origenLesionRelatoLesionado, origenLesionClinica, diasLesion, vieneAcompanado, nombreAcompLesionado, CalidadAcompLesionado, ObtenerListaind1, ObtenerListaind2, ObtenerListaind3, esPacienteGes, diagnosGes);
                                        } else {
                                            console.log("cantidad de clicks hechos" + countClicks);
                                            alert("Debe clickear solo una vez, ya se esta procesando su ingreso.");
                                        }
                                    } else {

                                        if (validaEspisodioGes === undefined) {
                                            countClicks = countClicks + 1;
                                            if (countClicks === 1) {
                                                countClicks = 0;
                                                registrarAtencion(conId, horaIngresoPantalla, fechaYHoraPantalla, pronMedicoLegal, Alcoholemia, nFrasco, Anamnesis, cabeza, detCabeza, torax, detTorax, abdomen, detAbdomen, pelvis, detPelvis, extSuperiores, detExtSup, extInferiores, detExtInf, exNeurologico, detExamNeuro, sospDiagnostica, ind1, ind2, ind3, radiografia, detRadio, ExamenSangre, detExSangre, ecg, perId, fechaSalida, RequiereTratamiento, requiereConstLesion, examenFisicoConst, imagenConst, exLabConst, otrosConst, origenLesionRelatoLesionado, origenLesionClinica, diasLesion, vieneAcompanado, nombreAcompLesionado, CalidadAcompLesionado, ObtenerListaind1, ObtenerListaind2, ObtenerListaind3, esPacienteGes, diagnosGes);
                                            } else {
                                                console.log("cantidad de clicks hechos" + countClicks);
                                                alert("Debe clickear solo una vez, ya se esta procesando su ingreso.");
                                            }
                                        } else {
                                            alert("No se puede ingresar la atención, los datos no coinciden con la edad del paciente.")
                                            countClicks = 0;
                                        }

                                        /*alert("No se puede ingresar la atención, los datos no coinciden con la edad del paciente.")
                                        countClicks = 0;*/
                                    }
                                }



                            } else {
                                alert("Si se clickea un tipo de Exámen, Radiografía, debe detallar el exámen.");
                                window.parent.$("#loader").hide();
                                window.parent.$("html,body").animate({ scrollTop: 0 }, 600);
                                countClicks = 0;
                            }

                        }
                    } else
                    if (Alcoholemia === true && (nFrasco < "0" || nFrasco === "")) {
                        alert("Debe ingresar un valor mayor a 0.");
                        window.parent.$("#loader").hide();
                        $("#nFrasco").css("border-color", "red");
                        window.parent.$("html,body").animate({ scrollTop: 0 }, 600);
                        countClicks = 0;
                    } else
                    if (Alcoholemia === false && (nFrasco > "0" || nFrasco === "" || nFrasco === "0")) {
                        alert("No puede ingresar una cantidad de frasco si no ha seleccionado la alcoholemia");
                        window.parent.$("#loader").hide();
                        $("#nFrasco").css("border-color", "red");
                        window.parent.$("html,body").animate({ scrollTop: 0 }, 600);
                        countClicks = 0;
                    } else {
                        countClicks = countClicks + 1;
                        if (countClicks === 1) {
                            if (validaEspisodioGes === 1) {
                                if (countClicks === 1) {
                                    countClicks = 0;
                                    registrarAtencion(conId, horaIngresoPantalla, fechaYHoraPantalla, pronMedicoLegal, Alcoholemia, nFrasco, Anamnesis, cabeza, detCabeza, torax, detTorax, abdomen, detAbdomen, pelvis, detPelvis, extSuperiores, detExtSup, extInferiores, detExtInf, exNeurologico, detExamNeuro, sospDiagnostica, ind1, ind2, ind3, radiografia, detRadio, ExamenSangre, detExSangre, ecg, perId, fechaSalida, RequiereTratamiento, requiereConstLesion, examenFisicoConst, imagenConst, exLabConst, otrosConst, origenLesionRelatoLesionado, origenLesionClinica, diasLesion, vieneAcompanado, nombreAcompLesionado, CalidadAcompLesionado, ObtenerListaind1, ObtenerListaind2, ObtenerListaind3, esPacienteGes, diagnosGes);
                                } else {
                                    console.log("cantidad de clicks hechos" + countClicks);
                                    alert("Debe clickear solo una vez, ya se esta procesando su ingreso.");
                                }
                            } else {
                                alert("No se puede ingresar la atención, los datos no coinciden con la edad del paciente.")
                                countClicks = 0;
                            }
                        } else {
                            console.log("cantidad de clicks hechos" + countClicks);
                            alert("Debe clickear solo una vez, ya se esta procesando su ingreso.");
                        }
                    }

                } else {
                    alert("Error al ingresar la atención del paciente, Favor Complete los campos en rojo.");
                    countClicks = 0;
                    window.parent.$("html,body").animate({ scrollTop: 0 }, 600);
                    window.parent.$("#loader").hide();
                } //END IF VALIDACION
            } else {
                // EN CASO DE QUE SEA "NO"
                if (diagnostico === "") { $("#diagnostico").css("border-color", "red"); } else { $("#diagnostico").css("border-color", "green"); }
                if (EvolucionObsMed === "") { $("#EvolucionObsMed").css("border-color", "red"); } else { $("#EvolucionObsMed").css("border-color", "green"); }
                if (tipoAlta === "0") { $("#tipoAlta").css("border-color", "red"); } else { $("#tipoAlta").css("border-color", "green"); }
                if (centroDerivacion === "0") { $("#centroDerivacion").css("border-color", "red"); } else { $("#centroDerivacion").css("border-color", "green"); }
                if (grupoDiagnostico === "0") { $("#grupoDiagnostico").css("border-color", "red"); } else { $("#grupoDiagnostico").css("border-color", "green"); }
                if (EgresoInd === "") { $("#EgresoInd").css("border-color", "red"); } else { $("#EgresoInd").css("border-color", "green"); }
                if (CatFinal === undefined) { $("input[name=CatFinal]").next().css('color', 'red', 'font-weight', 'bold'); } else { $("input[name=CatFinal]").next().css('color', 'green', 'font-weight', 'unset'); }

                if (Anamnesis !== "" && cabeza !== "" && torax !== "" && abdomen !== "" && pelvis !== "" && extSuperiores !== "" && extInferiores !== "" && exNeurologico !== "" && sospDiagnostica !== "" && diagnostico !== "" && EvolucionObsMed !== "" && tipoAlta !== "0" && grupoDiagnostico !== "0" &&
                    EgresoInd !== "" && horaCatEgreso !== "" && CatFinal !== undefined) {
                    if (tipoAlta === "Derivación Hospitalaria" && centroDerivacion === "0") {
                        window.parent.$("html,body").animate({ scrollTop: 0 }, 600);
                        window.parent.$("#loader").hide();
                        alert("Error, Debe seleciconar el centro de derivación");
                        countClicks = 0;
                    } else {
                        if (Alcoholemia === false && nFrasco === "" || validaEspisodioGes === "1") {


                            if (esPacienteGes === false) {
                                countClicks = countClicks + 1;
                                if (countClicks === 1) {
                                    countClicks = 0;
                                    registrarAtencionParaEgreso(conId, horaIngresoPantalla, fechaYHoraPantalla, pronMedicoLegal, Alcoholemia, nFrasco, Anamnesis, cabeza, detCabeza, torax, detTorax, abdomen, detAbdomen, pelvis, detPelvis, extSuperiores, detExtSup, extInferiores, detExtInf, exNeurologico, detExamNeuro, sospDiagnostica, ind1, ind2, ind3, radiografia, detRadio, ExamenSangre, detExSangre, ecg, perId, fechaSalida, RequiereTratamiento, requiereConstLesion, examenFisicoConst, imagenConst, exLabConst, otrosConst, origenLesionRelatoLesionado, origenLesionClinica, diasLesion, vieneAcompanado, nombreAcompLesionado, CalidadAcompLesionado, ObtenerListaind1, ObtenerListaind2, ObtenerListaind3, esPacienteGes, diagnosGes, diagnostico, EvolucionObsMed, tipoAlta, centroDerivacion, grupoDiagnostico, CatFinal, horaCatEgreso, EgresoInd, especialidad, confirmacioDiagnostica, realizarTto, Seguimiento, otraConsulta, consultaTextoEspecificar);
                                } else {
                                    console.log("cantidad de clicks hechos" + countClicks);
                                    alert("Debe clickear solo una vez, ya se esta procesando su ingreso.");
                                }
                            } else {
                                countClicks = countClicks + 1;
                                if (countClicks === 1) {
                                    if (validaEspisodioGes === 1) {
                                        if (countClicks === 1) {
                                            countClicks = 0;
                                            registrarAtencionParaEgreso(conId, horaIngresoPantalla, fechaYHoraPantalla, pronMedicoLegal, Alcoholemia, nFrasco, Anamnesis, cabeza, detCabeza, torax, detTorax, abdomen, detAbdomen, pelvis, detPelvis, extSuperiores, detExtSup, extInferiores, detExtInf, exNeurologico, detExamNeuro, sospDiagnostica, ind1, ind2, ind3, radiografia, detRadio, ExamenSangre, detExSangre, ecg, perId, fechaSalida, RequiereTratamiento, requiereConstLesion, examenFisicoConst, imagenConst, exLabConst, otrosConst, origenLesionRelatoLesionado, origenLesionClinica, diasLesion, vieneAcompanado, nombreAcompLesionado, CalidadAcompLesionado, ObtenerListaind1, ObtenerListaind2, ObtenerListaind3, esPacienteGes, diagnosGes, diagnostico, EvolucionObsMed, tipoAlta, centroDerivacion, grupoDiagnostico, CatFinal, horaCatEgreso, EgresoInd, especialidad, confirmacioDiagnostica, realizarTto, Seguimiento, otraConsulta, consultaTextoEspecificar);
                                        } else {
                                            console.log("cantidad de clicks hechos" + countClicks);
                                            alert("Debe clickear solo una vez, ya se esta procesando su ingreso.");
                                        }
                                    } else {
                                        alert("No se puede ingresar la atención, los datos no coinciden con la edad del paciente.")
                                        countClicks = 0;
                                    }
                                    //countClicks = 0;
                                    //registrarAtencionParaEgreso(conId, horaIngresoPantalla, fechaYHoraPantalla, pronMedicoLegal, Alcoholemia, nFrasco, Anamnesis, cabeza, detCabeza, torax, detTorax, abdomen, detAbdomen, pelvis, detPelvis, extSuperiores, detExtSup, extInferiores, detExtInf, exNeurologico, detExamNeuro, sospDiagnostica, ind1, ind2, ind3, radiografia, detRadio, ExamenSangre, detExSangre, ecg, perId, fechaSalida, RequiereTratamiento, requiereConstLesion, examenFisicoConst, imagenConst, exLabConst, otrosConst, origenLesionRelatoLesionado, origenLesionClinica, diasLesion, vieneAcompanado, nombreAcompLesionado, CalidadAcompLesionado, ObtenerListaind1, ObtenerListaind2, ObtenerListaind3, esPacienteGes, diagnosGes, diagnostico, EvolucionObsMed, tipoAlta, centroDerivacion, grupoDiagnostico, CatFinal, horaCatEgreso, EgresoInd, especialidad, confirmacioDiagnostica, realizarTto, Seguimiento, otraConsulta, consultaTextoEspecificar);
                                } else {
                                    console.log("cantidad de clicks hechos" + countClicks);
                                    alert("Debe clickear solo una vez, ya se esta procesando su ingreso.");
                                }
                            }



                        } else
                        if (Alcoholemia === true && (nFrasco < "0" || nFrasco === "")) {
                            window.parent.$("#loader").hide();
                            window.parent.$("html,body").animate({ scrollTop: 0 }, 600);
                            alert("Debe ingresar un valor mayor a 0.");
                            $("#nFrasco").css("border-color", "red");
                            countClicks = 0;
                        } else
                        if (Alcoholemia === false && (nFrasco > "0" || nFrasco === "" || nFrasco === "0")) {
                            window.parent.$("#loader").hide();
                            window.parent.$("html,body").animate({ scrollTop: 0 }, 600);
                            alert("No puede ingresar una cantidad de frasco si no ha seleccionado la alcoholemia");
                            $("#nFrasco").css("border-color", "red");
                            countClicks = 0;
                        } else {
                            countClicks = countClicks + 1;
                            if (countClicks === 1) {

                                if (esPacienteGes === false) {
                                    if (countClicks === 1) {
                                        countClicks = 0;
                                        registrarAtencionParaEgreso(conId, horaIngresoPantalla, fechaYHoraPantalla, pronMedicoLegal, Alcoholemia, nFrasco, Anamnesis, cabeza, detCabeza, torax, detTorax, abdomen, detAbdomen, pelvis, detPelvis, extSuperiores, detExtSup, extInferiores, detExtInf, exNeurologico, detExamNeuro, sospDiagnostica, ind1, ind2, ind3, radiografia, detRadio, ExamenSangre, detExSangre, ecg, perId, fechaSalida, RequiereTratamiento, requiereConstLesion, examenFisicoConst, imagenConst, exLabConst, otrosConst, origenLesionRelatoLesionado, origenLesionClinica, diasLesion, vieneAcompanado, nombreAcompLesionado, CalidadAcompLesionado, ObtenerListaind1, ObtenerListaind2, ObtenerListaind3, esPacienteGes, diagnosGes, diagnostico, EvolucionObsMed, tipoAlta, centroDerivacion, grupoDiagnostico, CatFinal, horaCatEgreso, EgresoInd, especialidad, confirmacioDiagnostica, realizarTto, Seguimiento, otraConsulta, consultaTextoEspecificar);
                                    } else {
                                        console.log("cantidad de clicks hechos" + countClicks);
                                        alert("Debe clickear solo una vez, ya se esta procesando su ingreso.");
                                    }
                                } else {
                                    if (validaEspisodioGes === 1) {
                                        if (countClicks === 1) {
                                            countClicks = 0;
                                            registrarAtencionParaEgreso(conId, horaIngresoPantalla, fechaYHoraPantalla, pronMedicoLegal, Alcoholemia, nFrasco, Anamnesis, cabeza, detCabeza, torax, detTorax, abdomen, detAbdomen, pelvis, detPelvis, extSuperiores, detExtSup, extInferiores, detExtInf, exNeurologico, detExamNeuro, sospDiagnostica, ind1, ind2, ind3, radiografia, detRadio, ExamenSangre, detExSangre, ecg, perId, fechaSalida, RequiereTratamiento, requiereConstLesion, examenFisicoConst, imagenConst, exLabConst, otrosConst, origenLesionRelatoLesionado, origenLesionClinica, diasLesion, vieneAcompanado, nombreAcompLesionado, CalidadAcompLesionado, ObtenerListaind1, ObtenerListaind2, ObtenerListaind3, esPacienteGes, diagnosGes, diagnostico, EvolucionObsMed, tipoAlta, centroDerivacion, grupoDiagnostico, CatFinal, horaCatEgreso, EgresoInd, especialidad, confirmacioDiagnostica, realizarTto, Seguimiento, otraConsulta, consultaTextoEspecificar);
                                        } else {
                                            console.log("cantidad de clicks hechos" + countClicks);
                                            alert("Debe clickear solo una vez, ya se esta procesando su ingreso.");
                                        }
                                    } else {
                                        alert("No se puede ingresar la atención, los datos no coinciden con la edad del paciente.")
                                        countClicks = 0;
                                    }
                                }
                            } else {
                                console.log("cantidad de clicks hechos" + countClicks);
                                alert("Debe clickear solo una vez, ya se esta procesando su ingreso.");
                            }
                        }
                    }
                } else {
                    window.parent.$("#loader").hide();
                    window.parent.$("html,body").animate({ scrollTop: 0 }, 600);
                    alert("Error al ingresar la atención del paciente, Favor Complete los campos en rojo.");
                    countClicks = 0;
                } // EN IF VALIDACION
            } //END ELSE VALOR REQUIERE TRATAMIENTO
        } else {
            // VALIDACION SI EL NO SE HA SELECCIONADO SI REQUIERE O NO TRATAMIENTO EL PACIENTE
            window.parent.$("#loader").hide();
            window.parent.$("html,body").animate({ scrollTop: 0 }, 600);
            alert("Error: Debe seleccionar si el paciente requiere o no Tratamiento.");
            countClicks = 0;
        } //END VALIDACION REQUIERE TRATAMIENTO

    });

    //INGRESA EL NSP
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

    $("#Aceptar").on("click", function() {
        var RequiereTratamiento = $("input:radio[name=requiereTto]:checked").val();
        // SI REQUIERE EL TRATAMIENTO DEBE LIBERAR AL PACIENTE
        if (RequiereTratamiento === "0") {
            var tab = $("#tabContent").val();
            var conId = $("#conId").val();
            var fechaHoy = $("#fechaHoy").val();
            var hora = window.parent.$("#reloj").val();
            var fechaHora = fechaHoy + " " + hora;
            var perId = window.parent.$("#perId").val();
            var carId = 3;
            obtenerValidacionIngresoPacientes(conId, tab, fechaHora, perId, carId);
        } else {
            //ACA GENERA EL DATO SAPU, POR ENDE NO DEBE GENERAR EL DESBLOQUEO DEL PACIENTE
            var tab = $("#tabContent").val();
            $(location).attr('href', "dashboard.php?tab=" + tab);
            window.parent.$("html,body").animate({ scrollTop: 0 }, 600);
        }
    });

    $("#volver").on("click", function() {
        var tab = $("#tabContent").val();
        var conId = $("#conId").val();
        var fechaHoy = $("#fechaHoy").val();
        var hora = window.parent.$("#reloj").val();
        var fechaHora = fechaHoy + " " + hora;
        var perId = window.parent.$("#perId").val();
        var carId = 3;
        obtenerValidacionIngresoPacientes(conId, tab, fechaHora, perId, carId);
    });


    //CONTADOR DE CARACTERES
    $("#Anamnesis").keyup(function() {
        var data = $("#Anamnesis").val().length;
        var maxLength = 900;
        var minlength = 0;
        var contador = (minlength + data);
        if (contador == 900) { contadorTexto = contador + '/' + maxLength; } else { contadorTexto = contador + '/' + maxLength; }
        document.getElementById("numAnamnesis").innerHTML = contadorTexto;
    });

    /******************************************************************************/
    $("#origenLesionRelatoLesionado").keyup(function() {
        contadorTexto = '';
        var data = $("#origenLesionRelatoLesionado").val().length;
        var maxLength = 700;
        var minlength = 0;
        var contador = (minlength + data);
        if (contador == 700) { contadorTexto = contador + '/' + maxLength; } else { contadorTexto = contador + '/' + maxLength; }
        document.getElementById("numRelatoLesion").innerHTML = contadorTexto;
    });

    $("#origenLesionClinica").keyup(function() {
        contadorTexto = '';
        var data = $("#origenLesionClinica").val().length;
        var maxLength = 700;
        var minlength = 0;
        var contador = (minlength + data);
        if (contador == 700) { contadorTexto = contador + '/' + maxLength; } else { contadorTexto = contador + '/' + maxLength; }
        document.getElementById("numRelatoClinico").innerHTML = contadorTexto;
    });

    /******************************************************************************/
    $("#sospDiagnostica").keyup(function() {
        contadorTexto = '';
        var data = $("#sospDiagnostica").val().length;
        var maxLength = 700;
        var minlength = 0;
        var contador = (minlength + data);
        if (contador == 700) { contadorTexto = contador + '/' + maxLength; } else { contadorTexto = contador + '/' + maxLength; }
        document.getElementById("numSospDiag").innerHTML = contadorTexto;
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


    /************************************* VALIDACIONES PARA EXAMEN FISICO CAMPOS DE TEXTO DE DESCRIPCION ** */
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

    $("#mostrarMas").on("click", function() {
        if (!recuadroDataVisible) {
            $("#recuadroData").show();
            recuadroDataVisible = true;
        } else {
            $("#recuadroData").hide();
            recuadroDataVisible = false;
        }
    });


    $("#ind1").keyup(function() {
        contadorTexto = '';
        var data = $("#ind1").val().length;
        var maxLength = 60;
        var minlength = 0;
        var contador = (minlength + data);
        if (contador == 60) { contadorTexto = contador + '/' + maxLength; } else { contadorTexto = contador + '/' + maxLength; }
        document.getElementById("numind1").innerHTML = contadorTexto;
    });

    $("#ind2").keyup(function() {
        contadorTexto = '';
        var data = $("#ind2").val().length;
        var maxLength = 60;
        var minlength = 0;
        var contador = (minlength + data);
        if (contador == 60) { contadorTexto = contador + '/' + maxLength; } else { contadorTexto = contador + '/' + maxLength; }
        document.getElementById("numind2").innerHTML = contadorTexto;
    });

    $("#ind3").keyup(function() {
        contadorTexto = '';
        var data = $("#ind3").val().length;
        var maxLength = 60;
        var minlength = 0;
        var contador = (minlength + data);
        if (contador == 60) { contadorTexto = contador + '/' + maxLength; } else { contadorTexto = contador + '/' + maxLength; }
        document.getElementById("numind3").innerHTML = contadorTexto;
    });

    /**************************************************************************************************************/
    $('input[name=GES]').change(function() {
        var esPacienteGes = $('input[name=GES]').prop('checked');
        if (esPacienteGes === true) {
            $('#diagnosGes').prop('disabled', false);
        } else {
            $('#diagnosGes').prop('disabled', true);
            $('select[name=diagnosGes]').val("0");
        }
    });

    $('input:radio[name=requiereTto]').change(function() {
        var valor = $("input:radio[name=requiereTto]:checked").val();
        $("#ingresarAtencion").show();
        $("#ingresarNsp").show();
        $("#nFrasco").css({ "border-color": "darkgray", "border-width": "1px" });
        $("#Anamnesis").css({ "border-color": "darkgray", "border-width": "1px" });
        $("#sospDiagnostica").css({ "border-color": "darkgray", "border-width": "1px" });
        $("#ind1").css({ "border-color": "darkgray", "border-width": "1px" });
        $("#diagnostico").css({ "border-color": "darkgray", "border-width": "1px" });
        $("#EvolucionObsMed").css({ "border-color": "darkgray", "border-width": "1px" });
        $("#tipoAlta").css({ "border-color": "darkgray", "border-width": "1px" });
        $("#centroDerivacion").css({ "border-color": "darkgray", "border-width": "1px" });
        $("#grupoDiagnostico").css({ "border-color": "darkgray", "border-width": "1px" });
        $("#fcDos").css({ "border-color": "darkgray", "border-width": "1px" });
        $("#frDos").css({ "border-color": "darkgray", "border-width": "1px" });
        $("#tempAxDos").css({ "border-color": "darkgray", "border-width": "1px" });
        $("#satODos").css({ "border-color": "darkgray", "border-width": "1px" });
        $("#EgresoInd").css({ "border-color": "darkgray", "border-width": "1px" });
        $("input[name=requiereTto]").next().css('color', 'darkgray', 'font-weight', 'unset');
        $("input[name=CatFinal]").next().css('color', 'darkgray', 'font-weight', 'unset');

        //se añaden las validaciones para en cualquier caso ocultar este marco del evento
        $('select[name=centroDerivacion]').val("0");
        $("#centroDeriv").hide();
        $("#sospechaProblemaSaludAuge").hide();
        $("#subproblemaSaludAuge").hide();
        $("#EspecialidadAtencion").hide();
        $("#seEnviaConsultaPara").hide();
        // SI SE SELECCIONA "SI"
        if (valor === "1") {
            $("#MostrarPanelEgreso").hide();
            $("#SegundoCuerpoEgreso").hide();
            $("#MostrarManejoYtto").show();
            $("#diagnostico").val("");
            $("#EvolucionObsMed").val("");
            $("#EgresoInd").val("");
            $('select[name=tipoAlta]').val("0");
            $("#especialidad").val("");
            $('input[name=confirmacioDiagnostica]').prop('checked', false);
            $('input[name=realizarTto]').prop('checked', false);
            $('input[name=Seguimiento]').prop('checked', false);
            $('input[name=otraConsulta]').prop('checked', false);
            $("#consultaTextoEspecificar").val("");
            $('select[name=centroDerivacion]').val("0");
            $('select[name=grupoDiagnostico]').val("0");
            $('input:radio[name=CatFinal]:checked', false).val("");
            $("#horaCatEgreso").val("");

            $("#numDiagnostEgreso").text("0/700");
            $("#numEvoluYObs").text("0/700");
        } else {
            // EN CASO DE QUE SEA "NO"
            $("#MostrarPanelEgreso").show();
            $("#SegundoCuerpoEgreso").show();
            $("#MostrarManejoYtto").hide();
            $("#ind1").val("");
            $("#ind2").val("");
            $("#ind3").val("");
            $('select[name=ObtenerListaind1]').val("0");
            $('select[name=ObtenerListaind2]').val("0");
            $('select[name=ObtenerListaind3]').val("0");
            $('input[name=radiografia]').prop('checked', false);
            $("#detRadio").val("");
            $('input[name=ExamenSangre]').prop('checked', false);
            $("#detExSangre").val("");
            $('input[name=ecg]').prop('checked', false);

            $("#numind1").text("0/60");
            $("#numind2").text("0/60");
            $("#numind3").text("0/60");
        }
    });

    $('input:radio[name=vieneAcompanado]').change(function() {
        var valor = $("input:radio[name=vieneAcompanado]:checked").val();
        // SI ES SI
        if (valor === "1") {
            $("#nombreAcompLesionado").prop('disabled', false);
            $("#CalidadAcompLesionado").prop('disabled', false);
        } else {
            $("#nombreAcompLesionado").prop('disabled', true);
            $("#CalidadAcompLesionado").prop('disabled', true);
            $("#nombreAcompLesionado").val("");
            $("#CalidadAcompLesionado").val("");
        }
    });

    $('input:radio[name=requiereConstLesion]').change(function() {
        var valor = $("input:radio[name=requiereConstLesion]:checked").val();
        // SI ES SI
        if (valor === "1") {
            $("#constatacionDeLesionesUno").show();
            $("#constatacionDeLesionesDos").show();
        } else {
            $("#constatacionDeLesionesUno").hide();
            $("#constatacionDeLesionesDos").hide();
            $('input[name=examenFisicoConst]').prop('checked', false);
            $('input[name=imagenConst]').prop('checked', false);
            $('input[name=exLabConst]').prop('checked', false);
            $('input[name=otrosConst]').prop('checked', false);
            $("#origenLesionRelatoLesionado").val("");
            $("#origenLesionClinica").val("");
            $("#diasLesion").val("");
            document.querySelector('#vieneAcompanadoNo').checked = true;
            $("#nombreAcompLesionado").prop('disabled', true);
            $("#CalidadAcompLesionado").prop('disabled', true);
            $("#nombreAcompLesionado").val("");
            $("#CalidadAcompLesionado").val("");
            $('select[name=pronMedicoLegal]').val("0");
            $("#numRelatoLesion").text("0/700");
            $("#numRelatoClinico").text("0/700");
        }
    });

    //VALIDACIONES DEL EGRESO
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
            $("#numconsultaTextoEspecificar").text("0/700");
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

    $("#EgresoInd").keyup(function() {
        contadorTexto = '';
        var data = $("#EgresoInd").val().length;
        var maxLength = 700;
        var minlength = 0;
        var contador = (minlength + data);
        if (contador == 700) { contadorTexto = contador + '/' + maxLength; } else { contadorTexto = contador + '/' + maxLength; }
        document.getElementById("numEgresoInd").innerHTML = contadorTexto;
    });

    $("#diasLesion").on("keydown", function(e) {
        if (!BlockKeys(/[0-9]/, e.key)) { return false; }
    });

    $("#consultaTextoEspecificar").keyup(function() {
        contadorTexto = '';
        var data = $("#consultaTextoEspecificar").val().length;
        var maxLength = 700;
        var minlength = 0;
        var contador = (minlength + data);
        if (contador == 700) { contadorTexto = contador + '/' + maxLength; } else { contadorTexto = contador + '/' + maxLength; }
        document.getElementById("numconsultaTextoEspecificar").innerHTML = contadorTexto;
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

    $("input:radio[name=CatFinal]").change(function() {
        var valor = $("input:radio[name=CatFinal]:checked").val();
        $("#horaCatEgreso").val('');
        switch (valor) {
            case "C1":
                //$("#horaCatEgreso").empty();
                var reloj = window.parent.$("#reloj").val();
                //$("#horaCatEgreso").val(reloj);
                break;
            case "C2":
                //$("#horaCatEgreso").empty();
                var reloj = window.parent.$("#reloj").val();
                //$("#horaCatEgreso").val(reloj);
                break;
            case "C3":
                //$("#horaCatEgreso").empty();
                var reloj = window.parent.$("#reloj").val();
                //$("#horaCatEgreso").val(reloj);
                break;
            case "C4":
                //$("#horaCatEgreso").empty();
                var reloj = window.parent.$("#reloj").val();
                //$("#horaCatEgreso").val(reloj);
                break;
            case "C5":
                //$("#horaCatEgreso").empty();
                var reloj = window.parent.$("#reloj").val();
                //$("#horaCatEgreso").val(reloj);
                break;
            default:
                alert("NO SE PUDO CATEGORIZAR AL PACIENTE.");
                break;
        } // END BREAK
        $("#horaCatEgreso").val(reloj);

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
                alert("El valor ingresado no puede ser mayor a 10");
                $("#eglasgowDos").val("");
            }
        }
    });

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


    $("#AceptarEgreso").on("click", function() {
        var tab = $("#tabContent").val();
        $(location).attr('href', "dashboard.php?tab=" + tab);
    });

    $('#nFrasco').on('input', function() {
        this.value = this.value.replace(/[^0-9]/g, '');
    });

    //VALIDACIONES SIN CARACTERES RAROS QUE BOTEN AL SISTEMA 
    $('input:text, textarea').on('keypress', function(e) {
        if (e.which !== 39 && e.which !== 47 && e.which !== 92 && e.which !== 64 && e.which !== 124 && e.which !== 172 && e.which !== 61 && e.which !== 95 && e.which !== 176 &&
            e.which !== 123 && e.which !== 125 && e.which !== 91 && e.which !== 93 && e.which !== 191 && e.which !== 161 && e.which !== 63 && e.which !== 34) {
            return true;
        } else {
            return false;
        }
    });

});

function BlockKeys(regexPermitido, key) {
    if (key != "Backspace" && key != " " && key != "Tab" && !key.match(regexPermitido)) {
        return false; //dont display key if it is a number
    }
    return true;
}



function validacionGes(esPacienteGes, diagnosGes, edadPaciente) {
    let calcEdadPaciente = 0;
    if (edadPaciente !== "") {
        var edad = edadPaciente.split("/");
        const edadPaci = edad[2];
        var hoy = new Date();
        var añoHoy = hoy.getFullYear();
        calcEdadPaciente = añoHoy - edadPaci;

        //IRA BAJA
        if (calcEdadPaciente < 5 && esPacienteGes === true && diagnosGes === "1") {
            valdiaCampos(esPacienteGes, diagnosGes);
            return 1;
        } 

        } else
        if (calcEdadPaciente <= 5 && esPacienteGes === false && diagnosGes === "1") {
            valdiaCampos(esPacienteGes, diagnosGes);
            return 0;
        } else
        if (calcEdadPaciente >= 5.0 && esPacienteGes === true && diagnosGes === "1") {
            valdiaCampos(esPacienteGes, diagnosGes);
            return 0;
        } else
        if (calcEdadPaciente >= 5 && esPacienteGes === false && diagnosGes !== "0") {
            return 1;
        } else
        //  PACIENTES MAYOR A 65 AÑOS
        if (calcEdadPaciente >= 65 && esPacienteGes === true && diagnosGes === "2") {
            valdiaCampos(esPacienteGes, diagnosGes)
            return 1;
        } else
        if (calcEdadPaciente >= 65 && esPacienteGes === true && diagnosGes !== "2") {
            valdiaCampos(esPacienteGes, diagnosGes)
            return 0;
        } else
        if (calcEdadPaciente >= 65 && esPacienteGes === false && diagnosGes === "2") {
            valdiaCampos(esPacienteGes, diagnosGes)
            return 0;
        } else
        if (calcEdadPaciente < 65 && esPacienteGes === true && diagnosGes === "2") {
            valdiaCampos(esPacienteGes, diagnosGes)
            return 0;
        } else
        if (calcEdadPaciente < 65 && esPacienteGes === false && diagnosGes === "0") {
            return 1;
        } else
        if ((calcEdadPaciente >= 5 && calcEdadPaciente < 65) && esPacienteGes === false && diagnosGes === "0") {
            return 1;
        } else {
            valdiaCampos(esPacienteGes, diagnosGes)
            return 0;
        }
    } else {
        valdiaCampos(esPacienteGes, diagnosGes)
        return 0;
    }

}

function valdiaCampos(esPacienteGes, diagnosGes) {
    if (esPacienteGes === undefined) { $("input[name=esPacienteGes]").next().css('color', 'red', 'font-weight', 'bold'); } else { $("input[name=esPacienteGes]").next().css('color', 'green', 'font-weight', 'unset'); }
    if (diagnosGes === "0") { $("#diagnosGes").css("border-color", "red"); } else { $("#diagnosGes").css("border-color", "green"); }

    //return alert("No se puede ingresar la atención, los datos no coinciden con la edad del paciente.")
}