var bel;

function Mostrar()
{
//tomo la edad 

bel = document.getElementById("edad").value;
if (bel > 59){
    alert("Usuario anciano");
}
else if (bel>17){
    alert("Usuario adulto");
}

else if(bel>= 13){
    alert("Usuario adolescente");
}

else{
    alert("Usuario niño");
}
}//FIN DE LA FUNCIÓN