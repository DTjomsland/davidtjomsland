// - errorMessages.js
// This script defines functions for adding and removing error messages.

// This function adds the error message.
// It takes two arguments: the form element ID and the message.
// ID= First Name, MSG = Please Enter your first name.
function addErrorMessage(id, msg) {
   	'use strict';
    
    //Get first name text input elem=text input
    // Get the form element reference:
    var elem = document.getElementById(id);
    console.log(elem);
    // Define the new span's ID value:
    var newId = id + 'Error';
    
    // Check for the existence of the span:
    var span = document.getElementById(newId);
    if (span) {
        span.firstChild.value = msg; // Update
    } else { // Create new.
    
        // Create the span:
        span = document.createElement('span');
        span.id = newId;
		span.className = 'error'
        span.appendChild(document.createTextNode(msg));
        
        // Add the span to the parent:
        elem.parentNode.appendChild(span);
        elem.previousSibling.className = 'error';

    } // End of main IF-ELSE.

} // End of addErrorMessage() function.

// This function adds the valid message.
// It takes two arguments: the form element ID and the message.
function addValidMessage(id) {
    'use strict';
 
 //Get first name text input elem=text input
 // Get the form element reference:
 var elem = document.getElementById(id);
 console.log(elem);
 // Define the new span's ID value:
 var newId = id + 'valid';
 
 // Check for the existence of the span:
 var span = document.getElementById(newId);
 if (span) {
     span.firstChild.value = ''; // Update
 } else { // Create new.
 
     // Create the span:
     span = document.createElement('span');
     span.id = newId;
     span.className = 'valid checkmark';
     span.appendChild(document.createTextNode(' '));
     
     // Add the span to the parent:
     elem.parentNode.appendChild(span);
     elem.previousSibling.className = 'valid';

 } // End of main IF-ELSE.

} // End of addValidMessage() function.





// This function removes the error message.
// It takes one argument: the form element ID.
function removeErrorMessage(id) {
   	'use strict';

    // Get a reference to the span:
    var span = document.getElementById(id + 'Error');
	if (span) {
    
	    // Remove the class from the label:
	    span.previousSibling.previousSibling.className = null;
    
	    // Remove the span:
	    span.parentNode.removeChild(span);

	} // End of IF.
    
} // End of removeErrorMessage() function.


// This function removes the valid message.
// It takes one argument: the form element ID.
function removeValidMessage(id) {
    'use strict';

 // Get a reference to the span:
 var span = document.getElementById(id + 'valid');
 if (span) {
 
     // Remove the class from the label:
     span.previousSibling.previousSibling.className = null;
 
     // Remove the span:
     span.parentNode.removeChild(span);

 } // End of IF.
 
} // End of removeValidMessage() function.