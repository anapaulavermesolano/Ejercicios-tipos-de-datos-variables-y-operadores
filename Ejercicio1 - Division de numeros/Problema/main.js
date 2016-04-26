function dividir() {
	var dividendo = Number(prompt("Escribe tu dividendo"));
	var divisor = Number(prompt("Escribe tu divisor"));
    var resultado = dividendo/divisor;
    document.getElementById("ejmp1.1").innerHTML = "Tu resultado es " + resultado;
}

function texto() {
	var texto1 = Number(prompt("Escribe tu texto 1"));
	var texto2 = Number(prompt("Escribe tu texto 2"));
    var resultado = texto1/texto2;
    document.getElementById("ejmp1.2").innerHTML = "Tu resultado es " + resultado;
}

function cero() {
	var dividendo = Number(prompt("Escribe tu dividendo"));
    var resultado = dividendo/0;
    document.getElementById("ejmp1.3").innerHTML = "Tu resultado es " + resultado;
}