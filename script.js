const input = document.querySelector('.todo__input');
const addButton = document.querySelector('.todo__add-button');
const deleteButton = document.querySelector('.todo__delete-button');
const pageContainer = document.querySelector('.page');

function addNewTodoTask () {
    const todoTemplate = document.querySelector('#todo-template').content;
    const todoElement = todoTemplate.querySelector('.todo__task-container').cloneNode(true);
    todoElement.querySelector('.todo__task').textContent = input.value;
    const deleteButton = todoElement.querySelector('.todo__delete-button');
    deleteButton.addEventListener('click', (event) => {
        const currentTodoTask = event.target.closest('.todo__task-container');
        currentTodoTask.remove();
    });
    pageContainer.append(todoElement);
    input.value = '';
}

addButton.addEventListener('click', addNewTodoTask);
