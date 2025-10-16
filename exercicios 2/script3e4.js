let botao = document.getElementById("botao") 
let lista = document.getElementById("lista")
let numero = 0
botao.addEventListener("click", () => {
    let item = document.createElement("li") 
    item.innerText =  "Item"
    lista.appendChild(item)
})
botao2.addEventListener("click", () => {
   lista.removeChild(lista.lastChild)
})