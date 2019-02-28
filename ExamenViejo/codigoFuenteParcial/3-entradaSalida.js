//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
	var ancho = document.getElementById("ancho").value;
    var largo = document.getElementById("largo").value;

    if (isNaN (ancho) || ancho <= 0 || isNaN (largo) || largo <= 0){
        alert ("datos invalidos");
    }
	else {
        alert((largo + ancho) * 2 * 6);
    }
}

