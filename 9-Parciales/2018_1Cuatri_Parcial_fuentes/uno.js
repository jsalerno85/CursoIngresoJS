
function mostrar()
{
	var ancho;
	var largo;
	var perimetro;

	ancho=prompt("Ingrese el ancho del rectángulo:");
	ancho=parseInt(ancho);

	while(isNaN(ancho)==true)
	{
		ancho=prompt("Ingrese el ancho del rectángulo:");
		ancho=parseInt(ancho);
	}

	largo=prompt("Ingrese el largo del rectángulo:");
	largo=parseInt(largo);

	while(isNaN(largo)==true)
	{
		largo=prompt("Ingrese el largo del rectángulo:");
		largo=parseInt(largo);
	}

	perimetro=(largo+ancho)*2;
	perimetro=parseInt(perimetro);

	alert("El perimetro del rectángulo es "+perimetro);	

}
