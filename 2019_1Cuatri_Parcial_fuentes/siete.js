function mostrar()
{
var altura;
var sexo;
var i;
var cantidadAlt;
i = 0;
var suma;
var acumulador = 0;
var contador = 0;
cantidadAlt=0;
var minimo;
var maximo;


for(var i; i<5 ; i++){

altura = parseInt(prompt("Ingrese la altura del jugador"));
sexo = prompt("Ingrese el sexo del jugador")
min = 0

while(altura < 0 || altura > 250){
    altura = parseInt(prompt("Ingrese una altura valida"));

}

while(isNaN(altura)){
    altura = parseInt(prompt("Ingrese una altura valida"));

}


if(altura>0){
    acumulador=acumulador+altura
contador=contador+1
cantidadAlt = acumulador/contador

}

if (minimo == 0){
    altura = minimo

    if (altura < minimo){
        altura =minimo
        }

    alert("La altura minima es " + minimo);
}

if(!(sexo == "f" || sexo == "m")){
    sexo = prompt("Ingrese un sexo valido");
}


}
alert("La altura promedio es " + cantidadAlt)


}

