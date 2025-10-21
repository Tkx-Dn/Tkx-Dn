let botao = document.getElementById("click")
let texto  = document.getElementById("contador")
let numero = 0
addEventListener("click", ()=>{
    numero ++
    texto.innerText = "Contador " + numero
})