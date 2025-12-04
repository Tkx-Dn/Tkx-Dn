
const principalimg = document.getElementById("principal")
const miniaturas = document.querySelectorAll(".mini");

miniaturas.forEach(mini => {


    mini.addEventListener("click", () => {
        miniaturas.src = mini.data.full.src;
    });


    mini.addEventListener("mouseover", () => {
        miniaturas.src = mini.data.full.src;
    });
});
