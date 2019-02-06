/*Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
var bel;
var kmi;

function MostrarAumento()
{
    bel = document.getElementById("sueldo").value;

    bel = parseInt(bel);

    kmi = bel * 0.1;
    bel = bel + kmi;

    document.getElementById("resultado").value = bel;
}
