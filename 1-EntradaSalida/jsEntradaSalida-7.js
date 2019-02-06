/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
var bel;
var kmi;
var kia;

function sumar()
{	
    bel = document.getElementById("numeroUno").value;
    kmi = document.getElementById("numeroDos").value;

    kmi = parseInt(kmi);
    bel = parseInt(bel);
    
    kia = bel + kmi;

    alert("El resultado es: " + kia);

    document.getElementById("numeroUno").value = "";
    document.getElementById("numeroDos").value = "";

}

function restar()
{
    bel = document.getElementById("numeroUno").value;
    kmi = document.getElementById("numeroDos").value;

    kmi = parseInt(kmi);
    bel = parseInt(bel);
    
    kia = bel - kmi;

    alert("El resultado es: " + kia);

    document.getElementById("numeroUno").value = "";
    document.getElementById("numeroDos").value = "";
}

function multiplicar()
{ 
    bel = document.getElementById("numeroUno").value;
    kmi = document.getElementById("numeroDos").value;

    kmi = parseInt(kmi);
    bel = parseInt(bel);
    
    kia = bel * kmi;

    alert("El resultado es: " + kia);

    document.getElementById("numeroUno").value = "";
    document.getElementById("numeroDos").value = "";
}

function dividir()
{
    bel = document.getElementById("numeroUno").value;
    kmi = document.getElementById("numeroDos").value;

    kmi = parseInt(kmi);
    bel = parseInt(bel);
    
    kia = bel / kmi;

    alert("El resultado es: " + kia);

    document.getElementById("numeroUno").value = "";
    document.getElementById("numeroDos").value = "";
}

