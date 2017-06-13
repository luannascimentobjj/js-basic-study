var btAdd = document.querySelector("#adicionar-paciente");

btAdd.addEventListener("click", function (event) {
    event.preventDefault();

    var form = document.querySelector("#form-adiciona");
    var paciente = constroiPaciente(form);
    var pacienteTr = constroiTr(paciente);

    var erros = validaPaciente(paciente);
    console.log(erros);
    if (erros.length > 0) {
        exibeMensagemErro(erros);
        return;
    }

    adicionaPacienteNaTabela(paciente);

    form.reset();

});

function constroiPaciente(form) {
    var paciente = {};

    paciente.nome = form.nome.value;
    paciente.peso = form.peso.value;
    paciente.altura = form.altura.value;
    paciente.gordura = form.gordura.value;
    paciente.imc = calculaImc(form.peso.value, form.altura.value);

    return paciente;

}

function constroiTr(paciente) {

    var pacienteTr = document.createElement("tr");
    pacienteTr.classList.add("paciente");


    pacienteTr.appendChild(constroiTd(paciente.nome, "info-nome"));
    pacienteTr.appendChild(constroiTd(paciente.peso, "info-peso"));
    pacienteTr.appendChild(constroiTd(paciente.altura, "info-altura"))
    pacienteTr.appendChild(constroiTd(paciente.gordura, "info-gordura"));
    pacienteTr.appendChild(constroiTd(paciente.imc, "info-imc"));

    return pacienteTr;
};

function constroiTd(dado, classe) {
    var td = document.createElement("td");
    td.textContent = dado;
    td.classList.add(classe);
    return td;

}

function validaPaciente(paciente) {

    var erros = [];

    if (paciente.nome.length == 0) {
        erros.push("O nome não pode ser em branco");
    }

    if (paciente.gordura.length == 0) {
        erros.push("A gordura não pode ser em branco");
    }

    if (paciente.peso.length == 0) {
        erros.push("O peso não pode ser em branco");
    }

    if (paciente.altura.length == 0) {
        erros.push("A altura não pode ser em branco");
    }

    if (!validaPeso(paciente.peso)) {
        erros.push("Peso é inválido");
    }

    if (!validaAltura(paciente.altura)) {
        erros.push("Altura é inválida");
    }

    return erros;
}

function exibeMensagemErro(erros){
    var ul = document.querySelector("#mensagems-erro");
    ul.innerHTML = "";
    erros.forEach(function(erro){
        var li = document.createElement("li");
        li.textContent = erro;
        ul.appendChild(li);
    });
}


function adicionaPacienteNaTabela(paciente){
    var pacienteTr = constroiTr(paciente);
    var tabela = document.querySelector("#tabela-pacientes");
    tabela.appendChild(pacienteTr);
}