function accum(input) {
  // a place to store the result
  let result = '';
  // iterate over the string
  for (let i = 0; i < input.length; i++) {
    // append the current letter i+1 times to the string
    for (let j = 0; j < i + 1; j++) {
      // capitalize the first append
      if (j == 0) {
        result  += input[i].toUpperCase();
      } else {
        result += input[i].toLowerCase();
      }
    }
    // append a dash if it is not the last letter 
    if (i != input.length - 1) {
      result += '-';
     }
    }

    return result;
}

console.log(accum("abcd")); //-> "A-Bb-Ccc-Dddd"
// accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
// accum("cwAt") -> "C-Ww-Aaa-Tttt"
