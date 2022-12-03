// -- calling all IDs from HTML --
let activeTasks = document.getElementById("activeTasks");
let description = document.getElementById("description");
let add = document.getElementById("add");
let taskData; // this is for saving data in an array

// === create task ===
// console.log(add.attributes);
// add task title with description in an object
add.onclick = function () {
  // console.log(add.attributes);
  // console.log("test the function")
  let tasksAndDescription = {
    activeTasks: activeTasks.value,
    description: description.value,
  };

  // insert tasksAndDescription inside taskData
  taskData.push(tasksAndDescription);

  // === save in local storage ===

  // saving data in the local storage
  localStorage.setItem("savedData", JSON.stringify(taskData));
  // console.log(tasksAndDescription);/

  readData(); // because it is related to this buttom
};

// save tasks data in array with if condition
if (localStorage.savedData != null) {
  taskData = JSON.parse(localStorage.savedData);
} else {
  taskData = [];
}

// === read inputs ===
function readData() {
  let table = "";

  for (let i = 0; i < taskData.length; i++) {
    table += `
    <tr>
        <td>${i}</td>
        <td>${taskData[i].activeTasks}</td>
        <td>${taskData[i].description}</td>
        <td><button id="update">Update</button></td>
        <td><button onclick="deleteTask(${i})" id="delete">Delete</button></td>
        </tr>
    `;
  }

  document.getElementById("tbody").innerHTML = table;
}
readData();

// === count ===
// === delete ===
function deleteTask(i) {
  taskData.splice(i, 1);
  localStorage.add = JSON.stringify(taskData);
  readData();
}

// === update ===
