var submitSymbol = document.getElementById('submit-symbol');
var inputFields = document.getElementsByTagName('input');
var formFilled = false;
var keyCode = null;

function areInputFieldsFilled() {
	if (inputFields[0].value != "" && inputFields[1].value != ""){
		return true;
	}
	return false;
}

function checkFormStatus(event){
	keyCode = event.which || event.keyCode; //event.which used to support Firefox browser compatibility,
	if (areInputFieldsFilled() && window.getComputedStyle(submitSymbol).getPropertyValue('left') != "0px"){ //Returned value in pixels
		console.log("here");
		console.log(window.getComputedStyle(submitSymbol).getPropertyValue('left'));
		submitSymbol.style.color = "rgba(200, 200, 200, 0.9)";
		submitSymbol.style.left = "0rem";
		formFilled = true; 
	}
	if (!areInputFieldsFilled() && window.getComputedStyle(submitSymbol).getPropertyValue('left') != "3rem"){ //Using known limitation
		submitSymbol.style.color = "rgba(200, 200, 200, 0)";
		submitSymbol.style.left = "3rem";
		formFilled = false; 		
	}
	if (formFilled == true && keyCode == 13){
		alert("route to server selection page");		
	}
}