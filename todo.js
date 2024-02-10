function addTask() {
    var taskInput = document.getElementById("newTask");
    var taskText = taskInput.value.trim();

    if (taskText !== "") {
        var pendingTasksList = document.getElementById("pendingTasks");
        var listItem = document.createElement("li");
        var timestamp = getTimestamp();
        listItem.innerHTML = `
            <span>${taskText}</span>
            <span>${timestamp}</span>
            <button class="complete" onclick="completeTask(this)">Complete</button>
            <button class="delete" onclick="deleteTask(this)">Delete</button>
        `;
        pendingTasksList.appendChild(listItem);

        taskInput.value = "";
    }
}

function completeTask(button) {
    var listItem = button.parentElement;
    var completedTasksList = document.getElementById("completedTasks");
    var timestamp = getTimestamp();
    listItem.innerHTML += `<span>${timestamp}</span>`;
    completedTasksList.appendChild(listItem);
    button.classList.remove("complete");
    button.classList.add("delete");
    button.innerText = "Delete";
    button.onclick = function () { deleteTask(this); };
}

function deleteTask(button) {
    var listItem = button.parentElement;
    listItem.remove();
}

function getTimestamp() {
    var now = new Date();
    var date = `${now.getFullYear()}-${padZero(now.getMonth() + 1)}-${padZero(now.getDate())}`;
    var time = `${padZero(now.getHours())}:${padZero(now.getMinutes())}:${padZero(now.getSeconds())}`;
    return `${date} ${time}`;
}

function padZero(num) {
    return num < 10 ? '0' + num : num;
}