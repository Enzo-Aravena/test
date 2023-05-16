function buscarAtencionParaAnulacion(){
	var url= "../controlador/servidor/anularAtencionController.php";
	var type= "POST";
	var resultado = null;
	var data= {
		evento :'buscar'
	};

	$.ajax({
		url:url,
		type:type,
		async: false,
		data:data,
		beforesend:function(){
			console.log("peticion recibida");
		},
		success:function(response){
			resultado = response;	
		}, // End success
		error:function(error){
			console.log("Error en la peticion");
		} // End error
	});//End ajax
}