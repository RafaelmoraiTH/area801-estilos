function filtrarTribos(valorPesquisa) {
  const termo = valorPesquisa.toLowerCase();

  const tabela = document.querySelector("#materiais table tbody");
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
