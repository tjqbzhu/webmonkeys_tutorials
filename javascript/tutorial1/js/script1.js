
var clickMe = document.getElementById("clickMe");


clickMe.addEventListener("click", popupModal);

function popupModal(eve) {

	var transparentScreen = document.createElement("div");
	transparentScreen.className = "transScreen";

	var modal = document.createElement("p");
	modal.className = "modal";
	modal.innerText = "Hello World";

	transparentScreen.addEventListener('click', rmScreen);

	function rmScreen(eve) {
		eve.target.style.display = "none";
	} 


	document.body.appendChild(modal);
	document.body.appendChild(transparentScreen);

}