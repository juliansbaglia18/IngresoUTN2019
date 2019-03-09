function mostrar()
{
    var numero;
    var letra;
    var contadorPares = 0;
    var contadorImpares = 0;
    var contadorCeros = 0;
    var contadorPositivos = 0;
    var positivosTotal = 0;
    var negativosTotal = 0;
    var numMax;
    var numMin;
    var contadorNumero = 0;

    do{
        numero = parseInt(prompt("Ingrese un numero entre -100 y 100: "));
        while (numero < -100 || numero > 100){
            numero = parseInt(prompt("Dato invalido. Ingrese un numero entre -100 y 100: "));
        }
        letra = prompt("Ingrese una letra: ");
        contadorNumero ++;
        if (contadorNumero == 1){
            numMax = numero;
            numMin = numero;
        }
        if (numero /2 % 0){
            contadorPares ++;
        }
        else {
            contadorImpares ++;
        }
        if (numero == 0){
            contadorCeros++;
        }
        if (numero > 0){
            positivosTotal += numero;
            contadorPositivos++;
        }
        else if (numero < 0){
            negativosTotal += numero;
        }
        if (numMax < numero){
            numMax = numero;
        }
        if (numMin > numero){
            numMin = numero;
        }
    }while (confirm("¿Desea continuar?"));
    alert("a) la cantidad de numeros pares es " + contadorPares
        + "\n b) la cantidad de impares es " + contadorImpares
        + "\n c) la cantidad de ceros es "+ contadorCeros
        + "\n d) " + (positivosTotal/contadorPositivos) 
        + "\n e) " + negativosTotal 
        + "\n f) el maximo es " + numMax + " y el minimo es " + numMin)
}
