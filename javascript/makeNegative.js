//In this simple assignment you are given a number and have to make it negative. But maybe the number is already negative?
//Example:
// makeNegative(1); // return -1
// makeNegative(-5); // return -5
// makeNegative(0); // return 0

function makeNegative(num) {
  return -Math.abs(num)
}
//Math.abs() The Math.abs() in Javascript is used to return the absolute value of a number. It takes a number as its parameter and returns its absolute value
//Input: Math.abs(-4)
//Output: 4
console.log(Math.abs(-4))
//4



console.log(makeNegative(1))
console.log(makeNegative(-5))
console.log(makeNegative(0))
//-1
//-5
//-0

//other solutions
function makeNegative1(num){
  if (num > 0) {
    return -num;
  }
  else {
    return num;
  }
}

console.log(makeNegative1(9))
//-9i
