// Get elements
const input = document.getElementById("todo-input");
const addBtn = document.getElementById("add-task");
const list = document.getElementById("task-list");
const search = document.getElementById("search-input");


// Respond when the addBtn is clicked
addBtn.addEventListener("click", () => {
  const task = input.value.trim();

  if (task === "") {
    alert("Task cannot be empty!");
    return;
  }

  // Creating a container div for the task
  const taskItem = document.createElement("div");
  taskItem.className = "flex justify-between items-center bg-gray-200 px-4 py-2 rounded";

  // Creating a paragraph element for the task text
  const taskText = document.createElement("p");
  taskText.textContent = task;

  // Create a delete button
  const delBtn = document.createElement("button");
  delBtn.textContent = "❌";
  delBtn.className = "bg-red-200 text-white px-3 py-1 rounded hover:bg-red-100 transition";

  // Attach a delete functionality to delBtn
  delBtn.addEventListener("click", () => {
    taskItem.remove();
  });

  // Put everything together
  taskItem.appendChild(taskText);
  taskItem.appendChild(delBtn);
  list.appendChild(taskItem);

  // Clear input field
  input.value = "";

});

// Adding a Search functionality. Respond when any key is pressed on the keyboard
search.addEventListener("input", () => {
  const query = search.value.toLowerCase();

  const tasks = document.querySelectorAll("#task-list div");

  tasks.forEach(task => {
    const text = task.querySelector("p").textContent.toLowerCase();

    if (text.includes(query)) {
      task.style.display = "flex"; // Show the task that matches the input query
    }
    
    else {
      task.style.display = "none"; // Hide it
    }

  });
  
});
