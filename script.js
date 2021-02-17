// utilizing document.querySelector to utlize the first element w| these selectors
var generateBtn = document.querySelector("#generate");
var criteriaFilter = document.querySelector("#criteria");
var passLengthField = document.querySelector("#pass-length");
var uppercaseCheckbox = document.querySelector("#check-upper");
var lowercaseCheckbox = document.querySelector("#check-lower");
var numberCheckbox = document.querySelector("#check-number");
var specialCheckbox = document.querySelector("#check-special");

// empty array called filters that can be utilized for my character types 
var filters = [];

var isFiltersShowing = false;

// using const vs var so they can be accessed globally but not reassigned
const lowercaseCharacters = "abcdefghijklmnopqrztuvwxyz";
const uppercaseCharacters = "ABCDEFGHIJKLMNOPQRZTUVWXYZ";
const numberCharacters    = "0123456789";
const specialCharacters   = "!@#$%^&*()";

// made array to access all characters from listed arrays
var allCharacterArrays = [
  lowercaseCharacters, 
  uppercaseCharacters, 
  numberCharacters, 
  specialCharacters
]

// function reads from a given array one random character
function getRandomCharacterFromArray (array) {
  var randomIndex = Math.floor(Math.random() * array.length);
  return array[randomIndex]
}

// function takes joined character arrays and returns a random array
function getRandomArray () {
  var randomIndex = Math.floor(Math.random() * allCharacterArrays.length);
  return allCharacterArrays[randomIndex]
}

// function using for loop to check the filters and produce password
function generatePassword() {
  var finalPassword = ""
  var passwordLength = passLengthField.value
  // removes one of each character in filter type to ensure inclusion in final password
  for (i = 0; i < passwordLength - filters.length; i++) {
    var characterType = filters[Math.floor(Math.random() * filters.length)];
    switch (characterType) {
      case "lower":
        finalPassword += getRandomCharacterFromArray (lowercaseCharacters);
        break;
      case "upper":
        finalPassword += getRandomCharacterFromArray (uppercaseCharacters);
        break;
      case "number":
        finalPassword += getRandomCharacterFromArray (numberCharacters);
        break;
      case "special":
        finalPassword += getRandomCharacterFromArray (specialCharacters);
        break;
    }
  }

  // replaces character in each filter type if included 
  if (filters.includes("lower")) {
    finalPassword += getRandomCharacterFromArray (lowercaseCharacters);
  }
  if (filters.includes("upper")) {
    finalPassword += getRandomCharacterFromArray (uppercaseCharacters);
  }
  if (filters.includes("number")) {
    finalPassword += getRandomCharacterFromArray (numberCharacters);
  }
  if (filters.includes("special")) {
    finalPassword += getRandomCharacterFromArray (specialCharacters);
  }

  return finalPassword;
}

// checking to see if password criteria is met before producting password
function formFieldsAreValid () {
  var passwordLength = passLengthField.value
  var passwordLengthIsValid = passwordLength >= 8 && passwordLength <= 128
  var filtersAreSelected = filters.length > 0
  if (!passwordLengthIsValid) {
    alert("Not Valid! Please select character length between 8 and 128!")
  }
  if (!filtersAreSelected) {
    alert("Not Valid! Please select character type!")
  }
  return passwordLengthIsValid && filtersAreSelected
}

// function allow generate button to show filters or produce password
function generateButtonClicked() {
  if (isFiltersShowing) {
    var criteriaIsValid = formFieldsAreValid()

    if (criteriaIsValid) {
      var password = generatePassword();
      var passwordText = document.querySelector("#password");
      passwordText.value = password;
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
lowercaseCheckbox.addEventListener("click", updateCheckboxFilter);
numberCheckbox.addEventListener("click", updateCheckboxFilter);
specialCheckbox.addEventListener("click", updateCheckboxFilter);