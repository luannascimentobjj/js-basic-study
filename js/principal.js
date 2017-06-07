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

var btAdd = document.querySelector("#adicionar-paciente");

btAdd.addEventListener("click", function(event){
	event.preventDefault();

	var form = document.querySelector("#form-adiciona");

	var nome = form.nome.value;
	var peso = form.peso.value;
	var altura = form.altura.value;
	var gordura = form.gordura.value;

	var pacienteTr = document.createElement("tr");
	var tabela = document.querySelector("#tabela-pacientes");

	var nomeTd = document.createElement("td");
	var pesoTd = document.createElement("td");
	var alturaTd = document.createElement("td");
	var gorduraTd = document.createElement("td");
	var imcTd = document.createElement("td");

	nomeTd.textContent = nome;
	pesoTd.textContent = peso;
	alturaTd.textContent = altura;
	gorduraTd.textContent = gordura;

	pacienteTr.appendChild(nomeTd);
	pacienteTr.appendChild(pesoTd);
	pacienteTr.appendChild(alturaTd);
	pacienteTr.appendChild(gorduraTd);

	tabela.appendChild(pacienteTr);

	console.log(pacienteTr);
});
