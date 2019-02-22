function mostrar()
{

	var numero = prompt("Ingrese un número entre 0 y 10");

	while(numero<0 || numero>=10)
	{
		numero = prompt("Ingrese un número entre 0 y 10")

		if(numero>=0 && numero<10)
		{
			document.getElementById("Numero").value=numero
		}
		
	}
	if(numero>=0 && numero<10)
		{
			document.getElementById("Numero").value=numero
		}

}//FIN DE LA FUNCIÓN