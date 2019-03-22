function mostrar()
{

var positivo=0;
var negativo=1;

var ingresar=prompt("Desea ingresar un número?");

while(ingresar=="s")
{
	numero=prompt("Ingrese un numero:");
	numero=parseInt(numero);
	if(numero<0)
	{
		negativo=negativo*numero
	}
	else
	{
		positivo=positivo+numero
	}
	ingresar=prompt("Desea ingresar otro número?");
	if(ingresar!="s")
	{
		document.getElementById("suma").value=positivo;
		document.getElementById("producto").value=negativo;
	}
}


}//FIN DE LA FUNCIÓN