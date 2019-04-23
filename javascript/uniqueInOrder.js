var uniqueInOrder = function(iterable){
  let uniques = [];

  for (let i = 0; i < iterable.length; i++) {
    let curr = iterable[i];
    let next = iterable[i + 1];
    if (curr !== next) {
      uniques.push(curr);
    }
  }
  return uniques;
}

console.log(uniqueInOrder([1,1,2,2]));
// [1,2]

// uniqueInOrder('AAAABBBCCDAABBB') == ['A', 'B', 'C', 'D', 'A', 'B']
// uniqueInOrder('ABBCcAD')         == ['A', 'B', 'C', 'c', 'A', 'D']
// uniqueInOrder([1,2,2,3,3])       == [1,2,3]
