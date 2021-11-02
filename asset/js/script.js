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

// Function that prompts the user for the length of their desired password
// Returns the length
var passLength = function() {
    var length = window.prompt("Please enter the length of your password. (Between 8 - 128 characaters)");

    // Validating user input, ensuring password length is not empty and between 8 to 128 characters
    while (length === null || length === "" || length < minLength || length > maxLength) {
        length = window.prompt("Please enter the length of your password. (Between 8 - 128 characaters)");
    }
    return length;
};

// Function to prompt user if they wish to include special characters
// Returns either true or false
var spcSpecial = function() {
    var incSpecial = window.confirm("Do you wish to include special characters?");
    return incSpecial;
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
    var incNum = window.confirm("Do you wish to include numeric characters?");
    return incNum;
};

// Function that generates a password based on the criteria the user inputted
// Returns the generated password
var generatePassword = function() {
    var pass = "";
    var charSet = "";
    // Array that holds the different character sets
    var sets = ["abcdefghijklmnopqrstuvwxyz",
        "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
        "0123456789",
        "!@#$%^&*()_+~\\`|}{[]:;?><,./-="
    ];
    // Array that is going to hold all user choices
    var userChoices = [];
    var pLength = passLength();
    var pLower = spcLower();
    var pUpper = spcUpper();
    var pNum = spcNum();
    var pSpecial = spcSpecial();

    // If user had not chosen any of the character choices
    while (!pLower && !pUpper && !pNum && !pSpecial) {
        window.alert("One option must be selected!");
        pLower = spcLower();
        pUpper = spcUpper();
        pNum = spcNum();
        pSpecial = spcSpecial();
    }

    // Pushing the user choices into an array
    userChoices.push(pLower);
    userChoices.push(pUpper);
    userChoices.push(pNum);
    userChoices.push(pSpecial);

    // Looping through the array to find which requirements user wants to implement
    for (var i = 0; i < userChoices.length; i++) {
        if (userChoices[i] == true) {
            charSet += sets[i];
        }
    }

    // Generating the password
    for (var j = 1; j <= pLength; j++) {
        pass += charSet.charAt(Math.floor(Math.random() * charSet.length));
    }
    return pass;
}