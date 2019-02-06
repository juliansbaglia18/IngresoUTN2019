/*Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
var bel;
var kmi;

function MostrarDescuento()
{
    bel = document.getElementById("importe").value;

    bel = parseInt(bel);

    kmi = bel * 0.25;
    bel = bel - kmi;

    document.getElementById("resultado").value = bel;
}
