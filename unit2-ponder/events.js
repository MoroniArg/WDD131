// events.js
let tasks = [];

function renderTasks(tasks) {
  const taskList = document.getElementById('todoList'); 
  taskList.innerHTML = '';

  tasks.forEach(task => {
    const taskHTML = `
      <li ${task.completed ? 'class="strike"' : ''}>
        <p>${task.detail}</p>
        <div>
          <span data-function="delete">❎</span>
          <span data-function="complete">✅</span>
        </div>
      </li>
    `;

    taskList.insertAdjacentHTML('beforeend', taskHTML); // add the task HTML at the end of the list
  });
}

function newTask() {
    const todoInput = document.getElementById('todo').value;
    tasks.push({ detail: todoInput, completed: false });
    renderTasks(tasks);

}



function removeTask(taskElement) {
  // Note the use of Array.filter to remove the element from our task array
  // Notice also how we are using taskElement instead of document as our starting point?
  // This will restrict our search to the element instead of searching the whole document.
  tasks = tasks.filter(
    (task) => task.detail != taskElement.querySelector('p').innerText
  );

  // this line removes the HTML element from the DOM
  taskElement.remove();
}

function completeTask(taskElement) {
  // In this case we need to find the index of the task so we can modify it.
  const taskIndex = tasks.findIndex(
    (task) => task.detail === taskElement.childNodes[0].innerText
  );
  // once we have the index we can modify the complete field.
  // tasks[taskIndex].completed ? false : true is a ternary expression.
  // If the first part is true (left of the ?), then the value on the left of the : will get returned, otherwise the value on the right of the : will be returned.
  tasks[taskIndex].completed = tasks[taskIndex].completed ? false : true;
  // toggle adds a class if it is not there, removes it if it is.
  taskElement.classList.toggle("strike");
  console.log(tasks);
}

function manageTasks(event) {
  const clickedElement = event.target; // get the exact element clicked

  // We only care about clicks on the spans with data-function attribute
  if (!clickedElement.dataset.function) return;

  // Find the closest <li> parent element for the clicked icon
  const taskElement = clickedElement.closest('li');

  if (clickedElement.dataset.function === 'delete') {
    removeTask(taskElement);
  } else if (clickedElement.dataset.function === 'complete') {
    completeTask(taskElement);
  }
}


document.getElementById('submitTask').addEventListener('click', newTask);
document.getElementById('todoList').addEventListener('click', manageTasks);

// Add your event listeners here
// We need to attach listeners to the submit button and the list. Listen for a click, call the 'newTask' function on submit and call the 'manageTasks' function if either of the icons are clicked in the list of tasks.