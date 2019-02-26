function mostrar()
{
	var letraynumero;
	var numerospares;
	var numerosimpares;
	var cantidadceros;
	var numerospositivos;
	var numerosnegativos;

	mensaje=alert("Desea ingresar un numero?");

	while(mensaje!="s")
	{
		mensaje=alert("Desea ingresar un numero?");
	}
		letraynumero=prompt("Ingrese una letra y un numero:");
	
		while(isNaN(nota) || nota<0 || nota>10)
		{
			nota=prompt("Ingrese nuevamente la nota del alumno:");
			nota=parseInt(nota);
		}

		sexo=prompt("Ingrese sexo del alumno:");

		while(isNaN(sexo)==false || sexo!="m" && sexo!="f")
		{
			sexo=prompt("Ingrese nuevamente el sexo del alumno:");
		}

		switch(sexo)
		{
			case "f":
			sexo="femenino";
			contadorfemenino++;
			break;

			case "m":
			sexo="masculino";
			contadormasculino++;
			if(nota>=6 )
			{
				mayoraseis++;
			}
			break; 
		}	
		
		contador++;
		contadornotas=contadornotas+nota;

		if(contador==1)
		{
			notamasbaja=nota;
			sexonotamasbaja=sexo;
		}
		else
		{
			if(nota<notamasbaja)
			{
				notamasbaja=nota;
				sexonotamasbaja=sexo;
			}
		}
	}
	

	alert("El promedio total de las notas es de "+(contadornotas/contador));
	alert("La nota más baja es "+notamasbaja+" y el sexo del alumno es "+sexonotamasbaja);
	alert("La cantidad de alumnos de sexo masculino que sacó 6 o más es de "+mayoraseis);
}
