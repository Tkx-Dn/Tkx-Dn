let relogio = document.getElementById("relogio");

function attrl(){
    let dt = new Date();
    let horas = String(dt.getHours()).padStart(2,"0");
    let minutos = String(dt.getMinutes()).padStart(2,"0");
    let segundos = String(dt.getSeconds()).padStart(2,"0");
    let horario = horas + ":" + minutos + ":" + segundos
    
    relogio.innerText = horario
}
setInterval(attrl, 1000)


let cronometro = document.getElementById("cronometro");
let iniciar = document.getElementById("iniciar");
let parar = document.getElementById("parar");
console.log(cronometro, iniciar, parar);

let hora = 0
let minuto  = 0
let segundo = 0

function attcr(){
   segundo++

   if(segundo >= 60){
    minuto++
    segundo = 0}

    if(minuto >= 60){
    hora++
    minuto = 0}

hora = String(hora).padStart(2, "0")
minuto = String(minuto).padStart(2, "0")
segundo = String(segundo).padStart(2, "0")

   cronometro.innerText = hora + ":" + minuto + ":" + segundo
}

let id
let ativo = false
iniciar.addEventListener("click", () =>{
   if(ativo == false){
   id = setInterval(attcr, 1000)
   ativo = true
   }
})

parar.addEventListener("click", () =>{
    clearInterval(id)
})

zerar.addEventListener("click", () => {
    segundo = 0
    minuto = 0
    hora = 0
    hora = String(hora).padStart(2, "0")
minuto = String(minuto).padStart(2, "0")
segundo = String(segundo).padStart(2, "0")
      cronometro.innerText = hora + ":" + minuto + ":" + segundo
})

