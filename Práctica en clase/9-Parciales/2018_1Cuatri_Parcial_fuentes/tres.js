function mostrar()
{

	var precio;
	var descuento;
	var preciofinal;

	precio=prompt("Ingrese el precio:");
	precio=parseInt(precio)

	while(isNaN(precio)==true)
	{
		precio=prompt("Ingrese el precio:");
		precio=parseInt(precio);
	}

	descuento=prompt("Ingrese el descuento:");
	descuento=parseInt(descuento);

	while(isNaN(descuento)==true)
	{
		descuento=prompt("Ingrese el descuento:");
		descuento=parseInt(descuento);
	}

	preciofinal=(precio*descuento)/100;
	document.getElementById("elPrecioFinal").value=preciofinal;
	//elPrecioFinal.value=preciofinal;

}
