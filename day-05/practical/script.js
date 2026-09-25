// Task Manager using JavaScript

let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

const taskInput = document.getElementById("taskInput");
const addButton = document.getElementById("addButton");
const taskList = document.getElementById("taskList");

// Display tasks
function displayTasks() {
    taskList.innerHTML = "";

    tasks.forEach((task, index) => {
        const li = document.createElement("li");

        li.innerHTML = `
            ${task}
            <button onclick="deleteTask(${index})">Delete</button>
        `;

        taskList.appendChild(li);
    });
}

// Add task
addButton.addEventListener("click", function () {
    const task = taskInput.value.trim();

    if (task === "") {
        alert("Please enter a task.");
        return;
    }

    tasks.push(task);

    localStorage.setItem("tasks", JSON.stringify(tasks));

    taskInput.value = "";

    displayTasks();
});

// Delete task
function deleteTask(index) {
    tasks = tasks.filter((_, taskIndex) => taskIndex !== index);

    localStorage.setItem("tasks", JSON.stringify(tasks));

    displayTasks();
}

// Display saved tasks when page loads
displayTasks();