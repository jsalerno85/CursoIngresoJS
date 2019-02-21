/*Debemos lograr tomar nombre y edad por ID y mostrarlos concatenados 
ej.: "Usted se llama José y tiene 66 años" 	*/
function mostrar()
{	
	
	var nombre;

	var edad;
	
	//nombre=elNombre.value;

	//edad=laEdad.value;

	// "nombre=document.getElementById("elNombre").value" ES IGUAL a la instrucción "nombre=elNombre.value"

	nombre=document.getElementById("elNombre").value;
	edad=document.getElementById("laEdad").value;
	
	alert("Usted se llama "+nombre+" y tiene "+edad+" años");

}

