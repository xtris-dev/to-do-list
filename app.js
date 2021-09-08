const writeTask = document.getElementById("text");
const addTask = document.getElementById("submit");
let todo = document.getElementById("todo");
let task = "";
let newTask;
let removeTask;


// Put input text content into a new variable

writeTask.addEventListener("input", (e) => {
    task = e.target.value;
});


// Check if input variable isn't empty. If okay, insert a new div with input text value

function addTheTask() {
    newTask = document.createElement("div");
    newTask.classList.add("task");
    newTask.innerHTML = `
        <p>${task}</p>
        <input type="button" value="Remove" id="remove" onclick="removeTheTask()">`
    todo.appendChild(newTask);
}

function removeTheTask() {
    newTask.remove();
}

addTask.addEventListener("click", (e) => {
    e.preventDefault();
    (task !== "") ? addTheTask() : alert("Please, enter your task");
}); 

