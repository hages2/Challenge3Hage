// Assignment code here

//Prompts for password criteria: 
//length (at least 8 and no more than 128 characters)
var characterLength = window.prompt("How many charcters do you need to include?")

//character types (say whether or not to include)- lowercase, uppercase, numeric, and/or special characters
var characterLower = window.confirm("Do you need to include a lowercase character?")
var characterUpper = window.confirm("Do you need to include an uppercase character?")
var characterNumeric = window.confirm("Do you need to include a numeric character?")
var characterSpecial = window.confirm("Do you need to include a special character?")
//Validate input and must select one character type

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);