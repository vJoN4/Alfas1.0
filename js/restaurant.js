//PONER NOMBRE DEL RESTAURANTE
var restaurante = sessionStorage.getItem("res_name");
document.getElementById("restaurant").innerHTML+= restaurante;

//CERRAR SESIÓN
function cerrarSesion(){
    sessionStorage.setItem("res_session", 0);

    if(sessionStorage.getItem("res_session")==0){
        window.location.href="index.html";
    }
}

var array=[];

function subirPlatillos(){
    var nombre_platillo=document.getElementById("nombre_platillo").value,
        descripcion=document.getElementById("des_platillo").value,
        precio_platillo=document.getElementById("precio_platillo").value;

    if(nombre_platillo!="" && descripcion!="" && precio_platillo!=""){
        var platillos=JSON.parse(localStorage.getItem("nombre_platillo")),
            descripciones=JSON.parse(localStorage.getItem("descripcion_platillo")),
            precios=JSON.parse(localStorage.getItem("precio_platillo"));

        if(platillos==null && descripciones==null && precios==null){
            localStorage.setItem("nombre_platillo", JSON.stringify(array));
            localStorage.setItem("descripcion_platillo", JSON.stringify(array));
            localStorage.setItem("precio_platillo", JSON.stringify(array));

            alert("Base de datos actualizada, seleccione una vez más ''Subir platillo'' por favor");
        }
        else{
            platillos.push(nombre_platillo);
            descripciones.push(descripcion);
            precios.push(precio_platillo);
            
            localStorage.setItem("nombre_platillo", JSON.stringify(platillos));
            localStorage.setItem("descripcion_platillo", JSON.stringify(descripciones));
            localStorage.setItem("precio_platillo", JSON.stringify(precios));

            //PLATILLOS DE CADA RESTAURANTE

            localStorage.setItem(restaurante+"_nombre_platillo", JSON.stringify(platillos));
            localStorage.setItem(restaurante+"_descripcion_platillo", JSON.stringify(descripciones));
            localStorage.setItem(restaurante+"_precio_platillo", JSON.stringify(precios));            


            alert("Platillo registrado =D");

            //AÑADIR AL ESPACIO DE PLATILLOS 


            var divPadre = document.querySelector(".lista-platillos");

            var divPlatillo = document.createElement("div");
            divPlatillo.className="plat1llo";

            var h3 = document.createElement("h3");
            h3.appendChild(document.createTextNode(nombre_platillo));

            var des = document.createElement("p");
            des.appendChild(document.createTextNode("Descripción"+descripcion));

            var costo = document.createElement("p");
            costo.appendChild(document.createTextNode("Precio: "+precio_platillo));

            var eliminarPlatillo = document.createElement("button");
            // eliminarPlatillo.className="test";
            eliminarPlatillo.appendChild(document.createTextNode("Eliminar"));

            // ELIMIAR PLATILLLOS

            eliminarPlatillo.onclick=function eliminarPlatillo(){
                var comida = document.querySelector(".plat1llo");
        
                if(document.querySelector(".plat1llo")){
                    var platos=localStorage.getItem("nombre_platillo"),
                    descripcion=localStorage.getItem("descripcion_platillo"),
                    costos=localStorage.getItem("precio_platillo");

                    
                    var arr_platos=JSON.parse(platos),
                    arr_descripcion=JSON.parse(descripcion),
                    arr_costos=JSON.parse(costos);

                    //DE CADA RESTAURANTE
                    var platos_res=localStorage.getItem(restaurante+"_nombre_platillo"),
                        descripcion_res=localStorage.getItem(restaurante+"_descripcion_platillo"),
                        costos_res=localStorage.getItem(restaurante+"_precio_platillo");

                    var arr_platos_res=JSON.parse(platos_res),
                        arr_descripcion_res=JSON.parse(descripcion_res),
                        arr_costos_res=JSON.parse(costos_res);

                    //SUBIR ENTRE ELEMENTOS
                    var platillo_eliminado = event.target.previousElementSibling.previousElementSibling.previousElementSibling.innerHTML;

                    for(var i=0; i< arr_platos.length; i++){
                        if(arr_platos[i]==platillo_eliminado){
                            arr_platos.splice(i,1);
                            arr_descripcion.splice(i,1);
                            arr_costos.splice(i,1);
                        }
                    }

                    for(var i=0; i<arr_platos_res.length; i++){
                        if(arr_platos_res[i]==platillo_eliminado){
                            arr_platos_res.splice(i,1);
                            arr_descripcion_res.splice(i,1);
                            arr_costos_res.splice(i,1);   
                        }
                    }

                    localStorage.setItem("nombre_platillo", JSON.stringify(arr_platos));
                    localStorage.setItem("descripcion_platillo", JSON.stringify(arr_descripcion));
                    localStorage.setItem("precio_platillo", JSON.stringify(arr_costos));

                    
                    localStorage.setItem(restaurante+"_nombre_platillo", JSON.stringify(arr_platos_res));
                    localStorage.setItem(restaurante+"_descripcion_platillo", JSON.stringify(arr_descripcion_res));
                    localStorage.setItem(restaurante+"_precio_platillo", JSON.stringify(arr_costos_res));

                    comida.remove();
                }
            };

            //POR ORDEN
            divPlatillo.appendChild(h3);
            divPlatillo.appendChild(des);
            divPlatillo.appendChild(costo);
            divPlatillo.appendChild(eliminarPlatillo);
            divPadre.appendChild(divPlatillo);
            
            //LIMPIAR
            nombre_platillo=document.getElementById("nombre_platillo").value="";
            descripcion=document.getElementById("des_platillo").value="";
            precio_platillo=document.getElementById("precio_platillo").value="";
        }
    }
    else{
        alert("No pueden quedar campos vacios");
    }
}

//PLATILLOS, POR SI REFRESCA LA PAGINA

var nombres=localStorage.getItem(restaurante+"_nombre_platillo"),
    detalles=localStorage.getItem(restaurante+"_descripcion_platillo"),
    costes = localStorage.getItem(restaurante+"_precio_platillo");


var arr_nombres=JSON.parse(nombres),
    arr_detalles=JSON.parse(detalles),
    arr_costes=JSON.parse(costes);

if(arr_nombres.length!=0 && arr_detalles.length!=0 && arr_costes.length!=0){
    for(var i=0; i<arr_nombres.length; i++){
        var divPadre = document.querySelector(".lista-platillos");

        var divPlatillo = document.createElement("div");
        divPlatillo.className="plat1llo";

        var h3 = document.createElement("h3");
        h3.appendChild(document.createTextNode(arr_nombres[i]));

        var des = document.createElement("p");
        des.appendChild(document.createTextNode("Descripción: "+arr_detalles[i]));

        var costo = document.createElement("p");
        costo.appendChild(document.createTextNode("Precio: "+arr_costes[i]));

        var eliminarPlatillo = document.createElement("button");
        eliminarPlatillo.appendChild(document.createTextNode("Eliminar"));

        //ELIMINAR PLATILLOS

        eliminarPlatillo.onclick=function eliminarPlatillo(){
            var comida = document.querySelector(".plat1llo");
    
            if(document.querySelector(".plat1llo")){
                var platos=localStorage.getItem("nombre_platillo"),
                descripcion=localStorage.getItem("descripcion_platillo"),
                costos=localStorage.getItem("precio_platillo");

                
                var arr_platos=JSON.parse(platos),
                arr_descripcion=JSON.parse(descripcion),
                arr_costos=JSON.parse(costos);

                //DE CADA RESTAURANTE
                var platos_res=localStorage.getItem(restaurante+"_nombre_platillo"),
                    descripcion_res=localStorage.getItem(restaurante+"_descripcion_platillo"),
                    costos_res=localStorage.getItem(restaurante+"_precio_platillo");

                var arr_platos_res=JSON.parse(platos_res),
                    arr_descripcion_res=JSON.parse(descripcion_res),
                    arr_costos_res=JSON.parse(costos_res);

                    //LOS CONSOLE SON PRUEBAS DE LO QUE PINCHES ANDO HACIENDO ALV 
                    console.log(arr_platos_res);
                    console.log(arr_descripcion_res);
                    console.log(arr_costos_res);

                //SUBIR ENTRE ELEMENTOS
                var platillo_eliminado = event.target.previousElementSibling.previousElementSibling.previousElementSibling.innerHTML;

                console.log(platillo_eliminado);

                //console.log(platillo_eliminado);

                for(var i=0; i< arr_platos.length; i++){
                    if(arr_platos[i]==platillo_eliminado){
                        arr_platos.splice(i,1);
                        arr_descripcion.splice(i,1);
                        arr_costos.splice(i,1);
                    }
                }

                for(var i=0; i<arr_platos_res.length; i++){
                    if(arr_platos_res[i]==platillo_eliminado){
                        arr_platos_res.splice(i,1);
                        arr_descripcion_res.splice(i,1);
                        arr_costos_res.splice(i,1);   
                    }
                }

                localStorage.setItem("nombre_platillo", JSON.stringify(arr_platos));
                localStorage.setItem("descripcion_platillo", JSON.stringify(arr_descripcion));
                localStorage.setItem("precio_platillo", JSON.stringify(arr_costos));

                
                localStorage.setItem(restaurante+"_nombre_platillo", JSON.stringify(arr_platos_res));
                localStorage.setItem(restaurante+"_descripcion_platillo", JSON.stringify(arr_descripcion_res));
                localStorage.setItem(restaurante+"_precio_platillo", JSON.stringify(arr_costos_res));

                comida.remove();
            }
        };

        //POR ORDEN
        divPlatillo.appendChild(h3);
        divPlatillo.appendChild(des);
        divPlatillo.appendChild(costo);
        divPlatillo.appendChild(eliminarPlatillo);
        divPadre.appendChild(divPlatillo);   
    }
    
}


if(sessionStorage.getItem("res_session")==0){
    window.location.href="index.html";
}