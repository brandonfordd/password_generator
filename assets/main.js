// All keys in a objects to be called on later, left as const so it cant be overwritten
const key_strings = {
  lowercase: `abcdefghijklmnopqrstuvwxyz`,
  uppercase: `ABCDEFGHIJKLMNOPQRSTUVWXYZ`,
  number: `0123456789`,
  symbol: "!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~",
};

// Main function to get password keys in random, fitting the length 
function generatePassword() {

  //user input prompt to get password length. The parseInt changes the prompt into a integer to be stored as var length
  let length = parseInt(
    prompt(`Enter a number from 8 to 128 for password length`)
  );

  // Conditional statement to check if password length is a number. If not function stops
  if (!length) {
    alert('Password length must be a number, Please restart');
    return;
  }  

  // Conditional statement to check if password length is at least 8 characters long or no longer than 128 characters. If not function restarts
  if (length < 8 || length > 128) {
    alert('Password length must be 8 to 128 characters');
    return;
  }

  // String for Keys that are chosen after confirm, above function to be called on
  let passwordKeys = ""  

  //if statement stating that if the lowercase boolean is true from the confirm window, that to add lowercase letters to the passwordKeys string from the key_strings. Otherwise confirm is skipped and not added to passwordKeys
  let lowercase = window.confirm("Would you like to use lowercase letters?");
  if (lowercase) {
    passwordKeys += key_strings.lowercase;
  }  

  //if statement stating that if the uppercase boolean is true from the confirm window, that to add uppercase letters to the passwordKeys string from the key_strings. Otherwise confirm is skipped and not added to passwordKeys
  let uppercase = window.confirm("Would you like to use uppercase letters?");
  if (uppercase) {
    passwordKeys += key_strings.uppercase;
  }  

  //if statement stating that if the symbols boolean is true from the confirm window, that to add symbols to the passwordKeys string from the key_strings. Otherwise confirm is skipped and not added to passwordKeys
  let symbols = window.confirm("Would you like to use symbols?");
  if (symbols) {
    passwordKeys += key_strings.symbol;
  }  

  //if statement stating that if the numbers boolean is true from the confirm window, that to add numbers to the passwordKeys string from the key_strings. Otherwise confirm is skipped and not added to passwordKeys
  let numbers = window.confirm("Would you like to use numbers?");
  if (numbers) {
    passwordKeys += key_strings.number;
  }  

  //To ensure function works and puts out string of all options
  //console.log(passwordKeys);
  
  // New variable to store a condensed version of passwordKeys based on the length variable set early in the code
  let passwordText = ""  

  // log to show code for getting a single item from the passwordKeys string. 
  //console.log( passwordText += passwordKeys[Math.floor(Math.random() * passwordKeys.length)]  

  //for loop to fill the length requirement with passwordKeys until its filled, when finished it returns the full value of passwordText to be displayed for value
  for (let i = 0; i < length; i++) {
    passwordText += passwordKeys[Math.floor(Math.random() * passwordKeys.length)]
  }
  
  //Calling to new var to be the outcome of function
  return passwordText;

}


// Get references to the #generate element
let generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  let password = generatePassword();
  let passwordText = document.querySelector('#password');

  passwordText.value = password;
  return;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);


// function for dark mode button
const toggleSwitch = document.querySelector('.theme-switch input[type="checkbox"]');

function switchTheme(e) {

  if (e.target.checked) {
    document.documentElement.setAttribute('data-theme', 'dark');
  }
  else {
    document.documentElement.setAttribute('data-theme', 'light');
  }

}
//Event listener for the switch to change themes once false
toggleSwitch.addEventListener('change', switchTheme, false);
