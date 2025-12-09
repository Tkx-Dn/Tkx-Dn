const toggle = document.getElementById('toggle-theme');
const body = document.body;

// Verifica no localStorage se o tema escuro estava ativado
if (localStorage.getItem('dark-mode') === 'enabled') {
    body.classList.add('dark-mode');
    toggle.checked = true;
}

// Evento de clique no botão
toggle.addEventListener('change', () => {
    body.classList.toggle('dark-mode');

    // Salva preferência no localStorage
    if (body.classList.contains('dark-mode')) {
        localStorage.setItem('dark-mode', 'enabled');
    } else {
        localStorage.setItem('dark-mode', 'disabled');
    }
});

