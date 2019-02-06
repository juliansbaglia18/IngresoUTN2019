/*Debemos lograr tomar nombre y edad por ID y mostrarlos concatenados 
ej.: "Usted se llama José y tiene 66 años" 	*/
function Mostrar()
{	
    var bel;
    var kmi;

    bel = document.getElementById("elNombre").value;
    kmi = document.getElementById("laEdad").value;

    alert("Su nombre es " + bel + " y su edad es " + kmi + " años.");
}

