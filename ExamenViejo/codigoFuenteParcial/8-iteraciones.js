//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar() {
    var numero;
    var msj;
    var pares = 0;
    var contador = 0;
    var promedio;
    var total = 0;
    var numMin;
    var numMax = 0;

    do{
        numero = parseInt(prompt("Ingresar numero positivo: "));
        while (isNaN(numero) || numero < 1){
        numero = parseInt(prompt("Numero invalido. Ingresar numero positivo: "));
        }
        contador ++;
        if (contador == 1){
            numMin=numero;
        }
        if (numero % 2 == 0){
            pares ++;
        }
        total = numero + total;
        promedio = total / contador;
        if(numero < numMin){
            numMin = numero;
        }
        if(numero > numMax){
            numMax = numero;
        }
    }while (confirm("desea seguir ingresando numeros?") == true);
    document.write("a) la cantidad de pares es: " + pares + " b) el promedio es: " + promedio + " c) la suma es: " + total + " d) el numero maximo es " + numMax + " y el minimo es " + numMin);
}