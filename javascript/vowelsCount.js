function getCount(str) {
  var vowelsCount = 0;

  var string = str.toString();

  for (var i = 0; i <= string.length; i++) {
    if (string.charAt(i) == "a" || string.charAt(i) == "e" || string.charAt(i) == "i" || string.charAt(i) == "o" || string.charAt(i) == "u") {
      vowelsCount += 1;
    }
  }

  return vowelsCount;
}
console.log(getCount('abracadrbra'));
//
// console.log(getCount('a'));
// var string = "string";
//
// var s = string.split(" ");
// console.log(s);
//
// var str = "How are you doing today?";
// var res = str.split(" ");
// console.log(res);


function getCount1(str) {
  var vowelsCount = 0;
  var vowels = ["a", "e", "i", "o", "u"];

  for (var i = 0; i < str.length; i++) {
    for (var j = 0; j < vowels.length; j++) {
      if (str[i] === vowels[j]){
        vowelsCount++;
      }
    }
  }

  return vowelsCount++;
}
console.log(getCount1("abracadrbra"));
//4
