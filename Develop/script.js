// Assignment code here

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
  }
};
  
function lCaseCriteria() {
  var lowerCase = window.prompt("Would you like uppercase letters in your password? (type yes or no)");
  if (lowerCase === 'yes'){
    alert("I'll add it in!");
    newPassword = newPassword.concat(lower);
    return newPassword;
  }
  if (lowerCase === 'no'){
    alert("Sure thing!");
    return newPassword;
  }
  else {
    alert("Please pick yes or no!")
    return lCaseCriteria ();
  }
};
  
function numCriteria() {
  var numbers = window.prompt("Would you like to include numbers in your new password? (type yes or no)");
  if (numbers === 'yes'){
    alert("Gotta love those numbers!");
    newPassword = newPassword.concat(num);
    return newPassword;
  }
  if (numbers === 'no'){
    alert("Numbers aint for everyone!");
    return newPassword;
  }
  else {
    alert("please select an option!")
    return numCriteria ();
  }
};
  
function symbCriteria() {
  var symbSelect = window.prompt("Shall I add symbols to your new password? (type yes or no)");
  if (symbSelect === 'yes'){
    alert("I'll add it in!");
    newPassword = newPassword.concat(symbols);
    return newPassword;
  }
  if (symbSelect === 'no'){
    alert("Copy That, Over and Out!");
    return newPassword;
  }
  else {
    alert("Come on! Its a yes or no question!")
    return symbCriteria ();
  }
};



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
