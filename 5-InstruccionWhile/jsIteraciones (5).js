function mostrar()
{

var sexo = prompt("Ingrese f ó m");

while(sexo!="m" && sexo!="f")
{
	sexo = prompt("Ingrese f ó m");
	switch(sexo)
	{
		case "m":
		document.getElementById("Sexo").value="Masculino";
		break;

		default:
		document.getElementById("Sexo").value="Femenino";
		break;
	}
}

switch(sexo)
{
	case "m":
	document.getElementById("Sexo").value="Masculino";
	break;

	default:
	document.getElementById("Sexo").value="Femenino";
	break;
}	

}//FIN DE LA FUNCIÓN