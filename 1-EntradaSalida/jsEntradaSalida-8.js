/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resto entre el dividendo y el divisor.
ej.: "El resto es 0 ."*/
var bel;
var kmi;
var kia;

function SacarResto()
{
    bel = document.getElementById("numeroDividendo").value;
    kmi = document.getElementById("numeroDivisor").value;

    kia = bel % kmi;

  alert("El resto: " + kia + ".");
}
