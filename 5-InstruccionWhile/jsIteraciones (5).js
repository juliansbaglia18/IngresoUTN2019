function Mostrar()
{

var sexo = prompt("ingrese f ó m .").toLowerCase();//convierte mayusculas en minusculas.



	while (sexo != "f"  && sexo != "m"){
        sexo = prompt("Sexo invalido. Ponga 'f' para femenino o 'm' para masculino.").toLowerCase();
	}
    if (sexo == "f"){
            document.getElementById('Sexo').value = "Sexo femenino";
    }
    else{
            document.getElementById('Sexo').value = "Sexo masculino";

    }

}//FIN DE LA FUNCIÓN