let valorsesion = 0;
let countClicks = 0;
let select = '';
let arreglo = [];
let centroTrabajo = "";
let contador = 0;
let contadorCarga = 0;
let msj = "";
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
    var test = location.search.replace('?', '').split('=');
    var menutab;
    //window.parent.$("#loader").show();
    $("#cargandoPdf").hide();
    $("#IngresarDatosPacientesRut").hide();
    $("#IngresarDatosPacientesDni").hide();
    $(".tab_content").hide();
    $("#refrescarPantalla").hide();
    if (test[0] == 0 || test[0] === "") {
        $("ul.nav li:first").addClass("active").show();
        $(".tab_content:first").show();
    } else {
        if (test[0] === "centro") {
            var centroTrabajo = test[1];
            window.parent.$("#centroTrabajo").val(centroTrabajo);
            window.parent.$("#tituloPestaña").text("");
            var title = "";
            window.parent.$("#pullRigth").css("margin-top", "2%");
            $("ul.nav li:first").addClass("active").show();
            $(".tab_content:first").show();

            const titulo = CargaCentroTrabajo(centroTrabajo);
            window.parent.$("#tituloPestaña").text(titulo);
        } else {
            if (test[0] === "idCentro") {
                var centroTrabajo = test[1];
                window.parent.$("#tituloPestaña").text("");
                var title = "";
                window.parent.$("#pullRigth").css("margin-top", "2%");
                if (centroTrabajo === "50") {
                    $("ul.nav li").removeClass("active");
                    var href = "#tab6";
                    $(href).addClass("active");
                    $(href).fadeIn();
                    $('[href="#tab6"]').tab('show');
                    $('[href="#tab1"]').hide();
                    $('[href="#tab2"]').hide();
                    $('[href="#tab3"]').hide();
                    $('[href="#tab4"]').hide();
                    $('[href="#tab5"]').hide();
                    $('[href="#tab7"]').hide();
                } else {
                    $("ul.nav li:first").addClass("active").show();
                    $(".tab_content:first").show();
                }
                const titulo = CargaCentroTrabajo(centroTrabajo);
                window.parent.$("#tituloPestaña").text(titulo);
                if (centroTrabajo === "50") { $("#registrarUrgencia").hide(); } else { $("#registrarUrgencia").show(); }

            } else {
                var menutab = test[1];
                switch (menutab) {
                    case 'tab1':
                        $("ul.nav li:first").addClass("active").show();
                        $(".tab_content:first").show();
                        break;
                    case 'tab2':
                        $("ul.nav li").removeClass("active");
                        var href = "#tab2";
                        $(href).addClass("active");
                        $(href).fadeIn();
                        $('[href="#tab2"]').tab('show');
                        break;
                    case 'tab3':
                        $("ul.nav li").removeClass("active");
                        var href = "#tab3";
                        $(href).addClass("active");
                        $(href).fadeIn();
                        $('[href="#tab3"]').tab('show');
                        break;
                    case 'tab4':
                        $("ul.nav li").removeClass("active");
                        var href = "#tab4";
                        $(href).addClass("active");
                        $(href).fadeIn();
                        $('[href="#tab4"]').tab('show');
                        break;
                    case 'tab5':
                        $("ul.nav li").removeClass("active");
                        var href = "#tab5";
                        $(href).addClass("active");
                        $(href).fadeIn();
                        $('[href="#tab5"]').tab('show');
                        break;
                    default:
                        $("ul.nav li:first").addClass("active").show();
                        $(".tab_content:first").show();
                        break;
                }

                window.parent.$("#tituloPestaña").text("");
                var title = "";
                var centroTrabajo = window.parent.$("#centroTrabajo").val();
                const titulo = CargaCentroTrabajo(centroTrabajo);
                window.parent.$("#tituloPestaña").text(titulo);
            }
        }
    }

    $("ul.nav li").click(function() {
        //BORRA LOS FILTROS
        $("#filtrarTablaExamen").val('');
        $("#filtrarTablaRayos").val('');
        $("#filtrarTablaElectro").val('');
        $("#filtrarTablaDental").val('');
        $("ul.nav li").removeClass("active");
        $(this).addClass("active");
        $(".tab_content").hide();
        var activeTab = $(this).find("a").attr("href");
        switch (activeTab) {
            case "#tab1":
                $(activeTab).fadeIn();
                break;
            case "#tab2":
                $(activeTab).fadeIn();
                break;
            case "#tab3":
                $(activeTab).fadeIn();
                break;
            case "#tab4":
                $(activeTab).fadeIn();
                break;
            case "#tab5":
                $(activeTab).fadeIn();
                break;
            case "#tab6":
                $(activeTab).fadeIn();
                break;
            case "#tab7":
                $(activeTab).fadeIn();
                break;
        }
        return false;
    });

    $("#pacId").empty();
    $("#desde").datepicker();
    $("#fnac").datepicker({
        dateFormat: 'dd/mm/yy',
        changeMonth: true,
        changeYear: true,
        yearRange: '1900:2050',
        minDate: new Date(1900, 1 - 1, 1),
        maxDate: new Date,
        inline: true
    });

    $.datepicker.regional['es'] = {
        closeText: 'Cerrar',
        prevText: '< Ant',
        nextText: 'Sig >',
        currentText: 'Hoy',
        monthNames: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'],
        monthNamesShort: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'],
        dayNames: ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'],
        dayNamesShort: ['Dom', 'Lun', 'Mar', 'Mié', 'Juv', 'Vie', 'Sáb'],
        dayNamesMin: ['Do', 'Lu', 'Ma', 'Mi', 'Ju', 'Vi', 'Sá'],
        weekHeader: 'Sm',
        dateFormat: 'dd/mm/yy',
        firstDay: 1,
        isRTL: false,
        showMonthAfterYear: false,
        yearSuffix: ''
    };

    $.datepicker.setDefaults($.datepicker.regional['es']);

    $("#fechaBusqueda").datepicker({
        dateFormat: 'dd/mm/yy',
        changeMonth: true,
        changeYear: true,
        yearRange: '1900:2050',
        minDate: new Date(1900, 1 - 1, 1),
        maxDate: new Date,
        inline: true
    });

    $("#fechaBusquedaCancelada").datepicker({
        dateFormat: 'dd/mm/yy',
        changeMonth: true,
        changeYear: true,
        yearRange: '1900:2050',
        minDate: new Date(1900, 1 - 1, 1),
        maxDate: new Date,
        inline: true
    });

    $("#buscar").hide();
    $("#buscarRut").hide();

    var hoy = new Date();
    var dd = hoy.getDate();
    var mm = hoy.getMonth() + 1; //hoy es 0!
    var yyyy = hoy.getFullYear();
    if (dd < 10) { dd = '0' + dd }

    if (mm < 10) { mm = '0' + mm }
    fechaHoy = yyyy + '-' + mm + '-' + dd;
    $("#fechaHoy").val('');
    $("#fechaHoy").val(fechaHoy);
    window.parent.$("html,body").animate({ scrollTop: 0 }, 600);
    var centroTrabajo = window.parent.$("#centroTrabajo").val();
    var num = 0;

    //VALIDA CENTRO DAU 50
    if (centroTrabajo === "50") {
        var buscar = $("#buscar").val();
        var centroTrabajo = window.parent.$("#centroTrabajo").val();
        var fechaBusqueda = fechaHoy;
        enviarInfoBusqueda(buscar, centroTrabajo, fechaBusqueda);
    } else {
        if (valorsesion == 0) { cargarListaMotivo(); }
        if (valorsesion == 0) { obtenerPacientesNuevosCreados(centroTrabajo); }
        if (valorsesion == 0) { cargarSexo(); }
        if (valorsesion == 0) { cargarNacionalidad(); }
        if (valorsesion == 0) { cargarComunas(); }
        if (valorsesion == 0) { cargarPrevision(); }
        if (valorsesion == 0) { cargarTipoConsulta(); }
        if (valorsesion == 0) { cargarMedioTransporte(); }
        if (valorsesion == 0) { cargarTipoAccidente(); }
        if (valorsesion == 0) { cargarLugarAccidente(); }
        if (valorsesion == 0) { cargarCentros(centroTrabajo); }
    }

    //ABRE POPUP PARA INGRESAR UN USUARIO O BUSQUEDA
    $("#registrarUrgencia").on("click", function() {
        countClicks = 0;
        // LIMPIEZA DE CAMPOS
        LimpiaCampos();
        //LIMPIA LOS CAMPOS CON MENSAJE Y OCULA LOS BOTONES DE CARGAR
        $("#IngresarDatosPacientesDni").hide();
        $("#IngresarDatosPacientesRut").hide();
        $("#validateRutOk").text("");
        $("#validateDniOk").text("");
        $("#crearPacienteSapu").show();
        $("#crearPaciente").show();
        $("#RegistroUrgencia").hide();
        $("#IngresarRegistro").hide();
        window.parent.$("html,body").animate({ scrollTop: 0 }, 600);
        $("#myModal").modal('show');
    });

    //VALIDA PACIENTE POR RUT 
    $("#IngresarDatosPacientesRut").on("click", function() {
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
        $("#IngresarDatosPacientesRut").hide();
        $("#validateRutOk").text("");
    });

    //VALIDA PACIENTE POR DNI ADEMAS DE OCULTAR Y LLENAR LOS DATOS EN EL FORMULARIO
    $("#IngresarDatosPacientesDni").on("click", function() {
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
        $("#IngresarDatosPacientesDni").hide();
        $("#validateDniOk").text("");
    });

    /* ------------------------------ VALIDACIONES --------------------------------------*/
    //DESAHABILITA EL DNI SI SE ESCRIBE EN EL RUT 
    $("#rutPac").keyup(function() {
        var rutPac = $("#rutPac").val();
        var dniPac = $("#dniPac").val();
        $("#dniPac").css("border-color", "lightgray");
        $("#rutPac").css("border-color", "lightgray");
        if (rutPac !== "") {
            //SI EL RUT ES VALIDO
            if (Fn.validaRut(rutPac)) { buscarPaciente(rutPac, dniPac); }
            /*if (checkRut(rutPac)) {
            	buscarPaciente(rutPac,dniPac);
            }else{
            	alert("No pudo ingresar datos");
            }*/

            $("#sinDoc").attr("disabled", true);
            $("#dniPac").prop('disabled', true);
            $("#dniPac").css("border-color", "lightgray");
        } else {
            $("#validateRutOk").text("");
            $("#validateDniOk").text("");
            //LimpiaCampos();
            document.getElementById(rutPac).value = "";
            $("#dniPac").prop('disabled', false);
            $("#dniPac").val('');
            $("#sinDoc").attr("disabled", false);
        }
    });

    //DESAHABILITA EL RUT SI SE ESCRIBE EN EL DNI 
    $("#dniPac").keyup(function() {
        var rutPac = $("#rutPac").val();
        var dniPac = $("#dniPac").val();
        $("#dniPac").css("border-color", "lightgray");
        $("#rutPac").css("border-color", "lightgray");
        if (dniPac !== "") {
            if (dniPac.length > 6) { buscarPaciente(rutPac, dniPac); }
            $("#sinDoc").attr("disabled", true);
            $("#rutPac").prop('disabled', true);
        } else {
            LimpiaCampos();
            $("#validateRutOk").text("");
            $("#validateDniOk").text("");
            $("#IngresarDatosPacientesRut").hide();
            $("#IngresarDatosPacientesDni").hide();
            $("#rutPac").prop('disabled', false);
            $("#rutPac").val('');
            $("#sinDoc").attr("disabled", false);
        }
    });


    $("#fnac").on("blur", function() {
        VerificarFechaValida("#fnac", "/");
    });

    $("#fnac").change(function() {
        VerificarFechaValida("#fnac", "/");
    });

    $("#crearPacienteSapu").on("click", function() {
        countClicks = 0;
        var pacId = $("#pacId").val();
        var rutPac = $("#rutPac").val();
        var dniPac = $("#dniPac").val();
        var nombrePac = $("#nombrePac").val();
        var apePat = $("#apePat").val();
        var apeMat = $("#apeMat").val();
        var fnac = document.getElementById("fnac").value;
        if (fnac === "") {
            fnac = "NULL";
        } else {
            var fn = fnac.split("/");
            fnac = fn[2] + "/" + fn[1] + "/" + fn[0];
            var hoy = new Date();

        }

        var sexo = $('select[name=sexo').val();
        var nacionalidad = $('select[name=nacionalidad]').val();
        var direccion = $("#direccion").val();
        var comuna = $('select[name=comuna]').val();
        var telefono = $("#telefono").val();
        var prevision = $('select[name=prevision]').val();
        var hta = $("#HTA").val();
        var dm2 = $("#DM").val();
        var epoc = $("#EPOC").val();
        var asma = $("#ASMA").val();
        var dhc = $("#IRC").val();
        var irc = $("#DHC").val();
        var otros_ec = $("#OTRASEC").val();
        var otros_ec_desc = $("#OTRASECDESC").val();
        var correo = $("#correo").val();
        var centro = window.parent.$("#centroTrabajo").val();
        if (nacionalidad !== null && comuna !== null) {
            nacionalidad = nacionalidad;
            comuna = comuna;
        } else
        if (nacionalidad !== null && comuna === null) {
            nacionalidad = nacionalidad;
            comuna = "0";
        } else
        if (nacionalidad === null && comuna !== null) {
            nacionalidad = "0";
            comuna = comuna;
        } else {
            nacionalidad = "0";
            comuna = "0";
        }
        if (prevision === "0") { $("#prevision").css("border-color", "red"); } else { $("#prevision").css("border-color", "lightgray"); }
        if (sexo === "0") { $("#sexo").css("border-color", "red"); } else { $("#sexo").css("border-color", "lightgray"); }
        var TieneDocumento = $('input[name=sinDoc]').prop('checked');
        if (TieneDocumento === true) {
            $("#dniPac").prop('disabled', true);
            $("#rutPac").prop('disabled', true);
            if (sexo !== "0" && prevision !== "0") {
                createPacSapu(pacId, rutPac, dniPac, nombrePac, apePat, apeMat, fnac, sexo, nacionalidad, direccion, comuna, telefono, prevision, hta, dm2, epoc, asma, dhc, irc, otros_ec, otros_ec_desc, correo, centro);
            } else {
                alert("Error al crear el paciente, Favor Complete los campos en rojo.");
            }
        } else {
            $("#dniPac").prop('disabled', false);
            $("#rutPac").prop('disabled', false);
            if (rutPac === "" && dniPac !== "") {
                if (sexo !== "0" && prevision !== "0") {
                    createPacSapu(pacId, rutPac, dniPac, nombrePac, apePat, apeMat, fnac, sexo, nacionalidad, direccion, comuna, telefono, prevision, hta, dm2, epoc, asma, dhc, irc, otros_ec, otros_ec_desc, correo, centro);
                } else {
                    alert("Error al crear el paciente, Favor Complete los campos en rojo.");
                }
            } else
            if (rutPac !== "" && dniPac === "") {
                if (rutPac === "") { $("#rutPac").css("border-color", "red"); } else { $("#rutPac").css("border-color", "lightgray"); }
                var msj = "";
                $("#validateRutOk").empty();
                $("#validateRutError").empty();
                if (Fn.validaRut(rutPac)) {
                    $("#rutPac").css("border-color", "lightgray");
                    msj = "Rut Valido";
                    $("#validateRutOk").append(msj);
                } else {
                    if ($("#rutPac").val() === "") {
                        msj = "El Rut esta vacío";
                        $("#rutPac").css("border-color", "red");
                        $("#rutPac").val('');
                        $("#validateRutError").append(msj);
                    } else {
                        msj = "El Rut ingresado no es Valido";
                        $("#rutPac").css("border-color", "red");
                        $("#validateRutError").append(msj);
                    }
                }

                if (Fn.validaRut(rutPac) && sexo !== "0" && prevision !== "0") {
                    createPacSapu(pacId, rutPac, dniPac, nombrePac, apePat, apeMat, fnac, sexo, nacionalidad, direccion, comuna, telefono, prevision, hta, dm2, epoc, asma, dhc, irc, otros_ec, otros_ec_desc, correo, centro);
                } else {
                    alert("Error al crear el paciente, Favor Complete los campos en rojo.");
                }
            } else {
                if (rutPac === "") { $("#rutPac").css("border-color", "red"); } else { $("#rutPac").css("border-color", "lightgray"); }
                var msj = "";
                $("#validateRutOk").empty();
                $("#validateRutError").empty();
                if (Fn.validaRut(rutPac)) {
                    $("#rutPac").css("border-color", "lightgray");
                    msj = "Rut Valido";
                    $("#validateRutOk").append(msj);
                } else {
                    if ($("#rutPac").val() === "") {
                        msj = "El Rut esta vacío";
                        $("#rutPac").css("border-color", "red");
                        $("#rutPac").val('');
                        $("#validateRutError").append(msj);
                    } else {
                        msj = "El Rut ingresado no es Valido";
                        $("#rutPac").css("border-color", "red");
                        $("#validateRutError").append(msj);
                    }
                }
                if (Fn.validaRut(rutPac) && sexo !== "0" && prevision !== "0") {
                    createPacSapu(pacId, rutPac, dniPac, nombrePac, apePat, apeMat, fnac, sexo, nacionalidad, direccion, comuna, telefono, prevision, hta, dm2, epoc, asma, dhc, irc, otros_ec, otros_ec_desc, correo, centro);
                } else {
                    alert("Error al crear el paciente, Favor Complete los campos en rojo.");
                }
            }
        }
    });

    //NGRESA EL REGISTRO DEL SISTEMA
    $("#IngresarRegistro").on("click", function() {
        var pacId = $("#pacId").val();
        var perID = window.parent.$("#perId").val();
        var centroi = window.parent.$("#centroTrabajo").val();
        var nombreAcompanante = $("#nombreAcompanante").val();
        var motivoConsulta = $("#motivoConsulta").val();
        var tipoAccidente = $('select[name=tipoAccidente]').val();
        var tipoConsulta = $('select[name=tipoConsulta]').val();
        var lugarAccidente = $('select[name=lugarAccidente]').val();
        var medioTransporte = $('select[name=medioTransporte]').val();
        var fnac = document.getElementById("fnaci").value;
        if (fnac !== "") {
            var fn = fnac.split("/");
            fnac = fn[2] + "/" + fn[1] + "/" + fn[0];
            var hoy = new Date();
            var añoHoy = hoy.getFullYear();
            var validaMayorEdad = calcEdad(fn[2], añoHoy);
        }

        //validaciones
        if (validaMayorEdad === false) { $("#nombreAcompanante").css("border-color", "red"); } else { $("#nombreAcompanante").css("border-color", "lightgray"); }
        if (motivoConsulta === "") { $("#motivoConsulta").css("border-color", "red"); } else { $("#motivoConsulta").css("border-color", "lightgray"); }
        if (tipoConsulta === "0") { $("select[name=tipoConsulta]").css("border-color", "red"); } else { $("select[name=tipoConsulta]").css("border-color", "lightgray"); }
        if (medioTransporte === "0") { $("select[name=medioTransporte]").css("border-color", "red"); } else { $("select[name=medioTransporte]").css("border-color", "lightgray"); }
        if (centroi !== "" && motivoConsulta !== "" && tipoConsulta !== "0" && medioTransporte !== "0") {
            if (validaMayorEdad === false && nombreAcompanante.trim() === "") {
                alert("El paciente es menor de edad, Debe Ingresar el Nombre del acompañante.");
                console.log("cantidad de clicks hechos" + countClicks);
                countClicks = 0;
            } else {
                countClicks = countClicks + 1;
                if (countClicks === 1) {
                    registrarUrgenciaSapu(pacId, perID, centroi, nombreAcompanante, motivoConsulta, tipoAccidente, tipoConsulta, lugarAccidente, medioTransporte);
                    console.log("se resetea contador de " + countClicks);
                } else {
                    console.log("cantidad de clicks hechos" + countClicks);
                    alert("Debe clickear solo una vez, ya se esta procesando su ingreso.")
                }
            }



        } else {
            alert("Error al registrar el paciente, Favor Complete los campos en rojo.");
            console.log("cantidad de clicks hechos" + countClicks);
            countClicks = 0;
        }
    });

    $("#buscarPacientesDadosDeAlta").on("click", function() {
        var buscar = $("#buscar").val();
        var centroTrabajo = window.parent.$("#centroTrabajo").val();
        var fechaBusqueda = document.getElementById("fechaBusqueda").value;
        if (fechaBusqueda === "") {
            fechaBusqueda = "";
        } else {
            var fn = fechaBusqueda.split("/");
            fechaBusqueda = fn[2] + "/" + fn[1] + "/" + fn[0];
        }

        if (buscar === "" && fechaBusqueda === "") {
            alert("Debe completar el campo!");
        } else
        if ((buscar !== "" && fechaBusqueda === "") || (buscar === "" && fechaBusqueda !== "")) {
            enviarInfoBusqueda(buscar, centroTrabajo, fechaBusqueda);
        } else {
            window.parent.$("#loader").hide();
            alert("Debe completar el campo!");
        }
    });

    $("#buscarPacientesCancelados").on("click", function() {
        var buscar = $("#buscarRut").val();
        var fechaBusqueda = document.getElementById("fechaBusquedaCancelada").value;
        var centroTrabajo = window.parent.$("#centroTrabajo").val();
        if (fechaBusqueda === "") {
            fechaBusqueda = "";
        } else {
            var fn = fechaBusqueda.split("/");
            fechaBusqueda = fn[2] + "/" + fn[1] + "/" + fn[0];
        }
        if (buscar === "" && fechaBusqueda === "") {
            alert("Debe completar el campo!");
        } else
        if ((buscar !== "" && fechaBusqueda === "") || (buscar === "" && fechaBusqueda !== "")) {
            busquedaObtenerPacientesCancelados(buscar, fechaBusqueda, centroTrabajo);
        } else {
            window.parent.$("#loader").hide();
            alert("Debe completar el campo!");
        }
    });



    $("#descargaMinsalPdf").on("click", function() {
        var pacId = $("#pacId").val();
        var centroTrabajo = window.parent.$("#centroTrabajo").val();
        window.open("../controlador/servidor/solicitudExamenCovid.php?pacId=" + pacId + "&centro=" + centroTrabajo);
    });

    $("#motivoConsulta").keyup(function() {
        var data = $("#motivoConsulta").val().length;
        var maxLength = 150;
        var minlength = 0;
        var contador = (minlength + data);
        if (contador == 150) {
            document.getElementById("numMotivo").innerHTML = '<span style="color: red;"> Ha alcanzado el maximo de caracteres ' + maxLength + '</span>';
        } else {
            document.getElementById("numMotivo").innerHTML = contador + '/' + maxLength;
        }
    });

    $("input:radio[name=rdbBuscar]").change(function() {
        var tipoDato = $("input:radio[name=rdbBuscar]:checked").val();
        if (tipoDato === "fecha") {
            $("#buscar").val("");
            $("#fechaBusqueda").show();
            $("#buscar").hide();
        } else {
            $("#buscar").show();
            document.getElementById("fechaBusqueda").value = "";
            $("#fechaBusqueda").hide();
        }
    });

    $("input:radio[name=rdbBuscarDos]").change(function() {
        var tipoDato = $("input:radio[name=rdbBuscarDos]:checked").val();
        if (tipoDato === "fecha") {
            $("#buscarRut").val("");
            $("#fechaBusquedaCancelada").show();
            $("#buscarRut").hide();
        } else {
            document.getElementById("fechaBusquedaCancelada").value = "";
            $("#fechaBusquedaCancelada").hide();
            $("#buscarRut").show();
        }
    });

    //VALIDA SI TIENE DOCUMENTO O NO EL PACIENTE
    $('input[name=sinDoc]').change(function() {
        var TieneDocumento = $('input[name=sinDoc]').prop('checked');
        if (TieneDocumento === true) {
            $("#dniPac").prop('disabled', true);
            $("#rutPac").prop('disabled', true);
            $("#fnac").attr("disabled", true);
        } else {
            $("#dniPac").prop('disabled', false);
            $("#rutPac").prop('disabled', false);
            $("#fnac").attr("disabled", false);
        }
    });

    //VALIDACION FECHA DE NACIMIENTO
    /*$('input[name=sinFechaNac]').change(function() {
        var esNN = $('input[name=sinFechaNac]').prop('checked');
        if (esNN === true) {
            $("#fnac").prop('disabled', true);
        } else {
            $("#fnac").prop('disabled', false);
        }
    });*/

    /*************************************************************************************/
    $("#volverSeleccionCentro").on("click", function() {
        $(location).attr('href', "../../seleccionPuestoTrabajo/vista/seleccionPuestoTrabajo.php");
        window.parent.$("#tituloPestaña").text("");
    });

    $("#refrescarPantalla").on("click", function() {
        var centroTrabajo = window.parent.$("#centroTrabajo").val();
        obtenerRegistroTriadaPaciente(centroTrabajo);
        obtenerPacientesNuevosCreados(centroTrabajo);
        obtenerPacientesParaAtencion(centroTrabajo);
        obtenerMisProcedimientos(centroTrabajo);
        obtenerEgresoPaciente(centroTrabajo);
        $('#modalValidacion').modal('hide');
    });


    //	RESTRICCION DE CAMPOS

    $("#rutPac").on("keydown", function(e) {
        if (!BlockKeys(/[0-9KkArrowRightArrowLeft]/, e.key)) { return false; }
    });

    $("#dniPac").on("keydown", function(e) {
        if (!BlockKeys(/[0-9a-zA-ZArrowRightArrowLeft]/, e.key)) { return false; }
    });

    $("#nombrePac").on("keydown", function(e) {
        if (!BlockKeys(/[a-zA-Z´áúéíóüñÑ0ArrowRightArrowLeft']/, e.key)) { return false; }
    });

    $("#apeMat").on("keydown", function(e) {
        if (!BlockKeys(/[a-zA-Z´áúéíóüñÑ0'ArrowRightArrowLeft]/, e.key)) { return false; }
    });

    $("#direccion").on("keydown", function(e) {
        if (!BlockKeys(/[a-zA-Z,./1-90#´áúéíóüñÑ0°'ArrowRightArrowLeft]/, e.key)) { return false; }
    });

    $("#telefono").on("keydown", function(e) {
        if (!BlockKeys(/[0-9+ArrowRightArrowLeft]/, e.key)) { return false; }
    });

    $("#correo").on("keydown", function(e) {
        if (!BlockKeys(/[a-zA-Z.1-9-´áúéíóüñÑ0@_'ArrowRightArrowLeft]/, e.key)) { return false; }
    });

    $("#apePat").on("keydown", function(e) {
        if (!BlockKeys(/[a-zA-Z´áúéíóüñÑ0'ArrowRightArrowLeft]/, e.key)) { return false; }
    });

    $("#fnac").on("keydown", function(e) {
        if (!BlockKeys(/[/1-90ArrowRightArrowLeft]/, e.key)) { return false; }
    });

    $("#nombreAcompanante").on("keydown", function(e) {
        if (!BlockKeys(/[a-zA-Z´áúéíóüñÑ0'ArrowRightArrowLeft]/, e.key)) { return false; }
    });

    $("#motivoConsulta").on("keydown", function(e) {
        if (!BlockKeys(/[a-zA-Z,./1-9-*""#$%&()?¿¡!=´+áúéíóüñÑ0°<>_;:'ArrowRightArrowLeft]/, e.key)) { return false; }
    });

    $('input:text, textarea').on('keypress', function(e) {
        if (e.which !== 39 && e.which !== 92 && e.which !== 124 && e.which !== 172 && e.which !== 61 && e.which !== 95 && e.which !== 176 &&
            e.which !== 123 && e.which !== 125 && e.which !== 91 && e.which !== 93 && e.which !== 191 && e.which !== 161 && e.which !== 63 && e.which !== 34) {
            return true;
        } else {
            return false;
        }
    });
});

function LimpiaCampos() {
    $("#cargaDatosPaciente").val("");
    $("#cargaDatosPaciente").val("");
    $("#dniPac").prop('disabled', false);
    $("#rutPac").prop('disabled', false);
    $("#dniPac").css("border-color", "lightgray");
    $("#rutPac").css("border-color", "lightgray");
    $("#validateRutError").hide();
    $("#sinDoc").attr("disabled", false);
    $("#sinDoc").attr('checked', false);
    $('select[name=sexo]').css("border-color", "lightgray");
    $('select[name=prevision]').css("border-color", "lightgray");
    document.getElementById('fnac').style.borderColor = 'lightgray';
    $("#pacId").val("");
    $("#rutPac").val("");
    $("#dniPac").val("");
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
}

function BlockKeys(regexPermitido, key) {
    if (key != "Backspace" && key != " " && key != "Tab" && !key.match(regexPermitido)) {
        return false; //dont display key if it is a number
    }
    return true;
}

function FinalizarSesion() {
    alert('Su sesión fue cerrada por inactividad en los últimos 45 minutos.');
    window.setTimeout(function() {
        window.top.location.href = '../../../index.php';
    }, 5000);
}


//FUNCION QUE LIMPIA LOS CAMPOS
function limpiaCamposCreacionFomularioPaciente() {
    $("#numDau").val("");
    $("#pacId").val("");
    $("#rutPaci").val("");
    $("#nombrePaci").val("");
    $("#apePati").val("");
    $('select[name=sexoi]').val();
    $("#direccioni").val("");
    $("#dniPaci").val("");
    $("#apeMati").val("");
    $('input[name=fnaci]').val("");
    $("#nacionalidadi").val("");
    $("#telefoni").val("");
    $('select[name=previsioni]').val("0");
    $("#motivoConsulta").val("");
    $("#nombreAcompanante").val("");
    $('select[name=tipoConsulta]').val("0");
    $('select[name=medioTransporte]').val("0");
    $('select[name=tipoAccidente]').val("0");
    $('select[name=lugarAccidente]').val("0");
}

function deshabilitarHabilitarPaciente() {
    $("#pacId").prop('disabled', true);
    $("#rutPaci").prop('disabled', true);
    $("#dniPaci").prop('disabled', true);
    $("#nombrePaci").prop('disabled', true);
    $("#apePati").prop('disabled', true);
    $("#apeMati").prop('disabled', true);
    $('input[name=fnaci]').prop('disabled', true);
    $('select[name=sexoi]').prop('disabled', true);
    $('select[name=nacionalidadi]').prop('disabled', true);
    $("#direccioni").prop('disabled', true);
    $('select[name=comunai]').prop('disabled', true);
    $("#telefoni").prop('disabled', true);
    $('select[name=previsioni]').prop('disabled', true);
    $("#correoni").prop('disabled', true);
    $("#buscarDatoPaciente").hide();
    $("#crearPaciente").hide();
    $("#crearPacienteSapu").hide();
    $('select[name=centroi]').val(0);
    $('select[name=tipoAccidente]').val(0);
    $('select[name=tipoConsulta]').val(0);
    $('select[name=lugarAccidente]').val(0);
    $('select[name=medioTransporte]').val(0);

}

function checkRut(rut) {
    // Despejar Puntos
    var valor = rut.value.replace('.', '');
    // Despejar Guión
    valor = valor.replace('-', '');
    // Aislar Cuerpo y Dígito Verificador
    cuerpo = valor.slice(0, -1);
    dv = valor.slice(-1).toUpperCase();
    // Formatear RUN
    rut.value = cuerpo + '-' + dv
        // Si no cumple con el mínimo ej. (n.nnn.nnn)
    if (cuerpo.length < 7) { rut.setCustomValidity("RUT Incompleto"); return false; }
    // Calcular Dígito Verificador
    suma = 0;
    multiplo = 2;
    // Para cada dígito del Cuerpo
    for (i = 1; i <= cuerpo.length; i++) {
        // Obtener su Producto con el Múltiplo Correspondiente
        index = multiplo * valor.charAt(cuerpo.length - i);
        // Sumar al Contador General
        suma = suma + index;
        // Consolidar Múltiplo dentro del rango [2,7]
        if (multiplo < 7) { multiplo = multiplo + 1; } else { multiplo = 2; }
    }

    // Calcular Dígito Verificador en base al Módulo 11
    dvEsperado = 11 - (suma % 11);
    // Casos Especiales (0 y K)
    dv = (dv == 'K') ? 10 : dv;
    dv = (dv == 0) ? 11 : dv;
    // Validar que el Cuerpo coincide con su Dígito Verificador
    if (dvEsperado != dv) { rut.setCustomValidity("RUT Inválido"); return false; }
    // Si todo sale bien, eliminar errores (decretar que es válido)
    rut.setCustomValidity('');
}

function calcEdad(fnac, diaHoy) {

    let cacl = diaHoy - fnac;

    if (cacl >= 18) {
        return true;
    } else {
        return false;
    }
}

function CargaCentroTrabajo(centroTrabajo) {
    switch (centroTrabajo) {
        case "1":
            title = "Registro Urgencia Carol Urzúa";
            break;
        case "2":
            title = "Registro Urgencia La Faena";
            break;
        case "3":
            title = "Registro Urgencia San Luis";
            break;
        case "4":
            title = "Registro Urgencia Lo Hermida";
            break;
        case "5":
            title = "Registro Urgencia C. Silva Henriquez";
            break;
        case "8":
            title = "Registro Urgencia SAR Carol Urzúa";
            break;
        case "9":
            title = "Registro Urgencia SAPU La Faena";
            break;
        case "10":
            title = "Registro Urgencia SAPU Lo Hermida";
            break;
        case "11":
            title = "Registro Urgencia SAPU San Luis";
            break;
        case "12":
            title = "Registro Urgencia P. Gerardo Whelan";
            break;
        case "13":
            title = "Registro Urgencia Las Torres";
            break;
    }

    return title;
}