function Mostrar()
{

	var contador=0;
	var acumulador=0;
	var respuesta;
	var bel;
	
do {

	bel = parseInt(prompt("ingrese un numero:"));

	acumulador = bel + acumulador;
	contador++;
	alert(acumulador);
	respuesta = confirm("desea seguir ingresando numeros?");
} while(respuesta==true);
document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/contador;

}//FIN DE LA FUNCIÓN