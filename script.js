const submitButton = document.getElementById("btnSubmit");
const tasks = document.getElementById("tasks");
const messageElement = document.getElementById("message");
const clearButton = document.getElementById("btnClear");
const dateTime = document.getElementById("dateTime");

submitButton.addEventListener("click", addTask);
clearButton.addEventListener("click", clearList);
tasks.addEventListener("click", doneTask);

const statusMessage = "Great, you have no tasks today!";

displayMessage(statusMessage);

function doneTask(event) {
  const style = event.target.style;
  if (!style.textDecoration) {
    style.textDecoration = "line-through";
  } else {
    style.textDecoration = ""; // delete text deco if is clicked again
  }
}

function addTask() {
    const newTask = document.getElementById("newTask");
    const newTaskDate = document.getElementById("newTaskDate");
    const dateTime = Date.parse(newTaskDate.value + ":00");
  
    if (inputIsValid(newTask.value)) {
      tasks.innerHTML += `<li class = "list-group-item">${newTask.value} - ${new Date(dateTime)}</li>`;
      newTask.value = "";
      newTaskDate.value = "";
      messageElement.style.visibility = "hidden";
    } else {
      displayMessage("Please provide a task!"); // display warning if want to submit empty box
    }
  }

function displayMessage(message) {
  messageElement.innerText = message;
  messageElement.style.visibility = "visible";
}

function inputIsValid(input) {
  if (input) {
    return true;
  }
  return false;
}

function clearList() {
  const taskList = tasks.getElementsByClassName("list-group-item");
  while (taskList.length > 0) {
    taskList[0].parentNode.removeChild(taskList[0]);
  }
  displayMessage(statusMessage);
}
