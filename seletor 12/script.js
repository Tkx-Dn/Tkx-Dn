const container = document.getElementById("estrelas")
const texto = document.getElementById("texto")
let classificacao = 0

for (let i = 1; i <= 5; i++) {
  const estrela = document.createElement("span")
  estrela.className = "estrela-vazia"
  estrela.dataset.valor = i

  estrela.addEventListener("mouseover", () => {
    preencher(i)
  })

  estrela.addEventListener("click", () => {
    classificacao = i
    texto.textContent = "Classificação: " + classificacao
  })

  container.appendChild(estrela)
}

function preencher(valor) {
  const estrelas = container.children
  for (let i = 0; i < estrelas.length; i++) {
    estrelas[i].className = i < valor ? "estrela-cheia" : "estrela-vazia"
  }
}
