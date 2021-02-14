// Assignment Code
var generateBtn = document.querySelector("#generate");
var letters = "abcdefghijklmnopqrztuvwxyz";

function generatePassword() {
  var result =""
  var passwordLength = 16

  for (i = 0; i < passwordLength; i++) {
    var randomValue = Math.floor(Math.random() * letters.length);
    result += letters[randomValue]
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