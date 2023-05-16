$(function(){

	

	$("#ejecutar").on("click",function(){
		
		var user = $("#user").val();
		var pass = $("#pass").val();
		var res = null;
		console.log()
		
		if(user !== '' && pass !== ''){
			//LoginUsuario(window.btoa(user),pass);
			LoginUsuario(user,pass);
		}else{
			alert("Favor completar los campos vacíos");
		}
	});
	
	$("#pass").keypress(function( event ) {
		if ( event.which == 13 ) {
			$("#ejecutar").click();
		}
	});
	
	$("#user").keypress(function( event ) {
		if ( event.which == 13 ) {
			$("#ejecutar").click();
		}
	});

	$("#volver").on("click",function(){
		var url = "http://srvrcapp/PaginaInicio/";
		$(location).attr('href',url);
	});

});