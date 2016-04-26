//''\'' 
var a= [];
for(var i=1; i<=2; i++) {
	a[i] = [];
	for(var x=1; x<= 2; x++) {
		a[i][x] = parseInt(prompt("Ingrese numero del eje " + i + " y del eje " + x));
		document.write("El numero de la columna " + i + " y del la fila " + x +" es: " + a[i][x]+ '</br>');
	}
}
var resultado =(a[1][1]*a[2][2])-(a[1][2]*a[2][1]);
document.write(a[1][1]+'\t' + a[1][2]+'<br>'+a[2][1]+'\t' +a[2][2]);		
document.write('<br>'+"El resultado es: " + resultado);		