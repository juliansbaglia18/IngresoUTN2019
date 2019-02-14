function Mostrar()
{
	//Genero el número RANDOM entre 1 y 10 
	var nota;
	nota = (Math.random()*10).toFixed();
	//nota = Math.floor(Math.random()* max + min); manera correcta de hacerlo

	if (nota >= 9){
		alert("Calificación: " + nota + ". EXCELENTE.");
	}
	else if (nota > 4){
		alert("Calificación: "+ nota + ". APROBÓ.")
	}
	else {
		alert("Calificación: " + nota + ". Vamos, la proxima se puede.")
	}
}//FIN DE LA FUNCIÓN