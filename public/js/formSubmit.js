var submitSymbol = document.getElementById('submit-symbol');
var inputFields = document.getElementsByTagName('input');
var loginForm = document.getElementById('login-form');
var formFilled = false;
var keyCode = null;

function areInputFieldsFilled() {
	if (inputFields[0].value != "" && inputFields[1].value != ""){
		return true;
	}
	return false;
}

function checkFormStatus(event){
	console.log(event.target);

	keyCode = event.which || event.keyCode; //event.which used to support Firefox browser compatibility,
	if (areInputFieldsFilled() && window.getComputedStyle(submitSymbol).getPropertyValue('left') != "0px"){ //Returned value in pixels
		console.log("here");
		console.log(window.getComputedStyle(submitSymbol).getPropertyValue('left'));
		submitSymbol.style.color = "rgba(255, 109, 0, 0.9)";
		submitSymbol.style.textShadow = "rgba(48, 48, 48, 0.9) 0.5rem 0.5rem 1rem"
		submitSymbol.style.left = "0rem";
		formFilled = true; 
	}
	if (!areInputFieldsFilled() && window.getComputedStyle(submitSymbol).getPropertyValue('left') != "3rem"){ //Using known limitation
		submitSymbol.style.color = "rgba(200, 200, 200, 0)";
		submitSymbol.style.textShadow = "rgba(48, 48, 48, 0) 0 0 0rem"
		submitSymbol.style.left = "3rem";
		formFilled = false; 		
	}
	if (formFilled == true && keyCode == 13){
		loginForm.submit();
		console.log("|SUCCESS| Form submitted");			
	}
}