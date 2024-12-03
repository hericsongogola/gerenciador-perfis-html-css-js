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

const rowsTable = [];
const tableHtml = document.getElementById("table-data");

const titulosTable = ["#", "Nome Completo", "RG", "CPF", "Gênero", "Cargo", "Senioridade "];

buttonSalvar.addEventListener("click", (event) => {
  event.preventDefault();

  const row = {
    id: generateId(),
    nome: inputNome.value,
    sobrenome: inputSobrenome.value,
    rg: inputRg.value,
    cpf: inputCpf.value,
    genero: inputRadioMasculino.checked === true ? "Masculino" : "Feminino",
    cargo: inputCargo.value,
    senioridade: inputSenioridade.value,
  };

  rowsTable.push(row);
  generateTable();
});

buttonLimpar.addEventListener("click", (event) => {
  event.preventDefault();

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

function generateTable() {
  tableHtml.innerHTML = "";

  if (rowsTable.length > 0) {
    const table = document.createElement("table");
    const line = document.createElement("tr");

    table.className = "table";

    titulosTable.map((cell) => {
      const th = document.createElement("th");

      th.textContent = cell;
      return line.appendChild(th);
    });

    table.appendChild(line);

    rowsTable.map(
      ({ nome, sobrenome, rg, cpf, genero, cargo, senioridade }) => {
        const cellNomeCompleto = document.createElement("td");
        const cellRg = document.createElement("td");
        const cellCpf = document.createElement("td");
        const cellGenero = document.createElement("td");
        const cellCargo = document.createElement("td");
        const cellSenioridade = document.createElement("td");

        const line = document.createElement("tr");

        cellNomeCompleto.textContent = `${nome} ${sobrenome}`;
        cellRg.textContent = rg;
        cellCpf.textContent = cpf;
        cellGenero.textContent = genero;
        cellCargo.textContent = cargo;
        cellSenioridade.textContent = senioridade;

        line.appendChild(cellNomeCompleto);
        line.appendChild(cellRg);
        line.appendChild(cellCpf);
        line.appendChild(cellGenero);
        line.appendChild(cellCargo);
        line.appendChild(cellSenioridade);

        return table.appendChild(line);
      }
    );

    tableHtml.appendChild(table);
  }
}

function generateId(){
  return 1
}

alert("Preencha todos os campos antes de salvar")

//Criar logica para gerar um ID. Dica: criar uma variavel global
//Validar o preenchimento dos campos obrigatórios ao clicar no botão salvar. Dica: Se não preenchido retornar um alerta para o usuário

//Desafio se tiver cerebro e tempo: retornar os dados da linha para o formulario ao clicar no ID da linha e apagar a mesma. Dica: Apagar do array.