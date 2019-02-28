//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
	var medida;
    medida = parseInt(document.getElementById("lado").value);
    if (isNaN(medida) == false || medida > 0){
            alert("El perimetro del triangulo equilatero es " + medida * 3);

    }
    else{
    alert("dato invalido");
    }

	
}

