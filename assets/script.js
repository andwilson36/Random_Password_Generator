// Assignment Code
var generateBtn = document.querySelector("#generate");

// Function to generate a random pwd
function generatePassword() {
  // Variables that select values
  let ranNum;
  let ranChar;
  // Array to add values to
  let pwdArray = [];
  let startingArray = [];
  let ranArray = [];
  // Arrays with values
  var lwrCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  var uprCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  var numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
  var specChar = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "+", "-", ".", "`", "~", "|", "<", ">", "=", "-", "_"]

  // Beginning of prompt
  var length = window.prompt("Enter the amount of characters to be in the passoword: ", "min: 8 max: 128");
  if (length > 8 && length < 128) {
    let input = window.alert("Include lowercase letters?");
      // If statements to add to ranArray based on input
      if(input === true) {
        ranArray = ranArray.concat(lwrCase);
        var q1 = true;
      }
      input = window.alert("Include uppercase letters?");
      if(input === true) {
        ranArray = ranArray.concat(uprCase);
        var q2 = true;
      }
      input = window.alert("Include numbers?");
      if(input === true) {
        ranArray = ranArray.concat(numbers);
        var q3 = true;
      }
      input = window.alert("Include special characters?");
      if(input === true) {
        ranArray = ranArray.concat(specChar);
        var q4 = true;
      }
      
      // Beginning of pwd generation
      // Start with making sure all criteria is used
      if(q1 === true) {
        length--;
        ranNum = Math.floor(Math.random() * 26);
        ranChar = lwrCase[ranNum];
        startingArray.splice(0, ranChar);
      }
      if(q2 === true) {
        length--;
        ranNum = Math.floor(Math.random() * 26);
        ranChar = uprCase[ranNum];
        startingArray.splice(0, ranChar);
      }
      if(q3 === true) {
        length--;
        ranNum = Math.floor(Math.random() * 10);
        ranChar = numbers[ranNum];
        startingArray.splice(0, ranChar);
      }
      if(q4 === true) {
        length--;
        ranNum = Math.floor(Math.random() * 21);
        ranChar = specChar[ranNum];
        startingArray.splice(0, ranChar);
      }

      pwdArray = pwdArray.concat(startingArray);

      // Adding values based on length entered
  // Output if invald length entered.
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
