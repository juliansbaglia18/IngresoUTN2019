function mostrar()
{

var continente;
var dia;
var precio;
var oferta
var medioDePago;


continente = prompt("Ingrese contienente deseado").toLowerCase();
dia = parseInt(prompt("Ingrese cantidad de dias que desea para su estadia"));
medioDePago = prompt("Ingrese medio de pago").toLowerCase();

precio = 100 * dia;

switch(continente){

case "america":
if(medioDePago == "debito"){
    oferta = precio -  ((precio*60)/100);
    
}
else {
    oferta = precio -  ((precio*50)/100);
}
alert("Su viaje a " + continente + " costara $" + oferta)
break;

case "africa":
if(medioDePago == "efectivo" || medioDePago == "mercadopago"){
    oferta = precio -  ((precio*75)/100) ;
    }
else {
    oferta = precio -  ((precio*60)/100);
}
alert("Su viaje a " + continente + " costara $" + oferta)
break;

case "europa":
if(medioDePago == "debito"){
    oferta = precio -  ((precio*35)/100);
    }   
 else if(medioDePago == "mercadopago"){
        oferta = precio -  ((precio*30)/100);
    }
    else if (medioDePago == "efectivo"){
    oferta = precio -  ((precio*20)/100);
}
else {
    oferta = precio -  ((precio*25)/100);
}
alert("Su viaje a " + continente + " costara $" + oferta)
break;
default:
oferta = precio + ((precio*20)/100)
alert("Su viaje a " + continente + " costara $" + oferta)
break;

}
}
