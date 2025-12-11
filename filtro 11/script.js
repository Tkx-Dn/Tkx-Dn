// Seleciona o input e a tabela
const input = document.getElementById('filtro');
const tabela = document.getElementById('tabela').getElementsByTagName('tbody')[0];

// Função para filtrar a tabela
function filtrarTabela() {
  const filtro = input.value.toLowerCase(); // texto digitado
  const linhas = tabela.getElementsByTagName('tr');

  for (let i = 0; i < linhas.length; i++) {
    const celulaNome = linhas[i].getElementsByTagName('td')[0]; // filtrando pela coluna "Nome"
    if (celulaNome) {
      const textoCelula = celulaNome.textContent || celulaNome.innerText;
      if (textoCelula.toLowerCase().indexOf(filtro) > -1) {
        linhas[i].style.display = ''; // mostra a linha
      } else {
        linhas[i].style.display = 'none'; // esconde a linha
      }
    }
  }
}

// Adiciona evento keyup ao input
input.addEventListener('keyup', filtrarTabela);
