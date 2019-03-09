function mostrar()
{
var precio;
var descuento;
var descontado;
var precioFinal;

precio = parseInt(prompt("Ingrese precio por favor:"));
descuento = parseInt(prompt("Ingrese el porcentaje de descuento:"));
descontado = (precio * descuento) / 100;
precioFinal = precio - descontado;

document.getElementById("elPrecioFinal").value = "$" + precioFinal;
}
