// Assignment Code
var generateBtn = document.querySelector("#generate");
var passLengthField = document.querySelector("#pass-length");
var uppercaseCheckbox = document.querySelector("#check-upper");
var lowercaseCheckebox = document.querySelector("#check-lower");
var filters = [];

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