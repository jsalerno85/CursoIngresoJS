
function mostrar()
{

	//1-alert ("ustedes son xxxx y xxxx, sus edades son xx y xx, y la suma de sus edades es xx")

	var nombreuno
	var nombredos
	var primeraedad
	var segundaedad
	var sumaedades

	nombreuno=prompt("Ingrese el primer nombre:")
	nombredos=prompt("Ingrese el segundo nombre:")

	primeraedad=prompt("Ingrese la primera edad:")
	segundaedad=prompt("Ingrese la segunda edad:")

	primeraedad=parseInt(primeraedad)
	segundaedad=parseInt(segundaedad)

	sumaedades=primeraedad+segundaedad

	alert=("Ustedes son "+nombreuno+ " y "+nombredos+", sus edades son "+primeraedad+" y "+segundaedad+", y la suma de sus edades es "+sumaedades)

}
