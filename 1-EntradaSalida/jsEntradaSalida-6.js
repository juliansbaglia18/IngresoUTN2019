/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
Mostar el resulto por medio de "ALERT"*/
function sumar()
{
    var bel;
    var kmi;
    var kia;


    bel = document.getElementById("numeroUno").value;
    kmi = document.getElementById("numeroDos").value;

    kmi = parseInt(kmi);
    bel = parseInt(bel);

    kia = bel + kmi;
    
    alert(kia);
    
    
}

