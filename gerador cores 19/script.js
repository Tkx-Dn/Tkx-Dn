const container = document.getElementById("container")
const codigo = document.getElementById("codigo")
const botao = document.getElementById("gerar")

function gerarCor() {
  let cor = "#"
  const caracteres = "0123456789ABCDEF"
  for (let i = 0; i < 6; i++) {
    cor += caracteres[Math.floor(Math.random() * 16)]
  }
  return cor
}

botao.addEventListener("click", () => {
  const novaCor = gerarCor()
  container.style.backgroundColor = novaCor
  codigo.textContent = novaCor
})
