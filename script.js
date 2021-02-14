// Assignment Code
var generateBtn = document.querySelector("#generate");
var letters = "abcdefghijklmnopqrztuvwxyz";

function generatePassword() {
  var randomValue = Math.floor(Math.random() * letters.length);
  return letters[randomValue];
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