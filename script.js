
const taskInput = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const taskList = document.getElementById("taskList");

function addTask() {
    const taskText = taskInput.value.trim();

    if (taskText === "") {
        alert("Please enter a task!");
        return;
    }

    const li = document.createElement("li");
    const span = document.createElement("span");

    const editBtn = document.createElement("button");
    const deleteBtn = document.createElement("button");

    span.textContent = taskText;

    editBtn.textContent = "Edit";
    editBtn.className = "edit-btn";

    deleteBtn.textContent = "Delete";
    deleteBtn.className = "delete-btn";

    // Complete task
    span.addEventListener("click", function () {
        li.classList.toggle("completed");
    });

    // Update task
    editBtn.addEventListener("click", function () {
        const newTask = prompt("Update your task:", span.textContent);

        if (newTask !== null && newTask.trim() !== "") {
            span.textContent = newTask.trim();
        } else if (newTask !== null) {
            alert("Task cannot be empty!");
        }
    });

    // Delete task
    deleteBtn.addEventListener("click", function () {
        li.remove();
    });

    li.appendChild(span);
    li.appendChild(editBtn);
    li.appendChild(deleteBtn);

    taskList.appendChild(li);

    taskInput.value = "";
}

// Add button
addBtn.addEventListener("click", addTask);

// Enter key
taskInput.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        addTask();
    }
});
