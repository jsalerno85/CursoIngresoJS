function mostrar()
{
//tomo la edad  
	var laedad;

	laedad=edad.value;
	laedad=parseInt(laedad);

	if(laedad>=18)

	{	
		alert("Es mayor de edad")
	}

	if(laedad<13)
	{
		alert("Es niño")
	}

	if(laedad>=13 && laedad<18)
	{
		alert("Es adolescente")
	}


}//FIN DE LA FUNCIÓN