//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
	var numero1 = parseInt(prompt("Ingrese el primer numero"));
	var numero2 = parseInt(prompt("Ingrese el segundo numero"));
    var msj ;
    var total;

    if (numero1 == numero2){
        total = numero1 * numero2;
        msj = "el producto es " + total;
    }
    else if(numero1 > numero2){
        total = numero1 - numero2;
        msj = "la resta es " + total;
    }
    else{
        total = numero1 + numero2;
        msj = "la suma es " + total;
    }
    document.write (msj);
}

