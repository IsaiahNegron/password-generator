// Assignment code here

// GIVEN I need a new, secure password
// WHEN I click the button to generate a password
// THEN I am presented with a series of prompts for password criteria
var newPassword = '';
var upper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var lower = 'abcdefghijklmnopqurstuvwxyz';
var num = '1234567890';
var symbols = '~`! @#$%^&*()_-+={[}]|\:;<,>.?/'

var generateBtn = document.querySelector("#generate");

//function generatePassword(){}

function lengthCriteria() {
  var passwordLength = window.prompt("How long do you want your password to be? (must be 8-128 characters");
  if (passwordLength > 128){
    alert("must be less than 128 characters!");
    return lengthCriteria();
  }
  if (passwordLength < 8){
    alert("must be greater than 8 characters!");
    return lengthCriteria();
  }
  else {
    alert("You selected " + passwordLength +" characters!");
    return passwordLength;
  }
};

function uCaseCriteria() {
  var upperCase = window.prompt("Would you like uppercase letters in your password? (type yes or no)");
  if (upperCase === 'yes'){
    alert("gotcha!");
    newPassword = newPassword.concat(upper);
    return newPassword;
  }
  if (upperCase === 'no'){
    alert("We wont add that in there!");
    return newPassword;
  }
  else {
    alert("please choose an option!")
    return uCaseCriteria ();
};




// WHEN asked for character types to include in the password
// THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters

// WHEN I answer each prompt
// THEN my input should be validated and at least one character type should be selected
// WHEN all prompts are answered

// THEN a password is generated that matches the selected criteria
// WHEN the password is generated
// THEN the password is either displayed in an alert or written to the page


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
