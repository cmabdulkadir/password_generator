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
function generatePassword(){
  var password = '';

  var userLength = window.prompt('How many characters?(please pick a character length between 8-128)');

  while (userLength > 129 || userLength < 7) {
    userLength = window.prompt('Error! How many characters?(please pick a character length between 8-128)');
  }

  var containsLowercase = window.confirm("Do you want to include lowercase letters?");

  var containsUppercase = window.confirm("Do you want to include uppercase letters?");

  var containsNumeric = window.confirm("Do you want to include numbers?");

  var containsSpecialCharacter = window.confirm("Do you want to include special character?");

  /////////////

  const lowerCasePool = ['a', 'e', 'i', 'o', 'u'];

  const upperCasePool = ['A', 'E', 'I', 'O', 'U'];

  const numberPool = ['0', '1', '2', '3', '4'];

  const specialPool = ['!', '@', '#', '$', '%'];

  var userPool = [];

  if(containsLowercase) {
    userPool = userPool.concat(lowerCasePool)
  }

  if(containsUppercase) {
    userPool = userPool.concat(upperCasePool)
  }

  if(containsNumeric) {
    userPool = userPool.concat(numberPool)
  }

  if(containsSpecialCharacter) {
    userPool = userPool.concat(specialPool)
  }

  for(var i = 0; i < userLength; i++) {
    var randomIndex = Math.floor((Math.random()*userPool.length));

    password = password + userPool[randomIndex]
  }
  



  return password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
