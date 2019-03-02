function mostrar()
{
	var letra;
	var numero=0;
	var validador="";
	var contador=0;
	var ceros=0;
	var cantidadpares=0;
	var cantidadimpares=0;
	var cantidadpositivos=0;
	var cantidadnegativos=0;
	var promediopositivos=0;
	var sumanegativos=0;
	var numerominimo;
	var numeromaximo;
	var numeroletraminimo;
	var numeroletramaximo;


	letra=prompt("Ingrese una letra:");
	
	while(isNaN(letra)==false)
	{
		letra=prompt("Ingrese una letra válida:");
	}

	while(isNaN(letra)==true)
		{
			numero=prompt("Ingrese un número:");
			numero=parseInt(numero);
		
			while(isNaN(numero)==true || numero<-100 || numero>100)
			{
				numero=prompt("Ingrese un valor numérico válido:");
				numero=parseInt(numero);
			}
		
			if(contador==0)
			{
				numerominimo=numero;
				numeromaximo=numero;
				numeroletraminimo=letra;
				numeroletramaximo=letra;
			}

			if(numero<numeroletraminimo)
			{
				numerominimo=numero;
				numeroletraminimo=letra;
			}

			else
			{
				if(numero>numeroletramaximo)
				{
					numeromaximo=numero;
					numeroletramaximo=letra;
				}
			}
			
			if(numero==0)
			{
				ceros++;
			}

			if(numero%2==0)
			{
				cantidadpares++;
			}

			else
			{
				cantidadimpares++;
			}

			if(numero>0)
			{
				cantidadpositivos++;
				promediopositivos=promediopositivos+numero;				
			}

			else
			{
				cantidadnegativos++;
				sumanegativos=sumanegativos+numero;
			}

			validador=prompt("Desea seguir ingresando valores? S/N")

			switch(validador)
			{
				case"s":
				letra=prompt("Ingrese una letra:");
				while(isNaN(letra)==false)
				{
					letra=prompt("Ingrese una letra válida:");
				}
				break;

				case"n":
				document.write("La cantidad de números pares es de "+cantidadpares+"<br>");
				document.write("La cantidad de números impares es de "+cantidadimpares+"<br>");
				document.write("El promedio de números positivos ingresados es de "+promediopositivos/cantidadpositivos+"<br>");
				document.write("La suma de números negativos es de "+sumanegativos+"<br>");
				document.write("La número máximo ingresado es "+numeromaximo+" y la letra es la "+numeroletramaximo+"<br>");
				document.write("La número mínimo ingresado es "+numerominimo+" y la letra es la "+numeroletraminimo+"<br>");
				break;

				default:
				validador=prompt("Desea seguir ingresando valores? S/N")
				while(validador!="s" && validador!="n")
				{
					validador=prompt("Desea seguir ingresando valores? S/N")
				}
				break;
			}

		}

}
