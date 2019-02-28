//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
	var importe = parseInt(prompt("Ingrese importe"));
    while (isNaN (importe) || importe < 0){
	    var importe = parseInt(prompt("Dato invalido. Ingrese importe"));
    }
    var iva = importe * 0.21;
    var importeTotal = importe + iva;
    document.getElementById("importe").value = importeTotal;
}