// Assignment Code
var generateBtn = document.querySelector("#generate");

// Function to generate a random pwd
function generatePassword() {

  // Variables that select values
  let ranChar;

  // Array to add values to
  let finalpwd = [];
  let pwdArray = [];
  let startingArray = [];
  let ranArray = [];

  // Arrays with values
  var lwrCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  var uprCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  var numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
  var specChar = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "+", "-", ".", "`", "~", "|", "<", ">", "=", "-", "_"]

  // Beginning of prompt
  var length = prompt("Enter the amount of characters to be in the passoword: ", "min: 8 max: 128");
  if (length >= 8 && length <= 128) {
    length--;
    let input = confirm("Include lowercase letters?");

      // If statements to add to ranArray based on input
      if(input === true) {
        ranArray = ranArray.concat(lwrCase);
        var q1 = true;
      }
    input = confirm("Include uppercase letters?");
      if(input === true) {
        ranArray = ranArray.concat(uprCase);
        var q2 = true;
      }
    input = confirm("Include numbers?");
      if(input === true) {
        ranArray = ranArray.concat(numbers);
        var q3 = true;
      }
    input = confirm("Include special characters?");
      if(input === true) {
        ranArray = ranArray.concat(specChar);
        var q4 = true;
      }

      // Beginning of pwd generation
      // Start with making sure all criteria is used
      if(q1 === true) {
        length--;
        ranChar = lwrCase[Math.floor(Math.random() * lwrCase.length)];
        startingArray.splice(0, 0, ranChar);
      }
      if(q2 === true) {
        length--;
        ranChar = uprCase[Math.floor(Math.random() * uprCase.length)];
        startingArray.splice(0, 0, ranChar);
      }
      if(q3 === true) {
        length--;
        ranChar = numbers[Math.floor(Math.random() * numbers.length)];
        startingArray.splice(0, 0, ranChar);
      }
      if(q4 === true) {
        length--;
        ranChar = specChar[Math.floor(Math.random() * specChar.length)];
        startingArray.splice(0, 0, ranChar);
      }

      pwdArray = pwdArray.concat(startingArray);

      // Adding values based on length entered
      for(let i = 0; i <= length; i++) {
        ranChar = ranArray[Math.floor(Math.random() * ranArray.length)];
        pwdArray.splice(0, 0, ranChar);
      } 

      finalpwd = pwdArray.join("")

      // Shows generated password
      return finalpwd;

  // Output if invald length entered.
  } else {
    alert("Invald length entered");
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
