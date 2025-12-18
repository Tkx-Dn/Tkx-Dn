const conteudo = document.getElementById("conteudo")
const loading = document.getElementById("loading")
let contador = 0
let carregando = false

function carregarMaisItens() {
  if (carregando) return
  carregando = true
  loading.style.display = "block"

  setTimeout(() => {
    for (let i = 0; i < 10; i++) {
      contador++
      const div = document.createElement("div")
      div.className = "item"
      div.textContent = "Item " + contador
      conteudo.appendChild(div)
    }
    loading.style.display = "none"
    carregando = false
  }, 500)
}

window.addEventListener("scroll", () => {
  if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 50) {
    carregarMaisItens()
  }
})

carregarMaisItens()
