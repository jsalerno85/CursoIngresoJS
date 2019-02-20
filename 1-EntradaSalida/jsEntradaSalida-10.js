/*Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{
	
	var importe;
	var aumento;

	importe=sueldo.value;
	importe=parseInt(importe);
	
	aumento=importe*1.1;

	resultado.value=aumento;
	
}
