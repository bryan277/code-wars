function minMax(arr){
  //min
  let min = arr[0];
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i]
    }
  }
  //max
  let max = arr[0];
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i]
    }
  }
  return [min,max]; 
}


console.log(minMax([1,2,3,4,5]));
console.log(minMax([2334454,5]));
// [ 1, 5 ]
// [ 5, 2334454 ]
