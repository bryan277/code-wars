function minMax(arr){
  var max = arr[0], min = arr[0];
  for(var i=0; i<arr.length; i++) {
    if(arr[i]>max) max = arr[i];
    if(arr[i]<min) min = arr[i];
  }
  return [min,max];
}

console.log(minMax([1,2,3,4,5]));
console.log(minMax([2334454,5]));
