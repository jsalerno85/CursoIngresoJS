function mostrar()
{
	var nota;
	var sexo="";
	var contador=0;
	var contadornotas=0;
	var contadorfemenino=0;
	var contadormasculino=0;
	var notamasbaja;
	var sexonotamasbaja;
	var mayoraseis=0;

	contadornotas=parseInt(contadornotas);
	contadorfemenino=parseInt(contadorfemenino);
	contadormasculino=parseInt(contadormasculino);
	mayoraseis=parseInt(mayoraseis);

	nota=prompt("Ingrese nota del alumno:");
	
	while(nota<0 || nota>10)
	{
		nota=prompt("Ingrese nuevamente la nota del alumno:");
		nota=parseInt(nota);
	}

	nota=parseInt(nota);

	sexo=prompt("Ingrese sexo del alumno:");

	while(sexo!="m" && sexo!="f")
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
		break;
	}

	if(nota>=6 && sexo=="masculino")
		{
			mayoraseis++;
		}

	contador++;
	contadornotas=contadornotas+nota;
	notamasbaja=nota;
	sexonotamasbaja=sexo

	while(contador<5)
	{
		nota=prompt("Ingrese nota del alumno:");
		
		while(nota<0 || nota>10)
		{
			nota=prompt("Ingrese nuevamente la nota del alumno:");
			nota=parseInt(nota);
		}

		nota=parseInt(nota);

		sexo=prompt("Ingrese sexo del alumno:");

		while(sexo!="m" && sexo!="f")
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
			break; 
		}	
		
		if(nota>=6 && sexo=="masculino")
		{
			mayoraseis++;
		}

		contador++;
		contadornotas=contadornotas+nota;

		if(nota<notamasbaja)
		{
			notamasbaja=nota;
			sexonotamasbaja=sexo;
		}
	}
	

	alert("El promedio total de las notas es de "+(contadornotas/contador));
	alert("La nota más baja es "+notamasbaja+" y el sexo del alumno es "+sexonotamasbaja);
	alert("La cantidad de alumnos de sexo masculino que sacó 6 o más es de "+mayoraseis);

}
