const botoes = document.querySelectorAll(".tab-btn");
const conteudos = document.querySelectorAll(".tab-content");

botoes.forEach(btn => {
    btn.addEventListener("click", () => {

        
        botoes.forEach(b => b.classList.remove("active"));

       
        conteudos.forEach(c => c.classList.remove("show"));

    
        btn.classList.add("active");


        const id = btn.dataset.target;
        document.getElementById(id).classList.add("show");
    });
});
