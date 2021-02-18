const form = document.getElementById('form');
const input = document.getElementById('input');
const todoList = document.getElementById('todoList');
const checked = document.getElementsByClassName("checked");

console.log(checked);

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const todo = input.value;

    if(todo){
        const todoElement = document.createElement("li");
        todoElement.innerHTML = todo;
        todoList.appendChild(todoElement);

        todoElement.addEventListener('click', () => {
            if(todoElement.classList.contains("checked")){
                todoElement.classList.remove("checked");
            }else{
                todoElement.classList.add("checked");
            }
        });

        todoElement.addEventListener("contextmenu", (e) => {
            e.preventDefault();

            todoElement.remove();
        });

        input.value = '';
    }
});