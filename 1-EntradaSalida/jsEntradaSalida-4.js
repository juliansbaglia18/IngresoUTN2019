/* 
	Debemos lograr tomar un dato por 'PROMPT' 
	y lo muestro por 'getElementById' al presionar el botón 'MOSTRAR'
*/
function Mostrar()
{
	var bel;
	bel = prompt("ingrese nombre");
	document.getElementById("elNombre").value = bel;
}

