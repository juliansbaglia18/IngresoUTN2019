/*En esta oportunidad el juego evaluará tus
 aptitudes a partir de la cantidad de intentos, 
 por lo cual se informará lo siguiente:
1° intento: “usted es un Psíquico”.
2° intento: “excelente percepción”.
3° intento: “Esto es suerte”.
4° intento: “Excelente técnica”.
5° intento: “usted está en la media”.
Desde  6 Intentos hasta 10:”falta técnica”
Más de 10 intentos: “afortunado en el amor!!”.*/

var numeroSecreto; 
var contadorIntentos;
var numero;
function comenzar()
{
  document.getElementById("numero").value = "";

	//Genero el número RANDOM entre 1 y 100
	//numeroSecreto = (Math.random()*100).toFixed();
  numeroSecreto = Math.floor(Math.random()* 100 + 1);
	//alert(numeroSecreto );
  alert("Numero secreto generado.");
  contadorIntentos = 0;
  document.getElementById("intentos").value = contadorIntentos;
}

function verificar()
{
	numero = document.getElementById("numero").value;
  if(numero == numeroSecreto){
	contadorIntentos ++;
	document.getElementById("intentos").value = contadorIntentos;

	  if (contadorIntentos == 1){
		  alert ("Correcto. Usted es un psiquico");
	  }
	  else if (contadorIntentos == 2){
		  alert("Correcto. Excelente percepción");
	  }
	  else if (contadorIntentos == 3){
		  alert("Correcto. Esto es suerte");
	  }
	  else if (contadorIntentos == 4){
		  alert("Correcto. Excelente tecnica");
	  }
	  else if (contadorIntentos == 5){
		  alert("Correcto. Usted esta en la media");
	  }
	  else if (contadorIntentos > 5 && contadorIntentos < 10){
		  alert("Correcto. Falta tecnica");
	  }
	  else {
		  alert ("Afortunado en el amor!!");
	  }
  }
	else {
    contadorIntentos ++;
    document.getElementById("intentos").value = contadorIntentos;
    if (numero > numeroSecreto){
      alert("Se pasó...");
    }
    else{
      alert("Falta...");
    }
  }
}