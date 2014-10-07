
// Grab the HTML element whose ID attribute is set to 'clickMe'
var clickMe = document.getElementById("clickMe");

/*
 * Add an Event Listener to the clickMe HTML element.
 * When the element is clicked, execute the popupModal function.
 */ 
clickMe.addEventListener("click", popupModal);

/*
 * Popup Modal function.
 * Parameter: eve  - event paramenter automatically passed into functions that are
 * executed as parameters in the addEventListener method 
 */
function popupModal(eve) {

	// Create a HTML Div element
	var transparentScreen = document.createElement("div"),
		modal = document.createElement("p"); // Create a HTML paragraph element

	/*
	 * rmScreen function
	 * Removes the transparent screen.
	 */
	function rmScreen(eve) {
		// Grab HTML element whose ID is set to modal
		var modal = document.getElementById("modal");

		// Remove modal HTML element from the DOM
		modal.remove();

		// Remove the element that received the event from the DOM
		eve.target.remove();

	} 

	// Ad an ID attribute on the modal and set its value to 'modal' (e.g. id="modal" )
	modal.setAttribute("id", "modal");

	// Add text to the modal
	modal.innerText = "Hello World";

	// Sdd a class attribute to the transparent screent and set its value to 'transScreen'
	transparentScreen.setAttribute("class", "transScreen");

	// When the transparent screen is clicked, execute the rmScreen function on it.
	transparentScreen.addEventListener('click', rmScreen);

	// Append the transparent screen to the DOM
	document.body.appendChild(transparentScreen);

	// Append the Modal to the DOM
	document.body.appendChild(modal);

}