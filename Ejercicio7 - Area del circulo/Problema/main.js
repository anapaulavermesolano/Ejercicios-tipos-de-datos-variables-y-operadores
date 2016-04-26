function areaDelCirculo() {
	var radio =  Number(prompt("Ecribe el radio del circulo para cálcular su área"));
	var area =  Math.PI*Math.pow(radio,2);
	document.getElementById('ejmp1').innerHTML = "El área del circulo es: " + area.toFixed(2);
}