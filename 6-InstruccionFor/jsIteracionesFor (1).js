function mostrar()
{

				var numero;
				var contador=0;
				var contadoruno=0;
				var contadordos=0;
				var contadortres=0;
				var contadorcuatro=0;
				var contadorcinco=0;
				var contadorseis=0;
				var contadorsiete=0;
				var contadorocho=0;
				var contadornueve=0;
				var contadordiez=0;
				var porcentaje=contadorocho*100/contador;

				for(contador;contador<1000;contador++)
				{
					numero=Math.floor((Math.random() * 10) + 1);
					console.log(numero);

				switch(numero)
				{
					case 1:
					contadoruno++;
					break;

					case 2:
					contadordos++;
					break;

					case 3:
					contadortres++;
					break;

					case 4:
					contadorcuatro++;
					break;

					case 5:
					contadorcinco++;
					break;

					case 6:
					contadorseis++;
					break;

					case 7:
					contadorsiete++;
					break;


					case 8:
					contadorocho++;
					if(porcentaje<5)

					{
						contadorocho++;
					}
					break;

					case 9:
					contadornueve++;
					break;

					case 10:
					contadordiez++;
					break;
				}

				}
				document.write("El uno apareció "+contadoruno+" veces "+(contadoruno*100/contador)+"% <br>");
				document.write("El dos apareció "+contadordos+" veces "+(contadordos*100/contador)+"% <br>");
				document.write("El tres apareció "+contadortres+" veces "+(contadortres*100/contador)+"% <br>");
				document.write("El cuatro apareció "+contadorcuatro+" veces "+(contadorcuatro*100/contador)+"% <br>");
				document.write("El cinco apareció "+contadorcinco+" veces "+(contadorcinco*100/contador)+"% <br>");
				document.write("El seis apareció "+contadorseis+" veces "+(contadorseis*100/contador)+"% <br>");
				document.write("El siete apareció "+contadorsiete+" veces "+(contadorsiete*100/contador)+"% <br>");
				document.write("El ocho apareció "+contadorocho+" veces "+(contadorocho*100/contador)+"% <br>");
				document.write("El nueve apareció "+contadornueve+" veces "+(contadornueve*100/contador)+"% <br>");
				document.write("El diez apareció "+contadordiez+" veces "+(contadordiez*100/contador)+"% <br>");
				
}