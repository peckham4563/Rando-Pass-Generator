// Assignment code here
function passGen(len) {
var text = '';

for (var i = 0; i < len; i++)
{
let min = 8;
let max = 128;
console.log(Math.floor(Math.random() * (max - min + 1)) + min);

var charset = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ' + ' !"#$%&()*+,-./;:<>=?@{}[]^_`|~\'';

return text;
}

console.log(charset)
console.log(passGen(8))
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var passwordText = document.querySelector("#password");
  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);