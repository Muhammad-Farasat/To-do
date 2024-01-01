const addBtn = document.querySelector(".add-btn");
const taskInput = document.querySelector(".wrap input");
const container = document.querySelector(".container");

const addTask = () => {
    const newTask = taskInput.value;
    if(!newTask){
        alert("Enter Something")
        return;
    }
    const task = document.createElement("div");
        task.className = "task";
        task.innerHTML = `  
        <input type = "checkBox" class = "task-check">
        <input class ="input" value = "${newTask}" readonly>
        <button class = "edit"><i class="fa-solid fa-pen-to-square"></i></button> 
        <button class = "delete"><i class="fa-solid fa-trash"></i></button> `;
        task.style.display = "flex";
        container.appendChild(task);    

        taskInput.value = "";

       const deleteBtn = task.querySelector(".delete");
        deleteBtn.addEventListener('click', () => {
            container.removeChild(task);
        })
        let editBtn = task.querySelector(".edit");
        let inputField = task.querySelector(".input");

        editBtn.addEventListener('click', () => {
           if(editBtn.innerHTML === "Edit"){
            editBtn.innerHTML = "save"
            inputField.readOnly = false
            inputField.focus();
           }
           else{
            editBtn.innerHTML = "Edit"
            inputField.readOnly = true
           }
        })
        
}
addBtn.addEventListener("click", addTask);

taskInput.addEventListener("keyup", (event) => {
    if(event.key === "Enter"){
        addTask();
    }
})
