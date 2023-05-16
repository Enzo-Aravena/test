let countClicks = 0;
let valorsesion = 0;
let recuadroDataVisible = false;
let centroTrabajo = window.parent.$("#centroTrabajo").val();
let title = "";
let select = "";
let contadorTexto = '';
let sinRut = '';
let texto = '';

var reloj = window.parent.$("#reloj").val();
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
    if (valorsesion == 0) { cargarDatosPaciente(conId); }
    if (valorsesion == 0) { cargarListaMotivo(); }
    if (valorsesion == "-1") { FinalizarSesion(); }

    switch (centroTrabajo) {
        case "1":
            title = "Triage Pacientes Carol Urzúa";
            break;
        case "2":
            title = "Triage Pacientes La Faena";
            break;
        case "3":
            title = "Triage Pacientes San Luis";
            break;
        case "4":
            title = "Triage Pacientes Lo Hermida";
            break;
        case "5":
            title = "Triage Pacientes C. Silva Henriquez";
            break;
        case "8":
            title = "Triage Pacientes SAR Carol Urzúa";
            break;
        case "9":
            title = "Triage Pacientes SAPU La Faena";
            break;
        case "10":
            title = "Triage Pacientes SAPU Lo Hermida";
            break;
        case "11":
            title = "Triage Pacientes SAPU San Luis";
            break;
        case "12":
            title = "Triage Pacientes P. Gerardo Whelan";
            break;
        case "13":
            title = "Triage Pacientes Las Torres";
            break;
            //case "99":	title= "Registro Urgencia SAPU Las Torres";	break;
    }
    window.parent.$("#tituloPestaña").text(title);

    $("#ingresarTriage").on("click", function() {
        var perId = window.parent.$("#perId").val();
        var conId = $("#conId").val();
        var fechaYHoraPantalla = $("#fechaYhoraIngresoSistema").val();
        var fc = $("#fc").val();
        var fr = $("#fr").val();
        var tempAx = $("#tempAx").val();
        var satO = $("#satO").val();
        var ps = $("#ps").val();
        var pd = $("#pd").val();
        var hgt = $("#hgt").val();
        var eEva = $("#eEva").val();
        var eglasgow = $("#eglasgow").val();
        var HTA = $('input[name=HTA]').prop('checked');
        var DM2 = $('input[name=DM2]').prop('checked');
        var EPOC = $('input[name=EPOC]').prop('checked');
        var ASMA = $('input[name=ASMA]').prop('checked');
        var IRC = $('input[name=IRC]').prop('checked');
        var DHC = $('input[name=DHC]').prop('checked');
        var OTRAS = $('input[name=OTRAS]').prop('checked');
        var otrosEcDescrip = $("#otrosEcDescrip").val();
        var alergias = $("#alergias").val();
        var categorizacion = $('input:radio[name=categorizacion]:checked').val();
        var horaCat = $("#horaCat").val();
        var peso = $("#peso").val();
        if (validaPeso(peso) === false) { var peso = ""; }
        validaCampos(fc, fr, tempAx, satO, eglasgow, alergias, categorizacion);

        if (OTRAS === true && otrosEcDescrip.trim() === "") {
            $("#otrosEcDescrip").css("border-color", "red");
            alert("Debe especificar la descripción si marca OTRAS.");
            countClicks = 0;
        } else {
            if (OTRAS === false && otrosEcDescrip.trim() !== "") {
                alert("Debe marcar OTRAS si añade una descripción.");
                $("input[name=OTRAS]").next().css('color', 'red', 'font-weight', 'bold');
                countClicks = 0;
            } else {
                if (fc !== "" && tempAx !== "" && fr !== "" && satO !== "" && eglasgow !== "" && alergias !== "" && categorizacion !== undefined) {
                    if (hgt === "") {
                        countClicks = countClicks + 1;
                        if (countClicks === 1) {
                            registrarTriage(conId, fechaYHoraPantalla, fc, fr, tempAx, satO, ps, pd, hgt, eEva, eglasgow, HTA, DM2, EPOC, ASMA, IRC, DHC, OTRAS, otrosEcDescrip, alergias, categorizacion, horaCat, perId, peso);
                            console.log("se resetea contador de " + countClicks);
                        } else {
                            console.log("cantidad de clicks hechos" + countClicks);
                            alert("Debe clickear solo una vez, ya se esta procesando su ingreso.")
                        }
                    } else {
                        if (isNaN(hgt)) {
                            if ((hgt === "HI" || hgt === "LO") || (hgt === "Hi" || hgt === "Lo") || (hgt === "hi" || hgt === "lo") || (hgt === "hI" || hgt === "lO")) {
                                countClicks = countClicks + 1;
                                if (countClicks === 1) {
                                    registrarTriage(conId, fechaYHoraPantalla, fc, fr, tempAx, satO, ps, pd, hgt, eEva, eglasgow, HTA, DM2, EPOC, ASMA, IRC, DHC, OTRAS, otrosEcDescrip, alergias, categorizacion, horaCat, perId, peso);
                                    console.log("se resetea contador de " + countClicks);
                                } else {
                                    console.log("cantidad de clicks hechos" + countClicks);
                                    alert("Debe clickear solo una vez, ya se esta procesando su ingreso.")
                                }
                            } else {
                                countClicks = 0;
                                alert("El valor ingresado debe ser HI o LO");
                                $("#hgt").val("");
                            }
                        } else {
                            if (hgt >= 0 && hgt <= 1000) {
                                countClicks = countClicks + 1;
                                if (countClicks === 1) {
                                    registrarTriage(conId, fechaYHoraPantalla, fc, fr, tempAx, satO, ps, pd, hgt, eEva, eglasgow, HTA, DM2, EPOC, ASMA, IRC, DHC, OTRAS, otrosEcDescrip, alergias, categorizacion, horaCat, perId, peso);
                                    console.log("se resetea contador de " + countClicks);
                                } else {
                                    console.log("cantidad de clicks hechos" + countClicks);
                                    alert("Debe clickear solo una vez, ya se esta procesando su ingreso.")
                                }
                            } else {
                                countClicks = 0;
                                alert("El valor ingresado no puede ser igual a 0 o mayor a 1000");
                                $("#hgt").val("");
                            }
                        }
                    }
                } else {
                    countClicks = 0;
                    window.parent.$("html,body").animate({ scrollTop: 0 }, 600);
                    window.parent.$("#loader").hide();
                    alert("Error al triar el paciente, Favor Complete los campos en rojo.");
                } // END VALIDACION DE CAMPOS IMPORTANTES DEL SISTEMA PARA EL INGRESO DE LA DATA

            } //END ELSE VALIDACION OTRAS COMO FALSE Y DESCRIPCION CON DATOS
        } // END ELSE VALIDACION OTRAS MARCADA  Y DESCRIPCION VACIA
    });

    $("#ingresarNsp").on("click", function() {
        $("#ObservacionNsp").css("border-color", "#ccc");
        $("#grupoDiagnosticoNSP").css("border-color", "#ccc");
        $("#ObservacionNsp").val("");
        $('select[name=grupoDiagnosticoNSP]').val("0");
        $("#numNsp").text("0/700");
        var rutPaci = $("#rutPaci").val();
        window.parent.$("html,body").animate({ scrollTop: 0 }, 600);
        $("#ingresarNspPaciente").modal();
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

    $("#mostrarMas").on("click", function() {
        if (!recuadroDataVisible) {
            $("#recuadroData").show();
            recuadroDataVisible = true;
        } else {
            $("#recuadroData").hide();
            recuadroDataVisible = false;
        }
    });

    $("#ObservacionNsp").keyup(function() {
        contadorTexto = "";
        var data = $("#ObservacionNsp").val().length;
        var maxLength = 700;
        var minlength = 0;
        var contador = (minlength + data);
        if (contador == 700) { contadorTexto = contador + '/' + maxLength; } else { contadorTexto = contador + '/' + maxLength; }
        document.getElementById("numNsp").innerHTML = contador + '/' + maxLength;
    });

    $("#fc").keyup(function() {
        var fc = $("#fc").val();
        if (fc === "") {} else {
            if (fc >= 0 && fc <= 300) {} else {
                alert("El valor ingresado no puede ser igual a 0 o mayor a 300");
                $("#fc").val("");
            }
        }
    });

    $("#fr").keyup(function() {
        var fr = $("#fr").val();
        if (fr === "") {} else {
            if (fr >= 0 && fr <= 100) {} else {
                alert("El valor ingresado no puede ser igual a 0 o mayor a 100");
                $("#fr").val("");
            }
        }
    });

    $("#ps").keyup(function() {
        var ps = $("#ps").val();
        if (ps === "") {} else {
            if (ps >= 0 && ps <= 300) {} else {
                alert("El valor ingresado no puede ser igual a 0 o mayor a 300");
                $("#ps").val("");
            }
        }
    });

    $("#pd").keyup(function() {
        var pd = $("#pd").val();
        if (pd === "") {} else {
            if (pd >= 0 && pd <= 300) {} else {
                alert("El valor ingresado no puede ser igual a 0 o mayor a 300");
                $("#pd").val("");
            }
        }
    });


    $("#tempAx").keyup(function() {
        var tempAx = $("#tempAx").val();
        if (tempAx === "") {} else {
            if (isCommaDecimalNumber(tempAx) === true) {
                var valid = tempAx.split(",");
                if (valid[0] >= 0 && valid[0] <= 45) {} else {
                    alert("El valor ingresado no puede ser igual a 0 o mayor a 45");
                    $("#tempAx").val("");
                }
            } else {
                alert("El valor ingresado no puede llevar otro separador que no sea una ',' ");
                $("#tempAx").val("");
            }
        }
    });

    $("#eglasgow").keyup(function() {
        var eglasgow = $("#eglasgow").val();
        if (eglasgow > 0 && eglasgow <= 15) {} else {
            if (eglasgow !== "") {
                alert("El valor ingresado no puede ser mayor a 15");
                $("#eglasgow").val("");
            }
        }
    });

    // CALCULO DE PESO 
    $("#peso").keyup(function() {
        var peso = this.value.replace(/[^0-9,.]/g, '').replace(/,/g, ',');
        if (peso === "") {
            $("#peso").val('');
        } else {
            if (isCommaDecimalNumber(peso) === true) {
                var valid = peso.split(",");
                if (valid[0] > 0) {} else {
                    // alert("El valor ingresado no puede ser igual a 0 o mayor a 45");
                    alert("El valor ingresado debe ser mayor a 0"); //EPAREDES
                    $("#peso").val("");
                }
            } else {
                alert("El valor ingresado no puede llevar otro separador que no sea una ',' ");
                $("#peso").val("");
            }
        }
    });

    $("#hgt").on("keydown", function(e) {
        if (!BlockKeys(/[0-9hiloHILO]/, e.key)) { return false; }
        var hgt = $("#hgt").val();
        //SI ES LETRA
        if (isNaN(hgt)) {
            if (hgt.length < 2) {} else {
                if ((hgt === "HI" || hgt === "LO") || (hgt === "Hi" || hgt === "Lo") || (hgt === "hi" || hgt === "lo") || (hgt === "hI" || hgt === "lO")) {} else {
                    alert("El valor ingresado debe ser HI o LO");
                    $("#hgt").val("");
                }
            }
        } else {
            if (hgt >= 0 && hgt <= 1000) {} else {
                alert("El valor ingresado no puede ser igual a 0 o mayor a 1000");
                $("#hgt").val("");
            }
        }
    });

    $("#eEva").keyup(function() {
        var eEva = $("#eEva").val();
        if (eEva === "") {} else {
            if (eEva > 0 && eEva <= 10) {} else {
                if (eEva !== "") {
                    alert("El valor ingresado no puede ser igual a 0 o mayor a 10");
                    $("#eEva").val("");
                }
            }
        }
    });

    $("#satO").keyup(function() {
        var satO = $("#satO").val();
        if (satO === "") {} else {
            if (satO >= 0 && satO <= 100) {} else {
                alert("El valor ingresado no puede ser igual a 0 o mayor a 100");
                $("#satO").val("");
            }
        }
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


    //VALIDACION DE RESTRICCION DE LETRAS EN CAMPOS NUMERICOS
    $("#fc").on("keydown", function(e) {
        if (!BlockKeys(/[0-9ArrowRightArrowLeft]/, e.key)) { return false; }
    });

    $("#fr").on("keydown", function(e) {
        if (!BlockKeys(/[0-9ArrowRightArrowLeft]/, e.key)) { return false; }
    });

    $("#satO").on("keydown", function(e) {
        if (!BlockKeys(/[0-9ArrowRightArrowLeft]/, e.key)) { return false; }
    });

    $("#ps").on("keydown", function(e) {
        if (!BlockKeys(/[0-9ArrowRightArrowLeft]/, e.key)) { return false; }
    });

    $("#pd").on("keydown", function(e) {
        if (!BlockKeys(/[0-9ArrowRightArrowLeft]/, e.key)) { return false; }
    });

    $("#eEva").on("keydown", function(e) {
        if (!BlockKeys(/[0-9ArrowRightArrowLeft]/, e.key)) { return false; }
    });

    $("#tempAx").on("keydown", function(e) {
        if (!BlockKeys(/[0-9ArrowRightArrowLeft,]/, e.key)) { return false; }
    });

    $("#eglasgow").on("keydown", function(e) {
        if (!BlockKeys(/[0-9ArrowRightArrowLeft]/, e.key)) { return false; }
    });

    $("#peso").on("keydown", function(e) {
       // if (!BlockKeys(/[0-9ArrowRightArrowLeft,]/, e.key)) { return false; }
        if (!BlockKeys(/[0-9,]/, e.key)) { return false; } // EPAREDES
    });

    $("#ObservacionNsp").on("keydown", function(e) {
        if (!BlockKeys(/[a-zA-Z,./1-9-*""#$%&()?¿¡!=´+áúéíóüñÑ0°<>_;:ArrowRightArrowLeft']/, e.key)) { return false; }
    });

    $("#otrosEcDescrip").on("keydown", function(e) {
        if (!BlockKeys(/[a-zA-Z,./1-9-*""#$%&()?¿¡!=´+áúéíóüñÑ0:ArrowRightArrowLeft']/, e.key)) { return false; }
    });

    $("#alergias").on("keydown", function(e) {
        if (!BlockKeys(/[a-zA-Z,./1-9-*""''#$%&()?¿¡!=´+áúéíóüñÑ0ArrowRightArrowLeft']/, e.key)) { return false; }
    });

    $("input:radio[name=categorizacion]").change(function() {
        var valor = $("input:radio[name=categorizacion]:checked").val();
        switch (valor) {
            case "C1":
                var reloj = window.parent.$("#reloj").val();
                $("#horaCat").val(reloj);
                break;
            case "C2":
                $("#horaCat").empty();
                var reloj = window.parent.$("#reloj").val();
                $("#horaCat").val(reloj);
                break;
            case "C3":
                $("#horaCat").empty();
                var reloj = window.parent.$("#reloj").val();
                $("#horaCat").val(reloj);
                break;
            case "C4":
                $("#horaCat").empty();
                var reloj = window.parent.$("#reloj").val();
                $("#horaCat").val(reloj);
                break;
            case "C5":
                $("#horaCat").empty();
                var reloj = window.parent.$("#reloj").val();
                $("#horaCat").val(reloj);
                break;
            default:
                window.parent.$("#loader").hide();
                alert("NO SE PUDO CATEGORIZAR AL PACIENTE.");
                break;
        }
    });


    $("#Aceptar").on("click", function() {
        var tab = $("#tabContent").val();
        var conId = $("#conId").val();
        var fechaHora = $("#fechaYhoraIngresoSistema").val();
        var perId = window.parent.$("#perId").val();
        var carId = 2;
        obtenerValidacionIngresoPacientes(conId, tab, fechaHora, perId, carId);
    });

    $("#AceptarEgreso").on("click", function() {
        var tab = $("#tabContent").val();
        $(location).attr('href', "dashboard.php?tab=" + tab);
    });

    $("#volver").on("click", function() {
        var tab = $("#tabContent").val();
        var conId = $("#conId").val();
        var fechaHora = $("#fechaYhoraIngresoSistema").val();
        var perId = window.parent.$("#perId").val();
        var carId = 2;
        obtenerValidacionIngresoPacientes(conId, tab, fechaHora, perId, carId);
    });

    $("#alergias").keyup(function() {
        var data = $("#alergias").val().length;
        var maxLength = 150;
        var minlength = 0;
        var contador = (minlength + data);
        if (contador == 150) {
            document.getElementById("charNum").innerHTML = contador + '/' + maxLength;
        } else {
            document.getElementById("charNum").innerHTML = contador + '/' + maxLength;
        }
    });
});


function BlockKeys(regexPermitido, key) {
    if (key != "Backspace" && key != " " && key != "Tab" && !key.match(regexPermitido)) {
        return false; //dont display key if it is a number
    }
    return true;
}

function validaPeso(peso) {
    let PesoPaciente = document.getElementById("peso").value;
    var expr = /:/;
    var ind = PesoPaciente.search(expr)

    if (ind >= 0) {
        document.getElementById("peso").value = "";
        return false;
    } else {
        peso = PesoPaciente.replace(/[^0-9,]/g, '').replace(/,/g, ',');
        if (peso === "") {
            document.getElementById("peso").value = "";
        } else {
            if (isCommaDecimalNumber(peso) === true) {
                var valid = peso.split(",");
                if (valid[0] > 0) {} else {
                    document.getElementById("peso").value = "";
                    return false;
                }
            } else {
                document.getElementById("peso").value = "";
                return false;
            }
        } //END ELSE INTERNO
    } // END ELSE EXPERNO
} // END FUNCTION

function isCommaDecimalNumber(value) {
    return /^-?(?:\d+(?:,\d*)?)$/.test(value);
}