const form = document.getElementById('form-cadastro');
const usuario = document.getElementById('usuario');
const email = document.getElementById('email');
const senha = document.getElementById('senha');
const msgErro = document.getElementById('mensagem-erro');

form.addEventListener('submit', function(event) {
    event.preventDefault(); // impede envio do formulário

    // Reset de estilos e mensagens
    msgErro.textContent = "";
    usuario.classList.remove("erro");
    email.classList.remove("erro");
    senha.classList.remove("erro");

    // Validações
    if (usuario.value.length < 3) {
        msgErro.textContent = "O nome de usuário deve ter no mínimo 3 caracteres.";
        usuario.classList.add("erro");
        return;
    }

    if (!email.value.includes("@")) {
        msgErro.textContent = "Email inválido. Deve conter '@'.";
        email.classList.add("erro");
        return;
    }

    if (senha.value.length < 6) {
        msgErro.textContent = "A senha deve ter pelo menos 6 caracteres.";
        senha.classList.add("erro");
        return;
    }

    // Se chegou aqui, está tudo válido
    msgErro.style.color = "green";
    msgErro.textContent = "Cadastro realizado com sucesso!";
});
