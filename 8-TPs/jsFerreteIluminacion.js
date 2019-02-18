/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 */
function CalcularPrecio () 
{
 	var cantidadlamparas;
 	var monto;
 	var marcalampara;
 	var descuento;
 	var ingresosbrutos;

 	marcalampara=marca.value
 	
 	monto=cantidadlamparas*35
 	monto=parseInt(monto)


 	if(cantidadlamparas>=6)
 	{
 		descuento=monto*0.5
 	}

 	if(cantidadlamparas==5)
 	{
 		if (marcalampara=="ArgentinaLuz")
 		{
 			descuento=monto*0.6
 		}
 		else
 		{
 			descuento=monto*0.7

 		}
 	}

 	if(cantidadlamparas==4)
 	{
 		if (marcalampara=="ArgentinaLuz"||marcalampara=="FelipeLamparas")
 		{
 			descuento=monto*0.75
 		}
 		else{
 			descuento=monto*0.8
 		}

 	}

 	if(cantidadlamparas==3)
 	{
 		if (marcalampara=="ArgentinaLuz")
 		{
 			descuento=monto*0.85
 		}
 		if(marcalampara=="FelipeLamparas")
 		{
 			descuento=monto*0.9
 		}
 		else
 		{
 			descuento=monto*0.95
 		}

 	}
 	if (monto>120)


}
