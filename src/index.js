import './style.css';

const addButton = document.querySelector('.todo__add-button');
let uniqueKey = +localStorage.getItem('uniqueKey') || 0;
let todoListArr;
addButton.addEventListener('click', addNewTodoTask);

if (JSON.parse(localStorage.getItem('todoList')) !== null) {
    todoListArr = JSON.parse(localStorage.getItem('todoList'));
    todoListArr.forEach(element => {
        renderTodoTask(element);
    });
} else {
    todoListArr = [];
}

function renderTodoTask(object) {
    const pageContainer = document.querySelector('.page');
    const todoTemplate = document.getElementById('todo-template').content;
    const todoElement = todoTemplate.querySelector('.todo__task-container').cloneNode(true);
    todoElement.querySelector('.todo__task').textContent = object['description'];
    const deleteButton = todoElement.querySelector('.todo__delete-button');
    deleteButton.addEventListener('click', (event) => {
        const currentTodoTask = event.target.closest('.todo__task-container');
        let deleteIndex = todoListArr.findIndex((element) => {
            return element['key'] === object.key;
        });
        todoListArr.splice(deleteIndex,1);
        localStorage.setItem('todoList', JSON.stringify(todoListArr));
        currentTodoTask.remove();
    });
    pageContainer.append(todoElement);
}

function addNewTodoTask () {
    const todoInput = document.querySelector('.todo__input');
    uniqueKey += 1;
    localStorage.setItem('uniqueKey', uniqueKey);
    let newTodoTask = {
        'key': uniqueKey,
        'description': todoInput.value,
    };
    todoListArr.push(newTodoTask);
    renderTodoTask(newTodoTask);
    localStorage.setItem('todoList', JSON.stringify(todoListArr));
    todoInput.value = '';
}


