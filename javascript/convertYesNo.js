// function boolToWord(bool) {
//   if bool === true {
//     return 'Yes'
//   } else if bool === false {
//     return 'No'
//   }
// }

//
// Test.assertEquals(boolToWord(true), 'Yes')
// Test.assertEquals(boolToWord(false), 'No')


const boolToWord = bool => bool ? console.log('Yes') : console.log('No');

boolToWord(true);


function boolToWord(bool) {
  if (bool) {
    return 'Yes';
  } else {
    return 'No';
  }
}

console.log(boolToWord(true));
//Yes
