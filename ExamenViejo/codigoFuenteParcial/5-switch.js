//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
    var mes = prompt("ingrese un mes").toLowerCase;
    switch(mes){
        case "enero":
        case "febrero":
        alert("veranitoo");
        break;

        default:
        alert("extraño enero y febrero :(")

    }
}

