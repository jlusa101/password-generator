// Constants
const maxLength = 128;
const minLength = 8;


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

var passLength = function() {
    // Prompting user to enter the length of their desired password
    var length = window.prompt("Please enter the length of your password(Between 8 - 128 characaters)?");

    // Validating user input, ensuring password length is not empty and between 8 to 128 characters
    while (length === null || length === "" || length < minLength || length > maxLength) {
        length = window.prompt("Please enter the length of your password(Between 8 - 128 characaters)?");
    }
    return length;
};

// Function to prompt user if they wish to include lowercase characters
// Returns either true or false
var spcLower = function() {
    var incLower = window.confirm("Do you wish to include lowercase characters?");
    return incLower;
};
// Function to prompt user if they wish to include uppercase characters
// Returns either true or false
var spcUpper = function() {
    var incUpper = window.confirm("Do you wish to include uppercase characters?");
    return incUpper;
};
// Function to prompt user if they wish to include numeric characters
// Returns either true or false
var spcNum = function() {
    var incNum = window.confirm("Do you wish to include numeric values?");
    return incNum;
};
// Function to prompt user if they wish to include special characters
// Returns either true or false
var scpSpecial = function() {
    var incSpecial = window.confirm("Do you wish to include special characters?");
    return incSpecial;
};

var generatePassword = function() {
    var pass = "";
    var numSet = "0123456789";
    var lowerCharSet = "abcdefghijklmnopqrstuvwxyz";
    var upperCharSet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    var specialCharSet = "!@#$%^&*()_+~\\`|}{[]:;?><,./-=";
    var pLength = passLength();
    var pLower = spcLower();
    var pUpper = spcUpper();
    var pNum = spcNum();
    var pSpecial = scpSpecial();
    // for (var i = 1; i <= pLength; i++) {
    //     pass += charSet.charAt(Math.floor(Math.random() * charSet.length));
    // }

    // return pass;
}