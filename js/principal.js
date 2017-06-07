var titulo = document.querySelector(".titulo");

var pacientes = document.querySelectorAll(".paciente");

pacientes.forEach(function(paciente) {
	
	var tdPeso = paciente.querySelector(".info-peso");
	var peso = tdPeso.textContent;

	var tdAltura = paciente.querySelector(".info-altura");
	var altura = tdAltura.textContent;

	var tdImc = paciente.querySelector(".info-imc");

	var pesoEhValido = true;
	var alturaEhValida = true;

	if (peso <= 0 || peso >= 1000) {
		console.log("Peso inválido");
		pesoEhValido = false;
		tdImc.textContent = "Peso Inválido";
		paciente.classList.add("paciente-invalido");
	}

	if (altura <= 0 || altura >= 5.00) {
		console.log("Altura inválida");
		alturaEhValida = false;
		tdImc.textContent = "Altura Inválida";
		paciente.classList.add("paciente-invalido");
	}

	if (alturaEhValida && pesoEhValido) {
		var imc = peso / (altura * altura);
		tdImc.textContent = imc.toFixed(2);
	}


});



