// Access DOM elements 
const taskInput = document.getElementById("taskInput"); 
const addButton = document.getElementById("addBtn"); 
const taskList = document.getElementById("taskList"); 
const taskCount = document.getElementById("taskCount"); 
 
// Track tasks and counts 
let totalTasks = 0; 
let completedTasks = 0; 
const existingTasks = new Set(); // To prevent duplicates 
 
// Function to update task count display 
function updateTaskCount() { 
    taskCount.textContent = `Total Tasks: ${totalTasks}, Completed: ${completedTasks}`; 
} 
 
// Add task on button click 
addButton.addEventListener("click", function () { 
    const task = taskInput.value.trim(); 
 
    if (task !== "") { 
        if (existingTasks.has(task)) { 
            alert("Task already exists!"); 
            return; 
        } 
 
        // Create list item 
        const li = document.createElement("li"); 
 
        // Create checkbox for marking as completed 
        const checkbox = document.createElement("input"); 
        checkbox.type = "checkbox"; 
        checkbox.style.marginRight = "10px"; 
 
        // Create span for task text 
        const taskText = document.createElement("span"); 
        taskText.textContent = task; 
 
        // Create delete button 
        const deleteBtn = document.createElement("button"); 
        deleteBtn.textContent = "×"; 
        deleteBtn.className = "delete-btn"; 
 
        // Append elements to li (checkbox, text, delete button) 
        li.appendChild(checkbox); 
        li.appendChild(taskText); 
        li.appendChild(deleteBtn); 
        taskList.appendChild(li); 
 
        // Add to set and update counts 
        existingTasks.add(task); 
        totalTasks++; 
        updateTaskCount(); 
 
        // Clear input 
        taskInput.value = ""; 
 
        // Event listener for checkbox (mark as completed) 
        checkbox.addEventListener("change", function () { 
            if (checkbox.checked) { 
                taskText.classList.add("completed"); 
                completedTasks++; 
            } else { 
                taskText.classList.remove("completed"); 
                completedTasks--; 
            } 
            updateTaskCount(); 
        }); 
 
        // Event listener for deleting task 
        deleteBtn.addEventListener("click", function () { 
            taskList.removeChild(li); 
            existingTasks.delete(task); 
            totalTasks--; 
            if (checkbox.checked) { 
                completedTasks--; 
            } 
            updateTaskCount(); 
        }); 
    } else { 
        alert("Please enter a task"); 
    } 
}); 