<?php
	session_start();
	
	if(!isset($_SESSION["username"])){
		//header("Location: ../../../index.php");
		echo "<script>
			window.top.location.href= '../../../index.php';
		</script>";
	}

?>