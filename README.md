# Password Generator Starter Code
Generate another example without "const", "let", "parseInt", "while" , "isNan" with the following criteria
GIVEN I need a new, secure password
WHEN I click the button to generate a password
THEN I am presented with a series of prompts for password criteria
WHEN prompted for password criteria
THEN I select which criteria to include in the password
WHEN prompted for the length of the password
THEN I choose a length of at least 8 characters and no more than 128 characters
WHEN asked for character types to include in the password
THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
WHEN I answer each prompt
THEN my input should be validated and at least one character type should be selected
WHEN all prompts are answered
THEN a password is generated that matches the selected criteria
WHEN the password is generated
THEN the password is either displayed in an alert or written to the page

with starter script.js as following
// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


" !#$%&'()*+,-./:;<=>?@[\]^_`{|}~"

Suggusted
function generatePassword() {
  // Define character sets for each type
  var lowercaseChars = "abcdefghijklmnopqrstuvwxyz" ;
  var uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ" ;
  var numericChars = "0123456789" ;
  var specialChars = " !#$%&'()*+,-./:;<=>?@[\]^_`{|}~" ;

  // Prompt for password length
  var passwordLength = window.prompt('Enter the password length (between 8 and 128 characters):');

  // Validate the password length
  if (!passwordLength >= 8 && !passwordLength <= 128) {
    alert('Invalid input. Enter a valid password length (between 8 and 128 characters).');
    return;
  }

  // Prompt for character types
  var includeLowercase = confirm('Include lowercase characters?');
  var includeUppercase = confirm('Include uppercase characters?');
  var includeNumeric = confirm('Include numeric characters?');
  var includeSpecial = confirm('Include special characters?');

  // Validate that at least one character type is selected
  if (!(includeLowercase || includeUppercase || includeNumeric || includeSpecial)) {
    alert('Please select at least one character type.');
    return;
  }

  // Concatenate selected character sets
  var characters = '';
  if (includeLowercase) characters += lowercaseChars;
  if (includeUppercase) characters += uppercaseChars;
  if (includeNumeric) characters += numericChars;
  if (includeSpecial) characters += specialChars;

  // Generate password
  var password = '';
  for (var i = 0; i < passwordLength; i++) {
    var randomIndex = Math.floor(Math.random() * characters.length);
    password += characters.charAt(randomIndex);
  }

  // Display or write the generated password
  alert('Your secure password is: ' + password);

  // Return the generated password
  return password;
}

// Event listener for the button click
generateBtn.addEventListener('click', writePassword);
