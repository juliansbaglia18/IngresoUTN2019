var bel;

function Mostrar()
{
//tomo la edad 

bel = document.getElementById("edad").value;

if(bel<18 && document.getElementById("estadoCivil").value != "Soltero"){
    alert("Eres demasiado pequeño para NO estar soltero");
}
}