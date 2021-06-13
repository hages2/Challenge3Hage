// Assignment code here

//Prompts for password criteria: 
//length (at least 8 and no more than 128 characters)
var characterLength = window.prompt("How many characters would you like your password to contain?")
if (characterLength < 8) {
  alert("Your password must be at least 8 charcters long.")
} else if (characterLength > 128) {
  alert("Your password cannot be longer than 128 characters.")
} else {
  writePassword()
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;

}

function generatePassword() {

  //character types (say whether or not to include)- lowercase, uppercase, numeric, and/or special characters
  var characterLower = window.confirm("Click OK to confirm lowercase characters.")
  var characterUpper = window.confirm("Click OK to confirm uppercase characters.")
  var characterNumeric = window.confirm("Click OK to confirm including numeric characters.")
  var characterSpecial = window.confirm("Click OK to confirm including special characters.")

  //Random password array
  var finalPassword = ""

  //Define the characters of the password
  var characterTypes = [
    "abcdefghijklmnopqrstuvwxyz", //characterTypes[0]
    "ABCDEFHGIJKLMNOPQRSTUVWXYZ", //characterTypes[1]
    "0123456789", //characterTypes[2]
    "!@#$%^&*()_-=+[]{}" //characterTypes[3]
  ]

  var characterTypesAllowed = []
  if (characterLower)
    characterTypesAllowed.push(0)
  if (characterUpper)
    characterTypesAllowed.push(1)
  if (characterNumeric)
    characterTypesAllowed.push(2)
  if (characterSpecial)
    characterTypesAllowed.push(3)

  console.log(characterTypesAllowed)
  //Random number generator
  for (var i = 0; i < characterLength; i++) {
    var allowedNumber = characterTypesAllowed[Math.floor(Math.random() * characterTypesAllowed.length)]
    var currentCharacterType = characterTypes[allowedNumber]
    console.log(currentCharacterType)

    //now we actually pick the character
    var randomCharacter = currentCharacterType[Math.floor(Math.random() * currentCharacterType.length)]
    console.log(randomCharacter)
    //push character to final password
    finalPassword = finalPassword + randomCharacter

  }
  return finalPassword
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);