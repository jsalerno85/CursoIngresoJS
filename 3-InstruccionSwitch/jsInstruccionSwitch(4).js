function mostrar()
{
//tomo la edad  
var mesDelAño = document.getElementById("mes").value;
var mensaje

//alert (mesDelAño);

switch(mesDelAño)
{
	case "Febrero":
	mensaje="Tiene 28 dias";
	break;

	case "Abril":
	case "Junio":
	case "Septiembre":
	case "Noviembre":
	mensaje="Tiene 30 dias";
	break;

	default:
	mensaje="Tiene 31 dias";
	break;
}


alert (mensaje);
	



}//FIN DE LA FUNCIÓN