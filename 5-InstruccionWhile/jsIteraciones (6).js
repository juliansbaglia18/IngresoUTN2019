function Mostrar()
{

	var contador = 0;
	var acumulador = 0;
	var cantidadDatos = 5;
	var numero = 0;

while(contador <= 4){
	//alert("entro en el primer while");
	numero = parseInt(prompt ("Ingrese " + cantidadDatos + " dato/s"));
	while(isNaN(numero)){
		//alert("entro en segundo while");
		numero = parseInt(prompt("Dato invalido. Ingrese dato valido: "));
	}
	acumulador = acumulador + numero;
	cantidadDatos --;
	contador ++;
	//alert(acumulador);

}

//alert("final");
document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/5;

}//FIN DE LA FUNCIÓN