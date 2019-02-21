function mostrar()
{
	//Genero el número RANDOM entre 1 y 10 
	
var numero;

numero=Math.floor((Math.random() * 10) + 1);

console.log(numero);

alert(numero);

if (numero>=4)
{
	if(numero<9)
	{
		alert("APROBÓ");
	}
	else
	{
		alert("EXCELENTE");
	}
}
	
else
{
	alert("Vamos, la proxima se puede");		
}

}//FIN DE LA FUNCIÓN