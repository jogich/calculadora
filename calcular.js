function saveValue(value){
    var numeros = [value];
    console.log(numeros);
}


// muestra los numeros pulsados y los guarda en una variable

function mostrarycalcular(numero) {

	pantalla.innerHTML += numero;

	var data = pantalla.innerHTML;

	if (numero == "=") {
		pantalla.innerHTML = "total";		
	}
}

