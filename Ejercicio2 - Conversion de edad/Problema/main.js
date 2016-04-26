function conversion() {
	var nombre =  prompt("Escribe tu nombre");
	var edad =  Number(prompt("Escribe tu edad"));
	var dias = edad*365;
	 document.getElementById("ejmp1").innerHTML = "Hola " + nombre+ ";" + "<br>"+"Has vivido "+ dias+ " dias hasta ahora.";
}