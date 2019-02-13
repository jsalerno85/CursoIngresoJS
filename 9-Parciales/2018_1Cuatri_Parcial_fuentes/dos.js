function mostrar()
{

	//alert("El precio del producto en efectivo es :$ xxxx, con tarjeta tiene un recargo del 10% que seria $xx de recargo, costandole final $xxx")
 	
 	var precioefectivo
 	var preciotarjeta
 	var recargo

 	precioefectivo=prompt("Ingrese precio en efectivo:")
 	precioefectivo=parseInt(precioefectivo)
 	recargo=precioefectivo*0.1
 	preciotarjeta=precioefectivo*1.1

 	alert("El precio del producto en efectivo es :$ "+precioefectivo+", con tarjeta tiene un recargo del 10% que seria $"+recargo+" de recargo, costandole final $"+preciotarjeta)

}
