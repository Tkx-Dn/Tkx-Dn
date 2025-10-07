let numero = 1
//titulo.innerHTML = "<h2>Titulo 2</h2>" 
//let titulo = document.getElementById("titulo") 
let button = document.getElementById("button") 
button.addEventListener("click", () => {
    numero ++
    titulo.innerText = numero 
})

