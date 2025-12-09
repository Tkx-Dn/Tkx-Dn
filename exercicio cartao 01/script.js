const button = document.getElementById("button");
const detalhes = document.getElementById("detalhes");

button.addEventListener("click", () => {
    if (detalhes.hidden) {
        detalhes.hidden = false;             
        button.innerText = "Ocultar detalhes";
    } else {
        detalhes.hidden = true;               
        button.innerText = "Mostrar detalhes";
    }
});
