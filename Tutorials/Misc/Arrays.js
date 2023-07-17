//reference type data type
/*
    all reference types are called objects
*/
const fruits = ["apple", "banana", "mango", "kiwi", "orange"];
//pop push
// let newArray = fruits.toString();
// console.log(newArray);
// shift and unshift

/*
 * Un shift will add in front
 * Shift will remove from front and return the removed element
 */
// fruits.unshift("Kela");
// console.log(fruits);
// fruits.shift();
// console.log(fruits);
/**
 * Primitives vs Reference types
 * Primitive ke lie alag se memory assign hoti hai(deep copy)
 * Reference type same memory ko refer krta hai(shallow copy)
 * Therefor,any change in primitive is not reflected whereas in Reference is reflected
 */
// let num1 = 1;
// let nums2 = num1;
// num1 += 1;
// console.log(num1, nums2);
// let fruits2 = fruits;
// fruits.unshift("kela");
// console.log(fruits2);
// fruits2.shift();
// console.log(fruits);

/**
 * Clone and concatenate
 */

// //clone
// let a2 = fruits.slice(0);
// // fruits.unshift("xyz");
// let a3 = ["hello1","this",...fruits].concat(a2);
// a3.unshift("hello")
// // console.log(a2);
// // console.log(fruits);
// console.log(a3);

/**
 * Loops in Array
 */
//for
// for (let index = 0; index < fruits.length; index++) {
//     console.log(fruits[index])
// }
//for-of
// for (let i of fruits) {
//   console.log(i);
// }
//for-in
// for (i in fruits) {
//   console.log(fruits[i]);
// }
/**
 * Destructuring of Arrays
 */

// let [var1, myvar, ...newFruits] = fruits;
// console.log(var1);
// console.log(newFruits);
// Online Javascript Editor for free
// Write, Edit and Run your Javascript code using JS Online Compiler

console.log("Welcome to Programiz!");
const arr = [2, 7, 11, 4, -2];
let sum = 0;
sum = arr.reduce((a, b) => {
  return a + b;
});
let newArr = arr.map((i) => {
  return sum - i;
});
console.log(sum, newArr);
