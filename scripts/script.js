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

const titulosTable = [
  "#",
  "Nome Completo",
  "RG",
  "CPF",
  "Gênero",
  "Cargo",
  "Senioridade ",
];

let idGlobal = 1;

buttonSalvar.addEventListener("click", (event) => {
  event.preventDefault();
  if (
    inputNome.value !== "" &&
    inputSobrenome.value !== "" &&
    inputCpf.value !== "" &&
    inputCargo.value !== ""
  ) {
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
    clearForm();
  } else {
    alert("Preencha todos os campos obrigatórios antes de salvar");
  }
});

buttonLimpar.addEventListener("click", (event) => {
  event.preventDefault();
  clearForm();
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
      ({ id, nome, sobrenome, rg, cpf, genero, cargo, senioridade }) => {
        const cellId = document.createElement("td");
        const cellNomeCompleto = document.createElement("td");
        const cellRg = document.createElement("td");
        const cellCpf = document.createElement("td");
        const cellGenero = document.createElement("td");
        const cellCargo = document.createElement("td");
        const cellSenioridade = document.createElement("td");

        const line = document.createElement("tr");

        cellId.textContent = id;
        cellNomeCompleto.textContent = `${nome} ${sobrenome}`;
        cellRg.textContent = rg;
        cellCpf.textContent = cpf;
        cellGenero.textContent = genero;
        cellCargo.textContent = cargo;
        cellSenioridade.textContent = senioridade;

        cellId.addEventListener("click", () => {
          inputNome.value = nome;
          inputSobrenome.value = sobrenome;
          inputRg.value = rg;
          inputCpf.value = cpf;
          inputRadioMasculino.checked = genero === "Masculino";
          inputRadioFeminino.checked = genero === "Feminino";
          inputCargo.value = cargo;
          inputSenioridade.value = senioridade;

          rowsTable.splice(getIndex(id), 1);
          generateTable();
        });

        line.appendChild(cellId);
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

function generateId() {
  return idGlobal++;
}

function getIndex(index) {
  let i = 0;
  let position;

  while (i <= rowsTable.length) {
    return rowsTable[i].id === index ? (position = i) : i++;
  }

  return position;
}

function clearForm() {
  inputNome.value = "";
  inputSobrenome.value = "";
  inputRg.value = "";
  inputCpf.value = "";
  inputRadioMasculino.checked = true;
  inputRadioFeminino.checked = false;
  inputCargo.value = "";
  inputSenioridade.value = "";
}