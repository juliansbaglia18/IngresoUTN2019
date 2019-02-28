//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
    var importe = 0;
    var importeMayor = 0;
    var importeMenor;
    for(var dia = 1; dia <= 7; dia++){
        importe = parseInt(prompt("Ingrese importe del dia " + dia + ":"));
        while (isNaN(importe) || importe <= 0){
            importe = parseInt(prompt("Dato invalido. Ingrese importe del dia " + dia + ":"));
        }

        if(dia == 1){
        importeMenor = importe;
        } 

        if (importe > importeMayor){
            importeMayor = importe;
        }
        else if (importe < importeMenor){
            importeMenor = importe;
        }
    }
    alert ("El importe mayor fue: " + importeMayor + ". El importe menor fue: " + importeMenor);
}

