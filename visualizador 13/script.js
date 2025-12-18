const imagem = document.getElementById("imagem")
const mais = document.getElementById("mais")
const menos = document.getElementById("menos")
const resetar = document.getElementById("resetar")

let zoom = 1

mais.addEventListener("click", () => {
  zoom += 0.1
  imagem.style.transform = `scale(${zoom})`
})

menos.addEventListener("click", () => {
  zoom -= 0.1
  imagem.style.transform = `scale(${zoom})`
})

resetar.addEventListener("click", () => {
  zoom = 1
  imagem.style.transform = `scale(${zoom})`
})
