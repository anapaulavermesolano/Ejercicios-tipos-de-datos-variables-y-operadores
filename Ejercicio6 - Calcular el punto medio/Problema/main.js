function puntoMedio() {
	var x1 =  Number(prompt("En la cordenada 1 escribe tu x1"));
	var x2 =  Number(prompt("En la cordenada 1 escribe tu x2"));
	var y1 =  Number(prompt("En la coedenada 2 escribe tu y1"));
	var y2 =  Number(prompt("En la coedenada 2 escribe tu y2"));
	productoUno = (x1+x2)/2;
	productoDos = (y1+y2)/2;
	alert("El punto medio del segmento de extremos , los puntos:" + "( "+x1+ " ; "+ x2+" )"+" y "+ "( "+y1+"; "+ y2+" )"+ " es: "+ "( "+productoUno+ " ; "+ productoDos+" )" );
}