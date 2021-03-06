console.log("Hello")

//window.prompt('Hello');

// Assignment Code
var generateBtn = document.querySelector("#generate");



// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var textArea = document.querySelector("#password");

  textArea.value = password;

}

// create generatePassword function
function generatePassword() {
  var password = '';

  var userLength = window.prompt('How many characters?(please pick a character length between 8-128)');

  // I added a while loop for validation
  while (userLength > 128 || userLength < 8) {
    userLength = window.prompt('Error! How many characters?(please pick a character length between 8-128)');
  }

  var containsLowercase = window.confirm("Do you want to include lowercase letters?");

  var containsUppercase = window.confirm("Do you want to include uppercase letters?");

  var containsNumeric = window.confirm("Do you want to include numbers?");

  var containsSpecialCharacter = window.confirm("Do you want to include special character?");

  /////////////

  const lowerCasePool = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];

  const upperCasePool = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];

  const numberPool = ['0', '1', '2', '3', '4','5','6','7','8','9'];

  const specialPool = ['!', '"', '#', '$', '%', '&', ')', '(', '*', '+', ',', '-', '.', '/', ':', ';', '<', '=', '>', '?', '@', '[',];

  var userPool = [];
//.concat is connecting two arrays together
  if (containsLowercase) {
    userPool = userPool.concat(lowerCasePool)
  }

  if (containsUppercase) {
    userPool = userPool.concat(upperCasePool)
  }

  if (containsNumeric) {
    userPool = userPool.concat(numberPool)
  }

  if (containsSpecialCharacter) {
    userPool = userPool.concat(specialPool)
  }

  for (var i = 0; i < userLength; i++) {
    var randomIndex = Math.floor((Math.random() * userPool.length));

    password = password + userPool[randomIndex]
  }


  return password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
