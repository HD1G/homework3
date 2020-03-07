// Global Variables
var generateBtn = document.querySelector("#generate");
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowerCase = "abcdefghijklmnopqrstuvwxyz";
var specialChar ="~!@#$%^&*()";
var numbers = "0123456789";
var newPassword = "";
var passwordLength = true;
var newPasswordLength = true;
var password ="";

// Begins function by asking user questions to define the make-up of the password
function userPrompts() {
  var passwordLength = prompt("Select a password length between 8-128 characters");
  console.log(passwordLength);

  // Makes sure user input is between 8 -128 characters through if/else statement
  if (isNaN(passwordLength) || passwordLength < 8 || passwordLength > 128) {
    alert("Length must be between 8-128 characters!");
    return userPrompts();
  } else {
    // converts the string into a number
    newPasswordLength = parseInt(passwordLength);
  }
{
  //This section defines which selections will be included in the password
  var specialCharSelection = confirm("Click OK to confirm the use of special characters.");
      console.log(specialCharSelection);
          
      var upperCaseSelection = confirm("Click OK to confirm the use of uppercase letters");
      console.log(upperCaseSelection);
      
      var lowerCaseSelection = confirm("Click OK to confirm the use of lowercase letters");
      console.log(lowerCaseSelection);
      
      var numbersSelection = confirm("Click OK to confirm the use of numbers");
      console.log(numbersSelection);
  
      // if/else statement confirming at least 1 selection was made or alerts the user to
      // return and do so.
      if ((specialCharSelection === false) && (upperCaseSelection === false) && (lowerCaseSelection === false) && (numbersSelection === false)) {
          alert("You have to choose at least 1 option to continue!");
          return userPrompts();
      }

      //Creates a new array including the user's selections
      var selectionArray = [];
    console.log(selectionArray);
     
    // adds choices into the new selection array
    if (specialCharSelection === true) {
        selectionArray.push(specialChar);
        console.log(selectionArray);
  
    
    if (lowerCaseSelection === true) {
        selectionArray.push(lowerCase);
        console.log(selectionArray);
    }
    
    if (upperCaseSelection === true) {
        selectionArray.push(upperCase);
        console.log(selectionArray);
    }

    if (numbersSelection === true) {
        selectionArray.push(numbers);
        console.log(selectionArray);
    }    

    // logs the final password to the console and writes it to the password field 
    // on index.html (lines20-21)
    var finalPassword = generatePassword(selectionArray, passwordLength).join('');
    console.log(finalPassword);
    // writes password
    var passwordText = document.querySelector("#password");
    passwordText.value = finalPassword;
  
}

  // heavy "google-fu" here. Attempt to minimize use of if/else statements to 
  // reflect only the user selections and omit the unselected.
function generatePassword(selectionArray, passwordLength) {
    //create a new empty array for new password
    var newPassword = [];
    // .join to the rescue. Combines the choices user selects
    var userArray = selectionArray.join();
    console.log(userArray);
    // loop until user's selected length is reached.
    for (var i = 0, x = userArray.length; i < passwordLength; ++i) { 
        //random index out of the user's array and creates new password
        newPassword.push(userArray[(Math.floor(Math.random() * x))]);
    }
    return newPassword;    
}

  }
}
// Clears text field of previously generated password
function clearField() {
  document.getElementById("password").value ="";
}

