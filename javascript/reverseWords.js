function reverseWords(str) {
  // Go for it
  let complete = []
  let stuff = str.split(' ')
  console.log(stuff)
  // [ 'This', 'is', 'an', 'example' ]
  for (var i = 0; i < stuff.length; i++) {
    // console.log(stuff[i].split(''))
    // [ 'T', 'h', 'i', 's' ]
    // [ 'i', 's' ]
    // [ 'a', 'n' ]
    // [ 'e', 'x', 'a', 'm', 'p', 'l', 'e' ]
    console.log(stuff[i].split('').reverse().join(''))
    // sihT
    // si
    // na
    // elpmaxe
    complete.push(stuff[i].split('').reverse().join(''))
  }
  return complete.join(' ')
}
console.log(reverseWords("This is an example"));
// sihT si na elpmaxe

// function reverseWords(str) {
//   // Go for it
//   //split words into seperate arrays
//   return str.split("").reverse().join("").split(" ").reverse().join(" ");
// }
