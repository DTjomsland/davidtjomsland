// task.js
// This script manages a to-do list.

// Need a global variable:
var tasks = []; 

// Function called when the form is submitted.
// Function adds a task to the global array.
function addTask() {
    'use strict';

    // Get the task:
    var task = document.getElementById('task');

    // Reference to where the output goes:
    var output = document.getElementById('output');
    
    if (task.value) {
    
        // Add the item to the array:
        tasks[tasks.length] = task;
        
        // Update the page:
        var message = ['You have', tasks.length, 'task(s) in your to-do list.'];
		if (output.textContent !== undefined) {
			output.textContent = message.join(" ");
		} else {
			output.innerText = message;
		}
        document.getElementById("task").value = "";
        
    } // End of task.value IF.

    // Return false to prevent submission:
    return false;
    
} // End of addTask() function.

// Initial setup:
function init() {
    'use strict';
    document.getElementById('theForm').onsubmit = addTask;
} // End of init() function.
window.onload = init;