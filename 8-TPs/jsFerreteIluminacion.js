/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 */
var lamparas;
var prelamparas
var descuento;
var total;
var iibb;

function CalcularPrecio () 
{
    lamparas = parseInt (document.getElementById("Cantidad").value);
    prelamparas = lamparas * 35;
    
    switch(lamparas){
        case 1:
        case 2:
        document.getElementById("precioDescuento").value = "$" + prelamparas;
        total = prelamparas;
        break;

        case 3:
        if (document.getElementById("Marca").value == "ArgentinaLuz"){
            total = prelamparas - prelamparas * 0.15;
        }
        else if (document.getElementById("Marca").value == "FelipeLamparas"){
            total = prelamparas - prelamparas * 0.1;
        }
        else {
            total = prelamparas - prelamparas * 0.05;
        }
        break;

        case 4:
         if (document.getElementById("Marca").value == "ArgentinaLuz" || document.getElementById("Marca").value == "FelipeLamparas"){
            total = prelamparas - prelamparas * 0.25;
        }
        else {
            total = prelamparas - prelamparas * 0.2;
        }
        break;

        case 5:
        if (document.getElementById("Marca").value == "ArgentinaLuz"){
            total = prelamparas - prelamparas * 0.4;
        }
        else {
            total = prelamparas - prelamparas * 0.3;
        }

        default:
         total = prelamparas - prelamparas * 0.5;
         break;
    }
        if (total >= 120){
        iibb = total * 0.1;
        total = iibb + total;
        alert("Precio total: $" + total + ". IIBB Usted pago $" + iibb + ".");
        document.getElementById("precioDescuento").value = total / lamparas;
    }
    else {
    alert ("Precio total: $" + total + ".");
    document.getElementById("precioDescuento").value = total / lamparas;
    }
}