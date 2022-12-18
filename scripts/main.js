// setting up variables
let taskTitle = document.querySelector(".add-task .task-title");
let taskDescription = document.querySelector(".add-task .task-description");
let theAddButton = document.querySelector(".add-task .plus");
let tasksContainer = document.querySelector(".tasks-content");
let tasksCount = document.querySelector(".tasks-count span");
let tasksCompleted = document.querySelector(".tasks-completed span");
let arrayOfTasks = [];

// focus on imput field
window.onload = function () {
  taskTitle.focus();
};

// adding the task
theAddButton.onclick = function () {
  // if input is emrty
  if (taskTitle.value === "") {
    Swal.fire("No Tasks Added");
  } else {
    let noTasksMsg = document.querySelector(".no-tasks-message");

    // check if span with no tasks message is exist
    if (document.body.contains(document.querySelector(".no-tasks-message"))) {
      // remove no tasks message
      noTasksMsg.remove();
    }

    // create main span element
    let mainSpan = document.createElement("span");

    // create delete button
    let deleteElement = document.createElement("span");

    // create update button
    let updateElement = document.createElement("span");

    // create complete button
    let completeElement = document.createElement("span");

    // create the main span text
    let text = document.createTextNode(taskTitle.value);

    // create the delete button text
    let deleteText = document.createTextNode("Delete");

    // create the update button text
    let updateText = document.createTextNode("Update");

    // create the complete button text
    let completeText = document.createTextNode("Complete");

    // add text to main span
    mainSpan.appendChild(text);

    // add class to main span
    mainSpan.className = "task-box";

    // add text to delete button
    deleteElement.appendChild(deleteText);

    // add text to update button
    updateElement.appendChild(updateText);

    // add text to complete button
    completeElement.appendChild(completeText);

    // add class to delete button
    deleteElement.className = "delete";

    // add class to update button
    updateElement.className = "update";

    // add class to complete button
    completeElement.className = "complete";

    // add delete button to main span
    mainSpan.appendChild(deleteElement);

    // add update button to main span
    mainSpan.appendChild(updateElement);

    // add complete button to main span
    mainSpan.appendChild(completeElement);

    // add the task to the container
    tasksContainer.appendChild(mainSpan);

    // empty the input
    taskTitle.value = "";

    // focus on imput field
    taskTitle.focus();

    // calculate
    calculateTasks();
  }
};

document.addEventListener("click", function (e) {
  // delete task
  if (e.target.className == "delete") {
    // remove current task
    e.target.parentNode.remove();

    // check number of tasks inside the container
    if (tasksContainer.childElementCount == 0) {
      createNoTasks();
    }
  }

  // finish task
  if (e.target.classList.contains("task-box")) {
    // toggle class finished
    e.target.classList.toggle("finished");
  }

  // calculate tasks
  calculateTasks();
});

// function to create no tasks message
function createNoTasks() {
  // create message span element
  let msgSpan = document.createElement("span");

  // create the text message
  let msgText = document.createTextNode("No Tasks To Show");

  // add text to message span element
  msgSpan.appendChild(msgText);

  // add class to message span
  msgSpan.className = "no-tasks-message";

  // appendthe the message span element to the task container
  tasksContainer.appendChild(msgSpan);
}

// function to calculate tasks
function calculateTasks() {
  // claculate all tasks
  tasksCount.innerHTML = document.querySelectorAll(
    ".tasks-content .task-box"
  ).length;

  // claculate completed tasks
  tasksCompleted.innerHTML = document.querySelectorAll(
    ".tasks-content .finished"
  ).length;
}
