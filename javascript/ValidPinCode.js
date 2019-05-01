//my try
function validatePIN (pin) {
  //return true or false
  // total = 0;
  // pin.split(" ");
  for (let i = 0; i <= pin.length; i++) {
    if (pin.length <= 4) {
      return true;
    } else {
      return false;
    }
}
}
console.log(validatePIN("1234"));
console.log(validatePIN("12345"));
console.log(validatePIN("a234"));
// validatePIN("1234") === true
// validatePIN("12345") === false
// validatePIN("a234") === false
