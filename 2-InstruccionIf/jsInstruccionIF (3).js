var bel;

function Mostrar()
{
//tomo la edad 

bel = document.getElementById("edad").value;

if(bel >= 18){
    alert("Usuario mayor de edad");
}
else{
    alert("Usuario menor de edad");
}
}//FIN DE LA FUNCIÓN