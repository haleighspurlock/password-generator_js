// utilizing document.querySelector to utlize the first element w| these selectors
var generateBtn = document.querySelector("#generate");
var criteriaFilter = document.querySelector("#criteria");
var passLengthField = document.querySelector("#pass-length");
var uppercaseCheckbox = document.querySelector("#check-upper");
var lowercaseCheckebox = document.querySelector("#check-lower");
var numberCheckbox = document.querySelector("#check-number");
var specialCheckebox = document.querySelector("#check-special");

// empty array called filters that can be utilized for my character types 
var filters = [];

var isFiltersShowing = false;

// using const vs var so they can be accessed globally but not reassigned
const lowercaseCharacters = "abcdefghijklmnopqrztuvwxyz";
const uppercaseCharacters = "ABCDEFGHIJKLMNOPQRZTUVWXYZ";
const numberCharacters    = "0123456789";
const specialCharacters   = "!@#$%^&*()";

// functions to randomize the consts declared above
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

// function using for loop to check the filters and produce password
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

// Click button first time
// Filter is showing
//   Criteria is valid
//     Print password
//   Criteria is invalid
//     Alert with critera needs
// Filter is not showing
//   Show filter

function formFieldsAreValid () {
  var passwordLength = passLengthField.value
  var criteriaIsValid = passwordLength >= 8 && passwordLength <= 128 

  return criteriaIsValid
}
// function allow generate button to show filters or produce password
function generateButtonClicked() {
  if (isFiltersShowing) {
    var criteriaIsValid = formFieldsAreValid()

    if (criteriaIsValid) {
      console.log("Write Password");
      var password = generatePassword();
      var passwordText = document.querySelector("#password");
      passwordText.value = password;
    }
    else {
      alert("Not Valid! Please select character length between 8 and 128!")
    }
  } else {
    console.log("Show Filters")
    criteriaFilter.style.display = "block"
    isFiltersShowing = true
  }
}

// updates checkboxes based on selection or not
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

// added eventListeners for all checkboxes so they update accordingly
generateBtn.addEventListener("click", generateButtonClicked);
uppercaseCheckbox.addEventListener("click", updateCheckboxFilter);
lowercaseCheckebox.addEventListener("click", updateCheckboxFilter);
numberCheckbox.addEventListener("click", updateCheckboxFilter);
specialCheckebox.addEventListener("click", updateCheckboxFilter);