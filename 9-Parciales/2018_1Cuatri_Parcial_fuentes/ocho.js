function mostrar()
{
	var letra;
	var numero;
	var contador=0;
	var cantidadpares=0;
	var cantidadimpares=0;
	var cantidadceros=0;
	var cantidadpositivos=0;
	var cantidadnegativos=0;
	var valorpositivos=0;
	var sumanegativos=0;
	var numeromaximo;
	var numerominimo;
	var letranumeromaximo;
	var letranumerominimo;

	contador=parseInt(contador);
	cantidadpares=parseInt(cantidadpares);
	cantidadimpares=parseInt(cantidadimpares);
	cantidadpositivos=parseInt(cantidadpositivos);
	cantidadnegativos=parseInt(cantidadnegativos);
	valorpositivos=parseInt(valorpositivos);
	sumanegativos=parseInt(sumanegativos);
	numeromaximo=parseInt(numeromaximo);
	numerominimo=parseInt(numerominimo);


	ingresar=prompt("Desea comenzar a ingresar datos?(s/n)");
	while(isNaN(ingresar)==false || ingresar!="s")
	{
		ingresar=prompt("Desea comenzar a ingresar datos?(s/n)");
	}

	while(ingresar=="s")
	{
		letra=prompt("Ingrese una letra:");
		while(isNaN(letra)==false)
		{
			letra=prompt("Ingrese una letra:");
		}

		numero=prompt("Ingrese un número:");
		numero=parseInt(numero);
		while(isNaN(numero)==true || numero<-100 || numero>100)
		{
			numero=prompt("Ingrese un número:");
			numero=parseInt(numero);
		}

		if(contador==0)
		{
			numeromaximo=numero;
			numerominimo=numero;
			letranumeromaximo=letra;
			letranumerominimo=letra;
			numeromaximo=parseInt(numeromaximo);
			numerominimo=parseInt(numerominimo);
		}

		if(numero>numeromaximo)
		{
			numeromaximo=numero;
			numeromaximo=parseInt(numeromaximo);
			letranumeromaximo=letra;
		}
		else
		{
			if(numero<numerominimo)
			{
				numerominimo=numero;
				numerominimo=parseInt(numerominimo);
				letranumerominimo=letra;
			}
			
		}
		

		if(numero>0)
		{
			cantidadpositivos++;
			valorpositivos=valorpositivos+numero;
			valorpositivos=parseInt(valorpositivos);
		}
		else
		{
			if(numero<0)
			{
				cantidadnegativos++;
				sumanegativos=sumanegativos+numero;
				sumanegativos=parseInt(sumanegativos);
			}
			else
			{
				cantidadceros++;
			}
		}

		if(numero%2==0 && numero!=0)
		{
			cantidadpares++;
		}
		else
		{
			if(numero%2!=0)
			{
				cantidadimpares++;
			}
		}

		contador++;

		ingresar=prompt("Desea seguir ingresando datos?(s/n)");
		while(isNaN(ingresar)==false || ingresar!="s" && ingresar!="n")
		{
			ingresar=prompt("Desea seguir ingresando datos?(s/n)");
		}

		if(ingresar=="n")
			{
				document.write("La cantidad de números pares es de "+cantidadpares+"<br>");
				document.write("La cantidad de números impares es de "+cantidadimpares+"<br>");
				document.write("La cantidad de ceros es de "+cantidadceros+"<br>");
				document.write("El promedio de todos los números positivos ingresados es "+valorpositivos/cantidadpositivos+"<br>");
				document.write("La suma de todos los números negativos ingresados es "+sumanegativos+"<br>");
				document.write("El número máximo y su letra es "+numeromaximo+letranumeromaximo+"<br>");
				document.write("El número mínimo y su letra es "+numerominimo+letranumerominimo+"<br>");
			}
	}

}
