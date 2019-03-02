function mostrar()
{
	var letra;
	var numero;
	var cantidadpares;
	var cantidadimpares;
	var cantidadceros;
	var cantidadpositivos;
	var cantidadnegativos;

	ingresar=prompt("Desea comenzar a ingresar datos?");
	while(isNaN(ingresar)==false || ingresar!="s")
	{
		ingresar=prompt("Desea comenzar a ingresar datos?");
	}

	while(ingresar=="s")
	{
		letra=prompt("Ingrese una letra:");
		while(isNaN(letra)==false)
		{
			letra=prompt("Ingrese una letra:");
		}

		numero=prompt("Ingrese un número:");
		while(isNaN(numero)==true || numero<-100 || numero>100)
		{
			numero=prompt("Ingrese un número:");
		}

		ingresar=prompt("Desea seguir ingresando datos?");
		if(ingresar=="n")
		{
			document.write("La cantidad de números pares es de "+cantidadpares);
			document.write("La cantidad de números impares es de "+cantidadimpares);
			document.write("La cantidad de ceros es de "+cantidadceros);
			document.write("El promedio de todos los números positivos ingresados es "+cantidadpositivos);
			document.write("La suma de todos los números negativos ingresados es "+cantidadpositivos);
		}
	}

}
