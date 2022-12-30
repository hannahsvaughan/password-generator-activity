// Assignment Code
var generateBtn = document.querySelector("#generate");

var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "t", "u", "v", "w", "x", "y", "z"]
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
var upperCase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', , 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var specialCharacters = ['@', '%', '+', '/', '\'', '!', '#', '$', '^', '?', ':', ',', ')', '(', '}', '{', ']', '[', '~', '-', '_', '.'];



//After the button is clicked, need a series of prompts for password criteria
//First prompt - length between 8 and 128
//Need four confirms - one for each: lowercase, uppercase, numeric, and/or special characters
//Need a way to check that I at least chose one character type

function passwordCriteria() {

    var passwordLength = parseInt(prompt("Please choose a password length, must be between 8 and 128 characters long"))
    while (isNaN(passwordLength)) {
        alert('Please type a number!')
        passwordLength = parseInt(prompt("Please choose a password length, must be between 8 and 128 characters long"))
    }
    while (passwordLength < 8 || passwordLength > 128) {
        alert('Please type a number between 8 and 128!')
        passwordLength = parseInt(prompt("Please choose a password length, must be between 8 and 128 characters long"))
    }


    var includeLowerCase = confirm("Do you want lower case letters in your password?")
    var includeUpperCase = confirm("Do you want upper case letters in your password?")
    var includeNumericCharacters = confirm("Do you want numeric characters in your password?")
    var includeSpecialCharacters = confirm("Do you want special characters in your password?")

    while (includeLowerCase === false &&
        includeUpperCase === false &&
        includeNumericCharacters === false &&
        includeSpecialCharacters === false) {
        alert("Must choose at least one character type to include");
        var includeLowerCase = confirm("Do you want lower case letters in your password?")
        var includeUpperCase = confirm("Do you want upper case letters in your password?")
        var includeNumericCharacters = confirm("Do you want numeric characters in your password?")
        var includeSpecialCharacters = confirm("Do you want special characters in your password?")
    }

    var chosenOptions = {
        length: passwordLength,
        includeLowerCase: includeLowerCase,
        includeUpperCase: includeUpperCase,
        includeNumericCharacters: includeNumericCharacters,
        includeSpecialCharacters: includeSpecialCharacters
    };
    return chosenOptions;
}
function randomNumber(arr) {
    var randomIndex = Math.floor(Math.random() * arr.length);
    var randomElement = arr[randomIndex];
    //arr will be replaced with our call back - example: randomNumber(lowerCase). Will replace all instances of arr with lowerCase array
    return randomElement;
}
function generatePassword() {
    var options = passwordCriteria();
    // var finalPassword = [];
    var initialArray = [];
    var middleArray = [];
    // if (!options) {
    //     return null;
    // }

    if (options.includeLowerCase) {
        initialArray = initialArray.concat(lowerCase);
    }
    if (options.includeUpperCase) {
        initialArray = initialArray.concat(upperCase);
    }
    if (options.includeNumericCharacters) {
        initialArray = initialArray.concat(numericCharacters);
    }
    if (options.includeSpecialCharacters) {
        initialArray = initialArray.concat(specialCharacters);
    }

    for (var i = 0; i < options.length; i++) {
        middleArray.push(randomNumber(initialArray));
    }

    console.log(middleArray.join(""))
    return middleArray.join("");
}


// Write password to the #password input
function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");

    passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);