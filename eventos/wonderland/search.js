function filtrarMateriais(valorPesquisa) {
  filtrarTabela(valorPesquisa, "materiais");
}

function filtrarMissoes(valorPesquisa) {
  filtrarTabela(valorPesquisa, "missoes");
}

function filtrarTabela(valorPesquisa, idSecao) {
  const termo = valorPesquisa.toLowerCase();
  const tabela = document.querySelector(`#${idSecao} table tbody`);

  if (!tabela) return;

  const linhas = tabela.querySelectorAll("tr");

  for (let i = 1; i < linhas.length; i++) {
    const linha = linhas[i];
    const primeiraCelula = linha.querySelector("td:first-child");
    const textoCelula = primeiraCelula.textContent.toLowerCase();

    if (textoCelula.includes(termo)) {
      linha.style.display = "";
    } else {
      linha.style.display = "none";
    }
  }

  if (termo === "") {
    for (let i = 1; i < linhas.length; i++) {
      linhas[i].style.display = "";
    }
  }
}
