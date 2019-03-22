function mostrar()
{
	var numerouno;
	var numerodos;
	var soniguales;
	var resultado;

	numerouno=prompt("Ingrese el primer número:");

	while(isNaN(numerouno)==true)
	{
		numerouno=prompt("Ingrese el primer número:");
	}

	numerodos=prompt("Ingrese el segundo número:");

	while(isNaN(numerodos)==true)
	{
		numerodos=prompt("Ingrese el segundo número:");
	}

	if(numerouno==numerodos)
	{
		soniguales=numerouno+numerodos;
		alert(soniguales);
	}

	numerouno=parseInt(numerouno);
	numerodos=parseInt(numerodos);

	if(numerouno>numerodos)
	{
		resultado=numerouno-numerodos;
		resultado=parseInt(resultado);
		alert(resultado);

	}

	else
	{
		if(numerouno<numerodos)
		{
			resultado=numerouno+numerodos;
			resultado=parseInt(resultado);
			alert(resultado);
		}
		
	}
	
	if(resultado>10)
	{
		alert("La suma es "+resultado+" y supero el 10");
	}

	
}
