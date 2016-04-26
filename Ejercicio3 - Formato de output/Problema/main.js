function Output() {
	var nombre = prompt("Escribe tu Nombre.");
	var apellido = prompt("Escribe tu 1° Apellido.");
	var poblacion = prompt("Escribe tu población");
	document.getElementById("ejmp1").innerHTML = "Hola " + nombre+ " "+ apellido+"."+ "<br>"+ "Adios habitante de poblacion "+ poblacion+ ".";

}