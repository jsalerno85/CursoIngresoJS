function mostrar()
{
	//Genero el número RANDOM entre 1 y 10 
	
var numero;

numero=Math.floor((Math.random() * 10) + 1);

alert(numero);

if (numero>=9)
{
	alert("EXCELENTE");
}
	if (numero<4)
	{
		alert("Vamos, la proxima se puede");

	}

else
{
	alert("APROBÓ");		
}

}//FIN DE LA FUNCIÓN