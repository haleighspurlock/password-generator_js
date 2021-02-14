// Assignment Code
var generateBtn = document.querySelector("#generate");

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
    var characterType = Math.floor(Math.random() * 4);
    switch (characterType) {
      case 0:
        result += getRandomLowercaseLetter();
        break;
      case 1:
        result += getRandomUppercaseLetter();
        break;
      case 2:
        result += getRandomNumber();
        break;
      case 3:
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