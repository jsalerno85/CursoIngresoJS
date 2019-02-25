function mostrar()
{	
	var numeroingresado;
	var numeroanterior;
	var recorrido;

	numeroingresado=prompt();
	numeroingresado=parseInt(numeroingresado);

	for(recorrido=numeroingresado-1;recorrido>1;recorrido--)
	{
		for(numeroanterior=recorrido-1;numeroanterior>1;numeroanterior--)
		{	
			if(recorrido&numeroanterior==0)
			{
				break;
			}
		}
	}

	if(numeroanterior==1)
	{
		console.log("Es primo "+recorrido);
	}
	else
	{
		console.log("No es primo");
	}
			
}