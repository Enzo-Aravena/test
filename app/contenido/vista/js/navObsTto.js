let countClicks = 0;
let recuadroDataVisible = false;
let valorsesion = 0;
let centroTrabajo = window.parent.$("#centroTrabajo").val();
let campos = "";
let select = "";
let contadorTexto = '';
let tipoControl = 0;
$(document).ready(function() {
    inicializaDatos();
    var test = location.search.replace('?', '').split('&');
    var parameter = test[0];
    var radio = parameter.split('=');
    var conId = radio[1];
    var parameter = test[1];
    var tab = parameter.split('=');
    var tab = tab[1];
    $("#tabContent").val(tab);
    $("#conId").val(conId);

    cargarFechaInicialPantalla();

    let tiempoIni = $("#horaSistema").val();
    let time = tiempoIni.split(":");
    console.log("tiempoInicioPantall :" + time[1]);

    if (valorsesion == 0) { cargarListaMotivo(); }
    if (valorsesion == 0) { cargarListaProcedimientos(); }
    if (valorsesion == 0) { cargarDatosPaciente(conId); }
    if (valorsesion == "-1") { FinalizarSesion(); }

    switch (centroTrabajo) {
        case "1":
            title = "Observación y Tratamiento Carol Urzúa";
            break;
        case "2":
            title = "Observación y Tratamiento La Faena";
            break;
        case "3":
            title = "Observación y Tratamiento San Luis";
            break;
        case "4":
            title = "Observación y Tratamiento Lo Hermida";
            break;
        case "5":
            title = "Observación y Tratamiento C. Silva Henriquez";
            break;
        case "8":
            title = "Observación y Tratamiento SAR Carol Urzúa";
            break;
        case "9":
            title = "Observación y Tratamiento SAPU La Faena";
            break;
        case "10":
            title = "Observación y Tratamiento SAPU Lo Hermida";
            break;
        case "11":
            title = "Observación y Tratamiento SAPU San Luis";
            break;
        case "12":
            title = "Observación y Tratamiento P. Gerardo Whelan";
            break;
        case "13":
            title = "Observación y Tratamiento Pacientes Las Torres";
            break;
    }
    window.parent.$("#tituloPestaña").text(title);

    //GUARDA EL PROCEDIMIENTO
    $("#IngresarProcedimiento").on("click", function() {
        var conId = $("#conId").val();
        var fechaYHoraPantalla = $("#fechaYhoraIngresoSistema").val();
        var Realizado1 = $('input[name=Realizado1]').prop('checked');
        var Realizado2 = $('input[name=Realizado2]').prop('checked');
        var Realizado3 = $('input[name=Realizado3]').prop('checked');
        var indDos1 = $("#indDos1").val();
        var indDos2 = $("#indDos2").val();
        var indDos3 = $("#indDos3").val();
        var RealizadoIndDos1 = $('input[name=RealizadoIndDos1]').prop('checked');
        var RealizadoIndDos2 = $('input[name=RealizadoIndDos2]').prop('checked');
        var RealizadoIndDos3 = $('input[name=RealizadoIndDos3]').prop('checked');
        var indTres1 = $("#indTres1").val();
        var indTres2 = $("#indTres2").val();
        var indTres3 = $("#indTres3").val();
        var RealizadoIndTres1 = $('input[name=RealizadoIndTres1]').prop('checked');
        var RealizadoIndTres2 = $('input[name=RealizadoIndTres2]').prop('checked');
        var RealizadoIndTres3 = $('input[name=RealizadoIndTres3]').prop('checked');
        var horaControl1 = $("#horaControl1").val();
        var horaControl2 = $("#horaControl2").val();
        var horaControl3 = $("#horaControl3").val();
        var horaControl4 = $("#horaControl4").val();
        var horaControl5 = $("#horaControl5").val();
        var horaControl6 = $("#horaControl6").val();
        var fcCtr1 = $("#fcCtr1").val();
        var fcCtr2 = $("#fcCtr2").val();
        var fcCtr3 = $("#fcCtr3").val();
        var fcCtr4 = $("#fcCtr4").val();
        var fcCtr5 = $("#fcCtr5").val();
        var fcCtr6 = $("#fcCtr6").val();
        var frCtr1 = $("#frCtr1").val();
        var frCtr2 = $("#frCtr2").val();
        var frCtr3 = $("#frCtr3").val();
        var frCtr4 = $("#frCtr4").val();
        var frCtr5 = $("#frCtr5").val();
        var frCtr6 = $("#frCtr6").val();
        var temAxCtr1 = $("#temAxCtr1").val();
        var temAxCtr2 = $("#temAxCtr2").val();
        var temAxCtr3 = $("#temAxCtr3").val();
        var temAxCtr4 = $("#temAxCtr4").val();
        var temAxCtr5 = $("#temAxCtr5").val();
        var temAxCtr6 = $("#temAxCtr6").val();
        var satOCtr1 = $("#satOCtr1").val();
        var satOCtr2 = $("#satOCtr2").val();
        var satOCtr3 = $("#satOCtr3").val();
        var satOCtr4 = $("#satOCtr4").val();
        var satOCtr5 = $("#satOCtr5").val();
        var satOCtr6 = $("#satOCtr6").val();
        var hgtCtr1 = $("#hgtCtr1").val();
        var hgtCtr2 = $("#hgtCtr2").val();
        var hgtCtr3 = $("#hgtCtr3").val();
        var hgtCtr4 = $("#hgtCtr4").val();
        var hgtCtr5 = $("#hgtCtr5").val();
        var hgtCtr6 = $("#hgtCtr6").val();
        var psCtr1 = $("#psCtr1").val();
        var psCtr2 = $("#psCtr2").val();
        var psCtr3 = $("#psCtr3").val();
        var psCtr4 = $("#psCtr4").val();
        var psCtr5 = $("#psCtr5").val();
        var psCtr6 = $("#psCtr6").val();
        var pdCtr1 = $("#pdCtr1").val();
        var pdCtr2 = $("#pdCtr2").val();
        var pdCtr3 = $("#pdCtr3").val();
        var pdCtr4 = $("#pdCtr4").val();
        var pdCtr5 = $("#pdCtr5").val();
        var pdCtr6 = $("#pdCtr6").val();
        var eGlsCrt1 = $("#eGlsCrt1").val();
        var eGlsCrt2 = $("#eGlsCrt2").val();
        var eGlsCrt3 = $("#eGlsCrt3").val();
        var eGlsCrt4 = $("#eGlsCrt4").val();
        var eGlsCrt5 = $("#eGlsCrt5").val();
        var eGlsCrt6 = $("#eGlsCrt6").val();
        var evaCtr1 = $("#evaCtr1").val();
        var evaCtr2 = $("#evaCtr2").val();
        var evaCtr3 = $("#evaCtr3").val();
        var evaCtr4 = $("#evaCtr4").val();
        var evaCtr5 = $("#evaCtr5").val();
        var evaCtr6 = $("#evaCtr6").val();
        var ObservacionesTto = $("#ObservacionesTto").val();
        var perId = window.parent.$("#perId").val();

        //NUEVOS CAMPOS MANEJO Y TTO A INGRESAR PARA MODIFICAR
        var ObtenerListaind1 = $('select[name=ObtenerListaind1]').val();
        var ObtenerListaind2 = $('select[name=ObtenerListaind2]').val();
        var ObtenerListaind3 = $('select[name=ObtenerListaind3]').val();

        var ObtenerListaindDos1 = $('select[name=ObtenerListaindDos1]').val();
        var ObtenerListaindDos2 = $('select[name=ObtenerListaindDos2]').val();
        var ObtenerListaindDos3 = $('select[name=ObtenerListaindDos3]').val();
        var ObtenerListaindTres1 = $('select[name=ObtenerListaindTres1]').val();
        var ObtenerListaindTres2 = $('select[name=ObtenerListaindTres2]').val();
        var ObtenerListaindTres3 = $('select[name=ObtenerListaindTres3]').val();

        var fechaSalida = "";
        campos = "";
        if (fcCtr2 === "" && fcCtr3 === "" && fcCtr4 === "" && fcCtr5 === "" && fcCtr6 === "" && hgtCtr2 !== "" && evaCtr2 !== "") {
            //SI NO SE HA DIGITADO NADA, INGRESAR EL DATO
            countClicks = countClicks + 1;
            if (countClicks === 1) {
                CrearProcedimientoYtto(conId, fechaYHoraPantalla, Realizado1, Realizado2, Realizado3, indDos1, indDos2, indDos3, RealizadoIndDos1, RealizadoIndDos2, RealizadoIndDos3, indTres1, indTres2, indTres3, RealizadoIndTres1, RealizadoIndTres2, RealizadoIndTres3, horaControl1, horaControl2, horaControl3, horaControl4, horaControl5, horaControl6, fcCtr1, fcCtr2, fcCtr3, fcCtr4, fcCtr5, fcCtr6, frCtr1, frCtr2, frCtr3, frCtr4, frCtr5, frCtr6, temAxCtr1, temAxCtr2, temAxCtr3, temAxCtr4, temAxCtr5, temAxCtr6, satOCtr1, satOCtr2, satOCtr3, satOCtr4, satOCtr5, satOCtr6, hgtCtr1, hgtCtr2, hgtCtr3, hgtCtr4, hgtCtr5, hgtCtr6, psCtr1, psCtr2, psCtr3, psCtr4, psCtr5, psCtr6, pdCtr1, pdCtr2, pdCtr3, pdCtr4, pdCtr5, pdCtr6, eGlsCrt1, eGlsCrt2, eGlsCrt3, eGlsCrt4, eGlsCrt5, eGlsCrt6, evaCtr1, evaCtr2, evaCtr3, evaCtr4, evaCtr5, evaCtr6, ObservacionesTto, perId, fechaSalida, ObtenerListaindDos1, ObtenerListaindDos2, ObtenerListaindDos3, ObtenerListaindTres1, ObtenerListaindTres2, ObtenerListaindTres3);
                //CrearProcedimientoYttoModificado(conId, fechaYHoraPantalla, ObtenerListaind1, ObtenerListaind2, ObtenerListaind3, Realizado1, Realizado2, Realizado3, indDos1, indDos2, indDos3, RealizadoIndDos1, RealizadoIndDos2, RealizadoIndDos3, indTres1, indTres2, indTres3, RealizadoIndTres1, RealizadoIndTres2, RealizadoIndTres3, horaControl1, horaControl2, horaControl3, horaControl4, horaControl5, horaControl6, fcCtr1, fcCtr2, fcCtr3, fcCtr4, fcCtr5, fcCtr6, frCtr1, frCtr2, frCtr3, frCtr4, frCtr5, frCtr6, temAxCtr1, temAxCtr2, temAxCtr3, temAxCtr4, temAxCtr5, temAxCtr6, satOCtr1, satOCtr2, satOCtr3, satOCtr4, satOCtr5, satOCtr6, hgtCtr1, hgtCtr2, hgtCtr3, hgtCtr4, hgtCtr5, hgtCtr6, psCtr1, psCtr2, psCtr3, psCtr4, psCtr5, psCtr6, pdCtr1, pdCtr2, pdCtr3, pdCtr4, pdCtr5, pdCtr6, eGlsCrt1, eGlsCrt2, eGlsCrt3, eGlsCrt4, eGlsCrt5, eGlsCrt6, evaCtr1, evaCtr2, evaCtr3, evaCtr4, evaCtr5, evaCtr6, ObservacionesTto, perId, fechaSalida, ObtenerListaindDos1, ObtenerListaindDos2, ObtenerListaindDos3, ObtenerListaindTres1, ObtenerListaindTres2, ObtenerListaindTres3);
                console.log("se resetea contador de " + countClicks);
            } else {
                console.log("cantidad de clicks hechos" + countClicks);
                alert("Debe clickear solo una vez, ya se esta procesando su ingreso.")
            }
        } else {
            //VALIDACION CONTROL 2
            if (document.getElementById('fcCtr2').disabled === false && document.getElementById('fcCtr3').disabled === true && document.getElementById('fcCtr4').disabled === true &&
                document.getElementById('fcCtr5').disabled === true && document.getElementById('fcCtr6').disabled === true) {
                if (fcCtr2 === "" && frCtr2 === "" && temAxCtr2 === "" && satOCtr2 === "" && psCtr2 === "" && pdCtr2 === "" && eGlsCrt2 === "") {
                    if (hgtCtr2 !== "" || evaCtr2 !== "") {
                        validaCamposCheck(2, fcCtr2, frCtr2, temAxCtr2, satOCtr2, psCtr2, pdCtr2, hgtCtr2, evaCtr2, eGlsCrt2);
                        alert("No se puede ingresar el registro,debe llenar los campos obligatorios para ingresar el procedimiento");
                        countClicks = 0;
                    } else {
                        countClicks = countClicks + 1;
                        if (countClicks === 1) {
                            CrearProcedimientoYtto(conId, fechaYHoraPantalla, Realizado1, Realizado2, Realizado3, indDos1, indDos2, indDos3, RealizadoIndDos1, RealizadoIndDos2, RealizadoIndDos3, indTres1, indTres2, indTres3, RealizadoIndTres1, RealizadoIndTres2, RealizadoIndTres3, horaControl1, horaControl2, horaControl3, horaControl4, horaControl5, horaControl6, fcCtr1, fcCtr2, fcCtr3, fcCtr4, fcCtr5, fcCtr6, frCtr1, frCtr2, frCtr3, frCtr4, frCtr5, frCtr6, temAxCtr1, temAxCtr2, temAxCtr3, temAxCtr4, temAxCtr5, temAxCtr6, satOCtr1, satOCtr2, satOCtr3, satOCtr4, satOCtr5, satOCtr6, hgtCtr1, hgtCtr2, hgtCtr3, hgtCtr4, hgtCtr5, hgtCtr6, psCtr1, psCtr2, psCtr3, psCtr4, psCtr5, psCtr6, pdCtr1, pdCtr2, pdCtr3, pdCtr4, pdCtr5, pdCtr6, eGlsCrt1, eGlsCrt2, eGlsCrt3, eGlsCrt4, eGlsCrt5, eGlsCrt6, evaCtr1, evaCtr2, evaCtr3, evaCtr4, evaCtr5, evaCtr6, ObservacionesTto, perId, fechaSalida, ObtenerListaindDos1, ObtenerListaindDos2, ObtenerListaindDos3, ObtenerListaindTres1, ObtenerListaindTres2, ObtenerListaindTres3);
                            //CrearProcedimientoYttoModificado(conId, fechaYHoraPantalla, ObtenerListaind1, ObtenerListaind2, ObtenerListaind3, Realizado1, Realizado2, Realizado3, indDos1, indDos2, indDos3, RealizadoIndDos1, RealizadoIndDos2, RealizadoIndDos3, indTres1, indTres2, indTres3, RealizadoIndTres1, RealizadoIndTres2, RealizadoIndTres3, horaControl1, horaControl2, horaControl3, horaControl4, horaControl5, horaControl6, fcCtr1, fcCtr2, fcCtr3, fcCtr4, fcCtr5, fcCtr6, frCtr1, frCtr2, frCtr3, frCtr4, frCtr5, frCtr6, temAxCtr1, temAxCtr2, temAxCtr3, temAxCtr4, temAxCtr5, temAxCtr6, satOCtr1, satOCtr2, satOCtr3, satOCtr4, satOCtr5, satOCtr6, hgtCtr1, hgtCtr2, hgtCtr3, hgtCtr4, hgtCtr5, hgtCtr6, psCtr1, psCtr2, psCtr3, psCtr4, psCtr5, psCtr6, pdCtr1, pdCtr2, pdCtr3, pdCtr4, pdCtr5, pdCtr6, eGlsCrt1, eGlsCrt2, eGlsCrt3, eGlsCrt4, eGlsCrt5, eGlsCrt6, evaCtr1, evaCtr2, evaCtr3, evaCtr4, evaCtr5, evaCtr6, ObservacionesTto, perId, fechaSalida, ObtenerListaindDos1, ObtenerListaindDos2, ObtenerListaindDos3, ObtenerListaindTres1, ObtenerListaindTres2, ObtenerListaindTres3);
                            console.log("se resetea contador de " + countClicks);
                        } else {
                            console.log("cantidad de clicks hechos" + countClicks);
                            alert("Debe clickear solo una vez, ya se esta procesando su ingreso.")
                        }
                    }
                } else {
                    campos = validaCampos(2, fcCtr2, frCtr2, temAxCtr2, satOCtr2, psCtr2, pdCtr2, hgtCtr2, evaCtr2, eGlsCrt2);
                    if (campos === true) {
                        countClicks = countClicks + 1;
                        CrearProcedimientoYtto(conId, fechaYHoraPantalla, Realizado1, Realizado2, Realizado3, indDos1, indDos2, indDos3, RealizadoIndDos1, RealizadoIndDos2, RealizadoIndDos3, indTres1, indTres2, indTres3, RealizadoIndTres1, RealizadoIndTres2, RealizadoIndTres3, horaControl1, horaControl2, horaControl3, horaControl4, horaControl5, horaControl6, fcCtr1, fcCtr2, fcCtr3, fcCtr4, fcCtr5, fcCtr6, frCtr1, frCtr2, frCtr3, frCtr4, frCtr5, frCtr6, temAxCtr1, temAxCtr2, temAxCtr3, temAxCtr4, temAxCtr5, temAxCtr6, satOCtr1, satOCtr2, satOCtr3, satOCtr4, satOCtr5, satOCtr6, hgtCtr1, hgtCtr2, hgtCtr3, hgtCtr4, hgtCtr5, hgtCtr6, psCtr1, psCtr2, psCtr3, psCtr4, psCtr5, psCtr6, pdCtr1, pdCtr2, pdCtr3, pdCtr4, pdCtr5, pdCtr6, eGlsCrt1, eGlsCrt2, eGlsCrt3, eGlsCrt4, eGlsCrt5, eGlsCrt6, evaCtr1, evaCtr2, evaCtr3, evaCtr4, evaCtr5, evaCtr6, ObservacionesTto, perId, fechaSalida, ObtenerListaindDos1, ObtenerListaindDos2, ObtenerListaindDos3, ObtenerListaindTres1, ObtenerListaindTres2, ObtenerListaindTres3);
                        //CrearProcedimientoYttoModificado(conId, fechaYHoraPantalla, ObtenerListaind1, ObtenerListaind2, ObtenerListaind3, Realizado1, Realizado2, Realizado3, indDos1, indDos2, indDos3, RealizadoIndDos1, RealizadoIndDos2, RealizadoIndDos3, indTres1, indTres2, indTres3, RealizadoIndTres1, RealizadoIndTres2, RealizadoIndTres3, horaControl1, horaControl2, horaControl3, horaControl4, horaControl5, horaControl6, fcCtr1, fcCtr2, fcCtr3, fcCtr4, fcCtr5, fcCtr6, frCtr1, frCtr2, frCtr3, frCtr4, frCtr5, frCtr6, temAxCtr1, temAxCtr2, temAxCtr3, temAxCtr4, temAxCtr5, temAxCtr6, satOCtr1, satOCtr2, satOCtr3, satOCtr4, satOCtr5, satOCtr6, hgtCtr1, hgtCtr2, hgtCtr3, hgtCtr4, hgtCtr5, hgtCtr6, psCtr1, psCtr2, psCtr3, psCtr4, psCtr5, psCtr6, pdCtr1, pdCtr2, pdCtr3, pdCtr4, pdCtr5, pdCtr6, eGlsCrt1, eGlsCrt2, eGlsCrt3, eGlsCrt4, eGlsCrt5, eGlsCrt6, evaCtr1, evaCtr2, evaCtr3, evaCtr4, evaCtr5, evaCtr6, ObservacionesTto, perId, fechaSalida, ObtenerListaindDos1, ObtenerListaindDos2, ObtenerListaindDos3, ObtenerListaindTres1, ObtenerListaindTres2, ObtenerListaindTres3);
                    }
                }
            } else
            //VALIDACION CONTROL 3
            if (document.getElementById('fcCtr2').disabled === true && document.getElementById('fcCtr3').disabled === false && document.getElementById('fcCtr4').disabled === true &&
                document.getElementById('fcCtr5').disabled === true && document.getElementById('fcCtr6').disabled === true) {
                if (fcCtr3 === "" && frCtr3 === "" && temAxCtr3 === "" && satOCtr3 === "" && psCtr3 === "" && pdCtr3 === "" && eGlsCrt3 === "") {
                    if (hgtCtr3 !== "" || evaCtr3 !== "") {
                        validaCamposCheck(3, fcCtr3, frCtr3, temAxCtr3, satOCtr3, psCtr3, pdCtr3, hgtCtr3, evaCtr3, eGlsCrt3);
                        alert("No se puede ingresar el registro,debe llenar los campos obligatorios para ingresar el procedimiento");
                        countClicks = 0;
                    } else {
                        countClicks = countClicks + 1;
                        if (countClicks === 1) {
                            CrearProcedimientoYtto(conId, fechaYHoraPantalla, Realizado1, Realizado2, Realizado3, indDos1, indDos2, indDos3, RealizadoIndDos1, RealizadoIndDos2, RealizadoIndDos3, indTres1, indTres2, indTres3, RealizadoIndTres1, RealizadoIndTres2, RealizadoIndTres3, horaControl1, horaControl2, horaControl3, horaControl4, horaControl5, horaControl6, fcCtr1, fcCtr2, fcCtr3, fcCtr4, fcCtr5, fcCtr6, frCtr1, frCtr2, frCtr3, frCtr4, frCtr5, frCtr6, temAxCtr1, temAxCtr2, temAxCtr3, temAxCtr4, temAxCtr5, temAxCtr6, satOCtr1, satOCtr2, satOCtr3, satOCtr4, satOCtr5, satOCtr6, hgtCtr1, hgtCtr2, hgtCtr3, hgtCtr4, hgtCtr5, hgtCtr6, psCtr1, psCtr2, psCtr3, psCtr4, psCtr5, psCtr6, pdCtr1, pdCtr2, pdCtr3, pdCtr4, pdCtr5, pdCtr6, eGlsCrt1, eGlsCrt2, eGlsCrt3, eGlsCrt4, eGlsCrt5, eGlsCrt6, evaCtr1, evaCtr2, evaCtr3, evaCtr4, evaCtr5, evaCtr6, ObservacionesTto, perId, fechaSalida, ObtenerListaindDos1, ObtenerListaindDos2, ObtenerListaindDos3, ObtenerListaindTres1, ObtenerListaindTres2, ObtenerListaindTres3);
                            //CrearProcedimientoYttoModificado(conId, fechaYHoraPantalla, ObtenerListaind1, ObtenerListaind2, ObtenerListaind3, Realizado1, Realizado2, Realizado3, indDos1, indDos2, indDos3, RealizadoIndDos1, RealizadoIndDos2, RealizadoIndDos3, indTres1, indTres2, indTres3, RealizadoIndTres1, RealizadoIndTres2, RealizadoIndTres3, horaControl1, horaControl2, horaControl3, horaControl4, horaControl5, horaControl6, fcCtr1, fcCtr2, fcCtr3, fcCtr4, fcCtr5, fcCtr6, frCtr1, frCtr2, frCtr3, frCtr4, frCtr5, frCtr6, temAxCtr1, temAxCtr2, temAxCtr3, temAxCtr4, temAxCtr5, temAxCtr6, satOCtr1, satOCtr2, satOCtr3, satOCtr4, satOCtr5, satOCtr6, hgtCtr1, hgtCtr2, hgtCtr3, hgtCtr4, hgtCtr5, hgtCtr6, psCtr1, psCtr2, psCtr3, psCtr4, psCtr5, psCtr6, pdCtr1, pdCtr2, pdCtr3, pdCtr4, pdCtr5, pdCtr6, eGlsCrt1, eGlsCrt2, eGlsCrt3, eGlsCrt4, eGlsCrt5, eGlsCrt6, evaCtr1, evaCtr2, evaCtr3, evaCtr4, evaCtr5, evaCtr6, ObservacionesTto, perId, fechaSalida, ObtenerListaindDos1, ObtenerListaindDos2, ObtenerListaindDos3, ObtenerListaindTres1, ObtenerListaindTres2, ObtenerListaindTres3);
                            console.log("se resetea contador de " + countClicks);
                        } else {
                            console.log("cantidad de clicks hechos" + countClicks);
                            alert("Debe clickear solo una vez, ya se esta procesando su ingreso.")
                        }
                    }
                } else {
                    campos = validaCampos(3, fcCtr3, frCtr3, temAxCtr3, satOCtr3, psCtr3, pdCtr3, hgtCtr3, evaCtr3, eGlsCrt3);
                    if (campos === true) {
                        countClicks = countClicks + 1;
                        CrearProcedimientoYtto(conId, fechaYHoraPantalla, Realizado1, Realizado2, Realizado3, indDos1, indDos2, indDos3, RealizadoIndDos1, RealizadoIndDos2, RealizadoIndDos3, indTres1, indTres2, indTres3, RealizadoIndTres1, RealizadoIndTres2, RealizadoIndTres3, horaControl1, horaControl2, horaControl3, horaControl4, horaControl5, horaControl6, fcCtr1, fcCtr2, fcCtr3, fcCtr4, fcCtr5, fcCtr6, frCtr1, frCtr2, frCtr3, frCtr4, frCtr5, frCtr6, temAxCtr1, temAxCtr2, temAxCtr3, temAxCtr4, temAxCtr5, temAxCtr6, satOCtr1, satOCtr2, satOCtr3, satOCtr4, satOCtr5, satOCtr6, hgtCtr1, hgtCtr2, hgtCtr3, hgtCtr4, hgtCtr5, hgtCtr6, psCtr1, psCtr2, psCtr3, psCtr4, psCtr5, psCtr6, pdCtr1, pdCtr2, pdCtr3, pdCtr4, pdCtr5, pdCtr6, eGlsCrt1, eGlsCrt2, eGlsCrt3, eGlsCrt4, eGlsCrt5, eGlsCrt6, evaCtr1, evaCtr2, evaCtr3, evaCtr4, evaCtr5, evaCtr6, ObservacionesTto, perId, fechaSalida, ObtenerListaindDos1, ObtenerListaindDos2, ObtenerListaindDos3, ObtenerListaindTres1, ObtenerListaindTres2, ObtenerListaindTres3);
                        //CrearProcedimientoYttoModificado(conId, fechaYHoraPantalla, ObtenerListaind1, ObtenerListaind2, ObtenerListaind3, Realizado1, Realizado2, Realizado3, indDos1, indDos2, indDos3, RealizadoIndDos1, RealizadoIndDos2, RealizadoIndDos3, indTres1, indTres2, indTres3, RealizadoIndTres1, RealizadoIndTres2, RealizadoIndTres3, horaControl1, horaControl2, horaControl3, horaControl4, horaControl5, horaControl6, fcCtr1, fcCtr2, fcCtr3, fcCtr4, fcCtr5, fcCtr6, frCtr1, frCtr2, frCtr3, frCtr4, frCtr5, frCtr6, temAxCtr1, temAxCtr2, temAxCtr3, temAxCtr4, temAxCtr5, temAxCtr6, satOCtr1, satOCtr2, satOCtr3, satOCtr4, satOCtr5, satOCtr6, hgtCtr1, hgtCtr2, hgtCtr3, hgtCtr4, hgtCtr5, hgtCtr6, psCtr1, psCtr2, psCtr3, psCtr4, psCtr5, psCtr6, pdCtr1, pdCtr2, pdCtr3, pdCtr4, pdCtr5, pdCtr6, eGlsCrt1, eGlsCrt2, eGlsCrt3, eGlsCrt4, eGlsCrt5, eGlsCrt6, evaCtr1, evaCtr2, evaCtr3, evaCtr4, evaCtr5, evaCtr6, ObservacionesTto, perId, fechaSalida, ObtenerListaindDos1, ObtenerListaindDos2, ObtenerListaindDos3, ObtenerListaindTres1, ObtenerListaindTres2, ObtenerListaindTres3);
                    }
                } // END ELSE INTERNO CONTROL 3
            } else
            //VALIDACION CONTROL 4
            if (document.getElementById('fcCtr2').disabled === true && document.getElementById('fcCtr3').disabled === true && document.getElementById('fcCtr4').disabled === false &&
                document.getElementById('fcCtr5').disabled === true && document.getElementById('fcCtr6').disabled === true) {
                if (fcCtr4 === "" && frCtr4 === "" && temAxCtr4 === "" && satOCtr4 === "" && psCtr4 === "" && pdCtr4 === "" && eGlsCrt4 === "") {
                    if (hgtCtr4 !== "" || evaCtr4 !== "") {
                        validaCamposCheck(4, fcCtr4, frCtr4, temAxCtr4, satOCtr4, psCtr4, pdCtr4, hgtCtr4, evaCtr4, eGlsCrt4);
                        alert("No se puede ingresar el registro,debe llenar los campos obligatorios para ingresar el procedimiento");
                        countClicks = 0;
                    } else {
                        countClicks = countClicks + 1;
                        if (countClicks === 1) {
                            CrearProcedimientoYtto(conId, fechaYHoraPantalla, Realizado1, Realizado2, Realizado3, indDos1, indDos2, indDos3, RealizadoIndDos1, RealizadoIndDos2, RealizadoIndDos3, indTres1, indTres2, indTres3, RealizadoIndTres1, RealizadoIndTres2, RealizadoIndTres3, horaControl1, horaControl2, horaControl3, horaControl4, horaControl5, horaControl6, fcCtr1, fcCtr2, fcCtr3, fcCtr4, fcCtr5, fcCtr6, frCtr1, frCtr2, frCtr3, frCtr4, frCtr5, frCtr6, temAxCtr1, temAxCtr2, temAxCtr3, temAxCtr4, temAxCtr5, temAxCtr6, satOCtr1, satOCtr2, satOCtr3, satOCtr4, satOCtr5, satOCtr6, hgtCtr1, hgtCtr2, hgtCtr3, hgtCtr4, hgtCtr5, hgtCtr6, psCtr1, psCtr2, psCtr3, psCtr4, psCtr5, psCtr6, pdCtr1, pdCtr2, pdCtr3, pdCtr4, pdCtr5, pdCtr6, eGlsCrt1, eGlsCrt2, eGlsCrt3, eGlsCrt4, eGlsCrt5, eGlsCrt6, evaCtr1, evaCtr2, evaCtr3, evaCtr4, evaCtr5, evaCtr6, ObservacionesTto, perId, fechaSalida, ObtenerListaindDos1, ObtenerListaindDos2, ObtenerListaindDos3, ObtenerListaindTres1, ObtenerListaindTres2, ObtenerListaindTres3);
                            //CrearProcedimientoYttoModificado(conId, fechaYHoraPantalla, ObtenerListaind1, ObtenerListaind2, ObtenerListaind3, Realizado1, Realizado2, Realizado3, indDos1, indDos2, indDos3, RealizadoIndDos1, RealizadoIndDos2, RealizadoIndDos3, indTres1, indTres2, indTres3, RealizadoIndTres1, RealizadoIndTres2, RealizadoIndTres3, horaControl1, horaControl2, horaControl3, horaControl4, horaControl5, horaControl6, fcCtr1, fcCtr2, fcCtr3, fcCtr4, fcCtr5, fcCtr6, frCtr1, frCtr2, frCtr3, frCtr4, frCtr5, frCtr6, temAxCtr1, temAxCtr2, temAxCtr3, temAxCtr4, temAxCtr5, temAxCtr6, satOCtr1, satOCtr2, satOCtr3, satOCtr4, satOCtr5, satOCtr6, hgtCtr1, hgtCtr2, hgtCtr3, hgtCtr4, hgtCtr5, hgtCtr6, psCtr1, psCtr2, psCtr3, psCtr4, psCtr5, psCtr6, pdCtr1, pdCtr2, pdCtr3, pdCtr4, pdCtr5, pdCtr6, eGlsCrt1, eGlsCrt2, eGlsCrt3, eGlsCrt4, eGlsCrt5, eGlsCrt6, evaCtr1, evaCtr2, evaCtr3, evaCtr4, evaCtr5, evaCtr6, ObservacionesTto, perId, fechaSalida, ObtenerListaindDos1, ObtenerListaindDos2, ObtenerListaindDos3, ObtenerListaindTres1, ObtenerListaindTres2, ObtenerListaindTres3);
                            console.log("se resetea contador de " + countClicks);
                        } else {
                            console.log("cantidad de clicks hechos" + countClicks);
                            alert("Debe clickear solo una vez, ya se esta procesando su ingreso.")
                        }
                    }
                } else {
                    campos = validaCampos(4, fcCtr4, frCtr4, temAxCtr4, satOCtr4, psCtr4, pdCtr4, hgtCtr4, evaCtr4, eGlsCrt4);
                    if (campos === true) {
                        countClicks = countClicks + 1;
                        CrearProcedimientoYtto(conId, fechaYHoraPantalla, Realizado1, Realizado2, Realizado3, indDos1, indDos2, indDos3, RealizadoIndDos1, RealizadoIndDos2, RealizadoIndDos3, indTres1, indTres2, indTres3, RealizadoIndTres1, RealizadoIndTres2, RealizadoIndTres3, horaControl1, horaControl2, horaControl3, horaControl4, horaControl5, horaControl6, fcCtr1, fcCtr2, fcCtr3, fcCtr4, fcCtr5, fcCtr6, frCtr1, frCtr2, frCtr3, frCtr4, frCtr5, frCtr6, temAxCtr1, temAxCtr2, temAxCtr3, temAxCtr4, temAxCtr5, temAxCtr6, satOCtr1, satOCtr2, satOCtr3, satOCtr4, satOCtr5, satOCtr6, hgtCtr1, hgtCtr2, hgtCtr3, hgtCtr4, hgtCtr5, hgtCtr6, psCtr1, psCtr2, psCtr3, psCtr4, psCtr5, psCtr6, pdCtr1, pdCtr2, pdCtr3, pdCtr4, pdCtr5, pdCtr6, eGlsCrt1, eGlsCrt2, eGlsCrt3, eGlsCrt4, eGlsCrt5, eGlsCrt6, evaCtr1, evaCtr2, evaCtr3, evaCtr4, evaCtr5, evaCtr6, ObservacionesTto, perId, fechaSalida, ObtenerListaindDos1, ObtenerListaindDos2, ObtenerListaindDos3, ObtenerListaindTres1, ObtenerListaindTres2, ObtenerListaindTres3);
                        //CrearProcedimientoYttoModificado(conId, fechaYHoraPantalla, ObtenerListaind1, ObtenerListaind2, ObtenerListaind3, Realizado1, Realizado2, Realizado3, indDos1, indDos2, indDos3, RealizadoIndDos1, RealizadoIndDos2, RealizadoIndDos3, indTres1, indTres2, indTres3, RealizadoIndTres1, RealizadoIndTres2, RealizadoIndTres3, horaControl1, horaControl2, horaControl3, horaControl4, horaControl5, horaControl6, fcCtr1, fcCtr2, fcCtr3, fcCtr4, fcCtr5, fcCtr6, frCtr1, frCtr2, frCtr3, frCtr4, frCtr5, frCtr6, temAxCtr1, temAxCtr2, temAxCtr3, temAxCtr4, temAxCtr5, temAxCtr6, satOCtr1, satOCtr2, satOCtr3, satOCtr4, satOCtr5, satOCtr6, hgtCtr1, hgtCtr2, hgtCtr3, hgtCtr4, hgtCtr5, hgtCtr6, psCtr1, psCtr2, psCtr3, psCtr4, psCtr5, psCtr6, pdCtr1, pdCtr2, pdCtr3, pdCtr4, pdCtr5, pdCtr6, eGlsCrt1, eGlsCrt2, eGlsCrt3, eGlsCrt4, eGlsCrt5, eGlsCrt6, evaCtr1, evaCtr2, evaCtr3, evaCtr4, evaCtr5, evaCtr6, ObservacionesTto, perId, fechaSalida, ObtenerListaindDos1, ObtenerListaindDos2, ObtenerListaindDos3, ObtenerListaindTres1, ObtenerListaindTres2, ObtenerListaindTres3);
                    }
                } //END ELSE CONTROL 4
            } else
            //VALIDACION CONTROL 5
            if (document.getElementById('fcCtr2').disabled === true && document.getElementById('fcCtr3').disabled === true && document.getElementById('fcCtr4').disabled === true &&
                document.getElementById('fcCtr5').disabled === false && document.getElementById('fcCtr6').disabled === true) {
                if (fcCtr5 === "" && frCtr5 === "" && temAxCtr5 === "" && satOCtr5 === "" && psCtr5 === "" && pdCtr5 === "" && eGlsCrt5 === "") {
                    if (hgtCtr5 !== "" || evaCtr5 !== "") {
                        validaCamposCheck(5, fcCtr5, frCtr5, temAxCtr5, satOCtr5, psCtr5, pdCtr5, hgtCtr5, evaCtr5, eGlsCrt5);
                        alert("No se puede ingresar el registro,debe llenar los campos obligatorios para ingresar el procedimiento");
                        countClicks = 0;
                    } else {
                        countClicks = countClicks + 1;
                        if (countClicks === 1) {
                            CrearProcedimientoYtto(conId, fechaYHoraPantalla, Realizado1, Realizado2, Realizado3, indDos1, indDos2, indDos3, RealizadoIndDos1, RealizadoIndDos2, RealizadoIndDos3, indTres1, indTres2, indTres3, RealizadoIndTres1, RealizadoIndTres2, RealizadoIndTres3, horaControl1, horaControl2, horaControl3, horaControl4, horaControl5, horaControl6, fcCtr1, fcCtr2, fcCtr3, fcCtr4, fcCtr5, fcCtr6, frCtr1, frCtr2, frCtr3, frCtr4, frCtr5, frCtr6, temAxCtr1, temAxCtr2, temAxCtr3, temAxCtr4, temAxCtr5, temAxCtr6, satOCtr1, satOCtr2, satOCtr3, satOCtr4, satOCtr5, satOCtr6, hgtCtr1, hgtCtr2, hgtCtr3, hgtCtr4, hgtCtr5, hgtCtr6, psCtr1, psCtr2, psCtr3, psCtr4, psCtr5, psCtr6, pdCtr1, pdCtr2, pdCtr3, pdCtr4, pdCtr5, pdCtr6, eGlsCrt1, eGlsCrt2, eGlsCrt3, eGlsCrt4, eGlsCrt5, eGlsCrt6, evaCtr1, evaCtr2, evaCtr3, evaCtr4, evaCtr5, evaCtr6, ObservacionesTto, perId, fechaSalida, ObtenerListaindDos1, ObtenerListaindDos2, ObtenerListaindDos3, ObtenerListaindTres1, ObtenerListaindTres2, ObtenerListaindTres3);
                            //CrearProcedimientoYttoModificado(conId, fechaYHoraPantalla, ObtenerListaind1, ObtenerListaind2, ObtenerListaind3, Realizado1, Realizado2, Realizado3, indDos1, indDos2, indDos3, RealizadoIndDos1, RealizadoIndDos2, RealizadoIndDos3, indTres1, indTres2, indTres3, RealizadoIndTres1, RealizadoIndTres2, RealizadoIndTres3, horaControl1, horaControl2, horaControl3, horaControl4, horaControl5, horaControl6, fcCtr1, fcCtr2, fcCtr3, fcCtr4, fcCtr5, fcCtr6, frCtr1, frCtr2, frCtr3, frCtr4, frCtr5, frCtr6, temAxCtr1, temAxCtr2, temAxCtr3, temAxCtr4, temAxCtr5, temAxCtr6, satOCtr1, satOCtr2, satOCtr3, satOCtr4, satOCtr5, satOCtr6, hgtCtr1, hgtCtr2, hgtCtr3, hgtCtr4, hgtCtr5, hgtCtr6, psCtr1, psCtr2, psCtr3, psCtr4, psCtr5, psCtr6, pdCtr1, pdCtr2, pdCtr3, pdCtr4, pdCtr5, pdCtr6, eGlsCrt1, eGlsCrt2, eGlsCrt3, eGlsCrt4, eGlsCrt5, eGlsCrt6, evaCtr1, evaCtr2, evaCtr3, evaCtr4, evaCtr5, evaCtr6, ObservacionesTto, perId, fechaSalida, ObtenerListaindDos1, ObtenerListaindDos2, ObtenerListaindDos3, ObtenerListaindTres1, ObtenerListaindTres2, ObtenerListaindTres3);
                            console.log("se resetea contador de " + countClicks);
                        } else {
                            console.log("cantidad de clicks hechos" + countClicks);
                            alert("Debe clickear solo una vez, ya se esta procesando su ingreso.")
                        }
                    }
                } else {
                    campos = validaCampos(5, fcCtr5, frCtr5, temAxCtr5, satOCtr5, psCtr5, pdCtr5, hgtCtr5, evaCtr5, eGlsCrt5);
                    if (campos === true) {
                        countClicks = countClicks + 1;
                        CrearProcedimientoYtto(conId, fechaYHoraPantalla, Realizado1, Realizado2, Realizado3, indDos1, indDos2, indDos3, RealizadoIndDos1, RealizadoIndDos2, RealizadoIndDos3, indTres1, indTres2, indTres3, RealizadoIndTres1, RealizadoIndTres2, RealizadoIndTres3, horaControl1, horaControl2, horaControl3, horaControl4, horaControl5, horaControl6, fcCtr1, fcCtr2, fcCtr3, fcCtr4, fcCtr5, fcCtr6, frCtr1, frCtr2, frCtr3, frCtr4, frCtr5, frCtr6, temAxCtr1, temAxCtr2, temAxCtr3, temAxCtr4, temAxCtr5, temAxCtr6, satOCtr1, satOCtr2, satOCtr3, satOCtr4, satOCtr5, satOCtr6, hgtCtr1, hgtCtr2, hgtCtr3, hgtCtr4, hgtCtr5, hgtCtr6, psCtr1, psCtr2, psCtr3, psCtr4, psCtr5, psCtr6, pdCtr1, pdCtr2, pdCtr3, pdCtr4, pdCtr5, pdCtr6, eGlsCrt1, eGlsCrt2, eGlsCrt3, eGlsCrt4, eGlsCrt5, eGlsCrt6, evaCtr1, evaCtr2, evaCtr3, evaCtr4, evaCtr5, evaCtr6, ObservacionesTto, perId, fechaSalida, ObtenerListaindDos1, ObtenerListaindDos2, ObtenerListaindDos3, ObtenerListaindTres1, ObtenerListaindTres2, ObtenerListaindTres3);
                        //CrearProcedimientoYttoModificado(conId, fechaYHoraPantalla, ObtenerListaind1, ObtenerListaind2, ObtenerListaind3, Realizado1, Realizado2, Realizado3, indDos1, indDos2, indDos3, RealizadoIndDos1, RealizadoIndDos2, RealizadoIndDos3, indTres1, indTres2, indTres3, RealizadoIndTres1, RealizadoIndTres2, RealizadoIndTres3, horaControl1, horaControl2, horaControl3, horaControl4, horaControl5, horaControl6, fcCtr1, fcCtr2, fcCtr3, fcCtr4, fcCtr5, fcCtr6, frCtr1, frCtr2, frCtr3, frCtr4, frCtr5, frCtr6, temAxCtr1, temAxCtr2, temAxCtr3, temAxCtr4, temAxCtr5, temAxCtr6, satOCtr1, satOCtr2, satOCtr3, satOCtr4, satOCtr5, satOCtr6, hgtCtr1, hgtCtr2, hgtCtr3, hgtCtr4, hgtCtr5, hgtCtr6, psCtr1, psCtr2, psCtr3, psCtr4, psCtr5, psCtr6, pdCtr1, pdCtr2, pdCtr3, pdCtr4, pdCtr5, pdCtr6, eGlsCrt1, eGlsCrt2, eGlsCrt3, eGlsCrt4, eGlsCrt5, eGlsCrt6, evaCtr1, evaCtr2, evaCtr3, evaCtr4, evaCtr5, evaCtr6, ObservacionesTto, perId, fechaSalida, ObtenerListaindDos1, ObtenerListaindDos2, ObtenerListaindDos3, ObtenerListaindTres1, ObtenerListaindTres2, ObtenerListaindTres3);
                    }
                } // END ELSE CONTROL 5
            } else {
                //VALIDACION CONTROL 6
                if (fcCtr6 === "" && frCtr6 === "" && temAxCtr6 === "" && satOCtr6 === "" && psCtr6 === "" && pdCtr6 === "" && eGlsCrt6 === "") {
                    if (hgtCtr6 !== "" || evaCtr6 !== "") {
                        validaCamposCheck(6, fcCtr6, frCtr6, temAxCtr6, satOCtr6, psCtr6, pdCtr6, hgtCtr6, evaCtr6, eGlsCrt6);
                        alert("No se puede ingresar el registro,debe llenar los campos obligatorios para ingresar el procedimiento");
                        countClicks = 0;
                    } else {
                        countClicks = countClicks + 1;
                        if (countClicks === 1) {
                            CrearProcedimientoYtto(conId, fechaYHoraPantalla, Realizado1, Realizado2, Realizado3, indDos1, indDos2, indDos3, RealizadoIndDos1, RealizadoIndDos2, RealizadoIndDos3, indTres1, indTres2, indTres3, RealizadoIndTres1, RealizadoIndTres2, RealizadoIndTres3, horaControl1, horaControl2, horaControl3, horaControl4, horaControl5, horaControl6, fcCtr1, fcCtr2, fcCtr3, fcCtr4, fcCtr5, fcCtr6, frCtr1, frCtr2, frCtr3, frCtr4, frCtr5, frCtr6, temAxCtr1, temAxCtr2, temAxCtr3, temAxCtr4, temAxCtr5, temAxCtr6, satOCtr1, satOCtr2, satOCtr3, satOCtr4, satOCtr5, satOCtr6, hgtCtr1, hgtCtr2, hgtCtr3, hgtCtr4, hgtCtr5, hgtCtr6, psCtr1, psCtr2, psCtr3, psCtr4, psCtr5, psCtr6, pdCtr1, pdCtr2, pdCtr3, pdCtr4, pdCtr5, pdCtr6, eGlsCrt1, eGlsCrt2, eGlsCrt3, eGlsCrt4, eGlsCrt5, eGlsCrt6, evaCtr1, evaCtr2, evaCtr3, evaCtr4, evaCtr5, evaCtr6, ObservacionesTto, perId, fechaSalida, ObtenerListaindDos1, ObtenerListaindDos2, ObtenerListaindDos3, ObtenerListaindTres1, ObtenerListaindTres2, ObtenerListaindTres3);
                            //CrearProcedimientoYttoModificado(conId, fechaYHoraPantalla, ObtenerListaind1, ObtenerListaind2, ObtenerListaind3, Realizado1, Realizado2, Realizado3, indDos1, indDos2, indDos3, RealizadoIndDos1, RealizadoIndDos2, RealizadoIndDos3, indTres1, indTres2, indTres3, RealizadoIndTres1, RealizadoIndTres2, RealizadoIndTres3, horaControl1, horaControl2, horaControl3, horaControl4, horaControl5, horaControl6, fcCtr1, fcCtr2, fcCtr3, fcCtr4, fcCtr5, fcCtr6, frCtr1, frCtr2, frCtr3, frCtr4, frCtr5, frCtr6, temAxCtr1, temAxCtr2, temAxCtr3, temAxCtr4, temAxCtr5, temAxCtr6, satOCtr1, satOCtr2, satOCtr3, satOCtr4, satOCtr5, satOCtr6, hgtCtr1, hgtCtr2, hgtCtr3, hgtCtr4, hgtCtr5, hgtCtr6, psCtr1, psCtr2, psCtr3, psCtr4, psCtr5, psCtr6, pdCtr1, pdCtr2, pdCtr3, pdCtr4, pdCtr5, pdCtr6, eGlsCrt1, eGlsCrt2, eGlsCrt3, eGlsCrt4, eGlsCrt5, eGlsCrt6, evaCtr1, evaCtr2, evaCtr3, evaCtr4, evaCtr5, evaCtr6, ObservacionesTto, perId, fechaSalida, ObtenerListaindDos1, ObtenerListaindDos2, ObtenerListaindDos3, ObtenerListaindTres1, ObtenerListaindTres2, ObtenerListaindTres3);
                            console.log("se resetea contador de " + countClicks);
                        } else {
                            console.log("cantidad de clicks hechos" + countClicks);
                            alert("Debe clickear solo una vez, ya se esta procesando su ingreso.")
                        }
                    }
                } else {
                    campos = validaCampos(6, fcCtr6, frCtr6, temAxCtr6, satOCtr6, psCtr6, pdCtr6, hgtCtr6, evaCtr6, eGlsCrt6);
                    if (campos === true) {
                        countClicks = countClicks + 1;
                        CrearProcedimientoYtto(conId, fechaYHoraPantalla, Realizado1, Realizado2, Realizado3, indDos1, indDos2, indDos3, RealizadoIndDos1, RealizadoIndDos2, RealizadoIndDos3, indTres1, indTres2, indTres3, RealizadoIndTres1, RealizadoIndTres2, RealizadoIndTres3, horaControl1, horaControl2, horaControl3, horaControl4, horaControl5, horaControl6, fcCtr1, fcCtr2, fcCtr3, fcCtr4, fcCtr5, fcCtr6, frCtr1, frCtr2, frCtr3, frCtr4, frCtr5, frCtr6, temAxCtr1, temAxCtr2, temAxCtr3, temAxCtr4, temAxCtr5, temAxCtr6, satOCtr1, satOCtr2, satOCtr3, satOCtr4, satOCtr5, satOCtr6, hgtCtr1, hgtCtr2, hgtCtr3, hgtCtr4, hgtCtr5, hgtCtr6, psCtr1, psCtr2, psCtr3, psCtr4, psCtr5, psCtr6, pdCtr1, pdCtr2, pdCtr3, pdCtr4, pdCtr5, pdCtr6, eGlsCrt1, eGlsCrt2, eGlsCrt3, eGlsCrt4, eGlsCrt5, eGlsCrt6, evaCtr1, evaCtr2, evaCtr3, evaCtr4, evaCtr5, evaCtr6, ObservacionesTto, perId, fechaSalida, ObtenerListaindDos1, ObtenerListaindDos2, ObtenerListaindDos3, ObtenerListaindTres1, ObtenerListaindTres2, ObtenerListaindTres3);
                        //CrearProcedimientoYttoModificado(conId, fechaYHoraPantalla, ObtenerListaind1, ObtenerListaind2, ObtenerListaind3, Realizado1, Realizado2, Realizado3, indDos1, indDos2, indDos3, RealizadoIndDos1, RealizadoIndDos2, RealizadoIndDos3, indTres1, indTres2, indTres3, RealizadoIndTres1, RealizadoIndTres2, RealizadoIndTres3, horaControl1, horaControl2, horaControl3, horaControl4, horaControl5, horaControl6, fcCtr1, fcCtr2, fcCtr3, fcCtr4, fcCtr5, fcCtr6, frCtr1, frCtr2, frCtr3, frCtr4, frCtr5, frCtr6, temAxCtr1, temAxCtr2, temAxCtr3, temAxCtr4, temAxCtr5, temAxCtr6, satOCtr1, satOCtr2, satOCtr3, satOCtr4, satOCtr5, satOCtr6, hgtCtr1, hgtCtr2, hgtCtr3, hgtCtr4, hgtCtr5, hgtCtr6, psCtr1, psCtr2, psCtr3, psCtr4, psCtr5, psCtr6, pdCtr1, pdCtr2, pdCtr3, pdCtr4, pdCtr5, pdCtr6, eGlsCrt1, eGlsCrt2, eGlsCrt3, eGlsCrt4, eGlsCrt5, eGlsCrt6, evaCtr1, evaCtr2, evaCtr3, evaCtr4, evaCtr5, evaCtr6, ObservacionesTto, perId, fechaSalida, ObtenerListaindDos1, ObtenerListaindDos2, ObtenerListaindDos3, ObtenerListaindTres1, ObtenerListaindTres2, ObtenerListaindTres3);
                    }
                } //END ELSE INTERNO CONTROL 6
            } // END ELSE IF CONTROLES
        } // END ELSE PRINCIPAL DE VALIDACION DE CAMPOS
    });


    //FINALIZA EL PROCEDIMIENTO
    $("#terminarProcedimientos").on("click", function() {
        var conId = $("#conId").val();
        var fechaYHoraPantalla = $("#fechaYhoraIngresoSistema").val();
        var Realizado1 = $('input[name=Realizado1]').prop('checked');
        var Realizado2 = $('input[name=Realizado2]').prop('checked');
        var Realizado3 = $('input[name=Realizado3]').prop('checked');

        var RealizadoIndDos1 = $('input[name=RealizadoIndDos1]').prop('checked');
        var RealizadoIndDos2 = $('input[name=RealizadoIndDos2]').prop('checked');
        var RealizadoIndDos3 = $('input[name=RealizadoIndDos3]').prop('checked');

        var RealizadoIndTres1 = $('input[name=RealizadoIndTres1]').prop('checked');
        var RealizadoIndTres2 = $('input[name=RealizadoIndTres2]').prop('checked');
        var RealizadoIndTres3 = $('input[name=RealizadoIndTres3]').prop('checked');
        var horaControl1 = $("#horaControl1").val();
        var horaControl2 = $("#horaControl2").val();
        var horaControl3 = $("#horaControl3").val();
        var horaControl4 = $("#horaControl4").val();
        var horaControl5 = $("#horaControl5").val();
        var horaControl6 = $("#horaControl6").val();
        var fcCtr1 = $("#fcCtr1").val();
        var fcCtr2 = $("#fcCtr2").val();
        var fcCtr3 = $("#fcCtr3").val();
        var fcCtr4 = $("#fcCtr4").val();
        var fcCtr5 = $("#fcCtr5").val();
        var fcCtr6 = $("#fcCtr6").val();
        var frCtr1 = $("#frCtr1").val();
        var frCtr2 = $("#frCtr2").val();
        var frCtr3 = $("#frCtr3").val();
        var frCtr4 = $("#frCtr4").val();
        var frCtr5 = $("#frCtr5").val();
        var frCtr6 = $("#frCtr6").val();
        var temAxCtr1 = $("#temAxCtr1").val();
        var temAxCtr2 = $("#temAxCtr2").val();
        var temAxCtr3 = $("#temAxCtr3").val();
        var temAxCtr4 = $("#temAxCtr4").val();
        var temAxCtr5 = $("#temAxCtr5").val();
        var temAxCtr6 = $("#temAxCtr6").val();
        var satOCtr1 = $("#satOCtr1").val();
        var satOCtr2 = $("#satOCtr2").val();
        var satOCtr3 = $("#satOCtr3").val();
        var satOCtr4 = $("#satOCtr4").val();
        var satOCtr5 = $("#satOCtr5").val();
        var satOCtr6 = $("#satOCtr6").val();
        var hgtCtr1 = $("#hgtCtr1").val();
        var hgtCtr2 = $("#hgtCtr2").val();
        var hgtCtr3 = $("#hgtCtr3").val();
        var hgtCtr4 = $("#hgtCtr4").val();
        var hgtCtr5 = $("#hgtCtr5").val();
        var hgtCtr6 = $("#hgtCtr6").val();
        var psCtr1 = $("#psCtr1").val();
        var psCtr2 = $("#psCtr2").val();
        var psCtr3 = $("#psCtr3").val();
        var psCtr4 = $("#psCtr4").val();
        var psCtr5 = $("#psCtr5").val();
        var psCtr6 = $("#psCtr6").val();
        var pdCtr1 = $("#pdCtr1").val();
        var pdCtr2 = $("#pdCtr2").val();
        var pdCtr3 = $("#pdCtr3").val();
        var pdCtr4 = $("#pdCtr4").val();
        var pdCtr5 = $("#pdCtr5").val();
        var pdCtr6 = $("#pdCtr6").val();
        var eGlsCrt1 = $("#eGlsCrt1").val();
        var eGlsCrt2 = $("#eGlsCrt2").val();
        var eGlsCrt3 = $("#eGlsCrt3").val();
        var eGlsCrt4 = $("#eGlsCrt4").val();
        var eGlsCrt5 = $("#eGlsCrt5").val();
        var eGlsCrt6 = $("#eGlsCrt6").val();
        var evaCtr1 = $("#evaCtr1").val();
        var evaCtr2 = $("#evaCtr2").val();
        var evaCtr3 = $("#evaCtr3").val();
        var evaCtr4 = $("#evaCtr4").val();
        var evaCtr5 = $("#evaCtr5").val();
        var evaCtr6 = $("#evaCtr6").val();
        var ObservacionesTto = $("#ObservacionesTto").val();
        var perId = window.parent.$("#perId").val();
        var fechaSalida = $("#fechaYhoraIngresoSistema").val();

        //para terminar procedimiento
        var ind1 = $("#ind1").val();
        var ind2 = $("#ind2").val();
        var ind3 = $("#ind3").val();

        var indDos1 = $("#indDos1").val();
        var indDos2 = $("#indDos2").val();
        var indDos3 = $("#indDos3").val();

        var indTres1 = $("#indTres1").val();
        var indTres2 = $("#indTres2").val();
        var indTres3 = $("#indTres3").val();

        //NUEVOS CAMPOS DE VALIDACION
        var ObtenerListaindDos1 = $('select[name=ObtenerListaindDos1]').val();
        var ObtenerListaindDos2 = $('select[name=ObtenerListaindDos2]').val();
        var ObtenerListaindDos3 = $('select[name=ObtenerListaindDos3]').val();
        var ObtenerListaindTres1 = $('select[name=ObtenerListaindTres1]').val();
        var ObtenerListaindTres2 = $('select[name=ObtenerListaindTres2]').val();
        var ObtenerListaindTres3 = $('select[name=ObtenerListaindTres3]').val();

        //NUEVOS CAMPOS MANEJO Y TTO A INGRESAR PARA MODIFICAR
        var ObtenerListaind1 = $('select[name=ObtenerListaind1]').val();
        var ObtenerListaind2 = $('select[name=ObtenerListaind2]').val();
        var ObtenerListaind3 = $('select[name=ObtenerListaind3]').val();

        if ((ind1 !== "" && Realizado1 === false) || (ind2 !== "" && Realizado2 === false) || (ind3 !== "" && Realizado3 === false)) {
            alert("debe checkear el medicamento a tratar");
            countClicks = 0;
            window.parent.$("html,body").animate({ scrollTop: 0 }, 600);
            ValidaManejoYTto(ind1, Realizado1, ind2, Realizado2, ind3, Realizado3);
        } else {
            //VALIDACION CAMPOS CONTROLES GENERAL
            if (fcCtr2 === "" && fcCtr3 === "" && fcCtr4 === "" && fcCtr5 === "" && fcCtr6 === "" && hgtCtr2 !== "" && evaCtr2 !== "") {
                //SI NO SE HA DIGITADO NADA, INGRESAR EL DATO
                countClicks = countClicks + 1;
                if (countClicks === 1) {
                    //AQUI SE REALIZA LA VALIDACION DEL CAMPO SI PASO 1 HORA ANTES DE FINALIZAR LA ATENCION
                    CrearProcedimientoYtto(conId, fechaYHoraPantalla, Realizado1, Realizado2, Realizado3, indDos1, indDos2, indDos3, RealizadoIndDos1, RealizadoIndDos2, RealizadoIndDos3, indTres1, indTres2, indTres3, RealizadoIndTres1, RealizadoIndTres2, RealizadoIndTres3, horaControl1, horaControl2, horaControl3, horaControl4, horaControl5, horaControl6, fcCtr1, fcCtr2, fcCtr3, fcCtr4, fcCtr5, fcCtr6, frCtr1, frCtr2, frCtr3, frCtr4, frCtr5, frCtr6, temAxCtr1, temAxCtr2, temAxCtr3, temAxCtr4, temAxCtr5, temAxCtr6, satOCtr1, satOCtr2, satOCtr3, satOCtr4, satOCtr5, satOCtr6, hgtCtr1, hgtCtr2, hgtCtr3, hgtCtr4, hgtCtr5, hgtCtr6, psCtr1, psCtr2, psCtr3, psCtr4, psCtr5, psCtr6, pdCtr1, pdCtr2, pdCtr3, pdCtr4, pdCtr5, pdCtr6, eGlsCrt1, eGlsCrt2, eGlsCrt3, eGlsCrt4, eGlsCrt5, eGlsCrt6, evaCtr1, evaCtr2, evaCtr3, evaCtr4, evaCtr5, evaCtr6, ObservacionesTto, perId, fechaSalida, ObtenerListaindDos1, ObtenerListaindDos2, ObtenerListaindDos3, ObtenerListaindTres1, ObtenerListaindTres2, ObtenerListaindTres3);
                    //CrearProcedimientoYttoModificado(conId, fechaYHoraPantalla, ObtenerListaind1, ObtenerListaind2, ObtenerListaind3, Realizado1, Realizado2, Realizado3, indDos1, indDos2, indDos3, RealizadoIndDos1, RealizadoIndDos2, RealizadoIndDos3, indTres1, indTres2, indTres3, RealizadoIndTres1, RealizadoIndTres2, RealizadoIndTres3, horaControl1, horaControl2, horaControl3, horaControl4, horaControl5, horaControl6, fcCtr1, fcCtr2, fcCtr3, fcCtr4, fcCtr5, fcCtr6, frCtr1, frCtr2, frCtr3, frCtr4, frCtr5, frCtr6, temAxCtr1, temAxCtr2, temAxCtr3, temAxCtr4, temAxCtr5, temAxCtr6, satOCtr1, satOCtr2, satOCtr3, satOCtr4, satOCtr5, satOCtr6, hgtCtr1, hgtCtr2, hgtCtr3, hgtCtr4, hgtCtr5, hgtCtr6, psCtr1, psCtr2, psCtr3, psCtr4, psCtr5, psCtr6, pdCtr1, pdCtr2, pdCtr3, pdCtr4, pdCtr5, pdCtr6, eGlsCrt1, eGlsCrt2, eGlsCrt3, eGlsCrt4, eGlsCrt5, eGlsCrt6, evaCtr1, evaCtr2, evaCtr3, evaCtr4, evaCtr5, evaCtr6, ObservacionesTto, perId, fechaSalida, ObtenerListaindDos1, ObtenerListaindDos2, ObtenerListaindDos3, ObtenerListaindTres1, ObtenerListaindTres2, ObtenerListaindTres3);
                    console.log("se resetea contador de " + countClicks);
                } else {
                    console.log("cantidad de clicks hechos" + countClicks);
                    alert("Debe clickear solo una vez, ya se esta procesando su ingreso.")
                }
            } else {
                //VALIDACION CONTROL 2
                if (document.getElementById('fcCtr2').disabled === false && document.getElementById('fcCtr3').disabled === true && document.getElementById('fcCtr4').disabled === true &&
                    document.getElementById('fcCtr5').disabled === true && document.getElementById('fcCtr6').disabled === true) {
                    if (fcCtr2 === "" && frCtr2 === "" && temAxCtr2 === "" && satOCtr2 === "" && psCtr2 === "" && pdCtr2 === "" && eGlsCrt2 === "") {
                        if (hgtCtr2 !== "" || evaCtr2 !== "") {
                            validaCamposCheck(2, fcCtr2, frCtr2, temAxCtr2, satOCtr2, psCtr2, pdCtr2, hgtCtr2, evaCtr2, eGlsCrt2);
                            alert("No se puede ingresar el registro,debe llenar los campos obligatorios para ingresar el procedimiento");
                            countClicks = 0;
                        } else {
                            countClicks = countClicks + 1;
                            if (countClicks === 1) {

                                //AQUI SE REALIZA LA VALIDACION DEL CAMPO SI PASO 1 HORA ANTES DE FINALIZAR LA ATENCION
                                tipoControl = 2;
                                obtenerValidacionHora(conId, fechaYHoraPantalla, Realizado1, Realizado2, Realizado3, indDos1, indDos2, indDos3, RealizadoIndDos1, RealizadoIndDos2, RealizadoIndDos3, indTres1, indTres2, indTres3, RealizadoIndTres1, RealizadoIndTres2, RealizadoIndTres3, horaControl1, horaControl2, horaControl3, horaControl4, horaControl5, horaControl6, fcCtr1, fcCtr2, fcCtr3, fcCtr4, fcCtr5, fcCtr6, frCtr1, frCtr2, frCtr3, frCtr4, frCtr5, frCtr6, temAxCtr1, temAxCtr2, temAxCtr3, temAxCtr4, temAxCtr5, temAxCtr6, satOCtr1, satOCtr2, satOCtr3, satOCtr4, satOCtr5, satOCtr6, hgtCtr1, hgtCtr2, hgtCtr3, hgtCtr4, hgtCtr5, hgtCtr6, psCtr1, psCtr2, psCtr3, psCtr4, psCtr5, psCtr6, pdCtr1, pdCtr2, pdCtr3, pdCtr4, pdCtr5, pdCtr6, eGlsCrt1, eGlsCrt2, eGlsCrt3, eGlsCrt4, eGlsCrt5, eGlsCrt6, evaCtr1, evaCtr2, evaCtr3, evaCtr4, evaCtr5, evaCtr6, ObservacionesTto, perId, fechaSalida, tipoControl, ObtenerListaindDos1, ObtenerListaindDos2, ObtenerListaindDos3, ObtenerListaindTres1, ObtenerListaindTres2, ObtenerListaindTres3);
                                //obtenerValidacionHoraModificado(conId, fechaYHoraPantalla, ObtenerListaind1, ObtenerListaind2, ObtenerListaind3, Realizado1, Realizado2, Realizado3, indDos1, indDos2, indDos3, RealizadoIndDos1, RealizadoIndDos2, RealizadoIndDos3, indTres1, indTres2, indTres3, RealizadoIndTres1, RealizadoIndTres2, RealizadoIndTres3, horaControl1, horaControl2, horaControl3, horaControl4, horaControl5, horaControl6, fcCtr1, fcCtr2, fcCtr3, fcCtr4, fcCtr5, fcCtr6, frCtr1, frCtr2, frCtr3, frCtr4, frCtr5, frCtr6, temAxCtr1, temAxCtr2, temAxCtr3, temAxCtr4, temAxCtr5, temAxCtr6, satOCtr1, satOCtr2, satOCtr3, satOCtr4, satOCtr5, satOCtr6, hgtCtr1, hgtCtr2, hgtCtr3, hgtCtr4, hgtCtr5, hgtCtr6, psCtr1, psCtr2, psCtr3, psCtr4, psCtr5, psCtr6, pdCtr1, pdCtr2, pdCtr3, pdCtr4, pdCtr5, pdCtr6, eGlsCrt1, eGlsCrt2, eGlsCrt3, eGlsCrt4, eGlsCrt5, eGlsCrt6, evaCtr1, evaCtr2, evaCtr3, evaCtr4, evaCtr5, evaCtr6, ObservacionesTto, perId, fechaSalida, ObtenerListaindDos1, ObtenerListaindDos2, ObtenerListaindDos3, ObtenerListaindTres1, ObtenerListaindTres2, ObtenerListaindTres3);
                                console.log("se resetea contador de " + countClicks);
                            } else {
                                console.log("cantidad de clicks hechos" + countClicks);
                                alert("Debe clickear solo una vez, ya se esta procesando su ingreso.")
                            }
                        }
                    } else {
                        campos = validaCampos(2, fcCtr2, frCtr2, temAxCtr2, satOCtr2, psCtr2, pdCtr2, hgtCtr2, evaCtr2, eGlsCrt2);
                        if (campos === true) {
                            countClicks = countClicks + 1;
                            tipoControl = 2;
                            obtenerValidacionHora(conId, fechaYHoraPantalla, Realizado1, Realizado2, Realizado3, indDos1, indDos2, indDos3, RealizadoIndDos1, RealizadoIndDos2, RealizadoIndDos3, indTres1, indTres2, indTres3, RealizadoIndTres1, RealizadoIndTres2, RealizadoIndTres3, horaControl1, horaControl2, horaControl3, horaControl4, horaControl5, horaControl6, fcCtr1, fcCtr2, fcCtr3, fcCtr4, fcCtr5, fcCtr6, frCtr1, frCtr2, frCtr3, frCtr4, frCtr5, frCtr6, temAxCtr1, temAxCtr2, temAxCtr3, temAxCtr4, temAxCtr5, temAxCtr6, satOCtr1, satOCtr2, satOCtr3, satOCtr4, satOCtr5, satOCtr6, hgtCtr1, hgtCtr2, hgtCtr3, hgtCtr4, hgtCtr5, hgtCtr6, psCtr1, psCtr2, psCtr3, psCtr4, psCtr5, psCtr6, pdCtr1, pdCtr2, pdCtr3, pdCtr4, pdCtr5, pdCtr6, eGlsCrt1, eGlsCrt2, eGlsCrt3, eGlsCrt4, eGlsCrt5, eGlsCrt6, evaCtr1, evaCtr2, evaCtr3, evaCtr4, evaCtr5, evaCtr6, ObservacionesTto, perId, fechaSalida, tipoControl, ObtenerListaindDos1, ObtenerListaindDos2, ObtenerListaindDos3, ObtenerListaindTres1, ObtenerListaindTres2, ObtenerListaindTres3);
                            //obtenerValidacionHoraModificado(conId, fechaYHoraPantalla, ObtenerListaind1, ObtenerListaind2, ObtenerListaind3, Realizado1, Realizado2, Realizado3, indDos1, indDos2, indDos3, RealizadoIndDos1, RealizadoIndDos2, RealizadoIndDos3, indTres1, indTres2, indTres3, RealizadoIndTres1, RealizadoIndTres2, RealizadoIndTres3, horaControl1, horaControl2, horaControl3, horaControl4, horaControl5, horaControl6, fcCtr1, fcCtr2, fcCtr3, fcCtr4, fcCtr5, fcCtr6, frCtr1, frCtr2, frCtr3, frCtr4, frCtr5, frCtr6, temAxCtr1, temAxCtr2, temAxCtr3, temAxCtr4, temAxCtr5, temAxCtr6, satOCtr1, satOCtr2, satOCtr3, satOCtr4, satOCtr5, satOCtr6, hgtCtr1, hgtCtr2, hgtCtr3, hgtCtr4, hgtCtr5, hgtCtr6, psCtr1, psCtr2, psCtr3, psCtr4, psCtr5, psCtr6, pdCtr1, pdCtr2, pdCtr3, pdCtr4, pdCtr5, pdCtr6, eGlsCrt1, eGlsCrt2, eGlsCrt3, eGlsCrt4, eGlsCrt5, eGlsCrt6, evaCtr1, evaCtr2, evaCtr3, evaCtr4, evaCtr5, evaCtr6, ObservacionesTto, perId, fechaSalida, ObtenerListaindDos1, ObtenerListaindDos2, ObtenerListaindDos3, ObtenerListaindTres1, ObtenerListaindTres2, ObtenerListaindTres3);
                            console.log("se resetea contador de " + countClicks);
                        }
                    }
                } else
                //VALIDACION CONTROL 3
                if (document.getElementById('fcCtr2').disabled === true && document.getElementById('fcCtr3').disabled === false && document.getElementById('fcCtr4').disabled === true &&
                    document.getElementById('fcCtr5').disabled === true && document.getElementById('fcCtr6').disabled === true) {
                    if (fcCtr3 === "" && frCtr3 === "" && temAxCtr3 === "" && satOCtr3 === "" && psCtr3 === "" && pdCtr3 === "" && eGlsCrt3 === "") {
                        if (hgtCtr3 !== "" || evaCtr3 !== "") {
                            validaCamposCheck(3, fcCtr3, frCtr3, temAxCtr3, satOCtr3, psCtr3, pdCtr3, hgtCtr3, evaCtr3, eGlsCrt3);
                            alert("No se puede ingresar el registro,debe llenar los campos obligatorios para ingresar el procedimiento");
                            countClicks = 0;
                        } else {
                            countClicks = countClicks + 1;
                            if (countClicks === 1) {
								tipoControl = 3; 
                                obtenerValidacionHora(conId, fechaYHoraPantalla, Realizado1, Realizado2, Realizado3, indDos1, indDos2, indDos3, RealizadoIndDos1, RealizadoIndDos2, RealizadoIndDos3, indTres1, indTres2, indTres3, RealizadoIndTres1, RealizadoIndTres2, RealizadoIndTres3, horaControl1, horaControl2, horaControl3, horaControl4, horaControl5, horaControl6, fcCtr1, fcCtr2, fcCtr3, fcCtr4, fcCtr5, fcCtr6, frCtr1, frCtr2, frCtr3, frCtr4, frCtr5, frCtr6, temAxCtr1, temAxCtr2, temAxCtr3, temAxCtr4, temAxCtr5, temAxCtr6, satOCtr1, satOCtr2, satOCtr3, satOCtr4, satOCtr5, satOCtr6, hgtCtr1, hgtCtr2, hgtCtr3, hgtCtr4, hgtCtr5, hgtCtr6, psCtr1, psCtr2, psCtr3, psCtr4, psCtr5, psCtr6, pdCtr1, pdCtr2, pdCtr3, pdCtr4, pdCtr5, pdCtr6, eGlsCrt1, eGlsCrt2, eGlsCrt3, eGlsCrt4, eGlsCrt5, eGlsCrt6, evaCtr1, evaCtr2, evaCtr3, evaCtr4, evaCtr5, evaCtr6, ObservacionesTto, perId, fechaSalida, tipoControl, ObtenerListaindDos1, ObtenerListaindDos2, ObtenerListaindDos3, ObtenerListaindTres1, ObtenerListaindTres2, ObtenerListaindTres3);
                                //obtenerValidacionHoraModificado(conId, fechaYHoraPantalla, ObtenerListaind1, ObtenerListaind2, ObtenerListaind3, Realizado1, Realizado2, Realizado3, indDos1, indDos2, indDos3, RealizadoIndDos1, RealizadoIndDos2, RealizadoIndDos3, indTres1, indTres2, indTres3, RealizadoIndTres1, RealizadoIndTres2, RealizadoIndTres3, horaControl1, horaControl2, horaControl3, horaControl4, horaControl5, horaControl6, fcCtr1, fcCtr2, fcCtr3, fcCtr4, fcCtr5, fcCtr6, frCtr1, frCtr2, frCtr3, frCtr4, frCtr5, frCtr6, temAxCtr1, temAxCtr2, temAxCtr3, temAxCtr4, temAxCtr5, temAxCtr6, satOCtr1, satOCtr2, satOCtr3, satOCtr4, satOCtr5, satOCtr6, hgtCtr1, hgtCtr2, hgtCtr3, hgtCtr4, hgtCtr5, hgtCtr6, psCtr1, psCtr2, psCtr3, psCtr4, psCtr5, psCtr6, pdCtr1, pdCtr2, pdCtr3, pdCtr4, pdCtr5, pdCtr6, eGlsCrt1, eGlsCrt2, eGlsCrt3, eGlsCrt4, eGlsCrt5, eGlsCrt6, evaCtr1, evaCtr2, evaCtr3, evaCtr4, evaCtr5, evaCtr6, ObservacionesTto, perId, fechaSalida, ObtenerListaindDos1, ObtenerListaindDos2, ObtenerListaindDos3, ObtenerListaindTres1, ObtenerListaindTres2, ObtenerListaindTres3);
                                console.log("se resetea contador de " + countClicks);
                            } else {
                                console.log("cantidad de clicks hechos" + countClicks);
                                alert("Debe clickear solo una vez, ya se esta procesando su ingreso.")
                            }
                        }
                    } else {
                        campos = validaCampos(3, fcCtr3, frCtr3, temAxCtr3, satOCtr3, psCtr3, pdCtr3, hgtCtr3, evaCtr3, eGlsCrt3);
                        if (campos === true) {
                            countClicks = countClicks + 1;
                            tipoControl = 3;
                            obtenerValidacionHora(conId, fechaYHoraPantalla, Realizado1, Realizado2, Realizado3, indDos1, indDos2, indDos3, RealizadoIndDos1, RealizadoIndDos2, RealizadoIndDos3, indTres1, indTres2, indTres3, RealizadoIndTres1, RealizadoIndTres2, RealizadoIndTres3, horaControl1, horaControl2, horaControl3, horaControl4, horaControl5, horaControl6, fcCtr1, fcCtr2, fcCtr3, fcCtr4, fcCtr5, fcCtr6, frCtr1, frCtr2, frCtr3, frCtr4, frCtr5, frCtr6, temAxCtr1, temAxCtr2, temAxCtr3, temAxCtr4, temAxCtr5, temAxCtr6, satOCtr1, satOCtr2, satOCtr3, satOCtr4, satOCtr5, satOCtr6, hgtCtr1, hgtCtr2, hgtCtr3, hgtCtr4, hgtCtr5, hgtCtr6, psCtr1, psCtr2, psCtr3, psCtr4, psCtr5, psCtr6, pdCtr1, pdCtr2, pdCtr3, pdCtr4, pdCtr5, pdCtr6, eGlsCrt1, eGlsCrt2, eGlsCrt3, eGlsCrt4, eGlsCrt5, eGlsCrt6, evaCtr1, evaCtr2, evaCtr3, evaCtr4, evaCtr5, evaCtr6, ObservacionesTto, perId, fechaSalida, tipoControl, ObtenerListaindDos1, ObtenerListaindDos2, ObtenerListaindDos3, ObtenerListaindTres1, ObtenerListaindTres2, ObtenerListaindTres3);
                            //obtenerValidacionHoraModificado(conId, fechaYHoraPantalla, ObtenerListaind1, ObtenerListaind2, ObtenerListaind3, Realizado1, Realizado2, Realizado3, indDos1, indDos2, indDos3, RealizadoIndDos1, RealizadoIndDos2, RealizadoIndDos3, indTres1, indTres2, indTres3, RealizadoIndTres1, RealizadoIndTres2, RealizadoIndTres3, horaControl1, horaControl2, horaControl3, horaControl4, horaControl5, horaControl6, fcCtr1, fcCtr2, fcCtr3, fcCtr4, fcCtr5, fcCtr6, frCtr1, frCtr2, frCtr3, frCtr4, frCtr5, frCtr6, temAxCtr1, temAxCtr2, temAxCtr3, temAxCtr4, temAxCtr5, temAxCtr6, satOCtr1, satOCtr2, satOCtr3, satOCtr4, satOCtr5, satOCtr6, hgtCtr1, hgtCtr2, hgtCtr3, hgtCtr4, hgtCtr5, hgtCtr6, psCtr1, psCtr2, psCtr3, psCtr4, psCtr5, psCtr6, pdCtr1, pdCtr2, pdCtr3, pdCtr4, pdCtr5, pdCtr6, eGlsCrt1, eGlsCrt2, eGlsCrt3, eGlsCrt4, eGlsCrt5, eGlsCrt6, evaCtr1, evaCtr2, evaCtr3, evaCtr4, evaCtr5, evaCtr6, ObservacionesTto, perId, fechaSalida, ObtenerListaindDos1, ObtenerListaindDos2, ObtenerListaindDos3, ObtenerListaindTres1, ObtenerListaindTres2, ObtenerListaindTres3);
                            console.log("se resetea contador de " + countClicks);
                        }
                    } // END ELSE INTERNO CONTROL 3
                } else
                //VALIDACION CONTROL 4
                if (document.getElementById('fcCtr2').disabled === true && document.getElementById('fcCtr3').disabled === true && document.getElementById('fcCtr4').disabled === false &&
                    document.getElementById('fcCtr5').disabled === true && document.getElementById('fcCtr6').disabled === true) {
                    if (fcCtr4 === "" && frCtr4 === "" && temAxCtr4 === "" && satOCtr4 === "" && psCtr4 === "" && pdCtr4 === "" && eGlsCrt4 === "") {
                        if (hgtCtr4 !== "" || evaCtr4 !== "") {
                            validaCamposCheck(4, fcCtr4, frCtr4, temAxCtr4, satOCtr4, psCtr4, pdCtr4, hgtCtr4, evaCtr4, eGlsCrt4);
                            alert("No se puede ingresar el registro,debe llenar los campos obligatorios para ingresar el procedimiento");
                            countClicks = 0;
                        } else {
                            countClicks = countClicks + 1;
                            if (countClicks === 1) {
                                tipoControl = 4;
                                obtenerValidacionHora(conId, fechaYHoraPantalla, Realizado1, Realizado2, Realizado3, indDos1, indDos2, indDos3, RealizadoIndDos1, RealizadoIndDos2, RealizadoIndDos3, indTres1, indTres2, indTres3, RealizadoIndTres1, RealizadoIndTres2, RealizadoIndTres3, horaControl1, horaControl2, horaControl3, horaControl4, horaControl5, horaControl6, fcCtr1, fcCtr2, fcCtr3, fcCtr4, fcCtr5, fcCtr6, frCtr1, frCtr2, frCtr3, frCtr4, frCtr5, frCtr6, temAxCtr1, temAxCtr2, temAxCtr3, temAxCtr4, temAxCtr5, temAxCtr6, satOCtr1, satOCtr2, satOCtr3, satOCtr4, satOCtr5, satOCtr6, hgtCtr1, hgtCtr2, hgtCtr3, hgtCtr4, hgtCtr5, hgtCtr6, psCtr1, psCtr2, psCtr3, psCtr4, psCtr5, psCtr6, pdCtr1, pdCtr2, pdCtr3, pdCtr4, pdCtr5, pdCtr6, eGlsCrt1, eGlsCrt2, eGlsCrt3, eGlsCrt4, eGlsCrt5, eGlsCrt6, evaCtr1, evaCtr2, evaCtr3, evaCtr4, evaCtr5, evaCtr6, ObservacionesTto, perId, fechaSalida, tipoControl, ObtenerListaindDos1, ObtenerListaindDos2, ObtenerListaindDos3, ObtenerListaindTres1, ObtenerListaindTres2, ObtenerListaindTres3);
                                //obtenerValidacionHoraModificado(conId, fechaYHoraPantalla, ObtenerListaind1, ObtenerListaind2, ObtenerListaind3, Realizado1, Realizado2, Realizado3, indDos1, indDos2, indDos3, RealizadoIndDos1, RealizadoIndDos2, RealizadoIndDos3, indTres1, indTres2, indTres3, RealizadoIndTres1, RealizadoIndTres2, RealizadoIndTres3, horaControl1, horaControl2, horaControl3, horaControl4, horaControl5, horaControl6, fcCtr1, fcCtr2, fcCtr3, fcCtr4, fcCtr5, fcCtr6, frCtr1, frCtr2, frCtr3, frCtr4, frCtr5, frCtr6, temAxCtr1, temAxCtr2, temAxCtr3, temAxCtr4, temAxCtr5, temAxCtr6, satOCtr1, satOCtr2, satOCtr3, satOCtr4, satOCtr5, satOCtr6, hgtCtr1, hgtCtr2, hgtCtr3, hgtCtr4, hgtCtr5, hgtCtr6, psCtr1, psCtr2, psCtr3, psCtr4, psCtr5, psCtr6, pdCtr1, pdCtr2, pdCtr3, pdCtr4, pdCtr5, pdCtr6, eGlsCrt1, eGlsCrt2, eGlsCrt3, eGlsCrt4, eGlsCrt5, eGlsCrt6, evaCtr1, evaCtr2, evaCtr3, evaCtr4, evaCtr5, evaCtr6, ObservacionesTto, perId, fechaSalida, ObtenerListaindDos1, ObtenerListaindDos2, ObtenerListaindDos3, ObtenerListaindTres1, ObtenerListaindTres2, ObtenerListaindTres3);
                                console.log("se resetea contador de " + countClicks);

                            } else {
                                console.log("cantidad de clicks hechos" + countClicks);
                                alert("Debe clickear solo una vez, ya se esta procesando su ingreso.")
                            }
                        }
                    } else {
                        campos = validaCampos(4, fcCtr4, frCtr4, temAxCtr4, satOCtr4, psCtr4, pdCtr4, hgtCtr4, evaCtr4, eGlsCrt4);
                        if (campos === true) {
                            countClicks = countClicks + 1;
                            tipoControl = 4;
                            obtenerValidacionHora(conId, fechaYHoraPantalla, Realizado1, Realizado2, Realizado3, indDos1, indDos2, indDos3, RealizadoIndDos1, RealizadoIndDos2, RealizadoIndDos3, indTres1, indTres2, indTres3, RealizadoIndTres1, RealizadoIndTres2, RealizadoIndTres3, horaControl1, horaControl2, horaControl3, horaControl4, horaControl5, horaControl6, fcCtr1, fcCtr2, fcCtr3, fcCtr4, fcCtr5, fcCtr6, frCtr1, frCtr2, frCtr3, frCtr4, frCtr5, frCtr6, temAxCtr1, temAxCtr2, temAxCtr3, temAxCtr4, temAxCtr5, temAxCtr6, satOCtr1, satOCtr2, satOCtr3, satOCtr4, satOCtr5, satOCtr6, hgtCtr1, hgtCtr2, hgtCtr3, hgtCtr4, hgtCtr5, hgtCtr6, psCtr1, psCtr2, psCtr3, psCtr4, psCtr5, psCtr6, pdCtr1, pdCtr2, pdCtr3, pdCtr4, pdCtr5, pdCtr6, eGlsCrt1, eGlsCrt2, eGlsCrt3, eGlsCrt4, eGlsCrt5, eGlsCrt6, evaCtr1, evaCtr2, evaCtr3, evaCtr4, evaCtr5, evaCtr6, ObservacionesTto, perId, fechaSalida, tipoControl, ObtenerListaindDos1, ObtenerListaindDos2, ObtenerListaindDos3, ObtenerListaindTres1, ObtenerListaindTres2, ObtenerListaindTres3);
                            //obtenerValidacionHoraModificado(conId, fechaYHoraPantalla, ObtenerListaind1, ObtenerListaind2, ObtenerListaind3, Realizado1, Realizado2, Realizado3, indDos1, indDos2, indDos3, RealizadoIndDos1, RealizadoIndDos2, RealizadoIndDos3, indTres1, indTres2, indTres3, RealizadoIndTres1, RealizadoIndTres2, RealizadoIndTres3, horaControl1, horaControl2, horaControl3, horaControl4, horaControl5, horaControl6, fcCtr1, fcCtr2, fcCtr3, fcCtr4, fcCtr5, fcCtr6, frCtr1, frCtr2, frCtr3, frCtr4, frCtr5, frCtr6, temAxCtr1, temAxCtr2, temAxCtr3, temAxCtr4, temAxCtr5, temAxCtr6, satOCtr1, satOCtr2, satOCtr3, satOCtr4, satOCtr5, satOCtr6, hgtCtr1, hgtCtr2, hgtCtr3, hgtCtr4, hgtCtr5, hgtCtr6, psCtr1, psCtr2, psCtr3, psCtr4, psCtr5, psCtr6, pdCtr1, pdCtr2, pdCtr3, pdCtr4, pdCtr5, pdCtr6, eGlsCrt1, eGlsCrt2, eGlsCrt3, eGlsCrt4, eGlsCrt5, eGlsCrt6, evaCtr1, evaCtr2, evaCtr3, evaCtr4, evaCtr5, evaCtr6, ObservacionesTto, perId, fechaSalida, ObtenerListaindDos1, ObtenerListaindDos2, ObtenerListaindDos3, ObtenerListaindTres1, ObtenerListaindTres2, ObtenerListaindTres3);
                            console.log("se resetea contador de " + countClicks);
                        }
                    } //END ELSE CONTROL 4
                } else
                //VALIDACION CONTROL 5
                if (document.getElementById('fcCtr2').disabled === true && document.getElementById('fcCtr3').disabled === true && document.getElementById('fcCtr4').disabled === true &&
                    document.getElementById('fcCtr5').disabled === false && document.getElementById('fcCtr6').disabled === true) {
                    if (fcCtr5 === "" && frCtr5 === "" && temAxCtr5 === "" && satOCtr5 === "" && psCtr5 === "" && pdCtr5 === "" && eGlsCrt5 === "") {
                        if (hgtCtr5 !== "" || evaCtr5 !== "") {
                            validaCamposCheck(5, fcCtr5, frCtr5, temAxCtr5, satOCtr5, psCtr5, pdCtr5, hgtCtr5, evaCtr5, eGlsCrt5);
                            alert("No se puede ingresar el registro,debe llenar los campos obligatorios para ingresar el procedimiento");
                            countClicks = 0;
                        } else {
                            countClicks = countClicks + 1;
                            if (countClicks === 1) {
                                tipoControl = 5;
                                obtenerValidacionHora(conId, fechaYHoraPantalla, Realizado1, Realizado2, Realizado3, indDos1, indDos2, indDos3, RealizadoIndDos1, RealizadoIndDos2, RealizadoIndDos3, indTres1, indTres2, indTres3, RealizadoIndTres1, RealizadoIndTres2, RealizadoIndTres3, horaControl1, horaControl2, horaControl3, horaControl4, horaControl5, horaControl6, fcCtr1, fcCtr2, fcCtr3, fcCtr4, fcCtr5, fcCtr6, frCtr1, frCtr2, frCtr3, frCtr4, frCtr5, frCtr6, temAxCtr1, temAxCtr2, temAxCtr3, temAxCtr4, temAxCtr5, temAxCtr6, satOCtr1, satOCtr2, satOCtr3, satOCtr4, satOCtr5, satOCtr6, hgtCtr1, hgtCtr2, hgtCtr3, hgtCtr4, hgtCtr5, hgtCtr6, psCtr1, psCtr2, psCtr3, psCtr4, psCtr5, psCtr6, pdCtr1, pdCtr2, pdCtr3, pdCtr4, pdCtr5, pdCtr6, eGlsCrt1, eGlsCrt2, eGlsCrt3, eGlsCrt4, eGlsCrt5, eGlsCrt6, evaCtr1, evaCtr2, evaCtr3, evaCtr4, evaCtr5, evaCtr6, ObservacionesTto, perId, fechaSalida, tipoControl, ObtenerListaindDos1, ObtenerListaindDos2, ObtenerListaindDos3, ObtenerListaindTres1, ObtenerListaindTres2, ObtenerListaindTres3);
                                //obtenerValidacionHoraModificado(conId, fechaYHoraPantalla, ObtenerListaind1, ObtenerListaind2, ObtenerListaind3, Realizado1, Realizado2, Realizado3, indDos1, indDos2, indDos3, RealizadoIndDos1, RealizadoIndDos2, RealizadoIndDos3, indTres1, indTres2, indTres3, RealizadoIndTres1, RealizadoIndTres2, RealizadoIndTres3, horaControl1, horaControl2, horaControl3, horaControl4, horaControl5, horaControl6, fcCtr1, fcCtr2, fcCtr3, fcCtr4, fcCtr5, fcCtr6, frCtr1, frCtr2, frCtr3, frCtr4, frCtr5, frCtr6, temAxCtr1, temAxCtr2, temAxCtr3, temAxCtr4, temAxCtr5, temAxCtr6, satOCtr1, satOCtr2, satOCtr3, satOCtr4, satOCtr5, satOCtr6, hgtCtr1, hgtCtr2, hgtCtr3, hgtCtr4, hgtCtr5, hgtCtr6, psCtr1, psCtr2, psCtr3, psCtr4, psCtr5, psCtr6, pdCtr1, pdCtr2, pdCtr3, pdCtr4, pdCtr5, pdCtr6, eGlsCrt1, eGlsCrt2, eGlsCrt3, eGlsCrt4, eGlsCrt5, eGlsCrt6, evaCtr1, evaCtr2, evaCtr3, evaCtr4, evaCtr5, evaCtr6, ObservacionesTto, perId, fechaSalida, ObtenerListaindDos1, ObtenerListaindDos2, ObtenerListaindDos3, ObtenerListaindTres1, ObtenerListaindTres2, ObtenerListaindTres3);
                                console.log("se resetea contador de " + countClicks);

                            } else {
                                console.log("cantidad de clicks hechos" + countClicks);
                                alert("Debe clickear solo una vez, ya se esta procesando su ingreso.")
                            }
                        }
                    } else {
                        campos = validaCampos(5, fcCtr5, frCtr5, temAxCtr5, satOCtr5, psCtr5, pdCtr5, hgtCtr5, evaCtr5, eGlsCrt5);
                        if (campos === true) {
                            countClicks = countClicks + 1;
                            tipoControl = 5;
                            obtenerValidacionHora(conId, fechaYHoraPantalla, Realizado1, Realizado2, Realizado3, indDos1, indDos2, indDos3, RealizadoIndDos1, RealizadoIndDos2, RealizadoIndDos3, indTres1, indTres2, indTres3, RealizadoIndTres1, RealizadoIndTres2, RealizadoIndTres3, horaControl1, horaControl2, horaControl3, horaControl4, horaControl5, horaControl6, fcCtr1, fcCtr2, fcCtr3, fcCtr4, fcCtr5, fcCtr6, frCtr1, frCtr2, frCtr3, frCtr4, frCtr5, frCtr6, temAxCtr1, temAxCtr2, temAxCtr3, temAxCtr4, temAxCtr5, temAxCtr6, satOCtr1, satOCtr2, satOCtr3, satOCtr4, satOCtr5, satOCtr6, hgtCtr1, hgtCtr2, hgtCtr3, hgtCtr4, hgtCtr5, hgtCtr6, psCtr1, psCtr2, psCtr3, psCtr4, psCtr5, psCtr6, pdCtr1, pdCtr2, pdCtr3, pdCtr4, pdCtr5, pdCtr6, eGlsCrt1, eGlsCrt2, eGlsCrt3, eGlsCrt4, eGlsCrt5, eGlsCrt6, evaCtr1, evaCtr2, evaCtr3, evaCtr4, evaCtr5, evaCtr6, ObservacionesTto, perId, fechaSalida, tipoControl, ObtenerListaindDos1, ObtenerListaindDos2, ObtenerListaindDos3, ObtenerListaindTres1, ObtenerListaindTres2, ObtenerListaindTres3);
                            //obtenerValidacionHoraModificado(conId, fechaYHoraPantalla, ObtenerListaind1, ObtenerListaind2, ObtenerListaind3, Realizado1, Realizado2, Realizado3, indDos1, indDos2, indDos3, RealizadoIndDos1, RealizadoIndDos2, RealizadoIndDos3, indTres1, indTres2, indTres3, RealizadoIndTres1, RealizadoIndTres2, RealizadoIndTres3, horaControl1, horaControl2, horaControl3, horaControl4, horaControl5, horaControl6, fcCtr1, fcCtr2, fcCtr3, fcCtr4, fcCtr5, fcCtr6, frCtr1, frCtr2, frCtr3, frCtr4, frCtr5, frCtr6, temAxCtr1, temAxCtr2, temAxCtr3, temAxCtr4, temAxCtr5, temAxCtr6, satOCtr1, satOCtr2, satOCtr3, satOCtr4, satOCtr5, satOCtr6, hgtCtr1, hgtCtr2, hgtCtr3, hgtCtr4, hgtCtr5, hgtCtr6, psCtr1, psCtr2, psCtr3, psCtr4, psCtr5, psCtr6, pdCtr1, pdCtr2, pdCtr3, pdCtr4, pdCtr5, pdCtr6, eGlsCrt1, eGlsCrt2, eGlsCrt3, eGlsCrt4, eGlsCrt5, eGlsCrt6, evaCtr1, evaCtr2, evaCtr3, evaCtr4, evaCtr5, evaCtr6, ObservacionesTto, perId, fechaSalida, ObtenerListaindDos1, ObtenerListaindDos2, ObtenerListaindDos3, ObtenerListaindTres1, ObtenerListaindTres2, ObtenerListaindTres3);
                            console.log("se resetea contador de " + countClicks);
                        }
                    } // END ELSE CONTROL 5
                } else {
                    //VALIDACION CONTROL 6
                    if (fcCtr6 === "" && frCtr6 === "" && temAxCtr6 === "" && satOCtr6 === "" && psCtr6 === "" && pdCtr6 === "" && eGlsCrt6 === "") {
                        if (hgtCtr6 !== "" || evaCtr6 !== "") {
                            validaCamposCheck(6, fcCtr6, frCtr6, temAxCtr6, satOCtr6, psCtr6, pdCtr6, hgtCtr6, evaCtr6, eGlsCrt6);
                            alert("No se puede ingresar el registro,debe llenar los campos obligatorios para ingresar el procedimiento");
                            countClicks = 0;
                        } else {
                            countClicks = countClicks + 1;
                            if (countClicks === 1) {
                                tipoControl = 6;
                                obtenerValidacionHora(conId, fechaYHoraPantalla, Realizado1, Realizado2, Realizado3, indDos1, indDos2, indDos3, RealizadoIndDos1, RealizadoIndDos2, RealizadoIndDos3, indTres1, indTres2, indTres3, RealizadoIndTres1, RealizadoIndTres2, RealizadoIndTres3, horaControl1, horaControl2, horaControl3, horaControl4, horaControl5, horaControl6, fcCtr1, fcCtr2, fcCtr3, fcCtr4, fcCtr5, fcCtr6, frCtr1, frCtr2, frCtr3, frCtr4, frCtr5, frCtr6, temAxCtr1, temAxCtr2, temAxCtr3, temAxCtr4, temAxCtr5, temAxCtr6, satOCtr1, satOCtr2, satOCtr3, satOCtr4, satOCtr5, satOCtr6, hgtCtr1, hgtCtr2, hgtCtr3, hgtCtr4, hgtCtr5, hgtCtr6, psCtr1, psCtr2, psCtr3, psCtr4, psCtr5, psCtr6, pdCtr1, pdCtr2, pdCtr3, pdCtr4, pdCtr5, pdCtr6, eGlsCrt1, eGlsCrt2, eGlsCrt3, eGlsCrt4, eGlsCrt5, eGlsCrt6, evaCtr1, evaCtr2, evaCtr3, evaCtr4, evaCtr5, evaCtr6, ObservacionesTto, perId, fechaSalida, tipoControl, ObtenerListaindDos1, ObtenerListaindDos2, ObtenerListaindDos3, ObtenerListaindTres1, ObtenerListaindTres2, ObtenerListaindTres3);
                                //obtenerValidacionHoraModificado(conId, fechaYHoraPantalla, ObtenerListaind1, ObtenerListaind2, ObtenerListaind3, Realizado1, Realizado2, Realizado3, indDos1, indDos2, indDos3, RealizadoIndDos1, RealizadoIndDos2, RealizadoIndDos3, indTres1, indTres2, indTres3, RealizadoIndTres1, RealizadoIndTres2, RealizadoIndTres3, horaControl1, horaControl2, horaControl3, horaControl4, horaControl5, horaControl6, fcCtr1, fcCtr2, fcCtr3, fcCtr4, fcCtr5, fcCtr6, frCtr1, frCtr2, frCtr3, frCtr4, frCtr5, frCtr6, temAxCtr1, temAxCtr2, temAxCtr3, temAxCtr4, temAxCtr5, temAxCtr6, satOCtr1, satOCtr2, satOCtr3, satOCtr4, satOCtr5, satOCtr6, hgtCtr1, hgtCtr2, hgtCtr3, hgtCtr4, hgtCtr5, hgtCtr6, psCtr1, psCtr2, psCtr3, psCtr4, psCtr5, psCtr6, pdCtr1, pdCtr2, pdCtr3, pdCtr4, pdCtr5, pdCtr6, eGlsCrt1, eGlsCrt2, eGlsCrt3, eGlsCrt4, eGlsCrt5, eGlsCrt6, evaCtr1, evaCtr2, evaCtr3, evaCtr4, evaCtr5, evaCtr6, ObservacionesTto, perId, fechaSalida, ObtenerListaindDos1, ObtenerListaindDos2, ObtenerListaindDos3, ObtenerListaindTres1, ObtenerListaindTres2, ObtenerListaindTres3);
                                console.log("se resetea contador de " + countClicks);
                            } else {
                                console.log("cantidad de clicks hechos" + countClicks);
                                alert("Debe clickear solo una vez, ya se esta procesando su ingreso.")
                            }
                        }
                    } else {
                        campos = validaCampos(6, fcCtr6, frCtr6, temAxCtr6, satOCtr6, psCtr6, pdCtr6, hgtCtr6, evaCtr6, eGlsCrt6);
                        if (campos === true) {
                            countClicks = countClicks + 1;
                            tipoControl = 6;
                            obtenerValidacionHora(conId, fechaYHoraPantalla, Realizado1, Realizado2, Realizado3, indDos1, indDos2, indDos3, RealizadoIndDos1, RealizadoIndDos2, RealizadoIndDos3, indTres1, indTres2, indTres3, RealizadoIndTres1, RealizadoIndTres2, RealizadoIndTres3, horaControl1, horaControl2, horaControl3, horaControl4, horaControl5, horaControl6, fcCtr1, fcCtr2, fcCtr3, fcCtr4, fcCtr5, fcCtr6, frCtr1, frCtr2, frCtr3, frCtr4, frCtr5, frCtr6, temAxCtr1, temAxCtr2, temAxCtr3, temAxCtr4, temAxCtr5, temAxCtr6, satOCtr1, satOCtr2, satOCtr3, satOCtr4, satOCtr5, satOCtr6, hgtCtr1, hgtCtr2, hgtCtr3, hgtCtr4, hgtCtr5, hgtCtr6, psCtr1, psCtr2, psCtr3, psCtr4, psCtr5, psCtr6, pdCtr1, pdCtr2, pdCtr3, pdCtr4, pdCtr5, pdCtr6, eGlsCrt1, eGlsCrt2, eGlsCrt3, eGlsCrt4, eGlsCrt5, eGlsCrt6, evaCtr1, evaCtr2, evaCtr3, evaCtr4, evaCtr5, evaCtr6, ObservacionesTto, perId, fechaSalida, tipoControl, ObtenerListaindDos1, ObtenerListaindDos2, ObtenerListaindDos3, ObtenerListaindTres1, ObtenerListaindTres2, ObtenerListaindTres3);
                            //obtenerValidacionHoraModificado(conId, fechaYHoraPantalla, ObtenerListaind1, ObtenerListaind2, ObtenerListaind3, Realizado1, Realizado2, Realizado3, indDos1, indDos2, indDos3, RealizadoIndDos1, RealizadoIndDos2, RealizadoIndDos3, indTres1, indTres2, indTres3, RealizadoIndTres1, RealizadoIndTres2, RealizadoIndTres3, horaControl1, horaControl2, horaControl3, horaControl4, horaControl5, horaControl6, fcCtr1, fcCtr2, fcCtr3, fcCtr4, fcCtr5, fcCtr6, frCtr1, frCtr2, frCtr3, frCtr4, frCtr5, frCtr6, temAxCtr1, temAxCtr2, temAxCtr3, temAxCtr4, temAxCtr5, temAxCtr6, satOCtr1, satOCtr2, satOCtr3, satOCtr4, satOCtr5, satOCtr6, hgtCtr1, hgtCtr2, hgtCtr3, hgtCtr4, hgtCtr5, hgtCtr6, psCtr1, psCtr2, psCtr3, psCtr4, psCtr5, psCtr6, pdCtr1, pdCtr2, pdCtr3, pdCtr4, pdCtr5, pdCtr6, eGlsCrt1, eGlsCrt2, eGlsCrt3, eGlsCrt4, eGlsCrt5, eGlsCrt6, evaCtr1, evaCtr2, evaCtr3, evaCtr4, evaCtr5, evaCtr6, ObservacionesTto, perId, fechaSalida, ObtenerListaindDos1, ObtenerListaindDos2, ObtenerListaindDos3, ObtenerListaindTres1, ObtenerListaindTres2, ObtenerListaindTres3);
                            console.log("se resetea contador de " + countClicks);
                        }
                    } //END ELSE INTERNO CONTROL 6
                } // END ELSE IF CONTROLES
            } // END ELSE PRINCIPAL DE VALIDACION DE CAMPOS
        } //END ELSE PRINCIPAL
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

    $("#ObservacionNsp").keyup(function() {
        contadorTexto = '';
        var data = $("#ObservacionNsp").val().length;
        var maxLength = 700;
        var minlength = 0;
        var contador = (minlength + data);
        if (contador == 700) { contadorTexto = contador + '/' + maxLength; } else { contadorTexto = contador + '/' + maxLength; }
        document.getElementById("numNsp").innerHTML = contadorTexto;
    });
    // ================================================================================================


    //METODO QUE HABILITA EL INGRESO DE MAS TRATAMIENTOS AL PACIENTE
    $("#IngresarMasTTo").on("click", function() {

        var ind1 = $("#ind1").val();
        var ind2 = $("#ind2").val();
        var ind3 = $("#ind3").val();
        var Realizado1 = $('input[name=Realizado1]').prop('checked');
        var Realizado2 = $('input[name=Realizado2]').prop('checked');
        var Realizado3 = $('input[name=Realizado3]').prop('checked');

        if ((ind1 !== "" && ind2 !== "" && ind3 !== "") && (Realizado1 !== false && Realizado2 !== false && Realizado3 !== false)) {
            $("#manejoYTratamientoDosyTres").show();
        } else
        if ((ind1 !== "" && ind2 !== "" && ind3 === "") && (Realizado1 !== false && Realizado2 !== false && Realizado3 === false)) {
            $("#manejoYTratamientoDosyTres").show();
        } else
        if ((ind1 !== "" && ind2 === "" && ind3 === "") && (Realizado1 !== false && Realizado2 === false && Realizado3 === false)) {
            $("#manejoYTratamientoDosyTres").show();
        } else {
            window.parent.$("#loader").hide();
            $("#manejoYTratamientoDosyTres").hide();
            alert("No se ha realizado las indicaciones descritas");
            ValidaManejoYTto(Realizado1, Realizado2, Realizado3);
            window.parent.$("html,body").animate({ scrollTop: 0 }, 600);
        }
    });

    //CONTADOR DE CARACTERES EN LAS OBSERVACIONES DEL TTO
    $("#ObservacionesTto").keyup(function() {
        contadorTexto = '';
        var data = $("#ObservacionesTto").val().length;
        var maxLength = 700;
        var minlength = 0;
        var contador = (minlength + data);
        if (contador == 700) { contadorTexto = contador + '/' + maxLength; } else { contadorTexto = contador + '/' + maxLength; }
        document.getElementById("charNum").innerHTML = contador + '/' + maxLength;
    });

    //VALIDA QUE EL INGRESO DEL PACIENTE NO TENGA NINGUN PROBLEMA
    $("#Aceptar").on("click", function() {
        var tab = $("#tabContent").val();
        var conId = $("#conId").val();
        var fechaHora = $("#fechaYhoraIngresoSistema").val();
        var perId = window.parent.$("#perId").val();
        var carId = 4;
        obtenerValidacionIngresoPacientes(conId, tab, fechaHora, perId, carId);
    });

    //VALIDA LOS CAMPOS Y LOS ENVIA PARA DESBLOQUEO Y SE PUEDA USAR EL PACIENTE CON OTRO PROFESIONAL
    $("#volver").on("click", function() {
        var tab = $("#tabContent").val();
        var conId = $("#conId").val();
        var fechaHora = $("#fechaYhoraIngresoSistema").val();
        var perId = window.parent.$("#perId").val();
        var carId = 4;
        obtenerValidacionIngresoPacientes(conId, tab, fechaHora, perId, carId);
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


    // INICIO VALIDACIONES FRECUENCIA CARDIACA
    $("#fcCtr2").keyup(function() {
        var fc = $("#fcCtr2").val();
        if (fc >= 0 && fc <= 300) {} else {
            alert("El valor ingresado no puede ser mayor a 300");
            $("#fcCtr2").val("");
        }
    });

    $("#fcCtr3").keyup(function() {
        var fc = $("#fcCtr3").val();
        if (fc >= 0 && fc <= 300) {} else {
            alert("El valor ingresado no puede ser mayor a 300");
            $("#fcCtr3").val("");
        }
    });
    $("#fcCtr4").keyup(function() {
        var fc = $("#fcCtr4").val();
        if (fc >= 0 && fc <= 300) {} else {
            alert("El valor ingresado no puede ser mayor a 300");
            $("#fcCtr4").val("");
        }
    });
    $("#fcCtr5").keyup(function() {
        var fc = $("#fcCtr5").val();
        if (fc >= 0 && fc <= 300) {} else {
            alert("El valor ingresado no puede ser mayor a 300");
            $("#fcCtr5").val("");
        }
    });
    $("#fcCtr6").keyup(function() {
        var fc = $("#fcCtr6").val();
        if (fc >= 0 && fc <= 300) {} else {
            alert("El valor ingresado no puede ser mayor a 300");
            $("#fcCtr6").val("");
        }
    });

    // INICIO VALIDACIONES FRECUENCIA RESPIRATORIA
    $("#frCtr2").keyup(function() {
        var fr = $("#frCtr2").val();
        if (fr >= 0 && fr <= 100) {} else {
            alert("El valor ingresado no puede ser mayor a 100");
            $("#frCtr2").val("");
        }
    });

    $("#frCtr3").keyup(function() {
        var fr = $("#frCtr3").val();
        if (fr >= 0 && fr <= 100) {} else {
            alert("El valor ingresado no puede ser mayor a 100");
            $("#frCtr3").val("");
        }
    });

    $("#frCtr4").keyup(function() {
        var fr = $("#frCtr4").val();
        if (fr >= 0 && fr <= 100) {} else {
            alert("El valor ingresado no puede ser mayor a 100");
            $("#frCtr4").val("");
        }
    });

    $("#frCtr5").keyup(function() {
        var fr = $("#frCtr5").val();
        if (fr >= 0 && fr <= 100) {} else {
            alert("El valor ingresado no puede ser mayor a 100");
            $("#frCtr5").val("");
        }
    });

    $("#frCtr6").keyup(function() {
        var fr = $("#frCtr6").val();
        if (fr >= 0 && fr <= 100) {} else {
            alert("El valor ingresado no puede ser mayor a 100");
            $("#frCtr6").val("");
        }
    });

    // INICIO VALIDACIONES TEMPERATURA AXILAR
    function isCommaDecimalNumber(value) {
        return /^-?(?:\d+(?:,\d*)?)$/.test(value);
    }

    $("#temAxCtr2").keyup(function() {
        var tempAx = $("#temAxCtr2").val();
        if (tempAx === "") {} else {
            if (isCommaDecimalNumber(tempAx) === true) {
                var valid = tempAx.split(",");
                if (valid[0] >= 0 && valid[0] <= 45) {} else {
                    alert("El valor ingresado no puede ser mayor a 45");
                    $("#temAxCtr2").val("");
                }
            } else {
                alert("El valor ingresado no puede llevar otro separador que no sea una ',' ");
                $("#temAxCtr2").val("");
            }
        }
    });


    $("#temAxCtr3").keyup(function() {
        var tempAx = $("#temAxCtr3").val();
        if (tempAx === "") {} else {
            if (isCommaDecimalNumber(tempAx) === true) {
                var valid = tempAx.split(",");
                if (valid[0] >= 0 && valid[0] <= 45) {} else {
                    alert("El valor ingresado no puede ser mayor a 45");
                    $("#temAxCtr3").val("");
                }
            } else {
                alert("El valor ingresado no puede llevar otro separador que no sea una ',' ");
                $("#temAxCtr3").val("");
            }
        }
    });

    $("#temAxCtr4").keyup(function() {
        var tempAx = $("#temAxCtr4").val();
        if (tempAx === "") {} else {
            if (isCommaDecimalNumber(tempAx) === true) {
                var valid = tempAx.split(",");
                if (valid[0] >= 0 && valid[0] <= 45) {} else {
                    alert("El valor ingresado no puede ser mayor a 45");
                    $("#temAxCtr4").val("");
                }
            } else {
                alert("El valor ingresado no puede llevar otro separador que no sea una ',' ");
                $("#temAxCtr4").val("");
            }
        }
    });

    $("#temAxCtr5").keyup(function() {
        var tempAx = $("#temAxCtr5").val();
        if (tempAx === "") {} else {
            if (isCommaDecimalNumber(tempAx) === true) {
                var valid = tempAx.split(",");
                if (valid[0] >= 0 && valid[0] <= 45) {} else {
                    alert("El valor ingresado no puede ser mayor a 45");
                    $("#temAxCtr5").val("");
                }
            } else {
                alert("El valor ingresado no puede llevar otro separador que no sea una ',' ");
                $("#temAxCtr5").val("");
            }
        }
    });

    $("#temAxCtr6").keyup(function() {
        var tempAx = $("#temAxCtr6").val();
        if (tempAx === "") {} else {
            if (isCommaDecimalNumber(tempAx) === true) {
                var valid = tempAx.split(",");
                if (valid[0] >= 0 && valid[0] <= 45) {} else {
                    alert("El valor ingresado no puede ser mayor a 45");
                    $("#temAxCtr6").val("");
                }
            } else {
                alert("El valor ingresado no puede llevar otro separador que no sea una ',' ");
                $("#temAxCtr6").val("");
            }
        }
    });

    // INICIO VALIDACIONES SAT O2
    $("#satOCtr2").keyup(function() {
        var satO2 = $("#satOCtr2").val();
        if (satO2 >= 0 && satO2 <= 100) {} else {
            alert("El valor ingresado no puede ser mayor a 100");
            $("#satOCtr2").val("");
        }
    });

    $("#satOCtr3").keyup(function() {
        var satO2 = $("#satOCtr3").val();
        if (satO2 >= 0 && satO2 <= 100) {} else {
            alert("El valor ingresado no puede ser mayor a 100");
            $("#satOCtr3").val("");
        }
    });

    $("#satOCtr4").keyup(function() {
        var satO2 = $("#satOCtr4").val();
        if (satO2 >= 0 && satO2 <= 100) {} else {
            alert("El valor ingresado no puede ser mayor a 100");
            $("#satOCtr4").val("");
        }
    });

    $("#satOCtr5").keyup(function() {
        var satO2 = $("#satOCtr5").val();
        if (satO2 >= 0 && satO2 <= 100) {} else {
            alert("El valor ingresado no puede ser mayor a 100");
            $("#satOCtr5").val("");
        }
    });

    $("#satOCtr6").keyup(function() {
        var satO2 = $("#satOCtr6").val();
        if (satO2 >= 0 && satO2 <= 100) {} else {
            alert("El valor ingresado no puede ser mayor a 100");
            $("#satOCtr6").val("");
        }
    });

    // INICIO VALIDACIONES HGT


    $("#hgt").keyup(function() {
        var hgt = $("#hgt").val();

        if (hgt === "" || hgt.length < 2) {} else {
            if ((hgt >= 0 && hgt <= 1000) || (hgt === "HI" || hgt === "LO") || (hgt === "Hi" || hgt === "Lo") || (hgt === "hi" || hgt === "lo") || (hgt === "hI" || hgt === "lO")) {} else {
                if ((hgt !== "HI" || hgt !== "LO") || (hgt !== "Hi" || hgt !== "Lo") || (hgt !== "hi" || hgt !== "lo") || (hgt === "hI" || hgt === "lO")) {
                    alert("El valor ingresado debe ser HI o LO");
                    $("#hgt").val("");
                } else {
                    alert("El valor ingresado no puede ser igual a 0 o mayor a 1000");
                    $("#hgt").val("");
                }
            }
        }
    });



    $("#hgtCtr2").on("keydown", function(e) {
        if (!BlockKeys(/[0-9hiloHILO]/, e.key)) { return false; }
        var hgt = $("#hgtCtr2").val();
        //SI ES LETRA
        if (isNaN(hgt)) {
            if (hgt.length < 2) {} else {
                if ((hgt === "HI" || hgt === "LO") || (hgt === "Hi" || hgt === "Lo") || (hgt === "hi" || hgt === "lo") || (hgt === "hI" || hgt === "lO")) {} else {
                    alert("El valor ingresado debe ser HI o LO");
                    $("#hgtCtr2").val("");
                }
            }
        } else {
            if (hgt >= 0 && hgt <= 1000) {

            } else {
                alert("El valor ingresado no puede ser igual a 0 o mayor a 1000");
                $("#hgtCtr2").val("");
            }
        }
    });


    $("#hgtCtr3").on("keydown", function(e) {
        if (!BlockKeys(/[0-9hiloHILO]/, e.key)) { return false; }
        var hgt = $("#hgtCtr3").val();
        if (hgt === "" || hgt.length < 2) {} else {
            if ((hgt >= 0 && hgt <= 1000) || (hgt === "HI" || hgt === "LO") || (hgt === "Hi" || hgt === "Lo") || (hgt === "hi" || hgt === "lo") || (hgt === "hI" || hgt === "lO")) {} else {
                if ((hgt !== "HI" || hgt !== "LO") || (hgt !== "Hi" || hgt !== "Lo") || (hgt !== "hi" || hgt !== "lo") || (hgt === "hI" || hgt === "lO")) {
                    alert("El valor ingresado debe ser HI o LO");
                    $("#hgtCtr3").val("");
                } else {
                    alert("El valor ingresado no puede ser igual a 0 o mayor a 1000");
                    $("#hgtCtr3").val("");
                }
            }
        }
    });
    $("#hgtCtr4").on("keydown", function(e) {
        if (!BlockKeys(/[0-9hiloHILO]/, e.key)) { return false; }
        var hgt = $("#hgtCtr4").val();
        if (hgt === "" || hgt.length < 2) {} else {
            if ((hgt >= 0 && hgt <= 1000) || (hgt === "HI" || hgt === "LO") || (hgt === "Hi" || hgt === "Lo") || (hgt === "hi" || hgt === "lo") || (hgt === "hI" || hgt === "lO")) {} else {
                if ((hgt !== "HI" || hgt !== "LO") || (hgt !== "Hi" || hgt !== "Lo") || (hgt !== "hi" || hgt !== "lo") || (hgt === "hI" || hgt === "lO")) {
                    alert("El valor ingresado debe ser HI o LO");
                    $("#hgtCtr4").val("");
                } else {
                    alert("El valor ingresado no puede ser igual a 0 o mayor a 1000");
                    $("#hgtCtr4").val("");
                }
            }
        }
    });
    $("#hgtCtr5").on("keydown", function(e) {
        if (!BlockKeys(/[0-9hiloHILO]/, e.key)) { return false; }
        var hgt = $("#hgtCtr5").val();
        if (hgt === "" || hgt.length < 2) {} else {
            if ((hgt >= 0 && hgt <= 1000) || (hgt === "HI" || hgt === "LO") || (hgt === "Hi" || hgt === "Lo") || (hgt === "hi" || hgt === "lo") || (hgt === "hI" || hgt === "lO")) {} else {
                if ((hgt !== "HI" || hgt !== "LO") || (hgt !== "Hi" || hgt !== "Lo") || (hgt !== "hi" || hgt !== "lo") || (hgt === "hI" || hgt === "lO")) {
                    alert("El valor ingresado debe ser HI o LO");
                    $("#hgtCtr5").val("");
                } else {
                    alert("El valor ingresado no puede ser igual a 0 o mayor a 1000");
                    $("#hgtCtr5").val("");
                }
            }
        }
    });
    $("#hgtCtr6").on("keydown", function(e) {
        if (!BlockKeys(/[0-9hiloHILO]/, e.key)) { return false; }
        var hgt = $("#hgtCtr6").val();
        if (hgt === "" || hgt.length < 2) {} else {
            if ((hgt >= 0 && hgt <= 1000) || (hgt === "HI" || hgt === "LO") || (hgt === "Hi" || hgt === "Lo") || (hgt === "hi" || hgt === "lo") || (hgt === "hI" || hgt === "lO")) {} else {
                if ((hgt !== "HI" || hgt !== "LO") || (hgt !== "Hi" || hgt !== "Lo") || (hgt !== "hi" || hgt !== "lo") || (hgt === "hI" || hgt === "lO")) {
                    alert("El valor ingresado debe ser HI o LO");
                    $("#hgtCtr6").val("");
                } else {
                    alert("El valor ingresado no puede ser igual a 0 o mayor a 1000");
                    $("#hgtCtr6").val("");
                }
            }
        }
    });

    // INICIO VALIDACIONES PRESION ARTERIAL SISTOLICA
    $("#psCtr2").keyup(function() {
        var ps = $("#psCtr2").val();
        if (ps >= 0 && ps <= 300) {} else {
            alert("El valor ingresado no puede ser mayor a 300");
            $("#psCtr2").val("");
        }
    });

    $("#psCtr3").keyup(function() {
        var ps = $("#psCtr3").val();
        if (ps >= 0 && ps <= 300) {} else {
            alert("El valor ingresado no puede ser mayor a 300");
            $("#psCtr3").val("");
        }
    });

    $("#psCtr4").keyup(function() {
        var ps = $("#psCtr4").val();
        if (ps >= 0 && ps <= 300) {} else {
            alert("El valor ingresado no puede ser mayor a 300");
            $("#psCtr4").val("");
        }
    });

    $("#psCtr5").keyup(function() {
        var ps = $("#psCtr5").val();
        if (ps >= 0 && ps <= 300) {} else {
            alert("El valor ingresado no puede ser mayor a 300");
            $("#psCtr5").val("");
        }
    });

    $("#psCtr6").keyup(function() {
        var ps = $("#psCtr6").val();
        if (ps >= 0 && ps <= 300) {} else {
            alert("El valor ingresado no puede ser mayor a 300");
            $("#psCtr6").val("");
        }
    });

    // INICIO VALIDACIONES PRESION ARTERIAL DIASISTOLICA
    $("#pdCtr2").keyup(function() {
        var pd = $("#pdCtr2").val();
        if (pd >= 0 && pd <= 300) {} else {
            alert("El valor ingresado no puede ser mayor a 300");
            $("#pdCtr2").val("");
        }
    });
    $("#pdCtr3").keyup(function() {
        var pd = $("#pdCtr3").val();
        if (pd >= 0 && pd <= 300) {} else {
            alert("El valor ingresado no puede ser mayor a 300");
            $("#pdCtr3").val("");
        }
    });
    $("#pdCtr4").keyup(function() {
        var pd = $("#pdCtr4").val();
        if (pd >= 0 && pd <= 300) {} else {
            alert("El valor ingresado no puede ser mayor a 300");
            $("#pdCtr4").val("");
        }
    });
    $("#pdCtr5").keyup(function() {
        var pd = $("#pdCtr5").val();
        if (pd >= 0 && pd <= 300) {} else {
            alert("El valor ingresado no puede ser mayor a 300");
            $("#pdCtr5").val("");
        }
    });
    $("#pdCtr6").keyup(function() {
        var pd = $("#pdCtr6").val();
        if (pd >= 0 && pd <= 300) {} else {
            alert("El valor ingresado no puede ser mayor a 300");
            $("#pdCtr6").val("");
        }
    });

    // INICIO VALIDACIONES EXAMEN EVA
    $("#evaCtr2").keyup(function() {
        var eEva = $("#evaCtr2").val();
        if (eEva > 0 && eEva <= 10) {} else {
            if (eEva !== "") {
                alert("El valor ingresado no puede ser mayor a 10");
                $("#evaCtr2").val("");
            }
        }
    });

    $("#evaCtr3").keyup(function() {
        var eEva = $("#evaCtr3").val();
        if (eEva > 0 && eEva <= 10) {} else {
            if (eEva !== "") {
                alert("El valor ingresado no puede ser mayor a 10");
                $("#evaCtr3").val("");
            }
        }
    });

    $("#evaCtr4").keyup(function() {
        var eEva = $("#evaCtr4").val();
        if (eEva > 0 && eEva <= 10) {} else {
            if (eEva !== "") {
                alert("El valor ingresado no puede ser mayor a 10");
                $("#evaCtr4").val("");
            }
        }
    });

    $("#evaCtr5").keyup(function() {
        var eEva = $("#evaCtr5").val();
        if (eEva > 0 && eEva <= 10) {} else {
            if (eEva !== "") {
                alert("El valor ingresado no puede ser mayor a 10");
                $("#evaCtr5").val("");
            }
        }
    });

    $("#evaCtr6").keyup(function() {
        var eEva = $("#evaCtr6").val();
        if (eEva > 0 && eEva <= 10) {} else {
            if (eEva !== "") {
                alert("El valor ingresado no puede ser mayor a 10");
                $("#evaCtr6").val("");
            }
        }
    });


    //RESTRICCION CARACTERES ESPECIALES 
    $("#fcCtr2").on("keydown", function(e) {
        if (!BlockKeys(/[0-9ArrowRightArrowLeft]/, e.key)) { return false; }
    });

    $("#fcCtr3").on("keydown", function(e) {
        if (!BlockKeys(/[0-9ArrowRightArrowLeft]/, e.key)) { return false; }
    });

    $("#fcCtr4").on("keydown", function(e) {
        if (!BlockKeys(/[0-9ArrowRightArrowLeft]/, e.key)) { return false; }
    });

    $("#fcCtr5").on("keydown", function(e) {
        if (!BlockKeys(/[0-9ArrowRightArrowLeft]/, e.key)) { return false; }
    });

    $("#fcCtr6").on("keydown", function(e) {
        if (!BlockKeys(/[0-9ArrowRightArrowLeft]/, e.key)) { return false; }
    });

    $("#frCtr2").on("keydown", function(e) {
        if (!BlockKeys(/[0-9ArrowRightArrowLeft]/, e.key)) { return false; }
    });

    $("#frCtr3").on("keydown", function(e) {
        if (!BlockKeys(/[0-9ArrowRightArrowLeft]/, e.key)) { return false; }
    });

    $("#frCtr4").on("keydown", function(e) {
        if (!BlockKeys(/[0-9ArrowRightArrowLeft]/, e.key)) { return false; }
    });

    $("#frCtr5").on("keydown", function(e) {
        if (!BlockKeys(/[0-9ArrowRightArrowLeft]/, e.key)) { return false; }
    });

    $("#frCtr6").on("keydown", function(e) {
        if (!BlockKeys(/[0-9ArrowRightArrowLeft]/, e.key)) { return false; }
    });

    $("#satOCtr2").on("keydown", function(e) {
        if (!BlockKeys(/[0-9ArrowRightArrowLeft]/, e.key)) { return false; }
    });

    $("#satOCtr3").on("keydown", function(e) {
        if (!BlockKeys(/[0-9ArrowRightArrowLeft]/, e.key)) { return false; }
    });

    $("#satOCtr4").on("keydown", function(e) {
        if (!BlockKeys(/[0-9ArrowRightArrowLeft]/, e.key)) { return false; }
    });

    $("#satOCtr5").on("keydown", function(e) {
        if (!BlockKeys(/[0-9ArrowRightArrowLeft]/, e.key)) { return false; }
    });

    $("#satOCtr6").on("keydown", function(e) {
        if (!BlockKeys(/[0-9ArrowRightArrowLeft]/, e.key)) { return false; }
    });

    $("#psCtr2").on("keydown", function(e) {
        if (!BlockKeys(/[0-9ArrowRightArrowLeft]/, e.key)) { return false; }
    });

    $("#psCtr3").on("keydown", function(e) {
        if (!BlockKeys(/[0-9ArrowRightArrowLeft]/, e.key)) { return false; }
    });

    $("#psCtr4").on("keydown", function(e) {
        if (!BlockKeys(/[0-9ArrowRightArrowLeft]/, e.key)) { return false; }
    });

    $("#psCtr5").on("keydown", function(e) {
        if (!BlockKeys(/[0-9ArrowRightArrowLeft]/, e.key)) { return false; }
    });

    $("#psCtr6").on("keydown", function(e) {
        if (!BlockKeys(/[0-9ArrowRightArrowLeft]/, e.key)) { return false; }
    });

    $("#pdCtr2").on("keydown", function(e) {
        if (!BlockKeys(/[0-9ArrowRightArrowLeft]/, e.key)) { return false; }
    });

    $("#pdCtr3").on("keydown", function(e) {
        if (!BlockKeys(/[0-9ArrowRightArrowLeft]/, e.key)) { return false; }
    });

    $("#pdCtr4").on("keydown", function(e) {
        if (!BlockKeys(/[0-9ArrowRightArrowLeft]/, e.key)) { return false; }
    });

    $("#pdCtr5").on("keydown", function(e) {
        if (!BlockKeys(/[0-9ArrowRightArrowLeft]/, e.key)) { return false; }
    });

    $("#pdCtr6").on("keydown", function(e) {
        if (!BlockKeys(/[0-9ArrowRightArrowLeft]/, e.key)) { return false; }
    });

    $("#eGlsCrt1").on("keydown", function(e) {
        if (!BlockKeys(/[0-9ArrowRightArrowLeft]/, e.key)) { return false; }
    });

    $("#eGlsCrt2").on("keydown", function(e) {
        if (!BlockKeys(/[0-9ArrowRightArrowLeft]/, e.key)) { return false; }
    });

    $("#eGlsCrt3").on("keydown", function(e) {
        if (!BlockKeys(/[0-9ArrowRightArrowLeft]/, e.key)) { return false; }
    });

    $("#eGlsCrt4").on("keydown", function(e) {
        if (!BlockKeys(/[0-9ArrowRightArrowLeft]/, e.key)) { return false; }
    });

    $("#eGlsCrt5").on("keydown", function(e) {
        if (!BlockKeys(/[0-9ArrowRightArrowLeft]/, e.key)) { return false; }
    });

    $("#eGlsCrt6").on("keydown", function(e) {
        if (!BlockKeys(/[0-9ArrowRightArrowLeft]/, e.key)) { return false; }
    });

    $("#evaCtr2").on("keydown", function(e) {
        if (!BlockKeys(/[0-9ArrowRightArrowLeft]/, e.key)) { return false; }
    });

    $("#evaCtr3").on("keydown", function(e) {
        if (!BlockKeys(/[0-9ArrowRightArrowLeft]/, e.key)) { return false; }
    });

    $("#evaCtr4").on("keydown", function(e) {
        if (!BlockKeys(/[0-9ArrowRightArrowLeft]/, e.key)) { return false; }
    });

    $("#evaCtr5").on("keydown", function(e) {
        if (!BlockKeys(/[0-9ArrowRightArrowLeft]/, e.key)) { return false; }
    });

    $("#evaCtr6").on("keydown", function(e) {
        if (!BlockKeys(/[0-9ArrowRightArrowLeft]/, e.key)) { return false; }
    });

    $("#temAxCtr2").on("keydown", function(e) {
        if (!BlockKeys(/[0-9ArrowRightArrowLeft,]/, e.key)) { return false; }
    });

    $("#temAxCtr3").on("keydown", function(e) {
        if (!BlockKeys(/[0-9ArrowRightArrowLeft,]/, e.key)) { return false; }
    });

    $("#temAxCtr4").on("keydown", function(e) {
        if (!BlockKeys(/[0-9ArrowRightArrowLeft,]/, e.key)) { return false; }
    });

    $("#temAxCtr5").on("keydown", function(e) {
        if (!BlockKeys(/[0-9ArrowRightArrowLeft,]/, e.key)) { return false; }
    });

    $("#temAxCtr6").on("keydown", function(e) {
        if (!BlockKeys(/[0-9ArrowRightArrowLeft,]/, e.key)) { return false; }
    });

    $("#ObservacionesTto").on("keydown", function(e) {
        if (!BlockKeys(/[a-zA-Z,./1-9-*""#$%&()?¿¡!=´+áúéíóüñÑ0°<>_;:ArrowRightArrowLeft']/, e.key)) { return false; }
    });

    $("#ObservacionNsp").on("keydown", function(e) {
        if (!BlockKeys(/[a-zA-Z,./1-9-*""#$%&()?¿¡!=´+áúéíóüñÑ0°<>_;:ArrowRightArrowLeft']/, e.key)) { return false; }
    });

    $('input:text, textarea').on('keypress', function(e) {
        /*  ASCII CODES 
            39 => '
            92 => \
            64 =>  @
            124 => |
            172 => ¼
            61 => =
            95 => _
            176 => ░
            123 => {
            125 => }
            91 => [
            93 => ]
            191 => ┐
            161 => í
            63 => ?
            34 => ""
         */
        if (e.which !== 39 && e.which !== 92 && e.which !== 64 && e.which !== 124 && e.which !== 172 && e.which !== 61 && e.which !== 95 && e.which !== 176 &&
            e.which !== 123 && e.which !== 125 && e.which !== 91 && e.which !== 93 && e.which !== 191 && e.which !== 161 && e.which !== 63 && e.which !== 34) {
            return true;
        } else {
            return false;
        }
    });

}); //END DOCUMENT JQUERY


function BlockKeys(regexPermitido, key) {
    if (key != "Backspace" && key != " " && key != "Tab" && !key.match(regexPermitido)) {
        return false; //dont display key if it is a number
    }
    return true;
}