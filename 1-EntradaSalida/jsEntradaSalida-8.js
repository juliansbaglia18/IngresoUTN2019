/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resto entre el dividendo y el divisor.
ej.: "El resto es 0 ."*/
var bel;
var kmi;
var kia;
var xim;

function SacarResto()
{
    bel = document.getElementById("numeroDividendo").value;
    kmi = document.getElementById("numeroDivisor").value;

    kmi = parseInt(kmi);
    bel = parseInt(bel);

    kia = bel / kmi;

    xim = kia;

    kia = parseInt(kia);

    xim = xim - kia;

    alert("El resultado es: " + kia + ". El resto: " + xim + ".");
}
