const textarea = document.getElementById("nota")
const salvar = document.getElementById("salvar")
const lista = document.getElementById("lista")

let notas = JSON.parse(localStorage.getItem("notas")) || []

function renderizar() {
  lista.innerHTML = ""
  notas.forEach((nota, index) => {
    const li = document.createElement("li")
    const texto = document.createElement("span")
    const excluir = document.createElement("button")

    texto.textContent = nota
    excluir.textContent = "Excluir"

    excluir.addEventListener("click", () => {
      notas.splice(index, 1)
      localStorage.setItem("notas", JSON.stringify(notas))
      renderizar()
    })

    li.appendChild(texto)
    li.appendChild(excluir)
    lista.appendChild(li)
  })
}

salvar.addEventListener("click", () => {
  if (textarea.value.trim() !== "") {
    notas.push(textarea.value)
    localStorage.setItem("notas", JSON.stringify(notas))
    textarea.value = ""
    renderizar()
  }
})

renderizar()
