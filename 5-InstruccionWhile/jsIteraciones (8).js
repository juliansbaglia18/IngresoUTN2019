function Mostrar()
{

	var contador=0;
	var positivo=0;
	var negativo=1;
	var numero;
	var respuesta='si';
do{
	numero = parseInt(prompt ("ingrese un numero:"));
	while(numero < 0){
		negativo = numero * negativo;
	}
	while (numero >= 0){
		positivo = positivo + numero;
	}
	respuesta = prompt("desea continuar?");
}while(respuesta == "si" || respuesta == "SI" || respuesta == "Si");

document.getElementById('suma').value=positivo;
document.getElementById('producto').value=negativo;

}//FIN DE LA FUNCIÓN