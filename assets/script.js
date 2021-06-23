// Assignment Code
var generateBtn = document.querySelector("#generate");

// Function to generate a random pwd
function generatePassword() {
  // Array to add values to
  var pwdArray = [];
  // Arrays with values
  var lwrCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  var uprCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  var numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
  var specChar = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "+", "-", ".", "`", "~", "|", "<", ">", "=", "-", "_"]

  // Beginning of prompt
  var length = window.prompt("Enter the amount of characters to be in the passoword: ", "min: 8 max: 128");
  if (length > 8 && length < 128) {
    let req = window.alert("Include lowercase letters?");
      if(req == true) {
        
      }
  } else {
    window.alert("Invald length entered");
  }
};

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
