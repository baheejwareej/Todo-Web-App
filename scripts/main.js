// -- calling all IDs from HTML --
let activeTasks = document.getElementById("activeTasks");
let description = document.getElementById("description");
let add = document.getElementById("add");
let changeButton = "Add Task";
let reset = document.getElementById("reset");
let taskData; // this is for saving data in an array
let fake; // this is a fake variable to use the index which inside update function

// localStorage.clear();

// === create task ===

// add task title with description in an object

add.onclick = function () {

  let tasksAndDescription = {
    activeTasks: activeTasks.value,
    description: description.value,
  };

  // insert tasksAndDescription inside taskData

  taskData.push(tasksAndDescription); // ****error****
  taskData[fake] = tasksAndDescription;

  // if(changeButton === "create"){
  //   taskData.push(tasksAndDescription); // ****error****
  // }else{
  //   taskData[fake] = tasksAndDescription; // ****error****
  // }
  

  // === save in local storage ===

  // saving data in the local storage
  localStorage.setItem("savedData", JSON.stringify(taskData));

  clearPalceHolders();

  readData(); // because it is related to this buttom
};

// save tasks data in array with if condition
if (localStorage.savedData != null) {
  taskData = JSON.parse(localStorage.savedData);
} else {
  taskData = [];
}

// clear inputs
function clearPalceHolders(){
  activeTasks.value = "";
  description.value = "";
}

// === read inputs ===
function readData() {
  // console.log("task data", taskData);
  let table = "";

  for (let i = 0; i < taskData.length; i++) {
    table += `
    <tr>
        <td>${taskData[i].activeTasks}</td>
        <td>${taskData[i].description}</td>
        <td><button id="complete">Complete</button></td>
        <td><button onclick="updateTask(${i})" id="update">Update</button></td>
        <td><button onclick="deleteTask(${i})" id="delete">Delete</button></td>
        </tr>
    `;
  }

  document.getElementById("tbody").innerHTML = table;

  
}
readData();




// ** read comleted task to the second table in todo page (completed tasks) **
function readCompletedTasks() {
  for (let i = 0; i < taskData.length; i++) {}

  document.getElementById("tbody2").innerHTML = table;
}

// === count ===
// === delete ===
function deleteTask(i) {
  taskData.splice(i, 1);
  localStorage.add = JSON.stringify(taskData);
  readData();
}


// === update ===
function updateTask(i){
  activeTasks.value = taskData[i].activeTasks;
  description.value = taskData[i].description;
  add.innerHTML = "Update";
  changeButton = "Update";
  fake = i; // now this is readable as a global i
  scroll({
    top: 0,
    behavior: "smooth",
  })
}
