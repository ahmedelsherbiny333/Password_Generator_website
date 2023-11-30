// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

function generatePassword() {
  // Define character sets for each type
  var lowercaseChars = "abcdefghijklmnopqrstuvwxyz" ;
  var uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ" ;
  var numericChars = "0123456789" ;
  var specialChars = " !#$%&'()*+,-./:;<=>?@[\]^_`{|}~" ;

  // Prompt for password length
  var passwordLength = window.prompt('Enter the password length (between 8 and 128 characters):');

  // Validate the password length
  if (!(passwordLength >= 8 && passwordLength <= 128)) {
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
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

