/**
 * forEach
 * map
 * filter
 * reduce
 * sort
 * find
 * every
 * some
 * fill
 * splice
 */
const arr = [4, 1, 2, 3, 5, 8, 7, 9, 6];
/**
 * forEach,takes an input as callback,it does not create a new array
 */
// arr.forEach((element, index) => {
//   arr[index] = arr[index] * 2;
// });

// console.log(arr);

/**
 * Map function,takes a callback as an input.
 * Creates a new array.
 * We must return value or undefined will be stored in the new array
 */
// const users = [{ user: "Aryan" }, { user: "Naman" }, { user: "Shruti" }];
// const newArray = users.map((user) => {
//   return user.user;
// });
// console.log(newArray);

/**
 * Filter method
 * callback should return true or false
 * returns a new array
 */
// const newArray = arr.filter((i) => {
//   return i > 2;
// });
// console.log(newArray);

/**
 * Reduce Method
 * returns a single value
 */
// const sum = arr.reduce((accumulator, currentValue) => {
//   console.log(accumulator, currentValue);
//   return Math.min(accumulator, currentValue);
// });
// console.log(sum);
/**
 * Sort method
 * It mutates the original array,we can use slice to get a new array
 * JS array element ko string(ACII) samaj ke sort krta hai
 * String ko disctionary Format me sort krta hai
 *
 *
 */
// arr.sort((a, b) => b - a);
// console.log(arr);

/**
 * Find Method
 * first occurence ko return krta hai
 */
// console.log(
//   arr.find((i) => {
//     return i === 2;
//   })
// );
const users = [
  { userId: 1, userName: "Aryu" },
  { userId: 2, userName: "Shru" },
  { userId: 3, userName: "Naman" },
  { userId: 4, userName: "Anay" },
];
// console.log(
//   users.find((user) => {
//     return user.userId === 2;
//   })
// );

/**
 * Every method
 * returns boolean, if each element satifies the callback condition
 */
// let a = users.every((user) => {
//   return user.userId < 5;
// });
// console.log(a);

/**
 * Fill method
 * fill(value,start,end)
 */
// let newArray = new Array(10).fill(0);
// console.log(newArray);

/**
 * Splice
 * start,delete,insert
 * It mutates the original array
 * array ke beech me kuch insert krna ho ya delete krna ho to use hota hai
 */
// arr.splice(1, 0, "Item inserted");
// console.log(arr);
//insert and delete together
arr.splice(1, 2, "item1", "item2");
console.log(arr);
