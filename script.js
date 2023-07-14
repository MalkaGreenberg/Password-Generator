// Assignment Code
var generateBtn = document.querySelector("#generate");

var upper;
var lower;
var nums;
var special;
var size;

var generatePassword = function() {
  
  var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var lowerCase = "abcdefghijklmnopqrstuvwxyz";
  var numbers = "0123456789";
  var specialCharacters = "!@#$%^&*_+-=''<>?,./|`~";
  var passwordArray = [];
  var criteria = "";
  var userInput = [upper, lower, nums, special];
  var chars = [upperCase, lowerCase, numbers, specialCharacters];
  var error = "";

  for (var i = 0; i < userInput.length; i++) { 
    if (userInput[i]) {
      criteria = criteria.concat(chars[i]);
    }
  }

  if (criteria == ""){
    error = "Please choose at least one option.";
    return error;
  }
  if (size >= 8 && size <= 128){
    length = size;
  }else{
    error = "Please choose a password length between 8 and 128.";
    return error;
  }
//use this for loop to generate the password.
  for (var i =0; i < size; i++){
    var randomNum = Math.random()*criteria.length;
    passwordArray[i] = criteria.slice(randomNum, randomNum + 1);
  }

  // turns the array into a string and then returns it. 
  var password = passwordArray.join('');
  return password;
}

function prompts(){
  upper = confirm("Password wil include uppercase letters.");
  lower = confirm("Password wil include lowercase letters.");
  nums = confirm("Password wil include numbers.");
  special = confirm("Password wil include special characters.");
  size = prompt("What length do you want the password to be? (min 8, max 128)");
}




// Write password to the #password input
function writePassword() {


  var thePassword = generatePassword();

  console.log(thePassword); //to see the password in the console.

  var passwordText = document.querySelector("#password");
  
  passwordText.setAttribute("style","color:#8B008B; border: 2px solid #8B008B;");

  passwordText.value = thePassword;

}

// Add event listener to generate button
generateBtn.addEventListener("click", prompts );
generateBtn.addEventListener("click", writePassword);

