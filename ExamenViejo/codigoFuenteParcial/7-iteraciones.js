//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar() {
    var nota = 0;
    var sexo;
    var contadorM = 0;
    var notaMenor;
    var notaTotal = 0;
	for ( var alumnos = 1; alumnos <= 6; alumnos ++){
        nota = parseInt(prompt("Ingrese nota: "));
        while(isNaN(nota) || nota < 1 || nota > 10){
            nota = parseInt(prompt("Nota invalida. Ingrese nota: "));
        }
        sexo = prompt("Ingrese 'f' para femenino o 'm' para masculino: ");
        while (sexo != "f" && sexo != "m"){
            sexo = prompt("Sexo invalido. Ingrese 'f' para femenino o 'm' para masculino: ");
        }
        if (alumnos == 1){
            notaMenor = nota;
        }
        if(sexo == "m" && nota >= 6){
            contadorM ++;
        }
        notaTotal = notaTotal + nota;
        if (nota < notaMenor){
            notaMenor = nota;
        }
    }
    alert ("a) Promedio: " + notaTotal/6 + " b) nota mas baja: " + notaMenor + " c) cantidad de varones que su nota sea mayor o igual a 6: " + contadorM); 
}

