//CARGA DE DASHBOARD DE LOS PACIENTES
function obtenerPacientesNuevosCreados(centroTrabajo) {
    if (window.XMLHttpRequest) {
        xmlhttp = new XMLHttpRequest();
    } else {
        xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }
    xmlhttp.onreadystatechange = function() {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            let resultado = xmlhttp.responseText;
            var resu = resultado.split("///_");
            var res = resu[0];
            let cantidad = resu[1];
            if (cantidad !== "0") { document.getElementById("cantRegistradas").innerHTML = "(" + cantidad + ")"; } else { document.getElementById("cantRegistradas").innerHTML = "(0)"; }
            if (resultado === "2") {
                alert('Su sesión fue cerrada por inactividad en los últimos 45 minutos.');
                window.setTimeout(function() {
                    window.top.location.href = '../../../index.php';
                }, 5000);
            } else {
                window.setTimeout("ocultarLoader()", 2000);
                document.getElementById("contenidoRegistradas").innerHTML = res;
            }

            if (contador === 0) {
                window.parent.$("html,body").animate({ scrollTop: 0 }, 600);
            }
            obtenerRegistroTriadaPaciente(centroTrabajo);
        }
    }
    xmlhttp.open("GET", "../controlador/servidor/contenidoController.php?evento=obtenerRegistroIngresoPac&centroTrabajo=" + centroTrabajo, true);
    xmlhttp.send();
}

function obtenerRegistroTriadaPaciente(centroTrabajo) {
    if (window.XMLHttpRequest) {
        xmlhttp = new XMLHttpRequest();
    } else {
        xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }
    xmlhttp.onreadystatechange = function() {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            let resultado = xmlhttp.responseText;
            var resu = resultado.split("///_");
            var res = resu[0];
            let cantidad = resu[1];
            if (cantidad !== "0") { document.getElementById("CantidadTriadas").innerHTML = "(" + cantidad + ")"; } else { document.getElementById("CantidadTriadas").innerHTML = "(0)"; }
            if (resultado === "2") {
                FinalizarSesion();
            } else {
                window.setTimeout("ocultarLoader()", 2000);
                document.getElementById("contenidoTriadas").innerHTML = res;
                $(".most").click(function() {
                    var dato = $(".Seleccion", this).val();
                    var tab = $("#tabl2").val();
                    var fechaHoy = $("#fechaHoy").val();
                    var hora = window.parent.$("#reloj").val();
                    var fechaHora = fechaHoy + " " + hora;
                    var perId = window.parent.$("#perId").val();
                    var carId = 2;
                    var bloqueo = 1;
                    obtenerValidacionIngresoPacientes(dato, tab, bloqueo, fechaHora, perId, carId);
                });
            }
            obtenerPacientesParaAtencion(centroTrabajo);
        }
    }
    xmlhttp.open("GET", "../controlador/servidor/contenidoController.php?evento=obtenerRegistroTriage&centroTrabajo=" + centroTrabajo, true);
    xmlhttp.send();
}

function obtenerPacientesParaAtencion(centroTrabajo) {
    if (window.XMLHttpRequest) {
        xmlhttp = new XMLHttpRequest();
    } else {
        xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }
    xmlhttp.onreadystatechange = function() {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            let resultado = xmlhttp.responseText;
            var resu = resultado.split("///_");
            var res = resu[0];
            let cantidad = resu[1];
            if (cantidad !== "0") { document.getElementById("catAtendida").innerHTML = "(" + cantidad + ")"; } else { document.getElementById("catAtendida").innerHTML = "(0)"; }
            if (resultado === "2") {
                FinalizarSesion();
            } else {

                window.setTimeout("ocultarLoader()", 2000);
                document.getElementById("contenidoAtenciones").innerHTML = res;
                $(".mostrar").click(function() {
                    var dato = $(".obtener", this).val();
                    var tab = $("#tabl3").val();
                    var fechaHoy = $("#fechaHoy").val();
                    var hora = window.parent.$("#reloj").val();
                    var fechaHora = fechaHoy + " " + hora;
                    var perId = window.parent.$("#perId").val();
                    var carId = 3;
                    var bloqueo = 1;
                    obtenerValidacionIngresoPacientes(dato, tab, bloqueo, fechaHora, perId, carId);
                });


                //TIMER 

            }
            obtenerMisProcedimientos(centroTrabajo);
        }
    }
    xmlhttp.open("GET", "../controlador/servidor/contenidoController.php?evento=obtenerRegistroAtencion&centroTrabajo=" + centroTrabajo, true);
    xmlhttp.send();
}

function obtenerMisProcedimientos(centroTrabajo) {
    if (window.XMLHttpRequest) {
        xmlhttp = new XMLHttpRequest();
    } else {
        xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }
    xmlhttp.onreadystatechange = function() {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            let resultado = xmlhttp.responseText;
            var resu = resultado.split("///_");
            var res = resu[0];
            let cantidad = resu[1];
            if (cantidad !== "0") { document.getElementById("cantObsYTto").innerHTML = "(" + cantidad + ")"; } else { document.getElementById("cantObsYTto").innerHTML = "(0)"; }
            if (resultado === "2") {
                FinalizarSesion();
            } else {
                window.setTimeout("ocultarLoader()", 2000);
                document.getElementById("contenidoProcedimientos").innerHTML = res;
                $(".mostObsTto").click(function() {
                    var dato = $(".enviarPro", this).val();
                    var tab = $("#tabl4").val();
                    var fechaHoy = $("#fechaHoy").val();
                    var hora = window.parent.$("#reloj").val();
                    var fechaHora = fechaHoy + " " + hora;
                    var perId = window.parent.$("#perId").val();
                    var carId = 4;
                    var bloqueo = 1;
                    obtenerValidacionIngresoPacientes(dato, tab, bloqueo, fechaHora, perId, carId);
                });
            }
            obtenerEgresoPaciente(centroTrabajo);
        }
    }
    xmlhttp.open("GET", "../controlador/servidor/contenidoController.php?evento=obtenerMisProcedimientos&centroTrabajo=" + centroTrabajo, true);
    xmlhttp.send();
}

function obtenerEgresoPaciente(centroTrabajo) {
    if (window.XMLHttpRequest) {
        xmlhttp = new XMLHttpRequest();
    } else {
        xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }
    xmlhttp.onreadystatechange = function() {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            let resultado = xmlhttp.responseText;
            var resu = resultado.split("///_");
            var res = resu[0];
            let cantidad = resu[1];
            if (cantidad !== "0") { document.getElementById("cantEgreso").innerHTML = "(" + cantidad + ")"; } else { document.getElementById("cantEgreso").innerHTML = "(0)"; }
            if (resultado === "2") {
                FinalizarSesion();
            } else {
                window.setTimeout("ocultarLoader()", 2000);
                document.getElementById("contenidoEgreso").innerHTML = res;
                $(".mostrarEgreso").on("click", function() {
                    var dato = $(".obtenerEgreso", this).val();
                    var tab = $("#tabl5").val();
                    var fechaHoy = $("#fechaHoy").val();
                    var hora = window.parent.$("#reloj").val();
                    var fechaHora = fechaHoy + " " + hora;
                    var perId = window.parent.$("#perId").val();
                    var carId = 5;
                    var bloqueo = 1;
                    obtenerValidacionIngresoPacientes(dato, tab, bloqueo, fechaHora, perId, carId);
                });
            }

            if (contadorCarga === 0) {
                obtenerPacientesDadosDeAlta(centroTrabajo, fechaHoy);
            }
        }
    }
    xmlhttp.open("GET", "../controlador/servidor/contenidoController.php?evento=obtenerEgresoPaciente&centroTrabajo=" + centroTrabajo, true);
    xmlhttp.send();
}

function obtenerPacientesDadosDeAlta(centroTrabajo, fechaHoy) {
    if (window.XMLHttpRequest) {
        xmlhttp = new XMLHttpRequest();
    } else {
        xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }
    xmlhttp.onreadystatechange = function() {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            let resultado = xmlhttp.responseText;
            var resu = resultado.split("///_");
            var res = resu[0];
            let cantidad = resu[1];
            if (cantidad !== "0") { document.getElementById("cantAlta").innerHTML = "(" + cantidad + ")"; } else { document.getElementById("cantAlta").innerHTML = "(0)"; }
            if (resultado === "2") {
                FinalizarSesion();
            } else {
                window.setTimeout("ocultarLoader()", 2000);
                document.getElementById("contenidoDadosAlta").innerHTML = res;

                $(".mostrarDadosAlta").click(function() {
                    var conId = $(".mostDadosAltaPac", this).val();
                    window.open("../controlador/servidor/pdf.php?conId=" + conId);
                });
            }

            if (contadorCarga === 0) {
                obtenerPacientesCancelados(centroTrabajo, fechaHoy);
            }

        }
    }
    xmlhttp.open("GET", "../controlador/servidor/contenidoController.php?evento=obtenerPacientesDadosDeAlta&centroTrabajo=" + centroTrabajo + "&fechaHoy=" + fechaHoy, true);
    xmlhttp.send();
}

function obtenerPacientesCancelados(centroTrabajo, fechaHoy) {
    if (window.XMLHttpRequest) {
        xmlhttp = new XMLHttpRequest();
    } else {
        xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }
    xmlhttp.onreadystatechange = function() {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            let resultado = xmlhttp.responseText;
            var resu = resultado.split("///_");
            var res = resu[0];
            let cantidad = resu[1];
            if (cantidad !== "0") { document.getElementById("cantCanceladas").innerHTML = "(" + cantidad + ")"; } else { document.getElementById("cantCanceladas").innerHTML = "(0)"; }
            if (resultado === "2") {
                FinalizarSesion();
            } else {
                window.setTimeout("ocultarLoader()", 2000);
                document.getElementById("contenidoCancelados").innerHTML = res;
                $(".mostrarNsp").click(function() {
                    var dato = $(".mostrarNspPac", this).val();
                    $("#fechaBusquedaCancelada").css({ 'z-index': 'inherit !important' });
                    $(".datepicker").css({ 'z-index': 'inherit !important' });
                    var data = dato.split("_/");
                    var tipoMotivo = data[0];
                    var observacion = data[1];
                    $('select[name=grupoDiagnosticoNSP]').val(tipoMotivo);
                    $("#ObservacionNsp").val(observacion);
                    /*$("#mensajes").empty();
					
					$("#mensajes").append(msj);*/
                    $('#modalNsp').modal();
                });
            }
        }
    }
    xmlhttp.open("GET", "../controlador/servidor/contenidoController.php?evento=obtenerNspPacientes&centroTrabajo=" + centroTrabajo + "&fechaHoy=" + fechaHoy, true);
    xmlhttp.send();
}

//METODO QUE BUSCA LOS PACIENTES DADOS DE ALTA POR FECHA Y HORA
function enviarInfoBusqueda(buscar, centroTrabajo, fechaBusqueda) {
    if (window.XMLHttpRequest) {
        xmlhttp = new XMLHttpRequest();
    } else {
        xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }
    xmlhttp.onreadystatechange = function() {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            let resultado = xmlhttp.responseText;
            var resu = resultado.split("///_");
            var res = resu[0];
            let cantidad = resu[1];
            if (cantidad !== "0") { document.getElementById("cantAlta").innerHTML = "(" + cantidad + ")"; } else { document.getElementById("cantAlta").innerHTML = "(0)"; }
            if (resultado === "2") {
                FinalizarSesion();
            } else {
                window.setTimeout("ocultarLoader()", 2000);
                document.getElementById("contenidoDadosAlta").innerHTML = res;

                //var iframe = window.parent.document.getElementById("contenido");
                //iframe.style.height = iframe.contentWindow.document.body.scrollHeight + 'em';

                $(".mostrarDadosAlta").click(function() {
                    var conId = $(".mostDadosAltaPac", this).val();
                    window.open("../controlador/servidor/pdf.php?conId=" + conId);
                });
            }
        }
    }
    xmlhttp.open("GET", "../controlador/servidor/contenidoController.php?evento=obtenerPacientesReportPacienteAlta&rut=" + buscar + "&fechaBusqueda=" + fechaBusqueda + "&centroTrabajo=" + centroTrabajo, true);
    xmlhttp.send();
}

//METODO QUE BUSCA A LOS PACIENTES CANCELADOS Y ADEMAS MUESTRA SU OBSERVACION
function busquedaObtenerPacientesCancelados(buscar, fechaBusqueda, centroTrabajo) {
    if (window.XMLHttpRequest) {
        xmlhttp = new XMLHttpRequest();
    } else {
        xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }
    xmlhttp.onreadystatechange = function() {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            let resultado = xmlhttp.responseText;
            var resu = resultado.split("///_");
            var res = resu[0];
            let cantidad = resu[1];
            if (cantidad !== "0") { document.getElementById("cantCanceladas").innerHTML = "(" + cantidad + ")"; } else { document.getElementById("cantCanceladas").innerHTML = "(0)"; }
            if (resultado === "2") {
                FinalizarSesion();
            } else {
                window.setTimeout("ocultarLoader()", 2000);
                document.getElementById("contenidoCancelados").innerHTML = res;
                //var iframe = window.parent.document.getElementById("contenido");
                //iframe.style.height = iframe.contentWindow.document.body.scrollHeight + 'em';					
                $(".mostrarNsp").click(function() {
                    var dato = $(".mostrarNspPac", this).val();
                    var data = dato.split("_/");
                    var tipoMotivo = data[0];
                    var observacion = data[1];
                    $('select[name=grupoDiagnosticoNSP]').val(tipoMotivo);
                    $("#ObservacionNsp").val(observacion);
                    $("#fechaBusquedaCancelada").css({ 'z-index': 'inherit !important' });
                    $(".datepicker").css({ 'z-index': 'inherit !important' });
                    /*	$("#mensajes").empty();
                    	var msj= "";
                    	msj = msj +'<div class="form-group">';
                    	msj = msj +'<label for="motivoConsulta">* Observación NSP: </label>';
                    	msj = msj +'<textarea style="width: 55em;" class="form-control mayuscula textareaResize mayuscula required" maxlength="100" rows="3" cols="3" disabled="true">'+dato+'</textarea>';
                    	msj = msj +'</div>';
                    	$("#mensajes").append(msj);*/
                    $('#modalNsp').modal();
                });
            }
        }
    }
    xmlhttp.open("GET", "../controlador/servidor/contenidoController.php?evento=obtenerPacientesReportPacienteNSP&rut=" + buscar + "&fechaBusqueda=" + fechaBusqueda + "&centroTrabajo=" + centroTrabajo, true);
    xmlhttp.send();
}

//METODO QUE BUSCA A LOS PACIENTES EN CONSULTA DAU
function buscarPacienteConsultaDau(buscar, fechaBusqueda) {
    if (window.XMLHttpRequest) {
        xmlhttp = new XMLHttpRequest();
    } else {
        xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }
    xmlhttp.onreadystatechange = function() {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            let resultado = xmlhttp.responseText;
            var resu = resultado.split("///_");
            var res = resu[0];
            let cantidad = resu[1];
            if (cantidad !== "0") { document.getElementById("cantAltaDau").innerHTML = "(" + cantidad + ")"; } else { document.getElementById("cantAltaDau").innerHTML = "(0)"; }
            if (resultado === "2") {
                FinalizarSesion();
            } else {
                window.setTimeout("ocultarLoader()", 2000);
                document.getElementById("contenidoConsultaDau").innerHTML = res;

                $(".mostrarConsultaDau").click(function() {
                    var conId = $(".mostConsultaDau", this).val();
                    window.open("../controlador/servidor/pdfConsulaDau.php?conId=" + conId);
                });
            }
        }
    }
    xmlhttp.open("GET", "../controlador/servidor/contenidoController.php?evento=obtenerPacientesConsultaDau&rut=" + buscar + "&fechaBusqueda=" + fechaBusqueda, true);
    xmlhttp.send();
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
            select = "";
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


//METODO QUE VALIDA SI EL PACIENTE ESTA DISPONIBLE O ESTA SIENDO ATENDIDO POR OTRO PROFESIONAL
function obtenerValidacionIngresoPacientes(dato, tab, bloqueo, fechaHora, perId, carId) {
    var url = "../controlador/servidor/contenidoController.php";
    var type = "POST";
    var carId = carId;
    var dato = dato
    var tab = tab;
    var resultado = null;
    var data = {
        evento: 'obtenerEstadoPacientes',
        conId: dato,
        bloqueo: bloqueo,
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
                var texto = "<h3> No se ha podido ingresar al módulo..  </h3>";
                $("#mensaje").append(texto);
                $('#modalValidacion').modal();
            } else
                resultado = JSON.parse(response);
            if (resultado.sesion === undefined) {
                switch (resultado[0].estado) {
                    case '1':
                        switch (tab) {
                            case 'tab2':
                                $(location).attr('href', "triage.php?dato=" + dato + "&tab=" + tab);
                                break;
                            case 'tab3':
                                $(location).attr('href', "atencion.php?dato=" + dato + "&tab=" + tab);
                                break;
                            case 'tab4':
                                $(location).attr('href', "observacionYTto.php?dato=" + dato + "&tab=" + tab);
                                break;
                            case 'tab5':
                                $(location).attr('href', "altaEgreso.php?dato=" + dato + "&tab=" + tab);
                                break;
                        }
                        break;
                    case '2':
                        $('#myModal').modal('hide');
                        $("#refrescarPantalla").show();
                        $("#CerrarNormal").hide();
                        $("#mensaje").empty();
                        var texto = '';
                        texto = texto + '<h3><label>El paciente esta siento atendido por el profesional</label><br>';
                        texto = texto + '<b>' + resultado[0].NOMBRE_PROFESIONAL + '</b>,<br>';
                        texto = texto + ' Desde las <b>' + resultado[0].FECHA_HORA_BLOQUEO + ' .</b></h3>';
                        $("#mensaje").append(texto);
                        $('#modalValidacion').modal();
                        break;
                    case '3':
                        switch (tab) {
                            case 'tab2':
                                $(location).attr('href', "triage.php?dato=" + dato + "&tab=" + tab);
                                break;
                            case 'tab3':
                                $(location).attr('href', "atencion.php?dato=" + dato + "&tab=" + tab);
                                break;
                            case 'tab4':
                                $(location).attr('href', "observacionYTto.php?dato=" + dato + "&tab=" + tab);
                                break;
                            case 'tab5':
                                $(location).attr('href', "altaEgreso.php?dato=" + dato + "&tab=" + tab);
                                break;
                        }
                        break;
                    case '4':
                        $('#myModal').modal('hide');
                        $("#refrescarPantalla").show();
                        $("#CerrarNormal").hide();
                        $("#mensaje").empty();
                        var texto = '';
                        switch (carId) {
                            case 2:
                                texto = texto + '<h3><label>El paciente  ya fue atendido en Triage </label><br>';
                                break;
                            case 3:
                                texto = texto + '<h3><label>El paciente  ya fue atendido en Consulta Médica </label><br>';
                                break;
                            case 4:
                                texto = texto + '<h3><label>El paciente  ya fue atendido en Observación y Tratamiento </label><br>';
                                break;
                            case 5:
                                texto = texto + '<h3><label>El paciente  ya fue Egresado </label><br>';
                                break;
                        }
                        $("#mensaje").append(texto);
                        $('#modalValidacion').modal();
                        break;
                    case '5':
                        $('#myModal').modal('hide');
                        $("#refrescarPantalla").show();
                        $("#CerrarNormal").hide();
                        $("#mensaje").empty();
                        var texto = '';
                        texto = texto + '<h3><label>No tiene permisos para ingresar a este Módulo</label><br>';
                        $("#mensaje").append(texto);
                        $('#modalValidacion').modal();
                        break;
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

//CARGAS DE CAMPOS SELECT BOXDEL DASHBOARD
function cargarSexo() {
    var url = "../controlador/servidor/contenidoController.php";
    var type = "POST";
    var resultado = null;
    var data = {
        evento: 'cargarSexo'
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
            select = "";
            if (resultado.sesion === undefined) {
                select = select + "<option value= '0' selected=''> Seleccione ...</option>";
                for (var aux = 0 in resultado) {
                    select = select + "<option value = " + resultado[aux].CODIGO + ">" + resultado[aux].NOMBRE + "</option>";
                }
                $('select[name=sexo]').append(select);
                $('select[name=sexoi]').append(select);
            } else {
                valorsesion = resultado.sesion;
            }
        }, // End success
        error: function(error) {
                console.log("Error en la petición");
            } // End error
    }); //End ajax
}

function cargarNacionalidad() {
    var url = "../controlador/servidor/contenidoController.php";
    var type = "POST";
    var resultado = null;
    var data = {
        evento: 'cargarNacionalidad'
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
            select = "";
            if (resultado.sesion === undefined) {
                select = select + "<option value= '0' selected=''> Seleccione ...</option>";
                for (var aux = 0 in resultado) {
                    select = select + "<option value = " + resultado[aux].CODIGO + ">" + resultado[aux].NOMBRE + "</option>";
                }
                $('select[name=nacionalidad]').append(select);
                $('select[name=nacionalidadi]').append(select);

                $('.js-example-basic-single').select2();
            } else {
                valorsesion = resultado.sesion;
            }
        }, // End success
        error: function(error) {
                console.log("Error en la petición");
            } // End error
    }); //End ajax
}

function cargarComunas() {
    var url = "../controlador/servidor/contenidoController.php";
    var type = "POST";
    var resultado = null;
    var data = {
        evento: 'cargarComunas'
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
            select = "";
            if (resultado.sesion === undefined) {
                select = select + "<option value= '0' selected=''> Seleccione ...</option>";
                for (var aux = 0 in resultado) {
                    select = select + "<option value = " + resultado[aux].CODIGO + ">" + resultado[aux].NOMBRE + "</option>";
                }
                $('select[name=comuna]').append(select);
                $('select[name=comunai]').append(select);
                $('.js-example-basic-single-Dos').select2();
            } else {
                valorsesion = resultado.sesion;
            }
        }, // End success
        error: function(error) {
                console.log("Error en la petición");
            } // End error
    }); //End ajax
}

function cargarPrevision() {
    var url = "../controlador/servidor/contenidoController.php";
    var type = "POST";
    var resultado = null;
    var data = {
        evento: 'cargarPrevision'
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
            select = "";
            if (resultado.sesion === undefined) {
                select = select + "<option value= '0' selected=''> Seleccione ...</option>";
                for (var aux = 0 in resultado) {
                    select = select + "<option value = " + resultado[aux].CODIGO + ">" + resultado[aux].NOMBRE + "</option>";
                }
                $('select[name=prevision]').append(select);
                $('select[name=previsioni]').append(select);
            } else {
                valorsesion = resultado.sesion;
            }
        }, // End success
        error: function(error) {
                console.log("Error en la petición");
            } // End error
    }); //End ajax
}

function cargarTipoConsulta() {
    var url = "../controlador/servidor/contenidoController.php";
    var type = "POST";
    var resultado = null;
    var data = {
        evento: 'cargarTipoConsulta'
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
            select = "";
            if (resultado.sesion === undefined) {
                select = select + "<option value= '0' selected=''> Seleccione ...</option>";
                for (var aux = 0 in resultado) {
                    select = select + "<option value = " + resultado[aux].CODIGO + ">" + resultado[aux].NOMBRE + "</option>";
                }
                $('select[name=tipoConsulta]').append(select);
            } else {
                valorsesion = resultado.sesion;
            }
        }, // End success
        error: function(error) {
                console.log("Error en la petición");
            } // End error
    }); //End ajax
}

function cargarMedioTransporte() {
    var url = "../controlador/servidor/contenidoController.php";
    var type = "POST";
    var resultado = null;
    var data = {
        evento: 'cargarMedioTransporte'
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
            select = "";
            if (resultado.sesion === undefined) {
                select = select + "<option value= '0' selected=''> Seleccione ...</option>";
                for (var aux = 0 in resultado) {
                    select = select + "<option value = " + resultado[aux].CODIGO + ">" + resultado[aux].NOMBRE + "</option>";
                }
                $('select[name=medioTransporte]').append(select);
            } else {
                valorsesion = resultado.sesion;
            }
        }, // End success
        error: function(error) {
                console.log("Error en la petición");
            } // End error
    }); //End ajax
}

function cargarTipoAccidente() {
    var url = "../controlador/servidor/contenidoController.php";
    var type = "POST";
    var resultado = null;
    var data = {
        evento: 'cargarTipoAccidente'
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
            select = "";
            if (resultado.sesion === undefined) {
                select = select + "<option value= '0' selected=''> Seleccione ...</option>";
                for (var aux = 0 in resultado) {
                    select = select + "<option value = " + resultado[aux].CODIGO + ">" + resultado[aux].NOMBRE + "</option>";
                }
                $('select[name=tipoAccidente]').append(select);
            } else {
                valorsesion = resultado.sesion;
            }
        }, // End success
        error: function(error) {
                console.log("Error en la petición");
            } // End error
    }); //End ajax
}

function cargarLugarAccidente() {
    var url = "../controlador/servidor/contenidoController.php";
    var type = "POST";
    var resultado = null;
    var data = {
        evento: 'cargarLugarAccidente'
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
            select = "";
            if (resultado.sesion === undefined) {
                select = select + "<option value= '0' selected=''> Seleccione ...</option>";
                for (var aux = 0 in resultado) {
                    select = select + "<option value = " + resultado[aux].CODIGO + ">" + resultado[aux].NOMBRE + "</option>";
                }
                $('select[name=lugarAccidente]').append(select);
            } else {
                valorsesion = resultado.sesion;
            }
        }, // End success
        error: function(error) {
                console.log("Error en la petición");
            } // End error
    }); //End ajax
}

function cargarCentros(centroTrabajo) {
    var url = "../controlador/servidor/contenidoController.php";
    var type = "POST";
    centroTrabajo = centroTrabajo;
    var resultado = null;
    var data = {
        evento: 'cargarCentros'
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
            $("#centroi").empty();
            if (resultado.sesion === undefined) {
                for (var aux = 0 in resultado) {
                    if (resultado[aux].CODIGO === centroTrabajo) {
                        $('#centroi').append(resultado[aux].CODIGO);
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


//CREACION DE PACIENTE
function createPacSapu(pacId, rutPac, dniPac, nombrePac, apePat, apeMat, fnac, sexo, nacionalidad, direccion, comuna, telefono, prevision, hta, dm2, epoc, asma, dhc, irc, otros_ec, otros_ec_desc, correo, centro) {
    var url = "../controlador/servidor/contenidoController.php";
    arreglo = [];
    var fecha = "";
    if (fnac !== "NULL") {
        let f = fnac.split("/");
        fecha = f[2] + "/" + f[1] + "/" + f[0];
    }
    arreglo.push(rutPac, dniPac, nombrePac, apePat, apeMat, fecha, sexo, nacionalidad, direccion, comuna, telefono, prevision, correo);
    var type = "POST";
    var resultado = null;
    var data = {
        evento: 'crearPaciente',
        pacId: pacId,
        rutPac: rutPac,
        dniPac: dniPac,
        nombrePac: nombrePac,
        apePat: apePat,
        apeMat: apeMat,
        fnac: fnac,
        sexo: sexo,
        nacionalidad: nacionalidad,
        direccion: direccion,
        comuna: comuna,
        telefono: telefono,
        prevision: prevision,
        hta: hta,
        dm2: dm2,
        epoc: epoc,
        asma: asma,
        dhc: dhc,
        irc: irc,
        otros_ec: otros_ec,
        otros_ec_desc: otros_ec_desc,
        correo: correo,
        centro: centro
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
            if (resultado.sesion === undefined) {
                if (resultado == "" || resultado.data === "0") {} else {
                    resultado = JSON.parse(response);
                    limpiaCamposCreacionFomularioPaciente();
                    var esVisible = $("#updatePaciente").is(":visible");
                    if (esVisible === true) {
                        $("#modificarPacienteSapu").hide();
                        $("#updatePaciente").hide();
                    } else {
                        $("#MostrarDatoPaciente").hide();
                        $("#buscarPaciente").hide();
                        $("#anadirPaciente").hide();
                    }
                    $("#IngresarRegistro").show();
                    $("#RegistroUrgencia").show();

                    //LLENA LOS DATOS
                    $("#pacId").val(resultado[0].PAC_ID);
                    $("#rutPaci").val(arreglo[0]);
                    $("#dniPaci").val(arreglo[1]);
                    $("#nombrePaci").val(arreglo[2]);
                    $("#apePati").val(arreglo[3]);
                    $("#apeMati").val(arreglo[4]);
                    if (arreglo[5] === "NULL") { $('input[name=fnaci]').val(""); } else { $('input[name=fnaci]').val(arreglo[5]); }
                    $('select[name=sexoi]').val(arreglo[6]);
                    $('select[name=nacionalidadi]').val(arreglo[7]);
                    $("#direccioni").val(arreglo[8]);
                    $('select[name=comunai]').val(arreglo[9]);
                    $("#telefoni").val(arreglo[10]);
                    $('select[name=previsioni]').val(arreglo[11]);
                    $("#correoni").val(arreglo[12]);

                    //deshabilita los datos del formulario
                    deshabilitarHabilitarPaciente();
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

//METODO QUE REGISTRA LA URGENCIA DEL PACIENTE
function registrarUrgenciaSapu(pacId, perID, centroi, nombreAcompanante, motivoConsulta, tipoAccidente, tipoConsulta, lugarAccidente, medioTransporte) {
    var url = "../controlador/servidor/contenidoController.php";
    var type = "POST";
    var rutPaci = rutPaci;
    var resultado = null;
    var data = {
        evento: 'registrarUrgenciaSapu',
        pacId: pacId,
        perID: perID,
        centroi: centroi,
        nombreAcompanante: nombreAcompanante,
        motivoConsulta: motivoConsulta,
        tipoAccidente: tipoAccidente,
        tipoConsulta: tipoConsulta,
        lugarAccidente: lugarAccidente,
        medioTransporte: medioTransporte
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
            window.setTimeout("ocultarLoader()", 4000);
            window.parent.$("html,body").animate({ scrollTop: 0 }, 600);
            $("#mensaje").empty();
            if (resultado == "" || resultado.data === "0") {} else {
                resultado = JSON.parse(response);
                if (resultado.sesion === undefined) {
                    if (resultado[0].con_id === "TRUE") {
                        $("#cargandoPdf").show();
                        $('#myModal').modal('hide');
                        $("#mensaje").empty();
                        $("#CerrarNormal").hide();
                        var texto = "<h3> Se ha ingresado la urgencia..  </h3>";
                        $("#mensaje").append(texto);
                        $('#modalValidacion').modal();
                        redireccionar();
                        var centroTrabajo = window.parent.$("#centroTrabajo").val();
                        obtenerRegistroTriadaPaciente(centroTrabajo);
                        obtenerPacientesNuevosCreados(centroTrabajo);
                    } else {
                        $('#myModal').modal('hide');
                        $("#mensaje").empty();
                        $("#CerrarNormal").show();
                        var texto = "<h3> Hubo un error al ingresar la urgencia ..  </h3>";
                        $("#cargandoPdf").hide();
                        $("#mensaje").append(texto);
                        $('#modalValidacion').modal();
                    }
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


//METODO QUE CIERRA EL MODAL
function redireccionar() {
    window.setTimeout("cerrarModal()", 2000);
}

//CIERRE MODAL
function cerrarModal() {
    $('#modalValidacion').modal('hide');
    $('#modalValidacion').hide();
}

function buscarPaciente(rutPac, dniPac) {
    var url = "../controlador/servidor/contenidoController.php";
    var type = "POST";
    var resultado = null;
    var data = {
        evento: 'buscar',
        rutPaciente: rutPac,
        dniPaciente: dniPac
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
            $("#cargaDatosPaciente").val("");
            resultado = response;
            window.setTimeout("ocultarLoader()", 4000);
            if (resultado == "0") {
                let rut = $("#rutPac").val();
                let dni = $("#dniPac").val();
                let nom = $("#nombrePac").val();
                if (rut !== "" && dni === "") { $("#dniPac").val(""); } else { $("#rutPac").val(""); }
                $("#cargaDatosPaciente").val("");
                $("#pacId").val("");
                $("#nombrePac").val("");
                $("#apePat").val("");
                $("#apeMat").val("");
                $('input[name=fnac]').val("");
                document.getElementById("fnac").value = "";
                $('select[name=sexo]').val("0");
                $('#nacionalidad').val("0").trigger('change.select2');
                $('#comuna').val("0").trigger('change.select2');
                $("#direccion").val("");
                $("select[name=prevision]").val("0");
                $("#telefono").val("");
                $("#correo").val("");
                $("#HTA").val("");
                $("#DM").val("");
                $("#EPOC").val("");
                $("#ASMA").val("");
                $("#IRC").val("");
                $("#DHC").val("");
                $("#OTRASEC").val("");
                $("#OTRASECDESC").val("");
            } else {
                resultado = JSON.parse(response);
                LimpiaCampos();
                if (resultado.sesion === undefined) {
                    for (var aux = 0 in resultado) {
                        var informacionPaciente = resultado[aux].PAC_ID + "_" + resultado[aux].RUT + "_" + resultado[aux].PASAPORTE + "_" + resultado[aux].NOMBRE + "_" + resultado[aux].APELLIDO_PATERNO + "_" + resultado[aux].APELLIDO_MATERNO + "_" + resultado[aux].FECHA_NACIMIENTO + "_" + resultado[aux].SEXO + "_" + resultado[aux].NACIONALIDAD + "_" + resultado[aux].COMUNA + "_" + resultado[aux].DIRECCION + "_" + resultado[aux].PREVISION + "_" + resultado[aux].TELEFONO + "_" + resultado[aux].CORREO + "_" + resultado[aux].HTA + "_" + resultado[aux].DM2 + "_" + resultado[aux].EPOC + "_" + resultado[aux].ASMA + "_" + resultado[aux].IRC + "_" + resultado[aux].DHC + "_" + resultado[aux].OTROS_EC + "_" + resultado[aux].OTROS_EC_DESC;
                    } //END FOR
                    $("#cargaDatosPaciente").val(informacionPaciente);
                    let dataPaciente = $("#cargaDatosPaciente").val();
                    const data = dataPaciente.split("_");
                    $("#pacId").val(data[0]);
                    $("#rutPac").val(data[1]);
                    $("#dniPac").val(data[2]);
                    $("#nombrePac").val(data[3]);
                    $("#apePat").val(data[4]);
                    $("#apeMat").val(data[5]);
                    document.getElementById("fnac").value = data[6];
                    $('select[name=sexo]').val(data[7]);
                    $('#nacionalidad').val(data[8]).trigger('change.select2');
                    $('#comuna').val(data[9]).trigger('change.select2');
                    $("#direccion").val(data[10]);
                    $("select[name=prevision]").val(data[11]);
                    $("#telefono").val(data[12]);
                    $("#correo").val(data[13]);
                    $("#HTA").val(data[14]);
                    $("#DM").val(data[15]);
                    $("#EPOC").val(data[16]);
                    $("#ASMA").val(data[17]);
                    $("#IRC").val(data[18]);
                    $("#DHC").val(data[19]);
                    $("#OTRASEC").val(data[20]);
                    $("#OTRASECDESC").val(data[21]);
                    $("#validateRutOk").text("");
                } else {
                    valorsesion = resultado.sesion;
                }
            } // END ELSE
        }, // End success
        error: function(error) {
                console.log("Error en la petición");
            } // End error
    }); //End ajax
}


//FUNCION PRINCIPAL QUE OCULTA EL CARGANDO QUE SE MUESTRA EN LA PAGINA PRINCIPAL
function ocultarLoader() {
    window.parent.$("#loader").hide();
}


//FUNCION QUE REALICA LA VALIDACION  DE LA FECHA

/** Valida que la fecha ingresada sea valida desde el año 1900 */
function VerificarFechaValida(selector, separador) {
    let error = false;
    let fecha = $(selector).val();
    let num;

    if (fecha != "") {
        fecha = fecha.split(separador);

        try {
            //SI EL DIA NO ES IGUAL A 2
            if (!error && fecha[0].length != 2) {
                error = true;
            }

            //SI EL MES NO ES IGUAL A 2
            if (!error && fecha[1].length != 2) {
                error = true;
            }

            //SI EL ANIO NO ES IGUAL A 4
            if (!error && fecha[2].length != 4) {
                error = true;
            }

            //verifica si el año es mayor o igual a 1900
            let hoyFecha = new Date();
            let fechaHoy = hoyFecha.getFullYear();


            let bisiesto = false;
            if (!error) {
                let minAnio = parseInt(fecha[2]);
                if (minAnio < 1900) { // && minAnio >= fechaHoy){
                    error = true;
                } else {
                    if (minAnio > fechaHoy) {
                        error = true;
                    } else {
                        //Verificamos si el año es bisiesto
                        if (minAnio % 4 == 0 && (minAnio % 100 != 0 || minAnio % 400 == 0)) {
                            bisiesto = true;
                        }
                    }
                }
            }

            if (!error) {
                //Validar Mes
                if (parseInt(fecha[1]) < 1 || parseInt(fecha[1]) > 12) {
                    error = true;
                } else {
                    if (bisiesto && parseInt(fecha[1]) == 2) {
                        if (parseInt(fecha[0]) < 1 || parseInt(fecha[0]) > 29) {
                            error = true;
                        }
                    } else if (!bisiesto && parseInt(fecha[1]) == 2) {
                        if (parseInt(fecha[0]) < 1 || parseInt(fecha[0]) > 28) {
                            error = true;
                        }
                    } else if (parseInt(fecha[1]) == 4 || parseInt(fecha[1]) == 6 || parseInt(fecha[1]) == 9 || parseInt(fecha[1]) == 11) {
                        if (parseInt(fecha[0]) < 1 || parseInt(fecha[0]) > 30) {
                            error = true;
                        }
                    } else if (parseInt(fecha[1]) == 1 || parseInt(fecha[1]) == 3 || parseInt(fecha[1]) == 5 || parseInt(fecha[1]) == 7 || parseInt(fecha[1]) == 8 || parseInt(fecha[1]) == 10 || parseInt(fecha[1]) == 12) {
                        if (parseInt(fecha[0]) < 1 || parseInt(fecha[0]) > 31) {
                            error = true;
                        }
                    }
                }
            }

        } catch (e) {
            error = true;
        }

        if (error) {
            $(selector).val("");
            $(selector).css("borderColor", "red");
            $(selector).addClass("alert").addClass("alert-danger");
            alert("La fecha ingresada no es valida, Ingrese una fecha");
        } else {
            $(selector).removeClass("alert").removeClass("alert-danger");
            $(selector).css("borderColor", "lightgray");
        }
    }

}