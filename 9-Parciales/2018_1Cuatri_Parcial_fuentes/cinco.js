function mostrar()
{
	var planeta;

	planeta=prompt("Ingrese un planeta del sistema solar:");

	while(planeta!="tierra" && planeta!="mercurio" && planeta!="venus" &&planeta!="marte" && planeta!="jupiter" && planeta!="saturno" && planeta!="urano" && planeta!="neptuno"&& planeta!="pluton")
	{
		planeta=prompt("Ingrese un planeta válido del sistema solar:");
	}

	switch(planeta)
	{
		case"tierra":
		alert("Acá vivimos");
		break;

		case"mercurio":
		case"venus":
		alert("Acá hace más calor");
		break;

		case"marte":
		case"jupiter":
		case"saturno":
		case"urano":
		case"neptuno":
		case"pluton":
		alert("Acá hace más frío");
		break;
	}

	
}
