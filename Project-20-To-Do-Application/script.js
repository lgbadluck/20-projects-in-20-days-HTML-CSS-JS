const toDoList = document.getElementById("_listToDoItems");
const newToDoInput = document.getElementById("_newToDoInput");
const addToDoButton = document.getElementById("_addToDoItem");

addToDoButton.addEventListener("click", () => {
    const newToDoText = newToDoInput.value;

    if(newToDoText !== "") {
        const newToDoItem = document.createElement("li");
        newToDoItem.innerText = newToDoText;

        const deleteToDoButton = document.createElement("button");
        deleteToDoButton.innerText = "X";

        deleteToDoButton.classList.add("delete-todo-btn");
        deleteToDoButton.addEventListener("click", () => {
            newToDoItem.remove();
        });

        newToDoItem.appendChild(deleteToDoButton);
        toDoList.appendChild(newToDoItem);
        newToDoInput.value = "";
    }
});