var submitSymbol = document.getElementById('submit-symbol');
var userName = document.getElementById('username'); 
var password = document.getElementById('password');
var loginForm = document.getElementById('login-form');
var formFilled = false;
var keyCode = null;

function areInputFieldsFilled() {
	if (userName.value != "" && password.value != ""){
		return true;
	}
	return false;
}

function validFormData() {
	if (userName.value.length < 1 || userName.value.length > 15) { //min-max length test
		alert('Please ensure that your username is 1 to 15 characters long');
		return false;
	}
	if (/[^a-zA-Z0-9_]/g.test(userName.value)){ //underscore-alphanumberic username test
		alert('Please ensure that your username consists of alphabets, numbers or underscores');
		return false;		
	}
	return true;
}

function checkFormStatus(event) {
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
	if (formFilled == true && keyCode == 13 && validFormData()){
		loginForm.submit();
		console.log("|SUCCESS| Form submitted");			
	}
}