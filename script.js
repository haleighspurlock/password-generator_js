// Assignment Code
var generateBtn = document.querySelector("#generate");
var passLengthField = document.querySelector("#pass-length");
var uppercaseCheckbox = document.querySelector("#check-upper");
var lowercaseCheckebox = document.querySelector("#check-lower");
var numberCheckbox = document.querySelector("#check-number");
var specialCheckebox = document.querySelector("#check-special");

var filters = [];

const lowercaseCharacters = "abcdefghijklmnopqrztuvwxyz";
const uppercaseCharacters = "ABCDEFGHIJKLMNOPQRZTUVWXYZ";
const numberCharacters    = "0123456789";
const specialCharacters   = "!@#$%^&*()";

function getRandomLowercaseLetter () {
  var randomIndex = Math.floor(Math.random() * lowercaseCharacters.length);
  return lowercaseCharacters[randomIndex]
}

function getRandomUppercaseLetter () {
  var randomIndex = Math.floor(Math.random() * uppercaseCharacters.length);
  return uppercaseCharacters[randomIndex]
}

function getRandomNumber () {
  var randomIndex = Math.floor(Math.random() * numberCharacters.length);
  return numberCharacters[randomIndex]
}

function getRandomSpecialCharacter () {
  var randomIndex = Math.floor(Math.random() * specialCharacters.length);
  return specialCharacters[randomIndex]
}

function generatePassword() {
  var result =""
  var passwordLength = passLengthField.value

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

function updateCheckboxFilter (props) {
  if (props.target.checked) {
    filters.push(props.target.name)
  }
  else {
    var index = filters.indexOf(props.target.name);
    if (index > -1) {
      filters.splice(index, 1);
    }
  }
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
uppercaseCheckbox.addEventListener("click", updateCheckboxFilter);
lowercaseCheckebox.addEventListener("click", updateCheckboxFilter);
numberCheckbox.addEventListener("click", updateCheckboxFilter);
specialCheckebox.addEventListener("click", updateCheckboxFilter);