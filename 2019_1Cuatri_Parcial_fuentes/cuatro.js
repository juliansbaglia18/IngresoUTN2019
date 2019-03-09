function mostrar()
{
var num1;
var num2;
var resultado;

num1 = parseInt(prompt("Ingrese el primer numero"));
num2 = parseInt(prompt("Ingrese el segundo numero"));

if(num1 == num2){
    alert("El primer numero es " + num1 + ", el segundo numero es " + num2 + ", el numero en ambos casos es " + num1);
}
else if(num1 >= num2){
    resultado = num1 - num2;
    if(resultado >= 11){
        alert("El resultado de la resta es " + resultado + " y supero el 10");
    }
    else{
        alert("El resultado de su resta es: " + resultado);
    }
}
else{
    resultado = num1 + num2;
    alert("El resultado de su suma es: " + resultado);
}
}
