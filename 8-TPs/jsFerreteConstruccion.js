/*2.	Para el departamento de Construcción:
A.	 Mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	Mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/
var largo;
var ancho;
var radio;
var total;

function Rectangulo () 
{
    largo = parseFloat (document.getElementById("Largo").value);
    ancho = parseFloat (document.getElementById("Ancho").value);

    total = (largo + ancho) * 2 * 3;

    alert ("La cantidad de alambre es de " + total + " metros");
}
function Circulo () 
{
	radio = parseFloat (document.getElementById("Radio").value);

    total = 2 * 3.1415 * radio * 3;
    total = total.toFixed(2);

    alert("La cantidad de alambre es de " + total + " metros");
}
function Materiales () 
{
	largo = parseFloat (document.getElementById("Largo").value);
    ancho = parseFloat (document.getElementById("Ancho").value);

    var totalCe = largo * ancho * 2;
    var totalCa = largo * ancho * 3;

    alert("Se requiere " + totalCe + " bolsas de cemento y " + totalCa + " bolsas de cal");
}