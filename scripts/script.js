const inputNome = document.getElementById("nome");
const inputSobrenome = document.getElementById("sobrenome");
const inputRg = document.getElementById("rg");
const inputCpf = document.getElementById("cpf");
const inputRadioMasculino = document.getElementById("radioMasculino");
const inputRadioFeminino = document.getElementById("radioFeminino");
const inputCargo = document.getElementById("cargo");
const inputSenioridade = document.getElementById("senioridade");

const buttonLimpar = document.getElementById("limpar");
const buttonSalvar = document.getElementById("salvar");

buttonSalvar.addEventListener("click", () => {
  console.log(
    inputNome.value,
    inputSobrenome.value,
    inputRg.value,
    inputCpf.value,
    inputRadioMasculino.checked,
    inputRadioFeminino.checked,
    inputCargo.value,
    inputSenioridade.value
  );
});
buttonLimpar.addEventListener("click", () => {
  inputNome.value = "";
  inputSobrenome.value = "";
  inputRg.value = "";
  inputCpf.value = "";
  inputRadioMasculino.checked = true;
  inputRadioFeminino.checked = false;
  inputCargo.value = "";
  inputSenioridade.value = "";
  console.log("apagou tudo garoto!!!");
});
