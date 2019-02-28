function mostrar()
{
	var animal;
	var peso;
	var temperatura;
	var temperaturaspares=0;
	var temperaturamaspesado=0
	var animalmaspesado=0;
	var menosdecero;
	var pesomaximo;
	var pesominimo;
	var contador=0
	var validador="s";

	//peso entre 1 y 1000
	//temperatura -30 y 30

	validador=prompt("Dese continuar?")

	while(validador!="s")
	{
		validador=prompt("Desea continuar?");
	}

	while(validador=="s")
	{
		animal=prompt("Ingrese nombre del animal:");

		while(isNaN(animal)==false)
		{
			animal=prompt("Ingrese un nombre válido de animal:");
		}

		peso=prompt("Ingrese el peso del animal:");
		peso=parseInt(peso);

		while(peso<1 || peso>1000)
		{
			peso=prompt("Vuelva a ingresar el peso del animal:");
			peso=parseInt(peso);
		}

		temperatura=prompt("Ingrese temperatura del hábitat:");
		temperatura=parseInt(temperatura);

		while(temperatura<-30 || temperatura>30)
		{
			temperatura=prompt("Ingrese temperatura del hábitat:");
			temperatura=parseInt(temperatura);
		}

		if(temperatura%2=0)
		{
			temperaturaspares++;
		}

		if(contador=1)
		{
			animalmaspesado=peso;
			temperatura=
		}
		else
		{
			if(peso>=animalmaspesado)
			{
				animalmaspesado=peso;

			}
		}

		validador=prompt("Desea continuar?");
	}

	

}
