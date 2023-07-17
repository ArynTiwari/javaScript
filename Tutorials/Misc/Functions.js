/**
 * 1.Declaration is done using function _name_ (){}
 * It executes after invoking
 * Parameters behave as local variables
 * Functions help to acomplish DRY(Dont repeat yourself)
 * 2. Function expressions(storing funcions in variables)
 * 3. Arrow Functions
 * 4. Hoisting works only in function declaration
 * 5. Functions inside functions
 * 6. Lexical Scope
 * 7. Default Value
 * 8. Rest Parameters
 * 9. Param Destructuring
 * 10.Callback Functions
 */
/**
 * Declaration
 */
// function isEvenOrOdd(a) {
//   return a % 2 == 0;
// }
// console.log(isEvenOrOdd(1));
/**
 *  function expressions
 */
// let sum = function (a, b) {
//   return a + b;
// };
// console.log(sum(5, 5));
/**
 * Arrow Functions
 */
/**
 * Hoisting
 * Only works in function declaration.
 */
// console.log(nam(10));
// function nam(a) {
//   return a;
// }

/**
 * Functions inside Functions
 */
// const myFunc = () => {
//   console.log("Hello from myFunc");
//   const newMyFunc = () => {
//     console.log("Hello From newMyFunc");
//   };
//   newMyFunc();
// };
// myFunc();

/**
 * Lexical Scope
 * Pehle apne scope me check krega, agar nhi mila to lexical envirnment me
 * search krega, i.e uske upar ke scope pe
 * let and const are block sope and var is function scope
 */
// const a = 10;
// const myFunc = () => {
//   console.log(a);
//   const newMyFunc = () => {
//     let a = Number.MAX_SAFE_INTEGER;
//     console.log(a);
//   };
//   newMyFunc();
// };
// myFunc();

/**
 * Default Value
 */
// const sum = (a, b = 0) => {
//   return a + b;
// };
// console.log(sum(5, 10));

/**
 * Rest Parameters
 */

// const sumAll = (...a) => {
//   let sum = 0;
//   for (const i of a) {
//     sum += i;
//   }
//   return sum;
// };
// console.log(sumAll(5, 10, 15, 10, 20));
/**
 * Parameter Destructuring
 */

// const person = {
//   name_: "Aryan",
//   age: 21,
//   add: {
//     street: "Kydganj",
//   },
// };
// function printDetails({ name_: nam, age, add: { street: str } }) {
//   console.log(nam, age, str);
// }
// printDetails(person);
// const user = {
//   id: 339,
//   name: "Fred",
//   age: 42,
// };
// const { education: { school: { name } = {} } = {} } = user;
// console.log(name); //prints: Dunno

/**
 * Callback Functions
 */
// let nam = "Aru";

// function myFunc(a) {
//   console.log("Inside myFunc");
//   a(nam);
// }
// let a = (nam) => {
//   console.log(`Inside A,your name is ${nam}`);
// };
// myFunc(a);
// Create an Array
// const myNumbers = [4, 1, -20, -7, 5, 9, -6];

// // Call removeNeg with a callback
// const posNumbers = removeNeg(myNumbers, (x) => x >= 0);

// // Display Result
// console.log(posNumbers);

// // Keep only positive numbers
// function removeNeg(numbers, callback) {
//   const myArray = [];
//   for (const x of numbers) {
//     if (callback(x)) {
//       myArray.push(x);
//     }
//   }
//   return myArray;
// }

/**
 * Function Returning Function
 */
function myFunc() {
  return () => {
    console.log("Hello");
  };
}
const ans = myFunc();
ans();
