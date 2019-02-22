function mostrar()
{

	var numeromayor=0;
	var numeromenor;
	var numero;
	var respuesta="s";

	respuesta=prompt("Desea ingresar un número?")

	while(respuesta=="s")
	{
		//alert("Número mayor "+numeromayor)
		alert("Número menor "+numeromenor)
		numero=prompt("Ingrese un número:");

		if(numero>numeromayor)
		{
			numeromayor=numero;
		}
		else
		{
			numeromenor=numero;
		}
		respuesta=prompt("Desea ingresar otro número?");

		if(respuesta!="s")
		{
			document.getElementById("maximo").value=numeromayor;
			document.getElementById("minimo").value=numeromenor;
		}
	
	}
	

}//FIN DE LA FUNCIÓN