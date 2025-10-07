let numero = 1
//titulo.innerHTML = "<h2>Titulo 2</h2>" 
//let titulo = document.getElementById("titulo") 
let botaod = document.getElementById("botaod") 
botaod.addEventListener("click", () => {
    numero --
    titulo.innerText = numero 
    titulo.style.color = "Red"
})

let botaoa = document.getElementById("botaoa") 
botaoa.addEventListener("click", () => {
    numero ++
    titulo.innerText = numero 
    titulo.style.color = "Green"
})
