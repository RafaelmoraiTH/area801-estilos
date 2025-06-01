function filtrarTribos(valorPesquisa) {
  const termo = valorPesquisa.toLowerCase();

  const tabelas = [document.querySelector("#materiais table tbody"), document.querySelector("#missoes table tbody")].filter((t) => t !== null);

  tabelas.forEach((tabela) => {
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
  });
}
