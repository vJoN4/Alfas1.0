//PONER NOMBRE DEL RESTAURANTE
var user = sessionStorage.getItem("user_name");
document.getElementById("user").innerHTML+= user;

//CERRAR SESIÓN
function cerrarSesion(){
    sessionStorage.setItem("user_session", 0);

    if(sessionStorage.getItem("user_session")==0){
        window.location.href="index.html";
    }
}

//MOSTRAR PLATILLOS DISPONIBLES

var nombres=localStorage.getItem("nombre_platillo"),
    detalles=localStorage.getItem("descripcion_platillo"),
    costes = localStorage.getItem("precio_platillo");


var arr_nombres=JSON.parse(nombres),
    arr_detalles=JSON.parse(detalles),
    arr_costes=JSON.parse(costes);

if(arr_nombres.length!=0 && arr_detalles.length!=0 && arr_costes.length!=0){
    for(var i=0; i<arr_nombres.length; i++){
        var divPadre = document.querySelector(".productos");

        var divPlatillo = document.createElement("div");
        divPlatillo.className="plat1llo";

        var h3 = document.createElement("h3");
        h3.className="plato";
        h3.appendChild(document.createTextNode(arr_nombres[i]));

        var des = document.createElement("p");
        des.appendChild(document.createTextNode("Descripción: "+arr_detalles[i]));

        var costo = document.createElement("p");
        costo.appendChild(document.createTextNode("Precio: "+arr_costes[i]));

        var añadir = document.createElement("button");
        añadir.appendChild(document.createTextNode("Añadir al carrito"));

        var total = 0;

        //AÑADIR AL CARRITO
        añadir.onclick=function añadirPlatillo(event){
            //PADRE DEL OBJETIVO DEL EVENTO
            var platillo = event.target.parentNode;

            var precio_String = event.target.previousElementSibling.innerHTML;

            var costo_String = precio_String.split(" ");

            var costo = Number(costo_String[1]);

            total = total + costo;

            document.getElementById("total").innerHTML=total;


            var botonE = document.createElement("button");
            botonE.appendChild(document.createTextNode("Eliminar del carrito"));
            botonE.className="newBoton";

            botonE.onclick=function eliminarPlatillo(event){
                var plato = event.target.parentNode;

                plato.remove();
            }
            
            var divContenedor = document.querySelector(".carrito-platillos");

            var divPlatillo = document.createElement("div");
            divPlatillo.className="plat1llo2";

            var producto = platillo.innerHTML;

            divPlatillo.innerHTML+=producto;
            divPlatillo.appendChild(botonE);
            divContenedor.appendChild(divPlatillo);

        }

        //POR ORDEN
        divPlatillo.appendChild(h3);
        divPlatillo.appendChild(des);
        divPlatillo.appendChild(costo);
        divPlatillo.appendChild(añadir);
        divPadre.appendChild(divPlatillo);   
    }
    
}

function comprar(){
    if(document.querySelector(".plat1llo2")){
        alert("Compra realizada, y se que esta vaina pudo haber quedado mejor");
        document.querySelector(".carrito-platillos").innerHTML="";
        document.getElementById("total").innerHTML="";
        total=0;
    }
    else{
        alert("Carrito vacio, no se puede realizar la compra")
    }
}


if(sessionStorage.getItem("user_session")==0){
    window.location.href="index.html";
}