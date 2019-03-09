function mostrar()
{
var hora

hora = parseInt(document.getElementById("laHora").value)



switch(hora){
    case hora:

    if(hora <= 0 || hora >= 25){
        alert("Por favor ingrese una hora valida")
        
    }

    else if(hora >=6 && hora <=11)
    {
        alert("Es de mañana")
    }

    else if(hora >= 12 && hora <= 19){
        alert("Es de tarde")
    }

    else {
        alert("Es de noche")
        if(hora <=23){
alert("A dormir.")
        }
    }
    

}}
