
function mostrar()
{

	//1-alert ("ustedes son xxxx y xxxx, sus edades son xx y xx, y la suma de sus edades es xx")

	var nombreuno
	var nombredos
	var primeraedad
	var segundaedad
	var sumaedades

	nombreuno=prompt()
	nombredos=prompt()

	primeraedad=prompt()
	segundaedad=prompt()

	primeraedad=parseInt(primeraedad)
	segundaedad=parseInt(segundaedad)

	sumaedades=primeraedad+segundaedad

	alert=("Ustedes son "+nombreuno+ " y "+nombredos+", sus edades son "+primeraedad+" y "+segundaedad+", y la suma de sus edades es "+sumaedades)

}
