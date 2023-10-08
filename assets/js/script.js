// Assignment Code
var generateBtn = document.querySelector("#generate");

// value strings
var lowercase = 'abcdefghijklmnoprstuvwxyz';
var uppercase = 'ABCDEFGHIJKLMNOPRSTUVWXYZ';
var number = '0123456789';
var specialCharacter = '!#$%&()*+,-./:;<=>?@[^_`{|}~';

// Write password to the #password input


function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function generatePassword () {
  // criteria picks
  const chooseLength = parseInt(document.querySelector('.choose-length').value);
  const chooseUppercase = (document.querySelector('.uppercase').checked);
  const chooseLowercase = (document.querySelector('.lowercase').checked);
  const chooseNumbers = (document.querySelector('.numbers').checked);
  const chooseSpecialchar = (document.querySelector('.special-characters').checked);
 
  // adds chosen criteria to password
  let passwordCriteria = '';
  if (chooseLowercase) {
   passwordCriteria += lowercase;
   }
   if (chooseUppercase) {
     passwordCriteria += uppercase;
   }
   if (chooseNumbers) {
     passwordCriteria += number;
   }
   if (chooseSpecialchar) {
     passwordCriteria += specialCharacter;
   }
   
  //chooses how many characters based on user input
   let password = '';
   for (let i = 0; i < chooseLength; i++) {
     const randomPassword = Math.floor(Math.random() * passwordCriteria.length);
     password += passwordCriteria.charAt(randomPassword);
   }
   return password
  }