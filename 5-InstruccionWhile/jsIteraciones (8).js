function Mostrar()
{

	var contador=0;
	var positivo=0;
	var negativo=1;
	var numero;
	var respuesta='si';
	var flag1 = 0;


do{
	numero = parseInt(prompt ("Ingrese un numero:"));
	while (isNaN(numero)){
		numero = parseInt(prompt ("Dato invalido. Ingrese un numero:"));
	}
	if (numero < 0){
		negativo = numero * negativo;
		flag1 = 1;
	}
	else{
		positivo = numero + positivo;
	}
	//alert("algo");
	respuesta = prompt("Desea continuar? ('si' para continuar)");
}
while(respuesta == "si" || respuesta == "SI" || respuesta == "Si");

document.getElementById('suma').value=positivo;
if(flag1 == 0){
negativo = 0;
}
document.getElementById('producto').value=negativo;

}//FIN DE LA FUNCIÓN