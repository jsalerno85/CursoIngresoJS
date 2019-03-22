function mostrar()
{
//tomo la edad  

	var laedad;

	laedad=edad.value;
	laedad=parseInt(laedad);

	if(laedad>=18)
		{
			alert("Es mayor de edad");
		}

	else
		{
		if(laedad<13)
			{
				alert("Es niño");
			}
			else
			{
				alert("Es adolescente");
			}
		}
			

}//FIN DE LA FUNCIÓN