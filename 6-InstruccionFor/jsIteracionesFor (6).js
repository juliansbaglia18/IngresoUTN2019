function Mostrar()
{
    var numero;
    var i;
    var contador = 0;//los contadores siempre se inicializan

    numero = parseInt(prompt("ingrese un numero positivo"));
    while(isNaN(numero) || numero <= 0){
        numero = parseInt(prompt("Numero no valido. Ingrese un numero"));
    }
    for (i=0; i!=numero; i++){
        if(i%2 == 0 && i>0){
            console.log (i);
            contador++;
        }
    }
        console.log("cantidad de impares "+ contador);
}//FIN DE LA FUNCIÓN