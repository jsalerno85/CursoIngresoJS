/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar()
{

	var primernumero;
	var segundonumero;
	var resultado;

	primernumero=numeroUno.value;
	segundonumero=numeroDos.value;

	primernumero=parseInt(primernumero);
	segundonumero=parseInt(segundonumero);

	resultado=primernumero+segundonumero;

	alert("La suma es "+resultado);
	
}

