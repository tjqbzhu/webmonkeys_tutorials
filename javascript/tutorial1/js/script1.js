
var clickMe = document.getElementById("clickMe");


clickMe.addEventListener("click", popupModal);

function popupModal(eve) {

	var transparentScreen = document.createElement("div"),
		modal = document.createElement("p");

	
	function rmScreen(eve) {
		var modal = document.getElementById("modal");

		modal.remove();
		eve.target.remove();

	} 

	modal.setAttribute("id", "modal");
	modal.innerText = "Hello World";

	transparentScreen.setAttribute("class", "transScreen");
	transparentScreen.addEventListener('click', rmScreen);


	document.body.appendChild(modal);
	document.body.appendChild(transparentScreen);

}