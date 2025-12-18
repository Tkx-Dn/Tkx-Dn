const abrir = document.getElementById("abrir")
const fechar = document.getElementById("fechar")
const overlay = document.getElementById("overlay")

abrir.addEventListener("click", () => {
  overlay.classList.add("show-modal")
})

fechar.addEventListener("click", () => {
  overlay.classList.remove("show-modal")
})

overlay.addEventListener("click", e => {
  if (e.target === overlay) {
    overlay.classList.remove("show-modal")
  }
})
