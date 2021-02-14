// Assignment Code
var generateBtn = document.querySelector("#generate");
var filters = ["upper", "lower", "number", "special"];

function getRandomLowercaseLetter () {
  var letters = "abcdefghijklmnopqrztuvwxyz";
  var randomIndex = Math.floor(Math.random() * letters.length);
  return letters[randomIndex]
}

function getRandomUppercaseLetter () {
  var letters = "ABCDEFGHIJKLMNOPQRZTUVWXYZ";
  var randomIndex = Math.floor(Math.random() * letters.length);
  return letters[randomIndex]
}

function getRandomNumber () {
  var numbers = "0123456789";
  var randomIndex = Math.floor(Math.random() * numbers.length);
  return numbers[randomIndex]
}

function getRandomSpecialCharacter () {
  var specialCharacters = "!@#$%^&*()";
  var randomIndex = Math.floor(Math.random() * specialCharacters.length);
  return specialCharacters[randomIndex]
}

function generatePassword() {
  var result =""
  var passwordLength = 8

  for (i = 0; i < passwordLength; i++) {
    var characterType = filters[Math.floor(Math.random() * filters.length)];
    switch (characterType) {
      case "lower":
        result += getRandomLowercaseLetter();
        break;
      case "upper":
        result += getRandomUppercaseLetter();
        break;
      case "number":
        result += getRandomNumber();
        break;
      case "special":
        result += getRandomSpecialCharacter();
    }
  }
  return result;
}


// Write password to the #password input
function writePassword() {
  console.log("Write Password");
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);