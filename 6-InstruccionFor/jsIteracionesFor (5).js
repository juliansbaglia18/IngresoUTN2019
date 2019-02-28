var pepe;
function Mostrar()
{
    //alert("antes del for");
    for ( ; ; ){
       //alert ("entro al for");
        i = parseInt(prompt ("Ingrese un numero: "));
        while(isNaN(i)){
            i = parseInt(prompt("numero no valido. Ingrese un numero:"))
        }
        if(i==9){
            break;
        }
    }
    //alert("sali del for");
}//FIN DE LA FUNCIÓN