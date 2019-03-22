function mostrar()
{
	var nota;
	var sexo;
	var contador=0;
	var notamasbaja;
	var sexonotamasbaja="";
	var mayoraseis=0;
	var promedionotas=0;

	while(contador<5)
	{
		nota=prompt("Ingrese nota del alumno:");
		nota=parseInt(nota);
		while(isNaN(nota)==true || nota<0 || nota>10)
		{
			nota=prompt("Ingrese nota del alumno:");
			nota=parseInt(nota);
		}

		sexo=prompt("Ingrese sexo del alumno:");
		while(isNaN(sexo)==false || sexo!="f" && sexo!="m")
		{
			sexo=prompt("Ingrese sexo válido del alumno:");
		}

		switch(sexo)
		{
			case "m":
			sexo="masculino";
			if(nota>=6)
			{
				mayoraseis++;
			}
			break;

			case"f":
			sexo="femenino";
			break;
		}

		if(contador==0)
		{
			notamasbaja=nota;
			sexonotamasbaja=sexo;
		}

		if(nota<notamasbaja)
		{
			notamasbaja=nota;
			sexonotamasbaja=sexo;
		}

		promedionotas=promedionotas+nota;
		contador++

	}

	alert("El promedio total de las notas es de "+promedionotas/contador);
	alert("La nota más baja es "+notamasbaja+" y el sexo del alumno es "+sexonotamasbaja);
	alert("La cantidad de varones cuya nota es mayor o igual a 6 es de "+mayoraseis);


}
