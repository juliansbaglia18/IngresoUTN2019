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

    bel = bel.toFixed(2);
    kmi = kmi.toFixed(2);

    document.getElementById("resultado").value = bel;
    alert("El aumento es " + kmi);
}
