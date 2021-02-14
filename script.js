// Assignment Code
var generateBtn = document.querySelector("#generate");

function getRandomLowercaseLetter () {
  var letters = "abcdefghijklmnopqrztuvwxyz";
  var randomIndex = Math.floor(Math.random() * letters.length);
  return letters[randomIndex]
}

function getRandomNumber () {
  var numbers = "0123456789";
  var randomIndex = Math.floor(Math.random() * numbers.length);
  return numbers[randomIndex]
}

function generatePassword() {
  var result =""
  var passwordLength = 8

  for (i = 0; i < passwordLength; i++) {
    // result += getRandomLowercaseLetter()
    result += getRandomNumber()
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