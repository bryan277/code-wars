let vowelCount1 = (str) => {
  let countVowel = 0;
  let vowels = ["a", "e", "i", "o", "u"];

  for (let i = 0; i < str.length; i++) {
    for (let j = 0; j < vowels.length; j++) {
      if (str[i] === vowels[j]){
        countVowel++;
      }
    }
  }
  return countVowel++;
}

console.log(vowelCount1("adfjfiopniaefdsaiofnopwie"));
