<?php session_start();session_unset();session_destroy();?>
<!DOCTYPE html>
<html lang="es">
    
    <head>
        
        <meta charset="utf-8">
        
        <title> Urgencias Sapu </title>    
        <meta http-equiv="Content-type" content="text/html; charset=utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="shortcut icon" href="favicon.ico" type="image/x-icon">
        <link rel="icon" href="favicon.ico" type="image/x-icon">

        <meta name="author" content="Desarrollado por la Unidad de registro clínico ">
        <meta name="description" content="Login Urgecias Sapu">
        <meta name="keywords" content="Login">
        <link href="../../../lib/css/bootstrap.min.css" media="all" rel="stylesheet" type="text/css" />
        <link href="../../../lib/css/font-awesome.min.css" media="all" rel="stylesheet" type="text/css" />
        <link href="../../../lib/css/se7en-font.css" media="all" rel="stylesheet" type="text/css" />   
        <link href="https://fonts.googleapis.com/css?family=Nunito&display=swap" rel="stylesheet"> 
        
        <!-- Link hacia el archivo de estilos css -->
        <link rel="stylesheet" href="../../../lib/css/login.css">

        <script src='../../../lib/jquery-3.2.1.min.js'></script>
        <?php include_once("../../../lib/components.php");?>
        <script src='../controlador/cliente/controladorPagina.js'></script>
        <script src='js/funcionPagina.js'></script>
        
        <style type="text/css">
            
        </style>
        
        <script type="text/javascript">
        
        </script>
        
    </head>
    
    <body>
      
        <div id="contenedor">

            
            <div id="contenedorcentrado">
            
                <div id="login">
                    


                        <label for="user">Usuario</label>
                        
                        <input class="form-control"  id="user" type="text" placeholder="Ingrese Usuario OMI" required>
                        
                        <label for="pass">Contraseña</label>
                        
                        <input class="form-control"  id="pass" type="password" placeholder="Ingrese Clave" required>

                        
                        <button class="btn btn-primary" id="ejecutar">Login</button> 

                        <span id="msgbox" style="display:none"></span>   
                       
                        <span id="intentos" style="display:none"> Intentos : 3</span>   


                   
                    
                </div>
                <div id="derecho">
                    <div class="titulo">
                        Sistema Urgencia Sapu
                    </div>
                    <hr>
                    <div class="pie-form">
                    <img class="logo-empresa" src="../../../lib/images/logo.png" alt="">
                  
                        <hr>
                        <a>© Desarrollado por la Unidad de registro clínico </a>
                    </div>
                </div>
            </div>
        </div>
        
    </body>
</html>