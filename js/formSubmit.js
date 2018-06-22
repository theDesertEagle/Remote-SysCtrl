var submitSymbol = document.getElementById('submit-symbol');
var inputFields = document.getElementsByTagName('input'); 
function areInputFieldsFilled() {
	if (inputFields[0].value != "" && inputFields[1].value != ""){
		return true;
	}
	return false;
}

function checkFormValidity(){
	if (areInputFieldsFilled() && window.getComputedStyle(submitSymbol).getPropertyValue('left') != "0"){
		console.log("here");
		submitSymbol.style.color = "rgba(200, 200, 200, 0.9)";
		submitSymbol.style.left = "0"; 
	}
	if (!areInputFieldsFilled() && window.getComputedStyle(submitSymbol).getPropertyValue('left') != "3rem"){
		submitSymbol.style.color = "rgba(200, 200, 200, 0)";
		submitSymbol.style.left = "3rem"; 		
	}
}