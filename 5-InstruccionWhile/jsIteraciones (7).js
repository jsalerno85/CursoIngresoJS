function mostrar()
{

var contador=0;
var acumulador=0;
var numero;
var ingresar=prompt("Desea ingresar un número?");


while(ingresar=="s")
{
	numero=prompt("Ingrese un numero:");
	numero=parseInt(numero);
	contador++;
	acumulador=acumulador+numero;
	ingresar=prompt("Desea ingresar otro número?");
	if(ingresar=="n")
	{
		document.getElementById("suma").value=acumulador;
		document.getElementById("promedio").value=acumulador/contador;
	}
}


}//FIN DE LA FUNCIÓN