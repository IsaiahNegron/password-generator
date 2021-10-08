// variables ready to go

var chosenCharacters = '';
var upper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var lower = 'abcdefghijklmnopqrstuvwxyz';
var num = '1234567890';
var symbols = '~`! @#$%^&*()_-+={[}]|\:;<,>.?/';

var generateBtn = document.querySelector("#generate");

//length criteria function
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

//uppercase letter function 
function uCaseCriteria() {
  var upperCase = window.prompt("Would you like uppercase letters in your password? (type yes or no)");
  if (upperCase === 'yes'){
    alert("gotcha!");
    chosenCharacters = chosenCharacters.concat(upper);
    return chosenCharacters;
  }
  if (upperCase === 'no'){
    alert("We wont add that in there!");
    return chosenCharacters;
  }
  else {
    alert("please choose an option!")
    return uCaseCriteria ();
  }
};
  
//lower case letter criteria function
function lCaseCriteria() {
  var lowerCase = window.prompt("Would you like lowercase letters in your password? (type yes or no)");
  if (lowerCase === 'yes'){
    alert("I'll add it in!");
    chosenCharacters = chosenCharacters.concat(lower);
    return chosenCharacters;
  }
  if (lowerCase === 'no'){
    alert("Sure thing!");
    return chosenCharacters;
  }
  else {
    alert("Please pick yes or no!")
    return lCaseCriteria ();
  }
};
  
//number criteria function
function numCriteria() {
  var numbers = window.prompt("Would you like to include numbers in your new password? (type yes or no)");
  if (numbers === 'yes'){
    alert("Gotta love those numbers!");
    chosenCharacters = chosenCharacters.concat(num);
    return chosenCharacters;
  }
  if (numbers === 'no'){
    alert("Numbers aint for everyone!");
    return chosenCharacters;
  }
  else {
    alert("please select an option!")
    return numCriteria ();
  }
};
  
//symbol criteria function
function symbCriteria() {
  var symbSelect = window.prompt("Shall I add symbols to your new password? (type yes or no)");
  if (symbSelect === 'yes'){
    alert("I'll add it in!");
    chosenCharacters = chosenCharacters.concat(symbols);
    return chosenCharacters;
  }
  if (symbSelect === 'no'){
    alert("Copy That, Over and Out!");
    return chosenCharacters;
  }
  else {
    alert("Come on! Its a yes or no question!")
    return symbCriteria ();
  }
};

function generatePassword() {

  //makes sure everything is clear

  chosenCharacters = '';

//runs the prompt functions
  var passwordLength = lengthCriteria();
  uCaseCriteria();
  lCaseCriteria();
  numCriteria();
  symbCriteria();

  //check to make sure selections were made and were not left blank
  if (!chosenCharacters){
    alert("Bro! Do it right the first time and we wouldn't have this problem!");
    return generatePassword();
  }

  //run the loop through the password to create a unique password for the user
  var newPassword = '';

  for (var i = 0; i < passwordLength; i++){
    newPassword = newPassword + chosenCharacters.charAt(Math.floor(Math.random() * chosenCharacters.length));
  }
  return newPassword;
};


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
