function mostrar()
{

	var precio;
	var descuento;
	var preciofinal;

	precio=prompt("Ingrese precio: ");
	descuento=prompt("Ingrese porcentaje de descuento: ");

	precio=parseInt(precio);
	descuento=parseInt(descuento);

	preciofinal=(precio*descuento)/100;

	elPrecioFinal.value=preciofinal;

}
