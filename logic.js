let userInput = document.querySelector('.task-input');
let taskBox = document.querySelector('.task-list');
const addButton = document.querySelector('.add-button');

let flag=true;

addButton.addEventListener('click', function(e){
    e.preventDefault();
    let task = userInput.value;

    userInput.value = '';

    validateTask(task)
});


function validateTask(task) {
    if(task === '') {
        alert("Please type your task")
    }
    else if(isNaN(task) === false) {
        alert("Please type valid text");
    }
    else {
        displayTask(task);
    }
}


function displayTask(task) {    
    const noTask = document.querySelector('#noTask');
    noTask.innerHTML = '';

    const taskSpace = document.createElement("div")
    taskSpace.classList.add("taskSpace");
    taskBox.appendChild(taskSpace);

    const singleTask = document.createElement("div");
    singleTask.textContent = task;
    singleTask.classList.add("singleTask");

    const deleteButton = document.createElement("button")
    deleteButton.innerHTML = '<i class="fa-solid fa-minus"></i>';
    deleteButton.classList.add("deleteButton")

    taskSpace.append(singleTask, deleteButton);

    taskCompleted(flag);
}

function taskCompleted() {
    if(flag) {
        const lastButton = document.createElement("button");
        lastButton.classList.add("lastButton");
        lastButton.innerText = "Completed All Tasks";
        document.body.appendChild(lastButton);
        flag = false;
    }
}

document.addEventListener('click', function(event) {
    const deleteButton = document.querySelector('.deleteButton')
    const singleTask = document.querySelector('.singleTask')


    if (event.target.closest('.deleteButton')) {
        deleteButton.remove();
        singleTask.remove();

        const taskList = document.querySelector('.task-list');
        const noTaskMessage = document.querySelector('#noTask');

        if (taskList.children.length === 1) { // Only "No tasks" message left
            noTaskMessage.style.display = 'block'; // Show "No tasks"
        }
    }
});


