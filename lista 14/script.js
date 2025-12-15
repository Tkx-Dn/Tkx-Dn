const lista = document.getElementById("lista")
let itemArrastado = null

lista.addEventListener("dragstart", e => {
  if (e.target.tagName === "LI") {
    itemArrastado = e.target
    e.target.classList.add("dragging")
  }
})

lista.addEventListener("dragover", e => {
  e.preventDefault()
  if (e.target.tagName === "LI" && e.target !== itemArrastado) {
    e.target.classList.add("drag-over")
  }
})

lista.addEventListener("dragleave", e => {
  if (e.target.tagName === "LI") {
    e.target.classList.remove("drag-over")
  }
})

lista.addEventListener("drop", e => {
  e.preventDefault()
  if (e.target.tagName === "LI" && e.target !== itemArrastado) {
    lista.insertBefore(itemArrastado, e.target.nextSibling)
  }
  e.target.classList.remove("drag-over")
})

lista.addEventListener("dragend", e => {
  e.target.classList.remove("dragging")
  itemArrastado = null
})
