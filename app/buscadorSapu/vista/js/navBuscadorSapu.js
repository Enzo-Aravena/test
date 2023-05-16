$( document ).ready(function() {
	$("#desde").hide();
	$("#descargar").hide();
	$('#desde').datepicker();

	$("#tablesContent").hide();
	//EVENT CLICK
	$('#ejecutar').on("click",function(){
		$("#tablesContent").hide();
		var rdbBuscar = $("input:radio[name=rdbBuscar]:checked").val();	
		var rutPaciente = $("#rutPaciente").val();
		var desde = $('input[name=desde]').val();

		if(desde=== ""){
			desde= "";
		}else{
			var fn = desde.split("/");
			desde = fn[2]+"/"+fn[1]+"/"+fn[0];
		}

		if (rdbBuscar === "rut") {
			if (rutPaciente === "" && desde === "") {
				alert("Debe completar el campo!");
			}else{
				if (Fn.validaRut(rutPaciente) ){
					buscarPacienteSapu(rutPaciente,desde);
				}else{
					alert("El rut ingresado no es válido.");
				}
			}// END ELSE VALIDACION
		}else{
			if (rutPaciente === "" && desde === "") {
				alert("Debe completar el campo!");
			}else{
				buscarPacienteSapu(rutPaciente,desde);	
			}
			
		}
	});	

	// SI SE SELECCIONA RUT O FECHA ,MUESTRA AQUI
	$("input:radio[name=rdbBuscar]").change(function(){
		$("#tablesContent").hide();
 		 var valor=$("input:radio[name=rdbBuscar]:checked").val();
 		 if (valor === "rut"){
 		 	$("#rutPaciente").show();
 		 	$("#desde").hide();
 		 	$('input[name=desde]').val('');
 		 }else{	 		 	
 		 	$("#desde").show();
 		 	$("#rutPaciente").hide();
 		 	$("#rutPaciente").val('');
 		 } 		 	
	});



	$('#descargar').on("click",function(){
		var rutPaciente = $("#rutPaciente").val();
		var desde = $('input[name=desde]').val();

		if(desde=== ""){
			desde= "";
		}else{
			var fn = desde.split("/");
			desde = fn[2]+"/"+fn[1]+"/"+fn[0];
		}

		if (rutPaciente !== "" || desde !== "") {
			//exportar();
			window.location = "../controlador/servidor/buscadorSapuController.php?evento=exportTable"+"&rut="+rutPaciente+"&fecha="+desde;
		}else{
			alert("Debe seleccionar una opcion a buscar antes de descargar.");
		}
	});


	/*************************************************************************************/
	$("#volverSeleccionCentro").on("click",function(){
		//$(location).attr('href',"dashboard.php?tab="+tab);
		$(location).attr('href',"../../seleccionPuestoTrabajo/vista/seleccionPuestoTrabajo.php");
		window.parent.$("#tituloPestaña").empty();
	});
	/*************************************************************************************/

});

var Fn = {
    validaRut : function (rutPaciente) {
        rutPaciente = rutPaciente.replace("‐","-");
        if (!/^[0-9]+[-|‐]{1}[0-9kK]{1}$/.test( rutPaciente ))
            return false;
        var tmp     = rutPaciente.split('-');
        var digv    = tmp[1]; 
        var rutPaciente     = tmp[0];
        if ( digv == 'K' ) digv = 'k' ;        
        return (Fn.dv(rutPaciente) == digv );
    },
    dv : function(T){
        var M=0,S=1;
        for(;T;T=Math.floor(T/10))
            S=(S+T%10*(9-M++%6))%11;
        return S?S-1:'k';
    }
}





//FUNCION QUE EXPORTA DESDE JAVASCRIPT LOS DATOS SOLICITADOS
function exportar(){
        var uri = 'data:application/vnd.ms-excel;base64,'
        , template = '<html xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:x="urn:schemas-microsoft-com:office:excel" xmlns="http://www.w3.org/TR/REC-html40"><meta http-equiv="content-type" content="application/vnd.ms-excel; charset=UTF-8"><head><!--[if gte mso 9]><xml><x:ExcelWorkbook><x:ExcelWorksheets><x:ExcelWorksheet><x:Name>{worksheet}</x:Name><x:WorksheetOptions><x:DisplayGridlines/></x:WorksheetOptions></x:ExcelWorksheet></x:ExcelWorksheets></x:ExcelWorkbook></xml><![endif]--></head><body><table>{table}</table></body></html>'
        , base64 = function (s) { return window.btoa(unescape(encodeURIComponent(s))) }
        , format = function (s, c) { return s.replace(/{(\w+)}/g, function (m, p) { return c[p]; }) }
        var table = 'dataTable';
        var name = 'reportería';
        if (!table.nodeType) table = document.getElementById(table)
         var ctx = { worksheet: name || 'Worksheet', table: table.innerHTML }
         window.location.href = uri + base64(format(template, ctx))
}


//PAGINACION 
$.fn.pageMe = function(opts){
	var $this = this,
	    defaults = {
	        perPage: 7,
	        showPrevNext: false,
	        numbersPerPage: 10,
	        hidePageNumbers: false,
	        showFirstLast: true
	    },
	    settings = $.extend(defaults, opts);

	var listElement = $this;
	var perPage = settings.perPage; 
	var children = listElement.children();
	var pager = $('.pagination');

	if (typeof settings.childSelector!="undefined") {
	    children = listElement.find(settings.childSelector);
	}

	if (typeof settings.pagerSelector!="undefined") {
	    pager = $(settings.pagerSelector);
	}

	var numItems = children.size();
	var numPages = Math.ceil(numItems/perPage);

	pager.data("curr",0);
	pager.empty();

	if (settings.showFirstLast){
	    $('<li><a href="#" class="first_link"><</a></li>').appendTo(pager);
	}     
	if (settings.showPrevNext){
	    $('<li><a href="#" class="prev_link">«</a></li>').appendTo(pager);
	}


	var curr = 0;
	while(numPages > curr && (settings.hidePageNumbers==false)){
	    $('<li><a href="#" class="page_link">'+(curr+1)+'</a></li>').appendTo(pager);
	    curr++;
	}

	if (settings.numbersPerPage>1) {
	   $('.page_link').hide();
	   $('.page_link').slice(pager.data("curr"), settings.numbersPerPage).show();
	}

	if (settings.showPrevNext){
	    $('<li><a href="#" class="next_link">»</a></li>').appendTo(pager);
	}
	if (settings.showFirstLast){
	    $('<li><a href="#" class="last_link">></a></li>').appendTo(pager);
	}  

	pager.find('.page_link:first').addClass('active');
	pager.find('.prev_link').hide();

	if (numPages<=1) {
	    pager.find('.next_link').hide();
	}
	pager.children().eq(2).addClass("active");

	children.hide();
	children.slice(0, perPage).show();

	pager.find('li .page_link').click(function(){
	    var clickedPage = $(this).html().valueOf()-1;
	    goTo(clickedPage,perPage);
	    return false;
	});

	pager.find('li .first_link').click(function(){
	    first();
	    return false;
	});  

	pager.find('li .prev_link').click(function(){
		// llama a la funcion previous
	    previous();
	    return false;
	});

	pager.find('li .next_link').click(function(){
	    // llama a la funcion next
	    next();
	    return false;
	});

	pager.find('li .last_link').click(function(){
	    last();
	    return false;
	});

	function previous(){
	    var goToPage = parseInt(pager.data("curr")) - 1;
		if(goToPage == -1 || goToPage == -2 || goToPage == -3){
	    	console.log("omite la vuelta atras");
	    }else{
			goTo(goToPage);
	    }
	}

	function next(){
	    goToPage = parseInt(pager.data("curr")) + 1;
	    goTo(goToPage);
	}

	function first(){
	    var goToPage = 0;
	    goTo(goToPage);
	} 

	function last(){
	    var goToPage = numPages-1;
	    goTo(goToPage);
	} 

	function goTo(page){
	    var startAt = page * perPage,
	        endOn = startAt + perPage;

	    children.css('display','none').slice(startAt, endOn).show();

	    //si selecciona ir a la ultima pagina hace lo siguiente
	    if (page>=1) {
	        pager.find('.prev_link').show();
	    }
	    else {
	        pager.find('.prev_link').hide();
	    }

	    //si selecciona el inicio hace lo siguiente
	    if (page<=1) {
			pager.find('.prev_link').show();
		}
		else {
			pager.find('.prev_link').hide();
		}

		if (page < (numPages - settings.numbersPerPage)) {
	        pager.find('.next_link').show();
	    }
	    else {
	        pager.find('.next_link').hide();
	    }

	    pager.data("curr",page);

		if (settings.numbersPerPage > 1) {
		    $('.page_link').hide();

		    if (page < (numPages - settings.numbersPerPage)) {
		        $('.page_link').slice(page, settings.numbersPerPage + page).show();
		    }
		    else {
		        $('.page_link').slice(numPages-settings.numbersPerPage).show();
		    }
		}

	    pager.children().removeClass("active");
	    pager.children().eq(page+2).addClass("active");
	}
};