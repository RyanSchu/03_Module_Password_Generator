function getCriteria() {
  let passLength=prompt("How long do you want your passcode to be? values 8-128 accepted.")
  passLength=Number(passLength)
  while( isNaN(passLength) | (passLength < 8 | passLength > 128)){
    passLength=prompt("Invalid answer. Please pick a number between 8 and 128")
    passLength=Number(passLength)
  }
  let lowerBool=confirm("Would you like to include lowercase characters? Okay for yes, cancel for no.")
  let upperBool=confirm("Would you like to include uppercase characters? Okay for yes, cancel for no.")
  let numericBool=confirm("Would you like to include numeric characters? Okay for yes, cancel for no.")
  let specialBool=confirm("Would you like to include special characters? Okay for yes, cancel for no.")
  while (!lowerBool & !upperBool & !numericBool & !specialBool) {
    alert("Please select at  least one character type")
    lowerBool=confirm("Would you like to include lowercase characters? Okay for yes, cancel for no.")
    upperBool=confirm("Would you like to include uppercase characters? Okay for yes, cancel for no.")
    numericBool=confirm("Would you like to include numeric characters? Okay for yes, cancel for no.")
    specialBool=confirm("Would you like to include special characters? Okay for yes, cancel for no.")  
  }
  let criteria = {
    length: passLength,
    upper: upperBool,
    lower: lowerBool,
    numeric: numericBool,
    special: specialBool,
  }
  return criteria
}


// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
