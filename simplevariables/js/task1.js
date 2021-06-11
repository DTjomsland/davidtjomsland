// Portoflio Assignment Task 1
/*Create a special calculator that read a number from the user, checks that it is an integer and performs a series of mathematical calculations as listed:
calculates the number's factorial. A factorial is the product of an integer and all the integers below it; e.g., the factorial of 4 is equal to 24 (4 * 3 * 2 * 1).
Calculate the square and cube of the number. A number squared is a number that is multiplied by itself; e.g., 22 is equal to 4 (2 * 2). A number cubed is a number that is multiplied by itself twice e.g., 23 is equal to 8 (2 * 2 * 2). 
*/

// Function called when the form is submitted.
// Function performs the calculations and returns false.
function calculate(){
		'use strict';

		// For storing the factorial, squared and cubed results:
		var factorial;
		var squared;
		var cubed;
	

		
		
		
		  // Get references to the form value:
		let num = document.getElementById('number').value;
		  
		  // Add validation here later!
	
		 // Calculate the factorial results:
		 //HINT: the factorial of 0 is 1.
		var value = 1
		if (num == 0 || num == 1){
			factorial = 1;	
		}
		else{
			for(var i = 1; i<num; i++) {
				value *= i;
				factorial = num * value;
		} 
	}
			
	
			  
		 // Calculate the squared results:
		if (num == 0){
		 	squared = 0;
			}
		else{
			for(i = num; i >= 1; i--) {
				squared = num * num;
		
			}
		}	
		
	
	
		 
		 
		  // Calculate the cubed results:
		if (num == 0){
			cubed = 0;
		   }
	  	 else{
		   for(i = num; i >= 1; i--) {
			   cubed = num * num * num;
			   
		   }
	   }
		  
		  
		  
		  //display factorial, squared and cubed results
		  document.getElementById('factorial').value = factorial;
		  document.getElementById('squared').value = squared;
		  document.getElementById('cubed').value = cubed;
		  
	// Return false to prevent submission:
	return false; 
	
}// End of calculate() function.

// Function called when the window has been loaded.
// Function needs to add an event listener to the form.
function init(){
    // Add an event listener to the form:
    document.getElementById('theForm').onsubmit = calculate;

}  // End of init() function.
window.onload = init;

