// function deleteNth(arr, n){
//   var object = {};
//   var ansArr = [];
//
//   for(var i=0; i<arr.length; i++){
//     if(object[arr[i]]){
//       object[arr[i]] += 1;
//     }else{
//       object[arr[i]] = 1;
//     }
//     if(object[arr[i]] <= n){
//       ansArr.push(arr[i]);
//     }
//   }
//   return ansArr;
// }

// console.log(deleteNth ([1,1,1,1],2));
// console.log(deleteNth ([1,12,1,3,3,3,1,1,1,1],2));

// deleteNth ([1,1,1,1],2) // return [1,1]
//
// deleteNth ([20,37,20,21],1) // return [20,37,21]
// function deleteNth(arr,x) {
//   var cache = {};
//   return arr.filter(function(n) {
//     cache[n] = (cache[n]||0) + 1;
//     return cache[n] <= x;
//   });
// }
