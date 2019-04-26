function productFib(prod){
    let arr = [0, 1, 1];
    while (true) {
      let last = arr[arr.length - 1];
      let secondToLast = arr[arr.length -2];
      if (last * secondToLast === prod) {
        return [secondToLast, last, true];
      } else if (secondToLast * last > prod) {
        return [secondToLast, last, false]
      }
      arr.push(last + secondToLast);
  }
}
console.log(productFib(714));
// [ 21, 34, true ]
console.log(productFib(800));
// [ 34, 55, false ]

// let arr = [0, 1, 1];
// let fibN = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233];
// console.log(arr[arr.length - 1]);
// 1
// console.log(fibN[fibN.length - 1]);
// 233
// console.log(fibN[fibN.length - 2]);
// 144

// productFib(714) # should return [21, 34, true],
//                 # since F(8) = 21, F(9) = 34 and 714 = 21 * 34
//
// productFib(800) # should return [34, 55, false],
//                 # since F(8) = 21, F(9) = 34, F(10) = 55 and 21 * 34 < 800 < 34 * 55
//
// Notes: Not useful here but we can tell how to choose the number n
// up to which to go: we can use the "golden ratio" phi
// which is (1 + sqrt(5))/2 knowing that F(n) is asymptotic to:
// phi^n / sqrt(5). That gives a possible upper bound to n.

// increment for loop
// let total = 0;
//
// for (let num = 1; num <= 100; num++) {
//   console.log(num);
//   total = total + num;
// }
//
// console.log("Total: " + total);

// decrement for loop
// let total = 0;
//
// for(let num = 10; num >= 0; num--) {
//   console.log(num);
//   total = total + num;
// }
//
// console.log(total);

// while loops
// var num = 0;
// let total = 0;
//
// while (num < 10) {
//   console.log(num);
//   num++;
//   total += num;
// }
//
// console.log(num);
// console.log(total);

// var total = 0;
// var num = 0;
//
// while (num < 11) {
//   total += num;
//   num++;
// }
//
// console.log(total);
