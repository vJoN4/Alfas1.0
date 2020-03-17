// VENTANA EMERGENTE DEL USUARIO
var buttonUser = document.getElementById("openUser"),
    overlay = document.getElementById("overlay"),
    popUser = document.getElementById("popUser"),
    btn_cerrar = document.getElementById("btn-cerrar");

buttonUser.addEventListener("click", function(){
    overlay.classList.add("active");
    popUser.classList.add("active");
});

btn_cerrar.addEventListener("click", function(){
    overlay.classList.remove("active");
    popUser.classList.remove("active");
});

// VENTANA EMERGENTE DEL RESTAURANTE
var buttonRest = document.getElementById("openRestaurant"),
    overlay2 = document.getElementById("overlay2"),
    popRes = document.getElementById("popRes"),
    btn_cerrar2 = document.getElementById("btn-cerrar2");

buttonRest.addEventListener("click", function(){
    overlay2.classList.add("active");
    popRes.classList.add("active");
});

btn_cerrar2.addEventListener("click", function(){
    overlay2.classList.remove("active");
    popRes.classList.remove("active");
});

// ############################################################################
//REGISTRO DE USUARIOS
var array=[];
//DATOS -- USUARIOS
// localStorage.setItem("user_nombre",JSON.stringify(array));
// localStorage.setItem("user_correo",JSON.stringify(array));
// localStorage.setItem("user_contraseña",JSON.stringify(array));
// localStorage.setItem("user_recontraseña",JSON.stringify(array));

function user_reg(){

    var user_name=document.getElementById("user_name").value,
        user_reg_email=document.getElementById("user_reg_email").value,
        user_reg_pass=document.getElementById("user_reg_pass").value,
        user_reg_repass=document.getElementById("user_reg_repass").value,
        user_reg_domicilio=document.getElementById("user_reg_domicilio").value;


        if(user_name!="" && user_reg_email!="" && user_reg_pass!="" && user_reg_repass!=""){

            var x=user_reg_email.split(""),
                arroba=0,
                punto=0;


            for(var i=0; i<x.length; i++){
                if(user_reg_email.charAt(i)==" "){
                    alert("No pueden haber espacios en blanco");
                }
                else{
                    if(user_reg_email.charAt(i)=="@"){
                        arroba++
                        if(arroba==1){
                            if(user_reg_email.charAt(i)=="."){
                                punto++;
                            }
                        }
                    }
                }  
            }

                if(arroba!=1 && punto!=1){
                    alert("Correo no valido");
                }
                else{
                    if(/^[A-Z-a-z-0-9]+@+[a-z]+.+[a-z]/.test(user_reg_email)){
                        if(user_reg_pass.length>=6){
                            if(user_reg_pass==user_reg_repass){

                                var nombres=JSON.parse(localStorage.getItem("user_nombre")),
                                    correos=JSON.parse(localStorage.getItem("user_correo")),
                                    contraseñas=JSON.parse(localStorage.getItem("user_contraseña")),
                                    confirmaciones=JSON.parse(localStorage.getItem("user_recontraseña")),
                                    domicilios=JSON.parse(localStorage.getItem("user_domicilio"));

                                if(nombres==null && correos==null && contraseñas==null && confirmaciones==null && domicilios==null){
                                    localStorage.setItem("user_nombre",JSON.stringify(array));
                                    localStorage.setItem("user_correo",JSON.stringify(array));
                                    localStorage.setItem("user_contraseña",JSON.stringify(array));
                                    localStorage.setItem("user_recontraseña",JSON.stringify(array));
                                    localStorage.setItem("user_domicilio", JSON.stringify(array));
                                }
                                else{
                                    nombres.push(user_name);
                                    correos.push(user_reg_email)
                                    contraseñas.push(user_reg_pass);
                                    confirmaciones.push(user_reg_repass);
                                    domicilios.push(user_reg_domicilio);

                                    localStorage.setItem("user_nombre",JSON.stringify(nombres));
                                    localStorage.setItem("user_correo",JSON.stringify(correos));
                                    localStorage.setItem("user_contraseña",JSON.stringify(contraseñas));
                                    localStorage.setItem("user_recontraseña",JSON.stringify(confirmaciones));
                                    localStorage.setItem("user_domicilio", JSON.stringify(domicilios));


                                    alert("Registro completo =D");

                                    //LIMPIAR
                                    overlay.classList.remove("active");
                                    popUser.classList.remove("active");

                                    user_name=document.getElementById("user_name").value="";
                                    user_reg_email=document.getElementById("user_reg_email").value="";
                                    user_reg_pass=document.getElementById("user_reg_pass").value="";
                                    user_reg_repass=document.getElementById("user_reg_repass").value="";
                                }   
                            }
                            else{
                                alert("Las contraseñas no coinciden");
                            }
                        }
                        else{
                            alert("Contraseña demasiado corta");
                        }
                    }
                    else{
                        alert("Correo no valido");
                    }
                }
        }
        else{
            alert("No puede quedar ningun campo vacio");
        }
}


//DATOS -- RESTAURANTES
// localStorage.setItem("res_nombre",JSON.stringify(array));
// localStorage.setItem("res_correo",JSON.stringify(array));
// localStorage.setItem("res_contraseña",JSON.stringify(array));
// localStorage.setItem("res_recontraseña",JSON.stringify(array));

function res_reg(){

    var res_name=document.getElementById("res_name").value,
        res_reg_email=document.getElementById("res_reg_email").value,
        res_reg_pass=document.getElementById("res_reg_pass").value,
        res_reg_repass=document.getElementById("res_reg_repass").value;

        if(res_name!="" && res_reg_email!="" && res_reg_pass!="" && res_reg_repass!=""){

            var x=res_reg_email.split(""),
                email=true,
                arroba=0,
                punto=0;


            for(var i=0; i<x.length; i++){
                if(res_reg_email.charAt(i)==" "){
                    alert("No pueden haber espacios en blanco");
                }
                else{
                    if(res_reg_email.charAt(i)=="@"){
                        arroba++
                        if(arroba==1){
                            if(res_reg_email.charAt(i)=="."){
                                punto++;
                            }
                        }
                    }
                }  
            }

                if(arroba!=1 && punto!=1){
                    email=false;
                    alert("Correo no valido");
                }
                else{
                    if(/^[A-Z-a-z-0-9]+@+[a-z]+.+[a-z]/.test(res_reg_email)){
                        if(res_reg_pass.length>=6){
                            if(res_reg_pass==res_reg_repass){

                                var nombres=JSON.parse(localStorage.getItem("res_nombre")),
                                    correos=JSON.parse(localStorage.getItem("res_correo")),
                                    contraseñas=JSON.parse(localStorage.getItem("res_contraseña")),
                                    confirmaciones=JSON.parse(localStorage.getItem("res_recontraseña"));

                                if(nombres==null && correos==null && contraseñas==null && confirmaciones==null){
                                    localStorage.setItem("res_nombre",JSON.stringify(array));
                                    localStorage.setItem("res_correo",JSON.stringify(array));
                                    localStorage.setItem("res_contraseña",JSON.stringify(array));
                                    localStorage.setItem("res_recontraseña",JSON.stringify(array));
                                }
                                else{
                                    nombres.push(res_name);
                                    correos.push(res_reg_email)
                                    contraseñas.push(res_reg_pass);
                                    confirmaciones.push(res_reg_repass);

                                    localStorage.setItem("res_nombre",JSON.stringify(nombres));
                                    localStorage.setItem("res_correo",JSON.stringify(correos));
                                    localStorage.setItem("res_contraseña",JSON.stringify(contraseñas));
                                    localStorage.setItem("res_recontraseña",JSON.stringify(confirmaciones));

                                    alert("Registro completo =D");

                                    //LIMPIAR
                                    overlay2.classList.remove("active");
                                    popRes.classList.remove("active");

                                    document.getElementById("res_name").value="";
                                    document.getElementById("res_reg_email").value="";
                                    document.getElementById("res_reg_pass").value="";
                                    document.getElementById("res_reg_repass").value="";
                                }
                            }
                            else{
                                alert("Las contraseñas no coinciden");
                            }
                        }
                        else{
                            alert("Contraseña demasiado corta");
                        }
                    }
                    else{
                        alert("Correo no valido");
                    }
                }
        }
        else{
            alert("No puede quedar ningun campo vacio");
        }
}

// ############################################################################
//INICIO DE SESIÓN

function sessionUser(){

    //ARREGLOS DE REGISTROS
    var lista_usuarios = JSON.parse(localStorage.getItem("user_correo")),
        lista_contraseñas = JSON.parse(localStorage.getItem("user_contraseña")),
        lista_nombres = JSON.parse(localStorage.getItem("user_nombre"));

    var validador1 = document.getElementById("user_email").value,
        validador2 = document.getElementById("user_password").value;

    if(/^[A-Z-a-z-0-9]+@+[a-z]+.+[a-z]/.test(validador1)){
    }
    else{
        alert("Correo no valido");
    }
    
    var c=0;

        if(validador1=="" && validador2==""){
            alert("No puede haber campos en blanco");
        }
        else{
            if(lista_usuarios.length!=0 && lista_contraseñas.length!=0){
                for(var i=0; i<lista_usuarios.length; i++){
                    if(lista_usuarios[i]==validador1 && lista_contraseñas[i]==validador2){
                        alert("Sesión lograda Cx");
                        sessionStorage.setItem("user_session", 1);
                        sessionStorage.setItem("user_name", lista_nombres[i]);
                        window.location.href="user.html";
                        break;
                    }
                    else{
                        c++;
                    }
                }
            }
            else{
                alert("Usuarios no registrado");
            }

            //ESTE IF ES UNA PENDEJADA
            if(c!=0){
                alert("Contraseña o usuario incorrectos");
            }
        }
}

function sessionRes(){

    //ARREGLOS DE REGISTROS
    var lista_usuarios = JSON.parse(localStorage.getItem("res_correo")),
        lista_contraseñas = JSON.parse(localStorage.getItem("res_contraseña")),
        lista_nombres = JSON.parse(localStorage.getItem("res_nombre"));

    var validador1 = document.getElementById("res_email").value,
        validador2 = document.getElementById("res_password").value;

    if(/^[A-Z-a-z-0-9]+@+[a-z]+.+[a-z]/.test(validador1)){
    }
    else{
        alert("Correo no valido");
    }
    
    var c=0;

        if(validador1=="" && validador2==""){
            alert("No puede haber campos en blanco");
        }
        else{
            if(lista_usuarios.length!=0 && lista_contraseñas.length!=0){
                for(var i=0; i<lista_usuarios.length; i++){
                    if(lista_usuarios[i]==validador1 && lista_contraseñas[i]==validador2){
                        alert("Sesión lograda Cx");
                        sessionStorage.setItem("res_session", 1);
                        sessionStorage.setItem("res_name", lista_nombres[i]);
                        
                        window.location.href="restaurant.html";
                        break;
                    }
                    else{
                        c++;
                    }
                }
            }
            else{
                alert("Usuarios no registrado");
            }

            if(c!=0){
                alert("Contraseña o usuario incorrectos");
            }
        }
}

if(sessionStorage.getItem("res_session")==1){
    window.location.href="restaurant.html";
}

if(sessionStorage.getItem("user_session")==1){
    window.location.href="user.html";
}