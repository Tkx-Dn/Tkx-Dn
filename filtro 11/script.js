// Seleciona o input e a tabela
const input = document.getElementById('filtro');
const tabela = document.getElementById('tabela').getElementsByTagName('tbody')[0];

function filtrarTabela() {
  const filtro = input.value.toLowerCase();
  const linhas = tabela.getElementsByTagName('tr');

  for (let i = 0; i < linhas.length; i++) {
    const Nome = linhas[i].getElementsByTagName('td')[0];
    if (Nome) {
      const Celula = Nome.textContent || Nome.innerText;
      if (Celula.toLowerCase().indexOf(filtro) > -1) {
        linhas[i].style.display = '';
      } else {
        linhas[i].style.display = 'none';
      }
    }
  }
}

input.addEventListener('keyup', filtrarTabela);
