function mostrar()
{

	//3-Al realizar una compra, si compra de mas de dos productos se realiza un descuento del 10% y si supera los $2000 se agrega un descuento adicional de 15%, si el pago es con tarjeta y no efectivo al precio final se le agrega un 10% de recargo.

	var productoUno;
	var productoDos;
	var cantidadProductos;
	var sumaProductos;
	var descuentoProductos;
	var descuentoMonto;


	cantidadProductos=prompt("Ingrese cantidad de productos:");
	productoUno=prompt("Ingrese precio del primer producto:");
	productoDos=prompt("Ingrese precio del segundo producto:");
	cantidadProductos=parseInt(cantidadProductos);
	productoUno=parseInt(productoUno);
	productoDos=parseInt(productoDos);
	sumaProductos=productoUno+productoDos;

	if(cantidadProductos>=2)
		{
			descuentoProductos=sumaProductos*0.9
		}

	if(sumaProductos>2000)
		{

		}


}
