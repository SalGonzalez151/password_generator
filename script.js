// Assignment Code
var generateBtn = document.querySelector("#generate");
var passwordlist = [];
var promptChoice = true;

// Array of special characters to be included in password
var specialCharacters = [
  '@', '%', '+', '\\', '/', "'", '!', '#', '$', '^', '?', ':', ',', ')', '(', '}', '{', ']', '[', '~', '-', '_', '.',
];
// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z',
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z',
];

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function generatePassword() {
  passwordlist = [];
  var passwordLength = prompt(" Please enter lenght of password between 8 and 126 characters")
  if (passwordLength < 8 || passwordLength > 126 || isNaN(passwordLength)) {
    alert("Please enter a number between 8 and 126 characters");
    return false
  }

  var useLowercase = confirm('Do you want to use lowercase letters?');
  var useUppercase = confirm('Do you want to use uppercase letters?');
  var useSpecialCharacters = confirm('Do you want to use special characters?');
  var useNumericCharacters = confirm('Do you want to use numeric characters?');


  if (useLowercase === false && 
      useUppercase === false &&
      useSpecialCharacters === false &&
      useNumericCharacters === false ) {
        alert('Please select one option for a password');
      }



}