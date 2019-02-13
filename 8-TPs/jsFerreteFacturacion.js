/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
var precio1;
var precio2;
var precio3;
var total;
function Sumar () 
{
    precio1 = parseInt (document.getElementById("PrecioUno").value);
    precio2 = parseInt (document.getElementById("PrecioDos").value);
    precio3 = parseInt (document.getElementById("PrecioTres").value);
    
    total = precio1 + precio2 + precio3;
    alert ("El precio total es de $" + total);
}
function Promedio () 
{
    precio1 = parseInt (document.getElementById("PrecioUno").value);
    precio2 = parseInt (document.getElementById("PrecioDos").value);
    precio3 = parseInt (document.getElementById("PrecioTres").value);
    total = (precio1 + precio2 + precio3) / 3;
    alert ("El porcentaje total es de $" + total);
}
function PrecioFinal () 
{
    precio1 = parseInt (document.getElementById("PrecioUno").value);
    precio2 = parseInt (document.getElementById("PrecioDos").value);
    precio3 = parseInt (document.getElementById("PrecioTres").value);
    var totalIva = (precio1 + precio2 + precio3) * 0.21;
    total = precio1 + precio2 + precio3 + totalIva;
    alert ("El precio final mas el IVA es de $" + total);
}