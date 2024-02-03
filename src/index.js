import './style.css';

let uniqueKey = +localStorage.getItem('uniqueKey') || 0;
let todoListArr = [];
const todoInput = document.querySelector('.todo__input');
const addButton = document.querySelector('.todo__add-button');
addButton.addEventListener('click', addNewTodoTask);
todoInput.addEventListener('input', () => {
    checkInput();
});
getTodoTasksFromStorage();

function getTodoTasksFromStorage() {
    let localStorageTodoList = JSON.parse(localStorage.getItem('todoList'));
    if (localStorageTodoList !== null) {
        todoListArr = localStorageTodoList;
        todoListArr.forEach((todoTask) => {
            renderTodoTask(todoTask);
        });
    }
}

function renderTodoTask(todoObject) {
    const pageContainer = document.querySelector('.page');
    const todoTemplate = document.getElementById('todo-template').content;
    const todoElement = todoTemplate.querySelector('.todo__task-container').cloneNode(true);
    todoElement.querySelector('.todo__task').textContent = todoObject['description'];
    addDeleteButton(todoElement);
    pageContainer.append(todoElement);
}

function addDeleteButton(todoElement) {
    const deleteButton = todoElement.querySelector('.todo__delete-button');
    deleteButton.addEventListener('click', (event) => {
        const currentTodoTask = event.target.closest('.todo__task-container');
        let deleteIndex = todoListArr.findIndex((todoElement) => {
            return todoElement['key'] === todoElement.key;
        });
        todoListArr.splice(deleteIndex,1);
        localStorage.setItem('todoList', JSON.stringify(todoListArr));
        currentTodoTask.remove();
    });
}

function checkInput() {
    if (todoInput.value === '') {
        addButton.setAttribute('disabled', true);
    } else {
        addButton.removeAttribute('disabled');
    }
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
    localStorage.setItem('todoList', JSON.stringify(todoListArr));
    renderTodoTask(newTodoTask);
    todoInput.value = '';
    checkInput();
}
