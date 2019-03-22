function mostrar()
{

	var numeromayor;
	var numeromenor;
	var numero;
	var respuesta="s";

	if(respuesta=="s")
	{
		numero=prompt("Ingrese un número:");
		numero=parseInt(numero);
		numeromayor=numero;
		numeromenor=numero;
		console.log("Mayor "+numeromayor);
		console.log("Menor "+numeromenor);
		respuesta=prompt("Desea ingresar otro número?");
	}

	while(respuesta=="s")
	{
		numero=prompt("Ingrese otro número:");
		numero=parseInt(numero);

		if(numero>=numeromayor)
		{
			numeromayor=numero;
		}

		else
		{
			if(numero<numeromenor)
			{
				numeromenor=numero;
			}

		}

		console.log("Mayor "+numeromayor);
		console.log("Menor "+numeromenor);

		respuesta=prompt("Desea ingresar otro número?");

		if(respuesta!="s")
		{
			document.getElementById("maximo").value=numeromayor;
			document.getElementById("minimo").value=numeromenor;
		}
	
	}

	document.getElementById("maximo").value=numeromayor;
	document.getElementById("minimo").value=numeromenor;


}//FIN DE LA FUNCIÓN