/**
 * 1. JS is compiled first - 1.Token/Lexing,2.Parsing,3.Code generation
 * 2. Then it is executed
 * 3. Compilation is required due to early error check and proper
 *    scope allocation for variables(let,var,const)
 * 4. Second phae is the execution context
 *    The first exe context is known as global exection context
 * 5.
 */
// var a = 60;
// function superOuter() {
//   function outer(b) {
//     function inner() {
//       console.log(b, a);
//     }
//     a = 10;
//     return inner;
//   }
//   return outer;
// }
// superOuter()("Hello")();
// console.log(muFunction);
// var muFunction = function () {
//   console.log("Hello");
// };
// console.log(muFunction);
// muFunction();

/**
 * Function execution context
 * Jab koi function call krte hai to kya hota hai
 * Global executions context se function execution context me switch krte h
 * 1. Local memory Creation
 * 2. Code execution
 */
/**
 * Closures
 */

function printFullName() {
  let count = 0;
  function printName() {
    count++;
    count > 1 ? console.log("Already called") : console.log("Hey u called me ");
  }
  return printName;
  //printName apne sath firstName aur lastName ko le kr return hoga
  //aur inhe combined hoke kehte hai closure
}
const ans = printFullName();
ans();
ans();
ans();
const ans2 = printFullName();
ans2();
ans2();
