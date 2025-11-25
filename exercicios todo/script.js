
const form = document.getElementById('todo-form');
const taskInput = document.getElementById('task-input');
const todoList = document.getElementById('todo-list');

function addTask(event) {
    event.preventDefault();

    const valor = taskInput.value.trim();
    if (valor === '') return;

    const li = document.createElement('li');

    const span = document.createElement('span');
    span.textContent = valor;

    const butDelete = document.createElement('button');
    butDelete.textContent = 'Deletar';

    li.appendChild(span);
    li.appendChild(butDelete);

    todoList.appendChild(li);

    taskInput.value = '';

    butDelete.addEventListener('click', function () {
        todoList.removeChild(li);
    });


    li.addEventListener('click', function (event) {
    
        if (event.target === butDelete) return;
        li.classList.toggle('completed');
    });
}

form.addEventListener('submit', addTask);
