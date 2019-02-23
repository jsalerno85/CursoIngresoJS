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

	nota=prompt("Ingrese nota del alumno:");

	while(nota!>=0 && nota!<11)
	{
		nota=prompt("Ingrese nuevamente la nota del alumno:");
	}

	sexo=prompt("Ingrese sexo del alumno:");

	while(sexo!="m" && sexo!="f")
	{
		sexo=prompt("Ingrese nuevamente el sexo del alumno:");
	}

	if(nota>=6 && sexo=="m")
		{
			mayoraseis++;
		}

	while(contador<5)
	{
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

			default:
			while(sexo!="m" && sexo!="f")
			{
				sexo=prompt("Ingrese nuevamente el sexo del alumno:");
			}
			if(sexo=="f")
			{
				sexo="femenino";
				contadorfemenino++;
			}
			else
			{
				sexo="masculino";
				contadormasculino++;
			}
			break;

		}

		nota=prompt("Ingrese nota del alumno:");
		nota=parseInt(nota);
		contador++;
		contadornotas=contadornotas+nota;

		if(nota<notamasbaja)
		{
			notamasbaja=nota;
			sexonotamasbaja=sexo;
		}

		sexo=prompt("Ingrese sexo del alumno:");

		if(nota>=6 && sexo=="m")
		{
			mayoraseis++;
		}

	}

	alert("El promedio total de las notas es de "+(contadornotas/contador));
	alert("La nota más baja es "+notamasbaja+" y el sexo del alumno es "+sexonotamasbaja);
	alert("La cantidad de varones que sacaron 6 o más es de "+mayoraseis);

}
