var bel;

function Mostrar()
{
//tomo la edad 

bel = document.getElementById("edad").value;

if(bel>17 && document.getElementById("estadoCivil").value == "Soltero"){
        alert("Es soltero y no es menor jaja same");
    }
}