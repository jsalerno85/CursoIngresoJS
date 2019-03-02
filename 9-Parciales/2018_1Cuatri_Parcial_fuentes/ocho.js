function mostrar()
{
	var letra;
	var numero=0;
	var validador="";
	var ceros;
	var cantidadpares;
	var cantidadimpares;
	var cantidadpositivos;
	var cantidadnegativos;
	var promediopositivos;
	var sumanegativos;
	var numeroletraminimo;
	var numeroletramaximo;


	validador=prompt("Desea ingresar valores?");

	while(validador!="s")
	{
		validador=prompt("Desea ingresar valores?");
	}
	
	while(validador=="s")
	{
		letra=prompt("Ingrese una letra:");

		while(isNaN(letra)==false || letra>-101 && letra<101)
		{
			letra=prompt("Ingrese una letra válida:");
		}	

		numero=promp("Ingrese un número:");

		while(isNaN(numero)=true)
		{
			numero=prompt("Ingrese un valor numérico válido:");
		}



		validador=prompt("Desea seguir ingresando valores?");
		
	}
}
