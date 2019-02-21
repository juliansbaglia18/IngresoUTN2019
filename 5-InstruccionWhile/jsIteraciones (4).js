function Mostrar()
{
	var numero = parseInt(prompt("Ingrese un número entre 0 y 10."));
	while (numero > 10 || numero < 0 || isNaN(numero) == true){
		numero = parseInt(prompt("Dato invalido. Inrgese un número entre 0 y 10."));
		}
	document.getElementById("Numero").value = "Numero '" + numero + "' valido."
}//FIN DE LA FUNCIÓN