
// taskInfo is the input that use use to enter tasks
var taskInfo = document.getElementById("taskInfo");
var displayInput =document.getElementById("displayInput");
var tasksContainer = [];

// function to calculate taska in array and then display it in todolist table
function addTasks() {
  tasksContainer.push(taskInfo.value);
  // call function to display task in table
  displayTasks() 
  // call function to clear the input after add it
  clearTaskInput();
}

// function to display task in todo List Table
function displayTasks() {
  var cartona = "";
  for (var i = 0; i < tasksContainer.length; i++){
    cartona += `
    <div id="displayInput" class="bg-white  border-2 rounded-2 p-2 mb-3 d-flex justify-content-between ">
            ${tasksContainer[i]}
            <div>
            <button class="btn btn-outline-danger btn-sm " onclick="doneMark(${i}) " >
            <i class="fa-solid fa-check "></i>
            </button>
            <button class="btn btn-outline-danger btn-sm " onclick="deletTask(${i})" >
            <i class="fa-solid fa-xmark"></i>
            </button>
            </div>
    </div>
  `;
  }
  document.getElementById("tableData").innerHTML = cartona;
}

//function to clear Task Input -----
function clearTaskInput(){
  taskInfo.value="";
}

//function to done task 
function doneMark(i){
  tasksContainer[i] = `${tasksContainer[i]} ---- Done` ;

  displayTasks();
} 

/// function to delete task
function deletTask(taskIndex) {
  tasksContainer.splice(taskIndex, 1);
  displayTasks();
}

/////////////////////////////////////////////////

