var bel;

function Mostrar()
{
//tomo la edad 

bel = document.getElementById("edad").value;

if(bel>17){
    alert("Usuario mayor de edad");
}

if(bel<=17 && bel>= 13){
    alert("Usuario adolescente");
}

if(bel<13){
    alert("Usuario niño");
}
}//FIN DE LA FUNCIÓN