function mostrar()
{
//tomo la edad  

var laedad;
var estadocivil;

laedad=edad.value;
laedad=parseInt(laedad)
estadocivil=estadoCivil.value;

if(laedad>=18 && estadocivil=="Soltero")
	{
		alert("Es soltero y no es menor");
	}


}//FIN DE LA FUNCIÓN