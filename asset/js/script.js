// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
    // var password = generatePassword();
    // var passwordText = document.querySelector("#password");
    // passwordText.value = password;
    passLength();

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

var passLength = function() {
    // Prompting user to enter the length of their desired password
    var length = window.prompt("Please enter the length of your password(Between 8 - 128 characaters)?");

    // Validating user input, ensuring password length is not empty and between 8 to 128 characters
    while (length === null || length === "" || length < 8 || length > 128) {
        length = window.prompt("Please enter the length of your password(Between 8 - 128 characaters)?");
    }
    return length;
}